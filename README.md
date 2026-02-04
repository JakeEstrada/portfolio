# Jake Estrada - Portfolio Website

A modern, terminal-inspired portfolio website built with Astro, featuring smooth animations, dark mode, and a unique command-line aesthetic.

## 🚀 Tech Stack

### Core Framework
- **[Astro](https://astro.build)** (v4.16.0) - Static site generator with component islands architecture
- **TypeScript** (v5.6.2) - Type-safe development

### Styling
- **[Tailwind CSS](https://tailwindcss.com)** (v3.4.1) - Utility-first CSS framework
- **[@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)** (v5.1.0) - Astro integration for Tailwind

### Typography
- **IBM Plex Mono** - Primary monospace font
- **JetBrains Mono** - Secondary monospace font for headings
- **Space Grotesk** - Sans-serif fallback

### Development Tools
- **@astrojs/check** (v0.9.0) - Type checking for Astro projects

## ✨ Features

### Design & UX
- **Terminal-Inspired UI** - Command-line aesthetic with terminal prompts and syntax
- **Dark Mode** - System preference detection with manual toggle, persisted via localStorage
- **Smooth Animations** - Scroll-triggered terminal command animations
- **Sequential Content Loading** - Projects and sections appear one-by-one after animations
- **Responsive Design** - Mobile-first approach with Tailwind breakpoints

### Interactive Elements
- **Terminal Loading Screen** - Animated terminal commands on initial page load
- **Page-Specific Loaders** - Custom loading messages for different routes
- **Scroll Animations** - Intersection Observer API for scroll-triggered terminal animations
- **Typewriter Effect** - Animated "whoami" command in hero section

### Content Management
- **Astro Content Collections** - Type-safe markdown content for projects
- **Dynamic Project Pages** - Automatic routing from markdown files
- **Project Ordering** - Custom ordering system for featured projects

## 📁 Project Structure

```
portfolio-site/
├── public/                 # Static assets
│   ├── images/            # Images (profile, project thumbnails)
│   ├── favicon.svg        # Site favicon
│   └── robots.txt         # SEO robots file
│
├── src/
│   ├── components/        # Astro components
│   │   ├── About.astro           # About section with education
│   │   ├── Contact.astro         # Contact information and links
│   │   ├── DarkModeToggle.astro  # Dark mode toggle button
│   │   ├── Footer.astro          # Site footer
│   │   ├── Header.astro          # Navigation header
│   │   ├── Hero.astro            # Hero section with animated whoami
│   │   ├── PageLoader.astro      # Page-specific loading screen
│   │   ├── ProjectCard.astro     # Individual project card component
│   │   ├── ProjectGrid.astro     # Projects grid layout
│   │   ├── Skills.astro          # Skills and technologies section
│   │   ├── TerminalAnimation.astro  # Scroll-triggered terminal animations
│   │   └── TerminalLoader.astro  # Initial page loading screen
│   │
│   ├── content/           # Content collections
│   │   ├── config.ts      # Content collection schema definitions
│   │   └── projects/      # Project markdown files
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro  # Base layout with theme initialization
│   │
│   ├── pages/             # File-based routing
│   │   ├── index.astro    # Homepage
│   │   └── projects/
│   │       ├── index.astro    # Projects listing page
│   │       └── [slug].astro   # Dynamic project detail pages
│   │
│   └── styles/
│       └── global.css     # Global styles and Tailwind imports
│
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
├── vercel.json            # Vercel deployment configuration
└── README.md              # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation Steps

1. **Clone the repository** (or navigate to the project directory)
   ```bash
   cd portfolio-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:4321` (Astro's default port)

## 📜 Available Scripts

- `npm run dev` - Start development server with hot module reload
- `npm run build` - Build for production (includes type checking)
- `npm run preview` - Preview the production build locally
- `npm run astro` - Run Astro CLI commands

## 🏗️ Building for Production

```bash
npm run build
```

This command:
1. Runs TypeScript type checking (`astro check`)
2. Builds static HTML files to the `dist/` directory
3. Optimizes assets and inlines critical CSS

The output is a fully static site that can be deployed to any static hosting service.

## 🚢 Deployment

### Vercel (Recommended)

The project includes `vercel.json` configuration for easy deployment:

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect the Astro framework and deploy

**Configuration:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Framework: `astro`
- Region: `iad1` (US East)

### Other Static Hosts

The `dist/` folder contains static HTML, CSS, and JavaScript files that can be deployed to:
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Any static file hosting service

## 🎨 Key Components

### TerminalAnimation
Scroll-triggered component that types terminal commands and reveals content sequentially. Uses Intersection Observer API for performance.

**Features:**
- Types commands character-by-character
- Shows output messages
- Triggers sequential content reveals
- Supports custom delays and target IDs

### TerminalLoader
Initial page load animation that displays terminal commands before the main content appears.

### DarkModeToggle
Persistent dark mode toggle that:
- Respects system preferences
- Saves user preference to localStorage
- Prevents flash of unstyled content (FOUC)

### Content Collections
Projects are managed through Astro's content collections system:

**Schema Fields:**
- `title` - Project name
- `date` - Publication date
- `tags` - Array of tag strings
- `stack` - Technologies used
- `repoUrl` - GitHub repository (optional)
- `liveUrl` - Live demo URL (optional)
- `demoVideoUrl` - Video demo URL (optional)
- `featured` - Boolean for featured projects
- `heroImage` - Path to project image
- `summary` - Short description
- `order` - Custom ordering number

## 🎯 Design Philosophy

This portfolio embraces a **terminal/engineered aesthetic** that reflects a developer's workflow:

- **Monospace Typography** - Code-like appearance
- **Command-Line Prompts** - Terminal-style UI elements
- **Sequential Animations** - Mimics terminal output
- **Minimal Color Palette** - Neutral grays with accent colors (green for prompts, blue for paths)
- **Dark-First** - Dark mode as the default experience

## 🔧 Configuration

### Astro Config (`astro.config.mjs`)
- Static site output
- Tailwind integration
- Auto-inline stylesheets for performance
- Site URL for SEO

### Tailwind Config (`tailwind.config.mjs`)
- Class-based dark mode
- Custom font families
- Content paths for purging unused styles

### TypeScript Config (`tsconfig.json`)
- Extends Astro's strict TypeScript configuration
- Ensures type safety across the project

## 📝 Adding New Projects

1. Create a new markdown file in `src/content/projects/`
2. Use the following frontmatter structure:

```markdown
---
title: "Project Name"
date: 2024-01-01
tags: ["tag1", "tag2"]
stack: ["Technology1", "Technology2"]
repoUrl: "https://github.com/username/repo"
liveUrl: "https://example.com"
heroImage: "/images/projects/project.svg"
summary: "Brief project description"
order: 1
featured: true
---

Your project description in markdown...
```

3. Add a project image to `public/images/projects/`
4. The project will automatically appear on the projects page

## 🌐 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features
- CSS Grid and Flexbox
- Intersection Observer API
- LocalStorage API

## 📄 License

This project is a personal portfolio website. All rights reserved.

## 👤 Author

**Jake Estrada**
- Email: liminal.innovations@gmail.com
- GitHub: [@JakeEstrada](https://github.com/JakeEstrada)
- LinkedIn: [jake-estrada-03734a271](https://www.linkedin.com/in/jake-estrada-03734a271/)
- Instagram: [@jektesnek](https://www.instagram.com/jektesnek/)

---

Built with ❤️ using Astro and Tailwind CSS

