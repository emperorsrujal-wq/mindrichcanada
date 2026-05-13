# MINDRICH CANADA INC — Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.0 | UI framework |
| react-dom | ^18.3.0 | DOM renderer |
| react-router-dom | ^6.26.0 | SPA routing |
| vite | ^5.4.0 | Build tool |
| @vitejs/plugin-react | ^4.3.0 | Vite React plugin |
| typescript | ^5.5.0 | Type system |
| tailwindcss | ^3.4.0 | Utility CSS |
| three | ^0.167.0 | 3D / WebGL |
| @react-three/fiber | ^8.17.0 | React Three.js renderer |
| @react-three/drei | ^9.114.0 | R3F helpers |
| gsap | ^3.12.0 | Animation engine |
| @gsap/react | ^2.1.0 | GSAP React hooks |
| lenis | ^1.1.0 | Smooth scroll |
| lucide-react | ^0.460.0 | Icons (menu, close, arrow, phone, map-pin, external-link, check) |

## Component Inventory

### Layout

| Component | Source | Reuse | Notes |
|-----------|--------|-------|-------|
| Navigation | Custom | Global | Fixed top bar, scroll hide/show, mobile hamburger overlay |
| Footer | Custom | Global | Three-column footer |

### Sections

| Component | Source | Notes |
|-----------|--------|-------|
| HeroSection | Custom | Contains R3F Canvas for mesh gradient |
| ServicesSection | Custom | 3-column service cards |
| PortfolioSection | Custom | 2-column project grid |
| ProcessSection | Custom | 4-step horizontal flow |
| AboutSection | Custom | Two-column layout |
| ContactSection | Custom | Dark green contact section |

### Reusable Components

| Component | Source | Used By | Notes |
|-----------|--------|---------|-------|
| ServiceCard | Custom | ServicesSection | Icon + title + description + link |
| PortfolioCard | Custom | PortfolioSection | Image + title + description + URL badge |
| ProcessStep | Custom | ProcessSection | Number circle + title + description |
| TrustIndicator | Custom | AboutSection | Checkmark icon + title + description |
| SectionHeader | Custom | Multiple sections | Overline label + section title + optional description |
| CTAButton | Custom | Multiple sections | Pill-shaped button with hover animation |
| GradientMesh | Custom | HeroSection | R3F shader mesh component |
| MobileMenu | Custom | Navigation | Full-screen overlay menu |

### Hooks

| Hook | Purpose |
|------|---------|
| useLenis | Initialize Lenis smooth scroll, sync with GSAP ScrollTrigger |

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| **Mesh Gradient** | Three.js + R3F | Custom GLSL fragment shader with FBM noise, 4-color gradient blending, animated via clock.getElapsedTime() | **High** 🔒 |
| Section entrance (fade + slideY) | GSAP + ScrollTrigger | Batch trigger: y:40, opacity:0 → y:0, opacity:1, stagger children. Applied to all sections | Low |
| Service card stagger | GSAP + ScrollTrigger | Cards stagger in from y:40, opacity:0, stagger:0.15 | Low |
| Process step stagger | GSAP + ScrollTrigger | Steps stagger in from y:30, opacity:0, stagger:0.2 | Low |
| Hero text entrance | GSAP | Timeline with sequential delays: overline 0.3s, headline 0.5s, sub 0.7s, CTA 0.9s | Low |
| Nav scroll hide/show | GSAP | Scroll direction detection, translateY -100%/0% with 0.4s cubic-bezier | Medium |
| Nav background on scroll | CSS transition | After 100px scroll: add bg + backdrop-blur + border-bottom | Low |
| Mobile menu open/close | GSAP | Full-screen overlay slides in, links stagger in | Medium |
| Button hover | CSS transition | Scale 1.02, background color shift, 0.3s ease | Low |
| Card hover | CSS transition | Scale image 1.03, lifted shadow, 0.4s ease | Low |
| Smooth scroll | Lenis | Global smooth scroll with lerp:0.1, synced to ScrollTrigger | Low |
| Portfolio card hover | CSS transition | Lift shadow + image scale | Low |

## State & Logic Plan

### Navigation Scroll Behavior
- Track scroll direction (up/down) via Lenis scroll event or scroll listener
- Hide nav on scroll down (translateY: -100%), show on scroll up (translateY: 0%)
- Add frosted glass background after scrolling past 100px
- Mobile: hamburger toggle controls full-screen overlay visibility

### Lenis + GSAP ScrollTrigger Sync
- Lenis instance created once at app level via useLenis hook
- `lenis.on('scroll', ScrollTrigger.update)` keeps ScrollTrigger in sync
- All scroll-triggered animations use ScrollTrigger with start: "top 80%"

### Mesh Gradient
- R3F Canvas renders the gradient mesh as a fullscreen quad (planeGeometry [2,2])
- Orthographic camera: zoom 1, position [0,0,1]
- Uniforms updated each frame via useFrame with clock.getElapsedTime()
- Canvas has pointer-events: none to allow click-through to CTA
- u_resolution updated on window resize

## Other Key Decisions

- **Single-page app**: All content on one page with smooth-scroll navigation to section anchors. No route changes needed for scroll sections.
- **Portfolio as external links**: Each portfolio card opens the live project in a new tab. No internal routing needed for portfolio items.
- **Contact as display-only**: No contact form — just phone numbers (tel: links) and location. Email and office address marked as TBD.
- **Hero grain overlay**: Implemented as a pseudo-element with base64 SVG noise pattern at 8% opacity on top of the canvas.
