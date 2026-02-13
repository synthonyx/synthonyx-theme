# Synthonyx Hugo Theme

A sovereign engineering aesthetic Hugo theme for the Synthonyx Group of companies.

Copyright (c) 2025, Synthonyx Technologies Ltd

---

## Features

- **Visible Engineering Design**: Grid layouts, hard borders, blueprint-style backgrounds
- **Two-Site Architecture**: Single theme for both operating (.com) and holding (.group) sites
- **Fully Configurable**: All content, sections, and branding via `hugo.toml`
- **Accessible**: WCAG 2.1 AA compliant with proper contrast on dark backgrounds
- **Performance**: Zero JavaScript bloat, CSS-first approach
- **Dark Mode First**: Designed for dark theme with light theme support

## Quick Start

### Prerequisites

- Hugo Extended v0.146.0+
- Node.js v18+ (for Tailwind CSS build)
- npm

### Installation

1. Clone or download the theme into your Hugo site's `themes/` directory:

```bash
cd your-site/themes
git clone https://github.com/synthonyx/synthonyx-theme.git
```

2. Install npm dependencies:

```bash
cd synthonyx-theme
npm install
```

3. Build the CSS:

```bash
npm run build:css
```

### Development Server

Run the example site:

```bash
# From theme root
hugo server --source exampleSite --themesDir ../..

# Or from exampleSite directory
cd exampleSite && hugo server --themesDir ../..
```

### Production Build

```bash
# From theme root
npm run build

# Or manually
hugo --source exampleSite --themesDir ../.. --minify
```

---

## Two-Site Architecture

This theme supports two distinct site types from a single codebase:

### Operating Site (synthonyx.com)

Default configuration focused on products, services, and customer acquisition.

```bash
hugo server --source exampleSite --themesDir ../..
```

### Holding Site (synthonyx.group)

Alternative configuration for investor relations and corporate information.

```bash
cd exampleSite && hugo server --themesDir ../.. --config config.group.toml
```

---

## Configuration

### Site Parameters

All configurable parameters are set in your site's `hugo.toml`:

```toml
[params]
  # Site Type
  siteType = "operating"  # "operating" or "holding"
  
  # Brand
  logo = "/img/synthonyx-logo-white.png"
  logoAlt = "Synthonyx"
  logoText = ""  # Optional text next to logo
  
  # Footer
  slogan = "Your company slogan here"
  copyright = "Your Company Ltd"
  
  # Contact
  contactEmail = "hello@example.com"
  address = "Location"
  
  # Forms
  formspree = "your-form-id"
```

### Hero Section

```toml
[params.hero]
  label = "Infrastructure Platform"
  header = "Sovereign"
  subHeader = "Technology"
  description = "Your description here..."
  leftButtonText = "Primary CTA"
  leftButtonURL = "/contact"
  rightButtonText = "Secondary CTA"
  rightButtonURL = "/learn-more"
```

### Features Section

```toml
[params.Features]
  enable = true
  title = "Section Title"
  description = "Section description"
  
  [[params.Features.items]]
    icon = "shield-check"  # Lucide icon name
    title = "Feature Title"
    description = "Feature description"
    linkText = "Learn More"
    linkURL = "/path"
```

### CTA Section

```toml
[params.CTA]
  enable = true
  title = "Ready to Start?"
  description = "Description text"
  linkText = "Get Started"
  linkURL = "/contact"
```

### Menus

```toml
[menus]
  [[menus.main]]
    name = 'Home'
    pageRef = '/'
    weight = 10

  [[menus.main]]
    name = 'Products'
    pageRef = '/products'
    weight = 20
```

---

## Shortcodes

### Contact Form

```markdown
{{</* contactform */>}}
```

Requires `params.formspree` in your config.

### Waitlist Form

```markdown
{{</* waitlistform */>}}
```

Requires `params.formspreeWaitlist` in your config.

---

## Directory Structure

```
synthonyx-theme/
├── assets/
│   └── css/
│       └── tailwind.css      # Tailwind source with @theme
├── layouts/
│   ├── baseof.html           # Base template
│   ├── home.html             # Homepage
│   ├── page.html             # Single pages
│   ├── section.html          # List pages
│   ├── taxonomy.html         # Taxonomy lists
│   ├── term.html             # Taxonomy terms
│   ├── _partials/            # Reusable components
│   └── shortcodes/           # Custom shortcodes
├── static/
│   ├── css/main.css          # Compiled CSS
│   └── img/                  # Static images
├── exampleSite/              # Demo site
│   ├── hugo.toml             # .com config
│   ├── config.group.toml     # .group config
│   └── content/              # Example content
├── hugo.toml                 # Theme defaults
├── package.json              # npm scripts
└── README.md                 # This file
```

---

## CSS Development

### Build CSS

```bash
npm run build:css
```

### Watch for Changes

```bash
npm run watch:css
```

### Color Variables

Edit `assets/css/tailwind.css`:

```css
@theme {
  --color-primary: #4A148C;     /* Deep Purple */
  --color-accent: #006064;      /* Deep Teal */
  --color-action: #FF6F00;      /* Amber */
  --color-dark-bg: #230036;     /* Background */
  --color-dark-card: #2C004A;   /* Cards */
}
```

---

## License

Copyright (c) 2025, Synthonyx Technologies Ltd. All rights reserved.
