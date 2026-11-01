# K. Muralidharan — Personal Interactive Portfolio & Data Product

> **"The Portfolio is a Data Product"** — An interactive, story-driven digital journey engineered for the **Skillinf Portfolio Design Hackathon 2026**.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18-EA4C89?logo=framer&logoColor=white)](https://www.framer.com/motion/)

---

## 🎯 Big Idea & Story Pipeline

The portfolio operates as a data analytics pipeline scrollable from ingestion to final delivery:

```
[00 BOOT]      Scene 1: Interactive Story Envelope & Talking 3D Hero
      │
[01 INGEST]    Scene 2: Educational Journey (Dharmapuri ➔ Dr. MCET Pollachi) & 3D Lanyard ID
      │
[02 CLEAN]     Scene 3: Periodic Table of My Stack (Element Tiles & Inspector)
      │
[03 MODEL]     Scene 4: Project Showcase & Interactive Case Files (NILA, Energy RL, Power BI)
      │
[04 DEPLOY]    Scene 5: Experience Timeline (Thiranx Internship) & Global Ranks (CodeVita)
      │
[05 VALIDATE]  Scene 6: LeetCode Analytics Dashboard (136 Solved, Circular Gauge)
      │
[06 INSIGHTS]  Scene 7: Verified Curriculum Vitae (Direct PDF Download)
      │
[07 REPORT]    Scene 8: Unfolding Contact Envelope (Direct Email, Tel & Social Links)
```

---

## 🚀 Key Signature Features

1. **Creative Journey Loading Experience**: Custom loading sequence with a road, travelling vehicle, emerging tech icons, and college campus milestone.
2. **Talking 3D Hero & Story Envelope**: Unfolding center envelope revealing a 3D animated avatar video with audio toggle, `mix-blend-mode: multiply` canvas integration, and floating ghost typography.
3. **Animated Educational Journey to College**: Interactive road diorama tracking the route from Dharmapuri to Dr. Mahalingam College of Engineering and Technology (Dr. MCET), Pollachi.
4. **Hanging 3D Lanyard Student ID Card**: Interactive, flippable badge featuring a portrait bust on the front and verified academic metrics (8.3 CGPA, Expected June 2028) on the back.
5. **Periodic Table of My Stack**: Interactive chemical-element tiles with category filters, atomic numbers, and connected project inspection. Zero invented percentages.
6. **Project Case Files & Illustrative Mini-UIs**: Detailed Problem ➔ Approach ➔ Stack ➔ Outcome case files with CSS/SVG simulated mini-dashboards (Smart Energy RL dispatch, NILA offline RAG chat, Power BI RFM clustering).
7. **LeetCode Analytics Dashboard**: Dedicated matrix displaying 136 solved problems (54 Easy, 72 Medium, 10 Hard) with circular SVG progress visualization.
8. **60-Second Judge Tour**: Dedicated hackathon judging mode that automatically scrolls through the best moments of each section with a synchronized caption bar and countdown timer.
9. **Offline AI Assistant ("Ask Muralidharan")**: Instant, client-side RAG-style query panel grounded strictly in local portfolio JSON data.
10. **Command Palette (`Ctrl+K` / `Cmd+K`)**: Rapid keyboard navigation across sections, instant email copy, resume download, and theme toggle.
11. **Interactive Contact Envelope**: Clickable envelope unfolding into verified email (`muralidharanprathap@gmail.com`), phone (`+91 7639170303`), and social profiles.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework**: React 18 + Vite 6
- **Styling**: Tailwind CSS with custom light/dark color variables, soft shadows, and dot-grid pattern
- **Animation**: Framer Motion for scroll-linked layout transitions and 3D transforms
- **Icons**: Lucide React
- **Data Layer**: Clean decoupled architecture in `src/data/`:
  - `profile.js`: Personal facts, education, contact info
  - `skills.js`: Periodic table element stack
  - `projects.js`: Project metadata and case files
  - `experience.js`: Internships, certifications, achievements
  - `leetcode.js`: Editable DSA statistics
  - `journey.js`: Pipeline stage definitions

---

## 📦 Local Setup & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment to Vercel

This repository includes a production-ready `vercel.json` configured for SPA routing and asset caching.

### Deploy via Vercel CLI:
```bash
npx vercel
```

### Deploy via GitHub:
1. Push this repository to GitHub (`https://github.com/Murali304-cmd/portfolio`).
2. Import the repository in [Vercel](https://vercel.com).
3. Framework Preset: **Vite**
4. Root Directory: `./`
5. Click **Deploy**.

---

## 🔒 Factual Integrity Guarantee

All statistics, dates, grades, and credentials displayed across this portfolio are 100% grounded in K. Muralidharan's verified resume and academic records:
- **CGPA**: 8.3 (Dr. MCET Pollachi)
- **LeetCode**: 136 Solved (Username: `Murali_09`)
- **TCS CodeVita Season 13**: Global Rank 16,434
- **Internship**: Thiranx Data Analytics Intern (June 06 – July 05, 2026)
- **Official Resume PDF**: Downloadable at `/resume.pdf`
