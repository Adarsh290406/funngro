# 🚀 Funngro Clone — Premium React & Vite Web Platform

A pixel-perfect, highly animated, and SEO-optimized web application inspired by [funngro.com](https://www.funngro.com/), built using **React 18 + Vite** and premium design tokens.

---

## 🎨 Theme & Typography DNA

This project follows a strict dark-green neon accent aesthetic designed to look modern and premium:

*   **Backgrounds**: Deep dark green-black (`#0b0f0d`)
*   **Surfaces & Cards**: Rich panel surfaces (`#111916`) with glowing borders on hover
*   **Accents**: Neon green (`#39ff14`) with custom box shadow glows
*   **Typography**:
    *   *Headings*: Serif display font `Fraunces` for premium elegance.
    *   *Body*: Sans-serif font `Inter` for optimal readability and clean spacing.
    *   *Data/Stats*: Monospace font `JetBrains Mono` for precise counter alignments.

---

## ✨ Features Checklist

*   **Dual Page Modes**:
    *   **Teen Home Mode**: Highlights live pocket-money earning avenues, skill assessment checklists, step-by-step guides, user review ratings, and a gold-tier climbing progress ladder.
    *   **B2B Companies Mode**: Highlights Gen Z outreach activation hubs, campaign dashboard CSS mockups,Starter/Growth pricing grids, and capabilities matrices.
*   **Interactive Components**:
    *   *Sticky Header*: Blur-filtered glassmorphic header supporting responsive active links.
    *   *Infinite Marquee*: Seamless brand logos Horizontal scrolling tracks that pause on mouseover.
    *   *Collapsible FAQ Grid*: Accordion question boxes utilizing spring collapses.
*   **Advanced Animations**:
    *   Scroll-triggered counters that run only when stats enter the visible viewport.
    *   Staggered grid reveals and fading section entrances.
    *   Floating device frame mockups and pulsing glow badges.
*   **SEO Setup**:
    *   Meta headers, OpenGraph cards, Twitter cards, and canonical links injected dynamically per path.
    *   Full HTML5 semantic structuring.

---

## 🗂️ Project Directory Map

```
d:\funngro\
├── public/
│   ├── favicon.svg          # Neon green custom favicon
│   └── robots.txt           # Standard crawler policies
├── src/
│   ├── assets/              # Static logo assets
│   ├── components/
│   │   ├── animations/      # Stagger & scroll reveal motion containers
│   │   ├── layout/          # Navbar, Footer, and Helmet SEO wrappers
│   │   └── ui/              # Section headings, Accordion FAQs, Marquees
│   │   └── sections/
│   │       ├── for-brands/  # B2B page sections
│   │       └── *.jsx        # Teen home page sections
│   ├── hooks/               # Custom IntersectionObserver hooks
│   ├── pages/               # Home and ForBrands views
│   ├── styles/              # Design System stylesheets
│   │   ├── variables.css    # Unified color, spacing, & transitions scale
│   │   ├── reset.css        # Cross-browser layout base
│   │   ├── typography.css   # Custom typography scales using clamp()
│   │   ├── animations.css   # Keyframe libraries
│   │   └── global.css       # Unified button & card utilities
│   ├── App.jsx              # Routing configurations
│   ├── index.css            # Scaffolding entry point
│   └── main.jsx             # React rendering root
├── index.html               # Google WebFonts imports
└── package.json             # Core scripts & packages
```

---

## 🛠️ Getting Started & Commands

### 1. Requirements
Ensure you have **Node.js** (v18+) and **npm** installed on your system.

### 2. Installation
Clone the repository, navigate to the folder, and install all dependencies:
```bash
npm install
```

### 3. Local Development Server
Start the local development server (runs on port `5173` by default):
```bash
npm run dev
```

### 4. Build for Production
Compile optimized client files inside the `/dist` directory:
```bash
npm run build
```

---

## 📦 Core Dependencies

*   **React 18** — Core framework
*   **Vite** — High-performance module bundler
*   **React Router v6** — Client-side path routing
*   **Framer Motion** — Fluid spring-based micro-interactions and transitions
*   **React Helmet Async** — SEO tags injection
