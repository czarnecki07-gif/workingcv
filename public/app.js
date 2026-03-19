const templates = [
  { id: 'classic-free-1', name: 'Classic Free I', premium: false },
  { id: 'classic-free-2', name: 'Classic Free II', premium: false },
  { id: 'elegant-1', name: 'Elegant Slate', premium: true },
  { id: 'elegant-2', name: 'Elegant Royal', premium: true },
  { id: 'elegant-3', name: 'Elegant Violet', premium: true },
  { id: 'elegant-4', name: 'Elegant Forest', premium: true },
  { id: 'elegant-5', name: 'Elegant Amber', premium: true },
  { id: 'elegant-6', name: 'Elegant Graphite', premium: true },
  { id: 'cover-letter-pro', name: 'Cover Letter Pro', premium: true, type: 'cover-letter' }
];

const i18n = {
  en: { login:'Login', register:'Create account', continue:'Continue', logout:'Logout', premium:'Premium', free:'Free', unlock:'Unlock Premium', save:'Save project', pdf:'Generate PDF', projects:'Saved projects', cv:'CV', letter:'Cover letter', fullName:'Full name', jobTitle:'Job title', email:'Email', phone:'Phone', city:'City', summary:'Profile', experience:'Experience', education:'Education', skills:'Skills', company:'Company', position:'Position', letterText:'Cover letter text' },
  pl: { login:'Zaloguj się', register:'Załóż konto', continue:'Dalej', logout:'Wyloguj', premium:'Premium', free:'Darmowy', unlock:'Odblokuj Premium', save:'Zapisz projekt', pdf:'Generuj PDF', projects:'Zapisane projekty', cv:'CV', letter:'List motywacyjny', fullName:'Imię i nazwisko', jobTitle:'Stanowisko', email:'E-mail', phone:'Telefon', city:'Miasto', summary:'Profil', experience:'Doświadczenie', education:'Edukacja', skills:'Umiejętności', company:'Firma', position:'Stanowisko', letterText:'Treść listu motywacyjnego' },
  de: { login:'Anmelden', register:'Konto erstellen', continue:'Weiter', logout:'Abmelden', premium:'Premium', free:'Kostenlos', unlock:'Premium freischalten', save:'Projekt speichern', pdf:'PDF erzeugen', projects:'Gespeicherte Projekte', cv:'Lebenslauf', letter:'Anschreiben', fullName:'Vollständiger Name', jobTitle:'Berufsbezeichnung', email:'E-Mail', phone:'Telefon', city:'Stadt', summary:'Profil', experience:'Erfahrung', education:'Ausbildung', skills:'Fähigkeiten', company:'Firma', position:'Position', letterText:'Anschreiben' },
  fr: { login:'Connexion', register:'Créer un compte', continue:'Continuer', logout:'Se déconnecter', premium:'Premium', free:'Gratuit', unlock:'Débloquer Premium', save:'Enregistrer le projet', pdf:'Générer le PDF', projects:'Projets enregistrés', cv:'CV', letter:'Lettre de motivation', fullName:'Nom complet', jobTitle:'Poste', email:'E-mail', phone:'Téléphone', city:'Ville', summary:'Profil', experience:'Expérience', education:'Formation', skills:'Compétences', company:'Entreprise', position:'Poste', letterText:'Texte de la lettre' },
  es: { login:'Iniciar sesión', register:'Crear cuenta', continue:'Continuar', logout:'Cerrar sesión', premium:'Premium', free:'Gratis', unlock:'Desbloquear Premium', save:'Guardar proyecto', pdf:'Generar PDF', projects:'Proyectos guardados', cv:'CV', letter:'Carta de presentación', fullName:'Nombre completo', jobTitle:'Puesto', email:'Correo', phone:'Teléfono', city:'Ciudad', summary:'Perfil', experience:'Experiencia', education:'Educación', skills:'Habilidades', company:'Empresa', position:'Puesto', letterText:'Texto de la carta' },
  it: { login:'Accedi', register:'Crea account', continue:'Continua', logout:'Esci', premium:'Premium', free:'Gratis', unlock:'Sblocca Premium', save:'Salva progetto', pdf:'Genera PDF', projects:'Progetti salvati', cv:'CV', letter:'Lettera di presentazione', fullName:'Nome completo', jobTitle:'Ruolo', email:'Email', phone:'Telefono', city:'Città', summary:'Profilo', experience:'Esperienza', education:'Formazione', skills:'Competenze', company:'Azienda', position:'Posizione', letterText:'Testo della lettera' },
  pt: { login:'Entrar', register:'Criar conta', continue:'Continuar', logout:'Sair', premium:'Premium', free:'Grátis', unlock:'Desbloquear Premium', save:'Salvar projeto', pdf:'Gerar PDF', projects:'Projetos salvos', cv:'CV', letter:'Carta de apresentação', fullName:'Nome completo', jobTitle:'Cargo', email:'E-mail', phone:'Telefone', city:'Cidade', summary:'Perfil', experience:'Experiência', education:'Educação', skills:'Competências', company:'Empresa', position:'Posição', letterText:'Texto da carta' },
  nl: { login:'Inloggen', register:'Account aanmaken', continue:'Doorgaan', logout:'Uitloggen', premium:'Premium', free:'Gratis', unlock:'Premium ontgrendelen', save:'Project opslaan', pdf:'PDF genereren', projects:'Opgeslagen projecten', cv:'CV', letter:'Motivatiebrief', fullName:'Volledige naam', jobTitle:'Functietitel', email:'E-mail', phone:'Telefoon', city:'Stad', summary:'Profiel', experience:'Ervaring', education:'Opleiding', skills:'Vaardigheden', company:'Bedrijf', position:'Positie', letterText:'Tekst motivatiebrief' },
  cs: { login:'Přihlášení', register:'Vytvořit účet', continue:'Pokračovat', logout:'Odhlásit', premium:'Premium', free:'Zdarma', unlock:'Odemknout Premium', save:'Uložit projekt', pdf:'Vygenerovat PDF', projects:'Uložené projekty', cv:'CV', letter:'Motivační dopis', fullName:'Celé jméno', jobTitle:'Pracovní pozice', email:'E-mail', phone:'Telefon', city:'Město', summary:'Profil', experience:'Zkušenosti', education:'Vzdělání', skills:'Dovednosti', company:'Firma', position:'Pozice', letterText:'Text dopisu' },
  uk: { login:'Увійти', register:'Створити акаунт', continue:'Продовжити', logout:'Вийти', premium:'Преміум', free:'Безкоштовно', unlock:'Розблокувати Premium', save:'Зберегти проєкт', pdf:'Створити PDF', projects:'Збережені проєкти', cv:'CV', letter:'Супровідний лист', fullName:'Повне імʼя', jobTitle:'Посада', email:'E-mail', phone:'Телефон', city:'Місто', summary:'Профіль', experience:'Досвід', education:'Освіта', skills:'Навички', company:'Компанія', position:'Посада', letterText:'Текст листа' }
};

const state = {
  user: null,
  mode: 'login',
  docType: 'cv',
  language: 'en',
  templateId: 'classic-free-1',
  currentProjectId: null,
};

const $ = (id) => document.getElementById(id);
const fields = ['fullName','jobTitle','contactEmail','phone','city','summary','experience','education','skills','company','position','letterBody'];

function toast(msg) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

async function api(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    credentials: 'same-origin',
    ...options,
  });
  const isPdf = res.headers.get('content-type')?.includes('application/pdf');
  if (isPdf) return res.blob();
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

function getFormData() {
  return {
    fullName: $('fullName').value,
    jobTitle: $('jobTitle').value,
    email: $('contactEmail').value,
    phone: $('phone').value,
    city: $('city').value,
    summary: $('summary').value,
    experience: $('experience').value,
    education: $('education').value,
    skills: $('skills').value,
    company: $('company').value,
    position: $('position').value,
    letterBody: $('letterBody').value,
  };
}

function setFormData(data = {}) {
  $('fullName').value = data.fullName || '';
  $('jobTitle').value = data.jobTitle || '';
  $('contactEmail').value = data.email || '';
  $('phone').value = data.phone || '';
  $('city').value = data.city || '';
  $('summary').value = data.summary || '';
  $('experience').value = data.experience || '';
  $('education').value = data.education || '';
  $('skills').value = data.skills || '';
  $('company').value = data.company || '';
  $('position').value = data.position || '';
  $('letterBody').value = data.letterBody || '';
  renderPreview();
}

function renderPreview() {
  const data = getFormData();
  $('pv-name').textContent = data.fullName || 'Your Name';
  $('pv-role').textContent = data.jobTitle || 'Job title';
  $('pv-contact').textContent = [data.email || 'email@example.com', data.phone || '+00 123 456', data.city || 'City'].join(' • ');
  $('pv-summary').textContent = data.summary || 'Professional summary preview.';
  $('pv-experience').textContent = data.experience || 'Experience preview.';
  $('pv-education').textContent = data.education || 'Education preview.';
  $('pv-skills').textContent = data.skills || 'Skills preview.';
  $('pv-company').textContent = data.company || 'Company name';
  $('pv-position').textContent = data.position || 'Position title';
  $('pv-letter').textContent = data.letterBody || 'Cover letter preview.';

  const premiumTemplate = templates.find(t => t.id === state.templateId)?.premium;
  const canUse = !premiumTemplate || state.user?.premium;
  $('preview-paper').style.outline = canUse ? 'none' : '3px dashed rgba(220, 38, 38, .35)';
}

function renderLanguageOptions() {
  const select = $('language');
  select.innerHTML = Object.keys(i18n).map(key => `<option value="${key}">${key.toUpperCase()}</option>`).join('');
  select.value = state.language;
}

function applyI18n() {
  const t = i18n[state.language];
  $('auth-title').textContent = state.mode === 'login' ? t.login : t.register;
  $('auth-submit').textContent = t.continue;
  $('auth-toggle').textContent = state.mode === 'login' ? t.register : t.login;
  $('buy-premium').textContent = t.unlock;
  $('logout-btn').textContent = t.logout;
  $('save-project').textContent = t.save;
  $('download-pdf').textContent = t.pdf;
  document.querySelector('[data-type="cv"]').textContent = t.cv;
  document.querySelector('[data-type="cover-letter"]').textContent = t.letter;
  $('lbl-fullName').textContent = t.fullName;
  $('lbl-jobTitle').textContent = t.jobTitle;
  $('lbl-email').textContent = t.email;
  $('lbl-phone').textContent = t.phone;
  $('lbl-city').textContent = t.city;
  $('lbl-summary').textContent = t.summary;
  $('lbl-experience').textContent = t.experience;
  $('lbl-education').textContent = t.education;
  $('lbl-skills').textContent = t.skills;
  $('lbl-company').textContent = t.company;
  $('lbl-position').textContent = t.position;
  $('lbl-letter').textContent = t.letterText;
  $('pv-summary-title').textContent = t.summary;
  $('pv-exp-title').textContent = t.experience;
  $('pv-edu-title').textContent = t.education;
  $('pv-skills-title').textContent = t.skills;
  $('pv-company-title').textContent = t.company;
  $('pv-position-title').textContent = t.position;
  $('pv-letter-title').textContent = t.letter;
}

function renderAuth() {
  const t = i18n[state.language];
  if (state.user) {
    $('auth-view').classList.add('hidden');
    $('user-view').classList.remove('hidden');
    $('user-email').textContent = state.user.email;
    $('premium-badge').textContent = state.user.premium ? t.premium : t.free;
    $('premium-badge').className = `badge ${state.user.premium ? 'premium' : ''}`;
  } else {
    $('auth-view').classList.remove('hidden');
    $('user-view').classList.add('hidden');
  }
}

function renderTemplates() {
  const box = $('templates');
  box.innerHTML = templates
    .filter(t => state.docType === 'cv' ? t.type !== 'cover-letter' : t.type === 'cover-letter')
    .map(t => {
      const locked = t.premium && !state.user?.premium;
      return `<div class="template-item ${state.templateId === t.id ? 'active' : ''}" data-template="${t.id}">
        <div class="template-title">${t.name}</div>
        <div class="template-meta">${t.premium ? 'Premium' : 'Free'}${locked ? ' • Locked' : ''}</div>
      </div>`;
    }).join('');

  box.querySelectorAll('.template-item').forEach(el => {
    el.addEventListener('click', () => {
      const chosen = el.dataset.template;
      const tpl = templates.find(t => t.id === chosen);
      if (tpl.premium && !state.user?.premium) {
        toast('Premium template locked');
        return;
      }
      state.templateId = chosen;
      renderTemplates();
      renderPreview();
    });
  });
}

function updateDocTypeUI() {
  document.querySelectorAll('.tab').forEach(btn => btn.classList.toggle('active', btn.dataset.type === state.docType));
  document.querySelectorAll('.cv-only').forEach(el => el.classList.toggle('hidden', state.docType !== 'cv'));
  document.querySelectorAll('.letter-only').forEach(el => el.classList.toggle('hidden', state.docType !== 'cover-letter'));
  $('cv-preview-blocks').classList.toggle('hidden', state.docType !== 'cv');
  $('letter-preview-blocks').classList.toggle('hidden', state.docType !== 'cover-letter');
  if (state.docType === 'cover-letter') state.templateId = 'cover-letter-pro';
  else if (state.templateId === 'cover-letter-pro') state.templateId = 'classic-free-1';
  renderTemplates();
  renderPreview();
}

async function refreshMe() {
  const data = await api('/api/me');
  state.user = data.user;
  renderAuth();
  renderTemplates();
  if (state.user) loadProjects();
  else $('saved-projects').innerHTML = '<div class="tiny">Login to save projects.</div>';
}

async function loadProjects() {
  if (!state.user) return;
  try {
    const data = await api('/api/projects');
    $('saved-projects').innerHTML = data.projects.length ? data.projects.map(p => `
      <div class="saved-item" data-project="${p.id}">
        <div class="template-title">${p.title || 'Untitled'}</div>
        <div class="template-meta">${p.type} • ${p.templateId}</div>
      </div>`).join('') : '<div class="tiny">No saved projects yet.</div>';

    $('saved-projects').querySelectorAll('.saved-item').forEach(el => {
      el.addEventListener('click', async () => {
        const id = el.dataset.project;
        const all = await api('/api/projects');
        const p = all.projects.find(x => x.id === id);
        if (!p) return;
        state.currentProjectId = p.id;
        state.docType = p.type;
        state.language = p.language || 'en';
        state.templateId = p.templateId;
        $('language').value = state.language;
        setFormData(p.data);
        applyI18n();
        updateDocTypeUI();
        renderTemplates();
        toast('Project loaded');
      });
    });
  } catch (e) {
    $('saved-projects').innerHTML = `<div class="tiny">${e.message}</div>`;
  }
}

async function downloadPdf() {
  try {
    const blob = await api('/api/pdf', {
      method: 'POST',
      body: JSON.stringify({
        type: state.docType,
        templateId: state.templateId,
        language: state.language,
        data: getFormData()
      })
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = state.docType === 'cover-letter' ? 'cover-letter.pdf' : 'cv.pdf';
    a.click();
    URL.revokeObjectURL(url);
  } catch (e) {
    toast(e.message);
  }
}

async function saveProject() {
  if (!state.user) return toast('Login first');
  try {
    const title = (getFormData().fullName || 'Untitled') + (state.docType === 'cover-letter' ? ' - Letter' : ' - CV');
    const data = await api('/api/projects', {
      method: 'POST',
      body: JSON.stringify({
        id: state.currentProjectId,
        type: state.docType,
        language: state.language,
        templateId: state.templateId,
        title,
        data: getFormData(),
      })
    });
    state.currentProjectId = data.project.id;
    toast('Project saved');
    loadProjects();
  } catch (e) {
    toast(e.message);
  }
}

async function authSubmit() {
  try {
    const endpoint = state.mode === 'login' ? '/api/auth/login' : '/api/auth/register';
    const data = await api(endpoint, {
      method: 'POST',
      body: JSON.stringify({ email: $('email').value, password: $('password').value })
    });
    state.user = data.user;
    renderAuth();
    renderTemplates();
    loadProjects();
    toast('Welcome');
  } catch (e) {
    toast(e.message);
  }
}

async function startCheckout() {
  try {
    if (!state.user) return toast('Login first');
    const data = await api('/api/stripe/create-checkout-session', { method: 'POST' });
    window.location.href = data.url;
  } catch (e) {
    toast(e.message);
  }
}

function bind() {
  fields.forEach(id => $(id).addEventListener('input', renderPreview));
  $('auth-submit').addEventListener('click', authSubmit);
  $('auth-toggle').addEventListener('click', () => {
    state.mode = state.mode === 'login' ? 'register' : 'login';
    applyI18n();
  });
  $('logout-btn').addEventListener('click', async () => {
    await api('/api/auth/logout', { method: 'POST' });
    state.user = null;
    state.currentProjectId = null;
    renderAuth();
    renderTemplates();
    loadProjects();
  });
  $('buy-premium').addEventListener('click', startCheckout);
  $('save-project').addEventListener('click', saveProject);
  $('download-pdf').addEventListener('click', downloadPdf);
  $('language').addEventListener('change', e => { state.language = e.target.value; applyI18n(); });
  document.querySelectorAll('.tab').forEach(btn => btn.addEventListener('click', () => { state.docType = btn.dataset.type; updateDocTypeUI(); }));
}

async function init() {
  renderLanguageOptions();
  bind();
  applyI18n();
  updateDocTypeUI();
  renderPreview();
  await refreshMe();
  const url = new URL(window.location.href);
  if (url.searchParams.get('checkout') === 'success') toast('Payment completed. Refreshing premium status...');
  if (url.searchParams.get('checkout') === 'cancel') toast('Payment canceled');
}

init();
