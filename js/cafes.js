/*
  Every cafe/food spot you've visited, in one place.
  This same list feeds the map pins AND (via "posts") links back to
  the matching blog entries.

  To add a new spot: copy an object below, give it a unique "slug",
  fill in the real lat/lng (right-click the spot on Google Maps ->
  the coordinates are the first thing in the menu that pops up),
  and list any blog entries about it in "posts" (slug = the file name
  without .html, label = the link text). Leave "posts" as [] if you
  haven't written one yet.

  tone: a CSS gradient used as a placeholder "photo" until you swap
  in a real picture. See images/README.txt for how to do that.
*/

const cafes = [
  {
    slug: "bueno-days",
    name: "Bueno Days",
    city: "Chicago, IL",
    lat: 41.8517,
    lng: -87.6995,
    note: "Drinks that celebrate Mexican heritage, in Little Village.",
    order: "confleis latte",
    posts: [{ slug: "bueno-days-little-village", label: "read the post" }],
    tone: "linear-gradient(160deg, #d8a892, #a9645a)",
  },
  {
    slug: "plus84",
    name: "Plus84",
    city: "Seattle, WA",
    lat: 47.61544,
    lng: -122.34666,
    note: "A Vietnamese minimalist cafe in Belltown, open till midnight.",
    order: "matcha with salted cream",
    posts: [{ slug: "plus84-belltown", label: "read the post" }],
    tone: "linear-gradient(160deg, #d8a892, #a9645a)",
  },
  {
    slug: "moment",
    name: "Moment Coffee",
    city: "Seattle, WA",
    lat: 47.64981,
    lng: -122.35001,
    note: "Fremont cafe with a great iced strawberry matcha.",
    order: "iced strawberry matcha",
    posts: [{ slug: "moment-coffee-fremont", label: "read the post" }],
    tone: "linear-gradient(160deg, #d8a892, #a9645a)",
  },
  {
    slug: "howdy-yall",
    name: "Howdy Y'all",
    city: "Seattle, WA",
    lat: 47.60655,
    lng: -122.33222,
    note: "A coffee and matcha bar inside the Seattle Central Library.",
    order: "cream top latte",
    posts: [{ slug: "howdy-yall-seattle-central-library", label: "read the post" }],
    tone: "linear-gradient(160deg, #d8a892, #a9645a)",
  },
  {
    slug: "phe",
    name: "Phê",
    city: "Seattle, WA",
    lat: 47.61508,
    lng: -122.32251,
    note: "Vietnamese coffee and matcha on Capitol Hill, with tiny chairs.",
    order: "strawberry matcha iced latte",
    posts: [{ slug: "phe-capitol-hill", label: "read the post" }],
    tone: "linear-gradient(160deg, #d8a892, #a9645a)",
  },
  {
    slug: "elixir-grean",
    name: "Elixir & Grean Matcha",
    city: "Seattle, WA",
    lat: 47.66208,
    lng: -122.31295,
    note: "Grean matcha cafe by day, Elixir dessert bar by night, in the U District.",
    order: "strawberry matcha",
    posts: [
      { slug: "grean-matcha-u-district", label: "read the Grean post" },
      { slug: "elixir-dessert-bar-u-district", label: "read the Elixir post" },
    ],
    tone: "linear-gradient(160deg, #d8a892, #a9645a)",
  },
  {
    slug: "le-grey",
    name: "Le Grey",
    city: "Seattle, WA",
    lat: 47.59825,
    lng: -122.32549,
    note: "A minimalist tea cafe in the International District.",
    order: "matcha cloudo",
    posts: [{ slug: "le-grey-chinatown", label: "read the post" }],
    tone: "linear-gradient(160deg, #d8a892, #a9645a)",
  },
  {
    slug: "aroom",
    name: "Aroom",
    city: "Seattle, WA",
    lat: 47.6532,
    lng: -122.3433,
    note: "My favorite Viet cafe in Seattle. Fremont, plus a waterfront location.",
    order: "banana matcha",
    posts: [{ slug: "aroom-seattle", label: "read the post" }],
    tone: "linear-gradient(160deg, #d8a892, #a9645a)",
  },
  {
    slug: "moo-bar",
    name: "The Moo Bar",
    city: "Seattle, WA",
    lat: 47.61739,
    lng: -122.33806,
    note: "Matcha in jars you get to keep.",
    order: "biscoff iced matcha",
    posts: [{ slug: "the-moo-bar-slu", label: "read the post" }],
    tone: "linear-gradient(160deg, #d8a892, #a9645a)",
  },
];
