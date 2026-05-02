# True Orbit Bookkeeping Project

## Directory Overview
This directory serves as the primary workspace for **True Orbit Bookkeeping LLC**, a professional bookkeeping service dedicated to helping small businesses achieve financial clarity. The project is currently in the initial branding and asset collection phase, transitioning to a dynamic Next.js web application.

## Key Files
- **195331679_padded_logo.png**: The primary company logo. It features a luxury black and gold aesthetic, which serves as the foundational color palette for all digital assets.
- **GEMINI.md**: This file, providing instructional context and project mapping for Gemini CLI.

## Project Context
- **Company Email**: info@trueorbitbookkeeing.com
- **Owner/GitHub Email**: ddanielcottiolson@outlook.com
- **Primary Aesthetic**: High-end professional (Black and Gold).

## Services & Pricing Model
- **Core Orbit ($299/mo)**: Basic monthly bookkeeping for solopreneurs.
- **Professional Clarity ($599/mo)**: Weekly updates and strategy for growing businesses.
- **Elite Advisory ($1,200+/mo)**: Full financial controller and forecasting services.

## Project Status
- **Branding**: Logo and company name layout redesigned for a high-end professional look. Logo is now larger with a custom background, and the company name spans the full width of the header. Tagline "Elite Financial Management" positioned at the bottom of the banner to ensure correct hierarchy.
- **Visuals**: Founder photo (Daniel4.jpg) restored to the About section, resized by 60% for a cleaner, high-end professional look.
- **Redundancy**: Removed duplicate company name and moved "Elite Financial Management" to the top banner.

## Roadmap
1. **Design System**: Established Tailwind CSS configuration based on the logo's color palette (Black, Gold, Luxury Indigo).
2. **Website Implementation**: Core layout and sections (Hero, Services, About, Pricing, Contact) implemented.
3. **Refinement**: UI/UX adjustments based on owner feedback (Logo placement, sizing, photo updates).
4. **Deployment**: Host the project via the owner's GitHub account.

## Maintenance & Procedures

### Resizing Images (e.g., Daniel4.jpg)
To reduce image size by 60% (leaving 40% of original dimensions) and maintain performance:
1. **Code Adjustment**: In `src/app/page.tsx`, wrap the `Image` component in a container with defined Tailwind dimensions (e.g., `w-24 h-32` for a 60% reduction from a `w-64` baseline).
2. **File Optimization**: Use ImageMagick to resize the physical file:
   ```bash
   convert public/Daniel4.jpg -resize 40% public/Daniel4.jpg
   ```
3. **Deployment**: Commit and push changes to GitHub to trigger the Vercel auto-deployment:
   ```bash
   git add .
   git commit -m "style: resize image and update layout"
   git push origin main
   ```

### Critical Steps for Activation
- Ensure all changes are committed to the `main` branch.
- Push to `origin main` to sync with GitHub.
- Vercel is configured to watch the `main` branch and will deploy automatically upon push.
