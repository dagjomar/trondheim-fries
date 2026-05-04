const OFFICIAL_RANKINGS = [
  {
    id: "baklandet-basket",
    rank: 1,
    name: "Baklandet Basket",
    area: "Baklandet",
    img: "img/fries-1.jpg",
    lat: 63.4289,
    lng: 10.4021,
    rating: 9.4,
    scores: { crisp: 10, flavor: 9, portion: 9, vibe: 9 },
    reviewNo:
      "Ok, dette er rett og slett gode fries. Tykke kutt, dobbelt-stekt, og saltet fester seg. Det er det jeg vil ha. Ikke noe fancy dill-aioli eller trøffelolje-tull. Bare poteter gjort riktig. Stedet er lite og litt gjemt bort bak trehusene i Baklandet, men du finner det på lukta. Jeg har vært her sikkert 30 ganger og det smaker likt hver gang. Det er konsistens. Det er respekt for poteten. Nummer én.",
    reviewEn:
      "Ok, these are simply good fries. Thick cut, double-fried, and the salt sticks. That's what I want. No fancy dill-aioli or truffle oil nonsense. Just potatoes done right. The place is small and kind of hidden behind the wooden houses in Baklandet, but you'll find it by the smell. I've been here probably 30 times and it tastes the same every time. That's consistency. That's respect for the potato. Number one.",
  },
  {
    id: "solsiden-shoestring",
    rank: 2,
    name: "Solsiden Shoestring",
    area: "Solsiden",
    img: "img/fries-2.jpg",
    lat: 63.4302,
    lng: 10.4065,
    rating: 9.1,
    scores: { crisp: 10, flavor: 9, portion: 8, vibe: 9 },
    reviewNo:
      "Tynne pinner. Skikkelig tynne. Og de er SPRØ. Ikke slappe, ikke bløte — sprø som pokker. Høy varme, rask tur i olja, og vips — perfeksjon. Porsjonen er litt liten, og det er det eneste minuset. Men kvaliteten? Helt oppe. Stedet ligger ved vannet i Solsiden og på en god sommerdag med disse friesene og en brus er livet ganske greit.",
    reviewEn:
      "Thin sticks. Really thin. And they're CRISPY. Not floppy, not soggy — crispy as hell. High heat, quick dip in the oil, and boom — perfection. The portion is a bit small, and that's the only downside. But the quality? Top notch. The place is by the water in Solsiden and on a good summer day with these fries and a soda, life is pretty great.",
  },
  {
    id: "midtbyen-munch",
    rank: 3,
    name: "Midtbyen Munch",
    area: "Midtbyen",
    img: "img/fries-3.jpg",
    lat: 63.4344,
    lng: 10.3951,
    rating: 8.8,
    scores: { crisp: 9, flavor: 9, portion: 8, vibe: 9 },
    reviewNo:
      "Pålitelig. Det er ordet. Du vet hva du får her og det er alltid bra. Sprøtt utenpå, fluffy inni, salt nok. Ikke den mest spennende opplevelsen i verden, men noen ganger vil du bare ha fries som funker. Midt i sentrum, alltid åpent, og du trenger aldri bekymre deg for kvaliteten. Det er som en god venn du alltid kan stole på.",
    reviewEn:
      "Reliable. That's the word. You know what you're getting here and it's always good. Crispy outside, fluffy inside, enough salt. Not the most exciting experience in the world, but sometimes you just want fries that work. Center of town, always open, and you never need to worry about quality. It's like a good friend you can always count on.",
  },
  {
    id: "ila-iron-skillet",
    rank: 4,
    name: "Ila Iron Skillet",
    area: "Ila",
    img: "img/fries-4.jpg",
    lat: 63.4275,
    lng: 10.3758,
    rating: 8.5,
    scores: { crisp: 8, flavor: 10, portion: 8, vibe: 8 },
    reviewNo:
      "Det går rykter om andefett her. Jeg vet ikke om det stemmer, men noe er annerledes. Smaken har en dybde som vanlige fries ikke har. Ikke de sprøeste, men de mest smaksrike. Hver bit har noe ekstra. Stedet er enkelt — jernpanner på veggen, en gammel fyr bak disken som tydeligvis har gjort dette lenge. Verdt turen til Ila, selv når det regner. Og det regner mye i Trondheim.",
    reviewEn:
      "There are rumors about duck fat here. I don't know if it's true, but something is different. The flavor has a depth that regular fries don't have. Not the crispiest, but the most flavorful. Every bite has something extra. The place is simple — iron pans on the wall, an old guy behind the counter who's clearly been doing this a long time. Worth the trip to Ila, even when it's raining. And it rains a lot in Trondheim.",
  },
  {
    id: "lade-long-fries",
    rank: 5,
    name: "Lade Long Fries",
    area: "Lade",
    img: "img/fries-5.jpg",
    lat: 63.4412,
    lng: 10.4418,
    rating: 8.2,
    scores: { crisp: 8, flavor: 8, portion: 9, vibe: 8 },
    reviewNo:
      "Lange poteter. Seriøst lange. Perfekt for å dyppe, perfekt for å dele. Stedet er ute ved sjøen og du får den der salte sjøbrisen gratis. Hiv på litt eddik og du har en britisk strandopplevelse uten flybilletten. Porsjonen er generøs, prisene er ok, og stemningen er chill. Ikke de beste friesene i byen, men en solid femmer.",
    reviewEn:
      "Long potatoes. Seriously long. Perfect for dipping, perfect for sharing. The place is out by the sea and you get that salty sea breeze for free. Throw some vinegar on top and you've got a British beach experience without the plane ticket. The portion is generous, prices are ok, and the vibe is chill. Not the best fries in town, but a solid five.",
  },
  {
    id: "moholt-crisp-corner",
    rank: 6,
    name: "Moholt Crisp Corner",
    area: "Moholt",
    img: "img/fries-6.jpg",
    lat: 63.4180,
    lng: 10.4320,
    rating: 8.0,
    scores: { crisp: 9, flavor: 8, portion: 7, vibe: 8 },
    reviewNo:
      "Studentmat til studentpris. Men hør her — kvaliteten er MYE bedre enn prisen tilsier. Du hører knaset fra naboen sitt bord. Tynt kutt, sprøtt, enkelt. Potet, olje, salt. Ferdig. Ingenting mer trengs. Eneste minus er porsjonen som er litt for liten når du er skikkelig sulten. Men som en rask mellommåltids-fries? Perfekt.",
    reviewEn:
      "Student food at student prices. But listen — the quality is WAY better than the price suggests. You hear the crunch from the next table. Thin cut, crispy, simple. Potato, oil, salt. Done. Nothing more needed. Only downside is the portion which is a bit small when you're properly hungry. But as a quick snack-fries? Perfect.",
  },
  {
    id: "nedre-elvehavn-nugget",
    rank: 7,
    name: "Nedre Elvehavn Nugget",
    area: "Nedre Elvehavn",
    img: "img/fries-7.jpg",
    lat: 63.4335,
    lng: 10.4100,
    rating: 7.8,
    scores: { crisp: 8, flavor: 8, portion: 8, vibe: 7 },
    reviewNo:
      "Gjemt i en kjeller ved elva. Rustikke fries som ser litt ujevne ut — og det er liksom poenget. De har karakter. Ikke perfekte Instagram-fries, men ekte mat laget av noen som faktisk bryr seg. Teglsteinsvegger, lav belysning, litt hipster-vibber kanskje. Men friesene lyver ikke. Solide, ærlige, gode. Ikke noe mer, ikke noe mindre.",
    reviewEn:
      "Hidden in a basement by the river. Rustic fries that look a bit uneven — and that's kind of the point. They have character. Not perfect Instagram-fries, but real food made by someone who actually cares. Brick walls, dim lighting, maybe a bit hipster-vibes. But the fries don't lie. Solid, honest, good. Nothing more, nothing less.",
  },
  {
    id: "tiller-turbo-fries",
    rank: 8,
    name: "Tiller Turbo Fries",
    area: "Tiller",
    img: "img/fries-8.jpg",
    lat: 63.3720,
    lng: 10.3890,
    rating: 7.5,
    scores: { crisp: 8, flavor: 7, portion: 9, vibe: 6 },
    reviewNo:
      "Noen ganger vil du bare ha MASSE fries. Ikke fancy, ikke gourmet, bare en stor haug med poteter. Det er Tiller Turbo. Tykke kutt, enorm porsjon, pris som en Burger King-meny. Og vet du hva? Det er helt ok. Ikke alt trenger å være Michelin-nivå. Noen ganger er en billig, stor porsjon fries akkurat det du trenger etter en lang dag. Stedet er ikke pent, men hvem bryr seg.",
    reviewEn:
      "Sometimes you just want A LOT of fries. Not fancy, not gourmet, just a big pile of potatoes. That's Tiller Turbo. Thick cut, enormous portion, price like a Burger King meal. And you know what? That's totally fine. Not everything needs to be Michelin-level. Sometimes a cheap, big portion of fries is exactly what you need after a long day. The place isn't pretty, but who cares.",
  },
];
