# Bryan Jonathan — Data Scientist Portfolio

Personalized from the uploaded static portfolio design. This site is pure HTML, CSS, JavaScript and SVG, and does not require Node or an installation step.

## Open it

Double-click `index.html` to preview in your browser. Alternatively, run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Publish to GitHub Pages

1. Create a new GitHub repository, or back up your existing `BryanJth.github.io` repository before replacing it.
2. Upload **the contents of this folder** (`index.html`, `style.css`, `script.js`, and `assets/`) to the repository root.
3. In the repo, go to **Settings → Pages → Build and deployment → Deploy from a branch**, choose `main` and `/ (root)`, then Save.
4. The website becomes available at the published Pages URL once deployment completes.

If you use `BryanJth.github.io` as the repository name, it can replace your current root portfolio at `https://bryanjth.github.io` — back up anything there first.

## Make it your own

- **Portrait:** The circle deliberately uses an illustrated `BJ` graphic, not someone else's photograph. Replace `assets/img/hero-bryan.svg` and update its source in `index.html` if you want to use a headshot.
- **CV:** `assets/docs/bryan-jonathan-cv.pdf` is a freshly composed *portfolio edition* based on your recent resume details, not a byte-for-byte copy of your original CV. Replace it with your final verified PDF if desired, retaining the name or updating both links in `index.html`.
- **Project links:** Four projects link directly to repositories verified in your GitHub profile: `CNN_KAN`, `PDAM-Tariff-Classification`, `Spatial-S.Lag_RF`, and `Database`. The **Veritas** and **GWR** cards currently point to your GitHub profile because an exact project-specific URL was not verified. Replace those two card URLs if you want direct links.
- **Hugging Face demo:** The thesis description notes the deployed demo, but there is no demo button because its exact URL was not verified.
- **Certifications:** Certificates are described accurately but without image attachments. Add scans and links only if you wish to publish them.
- **Projects / text:** Edit `index.html` directly. All images are local SVG assets, so they render even when offline. The Google font requires internet; otherwise the site falls back to system fonts.

## File structure

```
index.html              Main site
style.css               Reference layout + Bryan custom theme
script.js               Mobile nav, role animation, reveal effects, scroller
assets/img/hero-bryan.svg     Abstract initials illustration
assets/img/projects/*.svg    Original locally-generated project artwork
assets/docs/bryan-jonathan-cv.pdf
assets/logos/          Reused generic skill / UI / contact / certification logos
```

No assets or content specific to the reference portfolio owner's identity were carried over.
