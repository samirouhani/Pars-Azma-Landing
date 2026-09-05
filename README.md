# Pars Azma - Corporate Landing Page

A modern, responsive front-end landing page developed for **Pars Azma Co.**, a knowledge-based manufacturer of specialized laboratory, medical, and environmental testing equipment. 

Built with Next.js (App Router), TypeScript, and Tailwind CSS, this project modernizes the company's digital presence with a modular component architecture, fast load times, and fluid cross-device responsiveness.

---

## Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Typography:** `next/font/google` (Wittgenstein & Geist)
* **Icons & Assets:** Optimized Inline SVGs

---

## Features & Sections

* **Hero & Quality Assurance:** Clear value proposition highlighting ISO 9001/9002 certifications with primary CTAs and instant communication endpoints.
* **Product Catalog Preview:** Multi-tier responsive grid (2-column mobile to 4-column desktop) with hover interactions and accessible link structures.
* **Manufacturing Facilities Marquee:** Continuous, infinite CSS marquee (`animate-marquee`) showcasing production units with pause-on-hover support.
* **Automated Testimonials Carousel:** Client-side endorsement slider utilizing React lifecycle hooks (`useState`, `useEffect`, `useCallback`) with timed autoplay.
* **Technical Articles Feed:** Hybrid horizontal snap-scrolling feed driven programmatically via React `useRef`.
* **Interactive FAQ Accordion:** Asymmetric 12-column layout featuring an anchored sticky header and isolated collapsible drawers.
* **Multi-Tier Corporate Footer:** Comprehensive communication matrix with clickable `tel:` links, administrative and factory addresses, and social channels.

---

## Getting Started

### Prerequisites

Ensure you have **Node.js 18+** installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/pars-azma-landing.git](https://github.com/your-username/pars-azma-landing.git)
   cd pars-azma-landing
2. Install dependencies:
   ```bash
   pnpm install
3. Run the development server:
   ```bash
   pnpm dev
4. Open http://localhost:3000 in your browser to inspect the landing page.

---

## Project Structure

```
├── app/
│   ├── layout.tsx         # Root application shell & global fonts
│   ├── page.tsx           # Main landing page entry
│   └── ui/
│       ├── common/        # Reusable UI elements (Buttons, Cards, RevealOnScroll)
│       ├── home/          # Homepage sections (Hero, FAQ, Testimonials, etc.)
│       └── layout/        # Global layout components (Navbar, Footer)
├── public/                # Static assets, branding, and imagery
└── tailwind.config.ts     # Styling design tokens and breakpoints
```

---

## Academic Context
This project was developed as part of the mandatory engineering internship curriculum at Yıldız Technical University.
