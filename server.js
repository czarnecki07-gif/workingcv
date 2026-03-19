const express = require('express');
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const PDFDocument = require('pdfkit');
const Stripe = require('stripe');

const app = express();
const PORT = process.env.PORT || 3000;
const APP_URL = process.env.APP_URL || `http://localhost:${PORT}`;
const SESSION_SECRET = process.env.SESSION_SECRET || 'change-me-workingcv';
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || '';
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || '';
const stripe = STRIPE_SECRET_KEY ? new Stripe(STRIPE_SECRET_KEY) : null;

const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify({ users: [], projects: [] }, null, 2));
}

function readDb() {
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
}
function writeDb(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}
function uid(prefix='id') {
  return `${prefix}_${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}
function getUserSafe(user) {
  if (!user) return null;
  return { id: user.id, email: user.email, premium: !!user.premium, createdAt: user.createdAt };
}
function authRequired(req, res, next) {
  if (!req.session.userId) return res.status(401).json({ error: 'Unauthorized' });
  const db = readDb();
  const user = db.users.find(u => u.id === req.session.userId);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });
  req.user = user;
  next();
}

app.use('/api/stripe/webhook', express.raw({ type: 'application/json' }));
app.use(cookieParser());
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'lax', maxAge: 1000 * 60 * 60 * 24 * 14 }
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (req, res) => res.json({ ok: true }));
app.get('/api/me', (req, res) => {
  const db = readDb();
  const user = db.users.find(u => u.id === req.session.userId);
  res.json({ user: getUserSafe(user) });
});

app.post('/api/auth/register', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password || password.length < 6) {
    return res.status(400).json({ error: 'Email and password (min. 6 chars) are required.' });
  }
  const db = readDb();
  const existing = db.users.find(u => u.email.toLowerCase() === String(email).toLowerCase());
  if (existing) return res.status(400).json({ error: 'User already exists.' });
  const passwordHash = await bcrypt.hash(password, 10);
  const user = { id: uid('usr'), email: String(email).trim(), passwordHash, premium: false, createdAt: new Date().toISOString() };
  db.users.push(user);
  writeDb(db);
  req.session.userId = user.id;
  res.json({ user: getUserSafe(user) });
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const db = readDb();
  const user = db.users.find(u => u.email.toLowerCase() === String(email).toLowerCase());
  if (!user) return res.status(400).json({ error: 'Invalid credentials.' });
  const ok = await bcrypt.compare(String(password), user.passwordHash);
  if (!ok) return res.status(400).json({ error: 'Invalid credentials.' });
  req.session.userId = user.id;
  res.json({ user: getUserSafe(user) });
});

app.post('/api/auth/logout', (req, res) => {
  req.session.destroy(() => res.json({ ok: true }));
});

app.get('/api/projects', authRequired, (req, res) => {
  const db = readDb();
  const projects = db.projects.filter(p => p.userId === req.user.id).sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
  res.json({ projects });
});

app.post('/api/projects', authRequired, (req, res) => {
  const { id, type = 'cv', language = 'en', templateId = 'classic-free-1', title, data } = req.body;
  if (!data || typeof data !== 'object') return res.status(400).json({ error: 'Missing project data.' });
  const premiumTemplates = new Set(['elegant-1','elegant-2','elegant-3','elegant-4','elegant-5','elegant-6','cover-letter-pro']);
  if (premiumTemplates.has(templateId) && !req.user.premium) {
    return res.status(403).json({ error: 'Premium template locked.' });
  }
  const db = readDb();
  let project = db.projects.find(p => p.id === id && p.userId === req.user.id);
  const now = new Date().toISOString();
  if (project) {
    project.type = type;
    project.language = language;
    project.templateId = templateId;
    project.title = title || project.title || 'Untitled';
    project.data = data;
    project.updatedAt = now;
  } else {
    project = { id: uid('prj'), userId: req.user.id, type, language, templateId, title: title || 'Untitled', data, createdAt: now, updatedAt: now };
    db.projects.push(project);
  }
  writeDb(db);
  res.json({ project });
});

app.delete('/api/projects/:id', authRequired, (req, res) => {
  const db = readDb();
  const before = db.projects.length;
  db.projects = db.projects.filter(p => !(p.id === req.params.id && p.userId === req.user.id));
  writeDb(db);
  res.json({ ok: db.projects.length < before });
});

function renderCvPdf(doc, payload) {
  const { templateId = 'classic-free-1', data = {} } = payload;
  const name = data.fullName || 'Your Name';
  const role = data.jobTitle || 'Job Title';
  const colorMap = {
    'classic-free-1': '#111827',
    'classic-free-2': '#1f2937',
    'elegant-1': '#0f172a',
    'elegant-2': '#1e3a8a',
    'elegant-3': '#4c1d95',
    'elegant-4': '#14532d',
    'elegant-5': '#7c2d12',
    'elegant-6': '#374151',
  };
  const accent = colorMap[templateId] || '#111827';

  doc.rect(0,0,612,100).fill(accent);
  doc.fillColor('white').fontSize(26).text(name, 50, 38);
  doc.fontSize(13).text(role, 50, 68);

  let y = 130;
  doc.fillColor('#111827').fontSize(10);
  const contact = [data.email, data.phone, data.city].filter(Boolean).join(' • ');
  doc.text(contact, 50, y);
  y += 28;

  const section = (title, body) => {
    if (!body) return;
    doc.fillColor(accent).fontSize(13).text(title.toUpperCase(), 50, y);
    y += 18;
    doc.fillColor('#111827').fontSize(11).text(body, 50, y, { width: 512, align: 'left' });
    y = doc.y + 18;
  };

  section('Profile', data.summary || 'Professional summary goes here.');
  section('Experience', data.experience || 'Describe your experience here.');
  section('Education', data.education || 'Describe your education here.');
  section('Skills', data.skills || 'Add skills here.');
}

function renderLetterPdf(doc, payload) {
  const { data = {} } = payload;
  doc.fontSize(12).fillColor('#111827');
  doc.text(data.fullName || 'Your Name', 50, 50);
  doc.text([data.email, data.phone, data.city].filter(Boolean).join(' • '), 50, 68);
  doc.moveDown(2);
  doc.text(data.company || 'Company Name', 50, 120);
  doc.text(data.position || 'Position', 50, 138);
  doc.moveDown(2);
  doc.fontSize(12).text(data.letterBody || 'Cover letter content goes here.', 50, 190, { width: 512, align: 'left' });
}

app.post('/api/pdf', authRequired, (req, res) => {
  const payload = req.body || {};
  const premiumTemplates = new Set(['elegant-1','elegant-2','elegant-3','elegant-4','elegant-5','elegant-6','cover-letter-pro']);
  if (premiumTemplates.has(payload.templateId) && !req.user.premium) {
    return res.status(403).json({ error: 'Premium template locked.' });
  }

  const filename = `${payload.type === 'cover-letter' ? 'cover-letter' : 'cv'}.pdf`;
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  const doc = new PDFDocument({ size: 'A4', margin: 50 });
  doc.pipe(res);
  if (payload.type === 'cover-letter') renderLetterPdf(doc, payload);
  else renderCvPdf(doc, payload);
  doc.end();
});

app.post('/api/stripe/create-checkout-session', authRequired, async (req, res) => {
  if (!stripe) return res.status(400).json({ error: 'Stripe is not configured yet.' });
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: req.user.email,
      metadata: { userId: req.user.id },
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: 'WorkingCV Premium' },
          unit_amount: 1900,
        },
        quantity: 1,
      }],
      success_url: `${APP_URL}/?checkout=success`,
      cancel_url: `${APP_URL}/?checkout=cancel`,
    });
    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Stripe error' });
  }
});

app.post('/api/stripe/webhook', (req, res) => {
  if (!stripe || !STRIPE_WEBHOOK_SECRET) return res.status(400).send('Stripe webhook is not configured.');
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const sessionObj = event.data.object;
    const userId = sessionObj.metadata && sessionObj.metadata.userId;
    if (userId) {
      const db = readDb();
      const user = db.users.find(u => u.id === userId);
      if (user) {
        user.premium = true;
        user.premiumActivatedAt = new Date().toISOString();
        writeDb(db);
      }
    }
  }
  res.json({ received: true });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`WorkingCV app running on ${APP_URL}`);
});
