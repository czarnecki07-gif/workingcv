const languages = [
  ['pl','Polski'], ['en','English'], ['de','Deutsch'], ['es','Español'], ['fr','Français'],
  ['it','Italiano'], ['pt','Português'], ['nl','Nederlands'], ['cs','Čeština'], ['sk','Slovenčina']
];

const ui = {
  pl: {
    brandSub: 'Profesjonalny kreator CV', startNow:'Stwórz CV', badge:'Kreator CV i listu motywacyjnego',
    heroTitle:'Stwórz profesjonalne CV w 5 minut', heroText:'Wybierz elegancki szablon, uzupełnij dane i pobierz gotowy dokument PDF. Bez AI, bez chaosu, wszystko odblokowane.',
    ctaBuild:'Zacznij tworzyć', ctaTemplates:'Zobacz szablony', pointTemplates:'eleganckich szablonów CV', pointLetters:'szablony listów motywacyjnych', pointLanguages:'języków interfejsu',
    templatesTitle:'Wybierz swój styl', templatesText:'Kliknij szablon i od razu buduj dokument z podglądem na żywo.', cvTemplates:'Szablony CV', letterTemplates:'Szablony listu motywacyjnego',
    modeCV:'Kreator CV', modeLetter:'Kreator listu', formTitleCV:'Uzupełnij dane do CV', formTitleLetter:'Uzupełnij dane do listu', selectedTemplate:'Wybrany szablon:',
    sectionPersonal:'1. Dane osobowe', photo:'Zdjęcie', fullName:'Imię i nazwisko', jobTitle:'Stanowisko', address:'Adres', phone:'Telefon', website:'LinkedIn / strona', profile:'Podsumowanie zawodowe',
    sectionExperience:'2. Doświadczenie zawodowe', addExperience:'+ Dodaj doświadczenie', sectionEducation:'3. Edukacja', addEducation:'+ Dodaj edukację', sectionSkills:'4. Umiejętności', addSkill:'+ Dodaj umiejętność',
    downloadCV:'Pobierz PDF CV', saveBrowser:'Zapisz w przeglądarce', livePreview:'Podgląd na żywo',
    letterData:'1. Dane i stanowisko', jobTitleApply:'Stanowisko, o które się ubiegasz', companyName:'Nazwa firmy', cityDate:'Miasto i data', emailPhone:'Email / telefon', recipient:'Adresat',
    letterContent:'2. Treść listu', readySentences:'Gotowe zdania — kliknij, aby dodać', letterBody:'Treść listu', downloadLetter:'Pobierz PDF listu',
    footerText:'Nowoczesny kreator CV i listów motywacyjnych.',
    expRole:'Stanowisko', expCompany:'Firma', expDate:'Data', expDesc:'Opis obowiązków i osiągnięć', eduSchool:'Szkoła / uczelnia', eduField:'Kierunek', eduDate:'Data', eduDesc:'Opis', skillName:'Umiejętność', remove:'Usuń',
    expTitle:'Doświadczenie', eduTitle:'Edukacja', skillsTitle:'Umiejętności', profileTitle:'Profil', contactTitle:'Kontakt', coverLetter:'List motywacyjny',
    sentence1:'Z dużym zainteresowaniem aplikuję na stanowisko wskazane w ogłoszeniu, ponieważ łączy ono zakres obowiązków zgodny z moim doświadczeniem i kierunkiem rozwoju.',
    sentence2:'W poprzednich rolach skutecznie realizowałem zadania wymagające odpowiedzialności, dokładności oraz bardzo dobrej organizacji pracy.',
    sentence3:'Wierzę, że moje doświadczenie zawodowe, zaangażowanie i nastawienie na wynik pozwolą mi wnieść realną wartość do Państwa zespołu.',
    sentence4:'Szczególnie cenię sobie możliwość pracy w środowisku, które stawia na jakość, rozwój i wysoki standard współpracy.',
    sentence5:'Chętnie opowiem szerzej o moim doświadczeniu podczas rozmowy rekrutacyjnej.',
  },
  en: { brandSub:'Professional resume builder', startNow:'Build resume', badge:'CV & cover letter creator', heroTitle:'Create a professional resume in 5 minutes', heroText:'Choose an elegant template, fill in your information and download a polished PDF. No AI, no clutter, everything unlocked.', ctaBuild:'Start building', ctaTemplates:'View templates', pointTemplates:'elegant resume templates', pointLetters:'cover letter templates', pointLanguages:'interface languages', templatesTitle:'Choose your style', templatesText:'Click a template and start building with live preview.', cvTemplates:'Resume templates', letterTemplates:'Cover letter templates', modeCV:'CV Builder', modeLetter:'Cover letter', formTitleCV:'Fill in your resume details', formTitleLetter:'Fill in your letter details', selectedTemplate:'Selected template:', sectionPersonal:'1. Personal details', photo:'Photo', fullName:'Full name', jobTitle:'Job title', address:'Address', phone:'Phone', website:'LinkedIn / website', profile:'Professional summary', sectionExperience:'2. Work experience', addExperience:'+ Add experience', sectionEducation:'3. Education', addEducation:'+ Add education', sectionSkills:'4. Skills', addSkill:'+ Add skill', downloadCV:'Download CV PDF', saveBrowser:'Save in browser', livePreview:'Live preview', letterData:'1. Personal details & role', jobTitleApply:'Position you are applying for', companyName:'Company name', cityDate:'City and date', emailPhone:'Email / phone', recipient:'Recipient', letterContent:'2. Letter content', readySentences:'Ready-to-use sentences — click to add', letterBody:'Letter body', downloadLetter:'Download letter PDF', footerText:'Modern resume and cover letter builder.', expRole:'Role', expCompany:'Company', expDate:'Date', expDesc:'Responsibilities and achievements', eduSchool:'School / university', eduField:'Field of study', eduDate:'Date', eduDesc:'Description', skillName:'Skill', remove:'Remove', expTitle:'Experience', eduTitle:'Education', skillsTitle:'Skills', profileTitle:'Profile', contactTitle:'Contact', coverLetter:'Cover letter', sentence1:'I am writing with great interest to apply for the position, as it strongly aligns with my experience and professional direction.', sentence2:'In previous roles, I successfully handled responsibilities requiring ownership, accuracy and strong organisational skills.', sentence3:'I believe my experience, commitment and results-oriented mindset would allow me to contribute genuine value to your team.', sentence4:'I especially value environments that prioritise quality, development and a high standard of collaboration.', sentence5:'I would welcome the opportunity to discuss my experience further during an interview.' },
};
['de','es','fr','it','pt','nl','cs','sk'].forEach(code => ui[code] = ui.en);

const cvTemplates = [
  { id:'executive', name:'Executive', desc:'Dark sidebar, premium corporate layout', cls:'template-executive', thumb:'thumb-executive' },
  { id:'classic', name:'Classic Blue', desc:'Top band with balanced two-column structure', cls:'template-classic', thumb:'thumb-classic' },
  { id:'boardroom', name:'Boardroom', desc:'Refined side panel and strong hierarchy', cls:'template-boardroom', thumb:'thumb-boardroom' },
  { id:'atlas', name:'Atlas', desc:'Executive top header with clean split sections', cls:'template-atlas', thumb:'thumb-atlas' },
  { id:'sterling', name:'Sterling', desc:'Corporate contrast with calm information rail', cls:'template-sterling', thumb:'thumb-sterling' },
  { id:'slate', name:'Slate Card', desc:'Modern business card-inspired layout', cls:'template-slate', thumb:'thumb-slate' },
];
const letterTemplates = [
  { id:'classic', name:'Classic Letter', desc:'Formal and timeless', cls:'letter-classic', thumb:'thumb-letter-classic' },
  { id:'modern', name:'Modern Letter', desc:'Strong left accent', cls:'letter-modern', thumb:'thumb-letter-modern' },
  { id:'prestige', name:'Prestige Letter', desc:'Elegant premium linework', cls:'letter-prestige', thumb:'thumb-letter-prestige' },
];

const state = {
  lang: localStorage.getItem('workingcv_lang') || 'pl',
  mode: 'cv',
  cvTemplate: localStorage.getItem('workingcv_cvTemplate') || 'executive',
  letterTemplate: localStorage.getItem('workingcv_letterTemplate') || 'classic',
  photo: localStorage.getItem('workingcv_photo') || '',
  cv: JSON.parse(localStorage.getItem('workingcv_cv') || 'null') || {
    fullName:'Jan Kowalski', jobTitle:'Senior Finance Specialist', address:'Warszawa, Polska', phone:'+48 500 000 000', email:'jan@email.com', website:'linkedin.com/in/jankowalski',
    profile:'Doświadczony specjalista z kilkuletnim doświadczeniem w środowisku korporacyjnym. Łączę dokładność, odpowiedzialność i dobrą organizację pracy z wysoką kulturą współpracy.',
    experiences:[{ role:'Senior Finance Specialist', company:'ABC Group', date:'2021 – obecnie', desc:'Koordynowanie procesów finansowych, analiza danych i przygotowywanie raportów dla zarządu. Usprawnienie raportowania miesięcznego oraz współpraca międzydziałowa.' }],
    education:[{ school:'Szkoła Główna Handlowa', field:'Finanse i rachunkowość', date:'2016 – 2021', desc:'Studia magisterskie.' }],
    skills:[{ name:'Excel / analityka' }, { name:'Komunikacja biznesowa' }, { name:'Raportowanie' }]
  },
  letter: JSON.parse(localStorage.getItem('workingcv_letter') || 'null') || {
    name:'Jan Kowalski', role:'Senior Finance Specialist', company:'ABC Group', cityDate:'Warszawa, 15.03.2026', contact:'jan@email.com | +48 500 000 000', recipient:'Dział Rekrutacji',
    body:''
  }
};

const els = {
  languageSelect: document.getElementById('languageSelect'),
  cvTemplateGrid: document.getElementById('cvTemplateGrid'),
  letterTemplateGrid: document.getElementById('letterTemplateGrid'),
  selectedTemplateName: document.getElementById('selectedTemplateName'),
  selectedCvThumb: document.getElementById('selectedCvThumb'),
  selectedLetterThumb: document.getElementById('selectedLetterThumb'),
  cvPreview: document.getElementById('cvPreview'),
  letterPreview: document.getElementById('letterPreview'),
  cvBuilder: document.getElementById('cvBuilder'),
  letterBuilder: document.getElementById('letterBuilder'),
  cvPreviewWrap: document.getElementById('cvPreviewWrap'),
  letterPreviewWrap: document.getElementById('letterPreviewWrap'),
  formTitle: document.getElementById('formTitle'),
  experienceList: document.getElementById('experienceList'),
  educationList: document.getElementById('educationList'),
  skillsList: document.getElementById('skillsList'),
  sentenceBank: document.getElementById('sentenceBank'),
};

function t(key){ return (ui[state.lang] && ui[state.lang][key]) || ui.en[key] || key; }
function save(){
  localStorage.setItem('workingcv_lang', state.lang);
  localStorage.setItem('workingcv_cvTemplate', state.cvTemplate);
  localStorage.setItem('workingcv_letterTemplate', state.letterTemplate);
  localStorage.setItem('workingcv_cv', JSON.stringify(state.cv));
  localStorage.setItem('workingcv_letter', JSON.stringify(state.letter));
  localStorage.setItem('workingcv_photo', state.photo || '');
}
function setI18n(){
  document.documentElement.lang = state.lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.getElementById('formTitle').textContent = state.mode === 'cv' ? t('formTitleCV') : t('formTitleLetter');
  renderSentenceBank(); renderDynamicForms(); renderPreviews();
}
function initLanguageSelect(){
  els.languageSelect.innerHTML = languages.map(([code, name]) => `<option value="${code}">${name}</option>`).join('');
  els.languageSelect.value = state.lang;
  els.languageSelect.addEventListener('change', e => { state.lang = e.target.value; save(); setI18n(); });
}
function cardHtml(item, active){
  return `<div class="template-card ${active ? 'active' : ''}" data-id="${item.id}">
    <div class="template-thumb ${item.thumb}"></div>
    <div class="template-name">${item.name}</div>
    <div class="template-desc">${item.desc}</div>
  </div>`;
}
function renderTemplateGrids(){
  els.cvTemplateGrid.innerHTML = cvTemplates.map(tpl => cardHtml(tpl, tpl.id === state.cvTemplate)).join('');
  els.letterTemplateGrid.innerHTML = letterTemplates.map(tpl => cardHtml(tpl, tpl.id === state.letterTemplate)).join('');
  els.cvTemplateGrid.querySelectorAll('.template-card').forEach(card => card.addEventListener('click', () => {
    state.cvTemplate = card.dataset.id; save(); renderTemplateGrids(); renderPreviews();
  }));
  els.letterTemplateGrid.querySelectorAll('.template-card').forEach(card => card.addEventListener('click', () => {
    state.letterTemplate = card.dataset.id; save(); renderTemplateGrids(); renderPreviews();
  }));
}
function selectedThumbMarkup(kind, id){
  const list = kind === 'cv' ? cvTemplates : letterTemplates;
  const item = list.find(x => x.id === id);
  return `<div class="template-thumb ${item.thumb}" style="height:100%;border-radius:0"></div>`;
}
function renderDynamicForms(){
  renderExperienceList(); renderEducationList(); renderSkillsList(); bindStaticInputs();
}
function bindStaticInputs(){
  [['fullName','fullName'],['jobTitle','jobTitle'],['address','address'],['phone','phone'],['email','email'],['website','website'],['profile','profile']].forEach(([id,key]) => {
    const el = document.getElementById(id); if (!el) return; el.value = state.cv[key] || ''; el.oninput = e => { state.cv[key] = e.target.value; save(); renderPreviews(); };
  });
  [['letterName','name'],['letterRole','role'],['companyName','company'],['cityDate','cityDate'],['letterContact','contact'],['recipient','recipient'],['letterBody','body']].forEach(([id,key]) => {
    const el = document.getElementById(id); if (!el) return; el.value = state.letter[key] || ''; el.oninput = e => { state.letter[key] = e.target.value; save(); renderPreviews(); };
  });
}
function itemCard(content, index, onRemove){
  const wrap = document.createElement('div');
  wrap.className = 'item-card';
  wrap.innerHTML = content + `<div class="inline-actions"><button class="mini-remove">${t('remove')}</button></div>`;
  wrap.querySelector('.mini-remove').addEventListener('click', onRemove);
  return wrap;
}
function renderExperienceList(){
  els.experienceList.innerHTML = '';
  state.cv.experiences.forEach((exp, index) => {
    const card = itemCard(`
      <div class="grid-two">
        <label><span>${t('expRole')}</span><input class="input" data-key="role" value="${escapeHtml(exp.role)}"></label>
        <label><span>${t('expCompany')}</span><input class="input" data-key="company" value="${escapeHtml(exp.company)}"></label>
        <label><span>${t('expDate')}</span><input class="input" data-key="date" value="${escapeHtml(exp.date)}"></label>
      </div>
      <label><span>${t('expDesc')}</span><textarea class="textarea" data-key="desc" rows="4">${escapeHtml(exp.desc)}</textarea></label>
    `, index, () => { state.cv.experiences.splice(index,1); save(); renderDynamicForms(); renderPreviews(); });
    card.querySelectorAll('[data-key]').forEach(inp => inp.addEventListener('input', e => { state.cv.experiences[index][inp.dataset.key] = e.target.value; save(); renderPreviews(); }));
    els.experienceList.appendChild(card);
  });
}
function renderEducationList(){
  els.educationList.innerHTML = '';
  state.cv.education.forEach((edu, index) => {
    const card = itemCard(`
      <div class="grid-two">
        <label><span>${t('eduSchool')}</span><input class="input" data-key="school" value="${escapeHtml(edu.school)}"></label>
        <label><span>${t('eduField')}</span><input class="input" data-key="field" value="${escapeHtml(edu.field)}"></label>
        <label><span>${t('eduDate')}</span><input class="input" data-key="date" value="${escapeHtml(edu.date)}"></label>
      </div>
      <label><span>${t('eduDesc')}</span><textarea class="textarea" data-key="desc" rows="3">${escapeHtml(edu.desc)}</textarea></label>
    `, index, () => { state.cv.education.splice(index,1); save(); renderDynamicForms(); renderPreviews(); });
    card.querySelectorAll('[data-key]').forEach(inp => inp.addEventListener('input', e => { state.cv.education[index][inp.dataset.key] = e.target.value; save(); renderPreviews(); }));
    els.educationList.appendChild(card);
  });
}
function renderSkillsList(){
  els.skillsList.innerHTML = '';
  state.cv.skills.forEach((skill, index) => {
    const card = itemCard(`
      <label><span>${t('skillName')}</span><input class="input" data-key="name" value="${escapeHtml(skill.name)}"></label>
    `, index, () => { state.cv.skills.splice(index,1); save(); renderDynamicForms(); renderPreviews(); });
    card.querySelector('[data-key]').addEventListener('input', e => { state.cv.skills[index].name = e.target.value; save(); renderPreviews(); });
    els.skillsList.appendChild(card);
  });
}
function renderSentenceBank(){
  const items = ['sentence1','sentence2','sentence3','sentence4','sentence5'];
  els.sentenceBank.innerHTML = items.map(key => `<button class="secondary-btn block sentence-btn" data-key="${key}">${t(key)}</button>`).join('');
  els.sentenceBank.querySelectorAll('.sentence-btn').forEach(btn => btn.addEventListener('click', () => {
    state.letter.body = (state.letter.body ? state.letter.body + '\n\n' : '') + t(btn.dataset.key);
    document.getElementById('letterBody').value = state.letter.body;
    save(); renderPreviews();
  }));
}
function makeSection(title, content){ return `<section><div class="cv-section-title">${title}</div>${content || ''}</section>`; }
function expItems(items){ return items.filter(x => x.role || x.company || x.desc).map(x => `<div class="cv-item"><div class="title">${escapeHtml(x.role || '')}</div><div class="meta">${escapeHtml([x.company, x.date].filter(Boolean).join(' • '))}</div><div class="desc">${escapeHtml(x.desc || '')}</div></div>`).join(''); }
function eduItems(items){ return items.filter(x => x.school || x.field || x.desc).map(x => `<div class="cv-item"><div class="title">${escapeHtml(x.school || '')}</div><div class="meta">${escapeHtml([x.field, x.date].filter(Boolean).join(' • '))}</div><div class="desc">${escapeHtml(x.desc || '')}</div></div>`).join(''); }
function skillItems(items){ return items.filter(x => x.name).map(x => `<span class="skill-tag">${escapeHtml(x.name)}</span>`).join(''); }
function photoMarkup(){ return state.photo ? `<div class="photo-box"><img src="${state.photo}" alt="photo"></div>` : `<div class="photo-box"></div>`; }
function contactMarkup(){ return `<div class="contact-list"><div>${escapeHtml(state.cv.address || '')}</div><div>${escapeHtml(state.cv.phone || '')}</div><div>${escapeHtml(state.cv.email || '')}</div><div>${escapeHtml(state.cv.website || '')}</div></div>`; }
function renderCvTemplate(){
  const tpl = state.cvTemplate;
  const common = {
    name: escapeHtml(state.cv.fullName || ''), role: escapeHtml(state.cv.jobTitle || ''), profile: escapeHtml(state.cv.profile || ''),
    exp: makeSection(t('expTitle'), expItems(state.cv.experiences)), edu: makeSection(t('eduTitle'), eduItems(state.cv.education)), skills: makeSection(t('skillsTitle'), skillItems(state.cv.skills)),
    profileSection: makeSection(t('profileTitle'), `<div class="profile-text">${escapeHtml(state.cv.profile || '')}</div>`),
    contactSection: makeSection(t('contactTitle'), contactMarkup())
  };
  let html = '';
  if (tpl === 'executive') html = `<div class="cv-inner"><aside class="cv-sidebar">${photoMarkup()}<div style="height:18px"></div><div class="name">${common.name}</div><div class="role">${common.role}</div><div style="height:22px"></div>${common.contactSection}<div style="height:22px"></div>${common.profileSection}<div style="height:22px"></div>${common.skills}</aside><main class="cv-main">${common.exp}${common.edu}</main></div>`;
  if (tpl === 'classic') html = `<div class="cv-inner"><div class="topband"><div class="head-grid"><div><div class="name">${common.name}</div><div class="role">${common.role}</div></div>${photoMarkup()}</div></div><div class="body-grid"><div>${common.exp}${common.edu}</div><div>${common.contactSection}${common.profileSection}${common.skills}</div></div></div>`;
  if (tpl === 'boardroom') html = `<div class="cv-inner"><aside class="cv-sidebar">${photoMarkup()}<div style="height:18px"></div><div class="name">${common.name}</div><div class="role">${common.role}</div><div style="height:20px"></div>${common.contactSection}<div style="height:20px"></div>${common.skills}</aside><main class="cv-main">${common.profileSection}${common.exp}${common.edu}</main></div>`;
  if (tpl === 'atlas') html = `<div class="cv-inner"><div class="hero-strip"><div class="name">${common.name}</div><div class="role">${common.role}</div></div><div class="split"><div>${common.exp}${common.edu}</div><div>${photoMarkup()}<div style="height:18px"></div>${common.contactSection}${common.profileSection}${common.skills}</div></div></div>`;
  if (tpl === 'sterling') html = `<div class="cv-inner"><main class="cv-main"><div class="name">${common.name}</div><div class="role">${common.role}</div><div style="height:22px"></div>${common.profileSection}${common.exp}${common.edu}</main><aside class="cv-sidebar">${photoMarkup()}<div style="height:18px"></div>${common.contactSection}<div style="height:20px"></div>${common.skills}</aside></div>`;
  if (tpl === 'slate') html = `<div class="cv-inner"><div class="card-head"><div><div class="name">${common.name}</div><div class="role">${common.role}</div></div>${photoMarkup()}</div><div class="body-grid"><div><div class="section-card">${common.exp}</div><div class="section-card">${common.edu}</div></div><div><div class="section-card">${common.contactSection}</div><div class="section-card">${common.profileSection}</div><div class="section-card">${common.skills}</div></div></div></div>`;
  const tplObj = cvTemplates.find(x => x.id === tpl);
  els.cvPreview.className = `paper cv-paper ${tplObj.cls}`;
  els.cvPreview.innerHTML = html;
  els.selectedTemplateName.textContent = tplObj.name;
  els.selectedCvThumb.innerHTML = selectedThumbMarkup('cv', tpl);
}
function renderLetterTemplate(){
  const tpl = letterTemplates.find(x => x.id === state.letterTemplate);
  els.letterPreview.className = `paper letter-paper ${tpl.cls}`;
  els.selectedTemplateName.textContent = tpl.name;
  els.selectedLetterThumb.innerHTML = selectedThumbMarkup('letter', state.letterTemplate);
  els.letterPreview.innerHTML = `
    <div class="letter-header">
      <div class="letter-title">${t('coverLetter')}</div>
      <div class="letter-meta">${escapeHtml(state.letter.name || '')}\n${escapeHtml(state.letter.contact || '')}\n${escapeHtml(state.letter.cityDate || '')}</div>
    </div>
    <div class="letter-meta">${escapeHtml(state.letter.recipient || '')}\n${escapeHtml(state.letter.company || '')}</div>
    <div style="height:18px"></div>
    <div><strong>${escapeHtml(state.letter.role || '')}</strong></div>
    <div class="letter-body-text">${escapeHtml(state.letter.body || '')}</div>
    <div class="letter-sign">${escapeHtml(state.letter.name || '')}</div>
  `;
}
function renderPreviews(){ renderCvTemplate(); renderLetterTemplate(); }
function switchMode(mode){
  state.mode = mode;
  document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.mode === mode));
  els.cvBuilder.classList.toggle('hidden', mode !== 'cv');
  els.letterBuilder.classList.toggle('hidden', mode !== 'letter');
  els.cvPreviewWrap.classList.toggle('hidden', mode !== 'cv');
  els.letterPreviewWrap.classList.toggle('hidden', mode !== 'letter');
  document.getElementById('formTitle').textContent = mode === 'cv' ? t('formTitleCV') : t('formTitleLetter');
  els.selectedTemplateName.textContent = mode === 'cv' ? cvTemplates.find(x => x.id === state.cvTemplate).name : letterTemplates.find(x => x.id === state.letterTemplate).name;
}
function doPrint(mode){
  switchMode(mode);
  setTimeout(() => {
    document.body.classList.add('printing');
    window.print();
    setTimeout(() => document.body.classList.remove('printing'), 300);
  }, 80);
}
function escapeHtml(str){ return String(str || '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

function initActions(){
  document.querySelectorAll('[data-scroll]').forEach(btn => btn.addEventListener('click', () => document.querySelector(btn.dataset.scroll)?.scrollIntoView({behavior:'smooth'})));
  document.querySelectorAll('.mode-btn').forEach(btn => btn.addEventListener('click', () => switchMode(btn.dataset.mode)));
  document.getElementById('addExperienceBtn').addEventListener('click', e => { e.preventDefault(); state.cv.experiences.push({ role:'', company:'', date:'', desc:'' }); save(); renderDynamicForms(); });
  document.getElementById('addEducationBtn').addEventListener('click', e => { e.preventDefault(); state.cv.education.push({ school:'', field:'', date:'', desc:'' }); save(); renderDynamicForms(); });
  document.getElementById('addSkillBtn').addEventListener('click', e => { e.preventDefault(); state.cv.skills.push({ name:'' }); save(); renderDynamicForms(); });
  document.getElementById('downloadCvBtn').addEventListener('click', () => doPrint('cv'));
  document.getElementById('downloadLetterBtn').addEventListener('click', () => doPrint('letter'));
  document.getElementById('saveCvBtn').addEventListener('click', () => { save(); alert('Zapisano dane CV w przeglądarce.'); });
  document.getElementById('saveLetterBtn').addEventListener('click', () => { save(); alert('Zapisano list w przeglądarce.'); });
  document.getElementById('photoInput').addEventListener('change', e => {
    const file = e.target.files?.[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { state.photo = reader.result; save(); renderPreviews(); };
    reader.readAsDataURL(file);
  });
  document.getElementById('year').textContent = new Date().getFullYear();
}

function boot(){
  initLanguageSelect();
  renderTemplateGrids();
  initActions();
  renderDynamicForms();
  setI18n();
  switchMode('cv');
}
boot();
