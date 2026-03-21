
const text = {
  pl:{eyebrow:"Profesjonalne dokumenty rekrutacyjne",heroTitle:"Stwórz eleganckie i skuteczne CV oraz list motywacyjny",heroSubtitle:"Wybierz styl, uzupełnij dane i pobierz gotowy PDF.",navCv:"CV",navLetter:"List motywacyjny",heroCvBtn:"Stwórz CV",heroLetterBtn:"Stwórz list",cvTemplateTitle:"Wybierz szablon CV",cvTemplateSubtitle:"Masz miks: premium + HR. Kliknij miniaturę, by budować dokument w wybranym stylu.",cvFormTitle:"Uzupełnij dane",photoLabel:"Zdjęcie",fullNameLabel:"Imię i nazwisko",jobTitleLabel:"Stanowisko / profil",addressLabel:"Adres",phoneLabel:"Telefon",emailLabel:"E-mail",summaryLabel:"Podsumowanie",experienceLabel:"Doświadczenie zawodowe",educationLabel:"Edukacja",skillsLabel:"Umiejętności",downloadCvBtn:"Pobierz PDF CV",cvPreviewBadge:"Format A4 — podgląd CV",letterTemplateTitle:"Wybierz szablon listu motywacyjnego",letterTemplateSubtitle:"Szablony listów są dopasowane do stylów CV. Kliknij gotowe zdanie, by dodać je do treści.",letterFormTitle:"Uzupełnij list",letterNameLabel:"Imię i nazwisko",letterAddressLabel:"Adres",letterPhoneLabel:"Telefon",letterEmailLabel:"E-mail",companyLabel:"Firma",positionLabel:"Stanowisko",recipientLabel:"Adresat / dział rekrutacji",sentenceBankLabel:"Gotowe zdania",letterBodyLabel:"Treść listu",downloadLetterBtn:"Pobierz PDF listu",letterPreviewBadge:"Format A4 — podgląd listu",add:"+ Dodaj",remove:"Usuń",expPosition:"Stanowisko",expCompany:"Firma",expDates:"Daty",expDesc:"Opis obowiązków i osiągnięć",eduSchool:"Szkoła / uczelnia",eduField:"Kierunek",eduDates:"Daty",eduDesc:"Opis",skillName:"Umiejętność",placeholderSummary:"Krótko opisz swoje doświadczenie, specjalizację i największe atuty.",expDefault:"Dodaj doświadczenie zawodowe",eduDefault:"Dodaj edukację",skillDefault:"Dodaj umiejętności",subject:"Aplikacja na stanowisko",date:"Data",roleFallback:"Profil zawodowy",letterFallback:"Tutaj pojawi się treść listu."},
  en:{eyebrow:"Professional application documents",heroTitle:"Create an elegant and effective CV and cover letter",heroSubtitle:"Choose a style, fill in your details, and download a ready PDF.",navCv:"CV",navLetter:"Cover letter",heroCvBtn:"Create CV",heroLetterBtn:"Create letter",cvTemplateTitle:"Choose a CV template",cvTemplateSubtitle:"You have a premium + HR mix. Click a thumbnail to build your document in that style.",cvFormTitle:"Fill in your details",photoLabel:"Photo",fullNameLabel:"Full name",jobTitleLabel:"Role / profile",addressLabel:"Address",phoneLabel:"Phone",emailLabel:"Email",summaryLabel:"Summary",experienceLabel:"Work experience",educationLabel:"Education",skillsLabel:"Skills",downloadCvBtn:"Download CV PDF",cvPreviewBadge:"A4 format — CV preview",letterTemplateTitle:"Choose a cover letter template",letterTemplateSubtitle:"Letter templates match the CV styles. Click a ready-made sentence to add it.",letterFormTitle:"Fill in the letter",letterNameLabel:"Full name",letterAddressLabel:"Address",letterPhoneLabel:"Phone",letterEmailLabel:"Email",companyLabel:"Company",positionLabel:"Position",recipientLabel:"Recipient / hiring team",sentenceBankLabel:"Ready-made sentences",letterBodyLabel:"Letter body",downloadLetterBtn:"Download letter PDF",letterPreviewBadge:"A4 format — letter preview",add:"+ Add",remove:"Remove",expPosition:"Position",expCompany:"Company",expDates:"Dates",expDesc:"Responsibilities and achievements",eduSchool:"School / university",eduField:"Field",eduDates:"Dates",eduDesc:"Description",skillName:"Skill",placeholderSummary:"Briefly describe your experience, specialization, and biggest strengths.",expDefault:"Add work experience",eduDefault:"Add education",skillDefault:"Add skills",subject:"Application for the position",date:"Date",roleFallback:"Professional profile",letterFallback:"Your letter content will appear here."}
};

const aliases = {de:"en",es:"en",fr:"en",uk:"en",ru:"en",pt:"en",cs:"en",sk:"en",hu:"en",it:"en",nl:"en"};
const sentenceBankData = {
  pl:[
    "Jestem zainteresowany/a dołączeniem do Państwa zespołu, ponieważ cenię wysokie standardy pracy i możliwość rozwoju.",
    "Moje dotychczasowe doświadczenie pozwoliło mi skutecznie realizować zadania i osiągać założone cele.",
    "Wierzę, że moje umiejętności komunikacyjne i organizacyjne będą realnym wsparciem dla Państwa firmy.",
    "Chętnie wykorzystam swoją motywację, zaangażowanie i odpowiedzialność na tym stanowisku.",
    "Będę wdzięczny/a za możliwość spotkania i omówienia, jak mogę wesprzeć Państwa organizację."
  ],
  en:[
    "I am eager to join your team because I value high standards of work and opportunities for growth.",
    "My previous experience has enabled me to deliver results and meet ambitious goals effectively.",
    "I believe my communication and organizational skills would be a strong asset to your company.",
    "I would be glad to bring my motivation, commitment, and reliability to this role.",
    "Thank you for considering my application. I would welcome the opportunity to discuss my fit in more detail."
  ]
};

const state = {
  lang:"pl",
  mode:"cv",
  cvTemplate:"karen",
  letterTemplate:"dark",
  photo:"",
  experience:[],
  education:[],
  skills:[]
};

const cvTemplates = [
  {code:"karen", name:"Premium Sidebar"},
  {code:"olivia", name:"Portrait Executive"},
  {code:"sage", name:"Soft Modern"},
  {code:"anna", name:"Creative Blue"},
  {code:"hr", name:"Minimal HR"}
];

const letterTemplates = [
  {code:"dark", name:"Corporate Dark"},
  {code:"min", name:"Minimal Match"},
  {code:"soft", name:"Soft Elegant"}
];

const $ = id => document.getElementById(id);
const langKey = () => text[state.lang] ? state.lang : (aliases[state.lang] || "en");
const t = key => (text[langKey()] && text[langKey()][key]) || text.pl[key] || key;

function esc(v){
  return String(v || "").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function save(){
  localStorage.setItem("workingcv_mix_final", JSON.stringify({
    state,
    inputs:{
      fullName:$("fullName").value, jobTitle:$("jobTitle").value, address:$("address").value, phone:$("phone").value, email:$("email").value, summary:$("summary").value,
      letterName:$("letterName").value, letterAddress:$("letterAddress").value, letterPhone:$("letterPhone").value, letterEmail:$("letterEmail").value,
      company:$("company").value, position:$("position").value, recipient:$("recipient").value, letterBody:$("letterBody").value
    }
  }));
}

function load(){
  try{
    const raw = localStorage.getItem("workingcv_mix_final");
    if(!raw) return;
    const parsed = JSON.parse(raw);
    Object.assign(state, parsed.state || {});
    Object.entries(parsed.inputs || {}).forEach(([id,val]) => { if($(id)) $(id).value = val; });
  }catch(e){}
}

function applyTexts(){
  ["eyebrow","heroTitle","heroSubtitle","navCv","navLetter","heroCvBtn","heroLetterBtn","cvTemplateTitle","cvTemplateSubtitle","cvFormTitle","photoLabel","fullNameLabel","jobTitleLabel","addressLabel","phoneLabel","emailLabel","summaryLabel","experienceLabel","educationLabel","skillsLabel","downloadCvBtn","cvPreviewBadge","letterTemplateTitle","letterTemplateSubtitle","letterFormTitle","letterNameLabel","letterAddressLabel","letterPhoneLabel","letterEmailLabel","companyLabel","positionLabel","recipientLabel","sentenceBankLabel","letterBodyLabel","downloadLetterBtn","letterPreviewBadge"].forEach(id => { if($(id)) $(id).textContent = t(id); });
  $("addExperienceBtn").textContent = t("add");
  $("addEducationBtn").textContent = t("add");
  $("addSkillBtn").textContent = t("add");
  $("summary").placeholder = t("placeholderSummary");
  renderSentenceBank();
  renderLists();
  renderCV();
  renderLetter();
}

function switchMode(mode){
  state.mode = mode;
  $("cvSection").classList.toggle("active-section", mode === "cv");
  $("letterSection").classList.toggle("active-section", mode === "letter");
  document.querySelectorAll("[data-mode]").forEach(btn => btn.classList.toggle("active", btn.dataset.mode === mode));
  save();
}

function thumbMarkupCV(code){
  const cls = {
    karen:"cv-karen",
    olivia:"cv-olivia",
    sage:"cv-sage",
    anna:"cv-anna",
    hr:"cv-hr"
  }[code];
  return `
  <div class="thumb-wrap">
    <div class="thumb-page ${cls}">
      <div class="t-photo"></div>
      <div class="t-line a"></div>
      <div class="t-line b"></div>
      <div class="t-line c"></div>
      <div class="t-block one"></div>
      <div class="t-block two"></div>
    </div>
  </div>`;
}

function thumbMarkupLetter(code){
  const cls = {dark:"lt-dark", min:"lt-min", soft:"lt-soft"}[code];
  return `
  <div class="thumb-wrap">
    <div class="thumb-page ${cls}">
      <div class="t-line a"></div>
      <div class="t-line b"></div>
      <div class="t-block one"></div>
      <div class="t-block two"></div>
    </div>
  </div>`;
}

function renderTemplateCards(){
  $("cvTemplateGrid").innerHTML = cvTemplates.map(tpl => `
    <div class="template-card ${state.cvTemplate===tpl.code ? "active":""}" data-type="cv" data-code="${tpl.code}">
      ${thumbMarkupCV(tpl.code)}
      <div class="thumb-name">${tpl.name}</div>
    </div>`).join("");
  $("letterTemplateGrid").innerHTML = letterTemplates.map(tpl => `
    <div class="template-card ${state.letterTemplate===tpl.code ? "active":""}" data-type="letter" data-code="${tpl.code}">
      ${thumbMarkupLetter(tpl.code)}
      <div class="thumb-name">${tpl.name}</div>
    </div>`).join("");

  document.querySelectorAll(".template-card").forEach(card => {
    card.onclick = () => {
      const type = card.dataset.type;
      const code = card.dataset.code;
      if(type === "cv") state.cvTemplate = code;
      else state.letterTemplate = code;
      renderTemplateCards();
      renderCV();
      renderLetter();
      save();
    };
  });
}

function renderLists(){
  $("experienceList").innerHTML = state.experience.map((item,i)=>`
    <div class="item-card">
      <div class="item-head">
        <div class="item-title">${t("experienceLabel")} ${i+1}</div>
        <button class="remove-btn" onclick="removeItem('experience',${i})">${t("remove")}</button>
      </div>
      <div class="field"><label>${t("expPosition")}</label><input value="${esc(item.position)}" onchange="updateItem('experience',${i},'position',this.value)"></div>
      <div class="field"><label>${t("expCompany")}</label><input value="${esc(item.company)}" onchange="updateItem('experience',${i},'company',this.value)"></div>
      <div class="field"><label>${t("expDates")}</label><input value="${esc(item.dates)}" onchange="updateItem('experience',${i},'dates',this.value)"></div>
      <div class="field"><label>${t("expDesc")}</label><textarea rows="4" onchange="updateItem('experience',${i},'desc',this.value)">${esc(item.desc)}</textarea></div>
    </div>`).join("");
  $("educationList").innerHTML = state.education.map((item,i)=>`
    <div class="item-card">
      <div class="item-head">
        <div class="item-title">${t("educationLabel")} ${i+1}</div>
        <button class="remove-btn" onclick="removeItem('education',${i})">${t("remove")}</button>
      </div>
      <div class="field"><label>${t("eduSchool")}</label><input value="${esc(item.school)}" onchange="updateItem('education',${i},'school',this.value)"></div>
      <div class="field"><label>${t("eduField")}</label><input value="${esc(item.field)}" onchange="updateItem('education',${i},'field',this.value)"></div>
      <div class="field"><label>${t("eduDates")}</label><input value="${esc(item.dates)}" onchange="updateItem('education',${i},'dates',this.value)"></div>
      <div class="field"><label>${t("eduDesc")}</label><textarea rows="3" onchange="updateItem('education',${i},'desc',this.value)">${esc(item.desc)}</textarea></div>
    </div>`).join("");
  $("skillsList").innerHTML = state.skills.map((item,i)=>`
    <div class="item-card">
      <div class="item-head">
        <div class="item-title">${t("skillsLabel")} ${i+1}</div>
        <button class="remove-btn" onclick="removeItem('skills',${i})">${t("remove")}</button>
      </div>
      <div class="field"><label>${t("skillName")}</label><input value="${esc(item.name)}" onchange="updateItem('skills',${i},'name',this.value)"></div>
    </div>`).join("");
}

function addItem(type){
  if(type==="experience") state.experience.push({position:"",company:"",dates:"",desc:""});
  if(type==="education") state.education.push({school:"",field:"",dates:"",desc:""});
  if(type==="skills") state.skills.push({name:""});
  renderLists(); renderCV(); save();
}
function updateItem(type, idx, key, value){ state[type][idx][key] = value; renderCV(); save(); }
function removeItem(type, idx){ state[type].splice(idx,1); renderLists(); renderCV(); save(); }
window.updateItem = updateItem;
window.removeItem = removeItem;

function renderSentenceBank(){
  const items = sentenceBankData[state.lang] || sentenceBankData[langKey()] || sentenceBankData.en;
  $("sentenceBank").innerHTML = items.map(s => `<button class="chip" type="button" onclick='appendSentence(${JSON.stringify(s)})'>${esc(s)}</button>`).join("");
}
function appendSentence(sentence){
  const ta = $("letterBody");
  ta.value = ta.value ? ta.value + "\n\n" + sentence : sentence;
  ta.dispatchEvent(new Event("input", {bubbles:true}));
  renderLetter(); save();
}
window.appendSentence = appendSentence;

function docPhotoMarkup(style=""){
  return state.photo ? `<img class="doc-photo ${style}" src="${state.photo}" alt="">` : `<div class="doc-photo ${style}"></div>`;
}
function block(title, body, cls=""){ return `<div class="block ${cls}"><h3>${title}</h3>${body}</div>`; }

function cvData(){
  return {
    fullName:$("fullName").value.trim(),
    jobTitle:$("jobTitle").value.trim(),
    address:$("address").value.trim(),
    phone:$("phone").value.trim(),
    email:$("email").value.trim(),
    summary:$("summary").value.trim()
  };
}
function letterData(){
  return {
    name:$("letterName").value.trim(),
    address:$("letterAddress").value.trim(),
    phone:$("letterPhone").value.trim(),
    email:$("letterEmail").value.trim(),
    company:$("company").value.trim(),
    position:$("position").value.trim(),
    recipient:$("recipient").value.trim(),
    body:$("letterBody").value.trim()
  };
}

function renderCV(){
  const d = cvData();
  const name = esc(d.fullName || "Jan Kowalski");
  const role = esc(d.jobTitle || t("roleFallback"));
  const summary = esc(d.summary || t("placeholderSummary"));
  const contacts = [d.address,d.phone,d.email].filter(Boolean).map(v=>`<div class="entry-text">${esc(v)}</div>`).join("") || '<div class="entry-text">—</div>';

  const expHTML = state.experience.length ? state.experience.map(item=>`
    <div class="entry">
      <div class="entry-title">${esc(item.position || "-")}</div>
      <div class="entry-meta">${esc(item.company || "")}${item.company && item.dates ? " // " : ""}${esc(item.dates || "")}</div>
      <div class="entry-text">${esc(item.desc || "")}</div>
    </div>`).join("") : `<div class="entry-text">${t("expDefault")}</div>`;

  const eduHTML = state.education.length ? state.education.map(item=>`
    <div class="entry">
      <div class="entry-title">${esc(item.school || "-")}</div>
      <div class="entry-meta">${esc(item.field || "")}${item.field && item.dates ? " // " : ""}${esc(item.dates || "")}</div>
      <div class="entry-text">${esc(item.desc || "")}</div>
    </div>`).join("") : `<div class="entry-text">${t("eduDefault")}</div>`;

  const skillsHTML = state.skills.length ? state.skills.map(item=>`<span class="pill">${esc(item.name || "-")}</span>`).join("") : `<span class="pill">${t("skillDefault")}</span>`;

  const preview = $("cvPreview");
  preview.className = `sheet cv-doc cv-${state.cvTemplate}`;

  if(state.cvTemplate === "karen"){
    preview.innerHTML = `
      <div class="side">
        <div class="photo-wrap">${docPhotoMarkup()}</div>
        <div class="side-inner">
          <div class="section"><h4>${t("educationLabel")}</h4>${eduHTML}</div>
          <div class="section"><h4>${t("skillsLabel")}</h4><div class="skill-line">${state.skills.map(s=>esc(s.name)).filter(Boolean).join(", ") || t("skillDefault")}</div></div>
          <div class="section"><h4>${t("addressLabel")}</h4>${contacts}</div>
        </div>
      </div>
      <div class="main">
        <div class="accent-bar"><div class="name">${name}</div></div>
        <div style="padding-top:16px">
          <div class="role">${role}</div>
          <div class="section"><h3>${t("summaryLabel")}</h3><div class="entry-text">${summary}</div></div>
          <div class="section"><h3>${t("experienceLabel")}</h3>${expHTML}</div>
        </div>
      </div>`;
  }

  if(state.cvTemplate === "olivia"){
    preview.innerHTML = `
      <div class="left-top">${docPhotoMarkup()}</div>
      <div class="left-mid">
        <div class="section"><h3>${t("skillsLabel")}</h3><ul>${state.skills.length ? state.skills.map(s=>`<li>${esc(s.name)}</li>`).join("") : `<li>${t("skillDefault")}</li>`}</ul></div>
        <div class="section"><h3>${t("addressLabel")}</h3>${contacts}</div>
      </div>
      <div class="left-bottom">
        <div class="section"><h3 style="color:#fff">${t("educationLabel")}</h3>${eduHTML}</div>
      </div>
      <div class="right">
        <div class="right-head">
          <div class="name">${name}</div>
          <div class="role">${role}</div>
        </div>
        <div class="section"><h3>${t("summaryLabel")}</h3><div class="entry-text">${summary}</div></div>
        <div class="section"><h3>${t("experienceLabel")}</h3>${expHTML}</div>
      </div>`;
  }

  if(state.cvTemplate === "sage"){
    preview.innerHTML = `
      <div class="top">
        <div>
          <div class="name">${name}</div>
          <div class="role">${role}</div>
          <div class="entry-text" style="margin-top:12px">${contacts}</div>
        </div>
        ${docPhotoMarkup()}
      </div>
      <div class="grid">
        <div>
          <div class="section"><h3>${t("experienceLabel")}</h3>${expHTML}</div>
        </div>
        <div>
          <div class="section"><h3>${t("educationLabel")}</h3>${eduHTML}</div>
          <div class="section"><h3>${t("skillsLabel")}</h3><ul>${state.skills.length ? state.skills.map(s=>`<li>${esc(s.name)}</li>`).join("") : `<li>${t("skillDefault")}</li>`}</ul></div>
          <div class="section"><h3>${t("summaryLabel")}</h3><div class="entry-text">${summary}</div></div>
        </div>
      </div>`;
  }

  if(state.cvTemplate === "anna"){
    preview.innerHTML = `
      <div class="side">
        <div class="name">${name}</div>
        ${docPhotoMarkup()}
        <div class="section"><h3>${t("addressLabel")}</h3><p>${contacts}</p></div>
        <div class="section"><h3>${t("educationLabel")}</h3>${eduHTML}</div>
      </div>
      <div class="main">
        <div class="section"><h3>${t("summaryLabel")}</h3><div class="entry-text">${summary}</div></div>
        <div class="section"><h3>${t("experienceLabel")}</h3>${expHTML}</div>
        <div class="section"><h3>${t("skillsLabel")}</h3>
          <div>
            ${state.skills.length ? state.skills.map(s=>`<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:8px"><span>${esc(s.name)}</span><span class="skill-dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot off"></span></span></div>`).join("") : `<div>${t("skillDefault")}</div>`}
          </div>
        </div>
      </div>`;
  }

  if(state.cvTemplate === "hr"){
    preview.innerHTML = `
      <div class="head">
        <div>
          <div class="name">${name}</div>
          <div class="contact">${contacts}</div>
        </div>
        ${docPhotoMarkup()}
      </div>
      <div class="section"><h3>${t("summaryLabel")}</h3><div class="entry-text">${summary}</div></div>
      <div class="section"><h3>${t("experienceLabel")}</h3>${expHTML}</div>
      <div class="section"><h3>${t("educationLabel")}</h3>${eduHTML}</div>
      <div class="section"><h3>${t("skillsLabel")}</h3><div class="entry-text">${state.skills.map(s=>esc(s.name)).filter(Boolean).join(", ") || t("skillDefault")}</div></div>
      <div class="footer-note">Wyrażam zgodę na przetwarzanie danych osobowych zawartych w niniejszym dokumencie do realizacji procesu rekrutacji.</div>`;
  }
}

function renderLetter(){
  const d = letterData();
  const name = esc(d.name || "Jan Kowalski");
  const today = new Date().toLocaleDateString();
  const contact = `${esc(d.address || "")}\n${esc(d.phone || "")}\n${esc(d.email || "")}`;
  const right = `${t("date")}: ${today}\n${esc(d.company || "")}\n${esc(d.recipient || "")}`;
  const body = esc(d.body || t("letterFallback"));
  const subject = `${t("subject")}: ${esc(d.position || "-")}`;
  const preview = $("letterPreview");

  if(state.letterTemplate === "dark"){
    preview.className = "sheet letter-dark";
    preview.innerHTML = `
      <div class="letter-head">
        <div><div class="letter-name">${name}</div><div class="letter-small">${contact}</div></div>
        <div class="letter-small">${right}</div>
      </div>
      <div class="letter-subject">${subject}</div>
      <div class="letter-body">${body}</div>`;
  }
  if(state.letterTemplate === "min"){
    preview.className = "sheet letter-min";
    preview.innerHTML = `
      <div class="side">
        <div class="letter-name">${name}</div>
        <div class="letter-small" style="margin-top:16px">${contact}</div>
      </div>
      <div class="main">
        <div class="letter-small">${right}</div>
        <div class="letter-subject">${subject}</div>
        <div class="letter-body">${body}</div>
      </div>`;
  }
  if(state.letterTemplate === "soft"){
    preview.className = "sheet letter-soft";
    preview.innerHTML = `
      <div class="letter-head">
        <div><div class="letter-name" style="color:#584a5b">${name}</div><div class="letter-small">${contact}</div></div>
        <div class="letter-small">${right}</div>
      </div>
      <div class="letter-subject" style="color:#584a5b">${subject}</div>
      <div class="letter-body">${body}</div>`;
  }
}

function printCurrent(kind){
  switchMode(kind);
  setTimeout(()=>window.print(), 100);
}

function bind(){
  document.querySelectorAll("[data-mode]").forEach(btn => btn.addEventListener("click", ()=>switchMode(btn.dataset.mode)));
  ["fullName","jobTitle","address","phone","email","summary","letterName","letterAddress","letterPhone","letterEmail","company","position","recipient","letterBody"].forEach(id => {
    $(id).addEventListener("input", ()=>{ renderCV(); renderLetter(); save(); });
  });
  $("addExperienceBtn").onclick = ()=>addItem("experience");
  $("addEducationBtn").onclick = ()=>addItem("education");
  $("addSkillBtn").onclick = ()=>addItem("skills");
  $("downloadCvBtn").onclick = ()=>printCurrent("cv");
  $("downloadLetterBtn").onclick = ()=>printCurrent("letter");
  $("langSelect").value = state.lang;
  $("langSelect").addEventListener("change", e=>{ state.lang = e.target.value; applyTexts(); save(); });
  $("photoInput").addEventListener("change", e=>{
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = ()=>{ state.photo = reader.result; renderCV(); save(); };
    reader.readAsDataURL(file);
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  load();
  renderTemplateCards();
  renderLists();
  bind();
  applyTexts();
  switchMode(state.mode || "cv");
});
