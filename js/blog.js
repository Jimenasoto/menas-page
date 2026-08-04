// Renders every entry from js/posts.js onto blog.html, with a
// category filter row built from CATEGORIES below.
//
// To add a new category (e.g. "photography"), just add it to this
// list and start tagging posts with it in js/posts.js — the filter
// button shows up automatically.

const CATEGORIES = ["life", "school", "travel", "cafe log"];

(function () {
  const grid = document.getElementById("blog-grid");
  const filterRow = document.getElementById("filter-row");
  if (!grid) return;

  const dateFmt = (iso) =>
    new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  function renderGrid(activeTag) {
    const sorted = [...posts]
      .filter((p) => activeTag === "all" || p.tag === activeTag)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    if (sorted.length === 0) {
      grid.innerHTML =
        '<p style="opacity:.75;">Nothing here yet &mdash; write your first entry in /blog.</p>';
      return;
    }

    grid.innerHTML = sorted
      .map(
        (post) => `
        <a class="card journal-card torn-top" href="blog/${post.slug}.html">
          <span class="tag">${post.tag}</span>
          <h2>${post.title}</h2>
          <div class="meta">${dateFmt(post.date)}</div>
          <p>${post.excerpt}</p>
          <span class="read">read the entry &rarr;</span>
        </a>
      `
      )
      .join("");
  }

  if (filterRow) {
    const tags = ["all", ...CATEGORIES];
    filterRow.innerHTML = tags
      .map(
        (tag, i) =>
          `<button class="filter-btn${i === 0 ? " active" : ""}" data-tag="${tag}">${tag}</button>`
      )
      .join("");

    filterRow.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filterRow.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderGrid(btn.dataset.tag);
    });
  }

  renderGrid("all");
})();
