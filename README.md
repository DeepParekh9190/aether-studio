# <p align="center"><img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&h=400&q=80" alt="Aether Studio Banner" width="100%" style="border-radius: 16px;" /></p>

<p align="center">
  <pre align="center">
 █████╗ ███████╗████████╗██╗  ██╗███████╗██████╗     ██████╗ ██████╗ ██████╗ ███████╗
██╔══██╗██╔════╝╚══██╔══╝██║  ██║██╔════╝██╔══██╗   ██╔════╝██╔═══██╗██╔══██╗██╔════╝
███████║█████╗     ██║   ███████║█████╗  ██████╔╝   ██║     ██║   ██║██████╔╝█████╗  
██╔══██║██╔══╝     ██║   ██╔══██║██╔══╝  ██╔══██╗   ██║     ██║   ██║██╔══██╗██╔══╝  
██║  ██║███████╗   ██║   ██║  ██║███████╗██║  ██║   ╚██████╗╚██████╔╝██║  ██║███████╗
╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝    ╚═════╝ ╚══════╝ ╚═╝  ╚═╝╚══════╝
                               SYSTEM DIAGNOSTIC CONSOLE v2.4.0
  </pre>
</p>

<p align="center">
  <strong>IMMERSIVE REAL-TIME GPU WEB EXPERIENCE &bull; HOSTED ENVIRONMENT CORE</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/CORE_ENGINE-React_19.0-blue?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/SHADING_PIPELINE-WebGL_OGL-FFB6C1?style=flat-square&logo=webgl&logoColor=white" alt="WebGL OGL" />
  <img src="https://img.shields.io/badge/GRID_UTILITY-Tailwind_v4.0-38BDF8?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/COMPILER-Vite_7.2-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
</p>

---

## 🖥️ System Initialization Log

```text
[SYSTEM] Initializing Aether Studio Core...
[SYSTEM] Checking browser hardware acceleration... ACTIVE (GPU: WebGL 2.0 supported)
[SYSTEM] Loading core styles [Tailwind CSS v4.0.0-beta]... DONE (5.1kB raw tokens compiled)
[SYSTEM] Compiling GPU Fragment Shader Kernels...
         ├── Geometry: Anisotropic Octahedral SDF (sdOctaAnisoInv) -> COMPILED
         ├── Raymarching Engine: 100 max ray iteration bounds -> INSTANTIATED
         └── Colorspace: Anisotropic Chromatic Dispersion -> INITIALIZED
[SYSTEM] Mounting page modules (Home, About, Services, Contact)... DONE
[SYSTEM] Injecting SEO Metadata Router Guard (Schema JSON-LD)... ACTIVE
[SYSTEM] AETHER CORE BOOT SEQUENCE COMPLETED. Status: ONLINE
```

---

## 🔮 Active Sub-Modules (React Component Tree)

Aether operates as an interconnected network of layout nodes. Below is the operational link map:

```text
       [ AETHER CORE TRANSMISSION NETWORK ]
                       │
                       ├─── [001] Header Node (Glassmorphism Frame / Responsive hamburger)
                       │
                       ├─── [002] Routing Switchboard
                       │     ├─── Portal /              -> Home Module (Hero, Bento Grid, Showcase)
                       │     ├─── Portal /about         -> About Module (Metrics, Bio Matrix, Values)
                       │     ├─── Portal /services      -> Services Module (WebGL, Design, Eng, SEO)
                       │     ├─── Portal /contact       -> Contact Module (HQ Location, Form Terminal)
                       │     ├─── Portal /portfolio     -> Portfolio Grid & Projects Showcase
                       │     ├─── Portal /portfolio/:id -> Case Studies (Deep Dives, Results)
                       │     ├─── Portal /pricing       -> Price Plans, Custom Dev Estimator
                       │     ├─── Portal /privacy       -> Privacy Regulations Node
                       │     ├─── Portal /terms         -> Service Terms Document
                       │     ├─── Portal /cookies       -> Cookie Authorization & Control Panel
                       │     ├─── Portal /sitemap       -> Index & Sitemap Directory
                       │     └─── Portal * (fallback)   -> NotFound Page (Dynamic 404 Node)
                       │
                       ├─── [003] Rendering Array: Ray-Marched GPU Prism
                       │
                       └─── [004] Footer Anchor (Newsletter Link / Navigation Terminal)
```

---

## 🛠️ Hardware Shading Core: Mathematical Blueprint

The core graphic interface ([`Prism.jsx`](file:///e:/React%20Website%202/src/components/Prism.jsx)) is not a mesh loader. It calculates vector distances programmatically on every frame inside the visitor's GPU.

### 📐 The Geometry Kernel (SDF)
The 3D Prism is formed by intersection logic. An anisotropic octahedron calculation is bounded within a 3D half-space plane to prevent downward rendering:

```math
\text{sdOctaAnisoInv}(p) = \left( \frac{|p_x|}{W_{base}} + \frac{|p_y|}{H_{height}} + \frac{|p_z|}{W_{base}} - 1.0 \right) \cdot \min(W_{base}, H_{height}) \cdot 0.57735
```

```glsl
// Hardware implementation inside GLSL
float sdOctaAnisoInv(vec3 p){
  vec3 q = vec3(abs(p.x) * uInvBaseHalf, abs(p.y) * uInvHeight, abs(p.z) * uInvBaseHalf);
  return (q.x + q.y + q.z - 1.0) * uMinAxis * 0.5773502691896258;
}

float sdPyramidUpInv(vec3 p){
  float oct = sdOctaAnisoInv(p);
  float halfSpace = -p.y; // Cut off anything below horizontal plane
  return max(oct, halfSpace);
}
```

### 🌪️ Inertial Euler Tracking
The Euler Rotation matrix rotates the system vectors based on linear pointer movements:

$$
R(\theta_y, \theta_x, \theta_z) = R_y(\theta_y) \cdot R_x(\theta_x) \cdot R_z(\theta_z)
$$

These angles are interpolated smoothly at `60Hz` through a lerp algorithm governed by an inertia variable `INERT`:

$$\theta_{current} = \theta_{current} + (\theta_{target} - \theta_{current}) \times \text{INERT}$$

---

## ⚡ Command Sequence (Quick Start)

Initiate the terminal sequence to clone, configure, and boot the Aether environment locally:

### 1️⃣ Clone & Configure
```bash
# Clone the repository
git clone https://github.com/DeepParekh9190/aether-studio.git

# Enter local matrix
cd aether-studio

# Pull runtime dependencies
npm install
```

### 2️⃣ Operational Modes
```bash
# Run local sandbox (development server with hot reload)
npm run dev

# Compile binary bundle (generates ultra-minified /dist directory)
npm run build

# Preview compilation bundle locally
npm run preview
```

---

## 🎨 Global Design Registers (Tailwind CSS v4)

Aether Studio enforces a strict hardware-inspired dark-mode hierarchy defined in [`src/index.css`](file:///e:/React%20Website%202/src/index.css):

```css
:root {
  /* Neon Accent Channels */
  --color-cyan-accent: #06b6d4;      /* Cyber Cyan */
  --color-indigo-accent: #6366f1;    /* Electric Indigo */
  --color-pink-accent: #ec4899;      /* Ultraviolet Pink */
  
  /* System Backdrop Grid */
  --color-space-base: #000000;       /* Pure OLED Black */
  --color-space-panel: #0c0c0c;      /* Deep Space Grey */
}
```

### 🛡️ Interface Spotlight Utility
Cards are styled to react dynamically when a user hovers, utilizing Tailwind CSS variable interpolation and transition delays:

```html
<!-- Example of a reactive system dashboard node -->
<div class="group relative bg-white/[0.01] border border-white/5 backdrop-blur-xl p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_-10px_rgba(6,182,212,0.3)] hover:border-cyan-500/30">
  <!-- Interactive contents -->
</div>
```

---

## 🔋 Resource Efficiency Diagnostics

Aether is optimized to remain lightweight, ensuring the CPU/GPU thread load is kept minimal:
* **DPR Regulation**: Renders are restricted to a max resolution scaling factor of `2.0` (`Math.min(2, window.devicePixelRatio)`).
* **Process Interruption**: The canvas loops pause rendering immediately using `IntersectionObserver` when the `<Prism />` node is out of the screen viewport.
* **Polygon Reduction**: The 3D scene uses 0 vertices. It is composed entirely of a single screen-space overlay triangle containing the shader, bypassing standard pipeline bottlenecks.

---

<p align="center">
  System curated by the Core Architect <a href="https://github.com/DeepParekh9190">Deep Parekh</a> &bull; Engineered alongside the Google DeepMind Advanced Agentic Coding system.
</p>
