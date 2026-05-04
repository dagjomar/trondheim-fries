const translations = {
  no: {
    siteTitle: "Trondheim Fries",
    siteSubtitle: "Jakten på den perfekte pommes frites",
    heroLead:
      "Pommes frites er den ultimate snacksen. Sprø på utsiden, myk på innsiden — en enkel rett som få mestrer.",
    heroBody:
      "Dette er én persons quest gjennom Trondheims gater for å finne hvem som virkelig fortjener tronen. Ikke alle steder lager dem like godt, og det er derfor denne siden finnes.",
    heroStart: "Start quest",
    mapHeading: "Verdenskartet",
    mapHint: "Velg en lokasjon for å lese anmeldelsen.",
    listHeading: "Alle stasjoner",
    reviewBack: "← Tilbake til liste",
    reviewVisit: "Besøkt",
    aboutHeading: "Om denne questen",
    aboutText:
      "Denne siden er laget av ren kjærlighet til pommes frites. Ingen sponsing, ingen samarbeid — bare ærlige meninger fra en som har spist altfor mange poteter. Målet er enkelt: finn de beste friesene i Trondheim.",
    footerText: "Laget med fett og overbevisning. Nye stasjoner legges til jevnlig.",
    ratingLabel: "Poeng",
    crispLabel: "Sprøhet",
    flavorLabel: "Smak",
    portionLabel: "Porsjon",
    vibeLabel: "Stemning",
  },
  en: {
    siteTitle: "Trondheim Fries",
    siteSubtitle: "The quest for the perfect French fry",
    heroLead:
      "French fries are the ultimate snack food. Crispy outside, soft inside — a simple dish that few truly master.",
    heroBody:
      "This is one person's quest through the streets of Trondheim to find who truly deserves the throne. Not every place makes them well, and that's why this page exists.",
    heroStart: "Start quest",
    mapHeading: "World Map",
    mapHint: "Select a location to read the review.",
    listHeading: "All stations",
    reviewBack: "← Back to list",
    reviewVisit: "Visited",
    aboutHeading: "About this quest",
    aboutText:
      "This page is born of pure love for French fries. Nothing sponsored, no partnerships — just honest opinions from someone who has eaten way too many potatoes. The goal is simple: find the best fries in Trondheim.",
    footerText: "Made with grease and conviction. New stations added regularly.",
    ratingLabel: "Score",
    crispLabel: "Crispness",
    flavorLabel: "Flavor",
    portionLabel: "Portion",
    vibeLabel: "Vibe",
  },
};

let currentLang = "no";

function t(key) {
  return translations[currentLang]?.[key] || translations.no[key] || key;
}

function setLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.setAttribute("placeholder", t(key));
    });
  }
}

function getLanguage() {
  return currentLang;
}
