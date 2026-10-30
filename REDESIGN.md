# Editing the website

The homepage is built by Jekyll using HTML/Liquid includes and Markdown. No Python script, custom generator, or pre-generated homepage is required.

## Content files

- `_pages/about.md`: short list of section includes; change the order here.
- `_includes/sections/about.md`: biography.
- `_includes/sections/highlights.md`: highlights; add an article and write its contents in Markdown.
- `_includes/sections/experience.md`: experience and award entries.
- `_includes/sections/publications.md`: renders `_publications/*.md` automatically.
- `_includes/sections/patents.md`: renders collection entries with `category: patent`.
- `_includes/sections/talks.md`: renders `_talks/*.md` automatically.
- `_includes/sections/teaching.md`: teaching entries (also used by the legacy teaching page).
- `_includes/sections/blog.md`: renders `_posts/*.md` automatically.

Markdown inside HTML containers uses `markdown="1"`. The shared section include captures each file and applies Jekyll's `markdownify` filter. Include files deliberately have no YAML front matter.

## Layout and styling

- `_layouts/portfolio.html`: page shell.
- `_includes/portfolio/header.html`: navigation and theme controls.
- `_includes/portfolio/profile.html`: profile card and social links.
- `_includes/portfolio/section.html`: reusable section frame and scroll container.
- `_includes/portfolio/publication-card.html`: shared paper/patent card.
- `assets/css/portfolio.css`: styling, colors, and scroll height limits.
- `assets/js/portfolio.js`: search, section tracking, and saved theme preferences.

## Add a publication

Add a Markdown file to `_publications/` with the same front matter as existing entries. Put the abstract in its body and the citation in `citation`. Optional `resources` entries contain `label` and `url` for poster/code buttons. Set `category: patent` for a patent. Both sections sort by date, newest first. Commit and push; Jekyll rebuilds the homepage automatically.

## Run and deploy

Use your existing GitHub Pages workflow. For local Jekyll preview:

```sh
bundle install
bundle exec jekyll serve
```

When applying this ZIP over the previous version, delete the obsolete `tools/build_portfolio.py` and `_data/portfolio-about.md` files. They are no longer used. Keep your existing `.git` directory.

The supplied archive did not contain `files/OpticalFlow_RL.pdf`; that entry links to its detail page until you restore the PDF and its `paperurl` field. The CV remains in the sidebar. External research statuses and URLs have not been independently refreshed.

Validation: YAML metadata and include targets checked. A full Jekyll build could not be run in the editing environment because Ruby was unavailable. The hosted preview retains the previously verified visual build; the ZIP contains the refactored Jekyll source.
