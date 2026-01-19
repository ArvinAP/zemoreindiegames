# Zemore Indie Games

A modern, responsive website for Zemore Indie Games - a game publisher dedicated to supporting independent game developers.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**

## Features

- ✨ Modern, responsive design
- 🎮 Game showcase section
- 📊 Company statistics
- 💼 Services overview
- 🎯 Core values presentation
- 📱 Mobile-first approach
- 🎨 Smooth animations and hover effects
- ♿ Semantic HTML and accessible components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zemore-indie-games
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
zemore-indie-games/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Games.tsx           # Games showcase
│   ├── GameCard.tsx        # Individual game card
│   ├── WhoWeAre.tsx        # About section
│   ├── WhatWeDo.tsx        # Services section
│   ├── ServiceCard.tsx     # Service card component
│   ├── Values.tsx          # Values section
│   ├── ValueCard.tsx       # Value card component
│   ├── CTA.tsx             # Call-to-action section
│   └── Footer.tsx          # Footer with links
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies

```

## Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`:
- `dark-bg`: Main background color
- `dark-card`: Card background color
- `purple-primary`: Primary purple accent
- `cyan-primary`: Cyan accent
- `teal-primary`: Teal accent

### Content

Update content in the respective component files:
- Game titles and descriptions: `components/Games.tsx`
- Company stats: `components/WhoWeAre.tsx`
- Services: `components/WhatWeDo.tsx`
- Values: `components/Values.tsx`

## License

All rights reserved © 2024 Zemore Indie Games
