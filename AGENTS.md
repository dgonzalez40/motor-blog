# Moto + Tech Blog working instructions

This is Daniel Gonzalez's personal motorcycle travel and home technology project blog, hosted on Hostinger. Use plain HTML, CSS, JavaScript, and Bootstrap consistently with the existing site. Content lives in `js/content.js`; `js/app.js` renders cards and the shared post modal. Keep both post types visually and behaviorally consistent.

## Publishing workflow

Turn the owner's notes into a clear, engaging first-person narrative where appropriate. Preserve the personal moto-travel / home technology tone. When asked to add a post, integrate it into the appropriate array and check referenced assets. Do not publish or deploy unless requested.

Preserve the exact field names, nesting, and types in the schemas below. Do not add fields or change the format without first explaining the proposed change and getting the owner's decision. Existing content may contain a legacy `coverAlt` field; do not add that field to new entries without approval. Use the existing media alt text where helpful in rendering.

When asked for a paste-ready entry, return strict valid JSON (quoted property names, no comments or extra fields). The repository itself uses JavaScript objects in arrays, so integrate entries using valid JavaScript syntax.

Fill all fields from the notes. Make reasonable realistic assumptions when necessary, but avoid inventing concrete personal experiences, measurements, equipment, dates, or project outcomes as established facts; clearly identify material uncertainties to the owner outside the JSON.

Generate a unique lowercase hyphenated slug ID, checking existing IDs for collisions. Dates use YYYY-MM-DD. Generate 3–7 short, lowercase, hyphenated tags from the notes. For trips consider terrain, weather, bike model, region/state, ride characteristics, and themes; for projects consider technologies, purpose, and themes. Only use supported tags. Tags currently display as labels; filtering is not implemented.

Cover filenames use a short readable lowercase title slug, spaces replaced with hyphens and punctuation removed:
- Trip: `assets/trips/<slugified-trip-title>-cover.jpg`
- Project: `assets/projects/<slugified-project-title>-cover.jpg`

A filename does not create an image. Request or use actual supplied assets and do not imply missing media exists. Covers should preferably be 1600×900 (minimum 1200×675), matching the current 16:9 design.

### Trip schema

```json
{
  "id": "unique-trip-id",
  "type": "trip",
  "featured": false,
  "title": "",
  "date": "",
  "location": "",
  "summary": "",
  "cover": "",
  "tags": [],
  "details": {
    "bike": "",
    "distance": "",
    "duration": ""
  },
  "media": [
    { "type": "image", "src": "", "alt": "" }
  ],
  "sections": [
    { "heading": "Route Overview", "text": "" },
    { "heading": "Ride Notes", "text": "" },
    { "heading": "What I Learned", "text": "" }
  ]
}
```

### Project schema

```json
{
  "id": "unique-project-id",
  "type": "project",
  "featured": false,
  "title": "",
  "date": "",
  "location": "At Home",
  "summary": "",
  "cover": "",
  "tags": [],
  "details": {
    "stack": "",
    "difficulty": "",
    "status": ""
  },
  "media": [
    { "type": "image", "src": "", "alt": "" }
  ],
  "sections": [
    { "heading": "Project Goal", "text": "" },
    { "heading": "Approach", "text": "" },
    { "heading": "Lessons Learned", "text": "" }
  ]
}
```

## Accessibility requirements

Treat accessibility as a requirement for both post types and every site change. Aim for WCAG 2.2 AA and verify relevant behavior rather than claiming full compliance from code review alone.

Use semantic landmarks, logical headings, descriptive links and image alternatives, keyboard-operable navigation and dialogs, visible focus, focus restoration after closing dialogs, sufficient text and control contrast, responsive reflow and zoom support, reduced-motion preferences, and captions/transcripts for meaningful audiovisual content. Avoid communicating meaning through color alone. Keep paragraphs readable and explain technical terms when helpful. Check keyboard and screen-reader behavior where feasible and report any unverified behavior.

Keep deployment compatible with Hostinger static hosting. Propose changes to content schemas or the overall publishing format before implementing them.
