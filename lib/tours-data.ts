export type TourCategory = 'cycling' | 'moto' | 'hiking'

export interface Tour {
  id: string
  slug: string
  title: string
  category: TourCategory
  country: string
  region: string
  duration: string
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Expert'
  distance: string
  elevation?: string
  startDate: string
  endDate: string
  image: string
  description: string
  longDescription: string
  highlights: string[]
  includes: string[]
  groupSize: string
}

export const tours: Tour[] = [
  {
    id: '1',
    slug: 'bohemian-ridgeline-cycling',
    title: 'Bohemian Ridgeline Circuit',
    category: 'cycling',
    country: 'Czech Republic',
    region: 'South Bohemia',
    duration: '6 days',
    difficulty: 'Moderate',
    distance: '420 km',
    elevation: '5 200 m',
    startDate: '2026-05-15',
    endDate: '2026-05-20',
    image: '/images/tour-cycling-bohemia.jpg',
    description: 'Six days of pristine cycling through the rolling hills of South Bohemia, past medieval castles and silent pine forests.',
    longDescription: 'Experience the hidden face of Central Europe as you pedal through landscapes untouched by mass tourism. This route winds through ancient trading paths, forested ridgelines and sleepy villages where time moves differently. Each morning you roll out into fresh mountain air; each evening you rest in hand-picked countryside guesthouses. The elevation is forgiving yet satisfying — enough to feel the effort without breaking the spirit.',
    highlights: [
      'Ridgeline trail across Šumava plateau with panoramic views',
      'Descent into the White Lake valley at golden hour',
      'Stone bridge crossing at the historic river ford',
      'Optional swim stop at alpine reservoir',
      'Guided tasting of local wild-herb cuisine',
    ],
    includes: ['Guide & support vehicle', 'Accommodation (5 nights)', 'Breakfast & dinner daily', 'GPS route files', 'First aid kit'],
    groupSize: '6–12 riders',
  },
  {
    id: '2',
    slug: 'alpine-moto-crossing',
    title: 'Alpine Moto Grand Crossing',
    category: 'moto',
    country: 'Austria / Italy',
    region: 'Eastern Alps',
    duration: '8 days',
    difficulty: 'Hard',
    distance: '1 800 km',
    elevation: '24 000 m',
    startDate: '2026-06-08',
    endDate: '2026-06-15',
    image: '/images/tour-moto-alps.jpg',
    description: 'Eight days of relentless mountain riding across the Eastern Alps — from snowy passes to Mediterranean valleys.',
    longDescription: 'This is the tour for riders who want more than tarmac. Starting from the Austrian lowlands, the route climbs through a succession of legendary passes before dropping into sun-drenched Italian valleys. Road surfaces range from smooth asphalt to freshly-chipped mountain grades. Every corner delivers a new panorama. Nights are spent in mountain inns with stone fireplaces and thick duvets. The group is deliberately small — never more than eight machines — so every twist stays personal.',
    highlights: [
      'Dawn crossing of a 2 700 m glacial pass',
      'Winding descent through flowering Alpine meadows',
      'Lunch at a cliff-edge rifugio with valley views',
      'Optional gravel detour through an abandoned military road',
      'Sunset arrival into Italian lakeside town',
    ],
    includes: ['Lead & sweep guides', 'Accommodation (7 nights)', 'Breakfast daily', 'Route book & GPS tracks', 'Emergency recovery'],
    groupSize: '4–8 riders',
  },
  {
    id: '4',
    slug: 'high-tatras-summit-hike',
    title: 'High Tatras Summit Traverse',
    category: 'hiking',
    country: 'Slovakia',
    region: 'High Tatras',
    duration: '5 days',
    difficulty: 'Expert',
    distance: '85 km',
    elevation: '6 800 m',
    startDate: '2026-07-12',
    endDate: '2026-07-16',
    image: '/images/tour-hiking-tatry.jpg',
    description: 'A demanding 5-day ridge traverse of the High Tatras — granite spires, glacial lakes and knife-edge ridges above 2 600 m.',
    longDescription: 'This is high-alpine hiking in its purest form. The route follows the main Tatra ridgeline, crossing over ten peaks above 2 300 m and passing some of the most dramatic granite formations in Central Europe. Weather changes fast at altitude; the experience is raw and unfiltered. Your guide is a certified mountain leader with twenty years in these peaks. Group size is strictly limited so the trail experience remains authentic. Fixed-chain sections and a short via-ferrata passage add technical spice on day three.',
    highlights: [
      'Sunrise from a 2 655 m summit on day two',
      'Via-ferrata chain passage above a glacial cirque',
      'Emerald mountain lake camp at 2 000 m',
      'Eagle viewpoint over three countries',
      'Descent through ancient dwarf-pine labyrinth',
    ],
    includes: ['Certified mountain guide', 'Mountain hut accommodation (4 nights)', 'Full board', 'Helmets & harnesses for via-ferrata', 'Emergency helicopter insurance'],
    groupSize: '4–8 hikers',
  },
  {
    id: '5',
    slug: 'danube-sunrise-cycling',
    title: 'Danube Sunrise Cycling Journey',
    category: 'cycling',
    country: 'Austria / Slovakia',
    region: 'Danube Valley',
    duration: '4 days',
    difficulty: 'Easy',
    distance: '280 km',
    elevation: '1 200 m',
    startDate: '2026-08-03',
    endDate: '2026-08-06',
    image: '/images/tour-cycling-danube.jpg',
    description: 'A gentle four-day riverside journey following the Danube from the Wachau wine country down to the Slovak plains.',
    longDescription: 'Flat, scenic and deeply satisfying — this tour is designed for riders who want to cover serious distance without punishing climbs. The Danube path is one of the great cycling routes of Europe: well-surfaced, traffic-free and constantly rewarding with new river views, cliff-side monasteries and vineyard terraces. Morning rides begin at first light before the tourist day-trippers arrive. The pace is relaxed; photo stops are frequent and unashamed. Luggage is transferred each day so you ride light.',
    highlights: [
      'Dawn roll through fog-covered Wachau Valley',
      'Apricot orchard lanes in full blossom',
      'Ancient Roman fortification ruins at riverside',
      'Ferry crossing with bicycles at sunset',
      'Slovak vineyard picnic on final afternoon',
    ],
    includes: ['Guide', 'Accommodation (3 nights)', 'Luggage transfer', 'Breakfast daily', 'Ferry crossing fees'],
    groupSize: '8–16 riders',
  },
  {
    id: '6',
    slug: 'balkan-canyon-moto',
    title: 'Balkan Canyon Moto Adventure',
    category: 'moto',
    country: 'Bosnia / Montenegro',
    region: 'Western Balkans',
    duration: '7 days',
    difficulty: 'Hard',
    distance: '2 100 km',
    elevation: '18 000 m',
    startDate: '2026-06-28',
    endDate: '2026-07-04',
    image: '/images/tour-moto-balkans.jpg',
    description: 'Seven days carving through the deepest canyons and wildest mountain roads of the Western Balkans.',
    longDescription: 'Few corners of Europe remain as untamed as the Balkan interior. The roads are narrow, the scenery is epic and the locals are legendary for hospitality. This tour connects a chain of dramatic river canyons — including the deepest in Europe — via passes that see almost no tourist traffic. Riding is technical enough to keep expert riders fully engaged, but not beyond a competent intermediate. Accommodation ranges from mountain lodges to small family guesthouses where dinner is whatever came out of the garden that morning.',
    highlights: [
      'Rim ride above a 1 300 m deep river canyon',
      'Secret waterfall stop hidden from roads',
      'Pass crossing at dusk with valley fog below',
      'Traditional guesthouse dinner with local musicians',
      'Final mountain lake wild swim',
    ],
    includes: ['Lead guide & backup rider', 'Accommodation (6 nights)', 'Dinner daily', 'GPS routes', 'Border crossing documentation support'],
    groupSize: '4–8 riders',
  },
  {
    id: '8',
    slug: 'krkonose-ridge-hike',
    title: 'Krkonoše Ridge Week',
    category: 'hiking',
    country: 'Czech Republic',
    region: 'Giant Mountains',
    duration: '5 days',
    difficulty: 'Moderate',
    distance: '110 km',
    elevation: '3 400 m',
    startDate: '2026-09-05',
    endDate: '2026-09-09',
    image: '/images/tour-hiking-krkonose.jpg',
    description: 'Five days along the highest ridge in the Czech Republic — wide open moorland, ancient spruce forests and sweeping border views.',
    longDescription: 'Krkonoše is the roof of Bohemia. The ridge walk stretches along the Polish-Czech border, offering uninterrupted moorland walking above the treeline with views that stretch on clear days to the Sudeten foothills. September brings golden heather, cool clear air and virtually empty trails. The route alternates ridge walking with valley descents into traditional mountain villages. Accommodation is in historic mountain chalets with log fires and home-cooked meals.',
    highlights: [
      'Full-day ridge walk above the cloud line',
      'Ancient peat bog nature reserve crossing',
      'Highest point of Czechia on day two',
      'Traditional mountain chalet dinner',
      'Waterfall canyon descent on final day',
    ],
    includes: ['Guide', 'Mountain chalet accommodation (4 nights)', 'Half board', 'Route maps & trail guide', 'Transport from/to trailhead'],
    groupSize: '6–14 hikers',
  },
]

export const categoryLabels: Record<TourCategory, string> = {
  cycling: 'Cycling',
  moto: 'Moto',
  hiking: 'Hiking',
}

export const difficultyColors: Record<string, string> = {
  Easy: 'text-emerald-400',
  Moderate: 'text-yellow-400',
  Hard: 'text-orange-400',
  Expert: 'text-red-400',
}
