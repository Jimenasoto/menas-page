/*
  Journal post metadata — powers the homepage "recent snapshots" and
  the full journal.html list. The actual long-form writing for each
  post lives in its own file under /journal/.

  To add a new post: duplicate journal/_template.html, write your
  entry, save it as journal/your-slug.html, then add an object here
  with a matching "slug".
*/

const posts = [
  {
    slug: "rainy-tuesday-window-seat",
    title: "Oat milk, low light, and the best table by the window",
    date: "2026-07-18",
    tag: "cafe log",
    excerpt:
      "A little spot two blocks from the studio — worth it for the ceramic cups alone. The order I'd get again, and where to sit.",
    cafeSlug: "the-corner-table",
    tone: "linear-gradient(160deg, #e8b9b0, #a9645a)",
  },
];
