const LANGS = {
  pl: 'Polski', en: 'English', de: 'Deutsch', es: 'Español', fr: 'Français', it: 'Italiano', pt: 'Português', nl: 'Nederlands', cs: 'Čeština', sk: 'Slovenčina'
};

const I18N = {
  pl: {
    brandTag: 'Profesjonalne dokumenty bez komplikacji', navHome: 'Start', navCV: 'Kreator CV', navLetter: 'List motywacyjny',
    heroPill: 'Wszystkie szablony odblokowane', heroTitle: 'Stwórz profesjonalne CV w 5 minut', heroSubtitle: 'Wybierz szablon, uzupełnij dane i pobierz eleganckie CV lub list motywacyjny w PDF.', heroCTA1: 'Stwórz CV', heroCTA2: 'Stwórz list motywacyjny',
    feature1: '8 szablonów CV', feature2: '4 szablony listu', feature3: '10 języków', feature4: 'Eksport PDF',
    templatesTitle: 'Najpierw wybierz szablon', templatesSubtitle: 'Klient od razu widzi wszystkie szablony i może zmieniać je w dowolnym momencie.', cvTemplates: 'Szablony CV', letterTemplates: 'Szablony listu',
    cvBuilderTitle: 'Kreator CV', cvBuilderSubtitle: 'Wypełnij formularz i oglądaj, jak wybrany szablon buduje dokument na żywo.', downloadCV: 'Pobierz CV PDF', selectedTemplate: 'Wybrany szablon',
    personalSection: '1. Dane osobowe', photoLabel: 'Zdjęcie', fullNameLabel: 'Imię i nazwisko', addressLabel: 'Adres', phoneLabel: 'Telefon', emailLabel: 'E-mail', summaryLabel: 'Podsumowanie zawodowe',
    extraFields: 'Dodatkowe pola osobowe', addField: 'Dodaj pole', experienceSection: '2. Doświadczenie zawodowe', addExperience: 'Dodaj doświadczenie', educationSection: '3. Edukacja', addEducation: 'Dodaj edukację', skillsSection: '4. Umiejętności', addSkill: 'Dodaj umiejętność',
    experienceTitle: 'Stanowisko', companyTitle: 'Firma', periodTitle: 'Okres', descriptionTitle: 'Opis', schoolTitle: 'Szkoła / uczelnia', degreeTitle: 'Kierunek / tytuł', skillTitle: 'Umiejętność', levelTitle: 'Poziom', remove: 'Usuń',
    letterBuilderTitle: 'Kreator listu motywacyjnego', letterBuilderSubtitle: 'Wybierz szablon listu, dodaj informacje i pobierz gotowy PDF.', downloadLetter: 'Pobierz list PDF', letterInfoSection: 'Twoje informacje',
    companyLabel: 'Firma', positionLabel: 'Stanowisko, o które się ubiegasz', motivationSection: 'Treść motywacyjna', motivationHelp: 'Kliknij gotowe zdania, aby dodać je do listu, a potem swobodnie je edytuj.', letterBodyLabel: 'Treść listu',
    whyTitle: 'Dlaczego użytkownik to polubi', why1Title: 'Szybko', why1Text: 'Najpierw wybiera wzór i od razu widzi, co buduje.', why2Title: 'Czytelnie', why2Text: 'Każda sekcja jest prosta: dane, doświadczenie, edukacja i umiejętności.', why3Title: 'Praktycznie', why3Text: 'CV i list można pobrać jako estetyczny PDF bez zakładania konta.',
    footerText: 'Kreator CV i listów motywacyjnych',
    cvSectionSummary: 'Profil', cvSectionExperience: 'Doświadczenie', cvSectionEducation: 'Edukacja', cvSectionSkills: 'Umiejętności',
    letterDefaultIntro: 'Szanowni Państwo,', letterDefaultClose: 'Z wyrazami szacunku,',
    expPlaceholderTitle: 'Np. Specjalista ds. marketingu', expPlaceholderCompany: 'Np. ABC Sp. z o.o.', periodPlaceholder: 'Np. 2021–2024', descPlaceholder: 'Opisz zakres obowiązków i osiągnięcia.', schoolPlaceholder: 'Np. Uniwersytet Warszawski', degreePlaceholder: 'Np. Zarządzanie', skillPlaceholder: 'Np. Excel', levelPlaceholder: 'Np. Zaawansowany',
    addSentence1: 'Jestem zmotywowaną osobą, która lubi osiągać konkretne cele i brać odpowiedzialność za wyniki.', addSentence2: 'Moje dotychczasowe doświadczenie pozwoliło mi rozwinąć umiejętności cenione na tym stanowisku.', addSentence3: 'Doceniam Państwa firmę za profesjonalizm i nowoczesne podejście do pracy.', addSentence4: 'Wierzę, że mogę wnieść do zespołu zaangażowanie, dokładność i dobrą organizację.',
    defaultSummary: 'Wpisz krótkie podsumowanie zawodowe, które pokaże Twoje mocne strony.',
  },
  en: { brandTag:'Professional documents made simple', navHome:'Home', navCV:'CV Builder', navLetter:'Cover Letter', heroPill:'All templates unlocked', heroTitle:'Create a professional CV in 5 minutes', heroSubtitle:'Pick a template, fill in your details and download an elegant CV or cover letter PDF.', heroCTA1:'Start CV', heroCTA2:'Create cover letter', feature1:'8 CV templates', feature2:'4 letter templates', feature3:'10 languages', feature4:'PDF export', templatesTitle:'Choose your template first', templatesSubtitle:'Users see all templates immediately and can switch any time.', cvTemplates:'CV templates', letterTemplates:'Letter templates', cvBuilderTitle:'CV builder', cvBuilderSubtitle:'Fill in the form and watch the selected template update live.', downloadCV:'Download CV PDF', selectedTemplate:'Selected template', personalSection:'1. Personal details', photoLabel:'Photo', fullNameLabel:'Full name', addressLabel:'Address', phoneLabel:'Phone', emailLabel:'Email', summaryLabel:'Profile summary', extraFields:'Extra personal fields', addField:'Add field', experienceSection:'2. Work experience', addExperience:'Add experience', educationSection:'3. Education', addEducation:'Add education', skillsSection:'4. Skills', addSkill:'Add skill', experienceTitle:'Title', companyTitle:'Company', periodTitle:'Period', descriptionTitle:'Description', schoolTitle:'School / university', degreeTitle:'Degree / field', skillTitle:'Skill', levelTitle:'Level', remove:'Remove', letterBuilderTitle:'Cover letter builder', letterBuilderSubtitle:'Choose a letter template, add information and download a polished PDF.', downloadLetter:'Download cover letter PDF', letterInfoSection:'Your information', companyLabel:'Company', positionLabel:'Position applied for', motivationSection:'Motivation content', motivationHelp:'Click ready-made sentences to add them to your letter, then edit freely.', letterBodyLabel:'Letter body', whyTitle:'Why users will like it', why1Title:'Fast', why1Text:'They choose a design first and immediately see what they are building.', why2Title:'Clear', why2Text:'Every section is simple: personal details, experience, education and skills.', why3Title:'Useful', why3Text:'Both CV and letter can be downloaded as polished PDFs without creating an account.', footerText:'CV builder and cover letter creator', cvSectionSummary:'Profile', cvSectionExperience:'Experience', cvSectionEducation:'Education', cvSectionSkills:'Skills', letterDefaultIntro:'Dear Hiring Team,', letterDefaultClose:'Kind regards,', expPlaceholderTitle:'e.g. Marketing Specialist', expPlaceholderCompany:'e.g. ABC Ltd', periodPlaceholder:'e.g. 2021–2024', descPlaceholder:'Describe responsibilities and achievements.', schoolPlaceholder:'e.g. University of Warsaw', degreePlaceholder:'e.g. Management', skillPlaceholder:'e.g. Excel', levelPlaceholder:'e.g. Advanced', addSentence1:'I am a motivated professional who enjoys achieving clear goals and taking responsibility for results.', addSentence2:'My previous experience helped me develop skills that are valuable for this role.', addSentence3:'I appreciate your company for its professionalism and modern approach to work.', addSentence4:'I believe I can bring commitment, accuracy and strong organization to your team.', defaultSummary:'Write a short professional summary that highlights your strengths.' },
};
['de','es','fr','it','pt','nl','cs','sk'].forEach(code => { I18N[code] = {...I18N.en}; });

const cvTemplates = [
  { id: 'simple-1', name: 'Simple One', thumb: 'cvt-simple-1', kind: 'simple' },
  { id: 'simple-2', name: 'Simple Dark', thumb: 'cvt-simple-2', kind: 'simple' },
  { id: 'elegant-1', name: 'Executive', thumb: 'cvt-elegant-1', kind: 'elegant' },
  { id: 'elegant-2', name: 'Blush', thumb: 'cvt-elegant-2', kind: 'elegant' },
  { id: 'elegant-3', name: 'Studio', thumb: 'cvt-elegant-3', kind: 'elegant' },
  { id: 'elegant-4', name: 'Emerald', thumb: 'cvt-elegant-4', kind: 'elegant' },
  { id: 'elegant-5', name: 'Premium Noir', thumb: 'cvt-elegant-5', kind: 'elegant' },
  { id: 'elegant-6', name: 'Classic Blue', thumb: 'cvt-elegant-6', kind: 'elegant' }
];
const letterTemplates = [
  { id: 'classic', name: 'Classic', thumb: 'lt-classic' },
  { id: 'minimal', name: 'Minimal', thumb: 'lt-minimal' },
  { id: 'modern', name: 'Modern', thumb: 'lt-modern' },
  { id: 'premium', name: 'Premium', thumb: 'lt-premium' }
];

const state = {
  lang: localStorage.getItem('workingcv_lang') || 'pl',
  cvTemplate: localStorage.getItem('workingcv_cvTemplate') || 'simple-1',
  letterTemplate: localStorage.getItem('workingcv_letterTemplate') || 'classic',
  cv: JSON.parse(localStorage.getItem('workingcv_cvData') || 'null') || {
    photo: '', fullName: '', address: '', phone: '', email: '', summary: '', contacts: [],
    experience: [{ title: '', company: '', period: '', description: '' }],
    education: [{ school: '', degree: '', period: '', description: '' }],
    skills: [{ name: '', level: '' }]
  },
  letter: JSON.parse(localStorage.getItem('workingcv_letterData') || 'null') || {
    fullName: '', email: '', phone: '', address: '', company: '', position: '', body: ''
  }
};

const $ = (sel) => document.querySelector(sel);
const t = (key) => (I18N[state.lang] || I18N.en)[key] || I18N.en[key] || key;
const esc = (v='') => String(v).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[s]));
const store = () => {
  localStorage.setItem('workingcv_lang', state.lang);
  localStorage.setItem('workingcv_cvTemplate', state.cvTemplate);
  localStorage.setItem('workingcv_letterTemplate', state.letterTemplate);
  localStorage.setItem('workingcv_cvData', JSON.stringify(state.cv));
  localStorage.setItem('workingcv_letterData', JSON.stringify(state.letter));
};

function initLanguageSelector() {
  const select = $('#languageSelect');
  select.innerHTML = Object.entries(LANGS).map(([code, label]) => `<option value="${code}">${label}</option>`).join('');
  select.value = state.lang;
  select.addEventListener('change', () => {
    state.lang = select.value;
    applyI18n();
    renderAll();
    store();
  });
}

function applyI18n() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll('[data-i18n]').forEach(node => {
    node.textContent = t(node.dataset.i18n);
  });
  document.title = `WorkingCV — ${t('cvBuilderTitle')}`;
}

function renderTemplateGalleries() {
  const cvContainer = $('#cvTemplateGallery');
  const letterContainer = $('#letterTemplateGallery');
  cvContainer.innerHTML = cvTemplates.map(template => `
    <button class="template-card ${template.id === state.cvTemplate ? 'active' : ''}" data-cv-template="${template.id}">
      <div class="template-thumb-preview ${template.thumb}"></div>
      <div class="template-card-name">${template.name}</div>
      <div class="template-card-type">${template.kind === 'simple' ? 'Free' : 'Elegant'}</div>
    </button>`).join('');
  letterContainer.innerHTML = letterTemplates.map(template => `
    <button class="template-card ${template.id === state.letterTemplate ? 'active' : ''}" data-letter-template="${template.id}">
      <div class="template-thumb-preview ${template.thumb}"></div>
      <div class="template-card-name">${template.name}</div>
      <div class="template-card-type">PDF</div>
    </button>`).join('');
  cvContainer.querySelectorAll('[data-cv-template]').forEach(btn => btn.addEventListener('click', () => {
    state.cvTemplate = btn.dataset.cvTemplate;
    renderAll(); store();
  }));
  letterContainer.querySelectorAll('[data-letter-template]').forEach(btn => btn.addEventListener('click', () => {
    state.letterTemplate = btn.dataset.letterTemplate;
    renderAll(); store();
  }));
}

function bindBasicInputs() {
  const bindings = [
    ['#fullName', 'cv', 'fullName'], ['#address', 'cv', 'address'], ['#phone', 'cv', 'phone'], ['#email', 'cv', 'email'], ['#summary', 'cv', 'summary'],
    ['#letterName', 'letter', 'fullName'], ['#letterEmail', 'letter', 'email'], ['#letterPhone', 'letter', 'phone'], ['#letterAddress', 'letter', 'address'],
    ['#companyName', 'letter', 'company'], ['#positionName', 'letter', 'position'], ['#letterBody', 'letter', 'body']
  ];
  bindings.forEach(([selector, scope, key]) => {
    const el = $(selector);
    el.value = state[scope][key] || '';
    el.oninput = () => { state[scope][key] = el.value; renderAll(); store(); };
  });
  $('#cvPhoto').addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { state.cv.photo = reader.result; renderCvPreview(); store(); };
    reader.readAsDataURL(file);
  });
}

function createInput(label, value, onInput, placeholder='') {
  return `<label><span>${label}</span><input type="text" value="${esc(value)}" placeholder="${esc(placeholder)}" data-bind /></label>`;
}
function createArea(label, value, onInput, placeholder='') {
  return `<label class="full"><span>${label}</span><textarea rows="4" placeholder="${esc(placeholder)}" data-bind>${esc(value)}</textarea></label>`;
}

function renderDynamicFields() {
  const contacts = $('#extraContactFields');
  contacts.innerHTML = state.cv.contacts.map((item, idx) => `
    <div class="item-card" data-contact-index="${idx}">
      <div class="item-grid">
        ${createInput(t('fullNameLabel'), item.label || '', null, t('addField'))}
        ${createInput(t('descriptionTitle'), item.value || '', null, '')}
      </div>
      <div class="remove-row"><button class="remove-btn" data-remove-contact="${idx}">${t('remove')}</button></div>
    </div>`).join('');
  contacts.querySelectorAll('[data-contact-index]').forEach(card => {
    const idx = +card.dataset.contactIndex;
    const inputs = card.querySelectorAll('input');
    inputs[0].oninput = () => { state.cv.contacts[idx].label = inputs[0].value; renderCvPreview(); store(); };
    inputs[1].oninput = () => { state.cv.contacts[idx].value = inputs[1].value; renderCvPreview(); store(); };
  });
  contacts.querySelectorAll('[data-remove-contact]').forEach(btn => btn.onclick = () => { state.cv.contacts.splice(+btn.dataset.removeContact,1); renderDynamicFields(); renderCvPreview(); store(); });

  renderArraySection('#experienceFields', state.cv.experience, 'experience', (item, idx) => `
    <div class="item-card" data-experience-index="${idx}">
      <div class="item-grid">
        ${createInput(t('experienceTitle'), item.title, null, t('expPlaceholderTitle'))}
        ${createInput(t('companyTitle'), item.company, null, t('expPlaceholderCompany'))}
        ${createInput(t('periodTitle'), item.period, null, t('periodPlaceholder'))}
        ${createArea(t('descriptionTitle'), item.description, null, t('descPlaceholder'))}
      </div>
      <div class="remove-row"><button class="remove-btn" data-remove-experience="${idx}">${t('remove')}</button></div>
    </div>`, (idx, fields) => {
      state.cv.experience[idx] = { title: fields[0].value, company: fields[1].value, period: fields[2].value, description: fields[3].value };
    });

  renderArraySection('#educationFields', state.cv.education, 'education', (item, idx) => `
    <div class="item-card" data-education-index="${idx}">
      <div class="item-grid">
        ${createInput(t('schoolTitle'), item.school, null, t('schoolPlaceholder'))}
        ${createInput(t('degreeTitle'), item.degree, null, t('degreePlaceholder'))}
        ${createInput(t('periodTitle'), item.period, null, t('periodPlaceholder'))}
        ${createArea(t('descriptionTitle'), item.description, null, t('descPlaceholder'))}
      </div>
      <div class="remove-row"><button class="remove-btn" data-remove-education="${idx}">${t('remove')}</button></div>
    </div>`, (idx, fields) => {
      state.cv.education[idx] = { school: fields[0].value, degree: fields[1].value, period: fields[2].value, description: fields[3].value };
    });

  renderArraySection('#skillsFields', state.cv.skills, 'skill', (item, idx) => `
    <div class="item-card" data-skill-index="${idx}">
      <div class="item-grid">
        ${createInput(t('skillTitle'), item.name, null, t('skillPlaceholder'))}
        ${createInput(t('levelTitle'), item.level, null, t('levelPlaceholder'))}
      </div>
      <div class="remove-row"><button class="remove-btn" data-remove-skill="${idx}">${t('remove')}</button></div>
    </div>`, (idx, fields) => {
      state.cv.skills[idx] = { name: fields[0].value, level: fields[1].value };
    });
}

function renderArraySection(selector, arr, name, templateFn, updater) {
  const container = $(selector);
  container.innerHTML = arr.map(templateFn).join('');
  container.querySelectorAll(`[data-${name}-index]`).forEach(card => {
    const idx = +card.dataset[`${name}Index`];
    const fields = card.querySelectorAll('input, textarea');
    fields.forEach(field => field.oninput = () => { updater(idx, fields); renderCvPreview(); store(); });
  });
  container.querySelectorAll(`[data-remove-${name}]`).forEach(btn => btn.onclick = () => {
    const idx = +btn.dataset[`remove${capitalize(name)}`];
    arr.splice(idx, 1);
    if (!arr.length) {
      if (name === 'experience') arr.push({ title:'', company:'', period:'', description:'' });
      if (name === 'education') arr.push({ school:'', degree:'', period:'', description:'' });
      if (name === 'skill') arr.push({ name:'', level:'' });
    }
    renderDynamicFields(); renderCvPreview(); store();
  });
}
function capitalize(s){ return s.charAt(0).toUpperCase()+s.slice(1); }

function bindAddButtons() {
  $('#addContactBtn').onclick = () => { state.cv.contacts.push({ label: '', value: '' }); renderDynamicFields(); store(); };
  $('#addExperienceBtn').onclick = () => { state.cv.experience.push({ title: '', company: '', period: '', description: '' }); renderDynamicFields(); store(); };
  $('#addEducationBtn').onclick = () => { state.cv.education.push({ school: '', degree: '', period: '', description: '' }); renderDynamicFields(); store(); };
  $('#addSkillBtn').onclick = () => { state.cv.skills.push({ name: '', level: '' }); renderDynamicFields(); store(); };
}

function updateSelectedTemplateLabels() {
  const cvT = cvTemplates.find(x => x.id === state.cvTemplate);
  const ltT = letterTemplates.find(x => x.id === state.letterTemplate);
  $('#cvSelectedTemplateName').textContent = cvT.name;
  $('#letterSelectedTemplateName').textContent = ltT.name;
  $('#cvSelectedThumb').className = `selected-template-preview ${cvT.thumb}`;
  $('#letterSelectedThumb').className = `selected-template-preview ${ltT.thumb}`;
}

function getContactLines() {
  const items = [];
  if (state.cv.address) items.push(state.cv.address);
  if (state.cv.phone) items.push(state.cv.phone);
  if (state.cv.email) items.push(state.cv.email);
  state.cv.contacts.forEach(item => { if (item.label || item.value) items.push(`${item.label ? item.label + ': ' : ''}${item.value}`); });
  return items;
}

function cvSectionsHtml(forSidebar = false) {
  const summary = state.cv.summary || t('defaultSummary');
  const exp = state.cv.experience.filter(x => x.title || x.company || x.period || x.description);
  const edu = state.cv.education.filter(x => x.school || x.degree || x.period || x.description);
  const skills = state.cv.skills.filter(x => x.name || x.level);
  const section = (title, content) => content ? `<section class="cv-section"><div class="cv-section-title">${title}</div>${content}</section>` : '';
  const items = (arr, mapFn) => arr.map(mapFn).join('');
  const expHtml = items(exp, item => `<div class="cv-item"><div class="cv-item-head"><span>${esc(item.title || '')}</span><span>${esc(item.period || '')}</span></div><div class="cv-item-sub">${esc(item.company || '')}</div><div class="cv-item-body">${esc(item.description || '')}</div></div>`);
  const eduHtml = items(edu, item => `<div class="cv-item"><div class="cv-item-head"><span>${esc(item.degree || '')}</span><span>${esc(item.period || '')}</span></div><div class="cv-item-sub">${esc(item.school || '')}</div><div class="cv-item-body">${esc(item.description || '')}</div></div>`);
  const skillsHtml = `<div class="skills-list">${skills.map(s => `<span class="skill-tag">${esc(s.name)}${s.level ? ` · ${esc(s.level)}` : ''}</span>`).join('')}</div>`;
  if (forSidebar) {
    return section(t('cvSectionSummary'), `<div class="cv-summary">${esc(summary)}</div>`) + section(t('cvSectionSkills'), skillsHtml);
  }
  return section(t('cvSectionExperience'), expHtml) + section(t('cvSectionEducation'), eduHtml);
}

function buildCvPreview() {
  const contacts = getContactLines().map(line => `<span>${esc(line)}</span>`).join('');
  const photo = state.cv.photo ? `<img class="cv-photo" src="${state.cv.photo}" alt="photo" />` : `<div class="cv-photo"></div>`;
  const top = `<div class="cv-header">${photo}<div><div class="cv-name">${esc(state.cv.fullName || 'Your Name')}</div><div class="cv-role">${esc(state.cv.summary ? '' : '')}</div><div class="cv-contact">${contacts}</div></div></div>`;
  switch (state.cvTemplate) {
    case 'simple-2':
      return `<div class="cv-sheet template-simple-2"><div class="cv-banner">${top}</div><div class="cv-main"><section class="cv-section"><div class="cv-section-title">${t('cvSectionSummary')}</div><div class="cv-summary">${esc(state.cv.summary || t('defaultSummary'))}</div></section>${cvSectionsHtml(false)}<section class="cv-section"><div class="cv-section-title">${t('cvSectionSkills')}</div><div class="skills-list">${state.cv.skills.filter(s => s.name || s.level).map(s => `<span class="skill-tag">${esc(s.name)}${s.level ? ` · ${esc(s.level)}` : ''}</span>`).join('')}</div></section></div></div>`;
    case 'elegant-1':
      return `<div class="cv-sheet template-elegant-1"><aside class="cv-sidebar">${top}${cvSectionsHtml(true)}</aside><main class="cv-main">${cvSectionsHtml(false)}</main></div>`;
    case 'elegant-2':
      return `<div class="cv-sheet template-elegant-2"><aside class="cv-sidebar">${photo}<div class="cv-section"><div class="cv-section-title">${t('cvSectionSkills')}</div><div class="skills-list">${state.cv.skills.filter(s => s.name || s.level).map(s => `<span class="skill-tag">${esc(s.name)}</span>`).join('')}</div></div></aside><main class="cv-main"><div class="cv-name">${esc(state.cv.fullName || 'Your Name')}</div><div class="cv-contact">${contacts}</div><section class="cv-section"><div class="cv-section-title">${t('cvSectionSummary')}</div><div class="cv-summary">${esc(state.cv.summary || t('defaultSummary'))}</div></section>${cvSectionsHtml(false)}<section class="cv-section"><div class="cv-section-title">${t('cvSectionEducation')}</div>${state.cv.education.filter(x => x.school || x.degree || x.period || x.description).map(item => `<div class="cv-item"><div class="cv-item-head"><span>${esc(item.degree || '')}</span><span>${esc(item.period || '')}</span></div><div class="cv-item-sub">${esc(item.school || '')}</div><div class="cv-item-body">${esc(item.description || '')}</div></div>`).join('')}</section></main></div>`;
    case 'elegant-3':
      return `<div class="cv-sheet template-elegant-3"><div class="cv-main">${top}<section class="cv-section"><div class="cv-section-title">${t('cvSectionSummary')}</div><div class="cv-summary">${esc(state.cv.summary || t('defaultSummary'))}</div></section>${cvSectionsHtml(false)}<section class="cv-section"><div class="cv-section-title">${t('cvSectionSkills')}</div><div class="skills-list">${state.cv.skills.filter(s => s.name || s.level).map(s => `<span class="skill-tag">${esc(s.name)}${s.level ? ` · ${esc(s.level)}` : ''}</span>`).join('')}</div></section></div></div>`;
    case 'elegant-4':
      return `<div class="cv-sheet template-elegant-4"><div class="cv-accent"></div><div class="cv-main">${top}<section class="cv-section"><div class="cv-section-title">${t('cvSectionSummary')}</div><div class="cv-summary">${esc(state.cv.summary || t('defaultSummary'))}</div></section>${cvSectionsHtml(false)}<section class="cv-section"><div class="cv-section-title">${t('cvSectionSkills')}</div><div class="skills-list">${state.cv.skills.filter(s => s.name || s.level).map(s => `<span class="skill-tag">${esc(s.name)}${s.level ? ` · ${esc(s.level)}` : ''}</span>`).join('')}</div></section></div></div>`;
    case 'elegant-5':
      return `<div class="cv-sheet template-elegant-5"><aside class="cv-sidebar">${top}<section class="cv-section"><div class="cv-section-title">${t('cvSectionSummary')}</div><div class="cv-summary">${esc(state.cv.summary || t('defaultSummary'))}</div></section><section class="cv-section"><div class="cv-section-title">${t('cvSectionSkills')}</div><div class="skills-list">${state.cv.skills.filter(s => s.name || s.level).map(s => `<span class="skill-tag">${esc(s.name)}${s.level ? ` · ${esc(s.level)}` : ''}</span>`).join('')}</div></section></aside><main class="cv-main">${cvSectionsHtml(false)}</main></div>`;
    case 'elegant-6':
      return `<div class="cv-sheet template-elegant-6"><aside class="cv-sidebar"></aside><main class="cv-main">${top}<section class="cv-section"><div class="cv-section-title">${t('cvSectionSummary')}</div><div class="cv-summary">${esc(state.cv.summary || t('defaultSummary'))}</div></section>${cvSectionsHtml(false)}<section class="cv-section"><div class="cv-section-title">${t('cvSectionSkills')}</div><div class="skills-list">${state.cv.skills.filter(s => s.name || s.level).map(s => `<span class="skill-tag">${esc(s.name)}${s.level ? ` · ${esc(s.level)}` : ''}</span>`).join('')}</div></section></main></div>`;
    default:
      return `<div class="cv-sheet template-simple-1"><div class="cv-main">${top}<section class="cv-section"><div class="cv-section-title">${t('cvSectionSummary')}</div><div class="cv-summary">${esc(state.cv.summary || t('defaultSummary'))}</div></section>${cvSectionsHtml(false)}<section class="cv-section"><div class="cv-section-title">${t('cvSectionSkills')}</div><div class="skills-list">${state.cv.skills.filter(s => s.name || s.level).map(s => `<span class="skill-tag">${esc(s.name)}${s.level ? ` · ${esc(s.level)}` : ''}</span>`).join('')}</div></section></div></div>`;
  }
}

function renderCvPreview() {
  $('#cvPreview').innerHTML = buildCvPreview();
}

function buildLetterPreview() {
  const body = state.letter.body || `${t('letterDefaultIntro')}\n\n${t('addSentence1')}\n\n${t('letterDefaultClose')}`;
  return `
    <div class="letter-sheet letter-template-${state.letterTemplate}">
      <div class="letter-head">
        <div>
          <div class="letter-name">${esc(state.letter.fullName || 'Your Name')}</div>
          <div class="letter-meta">${esc(state.letter.address || '')}<br>${esc(state.letter.phone || '')}<br>${esc(state.letter.email || '')}</div>
        </div>
        <div>
          <div class="letter-date">${new Date().toLocaleDateString(state.lang)}</div>
          <div class="letter-company">${esc(state.letter.company || '')}</div>
        </div>
      </div>
      <div class="letter-title">${esc(state.letter.position || t('positionLabel'))}</div>
      <div class="letter-body">${esc(body)}</div>
      <div class="letter-sign">${esc(state.letter.fullName || 'Your Name')}</div>
    </div>`;
}
function renderLetterPreview() { $('#letterPreview').innerHTML = buildLetterPreview(); }

function renderSentenceBank() {
  const sentences = [t('addSentence1'), t('addSentence2'), t('addSentence3'), t('addSentence4')];
  $('#sentenceBank').innerHTML = sentences.map(s => `<button class="sentence-chip" data-sentence="${esc(s)}">${esc(s)}</button>`).join('');
  $('#sentenceBank').querySelectorAll('[data-sentence]').forEach(btn => btn.onclick = () => {
    const sentence = btn.getAttribute('data-sentence');
    const text = $('#letterBody');
    text.value = (text.value ? text.value + '\n\n' : '') + sentence;
    state.letter.body = text.value;
    renderLetterPreview();
    store();
  });
}

function downloadElementAsPdf(elementId, filename) {
  const element = document.getElementById(elementId);
  const opt = {
    margin: [0, 0, 0, 0],
    filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all'] }
  };
  html2pdf().set(opt).from(element).save();
}

function initDownloads() {
  $('#downloadCvBtn').onclick = () => downloadElementAsPdf('cvPreview', 'workingcv-cv.pdf');
  $('#downloadLetterBtn').onclick = () => downloadElementAsPdf('letterPreview', 'workingcv-cover-letter.pdf');
}

function renderAll() {
  applyI18n();
  renderTemplateGalleries();
  renderDynamicFields();
  updateSelectedTemplateLabels();
  renderCvPreview();
  renderSentenceBank();
  renderLetterPreview();
}

window.addEventListener('DOMContentLoaded', () => {
  $('#year').textContent = new Date().getFullYear();
  initLanguageSelector();
  bindBasicInputs();
  bindAddButtons();
  initDownloads();
  if (!state.cv.summary) state.cv.summary = t('defaultSummary');
  renderAll();
  store();
});
