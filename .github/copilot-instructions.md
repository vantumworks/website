# Copilot Instructions for Vantum Works Website

## Project Overview

This is a single-page React marketing website for **Vantum Works LLC**, a software studio building multiple digital products. The site is designed to establish credibility and legitimacy for external services (Stripe, banks, vendors).

## Tech Stack

- **React 18** - Component-based UI with functional components and hooks
- **Vite 6** - Fast development server and build tool
- **Tailwind CSS v3** - Utility-first styling with custom color palette
- **Framer Motion** - Smooth animations and transitions
- **PostCSS** - CSS processing for Tailwind
- Node.js 18+ and npm for package management

## Project Structure

```
website/
├── index.html              # Entry HTML file
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind customization
├── postcss.config.js       # PostCSS for Tailwind
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Main App component
│   ├── index.css           # Tailwind styles
│   ├── context/            # React context providers
│   │   └── ThemeContext.jsx # Theme switching (light/dark/system)
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

## Development Commands

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Starts Vite dev server with hot module replacement at http://localhost:3000

### Build
```bash
npm run build
```
Builds production bundle to `dist/` directory

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally

## Coding Standards and Best Practices

### React/JSX
- Use **functional components** with hooks (no class components)
- Use **named exports** for components (e.g., `export default function Header()`)
- Keep components focused and single-responsibility
- Use React hooks (`useState`, `useEffect`, custom hooks) appropriately
- Prefer JSX expressions over imperative DOM manipulation

### JavaScript
- Use **ES6+ features** (arrow functions, destructuring, template literals, etc.)
- Use `const` by default, `let` when reassignment is needed
- No semicolons (project follows no-semicolon style)
- Use single quotes for strings

### Styling
- Use **Tailwind CSS utility classes** exclusively for styling
- Follow the custom color palette defined in `tailwind.config.js`:
  - Primary colors: `primary-{50-950}` (brand blue/purple)
  - Accent colors: `accent-{50-900}` (magenta/purple)
- Support **dark mode** using Tailwind's `dark:` prefix
- Maintain responsive design with Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`)
- Use Tailwind's spacing scale consistently

### Animations
- Use **Framer Motion** for all animations and transitions
- Apply entrance animations with `initial`, `animate`, and `transition` props
- Use `AnimatePresence` for exit animations
- Keep animations smooth with appropriate easing functions

### Theme Support
- The site supports light/dark/system theme modes via `ThemeContext`
- Always add dark mode variants for new components using `dark:` classes
- Test components in both light and dark modes

### File Organization
- Place all React components in `src/components/`
- Use PascalCase for component filenames (e.g., `Header.jsx`, `Hero.jsx`)
- Keep context providers in `src/context/`
- Store static assets in `assets/` directory

### Component Structure
- Import statements first (React, third-party, local components)
- Define helper components or functions inside the file if they're single-use
- Export the main component as default at the bottom
- Use descriptive variable and function names

### Accessibility
- Include appropriate ARIA labels where needed
- Ensure keyboard navigation works properly
- Maintain semantic HTML structure
- Test responsive behavior on mobile devices

## Important Notes

- **No tests** are currently configured in this project
- **No linters** are configured (no ESLint, Prettier, etc.)
- This is a **static site** with no backend or API calls
- The site is **private** and licensed as UNLICENSED
- Focus on visual polish, animations, and responsive design
- All paths should be absolute from project root when using tools

## Deployment

The site is ready for static hosting platforms:
- Build command: `npm run build`
- Output directory: `dist`
- Compatible with Vercel, Netlify, Render, or any static host

## Restrictions and Preferences

- Do NOT add test frameworks unless explicitly requested
- Do NOT add linting tools unless explicitly requested
- Do NOT modify the color palette without discussion
- Do NOT use inline styles; always use Tailwind classes
- Do NOT use class components; only functional components with hooks
- Keep the codebase minimal and focused on the marketing site purpose
