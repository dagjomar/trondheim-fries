const translations = {
  no: {
    siteTitle: "Trondheim Fries",
    siteSubtitle: "Jakten på den perfekte pommes frites",
    heroLead:
      "Pommes frites er den beste snacksen som finnes. Sprø utenpå, myk inni. Enkelt, billig, og perfekt. Trenger ikke koste en formue — trenger bare å være godt.",
    heroBody:
      "Ikke alle steder lager fries like godt. Noen er slappe, noen er brent, noen er bare trist. Denne siden er min quest for å finne hvem som faktisk fortjener respekt i Trondheim. Min smak, mine regler.",
    heroStart: "Start quest",
    mapHeading: "Verdenskartet",
    mapHint: "Velg en lokasjon for å lese anmeldelsen.",
    listHeading: "Highscore",
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
      "French fries are the best snack food there is. Crispy outside, soft inside. Simple, cheap, and perfect. Doesn't need to cost a fortune — just needs to be good.",
    heroBody:
      "Not every place makes fries well. Some are floppy, some are burnt, some are just sad. This page is my quest to find who actually deserves respect in Trondheim. My taste, my rules.",
    heroStart: "Start quest",
    mapHeading: "World Map",
    mapHint: "Select a location to read the review.",
    listHeading: "Highscore",
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
