# Mr Zezo – Pizza & Burger House

A site for Mr Zezo Pizza & Burger House, built with React, Tailwind CSS, and Framer Motion.

## Tech stack
- React (Create React App)
- Tailwind CSS
- Framer Motion (animations)
- Lucide Icons

## Requirements
- Node.js 18+
- npm 8+

## Setup & install
```bash
npm install
```

## Run locally
```bash
npm start
```
- Opens at http://localhost:3000
- Hot reload enabled

## Production build
```bash
npm run build
```
- Outputs static assets to `build/`

## Tests
```bash
npm test
```

## Notes
- Smooth scrolling and section highlights use anchor IDs: `home`, `menu`, `gallery`, `contact`.
- Header and footer logos scroll back to top.
- Tailwind config: `tailwind.config.js`; PostCSS plugin: `@tailwindcss/postcss`.

## Deploying
Any static host works (Netlify, Vercel, GitHub Pages). Deploy the contents of `build/`.
