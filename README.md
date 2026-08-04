# jimena soto

A personal site &mdash; About Me, a general Blog (life, school, travel, and
everything else), and a Cafe Map as a fun side feature. Plain HTML/CSS/JS,
no build tools, no framework required.

## Project structure

```
jimena-grounds/
├── index.html          the homepage (bold, collage-style)
├── about.html           about you
├── blog.html             every post, with category filters (calmer style)
├── map.html               interactive cafe map (Leaflet.js) — the side project
├── blog/
│   ├── _template.html     duplicate this to write a new post
│   ├── two-summers-in-seattle.html   example post (tag: life)
│   └── rainy-tuesday-window-seat.html   example post (tag: cafe log)
├── css/
│   ├── tokens.css        the palette + type variables — change once, updates everywhere
│   ├── fonts.css          self-hosted font declarations
│   ├── base.css            shared nav, footer, resets
│   ├── home.css             homepage-only styles
│   └── inner.css             about/blog/map shared styles
├── js/
│   ├── cafes.js            the list that feeds the map + links from posts
│   ├── posts.js            blog post metadata (title, date, tag, excerpt)
│   ├── home.js               renders the homepage stat pills + recent posts
│   ├── blog.js                renders blog.html + the category filter row
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

## How to add a new blog post

1. Duplicate `blog/_template.html`, rename it to something like
   `blog/my-new-post.html`.
2. Fill in the tag, title, date, photo, and body text (the file has inline
   instructions as a comment at the top). Tag should be one of `life`,
   `school`, `travel`, `cafe log` &mdash; or add a new category by editing the
   `CATEGORIES` list at the top of `js/blog.js`.
3. Add a matching object to `js/posts.js` with the same `slug` (the
   filename, minus `.html`).
4. Only if it's a cafe post: add the spot to `js/cafes.js` too, with real
   latitude/longitude &mdash; right-click the spot on Google Maps and the
   coordinates are the first entry in the menu that appears. Then set the
   post's "see the map" link to `map.html?spot=THAT-CAFE-SLUG`.

The homepage stat pills, the blog list + filters, and the map pins all
update automatically from `js/posts.js` and `js/cafes.js` &mdash; you never
have to touch the page layout again.

## Adding real photos

See `images/README.txt`. Short version: drop images in `/images`, then
swap a placeholder gradient `<div class="cover">` for an `<img>` tag with
`object-fit: cover`.

## Putting it online (free) with GitHub Pages

Once you're happy with it:

```bash
cd /Users/jimenasoto/Desktop/jimena-grounds
git add -A
git commit -m "rebrand as a general personal site"
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
