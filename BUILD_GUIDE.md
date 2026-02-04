# Portfolio Website - Complete Build Guide

Follow this guide to build your portfolio line by line. I'll provide the exact file structure and all file contents.

## Step 1: Create Base Directory Structure

Open your terminal and run these commands:

```bash
mkdir portfolio-site
cd portfolio-site
mkdir -p public/images/projects
mkdir -p src/components
mkdir -p src/content/projects
mkdir -p src/layouts
mkdir -p src/pages/projects
mkdir -p src/styles
```

## Step 2: Root Configuration Files

### File: `package.json`

```json
{
  "name": "jake-estrada-portfolio",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/tailwind": "^5.1.0",
    "astro": "^4.16.0",
    "tailwindcss": "^3.4.1"
  },
  "devDependencies": {
    "@astrojs/check": "^0.9.0",
    "typescript": "^5.6.2"
  }
}
```

### File: `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://jakeestrada.org',
  integrations: [tailwind()],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
```

### File: `tsconfig.json`

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  }
}
```

### File: `tailwind.config.mjs`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter Variable', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Inter Variable', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
```

### File: `.gitignore`

```
# build output
dist/
.output/

# generated types
.astro/

# dependencies
node_modules/

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# environment variables
.env
.env.production

# macOS-specific files
.DS_Store

# jetbrains ide
.idea

# vscode
.vscode/
!.vscode/extensions.json

# misc
*.log
.vercel
```

### File: `vercel.json`

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "astro",
  "regions": ["iad1"]
}
```

---

## Step 3: Public Files

### File: `public/robots.txt`

```
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: https://jakeestrada.org/sitemap-index.xml
```

### File: `public/favicon.svg`

```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="6" fill="#0ea5e9"/>
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="bold" font-size="18" fill="white">JE</text>
</svg>
```

**Note:** Add your `resume.pdf` file to the `public/` directory and your project screenshots to `public/images/projects/`

---

## Step 4: Source Files

I'll break this into manageable sections. Let me know when you're ready for each section:

1. **Styles** (1 file)
2. **Content Configuration** (1 file)  
3. **Layout** (1 file)
4. **Components** (9 files)
5. **Pages** (4 files)
6. **Sample Projects** (5 files)

Would you like me to continue with Section 1 (Styles) next?

Or would you prefer I create individual files that you can download one at a time?
