/*
========================================
EDYTUJ TYLKO TEN OBIEKT
========================================
Tu zmieniasz:
- nazwę firmy
- logo
- telefon, email, adres
- teksty
- zdjęcia
- usługi i projekty
*/

const site = {
  brand: {
    name: "Formika møbelsnekkeri"
   
    logo: "https://placehold.co/"logo.png"
  },

  contact: {
    email: "post@formika.no",
    phone: "+47 472 59 720",
    address: "Industrivegen 26, 2166 Oppaker",
  },

  hero: {
    badge: "Skreddersydde møbler • Kjøkken • Garderober • CNC",
    title: "Eksklusive møbelløsninger laget med presisjon",
    description:
      "Formika Møbelsnekkeri produserer kjøkken, garderober, baderomsmøbler og spesialinnredning etter mål. Vi kombinerer godt håndverk, funksjonelle løsninger og et rent nordisk uttrykk.",
    button1: "Kontakt oss",
    button2: "Se prosjekter",
    quote:
      "Vi bygger møbler som passer arkitekturen, rommet og menneskene som skal bruke dem – ikke standardløsninger som nesten passer.",
    imageMain: "https://placehold.co/1200x900/png?text=Hovedbilde", // np. /hero.jpg
    imageSecondary: "https://placehold.co/900x700/png?text=Ekstra+bilde",
    stats: [
      { title: "Skreddersydd", text: "Tilpasset mål, stil og behov" },
      { title: "Premium", text: "Fokus på kvalitet og finish" },
      { title: "Trygg prosess", text: "Tydelig kommunikasjon fra start til slutt" },
    ],
  },

  about: {
    title: "Håndverk, detaljer og løsninger som varer",
    description:
      "Vi leverer skreddersydde løsninger for kunder som ønsker mer enn standard. Hvert prosjekt planlegges nøye med fokus på funksjon, materialvalg og helhetlig uttrykk. Resultatet er møbler som både ser bedre ut og fungerer bedre i hverdagen.",
    whyTitle: "Hvorfor velge oss?",
    why: [
      "Skreddersydde løsninger",
      "Fagmessig utførelse",
      "Nøye utvalgte materialer",
      "Tydelig kommunikasjon gjennom hele prosessen",
    ],
  },

  services: {
    title: "Løsninger tilpasset ditt hjem eller prosjekt",
    description:
      "Fra kjøkken og garderober til spesialmøbler og CNC-bearbeiding – vi utvikler løsninger som kombinerer design, holdbarhet og presisjon.",
    items: [
      {
        icon: "🏠",
        title: "Kjøkken på mål",
        text: "Skreddersydde kjøkken tilpasset rommet, stilen og hverdagen din – med fokus på detaljer, funksjon og finish.",
      },
      {
        icon: "🚪",
        title: "Garderober og oppbevaring",
        text: "Smarte løsninger som utnytter plassen optimalt og gir et rent, eksklusivt uttrykk i hjemmet.",
      },
      {
        icon: "🪵",
        title: "Spesialmøbler",
        text: "Unike møbler og innredning produsert etter mål for private boliger, kontorer og næringslokaler.",
      },
    ],
  },

  projects: {
    title: "Utvalgte områder vi jobber med",
    description: "Her kan du vise frem de viktigste prosjektene dine med bilder og korte beskrivelser.",
    items: [
      {
        title: "Kjøkken",
        text: "Kort beskrivelse av prosjektet.",
        image: "https://placehold.co/800x600/png?text=Prosjekt+1", // np. /project1.jpg
      },
      {
        title: "Garderobe",
        text: "Kort beskrivelse av prosjektet.",
        image: "https://placehold.co/800x600/png?text=Prosjekt+2",
      },
      {
        title: "Baderomsmøbler",
        text: "Kort beskrivelse av prosjektet.",
        image: "https://placehold.co/800x600/png?text=Prosjekt+3",
      },
    ],
  },

  process: {
    title: "En enkel og profesjonell prosess",
    steps: [
      { title: "1. Forespørsel", text: "Du sender inn mål, bilder eller idéer." },
      { title: "2. Planlegging", text: "Vi vurderer løsning, materialer og uttrykk." },
      { title: "3. Produksjon", text: "Møblene bygges med fokus på presisjon og kvalitet." },
      { title: "4. Levering", text: "Ferdig løsning monteres og tilpasses prosjektet." },
    ],
  },

  form: {
    title: "Be om tilbud",
    description: "Send oss en kort beskrivelse av prosjektet, så tar vi kontakt for en uforpliktende prat.",
    placeholders: {
      name: "Navn",
      email: "E-post",
      message: "Fortell oss om prosjektet ditt",
    },
    button: "Send forespørsel",
  },

  footerText: "Skreddersydde løsninger i Norge",
};

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setImage(id, src, alt = "") {
  const el = document.getElementById(id);
  if (el) {
    el.src = src;
    el.alt = alt;
  }
}

function renderStats() {
  const container = document.getElementById("hero-stats");
  container.innerHTML = site.hero.stats
    .map(
      (item) => `
      <div class="stat-box">
        <div class="stat-title">${item.title}</div>
        <div class="stat-text">${item.text}</div>
      </div>
    `
    )
    .join("");
}

function renderWhyUs() {
  const container = document.getElementById("why-us-list");
  container.innerHTML = site.about.why.map((item) => `<li>${item}</li>`).join("");
}

function renderServices() {
  const container = document.getElementById("services-grid");
  container.innerHTML = site.services.items
    .map(
      (item) => `
      <article class="service-card">
        <div class="service-icon">${item.icon}</div>
        <div class="card-title">${item.title}</div>
        <div class="card-text">${item.text}</div>
      </article>
    `
    )
    .join("");
}

function renderProjects() {
  const container = document.getElementById("projects-grid");
  container.innerHTML = site.projects.items
    .map(
      (item) => `
      <article class="project-card">
        <img class="project-image" src="${item.image}" alt="${item.title}" />
        <div class="project-content">
          <div class="card-title">${item.title}</div>
          <div class="card-text">${item.text}</div>
        </div>
      </article>
    `
    )
    .join("");
}

function renderProcess() {
  const container = document.getElementById("process-list");
  container.innerHTML = site.process.steps
    .map(
      (item) => `
      <div class="process-box">
        <div class="card-title" style="font-size:22px; margin-top:0;">${item.title}</div>
        <div class="card-text" style="color:#d3cbc3;">${item.text}</div>
      </div>
    `
    )
    .join("");
}

function init() {
  setText("brand-name", site.brand.name);
  setText("brand-subtitle", site.brand.subtitle);
  setImage("brand-logo", site.brand.logo, `${site.brand.name} logo`);
  setText("nav-cta", site.hero.button1);

  setText("hero-badge", site.hero.badge);
  setText("hero-title", site.hero.title);
  setText("hero-description", site.hero.description);
  setText("hero-button-1", site.hero.button1);
  setText("hero-button-2", site.hero.button2);
  setText("quote-brand", site.brand.name);
  setText("hero-quote", site.hero.quote);
  setImage("hero-image-main", site.hero.imageMain, "Hovedbilde");
  setImage("hero-image-secondary", site.hero.imageSecondary, "Ekstra bilde");

  setText("about-title", site.about.title);
  setText("about-description", site.about.description);
  setText("why-us-title", site.about.whyTitle);

  setText("services-title", site.services.title);
  setText("services-description", site.services.description);

  setText("projects-title", site.projects.title);
  setText("projects-description", site.projects.description);

  setText("process-title", site.process.title);

  setText("contact-title", site.form.title);
  setText("contact-description", site.form.description);
  setText("contact-email", site.contact.email);
  setText("contact-phone", site.contact.phone);
  setText("contact-address", site.contact.address);
  document.getElementById("form-name").placeholder = site.form.placeholders.name;
  document.getElementById("form-email").placeholder = site.form.placeholders.email;
  document.getElementById("form-message").placeholder = site.form.placeholders.message;
  setText("form-button", site.form.button);

  setText("footer-brand", `${site.brand.name} ${site.brand.subtitle}`);
  setText("footer-text", site.footerText);
  setText("footer-company", site.brand.name);
  setText("footer-year", new Date().getFullYear());

  renderStats();
  renderWhyUs();
  renderServices();
  renderProjects();
  renderProcess();
}

init();
