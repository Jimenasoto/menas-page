// Populates the homepage stat pills and "recent snapshots" from
// js/cafes.js and js/posts.js, so both stay accurate as you add entries.

(function () {
  const pills = document.querySelectorAll("#stat-pills .stat-pill .n");
  if (pills.length === 3) {
    const cities = new Set(cafes.map((c) => c.city));
    pills[0].textContent = cafes.length;
    pills[1].textContent = posts.length;
    pills[2].textContent = cities.size;
  }

  const snapRow = document.getElementById("snap-row");
  if (snapRow) {
    const recent = [...posts]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 4);

    if (recent.length === 0) {
      snapRow.innerHTML =
        '<p class="empty">no entries yet &mdash; write your first one in /journal &hearts;</p>';
      return;
    }

    snapRow.innerHTML = recent
      .map(
        (post) => `
        <a class="snap" href="journal/${post.slug}.html">
          <div class="ph" style="background:${post.tone}">
            <div class="halftone"></div>
          </div>
          <div class="cap">${post.title.length > 28 ? post.title.slice(0, 28) + "…" : post.title}</div>
        </a>
      `
      )
      .join("");
  }
})();
