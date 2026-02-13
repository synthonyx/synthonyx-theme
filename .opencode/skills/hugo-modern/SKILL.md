---
name: hugo-modern
description: Expert knowledge on Hugo static site generator (latest version), Go templating, and Asset pipelines.
license: MIT
compatibility: opencode
metadata:
  framework: hugo
  css: tailwind
---

## What I do
I provide expert guidance on building static sites with Hugo. I strictly adhere to "Modern Hugo" practices:
1.  **Architecture:** I use `baseof.html` and block templates, avoiding legacy partial-heavy structures.
2.  **Assets:** I use Hugo Pipes (`resources.Get`, `js.Build`, PostCSS) for asset management. I do NOT use external Gulp/Webpack pipelines.
3.  **Content:** I use Leaf Bundles (`index.md`) for better asset organization.
4.  **Configuration:** I use `hugo.toml` (not YAML/JSON) for configuration.

## When to use me
- When creating new layouts, archetypes, or shortcodes.
- When debugging Hugo build errors or Go template syntax.
- When configuring `config.toml` for multi-language or module setups.

## Technical Constraints
- **Tailwind:** We use the Tailwind CSS CLI wrapped in Hugo Pipes.
- **Images:** Always use Hugo image processing (`Resize`, `Fit`) for performance.
- **Structure:**
  - `layouts/_default/baseof.html` is the source of truth.
  - `layouts/partials/head.html` manages SEO and metadata.