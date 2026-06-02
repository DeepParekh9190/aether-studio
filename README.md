# <p align="center"><img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&h=400&q=80" alt="Aether Studio Banner" width="100%" style="border-radius: 16px;" /></p>

<p align="center">
  <pre align="center">
    ___    ______ ______ _   __ ______ ____        _____ ______ _  __ ____   ____ ____ 
   /   |  / ____//_  __// | / // ____// __ \      / ___//_  __// / / // __ \ /  _// __ \
  / /| | / __/    / /  /  |/ // __/  / /_/ /      \__ \  / /  / / / // / / / / / / / / /
 / ___ |/ /___   / /  / /|  // /___ / _, _/      ___/ / / /  / /_/ // /_/ /_/ / / /_/ /
/_/  |_/_____/  /_/  /_/ |_//_____//_/ |_|      /____/ /_/   \____//_____//___/\____/ 
  </pre>
</p>

<p align="center">
  <strong>Pushing the absolute limits of modern browser capability.</strong>
</p>

<p align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" /></a>
  <a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=FFF" alt="Vite 7" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" /></a>
  <a href="https://github.com/regl-project/ogl"><img src="https://img.shields.io/badge/WebGL-OGL-FFB6C1?style=for-the-badge&logo=webgl&logoColor=white" alt="WebGL OGL" /></a>
</p>

---

## 🌌 The Aether Manifesto

**Aether Studio** is a premium, bleeding-edge digital production experience. Built as a proof-of-concept for next-generation web design, it explores the intersection of high-fidelity graphics, clean component architecture, and cyber-minimalist design. 

This is not a template; it is a meticulously crafted production showcasing:
1. **Interactive GPU Computing**: Real-time ray-marched geometry calculated per-pixel.
2. **Glassmorphism Design Tokens**: Layered backdrops with dynamic border shadows.
3. **Advanced SEO Integration**: Structured JSON-LD graphs and metadata injected route-by-route.
4. **Fluid Responsiveness**: Unified layout structures looking flawless from mobile viewpoints to 4K displays.

---

## 🗺 Architecture Blueprint

The application follows a modular structure split between pages, visual layouts, and rendering engines.

```text
                                +-------------------+
                                |     index.html    |
                                +---------+---------+
                                          |
                                          v
                                +-------------------+
                                |     main.jsx      |
                                +---------+---------+
                                          | (React Helmet & Router Context)
                                          v
                                +-------------------+
                                |      App.jsx      |
                                +----+----+----+----+
                                     |    |    |
            +------------------------+    |    +-------------------------+
            |                             |                              |
            v                             v                              v
   +-----------------+           +-----------------+            +-----------------+
   |    Header.jsx   |           |  Router Switch  |            |    Footer.jsx   |
   +-----------------+           +--------+--------+            +-----------------+
                                          |
        +------------------+--------------+---------------+------------------+
        |                  |                              |                  |
        v                  v                              v                  v
+---------------+  +---------------+              +---------------+  +---------------+
|   Home.jsx    |  |   About.jsx   |              | Services.jsx  |  |  Contact.jsx  |
+-------+-------+  +---------------+              +---------------+  +---------------+
        |
        +---> [ Seo.jsx, HeroWithImages.jsx, Features.jsx, Showcase.jsx, Cta.jsx ]
```

---

## 🧪 Deep-Dive: The Ray-Marched 3D Prism

At the heart of the experience is the `<Prism />` component. Rather than importing heavy 3D mesh files (`.obj`, `.gltf`), the shape is calculated programmatically using **Ray-Marching** and **Signed Distance Fields (SDFs)** inside a single GLSL fragment shader, rendered onto a screen-space triangle.

### 📐 The Mathematical Model
An anisotropic octahedron is calculated and bounded inside a half-space to form a custom octahedral pyramid shape:

```glsl
// Calculate an anisotropic octahedron
float sdOctaAnisoInv(vec3 p){
  vec3 q = vec3(abs(p.x) * uInvBaseHalf, abs(p.y) * uInvHeight, abs(p.z) * uInvBaseHalf);
  float m = q.x + q.y + q.z - 1.0;
  return m * uMinAxis * 0.5773502691896258;
}

// Bounding it with a half-space to form an Octahedral Pyramid
float sdPyramidUpInv(vec3 p){
  float oct = sdOctaAnisoInv(p);
  float halfSpace = -p.y;
  return max(oct, halfSpace);
}
```

### 🏎 Shader Features
* **Inertial Euler Rotations**: Custom JavaScript tracking captures mouse positions, transforms them into angular Euler rotation matrices (`uRot`), and interpolates them using a decay inertia coefficient.
* **Base Wobble Transform**: A 2D transformation matrix rotates the horizontal slice dimensions over time:
  ```glsl
  mat2 wob = mat2(cos(t), cos(t + 33.0), cos(t + 11.0), cos(t));
  p.xz = p.xz * wob;
  ```
* **Dynamic Chromatic Dispersion**: The color buffer accumulates values based on the sine distance function:
  ```glsl
  o += (sin((p.y + z) * cf + vec4(0.0, 1.0, 2.0, 3.0)) + 1.0) / d;
  ```
* **Post-processing**: The final buffer goes through a Hyperbolic Tangent (`tanh`) compression curve, noise-dithering to avoid banding, and hue-shifting rotation.

---

## 🛠 Component Reference Registry

### 1. `<Prism />`
Located in [`src/components/Prism.jsx`](file:///e:/React%20Website%202/src/components/Prism.jsx). Renders the WebGL canvas using the minimalist `OGL` framework.

| Prop | Type | Default | Description |
|---|---|---|---|
| `height` | `Number` | `3.5` | Height of the generated pyramid prism. |
| `baseWidth` | `Number` | `5.5` | Width of the prism base boundary. |
| `animationType` | `'rotate' \| '3drotate' \| 'hover'` | `'rotate'` | Movement pattern. `hover` tracks cursor, `3drotate` spins on three axes. |
| `glow` | `Number` | `1.0` | Light multiplication index. |
| `scale` | `Number` | `3.6` | Scale coefficient inside the rendering frustum. |
| `hueShift` | `Number` | `0.0` | Rotation angle in radians for shader hue rotation. |
| `timeScale` | `Number` | `0.5` | Speed modifier for time-based sine shifts. |
| `suspendWhenOffscreen` | `Boolean` | `false` | If `true`, pauses WebGL rendering using `IntersectionObserver` when offscreen. |

### 2. `<Seo />`
Located in [`src/components/Seo.jsx`](file:///e:/React%20Website%202/src/components/Seo.jsx). Injects headers and structured data into the HTML header index.

```javascript
import Seo from "../components/Seo";

// Usage Example
<Seo 
  path="/about"
  title="About Aether Studio"
  description="Meet the crew engineering the absolute edge of web capabilities."
/>
```
* Generates standard OpenGraph meta properties (`og:title`, `og:image`, `og:url`).
* Generates Twitter card assets.
* Appends **JSON-LD Schema Graphs** structure dynamically (Organization and WebSite schemas).

---

## 🎨 Design System & CSS Architecture

Aether Studio relies on a modern, dark cyberpunk glassmorphism structure with highly tailored color tokens built into Tailwind CSS v4.

### 🌈 Curated Color Palette
* **Deep Space**: `#000000` (Pure base background for high contrast and OLED power efficiency).
* **Atmospheric Panels**: `#0c0c0c` and `rgba(255,255,255,0.01)` border coatings.
* **Neons**:
  * Cyan Accent: `#06b6d4`
  * Electric Indigo: `#6366f1`
  * Ultraviolet Pink: `#ec4899`

### 🌀 Styling Rules
* **Glassmorphic Panes**: Use a thin opaque border coupled with high-index blur:
  ```css
  .glass-card {
    background: rgba(255, 255, 255, 0.01);
    border: 1px solid rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(16px);
  }
  ```
* **Dynamic Hover Spotlights**: Cards employ negative margins, transition scales, and soft neon color drop shadows (`shadow-[0_15px_40px_-10px_rgba(6,182,212,0.3)]`) to respond to pointer focus.

---

## ⚙️ Quick Start

### 📋 Prerequisites
Make sure you have Node.js version 18.0 or newer.

### 🔌 Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/DeepParekh9190/aether-studio.git
   cd aether-studio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Boot the development dev server:
   ```bash
   npm run dev
   ```
4. Build production static bundle:
   ```bash
   npm run build
   ```

---

## 🚀 Optimization & Performance Auditing

To maintain high frame rates (60FPS+) even with pixel-dense ray-marching:
1. **Dynamic Device Pixel Ratio (`dpr`)**: Clamped to a maximum of `2.0` on Retina displays to avoid processing 4x pixel arrays.
2. **IntersectionObserver Suspension**: The canvas loops pause immediately when the parent component scrolls offscreen.
3. **Pre-rendered Triangle Geometry**: Rather than pushing large geometric vertex buffers, OGL renders on a single screen-covering triangle, shifting 100% of calculations to the GPU fragment buffer.

---

<p align="center">
  Crafted with passion &amp; precision by <a href="https://github.com/DeepParekh9190">Deep Parekh</a> and the Google DeepMind Advanced Agentic Coding team.
</p>
