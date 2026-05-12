/** Milestone 1: all spots on one page (no detail routes). Linjære plasseringer (#01 …) brukes
 *  ikke — innen hvert sjikt er ikke rekkefølge rangering.
 *
 * Sprite-bilder: `public/images/fries-score/` — rated bruker `fries-{1–4}.png`, `unrated` bruker
 * `fries-unrated.png`. */
export type VenueTier = 'top' | 'second' | 'ok' | 'miss' | 'unrated';

/** Rekkefølge på forsiden og i data (best først). */
export const TIER_ORDER: readonly VenueTier[] = [
	'top',
	'second',
	'ok',
	'miss',
	'unrated',
] as const;

/** Rute til sprite per sjikt. */
export const TIER_FRIES_SRC: Record<VenueTier, string> = {
	top: '/images/fries-score/fries-4.png',
	second: '/images/fries-score/fries-3.png',
	ok: '/images/fries-score/fries-2.png',
	miss: '/images/fries-score/fries-1.png',
	unrated: '/images/fries-score/fries-unrated.png',
};

/** Vises på kortet og som hovedtittel for hvert sjikt på forsiden. */
export const TIER_LABELS: Record<VenueTier, string> = {
	top: 'Topp-sjiktet',
	second: 'Nest best',
	ok: 'Innafor',
	miss: 'Bomtur',
	unrated: 'Ikke vurdert',
};

/** Kort intro under hvert sjikt (innen sjikt er ikke rekkefølge rangering). */
export const TIER_DESCRIPTIONS: Record<VenueTier, string> = {
	top: 'Det vi helst ville valgt på nytt — som aldri skuffer. Gjentagende og konsekvent kvalitet, smak og sprøhet. De har gjort seg fortjent til å bli husket som de beste.',
	second:
		'Helt ok andrevalg når man ikke har mulighet til å besøke de aller beste. Ingenting i veien med disse, men kan ha små mangler som ikke gjør dem perfekte valg hver gang.',
	ok: 'Som regel ikke noe høydare, men om man ikke kan gå noe andre steder så får det duge. Men ikke forvent noe spesielt.',
	miss:
		'Etter å ha prøvd disse, har de blitt vurdert som ikke verdt å prøve igjen. De har sannsynligvis noe annet godt på menyen, men fries er det ikke.',
	unrated:
		'Disse har ikke blitt vurdert ennå, men er på kartet. Vi gleder oss til å prøve dem.',
};

/** Korte alt-tekster for fries-spritene på kort og i sjiktitlerader. */
export const TIER_FRIES_ALT: Record<VenueTier, string> = {
	top: 'Fire pommessymbol som illustrerer sjiktet',
	second: 'Tre pommessymbol som illustrerer sjiktet',
	ok: 'To pommessymbol som illustrerer sjiktet',
	miss: 'Ett pommessymbol som illustrerer sjiktet',
	unrated: 'Pommes-plassholder for ikke vurderte steder',
};

export type Venue = {
	name: string;
	tier: VenueTier;
	/** Pommes-porsjon, kr (slik det var ved besøket). */
	priceNok: number;
	score: string;
	blurb: string;
	traits: string;
	image: string;
	mapUrl: string;
	websiteUrl?: string;
	updated: string;
};

const img =
	'https://lh3.googleusercontent.com/aida-public/AB6AXuDLA3x6uVpOLR8WSS_zzlWppn3uKgaJuvlK7mUfTylKRZSenYTUpIucW_7pp1MsAnxSUXo5jkzKP-Vm4aRig67p57gqalzp-AXBs9mbz4JdXTRk0dNTSbMq8dkt29tWAJ3vU12aEF5v3KvEwjoRrMzgUPLTwn7CQNryujXd8hugth5ma1CwM5-8Wf9lAanomPz3_5ht8JbXFAAR5pzZIWRhqxFBhb6hOYIWM-DNQo0I5u0Kk3iEPVDOGj5p7cDCKg_9Y9jM9SIbPA';

const imgKrambua = '/images/restaurants/krambua/snitzel-721612.jpg';

/** Close-up pommes photo: `public/images/restaurants/burger.no/burger-no-closeup-fries.jpg`. */
const imgBurgerNo =
	'/images/restaurants/burger.no/burger-no-closeup-fries.jpg';

export const venues: Venue[] = [
	{
		name: 'Krambua',
		tier: 'top',
		priceNok: 89,
		score: '9,9',
		blurb:
			'Krambugata gav en utrolig overraskende herlig opplevelse. Perfekt stekt, god smak, hint av potetskall, lagd fra bunnen av! Passe størrelse på en porsjon.',
		traits: 'HJEMMELAGET · SENTRUM',
		image: imgKrambua,
		mapUrl:
			'https://www.google.com/maps/search/?api=1&query=Krambugata+12+7010+Trondheim',
		websiteUrl: 'https://www.krambuatrondheim.no/',
		updated: '05.05.2026',
	},
	{
		name: 'Burger.no (Byhaven)',
		tier: 'top',
		priceNok: 59,
		score: '8,8',
		blurb:
			'Dette er en must-have når det gjelder pommes i Trondheim — jeg ville ikke vært foruten denne, og anbefaler alle å prøve den minst én gang. ' +
			'Sprø, mye dill og kraftig smak; uten dipp er det utrolig mye for pengene. ' +
			'Likevel så mektig at jeg ikke nødvendigvis velger den hver gang jeg bare skal ha litt fries.',
		traits: 'DILL · SPRØ · PRISSTERKT',
		image: imgBurgerNo,
		mapUrl:
			'https://www.google.com/maps/search/?api=1&query=Burger.no+Byhaven+Olav+Tryggvasons+gate+Trondheim',
		websiteUrl: 'https://burger.no/',
		updated: '09.05.2026',
	},
	{
		name: 'Cafe Løkka',
		tier: 'second',
		priceNok: 60,
		score: '8,0',
		blurb:
			'Cafe Løkka har i lang tid vært en av favorittene, men har dessverre tapt seg fra topp-sjiktet de siste årene. ' +
			'60,- uten dipp er ganske billig, men samtidig er det relativt liten porsjon. Pro-tip: spør om ekstra stekt for å få den ekstra gode sprøheten.',
		traits: 'KAFÉ · LØKKAVEITA',
		image: img,
		mapUrl:
			'https://www.google.com/maps/search/?api=1&query=Cafe+L%C3%B8kka+Trondheim',
		updated: '10.05.2026',
	},
	{
		name: 'Kompis sorgenfri',
		tier: 'unrated',
		priceNok: 0,
		score: '—',
		blurb: 'Ikke vurdert ennå.',
		traits: 'IKKE VURDERT',
		image:
			'https://lh3.googleusercontent.com/gps-proxy/ALd4DhHxU4EbrHwwQvHMYDndql0Wk8NYZf_sUZfN-7A_VwejjpEbO0ViDzSleEzip6yWL0JPE28OPbJEz5rc53JR6wmA7z7gbOlXxO7q7HhaP4huaAgtJOVo91JRhbmIXJHd1UKuA1cH5j1pZ8lGCNyR_jDRsfgcgoBAqOKgOloHVubrcKUato8CjODgKg=s462-k-no',
		mapUrl:
			'https://www.google.com/maps/search/?api=1&query=Kompis+sorgenfri+Trondheim',
		updated: '10.05.2026',
	},
	{
		name: 'SuperHero Burger',
		tier: 'unrated',
		priceNok: 0,
		score: '—',
		blurb: 'Ikke vurdert ennå.',
		traits: 'IKKE VURDERT',
		image: img,
		mapUrl:
			'https://www.google.com/maps/search/?api=1&query=SuperHero+Burger+Trondheim',
		updated: '10.05.2026',
	},
	{
		name: '& Friends (Solsiden)',
		tier: 'ok',
		priceNok: 65,
		score: '6,0',
		blurb:
			'Liten porsjon (ca. 27 stk), ujevne men store cuts — bra crunch, myk inni. Krydder og salt utenpå blir fort mye, med en litt merkelig «sour cream»-aktig ettersmak. ' +
			'Ingen ketchup tilbudt (trekk); gratis dip hjelper mot krydderet men smaker fish’n’chips/remulade. Tykke biter mest potetmos, andre salt-krydderbomber. ' +
			'Ser bra ut i starten, men ble for mye — fullførte ikke. Anbefales om du elsker krydder og remulade; jeg ville hatt ketchup og prioriterer ikke denne varianten igjen.',
		traits: 'KRYDDER · LITEN PORSJON · SOLSIDEN',
		image: img,
		mapUrl: 'https://maps.app.goo.gl/HxEjygrViPdGP2rf9',
		websiteUrl: 'https://www.andfriendssolsiden.no/',
		updated: '12.05.2026',
	},
	{
		name: 'Brooklyn Diner and Sportsbar',
		tier: 'unrated',
		priceNok: 59,
		score: '—',
		blurb: 'Ikke vurdert ennå.',
		traits: 'IKKE VURDERT',
		image: img,
		mapUrl: 'https://maps.app.goo.gl/LgDaZ15SmNCPEXNLA?g_st=ic',
		websiteUrl: 'https://brooklyndiner.no/',
		updated: '12.05.2026',
	},
	// {
	// 	name: 'Bror',
	// 	priceNok: 0,
	// 	score: '9,2',
	// 	blurb: 'Røff kutting, eksepsjonell crunch og en signatur krydderblanding.',
	// 	traits: 'SALT · BALANSERT',
	// 	image: img,
	// 	mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bror+restaurant+Trondheim',
	// 	updated: '15.05.2024',
	// },
];

// Forslag til neste pommes-tester (Trondheim):
// - E.C. Dahls Pub & Restaurant
// - ØX Tap Room
// - Rock Burger
// - Den Gode Nabo
// - Big Horn Steak House
// - Trondhjem Mikrobryggeri
// - Texas Grill House
// - Søstrene Karlsen
// - McDonald's (sentral)
// - Burger King
