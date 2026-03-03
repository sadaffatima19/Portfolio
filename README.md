# Sadaf Fatima — Portfolio
### BSc (Hons) Creative Computing · Class of 2026

A hand-crafted, fully animated personal portfolio built in **vanilla HTML, CSS, and JavaScript** — zero frameworks, zero dependencies (except Three.js for the 3D background). Designed and developed from scratch with a dark futuristic aesthetic, scroll-triggered animations, and a live Three.js particle field.

**Live Site →** [portfolio-kappa-steel-9nwgl6k8si.vercel.app](https://portfolio-kappa-steel-9nwgl6k8si.vercel.app)

---

## Features

- **Three.js 3D Background** — Live particle field with a wireframe torus knot and icosahedron, all responding to mouse parallax in real time
- **Custom Cursor** — Dot + trailing ring cursor with hover state transitions
- **Scroll Reveal Animations** — IntersectionObserver-powered entrance animations on every section
- **Project Filter** — Client-side filtering of projects by category (Design, Code, Client Work)
- **Skill Bars** — Animated progress bars that trigger when scrolled into view
- **Case Study** — Deep-dive into NEXUS with CSS-only lo-fi wireframes, user flow diagram, and system architecture visual
- **Testimonials** — Client and faculty testimonials with hover lift and gradient sweep animations
- **Blog Section** — Featured DocHub write-up with a pulsing badge, plus shorter articles with read times
- **Glitch Effect** — Hero name glitch animation on hover
- **Active Nav Highlight** — Navigation link colour updates as you scroll through sections
- **Email Copy** — Click to copy email address to clipboard
- **Fully Responsive** — Mobile-first breakpoints, hidden nav links on small screens

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (Custom Properties, Grid, Flexbox, Animations) |
| Logic | Vanilla JavaScript (ES6+) |
| 3D Graphics | Three.js r128 |
| Fonts | Google Fonts — Syne, Syne Mono, DM Sans |
| Deployment | Vercel |

No build tools. No bundlers. No frameworks. Just files.

---

## Project Structure

```
portfolio/
├── index.html          # All markup and section structure
├── styles.css          # All styling, animations, and responsive rules
├── script.js           # Three.js scene, cursor, scroll logic, interactions
├── Sadaf.jpeg          # Profile photo
├── Favicon.jpeg        # Browser tab icon
└── Sadaf_Fatima_CV.pdf # Downloadable CV
```

---

## Sections

| # | Section | Description |
|---|---|---|
| 01 | Hero | Name, tagline, CTA buttons, live stats, scroll indicator |
| 02 | About | Photo, bio, design philosophy, skill tags |
| 03 | Work | 6 projects with filter bar, thumbnails, overlays, and links |
| 04 | Case Study | Full NEXUS breakdown — wireframes, usability testing, iterations |
| 05 | Skills | Animated skill bars across three disciplines |
| 06 | Experience | Timeline of education and freelance work |
| 07 | Testimonials | Cards from Mondial Group, GoGifts, and university faculty |
| 08 | Blog | Featured DocHub article + three shorter pieces |
| 09 | Contact | Links to email, LinkedIn, GitHub, and CV download |

---

## Projects Featured

- **NEXUS** — Full-stack real-time chat app (Node.js, Socket.IO, MongoDB, JWT)
- **GoGifts** — MERN stack e-commerce platform with admin dashboard
- **MedCare** — Figma app prototype featured on university showcase
- **Mondial Group** — Client travel & tourism website
- **This Portfolio** — Vanilla JS, Three.js, zero frameworks
- **Nimbus** — Weather dashboard with glassmorphism UI and serverless API

---

## Running Locally

No build step required. Just open the file directly:

```bash
# Clone the repo
git clone https://github.com/sadaffatima19/portfolio.git

# Open in browser
open index.html
# or simply drag index.html into any browser
```

> Note: The Three.js library is loaded via CDN so an internet connection is needed for the 3D background to render.

---

## Design System

```css
--accent:   #00f5c4   /* Teal green — primary actions, highlights */
--accent2:  #7c5cfc   /* Purple — secondary tags, links */
--accent3:  #ff6b6b   /* Coral red — warnings, tertiary tags */
--bg:       #060810   /* Near-black page background */
--bg2:      #0c0f1a   /* Slightly lighter — alternating sections */
--surface:  #111422   /* Cards and elevated surfaces */
--text:     #e8eaf2   /* Primary text */
--muted:    #6b7280   /* Secondary / descriptive text */
```

Fonts: **Syne** (display headings) · **Syne Mono** (labels, tags, nav) · **DM Sans** (body text)

---
## 📄 License

All Rights Reserved

## Contact

**Sadaf Fatima**
- Email: fatimasadaf68@gmail.com
- LinkedIn: [linkedin.com/in/sadaf-fatima-268302291](https://www.linkedin.com/in/sadaf-fatima-268302291)
- GitHub: [github.com/sadaffatima19](https://github.com/sadaffatima19)

---

*Made with ❤️ and coffee · © 2026 Sadaf Fatima*