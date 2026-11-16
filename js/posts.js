/*
  Journal post metadata. Powers the homepage "recent snapshots" and
  the full blog.html list. The actual long-form writing for each
  post lives in its own file under /blog/.

  To add a new post: duplicate blog/_template.html, write your
  entry, save it as blog/your-slug.html, then add an object here
  with a matching "slug".
*/

const posts = [
  {
    slug: "bueno-days-little-village",
    title: "Bueno Days in Little Village",
    date: "2026-11-08",
    tag: "cafe log",
    excerpt:
      "One of my favorite cafes. Drinks that celebrate Mexican heritage, including a confleis latte and a nube verde.",
    cafeSlug: "bueno-days",
    image: "images/bueno-days-cookie-donut.jpg",
    tone: "linear-gradient(160deg, #d8a892, #a9645a)",
  },
  {
    slug: "mercurys-coffee-seattle",
    title: "Mercury's Coffee, one last Seattle post",
    date: "2026-10-03",
    tag: "cafe log",
    excerpt:
      "Shoutout to Mercury's Coffee for getting me through the summer. The iced white chocolate americanos never let me down.",
    cafeSlug: null,
    image: "images/mercurys-1.jpg",
    tone: "linear-gradient(160deg, #e8b9b0, #a9645a)",
  },
  {
    slug: "elixir-dessert-bar-u-district",
    title: "Elixir Dessert & Bar in the U District",
    date: "2026-09-26",
    tag: "cafe log",
    excerpt:
      "Lowkey overpriced, but the best spot in the area to study. The matcha was good, as expected.",
    cafeSlug: "elixir-grean",
    image: "images/elixir-1.jpg",
    tone: "linear-gradient(160deg, #cf8f88, #6b4433)",
  },
  {
    slug: "the-moo-bar-slu",
    title: "The Moo Bar in South Lake Union",
    date: "2026-09-14",
    tag: "cafe log",
    excerpt:
      "Catching up on the last Seattle cafes. A Biscoff iced matcha in a cup you get to keep.",
    cafeSlug: "moo-bar",
    image: "images/moo-bar-1.jpg",
    tone: "linear-gradient(160deg, #d8a892, #a9645a)",
  },
  {
    slug: "aroom-seattle",
    title: "Aroom, my favorite Viet cafe in Seattle",
    date: "2026-08-17",
    tag: "cafe log",
    excerpt:
      "Banana matcha, banana coffee and good cafe DJ sets. I've stopped by at both the Fremont and waterfront locations.",
    cafeSlug: "aroom",
    image: "images/aroom-1.jpg",
    tone: "linear-gradient(160deg, #e8b9b0, #a9645a)",
  },
  {
    slug: "le-grey-chinatown",
    title: "Le Grey in the International District",
    date: "2026-08-16",
    tag: "cafe log",
    excerpt:
      "A modern, minimalist tea cafe. The matcha cloudo with salted cold foam was the best matcha I had in Seattle.",
    cafeSlug: "le-grey",
    image: "images/le-grey-1.jpg",
    tone: "linear-gradient(160deg, #cf8f88, #6b4433)",
  },
  {
    slug: "grean-matcha-u-district",
    title: "Grean Matcha in the U District",
    date: "2026-07-28",
    tag: "cafe log",
    excerpt:
      "A matcha stop after a Sunday workout, inside Elixir Cafe. A strawberry matcha, a banana bread latte and a jasmine matcha.",
    cafeSlug: "elixir-grean",
    image: "images/grean-1.jpg",
    tone: "linear-gradient(160deg, #d8a892, #a9645a)",
  },
  {
    slug: "phe-capitol-hill",
    title: "Phê on Capitol Hill",
    date: "2026-07-20",
    tag: "cafe log",
    excerpt:
      "Vietnamese coffee and matcha with a line out the door. Cute flowers on top, and tiny chairs.",
    cafeSlug: "phe",
    image: "images/phe-1.jpg",
    tone: "linear-gradient(160deg, #e8b9b0, #a9645a)",
  },
  {
    slug: "howdy-yall-seattle-central-library",
    title: "Howdy Y'all at the Seattle Central Library",
    date: "2026-07-18",
    tag: "cafe log",
    excerpt:
      "A coffee and matcha bar led by a Korean and Mexican duo, inside the library. The cream top latte was a 9/10.",
    cafeSlug: "howdy-yall",
    image: "images/howdy-yall-1.jpg",
    tone: "linear-gradient(160deg, #cf8f88, #6b4433)",
  },
  {
    slug: "moment-coffee-fremont",
    title: "Moment Coffee in Fremont",
    date: "2026-07-14",
    tag: "cafe log",
    excerpt:
      "An iced strawberry matcha, a yuzu matcha tonic and a Biscoff latte. All the drinks were delish.",
    cafeSlug: "moment",
    image: "images/moment-1.jpg",
    tone: "linear-gradient(160deg, #d8a892, #a9645a)",
  },
  {
    slug: "hi-everyone-happy-youre-here",
    title: "Hi everyone, happy you're here",
    date: "2026-07-13",
    tag: "life",
    excerpt:
      "Why I started this little page, and what's coming: Seattle spots, then Chicago, and at-home coffee.",
    cafeSlug: null,
    image: "images/hello-1.jpg",
    tone: "linear-gradient(160deg, #e8b9b0, #a9645a)",
  },
  {
    slug: "plus84-belltown",
    title: "Plus84 in Belltown",
    date: "2026-07-13",
    tag: "cafe log",
    excerpt:
      "A Vietnamese minimalist cafe open till midnight, right by the pier. A matcha with salted cream, 7.5/10.",
    cafeSlug: "plus84",
    image: "images/plus84-1.jpg",
    tone: "linear-gradient(160deg, #cf8f88, #6b4433)",
  },
];
