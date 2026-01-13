# Vantum Works Website

A clean, professional marketing website for **Vantum Works LLC**, a software studio building multiple digital products.

![Vantum Works](https://img.shields.io/badge/Vantum%20Works-Software%20Studio-4a4de5)

## Overview

This is a single-page React website built with Vite, Tailwind CSS, and Framer Motion animations. It's designed to establish credibility and legitimacy for external services (Stripe, banks, vendors).

## Tech Stack

- **React 18** - Component-based UI
- **Vite** - Fast development and build tool
- **Tailwind CSS v3** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions

## Features

- ✨ Smooth entrance animations for all sections
- 🎨 Modern, minimal design with custom color palette
- 📱 Fully mobile responsive
- 🚀 Fast static build, deployable anywhere
- 👥 Founder profiles with photos

## Project Structure

```
VantumWorks/
├── index.html              # Entry HTML file
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind customization
├── postcss.config.js       # PostCSS for Tailwind
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Main App component
│   ├── index.css           # Tailwind styles
│   └── components/
│       ├── Header.jsx      # Navigation with animations
│       ├── Hero.jsx        # Hero section with floating shapes
│       ├── Products.jsx    # Product cards with stagger animation
│       ├── About.jsx       # Company info, logo, and founders
│       └── Footer.jsx      # Contact and legal info
└── assets/
    ├── favicon.svg         # Site favicon
    ├── logo-rocket.jpg     # Vantum Works rocket logo
    ├── albert-cervantes.jpg # Founder photo
    └── usha-cervantes.jpg  # Co-founder photo
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd VantumWorks

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server with hot reload |
| `npm run build` | Build production bundle to `dist/` |
| `npm run preview` | Preview production build locally |

## Deployment

This site is deployment-ready for any static hosting platform.

### Vercel / Netlify / Render

1. Connect your repository
2. Build command: `npm run build`
3. Output directory: `dist`

### Manual Deployment

```bash
npm run build
# Upload the `dist/` folder to your hosting provider
```

## Customization

### Updating Products

Edit the `products` array in `src/components/Products.jsx`

### Updating Founders

Edit the `founders` array in `src/components/About.jsx`

### Styling

- **Colors**: Modify `tailwind.config.js` under `theme.extend.colors`
- **Fonts**: Change the Google Fonts link in `index.html`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved by Vantum Works LLC.

---

© 2026 Vantum Works LLC
