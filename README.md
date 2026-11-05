# Harshit Kumar – Professional Developer Portfolio

A modern, high-performance, responsive single-page portfolio website engineered for **Harshit Kumar** (Full Stack Developer / Software Engineer) using **React 19**, **JavaScript (ES6+)**, **Vite**, **Tailwind CSS 4**, and **Motion**.

Designed specifically for hiring managers, recruiters, and engineering leads to showcase real-world enterprise SaaS experience, core technical competencies, and battle-tested architectural skills.

---

## 🌟 Key Highlights & Features

- **Dark & Light Themes**: Bespoke dark charcoal/obsidian palette (`#090d16`) with purple (`#8b5cf6`) and mint (`#10b981`) gradient accents. Persists theme preference seamlessly in `localStorage` with zero-flicker loading.
- **Production Experience Showcase**: Detailed breakdown of engineering contributions at **Appfoster** (Multi-tenant HRMS SaaS, tenant-scoped data isolation, 90% database query latency optimization, automated subscription lifecycles, and localized Gemini AI templating) and **Anyintech** (Spring Boot layered backend & Render CI/CD).
- **Interactive Project Showcase**:
  - Filter by *All*, *Featured*, *Enterprise SaaS*, and *Open Source*.
  - Comprehensive **Architecture Modal** with challenge decomposition, technical decisions, and impact metrics.
  - Transparent badges for proprietary enterprise production codebases and open-source repositories.
- **Categorized Skills Matrix**: Clean categorization across Frontend, Backend, Database, and AI/Tools with interactive tab filters and Font Awesome icons. (No fake percentage bars).
- **Contact Form with Dual-Mode Delivery**:
  - Integrated with **EmailJS** using Vite environment variables.
  - Automatic fallback to standard `mailto:` client if API credentials are not yet configured.
  - Full client-side validation for name, email, subject, and message.
- **Performance & Accessibility**:
  - Motion scroll reveal animations with `@media (prefers-reduced-motion: reduce)` support.
  - Semantic HTML5 structure and ARIA attributes for screen readers and keyboard navigation.
  - Responsive mobile drawer navigation with backdrop blur.
  - Embedded authentic resume download (`/resume.pdf`).
  - Rich Open Graph and SEO meta tags.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Language** | JavaScript ES6+ (*Zero TypeScript as requested*) |
| **Build Tool** | [Vite 6](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) (`@tailwindcss/vite`) |
| **Animations** | [Motion / Framer Motion](https://motion.dev/) |
| **Icons** | [Font Awesome 6 Free CDN](https://fontawesome.com/) (*No bloated icon packages*) |
| **Form Service** | [@emailjs/browser](https://www.emailjs.com/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

```
├── public/
│   ├── favicon.svg          # Custom SVG monogram favicon (HK)
│   ├── resume.html          # Clean HTML resume template
│   └── resume.pdf           # Authentic downloadable PDF resume
├── src/
│   ├── assets/              # Static assets
│   ├── components/
│   │   ├── Footer.jsx       # Global footer with social links & back-to-top
│   │   ├── Navbar.jsx       # Sticky glassmorphism header & mobile drawer
│   │   ├── ProjectCard.jsx  # Card layout with tags, metrics & architecture modal trigger
│   │   ├── ScrollToTop.jsx  # Floating button appearing on scroll
│   │   ├── SectionHeading.jsx # Reusable section title with badge & gradient bar
│   │   ├── SkillCard.jsx    # Skill cards with Font Awesome icons
│   │   └── ThemeToggle.jsx  # Dark/Light toggle with smooth rotation animation
│   ├── data/
│   │   ├── experience.js    # Work experience records & key contributions
│   │   ├── personal.js      # Centralized contact, bio, education, & certifications
│   │   ├── projects.js      # Project records, metrics, features, & repository URLs
│   │   └── skills.js        # Categorized skill taxonomy & icon mappings
│   ├── hooks/
│   │   └── useTheme.js      # Custom theme hook with localStorage & system preference
│   ├── sections/
│   │   ├── About.jsx        # Professional narrative, stats, education & certifications
│   │   ├── Contact.jsx      # Validated contact form & direct reach channels
│   │   ├── Experience.jsx   # Timeline of full-time and internship software engineering roles
│   │   ├── Hero.jsx         # Animated headline, availability badge, code terminal & CTAs
│   │   ├── Projects.jsx     # Filterable projects grid & detailed architecture modal
│   │   └── Skills.jsx       # Filterable technical competencies
│   ├── App.jsx              # Root application layout
│   ├── index.css            # Tailwind CSS 4 theme tokens, glassmorphism & custom scrollbars
│   └── main.jsx             # React 19 entry point
├── .env.example             # Template for optional EmailJS environment variables
├── .gitignore               # Git ignore rules for node_modules, dist, logs & env
├── index.html               # Semantic HTML shell, SEO metadata & Font Awesome CDN
├── package.json             # NPM dependencies & build scripts
└── vite.config.js           # Vite configuration with React & Tailwind 4 plugins
```

---

## 💻 Local Development Setup

### Prerequisites
- Node.js `20.x` or higher (Node 18.20+ with native oxide package supported)
- npm `10.x` or higher

### 1. Clone the repository
```bash
git clone https://github.com/HarshitSingh05/harshit-kumar-portfolio.git
cd harshit-kumar-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables (Optional)
To enable real-time EmailJS contact form submissions:
```bash
cp .env.example .env
```
Fill in your credentials from the [EmailJS Dashboard](https://dashboard.emailjs.com/):
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
*(If omitted, the contact form automatically falls back to your local email client via `mailto:` with pre-populated fields).*

### 4. Start local development server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 5. Build for production
```bash
npm run build
```
The compiled, production-ready static assets will be output to the `dist/` directory.

### 6. Preview production build locally
```bash
npm run preview
```

---

## 🚀 Deployment to Vercel

The portfolio is fully configured for zero-configuration deployment to [Vercel](https://vercel.com).

### Option A: Via GitHub (Recommended)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of Harshit Kumar developer portfolio"
   git branch -M main
   git remote add origin https://github.com/HarshitSingh05/harshit-kumar-portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the `harshit-kumar-portfolio` repository.
4. Keep the default settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. *(Optional)* Add your EmailJS environment variables in the **Environment Variables** section:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
6. Click **"Deploy"**. Your portfolio will be live with free SSL on `https://your-project.vercel.app`!

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the interactive prompts and choose default Vite settings.

---

## 📄 License & Attribution

Designed and engineered for **Harshit Kumar**.  
Open for personal and professional use.

