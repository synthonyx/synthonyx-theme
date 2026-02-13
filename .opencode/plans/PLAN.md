# Synthonyx Theme Migration Plan: "Web3 Hype" → "Sovereign Engineering"

**Version:** 1.0  
**Status:** Ready for Execution  
**Estimated Effort:** 4 Phases, ~15-20 tasks

---

## Context Summary

This plan transforms the Synthonyx Hugo theme from a "Web3 Hype" aesthetic (neon gradients, pink/magenta colors) to a "Sovereign Engineering" aesthetic (Deep Purple, solid colors, Swiss precision, Braun design principles).

**Key Documents:**
- `AGENTS.md` - Technical constraints and coding standards
- `Synthonyx_Brand_Brief.md` - Visual identity and messaging
- `Synthonyx_Strategic_Context.md` - Two-domain architecture

---

## Legacy Audit: Kill List

### Files Flagged for Deletion

| File | Reason |
|------|--------|
| `layouts/_partials/hero.html.bak` | Backup file, not needed in repo |

### Patterns Flagged for Replacement

| Pattern | Location | Replacement |
|---------|----------|-------------|
| `#FF00CC` (pink) | `tailwind.css`, all partials | `#4A148C` (Deep Purple) |
| `#E700FF` (magenta) | `tailwind.css`, all partials | `#006064` (Deep Teal) |
| `bg-gradient-to-*` | hero.html, section.html, page.html, features.html, cta.html, offer.html, clients.html, header.html, footer.html | Solid colors with grid/schematic overlays |
| Organic "blob" backgrounds | hero.html, section.html, offer.html, page.html | Grid patterns, schematic lines |
| `text-pink`, `hover:text-magenta` | All partials | `text-deep-purple`, `hover:text-amber` |

### Files Requiring Modification

| File | Changes Needed |
|------|----------------|
| `assets/css/tailwind.css` | Replace pink/magenta with Deep Purple/Teal/Amber; add new brand colors |
| `static/css/main.css` | Rebuild after tailwind.css changes |
| `layouts/_partials/hero.html` | Remove gradients, replace blobs with grid overlay |
| `layouts/_partials/features.html` | Remove gradients, update colors |
| `layouts/_partials/offer.html` | Remove gradients, blobs, update colors |
| `layouts/_partials/cta.html` | Remove gradients, update colors |
| `layouts/_partials/clients.html` | Remove gradients, update colors |
| `layouts/_partials/header.html` | Remove gradients, update colors |
| `layouts/_partials/footer.html` | Remove gradients, update colors |
| `layouts/section.html` | Remove gradients, blobs, update colors |
| `layouts/page.html` | Remove gradients, blobs, update colors |
| `layouts/taxonomy.html` | Minimal - needs full redesign |
| `layouts/term.html` | Minimal - needs full redesign |

### Missing Components

| Component | Action |
|-----------|--------|
| `exampleSite/` directory | Create new |
| `exampleSite/hugo.toml` | Create (for .com variant) |
| `exampleSite/config.group.toml` | Create (for .group variant) |
| `exampleSite/content/` | Create sample content structure |

---

## Sovereign Stack Blueprint

### Directory Structure

```
synthonyx-theme/
├── assets/
│   └── css/
│       └── tailwind.css          # @theme with new brand colors
├── exampleSite/                  # NEW: Demonstrates theme
│   ├── hugo.toml                 # .com config (default)
│   ├── config.group.toml         # .group config (alternate)
│   ├── content/
│   │   ├── _index.md             # Homepage
│   │   ├── products/
│   │   │   ├── _index.md
│   │   │   ├── sovereign/
│   │   │   │   └── index.md
│   │   │   └── bsos/
│   │   │       └── index.md
│   │   ├── services/
│   │   │   └── _index.md
│   │   ├── academy/
│   │   │   └── _index.md
│   │   └── about/
│   │       └── index.md
│   └── static/
│       └── img/
└── layouts/
    └── [existing structure with updates]
```

### Two-Domain Config Strategy

**Running .com (default):**
```bash
cd exampleSite && hugo server --themesDir ../..
```

**Running .group (alternate):**
```bash
cd exampleSite && hugo server --themesDir ../.. --config config.group.toml
```

**Config Differences:**

| Setting | .com | .group |
|---------|------|--------|
| `baseURL` | `synthonyx.com` | `synthonyx.group` |
| `params.siteType` | `operating` | `holding` |
| `params.hero.style` | `products-services` | `minimal-investor` |
| Menu items | Products, Services, Academy, Blog | Portfolio, Governance, Contact |

### Hugo Pipes Configuration

Already in place via `postcss.config.js`. No changes needed to build pipeline.

### New Color Variables (tailwind.css)

```css
@theme {
  /* Brand Colors - Sovereign Engineering */
  --color-primary: #4A148C;        /* Deep Purple (new) */
  --color-accent: #006064;         /* Deep Teal (new) */
  --color-action: #FF6F00;         /* Amber for CTAs (new) */
  
  /* Deprecated - REMOVE */
  /* --color-pink: #FF00CC; */
  /* --color-magenta: #E700FF; */
  
  /* Dark theme */
  --color-dark-bg: #230036;
  --color-dark-card: #2C004A;
  --color-dark-border: #3A2B5A;
  
  /* Light theme */
  --color-light-bg: #FDFDFD;
  --color-light-card: #FFFFFF;
  --color-light-border: #DDDDDD;
  
  /* Neutrals */
  --color-charcoal: #2C2C2C;
  --color-slate: #455A64;
  --color-silver: #90A4AE;
  
  /* Fonts */
  --font-sans: 'IBM Plex Sans', 'Inter', system-ui, sans-serif;
  --font-heading: 'Montserrat', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

---

## Phased Execution Plan

### Phase 1: Demolition (Cleanup)

- [ ] **1.1** Delete `layouts/_partials/hero.html.bak`
- [ ] **1.2** Remove deprecated color variables from `tailwind.css` (pink, magenta)
- [ ] **1.3** Remove all `bg-gradient-to-*` utility classes from templates
- [ ] **1.4** Remove organic blob background divs from hero.html, section.html, offer.html, page.html
- [ ] **1.5** Replace `text-pink` / `hover:text-magenta` with new brand colors
- [ ] **1.6** Rebuild CSS: `npm run build:css`

### Phase 2: Foundation (New Design System)

- [ ] **2.1** Add new brand colors to `tailwind.css` @theme block
  - Deep Purple `#4A148C` as primary
  - Deep Teal `#006064` as accent
  - Amber `#FF6F00` as action/CTA
  - Charcoal, Slate, Silver as neutrals
- [ ] **2.2** Add font-family variables for Montserrat (headings), IBM Plex Sans (body), JetBrains Mono (code)
- [ ] **2.3** Create grid overlay CSS utility class `.bg-grid-pattern`
- [ ] **2.4** Create schematic line divider CSS utility `.divider-schematic`
- [ ] **2.5** Update base typography in `@layer base` with new font variables
- [ ] **2.6** Rebuild CSS: `npm run build:css`

### Phase 3: The "Braun" Design System (Component Updates)

- [ ] **3.1** Update `hero.html` partial
  - Replace gradient text with solid Deep Purple
  - Replace blobs with grid overlay
  - Update CTA button to solid Amber background
- [ ] **3.2** Update `features.html` partial
  - Remove gradient backgrounds
  - Update icon container to solid Deep Purple
  - Update link colors to Deep Teal
- [ ] **3.3** Update `offer.html` partial
  - Remove blobs
  - Solid CTA button (Amber)
  - Update heading colors
- [ ] **3.4** Update `cta.html` partial
  - Remove gradients
  - Solid Amber CTA button
- [ ] **3.5** Update `clients.html` partial
  - Remove gradients
  - Update colors
- [ ] **3.6** Update `header.html` partial
  - Remove gradient fallback logo
  - Update hover states to Deep Teal
- [ ] **3.7** Update `footer.html` partial
  - Remove gradient logo fallback
  - Update heading colors to Deep Teal
- [ ] **3.8** Update `section.html` layout
  - Remove blobs
  - Solid heading color (Deep Purple)
- [ ] **3.9** Update `page.html` layout
  - Remove blobs
  - Update heading styles
- [ ] **3.10** Redesign `taxonomy.html` and `term.html` with new design system
- [ ] **3.11** Rebuild CSS: `npm run build:css`

### Phase 4: The Example Site (Two-Domain Demo)

- [ ] **4.1** Create `exampleSite/` directory structure
- [ ] **4.2** Create `exampleSite/hugo.toml` (synthonyx.com config)
  - Set `baseURL = 'https://synthonyx.com/'`
  - Set `params.siteType = 'operating'`
  - Configure menu: Products, Services, Academy, Blog
- [ ] **4.3** Create `exampleSite/config.group.toml` (synthonyx.group config)
  - Set `baseURL = 'https://synthonyx.group/'`
  - Set `params.siteType = 'holding'`
  - Configure menu: Portfolio, Governance, Contact
- [ ] **4.4** Create homepage content `exampleSite/content/_index.md`
  - Hero params for operating company
- [ ] **4.5** Create Products section
  - `exampleSite/content/products/_index.md`
  - `exampleSite/content/products/sovereign/index.md`
  - `exampleSite/content/products/bsos/index.md`
- [ ] **4.6** Create Services section
  - `exampleSite/content/services/_index.md`
- [ ] **4.7** Create Academy section
  - `exampleSite/content/academy/_index.md`
- [ ] **4.8** Create About section
  - `exampleSite/content/about/index.md` (Founder bio for .group)
- [ ] **4.9** Create conditional partials for site type
  - Add `{{ if eq site.Params.siteType "holding" }}` logic where needed
- [ ] **4.10** Test both configs:
  - `cd exampleSite && hugo server --themesDir ../..` (.com)
  - `cd exampleSite && hugo server --themesDir ../.. --config config.group.toml` (.group)
- [ ] **4.11** Update README.md with exampleSite usage instructions

---

## Verification Checklist

After each phase, verify:

- [ ] `hugo server` runs without errors
- [ ] No console errors in browser
- [ ] Colors match brand guidelines (Deep Purple, Deep Teal, Amber)
- [ ] No gradients remain in templates
- [ ] Typography uses correct fonts
- [ ] Dark mode works correctly
- [ ] Mobile responsive (test at 375px and 768px)
- [ ] exampleSite builds successfully with both configs

---

## Rollback Plan

If issues arise:
1. `git stash` current changes
2. Revert to last known good commit
3. Apply changes incrementally, testing after each file

---

## Notes for Build Agent

1. **Always run `npm run build:css` after modifying `tailwind.css`**
2. **Test both light and dark modes**
3. **Maintain WCAG 2.1 AA contrast ratios** - test on dark purple backgrounds
4. **Keep mobile-first approach** - base classes for mobile, `md:` for desktop
5. **Use `{{ with }}` for safe param access** - never assume params exist
