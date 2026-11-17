// All hand-written site copy lives here.

export const profile = {
  name: "Andrei Craciunoiu",
  tagline: "Product geek. Prediction markets, trading, consumer apps.",
  location: "London, UK",
  avatar: "/avatar.jpg",
  links: {
    x: "https://x.com/andreicooks",
    linkedin: "https://www.linkedin.com/in/ancra/",
    email: "mailto:andrei.craciunoiu@gmail.com",
  },
};

export const companies = {
  smarkets: "https://smarkets.com",
  sbk: "https://getsbk.com",
  kambi: "https://www.kambi.com",
  oddsIndex: "https://oddsindex.com",
  upb: "https://upb.ro",
};

export const handles = {
  literal: "andreic",
  letterboxd: "xandreix",
};

export const apps = [
  {
    id: "1155643579",
    name: "Smarkets",
    blurb: "Prediction markets & exchange",
    tint: "emerald",
    areas: ["Binary options", "Exchange technology", "Two-sided exchange", "Payments wallet"],
  },
  {
    id: "1371054563",
    name: "SBK",
    blurb: "Sports betting app",
    tint: "violet",
    areas: ["App marketing", "Rewards wallet", "Price comparison", "Recommendation engine"],
  },
] as const;

export const highlights = [
  { value: "5×", label: "SBK revenue growth in 3 years" },
  { value: "1m", label: "users across Smarkets & SBK" },
  { value: "£3bn", label: "annual traded volume" },
];

// Curated by hand from x.com/andreicooks (no X API).
export const posts = [
  {
    text: "New era for Smarkets! ↳ @smarkets: “Always Ahead.”",
    date: "Sep 8, 2026",
    url: "https://x.com/andreicooks/status/2097264698211082455",
  },
  {
    text: "Anthropic uses Intercom and you’re bearish on B2B SaaS?!",
    date: "Apr 4, 2026",
    url: "https://x.com/andreicooks/status/2040487910730879215",
  },
  {
    text: "It's still crazy to me how most products fail to apply AI/LLM to the most relevant use cases. I'm trying to sell something on Facebook Marketplace. Why wouldn't they use Meta AI to auto-create the listing based on the photos?",
    date: "Nov 4, 2025",
    url: "https://x.com/andreicooks/status/1985768151146205469",
  },
];

// Letterboxd favourites (profile top 4). Shown when the RSS feed has no diary entries,
// since plain ratings without a logged date never appear in the feed.
const LB = "https://a.ltrbxd.com/resized";
export const favouriteFilms = [
  { title: "Reservoir Dogs", year: 1992, slug: "reservoir-dogs", poster: `${LB}/sm/upload/u0/4o/op/yx/g7spS2Y4SZoQoC6Hn7zoqEqdYqR-0-300-0-450-crop.jpg?v=6d1aaa720c` },
  { title: "The Shawshank Redemption", year: 1994, slug: "the-shawshank-redemption", poster: `${LB}/sm/upload/7l/hn/46/uz/zGINvGjdlO6TJRu9wESQvWlOKVT-0-300-0-450-crop.jpg?v=8736d1c395` },
  { title: "GoodFellas", year: 1990, slug: "goodfellas", poster: `${LB}/film-poster/5/1/3/8/3/51383-goodfellas-0-300-0-450-crop.jpg?v=172dbb3464` },
  { title: "Pulp Fiction", year: 1994, slug: "pulp-fiction", poster: `${LB}/film-poster/5/1/4/4/4/51444-pulp-fiction-0-300-0-450-crop.jpg?v=dee19a8077` },
];

export const story = [
  { year: "1992", text: "Born and raised in Bucharest. Played football competitively until 18." },
  { year: "2011", text: "Started a degree in entrepreneurship & economics at Politehnica Bucharest. Dropped out to play poker professionally, then went back and finished." },
  { year: "2017", text: "Joined Kambi as a product analyst. Helped take sportsbooks first-to-market in 20+ regulated jurisdictions." },
  { year: "2019", text: "Moved to London. Started doing UX research and early product management." },
  { year: "2021", text: "Founding PM for OddsIndex, Smarkets' US vertical. Learned that de-risking demand is everything in 0→1." },
  { year: "2022", text: "Director of Product for Smarkets and SBK. Grew the team from 2 to 8 and SBK revenue 5×." },
  { year: "Now", text: "Building out the Smarkets prediction markets platform ahead of our US launch." },
];

export const testimonials = [
  {
    quote: "Andrei is a uniquely smart, driven and talented individual. I can count on one hand the people who evolve in his league. I really hope I get to work with him again.",
    name: "Arnaud Thiercelin",
    role: "CPTO, ex Auterion, DJI",
  },
  {
    quote: "Andrei is a fantastic Product Director. His strong areas are understanding product market fit, roadmap prioritisation and stakeholder management.",
    name: "Mark Nelson",
    role: "PM, Bloomberg, ex Accenture",
  },
  {
    quote: "Andrei possesses a competitive spirit, willingness to go the extra mile, and commitment to excellence that enables him to thrive. He is a star, through and through.",
    name: "Manasak Bantalapichai",
    role: "Head of Product Intelligence, Entain",
  },
];
