# How to update your campaign page

This is your reference doc for adding new content later. Keep this open in a
tab whenever you're updating the page — you shouldn't need to touch any code
yourself, just files and this checklist.

## What's in the `campaign-page` folder

```
campaign-page/
├── campaign-rows.html      ← the component itself (don't edit this)
├── campaigns.json          ← the list of campaigns shown on the page (edit this)
└── newsletters/
    ├── essentials.html
    ├── stella-suit.html
    ├── matching-sets.html
    ├── vestidos.html
    └── auqamare-stromboli.html
```

Each campaign on the page (story phone + newsletter phone + case study text)
comes from one entry in `campaigns.json`. The page reads that file and builds
everything automatically — you never need to open `campaign-rows.html`.

---

## Adding a brand new campaign

1. **Save the newsletter.** Export/copy that newsletter's HTML into a new
   file inside `newsletters/`, e.g. `newsletters/summer-drop.html`.
2. **Add the story photos.** Make a folder like `stories/summer-drop/` and
   number your photos in order: `1.jpg`, `2.jpg`, `3.jpg`, etc.
3. **Open `campaigns.json`** and copy one existing campaign block, then edit
   it:

```json
{
  "id": "summer-drop",
  "title": "Summer Drop",
  "newsletter": "newsletters/summer-drop.html",
  "stories": [
    "stories/summer-drop/1.jpg",
    "stories/summer-drop/2.jpg",
    "stories/summer-drop/3.jpg"
  ],
  "caseStudy": [
    { "label": "Hero Banner", "text": "..." },
    { "label": "Featured Collection", "text": "..." },
    { "label": "Editorial Section", "text": "..." },
    { "label": "CTA", "text": "..." }
  ]
}
```

4. **Save the file.** Reload your website — the new campaign row appears
   automatically, at the bottom of the page.

You never need to ask Claude Code to "add a new row" — the page already knows
how to build one for every entry in this file. If something doesn't look
right, just show it the file and describe what's wrong.

---

## Swapping placeholder story photos for real ones

Every campaign currently uses gray placeholder images for its story phone.
To replace them for a specific campaign:

1. Make a folder: `stories/<campaign-id>/` (e.g. `stories/essentials/`).
2. Number your photos in order: `1.jpg`, `2.jpg`, `3.jpg`...
3. In `campaigns.json`, find that campaign's `"stories"` array and replace
   the placeholder links with your real paths, e.g.:

```json
"stories": [
  "stories/essentials/1.jpg",
  "stories/essentials/2.jpg",
  "stories/essentials/3.jpg"
]
```

---

## Editing case study text

Each campaign's `caseStudy` array has four steps: Hero Banner, Featured
Collection, Editorial Section, CTA. Just edit the `"text"` value for any
step directly in `campaigns.json` — no code involved.

---

## Common tweaks (just ask Claude Code in plain English)

You don't need to know how to do these yourself — just describe what you
want and Claude Code will make the change:

- "Show 3 campaigns per row instead of stacking them."
- "Make the phone frames bigger/smaller."
- "Change the stacking breakpoint so it goes to mobile layout earlier/later."
- "Add a divider line between each campaign row."
- "Change the story slide duration from 5 seconds to 4 seconds."

---

## If something breaks

- **A phone shows blank:** check that the file path in `campaigns.json`
  exactly matches the real file name (capitalization and spelling matter).
- **New campaign doesn't show up:** check `campaigns.json` for a missing
  comma between entries — this is the most common typo. Ask Claude Code to
  "check campaigns.json for JSON syntax errors" if you're stuck.
- **Story photos don't show:** double check the folder name and file
  numbering match exactly what's written in the `"stories"` array.
