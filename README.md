# KOD Universe - Premium Portfolio Website

A production-quality portfolio website for **KOD Universe** built with Next.js 14 App Router, TypeScript, Tailwind CSS, Lucide React, and Framer Motion.

---

## Quick Start

```bash
cd kod-universe
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Pages

| Route           | Description                                    |
| --------------- | ---------------------------------------------- |
| `/`             | Home - hero, projects, services, process, CTAs |
| `/work`         | Portfolio gallery with category filters        |
| `/work/[slug]`  | Dynamic project detail pages (static)          |
| `/capabilities` | Services + process + deliverables              |
| `/our-universe` | Editorial about/story page                     |
| `/connect`      | Contact page with enquiry form                 |

---

## Adding Projects

Edit [`data/projects.ts`](file:///c:/Users/shera/Desktop/Outside/KOD/kod-universe/data/projects.ts). Add images to `/public/`.

## Connecting the Contact Form to a Backend

Replace `submitProjectEnquiry()` in [`features/contact/ContactForm.tsx`](file:///c:/Users/shera/Desktop/Outside/KOD/kod-universe/features/contact/ContactForm.tsx) with a real fetch call.

## Scripts

```bash
npm run dev    # Dev server
npm run build  # Production build
npm run lint   # ESLint
```
