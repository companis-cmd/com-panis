# Com Panis

A static site built with Eleventy. Netlify builds it from this repository on every change.

## Add a piece

1. In GitHub, open the `src/writing` folder.
2. Choose **Add file → Create new file**.
3. Name it with lowercase words and dashes, ending in `.md`, e.g. `my-new-essay.md`.
4. Paste this at the top, edit it, then write the piece below it:

```
---
title: "Your Title"
date: 2026-12-01
order: 1
kind: Essay
form: prose
---

Your first paragraph.

Your second paragraph.
```

- `kind` is the group on the Writing page. Use `Poetry`, `Synthia`, or a new one (then add it to the list in `src/writing/index.njk`).
- `form: poem` keeps every line break and puts a gap between stanzas. `form: prose` is normal paragraphs.
- The newest `date` shows first.

5. Choose **Commit changes**. Netlify rebuilds in about a minute.

## Images

Put a file in `src/images/`, then in the piece's header add `image: /images/name.jpg`, `imageAlt: "what it shows"`, and `imageCredit: "Image by ..."`.

## Settings

`src/_data/site.js` holds the site name, tagline and the link to the novel. Netlify supplies the site address automatically.

## Run locally

`npm install`, then `npm start`.
