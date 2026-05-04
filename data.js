const OFFICIAL_RANKINGS = [
  {
    id: "baklandet-basket",
    rank: 1,
    name: "Baklandet Basket",
    area: "Baklandet",
    lat: 63.4289,
    lng: 10.4021,
    rating: 9.4,
    scores: { crisp: 10, flavor: 9, portion: 9, vibe: 9 },
    reviewNo:
      "Baklandet Basket er det nærmeste du kommer pommes frites-perfeksjon i Trondheim. Tykke kutt som er dobbelt-stekt til gyllen fullkommenhet — utsiden knaser som nyfallen snø under støvlene, mens innsiden er en sky av potet-himmel. Saltet fester seg faktisk her, noe som er sjeldnere enn du tror. Serveres i en papirkurv med et smil som sier «ja, vi vet at vi er best». Lokalet er lite og sjarmerende, gjemt bak de fargerike trehusene i Baklandet. Du lukter dem før du ser stedet. Dette er stasjon nummer én av en grunn.",
    reviewEn:
      "Baklandet Basket is the closest you'll get to French fry perfection in Trondheim. Thick cuts double-fried to golden completion — the outside crunches like fresh snow under boots while the inside is a cloud of potato heaven. The salt actually sticks here, which is rarer than you'd think. Served in a paper basket with a smile that says 'yes, we know we're the best'. The place is small and charming, hidden behind the colorful wooden houses in Baklandet. You smell them before you see the spot. This is station number one for a reason.",
  },
  {
    id: "solsiden-shoestring",
    rank: 2,
    name: "Solsiden Shoestring",
    area: "Solsiden",
    lat: 63.4302,
    lng: 10.4065,
    rating: 9.1,
    scores: { crisp: 10, flavor: 9, portion: 8, vibe: 9 },
    reviewNo:
      "Tynne som gitarstrenger og like farlige — Solsiden Shoestring har mestret kunsten å frite tynt uten å miste sjelen. Høy varme, rask steking, og en sprøhetsgrad som grenser til det ulovlige. Hver pinne er som en liten gyllen kvist som knekker perfekt mellom tennene. Porsjonen kunne vært større, men kvaliteten kompenserer. Stedet ligger ved vannet med utsikt over fjorden, og på en sommerdag med sol og shoestring fries er livet komplett.",
    reviewEn:
      "Thin as guitar strings and just as dangerous — Solsiden Shoestring has mastered the art of frying thin without losing the soul. High heat, quick fry, and a crispness level that borders on illegal. Each stick is like a tiny golden twig that snaps perfectly between your teeth. The portion could be bigger, but quality compensates. The place sits by the water with fjord views, and on a summer day with sun and shoestring fries, life is complete.",
  },
  {
    id: "midtbyen-munch",
    rank: 3,
    name: "Midtbyen Munch",
    area: "Midtbyen",
    lat: 63.4344,
    lng: 10.3951,
    rating: 8.8,
    scores: { crisp: 9, flavor: 9, portion: 8, vibe: 9 },
    reviewNo:
      "Midtbyen Munch er den pålitelige veteranen. Du vet hva du får, og det du får er bra. Gyllen ratio er nøkkelen her — et sprøtt skall som gir motstand før det åpenbarer en luftig, dampende kjerne. Det er pommes frites slik bestemor ville laget dem hvis bestemor hadde en frityrkoker og null tålmodighet. Midt i sentrum, alltid åpent, alltid konsistent. Ikke den mest spennende opplevelsen, men en du stoler på med hele hjertet.",
    reviewEn:
      "Midtbyen Munch is the reliable veteran. You know what you're getting, and what you're getting is good. The golden ratio is the key here — a crispy shell that resists before revealing a fluffy, steaming core. It's fries the way grandma would make them if grandma had a deep fryer and zero patience. Center of town, always open, always consistent. Not the most exciting experience, but one you trust with all your heart.",
  },
  {
    id: "ila-iron-skillet",
    rank: 4,
    name: "Ila Iron Skillet",
    area: "Ila",
    lat: 63.4275,
    lng: 10.3758,
    rating: 8.5,
    scores: { crisp: 8, flavor: 10, portion: 8, vibe: 8 },
    reviewNo:
      "Ryktene om andefett kan stemme. Ila Iron Skillet har noe mystisk over seg — en dybde i smaken som vanlig solsikkeolje aldri kunne drømt om. Fritesene her er ikke de sprøeste, men de er de mest smaksrike. Hver bit er som en liten eksplosjon av umami og salt. Stedet er ujålete med jernpanner på veggene og en kok som ser ut som han har stekt poteter i 40 år. Verdt turen til Ila, selv i regn.",
    reviewEn:
      "The duck-fat rumors may be true. Ila Iron Skillet has something mysterious about it — a depth of flavor that regular sunflower oil could never dream of. The fries here aren't the crispiest, but they're the most flavorful. Each bite is like a small explosion of umami and salt. The place is unpretentious with cast iron pans on the walls and a cook who looks like he's been frying potatoes for 40 years. Worth the trip to Ila, even in rain.",
  },
  {
    id: "lade-long-fries",
    rank: 5,
    name: "Lade Long Fries",
    area: "Lade",
    lat: 63.4412,
    lng: 10.4418,
    rating: 8.2,
    scores: { crisp: 8, flavor: 8, portion: 9, vibe: 8 },
    reviewNo:
      "Lange som en sommernatt i juni — Lade Long Fries serverer poteter som nekter å være korte. Perfekt for dypping, perfekt for deling, perfekt for å spise mens du ser utover sjøen. Sjøbrisen legger til et snev av salt naturlig, og med eddik på toppen er dette en britisk ferie uten flybilletten. Porsjonen er generøs og stedet har den der avslappede Lade-stemningen som gjør at du blir sittende lenger enn planlagt.",
    reviewEn:
      "Long as a June summer night — Lade Long Fries serves potatoes that refuse to be short. Perfect for dipping, perfect for sharing, perfect for eating while gazing at the sea. The sea breeze adds a hint of natural salt, and with vinegar on top this is a British holiday without the plane ticket. The portion is generous and the place has that relaxed Lade vibe that makes you stay longer than planned.",
  },
  {
    id: "moholt-crisp-corner",
    rank: 6,
    name: "Moholt Crisp Corner",
    area: "Moholt",
    lat: 63.4180,
    lng: 10.4320,
    rating: 8.0,
    scores: { crisp: 9, flavor: 8, portion: 7, vibe: 8 },
    reviewNo:
      "Studentbyen har sin egen frites-perle. Moholt Crisp Corner leverer overraskende kvalitet til en pris som ikke knekker lomma. Tynt kutt med perfekt sprøhet — du hører knaset tre bord unna. Smaken er enkel og ren: potet, olje, salt. Ingenting mer trengs. Porsjonen er litt knapp for sultne studenter, men kvaliteten per pinne er uslåelig i dette prissjiktet.",
    reviewEn:
      "The student village has its own fry gem. Moholt Crisp Corner delivers surprising quality at a price that won't break the bank. Thin cut with perfect crispness — you hear the crunch three tables away. The flavor is simple and clean: potato, oil, salt. Nothing more is needed. The portion is slightly stingy for hungry students, but quality per stick is unbeatable in this price range.",
  },
  {
    id: "nedre-elvehavn-nugget",
    rank: 7,
    name: "Nedre Elvehavn Nugget",
    area: "Nedre Elvehavn",
    lat: 63.4335,
    lng: 10.4100,
    rating: 7.8,
    scores: { crisp: 8, flavor: 8, portion: 8, vibe: 7 },
    reviewNo:
      "Gjemt i kjelleren til en gammel lagerbygning ved elva. Nedre Elvehavn Nugget er et overraskende funn — fritesene er rustikke, ujevne, og akkurat slik de skal være. Skallet har karakter, kjernen har sjel. Det er poteter med personlighet. Stedet har industriell sjarm med teglsteinsvegger og dempet belysning. Ikke topp-tier, men absolutt verdt et besøk.",
    reviewEn:
      "Hidden in the basement of an old warehouse by the river. Nedre Elvehavn Nugget is a surprising find — the fries are rustic, uneven, and exactly as they should be. The shell has character, the core has soul. These are potatoes with personality. The place has industrial charm with brick walls and dim lighting. Not top-tier, but absolutely worth a visit.",
  },
  {
    id: "tiller-turbo-fries",
    rank: 8,
    name: "Tiller Turbo Fries",
    area: "Tiller",
    lat: 63.3720,
    lng: 10.3890,
    rating: 7.5,
    scores: { crisp: 8, flavor: 7, portion: 9, vibe: 6 },
    reviewNo:
      "Tiller er ikke kjent for gourmet, men Turbo Fries beviser at størrelse betyr noe. Enorme porsjoner med tykke, grovkuttede frites som metter en liten hær. Sprøheten er solid, smaken er god om ikke spektakulær. Stedet er like subtilt som navnet — neon, plast, og en drive-through-mentalitet. Men noen ganger vil du bare ha MYE frites, og da er dette stedet.",
    reviewEn:
      "Tiller isn't known for gourmet, but Turbo Fries proves that size matters. Enormous portions of thick, rough-cut fries that feed a small army. Crispness is solid, flavor is good if not spectacular. The place is as subtle as the name — neon, plastic, and a drive-through mentality. But sometimes you just want A LOT of fries, and that's when this is the spot.",
  },
];
