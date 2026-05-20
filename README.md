# <p align="center"><img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&h=400&q=80" alt="Aether Studio Banner" width="100%" style="border-radius: 16px;" /></p>

<h1 align="center">✨ A E T H E R &nbsp; S T U D I O ✨</h1>

<p align="center">
  <strong>Pushing the absolute limits of modern browser capability.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=FFF" alt="Vite 7" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/WebGL-OGL-FFB6C1?style=for-the-badge&logo=webgl&logoColor=white" alt="WebGL OGL" />
</p>

<hr />

## 🌌 Introduction

**Aether Studio** is a premium, bleeding-edge creative digital production collective and immersive web experience. Built to show what is truly possible within a modern browser window, it combines extreme frontend performance, pixel engineering, and real-time GPU acceleration with absolute artistic excellence. 

This repository houses the showcase website for Aether Studio, featuring fluid responsive layouts, complex routing, highly premium dark glassmorphism styling, and custom real-time 3D shaders.

---

## 🚀 Key Features

*   **✨ Immersive 3D Ray-Marched Prism**: Powered by `OGL` (a lightweight WebGL library), featuring real-time mouse-responsive 3D rotation, noise overlays, hue-shifting, and post-processing bloom.
*   **🎨 Premium Glassmorphic UI**: Tailored using Tailwind CSS v4, custom HSL color palettes, and sleek border spotlights that react to user hovering.
*   **⚡ Ultra-Smooth Transitions**: Seamless micro-animations and animations built on standard CSS/Tailwind variables for responsive desktop and mobile experiences.
*   **📊 Integrated Dashboard Grid**: Dark-themed statistics panels displaying key studio performance indices in a high-tech dashboard style.
*   **🤝 Unified Design Tokens**: Solid architecture with central stylesheets, clean layout components, and reusable interactive UI blocks.
*   **🔍 SEO-Optimized Structure**: Proper HTML5 semantic elements, explicit meta boundaries, and responsive screen flow.

---

## 🛠 Tech Stack

- **Core Framework**: React 19.0 (React Router DOM v7)
- **Bundler & Dev Server**: Vite 7.2
- **Styling Engine**: Tailwind CSS v4 (with native CSS-variable extensions)
- **3D graphics**: OGL (Minimalist WebGL Library)
- **UI Components**: Radix UI Slot utility (`class-variance-authority`, `clsx`, `tailwind-merge`)
- **Iconography**: Lucide React

---

## 📂 Repository Structure

```filepath
React Website 2/
├── public/                # Static assets (favicons, logos)
├── src/
│   ├── assets/            # Global visual assets
│   ├── components/
│   │   ├── bits/          # Individual animated UI elements (e.g. Hero canvas wrapper)
│   │   ├── ui/            # Reusable core atomic components (e.g. custom button)
│   │   ├── Header.jsx     # Navigation bar with responsive mobile menu
│   │   ├── Footer.jsx     # Modern footer with newsletter form and social linkages
│   │   ├── Features.jsx   # Sleek grids representing services
│   │   ├── Prism.jsx      # Core Ray-marched WebGL component using OGL
│   │   └── Showcase.jsx   # Grid showcasing creative studio projects
│   ├── pages/
│   │   ├── Home.jsx       # Landing Page aggregating components
│   │   ├── About.jsx      # Deep-dive on Aether values, team, and statistics
│   │   ├── Services.jsx   # Exhaustive pricing, consulting, and web dev tiers
│   │   └── Contact.jsx    # Interactive contact forms and office mapping
│   ├── index.css          # Tailwind design tokens, typography, and scrollbars
│   ├── App.jsx            # Routing and primary layout
│   └── main.jsx           # App entry point
├── package.json           # Scripts and package definitions
└── vite.config.js         # Custom React & Tailwind configuration
```

---

## 🧪 Deep-Dive: Ray-Marched 3D Prism

Aether Studio integrates standard React logic with highly performant fragment shaders using **OGL**. The `<Prism />` component calculates an anisotropic octahedral pyramid using signed distance fields (SDFs) completely on the GPU:

```javascript
// High-performance SDF inside Fragment Shader
float sdPyramidUpInv(vec3 p){
  float oct = sdOctaAnisoInv(p);
  float halfSpace = -p.y;
  return max(oct, halfSpace);
}
```

This math is coupled with inertial pointer tracking to align with mouse moves, creating interactive lighting and shifting depth maps that feel responsive and alive.

---

## ⚙️ Quick Start

Follow these steps to run Aether Studio locally on your machine:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org) (v18+) installed.

### 2. Clone and Install Dependencies
```bash
# Clone the repository
git clone https://github.com/<username>/aether-studio.git
cd aether-studio

# Install dependencies
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to experience the site.

### 4. Build for Production
```bash
npm run build
```
The optimized assets will be generated inside the `/dist` folder, ready for direct deployment to Vercel, Netlify, or AWS.

---

## 💎 Design Rationale & Aesthetic Details

The Aether Studio brand is crafted using a specific **cyberpunk-minimalist** philosophy:
- **Absolute Dark Mode**: Utilizing deep black `#000000` combined with micro-opacity gray overlays `#0c0c0c` to keep contrast crisp and power-efficient.
- **Vibrant Accent Spotlights**: Tailored neon cyan (`#06b6d4`), electric indigo (`#6366f1`), and ultraviolet pink gradients representing flow, processing power, and precision.
- **Glassmorphism**: Backdrop blur filters (`backdrop-blur-md` and `backdrop-blur-xl`) giving components an elegant translucent feeling reminiscent of premium physical glassware.
- **Micro-interactions**: Linear color shifts, card hover-translates, and soft particle noises to delight the visitor.

---

<p align="center">
  Made with 🤍 by <a href="https://github.com/deepmind">Google Deepmind Advanced Agentic Coding</a> &amp; Aether Studio.
</p>
