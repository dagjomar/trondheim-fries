/** Milestone 1: all spots on one page (no detail routes). Current leaderboard count
 *  is small; when there are many venues, we can add «Se alle» inline expansion again. */
export type Venue = {
	rank: number;
	name: string;
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
		rank: 1,
		name: 'Krambua',
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
		rank: 2,
		name: 'Burger.no (Byhaven)',
		score: '8,8',
		blurb:
			'Dette er en must-have når det gjelder pommes i Trondheim — jeg ville ikke vært foruten denne, og anbefaler alle å prøve den minst én gang. ' +
			'Sprø, mye dill og kraftig smak; 59 kr uten dipp er utrolig mye for pengene. ' +
			'Likevel så mektig at jeg ikke nødvendigvis velger den hver gang jeg bare skal ha litt fries.',
		traits: 'DILL · SPRØ · PRISSTERKT',
		image: imgBurgerNo,
		mapUrl:
			'https://www.google.com/maps/search/?api=1&query=Burger.no+Byhaven+Olav+Tryggvasons+gate+Trondheim',
		websiteUrl: 'https://burger.no/',
		updated: '09.05.2026',
	},
	// {
	// 	rank: 2,
	// 	name: 'SuperHero Burger',
	// 	score: '9,8',
	// 	blurb: 'Trippel-tilberedt med en tekstur som trosser tyngdekraften.',
	// 	traits: 'SPRØHET · HØY',
	// 	image: img,
	// 	mapUrl: 'https://www.google.com/maps/search/?api=1&query=SuperHero+Burger+Trondheim',
	// 	updated: '12.05.2024',
	// },
	// {
	// 	rank: 3,
	// 	name: 'Bror',
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