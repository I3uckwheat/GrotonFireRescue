# Groton Fire & Rescue

Static website for Groton Fire and Rescue (Groton, SD), built with [Pug](https://pugjs.org) templates and deployed on Netlify. The old Express/MongoDB app and its admin panel are gone — all content now lives in this repository and is edited by changing files and pushing.

## Editing content

All text lives under `data/`:

| What | Where |
|---|---|
| Home page sections | `data/home.json` (section list) + `data/home/*.txt` (the text) |
| About pages (`/about/...`) | `data/about.json` (page list) + `data/about/*.md` (the text, in Markdown) |
| Trainings & meetings (`/training`) | `data/training.json` |

The `.txt` files are plain text; line breaks and blank lines show up on the site exactly as written. Each JSON file has a `_comment` field explaining its fields.

### Images

Home page section images live at `public/images/home/<pageID>.jpg`, where `<pageID>` matches the section's `pageID` in `data/home.json`.

### Photo gallery and gun drawing

The "Photo Gallery" and "Gun Drawing" links in the site navigation point directly to the [Groton Fire and Rescue Facebook page](https://www.facebook.com/GrotonFireAndRescue) (its photos page for the gallery). Old `/gallery` and `/gun-drawing` URLs (bookmarks, search results) also redirect there, configured in `netlify.toml`.

## Building locally

```sh
npm install
npm run build      # renders the site into dist/
npm run preview    # builds, then serves dist/ at a local URL
```

## Deploying

The site auto-deploys on Netlify: pushing to `master` triggers a build (`npm run build`, publishing `dist/`, configured in `netlify.toml`). To set it up the first time: create a site on [Netlify](https://app.netlify.com), choose "Import an existing project", and point it at this GitHub repository — the build settings are picked up from `netlify.toml` automatically.
