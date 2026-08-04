// Renders the Leaflet map + sidebar list from js/cafes.js.
// Supports map.html?spot=SLUG to open straight to one pin (used by
// the "see this spot on the map" links in blog entries).

(function () {
  const listEl = document.getElementById("spot-list");
  const mapEl = document.getElementById("map");
  if (!listEl || !mapEl || typeof L === "undefined") return;

  const map = L.map("map", { scrollWheelZoom: false });
  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
    subdomains: "abcd",
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
  const bounds = [];

  cafes.forEach((cafe) => {
    bounds.push([cafe.lat, cafe.lng]);

    const popupHtml = `
      <div class="map-popup">
        <p class="name">${cafe.name}</p>
        <p class="note">${cafe.note}</p>
        ${cafe.postSlug ? `<a href="blog/${cafe.postSlug}.html">read the entry &rarr;</a>` : ""}
      </div>
    `;

    const marker = L.marker([cafe.lat, cafe.lng], { icon: pinIcon })
      .addTo(map)
      .bindPopup(popupHtml);

    markers[cafe.slug] = marker;
  });

  if (bounds.length) {
    map.fitBounds(bounds, { padding: [30, 30], maxZoom: 13 });
  } else {
    map.setView([41.8781, -87.6298], 11); // fallback: Chicago
  }

  function focusSpot(slug) {
    const marker = markers[slug];
    if (!marker) return;
    map.setView(marker.getLatLng(), 14, { animate: true });
    marker.openPopup();
    document.querySelectorAll(".spot-card").forEach((el) => {
      el.classList.toggle("active", el.dataset.slug === slug);
    });
  }

  listEl.innerHTML = cafes
    .map(
      (cafe) => `
      <div class="spot-card" data-slug="${cafe.slug}" tabindex="0" role="button">
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

  const requestedSpot = new URLSearchParams(window.location.search).get("spot");
  if (requestedSpot && markers[requestedSpot]) {
    focusSpot(requestedSpot);
  }
})();
