// Renders the Leaflet map + sidebar list from js/cafes.js.
// A row of city buttons above the map jumps between cities.
// Supports map.html?spot=SLUG to open straight to one pin (used by
// the "see this spot on the map" links in blog entries).

(function () {
  const listEl = document.getElementById("spot-list");
  const mapEl = document.getElementById("map");
  const cityRow = document.getElementById("city-row");
  if (!listEl || !mapEl || typeof L === "undefined") return;

  const map = L.map("map", { scrollWheelZoom: false });
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  const pinIcon = L.divIcon({
    className: "",
    html:
      '<div style="width:14px;height:14px;border-radius:50%;background:#a9645a;border:2.5px solid #fbf1e2;box-shadow:0 2px 6px rgba(58,42,32,0.35);"></div>',
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -10],
  });

  const markers = {};

  cafes.forEach((cafe) => {
    const popupHtml = `
      <div class="map-popup">
        <p class="name">${cafe.name}</p>
        <p class="note">${cafe.note}</p>
        ${(cafe.posts || [])
          .map((p) => `<a href="blog/${p.slug}.html">${p.label}</a>`)
          .join("<br>")}
      </div>
    `;

    markers[cafe.slug] = L.marker([cafe.lat, cafe.lng], { icon: pinIcon })
      .addTo(map)
      .bindPopup(popupHtml);
  });

  // ---------- cities ----------
  // Most-visited city first, so it's the default view.
  const counts = {};
  cafes.forEach((c) => (counts[c.city] = (counts[c.city] || 0) + 1));
  const cities = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
  const cityLabel = (city) => city.split(",")[0];
  let currentCity = null;

  function showCity(city, fit) {
    currentCity = city;
    if (cityRow) {
      cityRow.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.toggle("active", b.dataset.city === city);
      });
    }
    listEl.querySelectorAll(".spot-card").forEach((el) => {
      el.hidden = el.dataset.city !== city;
      el.classList.remove("active");
    });
    if (fit === false) return;
    const pts = cafes.filter((c) => c.city === city).map((c) => [c.lat, c.lng]);
    if (pts.length === 1) {
      map.setView(pts[0], 14);
    } else {
      map.fitBounds(pts, { padding: [40, 40], maxZoom: 14 });
    }
  }

  function focusSpot(slug) {
    const marker = markers[slug];
    const cafe = cafes.find((c) => c.slug === slug);
    if (!marker || !cafe) return;
    if (cafe.city !== currentCity) showCity(cafe.city, false);
    map.setView(marker.getLatLng(), 15, { animate: true });
    marker.openPopup();
    listEl.querySelectorAll(".spot-card").forEach((el) => {
      el.classList.toggle("active", el.dataset.slug === slug);
    });
  }

  listEl.innerHTML = cafes
    .map(
      (cafe) => `
      <div class="spot-card" data-slug="${cafe.slug}" data-city="${cafe.city}" tabindex="0" role="button">
        <div class="name">${cafe.name}</div>
        <div class="city">${cafe.city}</div>
        <p class="note">${cafe.note}</p>
        <div class="order">order: ${cafe.order}</div>
      </div>
    `
    )
    .join("");

  listEl.querySelectorAll(".spot-card").forEach((card) => {
    card.addEventListener("click", () => focusSpot(card.dataset.slug));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        focusSpot(card.dataset.slug);
      }
    });
  });

  if (cityRow) {
    cityRow.innerHTML = cities
      .map((city) => `<button class="filter-btn" data-city="${city}">${cityLabel(city)}</button>`)
      .join("");
    cityRow.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (btn) showCity(btn.dataset.city, true);
    });
  }

  const requestedSpot = new URLSearchParams(window.location.search).get("spot");
  const requested = cafes.find((c) => c.slug === requestedSpot);
  showCity(requested ? requested.city : cities[0], !requested);
  if (requested) focusSpot(requested.slug);
})();
