/*
  Every cafe/food spot you've visited, in one place.
  This same list feeds the map pins AND (via postSlug) links back to
  the matching journal entry.

  To add a new spot: copy an object below, give it a unique "slug",
  fill in the real lat/lng (right-click the spot on Google Maps ->
  the coordinates are the first thing in the menu that pops up),
  and set "postSlug" to a journal entry's file name (without .html)
  if you've written one, or leave it as null.

  tone: a CSS gradient used as a placeholder "photo" until you swap
  in a real picture — see images/README.txt for how to do that.
*/

const cafes = [
  {
    slug: "the-corner-table",
    name: "The Corner Table",
    city: "Chicago, IL",
    lat: 41.9088,
    lng: -87.6773,
    note: "Oat milk, low light, and the best seat by the window.",
    order: "iced brown sugar oat latte",
    postSlug: "rainy-tuesday-window-seat",
    tone: "linear-gradient(160deg, #e8b9b0, #a9645a)",
  },
  {
    slug: "kraft-and-kettle",
    name: "Kraft & Kettle",
    city: "Chicago, IL",
    lat: 41.9214,
    lng: -87.6976,
    note: "Tiny counter, huge croissants. Go before 9am.",
    order: "cortado + almond croissant",
    postSlug: null,
    tone: "linear-gradient(160deg, #d8a892, #6b4433)",
  },
  {
    slug: "paper-plane-coffee",
    name: "Paper Plane Coffee Co.",
    city: "Evanston, IL",
    lat: 42.0451,
    lng: -87.6877,
    note: "First stop in a new neighborhood, every time.",
    order: "drip coffee, black",
    postSlug: null,
    tone: "linear-gradient(160deg, #c89b3c, #8a5a34)",
  },
];
