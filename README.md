# Vantum Works Website

A clean, professional marketing website for **Vantum Works LLC**, a software studio building multiple digital products.

![Vantum Works](https://img.shields.io/badge/Vantum%20Works-Software%20Studio-4a4de5)

## Overview

This is a single-page static website designed to establish credibility and legitimacy for external services (Stripe, banks, vendors). The site prioritizes clarity, trust, and polish over flash.

## Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS v3** - Utility-first styling
- **Vanilla JavaScript** - Minimal interactivity (mobile menu, animations)

## Project Structure

```
VantumWorks/
├── index.html              # Main HTML file
├── package.json            # NPM configuration
├── tailwind.config.js      # Tailwind customization
├── src/
│   └── input.css           # Tailwind input with custom components
├── dist/
│   └── output.css          # Compiled CSS (generated)
├── data/
│   └── products.js         # Product catalog data
├── assets/
│   └── favicon.svg         # Site favicon
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd VantumWorks
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build CSS and start development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with CSS hot-reload |
| `npm run build` | Build minified CSS for production |
| `npm run serve` | Serve static files (without CSS watching) |
| `npm run watch:css` | Watch and compile CSS changes |

## Deployment

This site is deployment-ready for any static hosting platform:

### Vercel

1. Connect your repository to Vercel
2. Build command: `npm run build`
3. Output directory: `.` (root)

### Netlify

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.` (root)

### Render

1. Create a new Static Site on Render
2. Build command: `npm run build`
3. Publish directory: `.` (root)

### Manual Deployment

Run `npm run build` to generate the production CSS, then upload all files to your hosting provider.

## Customization

### Updating Products

Edit `data/products.js` to modify the product catalog. Each product has:
- `id` - Unique identifier
- `name` - Display name
- `description` - One-line description
- `icon` - Icon type (calendar, game, heart, link, users, zap, message)
- `status` - Either `'launched'` or `'coming-soon'`
- `color` - Tailwind gradient classes

### Updating Content

- **Hero section**: Edit the `<section id="home">` in `index.html`
- **About section**: Edit the `<section id="about">` in `index.html`
- **Contact email**: Update the mailto link in the footer

### Styling

- **Colors**: Modify `tailwind.config.js` under `theme.extend.colors`
- **Components**: Edit custom classes in `src/input.css`
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
