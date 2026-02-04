# COPY-PASTE BUILD GUIDE - Jake Estrada Portfolio

## Overview
Follow these steps in order. Copy each file's content exactly as shown.

---

## STEP 1: Create Your Directory Structure

Open terminal and run:

```bash
mkdir portfolio-site
cd portfolio-site
mkdir -p public/images/projects src/components src/content/projects src/layouts src/pages/projects src/styles
```

---

## STEP 2: Configuration Files (Root Directory)

### CREATE: package.json
```json
{
  "name": "jake-estrada-portfolio",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview"
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

### CREATE: astro.config.mjs
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jakeestrada.org',
  integrations: [tailwind()],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
```

### CREATE: tsconfig.json
```json
{
  "extends": "astro/tsconfigs/strict"
}
```

### CREATE: tailwind.config.mjs

**IMPORTANT: This file is long. Copy it completely.**

```javascript
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
    },
  },
  plugins: [],
}
```

### CREATE: .gitignore
```
dist/
.astro/
node_modules/
.env
.DS_Store
.vercel
```

### CREATE: vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro"
}
```

---

## STEP 3: Install Dependencies

Run in terminal:
```bash
npm install
```

Wait for it to complete (may take 2-3 minutes).

---

## STEP 4: Public Files

### CREATE: public/robots.txt
```
User-agent: *
Allow: /
Sitemap: https://jakeestrada.org/sitemap-index.xml
```

### CREATE: public/favicon.svg
```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="6" fill="#0ea5e9"/>
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="system-ui" font-weight="bold" font-size="18" fill="white">JE</text>
</svg>
```

---

## STEP 5: Styles

### CREATE: src/styles/global.css

**IMPORTANT: This is the complete CSS file. Copy all of it.**

```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-white text-dark-800 antialiased;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Syne', 'Inter', system-ui, sans-serif;
    @apply font-bold;
  }

  code {
    font-family: 'JetBrains Mono', monospace;
  }
}

@layer components {
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }

  .btn-primary {
    @apply inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105;
  }

  .btn-secondary {
    @apply inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-dark-200 text-dark-700 font-medium rounded-lg hover:border-primary-500 hover:text-primary-600 transition-all duration-300;
  }

  .card {
    @apply bg-white border border-dark-200 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1;
  }

  .tag {
    @apply inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-700 rounded-full;
  }

  .section-title {
    @apply text-4xl md:text-5xl font-bold font-display mb-6 bg-gradient-to-r from-dark-900 via-dark-700 to-dark-900 bg-clip-text text-transparent;
  }

  .gradient-text {
    @apply bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent;
  }
}

::selection {
  background-color: #bae6fd;
  color: #0c4a6e;
}
```

---

## STEP 6: Content Configuration

### CREATE: src/content/config.ts
```typescript
import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    stack: z.array(z.string()),
    repoUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    demoVideoUrl: z.string().optional(),
    featured: z.boolean().default(false),
    heroImage: z.string(),
    summary: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
```

---

## READY TO CONTINUE?

You now have the foundation set up. Reply "continue" and I'll give you:

**PART 2:**
- Layout file (1 file)
- All 9 component files
- All 4 page files
- 1 sample project (you can add more later)

This will complete your portfolio and you can run `npm run dev` to see it!

Type "continue" when ready for Part 2.
