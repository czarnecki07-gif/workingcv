const CONFIG = {
  premiumUnlockedByDefault: true,
  storageKey: 'workingcv-projects-v2-fixed'
};

const templates = [
  { id: 'classic-free-1', name: 'Classic Free I', premium: false, type: 'cv' },
  { id: 'classic-free-2', name: 'Classic Free II', premium: false, type: 'cv' },
  { id: 'elegant-1', name: 'Elegant Slate', premium: true, type: 'cv' },
  { id: 'elegant-2', name: 'Elegant Royal', premium: true, type: 'cv' },
  { id: 'elegant-3', name: 'Elegant Violet', premium: true, type: 'cv' },
  { id: 'elegant-4', name: 'Elegant Forest', premium: true, type: 'cv' },
  { id: 'elegant-5', name: 'Elegant Amber', premium: true, type: 'cv' },
  { id: 'elegant-6', name: 'Elegant Graphite', premium: true, type: 'cv' },
  { id: 'cover-letter-pro', name: 'Cover Letter Pro', premium: true, type: 'cover-letter' }
];

const state = {
  language: 'pl',
  docType: 'cv',
  templateId: 'classic-free-1',
  currentProjectId: null,
  premium: CONFIG.premiumUnlockedByDefault
};

const i18n = {
  pl: {
    heroTitle: 'Stwórz profesjonalne CV w 5 minut', heroSub: 'Wybierz szablon, wpisz dane i pobierz gotowe CV lub list motywacyjny. Prosto, szybko i bez chaosu.', cta: 'Stwórz CV teraz', cta2: 'Zobacz szablony', heroNote: '2 darmowe szablony • 6 eleganckich wersji • wiele języków',
    mini1Title:'Podgląd na żywo', mini1Text:'Od razu widzisz finalny wygląd dokumentu.', mini2Title:'Gotowe PDF', mini2Text:'Eksportuj CV lub list jednym kliknięciem.', mini3Title:'Zapis projektów', mini3Text:'Wróć do swoich wersji i popraw je później.',
    docTitle:'Dokument', tabCv:'CV', tabLetter:'List motywacyjny', templates:'Szablony', projects:'Zapisane projekty', save:'Zapisz projekt', editorTitle:'Dane', pdf:'Pobierz PDF', reset:'Wyczyść', preview:'Podgląd na żywo',
    fullName:'Imię i nazwisko', jobTitle:'Stanowisko', email:'Email', phone:'Telefon', city:'Miasto', summary:'Profil', experience:'Doświadczenie', education:'Edukacja', skills:'Umiejętności', company:'Firma', position:'Stanowisko', letter:'Treść listu',
    locked:'Premium', free:'Darmowy', saved:'Projekt zapisany', loaded:'Projekt wczytany', cleared:'Formularz wyczyszczony', pdfError:'Nie udało się wygenerować PDF', projectUntitled:'Bez nazwy',
    pvSummary:'Krótki opis zawodowy.', pvExperience:'Opis doświadczenia.', pvEducation:'Opis edukacji.', pvSkills:'Umiejętności.', pvCompany:'Nazwa firmy', pvPosition:'Stanowisko', pvLetter:'Treść listu.'
  },
  en: {
    heroTitle: 'Create a professional CV in 5 minutes', heroSub: 'Choose a template, enter your details, and download a polished CV or cover letter.', cta: 'Create CV now', cta2: 'View templates', heroNote: '2 free templates • 6 elegant designs • multiple languages',
    mini1Title:'Live preview', mini1Text:'See the final document instantly.', mini2Title:'Ready PDF', mini2Text:'Export your CV or letter in one click.', mini3Title:'Saved projects', mini3Text:'Come back to your versions later.',
    docTitle:'Document', tabCv:'CV', tabLetter:'Cover letter', templates:'Templates', projects:'Saved projects', save:'Save project', editorTitle:'Details', pdf:'Download PDF', reset:'Clear', preview:'Live preview',
    fullName:'Full name', jobTitle:'Job title', email:'Email', phone:'Phone', city:'City', summary:'Profile', experience:'Experience', education:'Education', skills:'Skills', company:'Company', position:'Position', letter:'Letter text',
    locked:'Premium', free:'Free', saved:'Project saved', loaded:'Project loaded', cleared:'Form cleared', pdfError:'Could not generate PDF', projectUntitled:'Untitled',
    pvSummary:'Short professional summary.', pvExperience:'Experience details.', pvEducation:'Education details.', pvSkills:'Skills.', pvCompany:'Company name', pvPosition:'Position', pvLetter:'Letter content.'
  },
  de: { heroTitle:'Erstelle in 5 Minuten einen professionellen Lebenslauf', heroSub:'Wähle eine Vorlage, gib deine Daten ein und lade einen fertigen Lebenslauf oder ein Anschreiben herunter.', cta:'Jetzt CV erstellen', cta2:'Vorlagen ansehen', heroNote:'2 kostenlose Vorlagen • 6 elegante Designs • viele Sprachen', mini1Title:'Live-Vorschau', mini1Text:'Du siehst das Endergebnis sofort.', mini2Title:'Fertiges PDF', mini2Text:'Exportiere Lebenslauf oder Anschreiben mit einem Klick.', mini3Title:'Gespeicherte Projekte', mini3Text:'Kehre später zu deinen Versionen zurück.', docTitle:'Dokument', tabCv:'Lebenslauf', tabLetter:'Anschreiben', templates:'Vorlagen', projects:'Gespeicherte Projekte', save:'Projekt speichern', editorTitle:'Daten', pdf:'PDF herunterladen', reset:'Leeren', preview:'Live-Vorschau', fullName:'Vollständiger Name', jobTitle:'Berufsbezeichnung', email:'E-Mail', phone:'Telefon', city:'Ort', summary:'Profil', experience:'Erfahrung', education:'Ausbildung', skills:'Fähigkeiten', company:'Firma', position:'Position', letter:'Anschreiben', locked:'Premium', free:'Kostenlos', saved:'Projekt gespeichert', loaded:'Projekt geladen', cleared:'Formular geleert', pdfError:'PDF konnte nicht erstellt werden', projectUntitled:'Ohne Titel', pvSummary:'Kurze berufliche Zusammenfassung.', pvExperience:'Erfahrungsbeschreibung.', pvEducation:'Ausbildungsbeschreibung.', pvSkills:'Fähigkeiten.', pvCompany:'Firmenname', pvPosition:'Position', pvLetter:'Text des Anschreibens.' },
  es: { heroTitle:'Crea un CV profesional en 5 minutos', heroSub:'Elige una plantilla, completa tus datos y descarga un CV o carta de presentación listos.', cta:'Crear CV ahora', cta2:'Ver plantillas', heroNote:'2 plantillas gratis • 6 diseños elegantes • varios idiomas', mini1Title:'Vista previa', mini1Text:'Ves el documento final al instante.', mini2Title:'PDF listo', mini2Text:'Exporta tu CV o carta con un clic.', mini3Title:'Proyectos guardados', mini3Text:'Vuelve a tus versiones más tarde.', docTitle:'Documento', tabCv:'CV', tabLetter:'Carta', templates:'Plantillas', projects:'Proyectos guardados', save:'Guardar proyecto', editorTitle:'Datos', pdf:'Descargar PDF', reset:'Limpiar', preview:'Vista previa', fullName:'Nombre completo', jobTitle:'Puesto', email:'Email', phone:'Teléfono', city:'Ciudad', summary:'Perfil', experience:'Experiencia', education:'Educación', skills:'Habilidades', company:'Empresa', position:'Puesto', letter:'Texto de la carta', locked:'Premium', free:'Gratis', saved:'Proyecto guardado', loaded:'Proyecto cargado', cleared:'Formulario limpiado', pdfError:'No se pudo generar el PDF', projectUntitled:'Sin título', pvSummary:'Resumen profesional breve.', pvExperience:'Descripción de experiencia.', pvEducation:'Descripción de educación.', pvSkills:'Habilidades.', pvCompany:'Nombre de empresa', pvPosition:'Puesto', pvLetter:'Contenido de la carta.' },
  fr: { heroTitle:'Créez un CV professionnel en 5 minutes', heroSub:'Choisissez un modèle, saisissez vos informations et téléchargez un CV ou une lettre prêts à envoyer.', cta:'Créer un CV', cta2:'Voir les modèles', heroNote:'2 modèles gratuits • 6 modèles élégants • plusieurs langues', mini1Title:'Aperçu en direct', mini1Text:'Voyez le rendu final immédiatement.', mini2Title:'PDF prêt', mini2Text:'Exportez votre CV ou lettre en un clic.', mini3Title:'Projets enregistrés', mini3Text:'Revenez plus tard sur vos versions.', docTitle:'Document', tabCv:'CV', tabLetter:'Lettre', templates:'Modèles', projects:'Projets enregistrés', save:'Enregistrer', editorTitle:'Données', pdf:'Télécharger le PDF', reset:'Effacer', preview:'Aperçu', fullName:'Nom complet', jobTitle:'Poste', email:'E-mail', phone:'Téléphone', city:'Ville', summary:'Profil', experience:'Expérience', education:'Formation', skills:'Compétences', company:'Entreprise', position:'Poste', letter:'Texte de la lettre', locked:'Premium', free:'Gratuit', saved:'Projet enregistré', loaded:'Projet chargé', cleared:'Formulaire vidé', pdfError:'Impossible de générer le PDF', projectUntitled:'Sans titre', pvSummary:'Bref résumé professionnel.', pvExperience:'Description de l’expérience.', pvEducation:'Description de la formation.', pvSkills:'Compétences.', pvCompany:'Nom de l’entreprise', pvPosition:'Poste', pvLetter:'Contenu de la lettre.' },
  it: { heroTitle:'Crea un CV professionale in 5 minuti', heroSub:'Scegli un modello, inserisci i dati e scarica un CV o una lettera pronti.', cta:'Crea CV ora', cta2:'Vedi modelli', heroNote:'2 modelli gratuiti • 6 eleganti • più lingue', mini1Title:'Anteprima live', mini1Text:'Vedi subito il risultato finale.', mini2Title:'PDF pronto', mini2Text:'Esporta CV o lettera con un clic.', mini3Title:'Progetti salvati', mini3Text:'Torna alle tue versioni più tardi.', docTitle:'Documento', tabCv:'CV', tabLetter:'Lettera', templates:'Modelli', projects:'Progetti salvati', save:'Salva progetto', editorTitle:'Dati', pdf:'Scarica PDF', reset:'Pulisci', preview:'Anteprima', fullName:'Nome completo', jobTitle:'Ruolo', email:'Email', phone:'Telefono', city:'Città', summary:'Profilo', experience:'Esperienza', education:'Istruzione', skills:'Competenze', company:'Azienda', position:'Posizione', letter:'Testo lettera', locked:'Premium', free:'Gratis', saved:'Progetto salvato', loaded:'Progetto caricato', cleared:'Modulo pulito', pdfError:'Impossibile generare il PDF', projectUntitled:'Senza titolo', pvSummary:'Breve profilo professionale.', pvExperience:'Descrizione esperienza.', pvEducation:'Descrizione istruzione.', pvSkills:'Competenze.', pvCompany:'Nome azienda', pvPosition:'Posizione', pvLetter:'Contenuto della lettera.' },
  nl: { heroTitle:'Maak in 5 minuten een professioneel cv', heroSub:'Kies een sjabloon, vul je gegevens in en download een kant-en-klaar cv of motivatiebrief.', cta:'Maak nu een cv', cta2:'Bekijk sjablonen', heroNote:'2 gratis sjablonen • 6 elegante ontwerpen • meerdere talen', mini1Title:'Live voorbeeld', mini1Text:'Zie direct het eindresultaat.', mini2Title:'Klaar PDF', mini2Text:'Exporteer je cv of brief met één klik.', mini3Title:'Opgeslagen projecten', mini3Text:'Kom later terug naar je versies.', docTitle:'Document', tabCv:'CV', tabLetter:'Motivatiebrief', templates:'Sjablonen', projects:'Opgeslagen projecten', save:'Project opslaan', editorTitle:'Gegevens', pdf:'Download PDF', reset:'Wissen', preview:'Live voorbeeld', fullName:'Volledige naam', jobTitle:'Functie', email:'E-mail', phone:'Telefoon', city:'Stad', summary:'Profiel', experience:'Ervaring', education:'Opleiding', skills:'Vaardigheden', company:'Bedrijf', position:'Positie', letter:'Brieftekst', locked:'Premium', free:'Gratis', saved:'Project opgeslagen', loaded:'Project geladen', cleared:'Formulier gewist', pdfError:'PDF kon niet worden gemaakt', projectUntitled:'Zonder titel', pvSummary:'Korte professionele samenvatting.', pvExperience:'Ervaringsbeschrijving.', pvEducation:'Opleidingsbeschrijving.', pvSkills:'Vaardigheden.', pvCompany:'Bedrijfsnaam', pvPosition:'Positie', pvLetter:'Inhoud van de brief.' },
  pt: { heroTitle:'Crie um CV profissional em 5 minutos', heroSub:'Escolha um modelo, preencha seus dados e baixe um CV ou carta prontos.', cta:'Criar CV agora', cta2:'Ver modelos', heroNote:'2 modelos grátis • 6 elegantes • vários idiomas', mini1Title:'Prévia ao vivo', mini1Text:'Veja o resultado final na hora.', mini2Title:'PDF pronto', mini2Text:'Exporte CV ou carta com um clique.', mini3Title:'Projetos salvos', mini3Text:'Volte depois às suas versões.', docTitle:'Documento', tabCv:'CV', tabLetter:'Carta', templates:'Modelos', projects:'Projetos salvos', save:'Salvar projeto', editorTitle:'Dados', pdf:'Baixar PDF', reset:'Limpar', preview:'Prévia', fullName:'Nome completo', jobTitle:'Cargo', email:'Email', phone:'Telefone', city:'Cidade', summary:'Perfil', experience:'Experiência', education:'Educação', skills:'Competências', company:'Empresa', position:'Cargo', letter:'Texto da carta', locked:'Premium', free:'Grátis', saved:'Projeto salvo', loaded:'Projeto carregado', cleared:'Formulário limpo', pdfError:'Não foi possível gerar o PDF', projectUntitled:'Sem título', pvSummary:'Breve resumo profissional.', pvExperience:'Descrição da experiência.', pvEducation:'Descrição da educação.', pvSkills:'Competências.', pvCompany:'Nome da empresa', pvPosition:'Cargo', pvLetter:'Conteúdo da carta.' },
  cs: { heroTitle:'Vytvořte profesionální CV za 5 minut', heroSub:'Vyberte šablonu, vyplňte údaje a stáhněte hotové CV nebo motivační dopis.', cta:'Vytvořit CV', cta2:'Zobrazit šablony', heroNote:'2 šablony zdarma • 6 elegantních • více jazyků', mini1Title:'Živý náhled', mini1Text:'Okamžitě vidíte finální vzhled.', mini2Title:'Hotové PDF', mini2Text:'Exportujte CV nebo dopis jedním kliknutím.', mini3Title:'Uložené projekty', mini3Text:'Vraťte se ke svým verzím později.', docTitle:'Dokument', tabCv:'CV', tabLetter:'Motivační dopis', templates:'Šablony', projects:'Uložené projekty', save:'Uložit projekt', editorTitle:'Údaje', pdf:'Stáhnout PDF', reset:'Vymazat', preview:'Živý náhled', fullName:'Celé jméno', jobTitle:'Pozice', email:'E-mail', phone:'Telefon', city:'Město', summary:'Profil', experience:'Zkušenosti', education:'Vzdělání', skills:'Dovednosti', company:'Firma', position:'Pozice', letter:'Text dopisu', locked:'Premium', free:'Zdarma', saved:'Projekt uložen', loaded:'Projekt načten', cleared:'Formulář vymazán', pdfError:'PDF se nepodařilo vytvořit', projectUntitled:'Bez názvu', pvSummary:'Krátké profesní shrnutí.', pvExperience:'Popis zkušeností.', pvEducation:'Popis vzdělání.', pvSkills:'Dovednosti.', pvCompany:'Název firmy', pvPosition:'Pozice', pvLetter:'Obsah dopisu.' },
  uk: { heroTitle:'Створіть професійне CV за 5 хвилин', heroSub:'Оберіть шаблон, введіть дані та завантажте готове CV або супровідний лист.', cta:'Створити CV', cta2:'Переглянути шаблони', heroNote:'2 безкоштовні шаблони • 6 елегантних • багато мов', mini1Title:'Живий перегляд', mini1Text:'Одразу бачите фінальний вигляд документа.', mini2Title:'Готовий PDF', mini2Text:'Експортуйте CV або лист одним кліком.', mini3Title:'Збережені проєкти', mini3Text:'Поверніться до своїх версій пізніше.', docTitle:'Документ', tabCv:'CV', tabLetter:'Супровідний лист', templates:'Шаблони', projects:'Збережені проєкти', save:'Зберегти проєкт', editorTitle:'Дані', pdf:'Завантажити PDF', reset:'Очистити', preview:'Живий перегляд', fullName:'Повне імʼя', jobTitle:'Посада', email:'Email', phone:'Телефон', city:'Місто', summary:'Профіль', experience:'Досвід', education:'Освіта', skills:'Навички', company:'Компанія', position:'Посада', letter:'Текст листа', locked:'Преміум', free:'Безкоштовно', saved:'Проєкт збережено', loaded:'Проєкт завантажено', cleared:'Форму очищено', pdfError:'Не вдалося створити PDF', projectUntitled:'Без назви', pvSummary:'Короткий професійний опис.', pvExperience:'Опис досвіду.', pvEducation:'Опис освіти.', pvSkills:'Навички.', pvCompany:'Назва компанії', pvPosition:'Посада', pvLetter:'Зміст листа.' }
};

const $ = id => document.getElementById(id);
const fields = ['fullName','jobTitle','contactEmail','phone','city','summary','experience','education','skills','company','position','letterBody'];

function toast(msg) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2400);
}

function getText() { return i18n[state.language] || i18n.pl; }

function getProjects() {
  try { return JSON.parse(localStorage.getItem(CONFIG.storageKey) || '[]'); } catch { return []; }
}
function setProjects(projects) {
  localStorage.setItem(CONFIG.storageKey, JSON.stringify(projects));
}
function uid() { return `prj_${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`; }

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

function resetForm() {
  state.currentProjectId = null;
  setFormData({});
  toast(getText().cleared);
}

function renderLanguageOptions() {
  $('language').innerHTML = Object.keys(i18n).map(key => `<option value="${key}">${key.toUpperCase()}</option>`).join('');
  $('language').value = state.language;
}

function applyI18n() {
  const t = getText();
  $('hero-title').textContent = t.heroTitle;
  $('hero-subtitle').textContent = t.heroSub;
  $('jump-editor').textContent = t.cta;
  $('hero-cta').textContent = t.cta;
  $('hero-secondary').textContent = t.cta2;
  $('hero-note').textContent = t.heroNote;
  $('mini1-title').textContent = t.mini1Title;
  $('mini1-text').textContent = t.mini1Text;
  $('mini2-title').textContent = t.mini2Title;
  $('mini2-text').textContent = t.mini2Text;
  $('mini3-title').textContent = t.mini3Title;
  $('mini3-text').textContent = t.mini3Text;
  $('doc-title').textContent = t.docTitle;
  $('tab-cv').textContent = t.tabCv;
  $('tab-letter').textContent = t.tabLetter;
  $('templates-label').textContent = t.templates;
  $('projects-label').textContent = t.projects;
  $('save-project').textContent = t.save;
  $('editor-title').textContent = t.editorTitle;
  $('download-pdf').textContent = t.pdf;
  $('reset-form').textContent = t.reset;
  $('preview-label').textContent = t.preview;
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
  $('lbl-letter').textContent = t.letter;
  $('pv-summary-title').textContent = t.summary;
  $('pv-exp-title').textContent = t.experience;
  $('pv-edu-title').textContent = t.education;
  $('pv-skills-title').textContent = t.skills;
  $('pv-company-title').textContent = t.company;
  $('pv-position-title').textContent = t.position;
  $('pv-letter-title').textContent = state.docType === 'cv' ? t.letter : t.tabLetter;
  renderSavedProjects();
  renderPreview();
  renderTemplates();
}

function renderTemplates() {
  const t = getText();
  $('templates').innerHTML = templates.filter(x => x.type === state.docType).map(template => {
    const locked = template.premium && !state.premium;
    return `<div class="template-item ${state.templateId === template.id ? 'active' : ''}" data-template="${template.id}">
      <div class="template-title">${template.name}</div>
      <div class="template-meta">${template.premium ? t.locked : t.free}${locked ? ' • Locked' : ''}</div>
    </div>`;
  }).join('');

  document.querySelectorAll('.template-item').forEach(el => {
    el.addEventListener('click', () => {
      const selected = el.dataset.template;
      const template = templates.find(x => x.id === selected);
      if (template.premium && !state.premium) return toast('Premium locked');
      state.templateId = selected;
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

function renderPreview() {
  const t = getText();
  const data = getFormData();
  $('pv-name').textContent = data.fullName || (state.language === 'pl' ? 'Twoje Imię' : 'Your Name');
  $('pv-role').textContent = data.jobTitle || t.jobTitle;
  $('pv-contact').textContent = [data.email || 'email@example.com', data.phone || '+48 123 456 789', data.city || t.city].join(' • ');
  $('pv-summary').textContent = data.summary || t.pvSummary;
  $('pv-experience').textContent = data.experience || t.pvExperience;
  $('pv-education').textContent = data.education || t.pvEducation;
  $('pv-skills').textContent = data.skills || t.pvSkills;
  $('pv-company').textContent = data.company || t.pvCompany;
  $('pv-position').textContent = data.position || t.pvPosition;
  $('pv-letter').textContent = data.letterBody || t.pvLetter;
  $('current-template-name').textContent = templates.find(x => x.id === state.templateId)?.name || '';
  $('preview-paper').className = `preview-paper ${state.templateId}`;
}

function saveProject() {
  const t = getText();
  const projects = getProjects();
  const titleBase = getFormData().fullName || t.projectUntitled;
  const project = {
    id: state.currentProjectId || uid(),
    title: `${titleBase} • ${state.docType === 'cv' ? t.tabCv : t.tabLetter}`,
    type: state.docType,
    language: state.language,
    templateId: state.templateId,
    data: getFormData(),
    updatedAt: new Date().toISOString()
  };
  const index = projects.findIndex(p => p.id === project.id);
  if (index >= 0) projects[index] = project; else projects.unshift(project);
  state.currentProjectId = project.id;
  setProjects(projects);
  renderSavedProjects();
  toast(t.saved);
}

function renderSavedProjects() {
  const t = getText();
  const projects = getProjects().sort((a,b) => b.updatedAt.localeCompare(a.updatedAt));
  $('saved-projects').innerHTML = projects.length ? projects.map(p => `
    <div class="saved-item" data-project="${p.id}">
      <div class="template-title">${p.title}</div>
      <div class="template-meta">${p.type} • ${p.templateId}</div>
    </div>`).join('') : `<div class="template-meta">—</div>`;

  document.querySelectorAll('.saved-item').forEach(el => {
    el.addEventListener('click', () => {
      const project = projects.find(p => p.id === el.dataset.project);
      if (!project) return;
      state.currentProjectId = project.id;
      state.docType = project.type;
      state.language = project.language || 'pl';
      state.templateId = project.templateId;
      $('language').value = state.language;
      setFormData(project.data || {});
      applyI18n();
      updateDocTypeUI();
      toast(t.loaded);
    });
  });
}

async function downloadPdf() {
  try {
    const element = $('preview-paper');
    const name = (getFormData().fullName || 'workingcv').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
    await html2pdf().set({
      margin: 0,
      filename: `${name}-${state.docType === 'cv' ? 'cv' : 'cover-letter'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    }).from(element).save();
  } catch (e) {
    toast(getText().pdfError);
  }
}

function bind() {
  fields.forEach(id => $(id).addEventListener('input', renderPreview));
  $('language').addEventListener('change', e => { state.language = e.target.value; applyI18n(); });
  $('save-project').addEventListener('click', saveProject);
  $('download-pdf').addEventListener('click', downloadPdf);
  $('reset-form').addEventListener('click', resetForm);
  document.querySelectorAll('.tab').forEach(btn => btn.addEventListener('click', () => {
    state.docType = btn.dataset.type;
    updateDocTypeUI();
  }));
  $('jump-editor').addEventListener('click', () => location.hash = '#editor-start');
  $('hero-cta').addEventListener('click', () => location.hash = '#editor-start');
  $('hero-secondary').addEventListener('click', () => location.hash = '#editor-start');
}

function init() {
  renderLanguageOptions();
  bind();
  applyI18n();
  updateDocTypeUI();
  renderSavedProjects();
  renderPreview();
}

init();
