# AGENTS.md - Context & Directives for AI Contributors

## 1. Project Overview

**Project:** Synthonyx Hugo Theme (v2.0)  
**Mission:** "Revolutionizing Boring" - Enterprise-grade, sovereign European tech aesthetic  
**Brand Source of Truth:** `./Synthonyx_Brand_Brief.md`
**Strategy Source of Truth:** `./Synthonyx_Strategic_Context.md`

This Hugo theme powers: `synthonyx.group` (Holding) and `synthonyx.com` (Operating).

---

## 2. Technical Stack

| Component | Technology |
|-----------|------------|
| SSG | Hugo Extended (v0.146.0+) |
| Styling | Tailwind CSS v4 (CSS-first via `@theme`) |
| Post-processing | PostCSS + Autoprefixer |
| JavaScript | Vanilla ES6+ (no frameworks) |
| Icons | Lucide Icons |
| Config | TOML only (`hugo.toml`) |

**Forbidden:** Bootstrap, SCSS, jQuery, React, Vue, Gulp/Webpack outside Hugo Pipes, gradients in brand materials.

---

## 3. Commands

```bash
hugo server --source exampleSite --themesDir ../..  # Theme development (primary)
npm run build:css                        # Build minified CSS
npm run watch:css                        # Watch CSS changes
npm run build                            # Hugo build with minify
```

**No automated tests.** Verify via `hugo server` and visual inspection.

---

## 4. File Structure

```
synthonyx-theme/
├── assets/css/tailwind.css    # Main stylesheet with @theme config
├── assets/js/main.js          # Theme toggle, mobile menu
├── layouts/baseof.html        # Base template
├── layouts/home.html          # Homepage template
├── layouts/page.html          # Single page template
├── layouts/_partials/         # Reusable partials (hero, header, footer, cta)
├── layouts/shortcodes/        # Custom shortcodes
├── static/img/                # Brand assets (logos, etc.)
├── static/css/main.css        # Compiled Tailwind output
├── archetypes/default.md      # Content template
├── hugo.toml                  # Theme config
├── go.mod                     # Module definition
├── package.json               # npm scripts only
└── exampleSite/               # Example site for theme development
    ├── hugo.toml              # Site config (menus, baseURL, etc.)
    └── content/               # Example content
```

---

## 5. Coding Standards

### Hugo Templates
- Use `{{ define "main" }}{{ end }}` for blocks
- Use `{{ partial "name.html" . }}` for partials
- Use `{{ with .Site.Params.section }}` for conditional params
- Use `site.` not `.Site.` (modern Hugo)

### Tailwind CSS (v4)
```css
@theme {
  --color-primary: #7F00FF;
  --color-dark-bg: #230036;
  --font-sans: 'Inter', system-ui, sans-serif;
}
```
- Mobile-first: base classes for mobile, `md:` prefix for desktop
- Dark mode: `dark:` prefix (class-based: `<html class="dark">`)

### JavaScript
- Use `const`/`let`, never `var`
- Use optional chaining `?.` for null-safety
- Arrow functions for callbacks
- Initialize on `DOMContentLoaded`

### HTML
- Self-close void elements: `<br />`, `<img />`, `<input />`
- Semantic elements: `<nav>`, `<main>`, `<section>`
- `aria-label` on icon-only buttons; `sr-only` for screen readers

---

## 6. Brand Guidelines

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#7F00FF` | Brand, CTAs |
| Dark BG | `#230036` | Dark mode background |
| Dark Card | `#2C004A` | Card backgrounds |
| Deep Purple | `#4A148C` | New brand identity |
| Deep Teal | `#006064` | Trust |
| Amber | `#FF6F00` | Action/CTA |

**Deprecated:** Pink `#FF00CC`, Magenta `#E700FF`

### Typography
- Headings: Montserrat (Bold, uppercase for hero)
- Body: IBM Plex Sans or Inter
- Code: JetBrains Mono

### Layout
- Grid/schematic feel; fine 1px lines for dividers
- No organic blobs; generous whitespace (Swiss design)

---

## 7. Accessibility

- WCAG 2.1 AA compliance
- Test contrast on dark purple backgrounds
- Keyboard-accessible interactive elements
- `alt` text on all images

---

## 8. Component Patterns

### Partial with Params
```html
{{ with .Site.Params.hero }}
<section class="...">
  <h1>{{ .header }}</h1>
  <p>{{ .description }}</p>
</section>
{{ end }}
```

### CTA Button
```html
<a href="{{ .buttonURL }}"
   class="px-8 py-4 rounded-full font-bold uppercase tracking-wider 
          bg-gradient-to-r from-primary to-pink text-white 
          hover:-translate-y-1 transition-all duration-300">
  {{ .buttonText }}
</a>
```

### Shortcode
```html
{{ with .Site.Params.formspree }}
<form action="https://formspree.io/f/{{ . }}" method="POST">
  <!-- fields -->
</form>
{{ end }}
```

---

## 9. Common Tasks

**Add section:** Create `layouts/_partials/sectionname.html`, add partial call to `layouts/home.html`, add params in site config under `[params.sectionname]`

**Add shortcode:** Create `layouts/shortcodes/name.html`, access params via `.Get "paramName"` or `.Get 0`, inner content via `.Inner`

**Modify colors:** Edit `assets/css/tailwind.css` `@theme` block, run `npm run build:css`

---

## 10. Configurable Parameters

All parameters are configured in the site's `hugo.toml`. Theme defaults are in `hugo.toml` (root).

### Brand Configuration
```toml
[params]
  logo = "/img/synthonyx-logo-white.png"  # Path to logo file
  logoAlt = "Synthonyx"                    # Alt text for logo
  logoText = ""                            # Optional text next to logo (e.g., "Group", "Labs")
```

### Footer Configuration
```toml
[params]
  slogan = "Sovereign European technology..."  # Tagline in footer
  copyright = "Synthonyx Technologies Ltd"     # Copyright holder
```

### Contact Information
```toml
[params]
  contactEmail = "hello@synthonyx.com"
  address = "European Union"
```

### Hero Section
```toml
[params.hero]
  label = "Infrastructure Platform"
  header = "Sovereign"
  subHeader = "Technology"
  description = "Enterprise-grade infrastructure..."
  leftButtonText = "Deploy Now"
  leftButtonURL = "/contact"
  rightButtonText = "View Architecture"
  rightButtonURL = "/architecture"
```

### Features Section
```toml
[params.Features]
  title = "Platform Capabilities"
  description = "Built for enterprises..."
  
  [[params.Features.items]]
    icon = "shield-check"
    title = "Sovereign Security"
    description = "GDPR-compliant..."
    linkText = "Learn More"
    linkURL = "/security"
```

### CTA Section
```toml
[params.CTA]
  title = "Ready to Build?"
  description = "Deploy sovereign infrastructure..."
  linkText = "Start Deployment"
  linkURL = "/contact"
```

---

## 11. Error Handling

- Use `{{ with }}` for missing params
- Use `{{ if }}` for conditionals
- Form inputs: `required` attribute
- Image fallback: `onerror="this.style.display='none'"`
