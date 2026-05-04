const translations = {
  no: {
    siteTitle: "Trondheim Fries",
    siteSubtitle: "Jakten på den perfekte pommes frites",
    heroLead:
      "Pommes frites er den ultimate snacksen. Sprø på utsiden, myk på innsiden — en enkel rett som få mestrer. Ikke alle steder lager dem like godt, og det er derfor denne siden finnes.",
    heroBody:
      "Dette er én persons besettelse — en kjærlighetshistorie til den gyldne potetpinnen. En quest gjennom Trondheims gater for å finne hvem som virkelig fortjener tronen.",
    mapHeading: "Kartet",
    mapHint: "Trykk på en markør for å se hvem det er.",
    listHeading: "Rangeringen",
    listHint: "Rekkefølgen er lov. Salt er valgfritt.",
    aboutHeading: "Om denne siden",
    aboutText:
      "Denne siden er laget av ren kjærlighet til pommes frites. Ingenting sponset, ingen samarbeid — bare ærlige meninger fra en som har spist altfor mange poteter. Målet er enkelt: finn de beste friesene i Trondheim, og del svaret med verden.",
    footerText: "Laget med fett og overbevisning.",
    scrollToMap: "Se kartet",
    scrollToList: "Se rangeringen",
  },
  en: {
    siteTitle: "Trondheim Fries",
    siteSubtitle: "The quest for the perfect French fry",
    heroLead:
      "French fries are the ultimate snack food. Crispy outside, soft inside — a simple dish that few truly master. Not every place makes them well, and that is why this page exists.",
    heroBody:
      "This is one person's obsession — a love letter to the golden potato stick. A quest through the streets of Trondheim to find who truly deserves the throne.",
    mapHeading: "The Map",
    mapHint: "Tap a marker to see who it is.",
    listHeading: "The Ranking",
    listHint: "Order is law. Salt is optional.",
    aboutHeading: "About this page",
    aboutText:
      "This page is born of pure love for French fries. Nothing sponsored, no partnerships — just honest opinions from someone who has eaten way too many potatoes. The goal is simple: find the best fries in Trondheim, and share the answer with the world.",
    footerText: "Made with grease and conviction.",
    scrollToMap: "See the map",
    scrollToList: "See the ranking",
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
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      el.setAttribute("aria-label", t(key));
    });
  }
}

function getLanguage() {
  return currentLang;
}
