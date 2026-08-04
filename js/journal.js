// Renders every entry from js/posts.js onto journal.html.

(function () {
  const grid = document.getElementById("journal-grid");
  if (!grid) return;

  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  if (sorted.length === 0) {
    grid.innerHTML = '<p style="opacity:.75;">Nothing here yet &mdash; write your first entry in /journal.</p>';
    return;
  }

  const dateFmt = (iso) =>
    new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  grid.innerHTML = sorted
    .map(
      (post) => `
      <a class="card journal-card torn-top" href="journal/${post.slug}.html">
        <span class="tag">${post.tag}</span>
        <h2>${post.title}</h2>
        <div class="meta">${dateFmt(post.date)}</div>
        <p>${post.excerpt}</p>
        <span class="read">read the entry &rarr;</span>
      </a>
    `
    )
    .join("");
})();
