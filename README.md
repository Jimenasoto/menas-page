# jimena grounds

A personal cafe journal &mdash; About Me, a blog-style Journal, and an interactive
Cafe Map, all in one warm pink-and-mocha, scrapbook-modern site. Plain
HTML/CSS/JS, no build tools, no framework required.

## Project structure

```
jimena-grounds/
├── index.html          the homepage (bold, collage-style)
├── about.html           about you
├── journal.html         list of all journal entries (calmer style)
├── map.html              interactive cafe map (Leaflet.js)
├── journal/
│   ├── _template.html    duplicate this to write a new entry
│   └── rainy-tuesday-window-seat.html   an example entry
├── css/
│   ├── tokens.css        the palette + type variables — change once, updates everywhere
│   ├── fonts.css          self-hosted font declarations
│   ├── base.css            shared nav, footer, resets
│   ├── home.css             homepage-only styles
│   └── inner.css             about/journal/map shared styles
├── js/
│   ├── cafes.js            the list that feeds the map + links from posts
│   ├── posts.js            journal entry metadata (title, date, excerpt)
│   ├── home.js               renders the homepage stat pills + recent posts
│   ├── journal.js             renders the journal.html list
│   └── map.js                 builds the Leaflet map + sidebar
├── fonts/                 Fraunces, Work Sans, Caveat (self-hosted .woff2)
└── images/                 put your real photos here
```

## Running it locally in VS Code

1. Open the `jimena-grounds` folder in VS Code (File &rarr; Open Folder&hellip;).
2. Install the **Live Server** extension (search it in the Extensions panel,
   the puzzle-piece icon on the left sidebar).
3. Right-click `index.html` in the file tree &rarr; **"Open with Live Server."**
   Your browser opens the real site at `http://127.0.0.1:5500`, and it
   auto-refreshes every time you save a file.

You can also just double-click `index.html` in Finder to preview it without
a server &mdash; everything works over `file://` too, including the map.

## How to add a new journal entry

1. Duplicate `journal/_template.html`, rename it to something like
   `journal/my-new-spot.html`.
2. Fill in the title, date, photo, and body text (the file has inline
   instructions as a comment at the top).
3. Add a matching object to `js/posts.js` with the same `slug` (the
   filename, minus `.html`).
4. If it's a new place, add it to `js/cafes.js` too, with real
   latitude/longitude &mdash; right-click the spot on Google Maps and the
   coordinates are the first entry in the menu that appears.

The homepage stat pills, the journal list, and the map pins all update
automatically from those two data files &mdash; you never have to touch the
page layout again.

## Adding real photos

See `images/README.txt`. Short version: drop images in `/images`, then
swap a placeholder gradient `<div class="cover">` for an `<img>` tag with
`object-fit: cover`.

## Putting it online (free) with GitHub Pages

Once you're happy with it:

```bash
cd /Users/jimenasoto/Desktop/jimena-grounds
git add -A
git commit -m "cafe journal site"
```

Then, on github.com: create a new repository (no README/gitignore needed
since you already have files), and push:

```bash
git remote add origin https://github.com/YOUR-USERNAME/jimena-grounds.git
git branch -M main
git push -u origin main
```

Finally, in the repo on GitHub: **Settings &rarr; Pages &rarr; Source: "Deploy
from a branch" &rarr; Branch: main / (root)**. Your site goes live at
`https://YOUR-USERNAME.github.io/jimena-grounds/` within a minute or two.

I've only set up git locally for now &mdash; the GitHub repo creation and push
are steps to do together whenever you're ready to publish.
