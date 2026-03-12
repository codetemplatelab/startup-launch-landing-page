# Startup Launch Landing Page

Premium startup launch template with a full landing page, authentication flows, and a responsive dashboard UI. Built to be production-ready and easy to customize.

## Demo
https://startup-launch-landing-page.vercel.app/

## Features
- Conversion-focused landing page sections
- Animated hero, demo previews, and charts
- Authentication screens (Sign In / Sign Up)
- Responsive dashboard with collapsible sidebar
- SEO meta tags + favicon support

## Tech Stack
- React 19 + Vite
- Tailwind CSS
- Framer Motion + GSAP
- Three.js (React Three Fiber)
- tsparticles
- Lucide icons

## Installation
```bash
npm install
```

## Development
```bash
npm run dev
```

## Production Build
```bash
npm run build
npm run preview
```

## Project Structure
- `src/components` Shared UI components
- `src/components/dashboard` Dashboard UI components
- `src/pages` App pages (Landing, Auth, Dashboard)
- `src/pages/dashboard` Dashboard sub-pages
- `src/data/landingData.js` Landing page content
- `src/assets` Local assets
- `public/assets` Static media and OG image

## Customization
- Update section content in `src/data/landingData.js`
- Adjust global styles in `src/index.css`
- Replace images in `public/assets`
- Update theme tokens in `tailwind.config.js`

## Notes
- Auth and dashboard are frontend templates (no backend wired).
- Animations respect `prefers-reduced-motion`.

---
Built for digital product distribution: clean structure, modular components, and fast setup.
