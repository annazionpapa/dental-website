# dental-website

치과의원 홈페이지 템플릿 - "미소플러스치과의원"

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Font**: Pretendard (CDN)
- **Deploy**: Vercel

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, treatments, stats, doctor, reviews, hours, location |
| About | `/about` | Greeting, history timeline, facilities |
| Team | `/team` | 4 doctor profiles, philosophy |
| Treatments | `/treatments` | 6 treatment categories with details |
| Cases | `/cases` | 12 case studies with category filter |
| Case Detail | `/cases/[id]` | Individual case detail with related cases |
| Contact | `/contact` | Reservation form, FAQ, location |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms of service |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

## Project Structure

```
src/
  app/           # Pages (App Router)
  components/    # Shared components (Header, Footer, etc.)
  data/          # Static data (treatments, cases)
public/
  images/        # Image placeholders (hero, team, facility, treatments)
```

## Features

- Responsive design (mobile-first)
- Scroll reveal animations
- Sticky header with scroll detection
- Mobile bottom CTA bar
- Category filter on cases page
- Dynamic case detail pages (SSG)
- SEO optimized (sitemap, robots.txt, OG tags)
- Medical disclaimer compliance
