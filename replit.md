# Amary Aroma

## Overview
A luxury perfume/fragrance brand website built with React, TypeScript, and Vite. Features an elegant design with smooth animations using Framer Motion.

## Tech Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (via CDN)
- **Animations**: Framer Motion
- **Routing**: React Router DOM v6
- **Icons**: Lucide React

## Project Structure
```
/
├── components/       # React components
│   ├── DetailView.tsx
│   ├── Encubidia.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Signatures.tsx
│   ├── StorySections.tsx
│   └── UI.tsx
├── pages/           # Page components
│   └── Home.tsx
├── App.tsx          # Main app component with routing
├── index.tsx        # Entry point
├── index.html       # HTML template
├── constants.ts     # App constants
├── types.ts         # TypeScript types
├── vite.config.ts   # Vite configuration
└── tsconfig.json    # TypeScript configuration
```

## Development
- **Dev Server**: `npm run dev` - Runs on port 5000
- **Build**: `npm run build` - Outputs to `dist/`
- **Preview**: `npm run preview` - Preview production build

## Deployment
Configured for static deployment. Build outputs to `dist/` directory.
