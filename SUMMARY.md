# Aether Studio — Repository Summary

**Project:** Aether Studio — a premium creative digital production showcase website built with React 19, Vite 7, Tailwind CSS v4, and OGL WebGL.

---

## Tech Stack

| Category         | Technologies                                                                 |
|------------------|------------------------------------------------------------------------------|
| Framework        | React 19, React Router DOM v7                                               |
| Bundler          | Vite 7.2                                                                     |
| Styling          | Tailwind CSS v4, `tw-animate-css`, CSS variables (oklch)                     |
| 3D Graphics      | OGL (WebGL), custom GLSL fragment shaders (ray-marched SDF prism)            |
| UI Utilities     | Radix UI Slot, `class-variance-authority`, `clsx`, `tailwind-merge`          |
| Icons            | Lucide React                                                                 |
| Linting          | ESLint 9 with `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`     |
| Config           | shadcn/ui component.json, jsconfig path aliases (`@/` → `./src/`)            |

---

## Project Structure

```
React Website 2/
├── index.html                     # HTML entry point
├── package.json                   # Deps & scripts (dev, build, lint, preview)
├── vite.config.js                 # Vite config with React + Tailwind plugins, @ alias
├── eslint.config.js               # ESLint flat config
├── components.json                # shadcn/ui registry config
├── jsconfig.json                  # JS path aliases (root)
├── jsconfig.app.json              # JS path aliases (src only)
├── jsconfig.node.json             # JS config for node files
├── .gitignore
├── .vscode/settings.json          # Ignore unknown CSS at-rules
├── public/
│   └── vite.svg
├── dist/                          # Production build output
├── node_modules/
└── src/
    ├── main.jsx                   # App entry — StrictMode + BrowserRouter
    ├── App.jsx                    # Root layout: Header + Routes + Footer
    ├── index.css                  # Tailwind imports, CSS variables, shadcn theme tokens
    ├── assets/
    │   └── react.svg
    ├── lib/
    │   └── utils.js               # cn() utility (clsx + tailwind-merge)
    ├── components/
    │   ├── Header.jsx             # Fixed nav bar, scroll-aware, mobile hamburger menu
    │   ├── Footer.jsx             # 4-column footer with social links, quick links, legal
    │   ├── HeroWithImages.jsx     # Hero section with parallax image collage + stats grid
    │   ├── Features.jsx           # 4-column cards: WebGL, Performance, Design, Architecture
    │   ├── Showcase.jsx           # 3-project portfolio grid with hover glass widgets
    │   ├── Cta.jsx                # Call-to-action section with gradient buttons
    │   ├── ScrollToTop.jsx        # Scroll-to-top on route change
    │   ├── Prism.jsx              # Ray-marched 3D prism using OGL (WebGL)
    │   ├── bits/
    │   │   └── Hero.jsx           # Duplicate of Prism.jsx (same WebGL component)
    │   └── ui/
    │       └── button.jsx         # shadcn/ui Button with variants (default, destructive, outline, etc.)
    └── pages/
        ├── Home.jsx               # Landing: HeroWithImages + Features + Showcase + Cta
        ├── About.jsx              # About hero, stats dashboard, values cards, team grid
        ├── Services.jsx           # Services hero, 4 service cards (WebGL, Design, Engineering, SEO), process roadmap
        └── Contact.jsx            # Contact info cards, map image, contact form
```

---

## Routing

| Route       | Page      | Description                          |
|-------------|-----------|--------------------------------------|
| `/`         | Home      | Landing page with hero, features, showcase, CTA |
| `/about`    | About     | Studio story, stats, values, team    |
| `/services` | Services  | Capabilities, service cards, process  |
| `/contact`  | Contact   | Contact info, form                   |

---

## Key Components

### `Prism.jsx` / `bits/Hero.jsx`
GPU-accelerated ray-marched 3D prism rendered via OGL. Features:
- Signed distance field (SDF) anisotropic octahedral pyramid
- 100-step ray marching in fragment shader
- Three animation modes: `hover` (mouse-follow), `3drotate` (auto-rotation), `rotate` (wobble + rotation)
- Configurable: height, baseWidth, glow, noise, hueShift, colorFrequency, bloom, inertia, scale, timeScale
- Uses `<Triangle>` geometry (full-screen quad) with custom GLSL uniforms
- `IntersectionObserver` support for offscreen suspension

### `HeroWithImages.jsx`
- Mouse-parallax 3D collage with 3 overlapping image cards
- Live statistics grid (150+ Brands, 99.8% Satisfaction, 25+ Awards)
- Animated ping dot badge, gradient text, dual CTA buttons

### `Header.jsx`
- Fixed-position nav bar with scroll-aware background (transparent → blurred dark)
- Desktop horizontal nav + mobile full-screen overlay menu
- Active route highlighting with animated underline

### `Footer.jsx`
- 4-column grid: branding + description, social icons, quick links, legal links
- Dynamic copyright year

### `Features.jsx`
- 4 premium cards: Interactive WebGL, Lightning Performance, Pixel-Perfect Design, Scalable Architecture
- Hover effects: translate, glow shadow, icon scale, color transitions

### `Showcase.jsx`
- 3 project portfolio cards with hover-reveal glass stats widgets
- Gradient overlay on hover, scale-on-hover images

### `Cta.jsx`
- Large glassmorphic card with gradient headline, dual buttons, response time indicator

### `ui/button.jsx`
- shadcn/ui Button component with `cva` variants (default, destructive, outline, secondary, ghost, link)
- Sizes: default, sm, lg, icon, icon-sm, icon-lg
- Supports `asChild` via Radix Slot

---

## Pages

### Home
Composes `HeroWithImages` → `Features` → `Showcase` → `Cta`

### About
- Hero section with gradient headline and overlapping image collage
- Stats dashboard (150+ Projects, 45+ Clients, 24 Team, 8+ Years)
- Values section (Precision, Innovation, Collaboration, Passion) — 4 cards
- Team section — 3 member cards with hover-reveal glass role tags

### Services
- Hero with gradient headline
- 4 alternating service cards (WebGL & 3D, Premium Design, High-Performance Engineering, SEO & Analytics) — each with icon, description, feature tags, image
- Process roadmap (Discovery → Design → Development → Launch & Scale) — 4-step timeline with glowing step indicators
- Includes `<Cta />` at bottom

### Contact
- Hero with gradient headline
- Left column: "Get in Touch" text, studio HQ image card, 3 contact info cards (Email, Address, Phone)
- Right column: contact form (first name, last name, email, subject, message) with gradient submit button

---

## Scripts

```json
"dev": "vite",
"build": "vite build",
"lint": "eslint .",
"preview": "vite preview"
```

---

## Notes

- `src/components/bits/Hero.jsx` is a near-identical copy of `src/components/Prism.jsx` (same WebGL component, different file path).
- The contact form is visual-only (no submit handler or API integration).
- Design system: dark glassmorphism, gradient accents (cyan/blue/purple), Outfit font, oklch color tokens.
- Built with shadcn/ui style "new-york".
