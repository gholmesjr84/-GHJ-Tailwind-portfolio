# GHJ Artist Portfolio — React + Tailwind 🎨

[![Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

A modern, responsive portfolio site for **Greg Holmes Jr**, built with **React + Vite + Tailwind CSS**.  
Mobile-first, dark/light theme toggle, accessible navigation, and commission tiers powered by JSON content.

---

## ✨ Features
- 🎨 **Retro-inspired branding** — Shrikhand (headlines) + Raleway (body)
- 🌗 **Dark/Light theme toggle** (press `t`)
- ♿ **Accessible navigation** — ARIA labels, skip links, keyboard shortcuts (`/` search, Alt+G/S/C jumps)
- 📂 **Easy content editing** in `src/content/site.json`
- 🖼️ **Gallery with lightbox** (placeholders → swap for your art)
- 💵 **Commission tiers** with pricing cards
- 📱 **Mobile-first design** with responsive layout

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) (comes with Node)

### Install & Run
```bash
# Install dependencies
npm install

# Run development server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

📂 Project Structure

ghj-artist-portfolio-tailwind/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── index.css        # Tailwind + custom utilities
│   ├── main.jsx         # Entry point
│   ├── App.jsx          # Layout shell
│   ├── content/
│   │   └── site.json    # 🔥 Edit content, gallery, pricing here
│   └── components/      # Each section as a React component
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Gallery.jsx
│       ├── Services.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
