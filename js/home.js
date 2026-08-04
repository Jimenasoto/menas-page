// Populates the homepage "recent posts" from js/posts.js, so it
// stays accurate as you add entries.

(function () {
  const snapRow = document.getElementById("snap-row");
  if (snapRow) {
    const recent = [...posts]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 4);

    if (recent.length === 0) {
      snapRow.innerHTML =
        '<p class="empty">Nothing here yet &mdash; write the first entry in /blog.</p>';
      return;
    }

    snapRow.innerHTML = recent
      .map((post) => {
        const bg = post.image
          ? `background-image:url('${post.image}'); background-size:cover; background-position:center;`
          : `background:${post.tone};`;
        return `
        <a class="snap" href="blog/${post.slug}.html">
          <div class="ph" style="${bg}"></div>
          <div class="cap">${post.title.length > 28 ? post.title.slice(0, 28) + "…" : post.title}</div>
        </a>
      `;
      })
      .join("");
  }
})();
