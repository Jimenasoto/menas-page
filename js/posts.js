/*
  Journal post metadata — powers the homepage "recent snapshots" and
  the full blog.html list. The actual long-form writing for each
  post lives in its own file under /blog/.

  To add a new post: duplicate blog/_template.html, write your
  entry, save it as blog/your-slug.html, then add an object here
  with a matching "slug".
*/

const posts = [
  {
    slug: "two-summers-in-seattle",
    title: "Two summers, one city, a lot of code",
    date: "2026-08-01",
    tag: "life",
    excerpt:
      "What it's actually been like interning in Seattle twice as a computer engineering student — and how the travel bug started here.",
    cafeSlug: null,
    tone: "linear-gradient(160deg, #cf8f88, #6b4433)",
  },
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
