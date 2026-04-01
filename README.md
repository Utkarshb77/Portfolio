# Portfolio Website

A modern, responsive developer portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

This project showcases a full personal portfolio experience with dedicated sections for:
- Hero
- About
- Projects
- Contact
- Footer

## Preview

Single-page portfolio with smooth section navigation and a custom dark visual theme.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui components (Radix UI based)
- Vercel Analytics

## Features

- Responsive, section-based layout
- Sticky navigation with scroll-state effects
- Hero area with stats and CTA buttons
- Expertise cards in About section
- Highlighted project cards with hover interactions
- Contact section with social links and styled form
- Footer with quick links and profile links
- Dark theme styling via CSS variables

## Project Structure

```text
app/
  layout.tsx       # Global layout + metadata + analytics
  page.tsx         # Main page composition
  globals.css      # Theme tokens and global styles

components/
  Navigation.tsx
  Hero.tsx
  About.tsx
  Projects.tsx
  Contact.tsx
  Footer.tsx
  ui/              # shadcn/ui building blocks

lib/
  utils.ts
```

## Getting Started

### 1. Install dependencies

Using pnpm (recommended for this repository):

```bash
pnpm install
```

Or with npm:

```bash
npm install
```

### 2. Run development server

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

### 3. Build for production

```bash
pnpm build
pnpm start
```

## Available Scripts

- `pnpm dev` - Start local development server
- `pnpm build` - Create production build
- `pnpm start` - Run production server
- `pnpm lint` - Run ESLint

## Customization Guide

### Personal content

Update these files with your own details:
- `components/Hero.tsx` for name, intro, and headline stats
- `components/About.tsx` for expertise areas and tech tags
- `components/Projects.tsx` for project cards and links
- `components/Contact.tsx` for email, location, and social URLs
- `components/Footer.tsx` for branding and external profile links

### SEO metadata

Edit metadata in `app/layout.tsx`:
- `title`
- `description`
- icons and social metadata (if you add it)

### Theme and colors

Edit design tokens in `app/globals.css`:
- `:root` for default values
- `.dark` for dark theme palette
- `--accent`, `--background`, `--foreground`, etc.

## Contact Form Behavior

The current contact form UI is functional, but submission is simulated on the client side.

If you want real message delivery, connect `handleSubmit` in `components/Contact.tsx` to:
- a Next.js API route
- Formspree / Resend / EmailJS
- your own backend service

## Deployment

You can deploy on Vercel or any platform that supports Next.js.

### Vercel (recommended)

1. Push this repository to GitHub
2. Import the repo into Vercel
3. Deploy with default settings

## Notes

- `next.config.mjs` currently sets `typescript.ignoreBuildErrors: true`.
  Consider setting this to `false` for stricter production safety.
- Images are configured as `unoptimized: true`.

## License

This project is available for personal use and customization.

If you plan to publish or reuse it publicly, update this section with your preferred license (for example, MIT).
