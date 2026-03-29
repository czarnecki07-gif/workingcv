
const text = {"pl": {"navCv": "CV", "navLetter": "List motywacyjny", "heroTitle": "Stwórz eleganckie i skuteczne CV oraz list motywacyjny", "heroSubtitle": "Wybierz wzór, uzupełnij dane i pobierz gotowy PDF.", "templatesCv": "Szablony CV", "templatesLetter": "Szablony listu", "formCv": "Dane CV", "formLetter": "Dane listu", "photo": "Zdjęcie", "photoPosition": "Przesunięcie zdjęcia", "noPhoto": "Bez zdjęcia", "fullName": "Imię i nazwisko", "jobTitle": "Stanowisko / profil", "address": "Adres", "phone": "Telefon", "email": "E-mail", "summary": "Profil zawodowy", "experience": "Doświadczenie zawodowe", "skills": "Umiejętności", "languages": "Języki", "education": "Edukacja", "add": "+ Dodaj", "remove": "Usuń", "downloadCv": "Pobierz PDF CV", "downloadLetter": "Pobierz PDF listu", "previewCv": "Format A4 — podgląd CV", "previewLetter": "Format A4 — podgląd listu", "letterName": "Imię i nazwisko", "company": "Firma", "position": "Stanowisko", "recipient": "Adresat / HR", "letterBody": "Treść listu", "prompts": "Podpowiedzi", "skillName": "Umiejętność", "skillLevel": "Poziom", "languageName": "Język", "languageLevel": "Poziom CEFR", "school": "Szkoła / uczelnia", "field": "Kierunek", "period": "Daty", "description": "Opis", "subject": "Aplikacja na stanowisko", "date": "Data", "placeholderSummary": "Krótko opisz doświadczenie, specjalizację i najmocniejsze atuty.", "placeholderLetter": "Tutaj powstanie treść listu.", "emptyExp": "Dodaj doświadczenie zawodowe", "emptySkills": "Dodaj umiejętności", "emptyLanguages": "Dodaj język", "emptyEducation": "Dodaj edukację"}, "en": {"navCv": "CV", "navLetter": "Cover letter", "heroTitle": "Create an elegant and effective CV and cover letter", "heroSubtitle": "Choose a template, fill in your details, and download a ready PDF.", "templatesCv": "CV templates", "templatesLetter": "Letter templates", "formCv": "CV data", "formLetter": "Letter data", "photo": "Photo", "photoPosition": "Photo position", "noPhoto": "No photo", "fullName": "Full name", "jobTitle": "Role / profile", "address": "Address", "phone": "Phone", "email": "Email", "summary": "Professional profile", "experience": "Work experience", "skills": "Skills", "languages": "Languages", "education": "Education", "add": "+ Add", "remove": "Remove", "downloadCv": "Download CV PDF", "downloadLetter": "Download letter PDF", "previewCv": "A4 format — CV preview", "previewLetter": "A4 format — letter preview", "letterName": "Full name", "company": "Company", "position": "Position", "recipient": "Recipient / HR", "letterBody": "Letter body", "prompts": "Prompts", "skillName": "Skill", "skillLevel": "Level", "languageName": "Language", "languageLevel": "CEFR level", "school": "School / university", "field": "Field", "period": "Dates", "description": "Description", "subject": "Application for the position", "date": "Date", "placeholderSummary": "Briefly describe your experience, specialization, and strongest qualities.", "placeholderLetter": "Write your cover letter here.", "emptyExp": "Add work experience", "emptySkills": "Add skills", "emptyLanguages": "Add a language", "emptyEducation": "Add education"}};
const prompts = {"pl": ["Z zainteresowaniem aplikuję na to stanowisko, ponieważ odpowiada ono mojemu doświadczeniu i kompetencjom.", "W dotychczasowej pracy realizowałem/am zadania wymagające odpowiedzialności, dokładności i dobrej organizacji.", "Moją mocną stroną jest łączenie samodzielności z efektywną współpracą zespołową.", "Szybko adaptuję się do nowych procesów i dobrze odnajduję się w dynamicznym środowisku pracy.", "Mam doświadczenie w kontakcie z klientem i w utrzymywaniu wysokiego standardu komunikacji.", "Cenię jasne cele, odpowiedzialność i terminowe dostarczanie rezultatów.", "Wierzę, że moje umiejętności organizacyjne będą realnym wsparciem dla zespołu.", "Jestem osobą zaangażowaną, dokładną i nastawioną na rozwój zawodowy.", "Chętnie wykorzystam swoje doświadczenie, aby skutecznie wspierać cele firmy.", "Dziękuję za rozpatrzenie mojej kandydatury. Chętnie omówię szczegóły podczas rozmowy.", "Wyrażam zgodę na zgodne z przepisami prawa przetwarzanie moich danych osobowych dla celów rekrutacji."], "en": ["I am excited to apply for this position because it aligns well with my experience and strengths.", "In my previous roles, I handled responsibilities that required ownership, accuracy, and strong organization.", "One of my key strengths is combining independent work with effective teamwork.", "I adapt quickly to new processes and perform well in dynamic environments.", "I have experience in client-facing work and in maintaining a high standard of communication.", "I value clear goals, responsibility, and delivering results on time.", "I believe my organizational skills would be a real asset to your team.", "I am a committed, detail-oriented person with a strong drive for professional growth.", "I would be glad to use my experience to support your company’s goals effectively.", "Thank you for considering my application. I would welcome the opportunity to discuss my fit in more detail.", "I consent to the processing of my personal data for recruitment purposes in accordance with applicable law."]};
const cvTemplates = [
  {code:"anna", name:"Creative Blue", thumb:"anna", portrait:"portrait-man.png"},
  {code:"hr", name:"Minimal HR", thumb:"hr", portrait:"portrait-woman.png"},
  {code:"karen", name:"Premium Sidebar", thumb:"karen", portrait:"portrait-woman.png"},
  {code:"olivia", name:"Portrait Executive", thumb:"olivia", portrait:"portrait-woman.png"},
  {code:"sage", name:"Soft Modern", thumb:"sage", portrait:"portrait-man.png"}
];
const letterTemplates = [
  {code:"min", name:"Minimal Match", thumb:"letter-min"},
  {code:"dark", name:"Corporate Dark", thumb:"letter-dark"},
  {code:"soft", name:"Soft Elegant", thumb:"letter-soft"}
];
const cefrLevels = ["A1","A2","B1","B2","C1","C2"];
const state = {lang:"pl", mode:"cv", cvTemplate:"karen", letterTemplate:"dark", userPhoto:null, photoY:35, experience:[], skills:[], languages:[], education:[], pdfCounts:{anna:800,hr:2100,karen:1200,olivia:1000,sage:700,dark:600,min:1200,soft:600}, premium:{karen:true,olivia:true,sage:true,anna:false,hr:false,dark:true,min:false,soft:true}, premiumEnabled:false};

const $ = id => document.getElementById(id);
const docText = {
  de:{summary:'Berufsprofil',experience:'Berufserfahrung',skills:'Fähigkeiten',languages:'Sprachen',education:'Ausbildung',address:'Kontakt',date:'Datum',subject:'Bewerbung auf die Stelle'},
  es:{summary:'Perfil profesional',experience:'Experiencia laboral',skills:'Habilidades',languages:'Idiomas',education:'Educación',address:'Contacto',date:'Fecha',subject:'Solicitud para el puesto'},
  fr:{summary:'Profil professionnel',experience:'Expérience professionnelle',skills:'Compétences',languages:'Langues',education:'Formation',address:'Contact',date:'Date',subject:'Candidature au poste'},
  uk:{summary:'Професійний профіль',experience:'Досвід роботи',skills:'Навички',languages:'Мови',education:'Освіта',address:'Контакти',date:'Дата',subject:'Заявка на посаду'},
  ru:{summary:'Профессиональный профиль',experience:'Опыт работы',skills:'Навыки',languages:'Языки',education:'Образование',address:'Контакты',date:'Дата',subject:'Заявка на должность'},
  pt:{summary:'Perfil profissional',experience:'Experiência profissional',skills:'Competências',languages:'Idiomas',education:'Educação',address:'Contacto',date:'Data',subject:'Candidatura à posição'},
  cs:{summary:'Profesní profil',experience:'Pracovní zkušenosti',skills:'Dovednosti',languages:'Jazyky',education:'Vzdělání',address:'Kontakt',date:'Datum',subject:'Žádost o pozici'},
  sk:{summary:'Profesijný profil',experience:'Pracovné skúsenosti',skills:'Zručnosti',languages:'Jazyky',education:'Vzdelanie',address:'Kontakt',date:'Dátum',subject:'Žiadosť o pozíciu'},
  hu:{summary:'Szakmai profil',experience:'Munkatapasztalat',skills:'Készségek',languages:'Nyelvek',education:'Oktatás',address:'Kapcsolat',date:'Dátum',subject:'Jelentkezés a pozícióra'},
  it:{summary:'Profilo professionale',experience:'Esperienza lavorativa',skills:'Competenze',languages:'Lingue',education:'Formazione',address:'Contatti',date:'Data',subject:'Candidatura per la posizione'},
  nl:{summary:'Professioneel profiel',experience:'Werkervaring',skills:'Vaardigheden',languages:'Talen',education:'Opleiding',address:'Contact',date:'Datum',subject:'Sollicitatie voor de functie'}
};
const t = k => (docText[state.lang] && docText[state.lang][k]) || (text[state.lang] && text[state.lang][k]) || text.en[k] || k;
function esc(v) { return String(v||"").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }

function photoMarkup() {
  if (!state.userPhoto) return "";
  return `<img class="doc-photo" style="--photo-y:${state.photoY}%" src="${state.userPhoto}" alt="">`;
}

function save() {
  localStorage.setItem("workingcv_complete_plus", JSON.stringify({
    state,
    inputs: {
      fullNameInput:$("fullNameInput").value, jobTitleInput:$("jobTitleInput").value, addressInput:$("addressInput").value,
      phoneInput:$("phoneInput").value, emailInput:$("emailInput").value, summaryInput:$("summaryInput").value,
      letterNameInput:$("letterNameInput").value, companyInput:$("companyInput").value, positionInput:$("positionInput").value,
      recipientInput:$("recipientInput").value, letterAddressInput:$("letterAddressInput").value, letterPhoneInput:$("letterPhoneInput").value,
      letterEmailInput:$("letterEmailInput").value, letterBodyInput:$("letterBodyInput").value
    }
  }));
}

function load() {
  try {
    const raw = localStorage.getItem("workingcv_complete_plus");
    if (!raw) return;
    const parsed = JSON.parse(raw);
    Object.assign(state, parsed.state || {}); if(!state.pdfCounts) state.pdfCounts={karen:1248,olivia:982,sage:731,anna:856,hr:2140,dark:645,min:1184,soft:593}; if(!state.premium) state.premium={karen:true,olivia:true,sage:true,anna:false,hr:false,dark:true,min:false,soft:true};
    Object.entries(parsed.inputs || {}).forEach(([id, val]) => { if ($(id)) $(id).value = val; });
  } catch(e) {}
}

function switchMode(mode) {
  state.mode = mode;
  $("cvSection").classList.toggle("active-section", mode === "cv");
  $("letterSection").classList.toggle("active-section", mode === "letter");
  document.querySelectorAll("[data-mode]").forEach(btn => btn.classList.toggle("active", btn.dataset.mode === mode));
  save();
}

function applyTexts() {
  const map = {
    navCv:"navCv", navLetter:"navLetter", heroTitle:"heroTitle", heroSubtitle:"heroSubtitle", templatesCv:"templatesCv", templatesLetter:"templatesLetter",
    formCv:"formCv", formLetter:"formLetter", photo:"photo", photoPosition:"photoPosition", fullName:"fullName", jobTitle:"jobTitle",
    address:"address", phone:"phone", email:"email", summary:"summary", experience:"experience", skills:"skills", languages:"languages",
    education:"education", downloadCv:"downloadCv", downloadLetter:"downloadLetter", previewCv:"previewCv", previewLetter:"previewLetter",
    letterName:"letterName", company:"company", position:"position", recipient:"recipient", prompts:"prompts", letterBody:"letterBody"
  };
  Object.entries(map).forEach(([k,id]) => { if ($(id)) $(id).textContent = t(k); });
  $("addExpBtn").textContent = t("add");
  $("addSkillBtn").textContent = t("add");
  $("addLangBtn").textContent = t("add");
  $("addEduBtn").textContent = t("add");
  if($("removePhotoBtn")) $("removePhotoBtn").textContent = t("noPhoto");
  if($("noPhotoBtn")) $("noPhotoBtn").textContent = t("noPhoto");
  if($("malePortraitBtn")) $("malePortraitBtn").textContent = t("malePortrait");
  if($("femalePortraitBtn")) $("femalePortraitBtn").textContent = t("femalePortrait");
  $("summaryInput").placeholder = t("placeholderSummary");
  $("letterBodyInput").placeholder = t("placeholderLetter");
  renderLists(); renderPromptBank(); renderThumbs(); renderCV(); renderLetter();
}


function thumbCVMarkup(code){
  const sample = {
    name: code==='hr' ? 'Marek Nowak' : 'Anna Kowalska',
    role: code==='olivia' ? 'Senior Marketing Lead' : (code==='sage' ? 'Business Consultant' : (code==='hr' ? 'Operations Manager' : 'Project Manager')),
    address: code==='hr' ? 'Kraków, Poland' : 'Warsaw, Poland',
    phone: '+48 500 000 000',
    email: code==='hr' ? 'marek@example.com' : 'anna@example.com',
    summary: 'Experienced professional focused on communication, organization, and reliable execution.',
    photo: code==='sage' || code==='hr' ? 'portrait-man.png' : 'portrait-woman.png',
    exp: `<div class="entry"><div class="entry-title">${code==='olivia'?'Marketing Director':'Senior Project Manager'}</div><div class="entry-meta">Example Company • 2021–2025</div><div class="entry-text">Managed projects, coordinated teams, and delivered structured business outcomes.</div></div>`,
    sk: `<div class="rating-row"><span>Communication</span>${ratingDots(4)}</div><div class="rating-row"><span>Planning</span>${ratingDots(5)}</div>`,
    lg: `<div class="entry"><div class="entry-title">English</div><div class="entry-meta">C1</div></div><div class="entry"><div class="entry-title">German</div><div class="entry-meta">B2</div></div>`,
    ed: `<div class="entry"><div class="entry-title">University of Warsaw</div><div class="entry-meta">Management • 2014–2019</div><div class="entry-text">Master degree in management.</div></div>`
  };
  const contacts = [sample.address,sample.phone,sample.email].map(v=>`<div class="entry-text">${v}</div>`).join('');
  const photo = `<img class="doc-photo" style="--photo-y:35%" src="${sample.photo}" alt="">`;
  if(code==='karen') return `<div class="sheet"><div class="cv karen"><div class="side"><div class="photo-wrap">${photo}</div><div class="side-inner"><div class="section"><h4>${t('address')}</h4>${contacts}</div><div class="section"><h4>${t('languages')}</h4>${sample.lg}</div><div class="section"><h4>${t('education')}</h4>${sample.ed}</div></div></div><div class="main"><div class="accent"><div class="name">${sample.name}</div></div><div class="role">${sample.role}</div><div class="section"><h3>${t('summary')}</h3><div class="entry-text">${sample.summary}</div></div><div class="section"><h3>${t('experience')}</h3>${sample.exp}</div><div class="section"><h3>${t('skills')}</h3>${sample.sk}</div></div></div></div>`;
  if(code==='olivia') return `<div class="sheet"><div class="cv olivia"><div class="left-top">${photo}</div><div class="left-mid"><div class="section languages-block" style="margin-top:0;"><h3>${t('languages')}</h3>${sample.lg}</div></div><div class="left-bottom"><div class="section" style="margin-top:0;"><h3 style="color:#fff">${t('skills')}</h3>${sample.sk}</div><div class="section"><h3 style="color:#fff">${t('education')}</h3>${sample.ed}</div></div><div class="right"><div class="right-head"><div><div class="name">${sample.name}</div><div class="role" style="color:#fff">${sample.role}</div></div><div class="contact-block">${sample.address}<br>${sample.phone}<br>${sample.email}</div></div><div class="section"><h3>${t('summary')}</h3><div class="entry-text">${sample.summary}</div></div><div class="section"><h3>${t('experience')}</h3>${sample.exp}</div></div></div></div>`;
  if(code==='sage') return `<div class="sheet"><div class="cv sage"><div class="top"><div><div class="name">${sample.name}</div><div class="role" style="color:#4f4354">${sample.role}</div><div class="entry-text" style="margin-top:12px">${contacts}</div></div>${photo}</div><div class="grid"><div><div class="section" style="margin-top:0;"><h3>${t('summary')}</h3><div class="entry-text">${sample.summary}</div></div><div class="section"><h3>${t('experience')}</h3>${sample.exp}</div></div><div><div class="section" style="margin-top:0;"><h3>${t('skills')}</h3>${sample.sk}</div><div class="section"><h3>${t('languages')}</h3>${sample.lg}</div><div class="section"><h3>${t('education')}</h3>${sample.ed}</div></div></div></div></div>`;
  if(code==='anna') return `<div class="sheet"><div class="cv anna"><div class="side"><div class="name">${sample.name.replace(" ","<br>")}</div>${photo}<div class="section" style="margin-top:0;"><h4>${t('address')}</h4>${contacts}</div><div class="section"><h4>${t('languages')}</h4>${sample.lg}</div><div class="section"><h4>${t('education')}</h4>${sample.ed}</div></div><div class="main"><div class="section" style="margin-top:0;"><h3>${t('summary')}</h3><div class="entry-text">${sample.summary}</div></div><div class="section"><h3>${t('experience')}</h3>${sample.exp}</div><div class="section"><h3>${t('skills')}</h3>${sample.sk}</div></div></div></div>`;
  return `<div class="sheet"><div class="cv hr"><div class="head"><div><div class="name">${sample.name}</div><div class="entry-text">${sample.address} • ${sample.phone} • ${sample.email}</div></div>${photo}</div><div class="section"><h3>${t('summary')}</h3><div class="entry-text">${sample.summary}</div></div><div class="section"><h3>${t('experience')}</h3>${sample.exp}</div><div class="section"><h3>${t('skills')}</h3>${sample.sk}</div><div class="section"><h3>${t('languages')}</h3>${sample.lg}</div><div class="section"><h3>${t('education')}</h3>${sample.ed}</div></div></div>`;
}
function thumbLetterMarkup(code){
  const body=`I am applying for this position because it aligns with my experience and strengths.\n\nIn my previous roles, I consistently delivered results with accuracy and responsibility.\n\nThank you for considering my application.`;
  const right = `${t('date')}: 03/28/2026
Example Company
HR Department`;
  const left = `Warsaw, Poland
+48 500 000 000
anna@example.com`;
  const subj = `${t('subject')}: Project Manager`;
  if(code==='dark') return `<div class="sheet"><div class="letter dark"><div class="letter-head"><div><div class="letter-name">Anna Kowalska</div><div class="letter-small">${left}</div></div><div class="letter-small">${right}</div></div><div class="letter-subject">${subj}</div><div class="letter-body">${body}</div></div></div>`;
  if(code==='min') return `<div class="sheet"><div class="letter min"><div class="side"><div class="letter-name">Anna Kowalska</div><div class="letter-small" style="margin-top:16px">${left}</div></div><div class="main"><div class="letter-small">${right}</div><div class="letter-subject">${subj}</div><div class="letter-body">${body}</div></div></div></div>`;
  return `<div class="sheet"><div class="letter soft"><div class="letter-head"><div><div class="letter-name" style="color:#584a5b">Anna Kowalska</div><div class="letter-small">${left}</div></div><div class="letter-small">${right}</div></div><div class="letter-subject" style="color:#584a5b">${subj}</div><div class="letter-body">${body}</div></div></div>`;
}

function renderThumbs() {
  const badge = code => `<div class="thumb-meta-badge ${state.premium && state.premium[code] ? 'premium' : 'free'}">${state.premium && state.premium[code] ? 'premium' : 'free'}</div>`;
  const counter = code => `<div class="thumb-meta-count">${(state.pdfCounts && state.pdfCounts[code]) || 0} PDF</div>`;
  $("cvThumbs").innerHTML = cvTemplates.map(tpl => `
  <div class="thumb-card ${state.cvTemplate===tpl.code?'active':''}" data-kind="cv" data-code="${tpl.code}">
    <div class="thumb-page-wrap"><div class="thumb-page-scale">${thumbCVMarkup(tpl.code)}</div></div>
    <div class="thumb-meta-row">${badge(tpl.code)}${counter(tpl.code)}</div>
    <div class="label">${tpl.name}</div>
  </div>`).join("");
  $("letterThumbs").innerHTML = letterTemplates.map(tpl => `
  <div class="thumb-card ${state.letterTemplate===tpl.code?'active':''}" data-kind="letter" data-code="${tpl.code}">
    <div class="thumb-page-wrap"><div class="thumb-page-scale">${thumbLetterMarkup(tpl.code)}</div></div>
    <div class="thumb-meta-row">${badge(tpl.code)}${counter(tpl.code)}</div>
    <div class="label">${tpl.name}</div>
  </div>`).join("");
  document.querySelectorAll(".thumb-card").forEach(card => card.onclick = () => {
    if (card.dataset.kind === "cv") state.cvTemplate = card.dataset.code; else state.letterTemplate = card.dataset.code;
    renderThumbs(); renderCV(); renderLetter(); save();
  });
}


function addItem(type) {
  if (type === "experience") state.experience.push({position:"",company:"",dates:"",desc:""});
  if (type === "skills") state.skills.push({name:"",level:3});
  if (type === "languages") state.languages.push({name:"",level:"B2"});
  if (type === "education") state.education.push({school:"",field:"",dates:"",desc:""});
  renderLists(); renderCV(); save();
}
function updateItem(type, i, key, val) { state[type][i][key] = val; renderLists(); renderCV(); save(); }
function removeItem(type, i) { state[type].splice(i,1); renderLists(); renderCV(); save(); }
function setSkillLevel(i, level) { state.skills[i].level = level; renderLists(); renderCV(); save(); }
function setLanguageLevel(i, level) { state.languages[i].level = level; renderLists(); renderCV(); save(); }
window.updateItem = updateItem; window.removeItem = removeItem; window.setSkillLevel = setSkillLevel; window.setLanguageLevel = setLanguageLevel;

function dotsSelect(value, i) { return `<div class="dots-select">${[1,2,3,4,5].map(n => `<button type="button" class="dot-btn ${n<=value?'on':''}" onclick="setSkillLevel(${i},${n})"></button>`).join("")}</div>`; }
function cefrSelect(value, i) { return `<select onchange="setLanguageLevel(${i}, this.value)">${cefrLevels.map(l => `<option value="${l}" ${l===value?'selected':''}>${l}</option>`).join("")}</select>`; }

function renderLists() {
  $("expList").innerHTML = state.experience.map((it,i) => `<div class="item-card"><div class="item-head"><div class="item-title">${t("experience")} ${i+1}</div><button class="remove-btn" onclick="removeItem('experience',${i})">${t("remove")}</button></div><div class="field"><label>${t("jobTitle")}</label><input value="${esc(it.position)}" onchange="updateItem('experience',${i},'position',this.value)"></div><div class="field"><label>${t("company")}</label><input value="${esc(it.company)}" onchange="updateItem('experience',${i},'company',this.value)"></div><div class="field"><label>${t("period")}</label><input value="${esc(it.dates)}" onchange="updateItem('experience',${i},'dates',this.value)"></div><div class="field"><label>${t("description")}</label><textarea rows="3" onchange="updateItem('experience',${i},'desc',this.value)">${esc(it.desc)}</textarea></div></div>`).join("");
  $("skillList").innerHTML = state.skills.map((it,i) => `<div class="item-card"><div class="item-head"><div class="item-title">${t("skills")} ${i+1}</div><button class="remove-btn" onclick="removeItem('skills',${i})">${t("remove")}</button></div><div class="field"><label>${t("skillName")}</label><input value="${esc(it.name)}" onchange="updateItem('skills',${i},'name',this.value)"></div><div class="field"><label>${t("skillLevel")}</label>${dotsSelect(it.level||3,i)}</div></div>`).join("");
  $("langList").innerHTML = state.languages.map((it,i) => `<div class="item-card"><div class="item-head"><div class="item-title">${t("languages")} ${i+1}</div><button class="remove-btn" onclick="removeItem('languages',${i})">${t("remove")}</button></div><div class="field"><label>${t("languageName")}</label><input value="${esc(it.name)}" onchange="updateItem('languages',${i},'name',this.value)"></div><div class="field"><label>${t("languageLevel")}</label>${cefrSelect(it.level||'B2',i)}</div></div>`).join("");
  $("eduList").innerHTML = state.education.map((it,i) => `<div class="item-card"><div class="item-head"><div class="item-title">${t("education")} ${i+1}</div><button class="remove-btn" onclick="removeItem('education',${i})">${t("remove")}</button></div><div class="field"><label>${t("school")}</label><input value="${esc(it.school)}" onchange="updateItem('education',${i},'school',this.value)"></div><div class="field"><label>${t("field")}</label><input value="${esc(it.field)}" onchange="updateItem('education',${i},'field',this.value)"></div><div class="field"><label>${t("period")}</label><input value="${esc(it.dates)}" onchange="updateItem('education',${i},'dates',this.value)"></div><div class="field"><label>${t("description")}</label><textarea rows="3" onchange="updateItem('education',${i},'desc',this.value)">${esc(it.desc)}</textarea></div></div>`).join("");
}


function renderPromptBank() {
  const bank = prompts[state.lang] || prompts["en"];
  const container = document.getElementById("promptBank");
  if (!container) return;
  container.innerHTML = bank.map((txt, idx) => `<button type="button" class="prompt-chip" data-idx="${idx}"><strong>${esc(txt)}</strong></button>`).join("");
  container.querySelectorAll(".prompt-chip").forEach((btn, idx) => {
    btn.addEventListener("click", () => appendPrompt(bank[idx]));
  });
}

function appendPrompt(txt) {
  const el = $("letterBodyInput");
  el.value = el.value ? el.value + "\n\n" + txt : txt;
  renderLetter(); save();
}
window.appendPrompt = appendPrompt;

function ratingDots(level) { return `<span class="dots">${[1,2,3,4,5].map(n => `<span class="dot ${n<=level?'':'off'}"></span>`).join("")}</span>`; }

function renderCV() {
  const d = {
    name: $("fullNameInput").value.trim() || "Anna Kowalska",
    role: $("jobTitleInput").value.trim() || "Project Manager",
    address: $("addressInput").value.trim(),
    phone: $("phoneInput").value.trim(),
    email: $("emailInput").value.trim(),
    summary: $("summaryInput").value.trim() || t("placeholderSummary")
  };
  const contacts = [d.address, d.phone, d.email].filter(Boolean).map(v => `<div class="entry-text">${esc(v)}</div>`).join("") || "<div class='entry-text'>—</div>";
  const exp = state.experience.length ? state.experience.map(it => `<div class="entry"><div class="entry-title">${esc(it.position||"-")}</div><div class="entry-meta">${esc(it.company||"")}${it.company&&it.dates?" • ":""}${esc(it.dates||"")}</div><div class="entry-text">${esc(it.desc||"")}</div></div>`).join("") : `<div class="entry-text">${t("emptyExp")}</div>`;
  const sk = state.skills.length ? state.skills.map(it => `<div class="rating-row"><span>${esc(it.name||"-")}</span>${ratingDots(it.level||3)}</div>`).join("") : `<div class="entry-text">${t("emptySkills")}</div>`;
  const lg = state.languages.length ? state.languages.map(it => `<div class="entry"><div class="entry-title">${esc(it.name||"-")}</div><div class="entry-meta">${esc(it.level||"B2")}</div></div>`).join("") : `<div class="entry-text">${t("emptyLanguages")}</div>`;
  const ed = state.education.length ? state.education.map(it => `<div class="entry"><div class="entry-title">${esc(it.school||"-")}</div><div class="entry-meta">${esc(it.field||"")}${it.field&&it.dates?" • ":""}${esc(it.dates||"")}</div><div class="entry-text">${esc(it.desc||"")}</div></div>`).join("") : `<div class="entry-text">${t("emptyEducation")}</div>`;
  const p = $("cvPreview");
  if (state.cvTemplate === "karen") p.innerHTML = `<div class="cv karen"><div class="side"><div class="photo-wrap">${photoMarkup()}</div><div class="side-inner"><div class="section"><h4>${t("address")}</h4>${contacts}</div><div class="section"><h4>${t("languages")}</h4>${lg}</div><div class="section"><h4>${t("education")}</h4>${ed}</div></div></div><div class="main"><div class="accent"><div class="name">${esc(d.name)}</div></div><div class="role">${esc(d.role)}</div><div class="section"><h3>${t("summary")}</h3><div class="entry-text">${esc(d.summary)}</div></div><div class="section"><h3>${t("experience")}</h3>${exp}</div><div class="section"><h3>${t("skills")}</h3>${sk}</div></div></div>`;
  if (state.cvTemplate === "olivia") p.innerHTML = `<div class="cv olivia"><div class="left-top">${photoMarkup()}</div><div class="left-mid"><div class="section languages-block" style="margin-top:0;"><h3>${t("languages")}</h3>${lg}</div></div><div class="left-bottom"><div class="section" style="margin-top:0;"><h3 style="color:#fff">${t("skills")}</h3>${sk}</div><div class="section"><h3 style="color:#fff">${t("education")}</h3>${ed}</div></div><div class="right"><div class="right-head"><div><div class="name">${esc(d.name)}</div><div class="role" style="color:#fff">${esc(d.role)}</div></div><div class="contact-block">${contacts}</div></div><div class="section"><h3>${t("summary")}</h3><div class="entry-text">${esc(d.summary)}</div></div><div class="section"><h3>${t("experience")}</h3>${exp}</div></div></div>`;
  if (state.cvTemplate === "sage") p.innerHTML = `<div class="cv sage"><div class="top"><div><div class="name">${esc(d.name)}</div><div class="role" style="color:#4f4354">${esc(d.role)}</div><div class="entry-text" style="margin-top:12px">${contacts}</div></div>${photoMarkup()}</div><div class="grid"><div><div class="section" style="margin-top:0;"><h3>${t("summary")}</h3><div class="entry-text">${esc(d.summary)}</div></div><div class="section"><h3>${t("experience")}</h3>${exp}</div></div><div><div class="section" style="margin-top:0;"><h3>${t("skills")}</h3>${sk}</div><div class="section"><h3>${t("languages")}</h3>${lg}</div><div class="section"><h3>${t("education")}</h3>${ed}</div></div></div></div>`;
  if (state.cvTemplate === "anna") p.innerHTML = `<div class="cv anna"><div class="side"><div class="name">${esc(d.name).replace(" ","<br>")}</div>${photoMarkup()}<div class="section" style="margin-top:0;"><h4>${t("address")}</h4>${contacts}</div><div class="section"><h4>${t("languages")}</h4>${lg}</div><div class="section"><h4>${t("education")}</h4>${ed}</div></div><div class="main"><div class="section" style="margin-top:0;"><h3>${t("summary")}</h3><div class="entry-text">${esc(d.summary)}</div></div><div class="section"><h3>${t("experience")}</h3>${exp}</div><div class="section"><h3>${t("skills")}</h3>${sk}</div></div></div>`;
  if (state.cvTemplate === "hr") p.innerHTML = `<div class="cv hr"><div class="head"><div><div class="name">${esc(d.name)}</div><div class="entry-text">${contacts.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}</div></div>${photoMarkup()}</div><div class="section"><h3>${t("summary")}</h3><div class="entry-text">${esc(d.summary)}</div></div><div class="section"><h3>${t("experience")}</h3>${exp}</div><div class="section"><h3>${t("skills")}</h3><div class="entry-text">${state.skills.map(s=>esc(s.name)).join(", ")||t("emptySkills")}</div></div><div class="section"><h3>${t("languages")}</h3><div class="entry-text">${state.languages.map(l=>`${esc(l.name)} (${esc(l.level)})`).join(", ")||t("emptyLanguages")}</div></div><div class="section"><h3>${t("education")}</h3>${ed}</div></div>`;
}

function renderLetter() {
  const d = {
    name: $("letterNameInput").value.trim() || $("fullNameInput").value.trim() || "Anna Kowalska",
    company: $("companyInput").value.trim(),
    position: $("positionInput").value.trim(),
    recipient: $("recipientInput").value.trim(),
    address: $("letterAddressInput").value.trim(),
    phone: $("letterPhoneInput").value.trim(),
    email: $("letterEmailInput").value.trim(),
    body: $("letterBodyInput").value.trim() || t("placeholderLetter")
  };
  const right = `${t("date")}: ${new Date().toLocaleDateString()}\n${esc(d.company)}\n${esc(d.recipient)}`;
  const left = `${esc(d.address)}\n${esc(d.phone)}\n${esc(d.email)}`;
  const subj = `${t("subject")}: ${esc(d.position||"-")}`;
  const p = $("letterPreview");
  if (state.letterTemplate === "dark") p.innerHTML = `<div class="letter dark"><div class="letter-head"><div><div class="letter-name">${esc(d.name)}</div><div class="letter-small">${left}</div></div><div class="letter-small">${right}</div></div><div class="letter-subject">${subj}</div><div class="letter-body">${esc(d.body)}</div></div>`;
  if (state.letterTemplate === "min") p.innerHTML = `<div class="letter min"><div class="side"><div class="letter-name">${esc(d.name)}</div><div class="letter-small" style="margin-top:16px">${left}</div></div><div class="main"><div class="letter-small">${right}</div><div class="letter-subject">${subj}</div><div class="letter-body">${esc(d.body)}</div></div></div>`;
  if (state.letterTemplate === "soft") p.innerHTML = `<div class="letter soft"><div class="letter-head"><div><div class="letter-name" style="color:#584a5b">${esc(d.name)}</div><div class="letter-small">${left}</div></div><div class="letter-small">${right}</div></div><div class="letter-subject" style="color:#584a5b">${subj}</div><div class="letter-body">${esc(d.body)}</div></div>`;
}

function printCurrent(mode) { switchMode(mode); const code = mode==="cv" ? state.cvTemplate : state.letterTemplate; if(!state.pdfCounts) state.pdfCounts={}; state.pdfCounts[code]=(state.pdfCounts[code]||0)+1; save(); renderThumbs(); setTimeout(() => window.print(), 100); }

function bind() {
  document.querySelectorAll("[data-mode]").forEach(btn => btn.addEventListener("click", () => switchMode(btn.dataset.mode)));
  ["fullNameInput","jobTitleInput","addressInput","phoneInput","emailInput","summaryInput","letterNameInput","companyInput","positionInput","recipientInput","letterAddressInput","letterPhoneInput","letterEmailInput","letterBodyInput"].forEach(id => $(id).addEventListener("input", () => { renderCV(); renderLetter(); save(); }));
  $("photoY").addEventListener("input", e => { state.photoY = Number(e.target.value); renderCV(); save(); });
  if($("removePhotoBtn")) $("removePhotoBtn").addEventListener("click", () => { state.userPhoto = null; renderCV(); save(); });
  $("photoInput").addEventListener("change", e => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => { state.userPhoto = r.result; renderCV(); save(); }; r.readAsDataURL(f); });
  if ($("noPhotoBtn")) $("noPhotoBtn").addEventListener("click", () => { state.userPhoto = null; $("photoInput").value = ""; renderCV(); save(); });
  $("addExpBtn").onclick = () => addItem("experience");
  $("addSkillBtn").onclick = () => addItem("skills");
  $("addLangBtn").onclick = () => addItem("languages");
  $("addEduBtn").onclick = () => addItem("education");
  $("downloadCv").onclick = () => printCurrent("cv");
  $("downloadLetter").onclick = () => printCurrent("letter");
  $("langSelect").addEventListener("change", e => {
  state.lang = e.target.value;
  applyTexts();
  renderPromptBank();
  renderThumbs();
  renderCV();
  renderLetter();
  save();
});
}

document.addEventListener("DOMContentLoaded", () => {
  load();
  $("langSelect").value = state.lang || "pl";
  $("photoY").value = state.photoY || 35;
  renderThumbs();
  bind();
  applyTexts();
  switchMode(state.mode || "cv");
});


document.addEventListener("DOMContentLoaded", () => {
  const noPhotoBtn = document.getElementById("noPhotoBtn");
  if (noPhotoBtn) {
    noPhotoBtn.addEventListener("click", () => {
      state.userPhoto = null;
      const input = document.getElementById("photoInput");
      if (input) input.value = "";
      renderCV();
      save();
    });
  }
});

const gdprClause = {"pl": "Wyrażam zgodę na zgodne z przepisami prawa przetwarzanie moich danych osobowych dla celów rekrutacji.", "en": "I consent to the processing of my personal data for recruitment purposes in accordance with applicable law.", "de": "Ich stimme der Verarbeitung meiner personenbezogenen Daten für Rekrutierungszwecke gemäß den gesetzlichen Bestimmungen zu.", "es": "Doy mi consentimiento para el tratamiento de mis datos personales con fines de reclutamiento de acuerdo con la legislación aplicable.", "fr": "Je consens au traitement de mes données personnelles à des fins de recrutement conformément à la législation en vigueur.", "it": "Acconsento al trattamento dei miei dati personali ai fini della selezione in conformità alla normativa vigente.", "pt": "Dou o meu consentimento para o tratamento dos meus dados pessoais para fins de recrutamento de acordo com a legislação aplicável.", "cs": "Souhlasím se zpracováním svých osobních údajů pro účely náboru v souladu s platnými právními předpisy.", "sk": "Súhlasím so spracovaním svojich osobných údajov na účely náboru v súlade s platnými právnymi predpismi.", "hu": "Hozzájárulok személyes adataim kezeléséhez toborzási célból a hatályos jogszabályoknak megfelelően.", "uk": "Я даю згоду на обробку моїх персональних даних для цілей працевлаштування відповідно до чинного законодавства.", "ru": "Я даю согласие на обработку моих персональных данных в целях подбора персонала в соответствии с действующим законодательством.", "nl": "Ik geef toestemming voor de verwerking van mijn persoonsgegevens voor wervingsdoeleinden in overeenstemming met de geldende wetgeving."};
