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
- **Branding**: Redundant company name text removed from the header to clean up the UI; the primary logo now stands alone as the lead visual. Tagline "Elite Financial Management" remains positioned at the bottom of the banner for a clean hierarchy.
- **Visuals**: Founder photo (Daniel4.jpg) restored using a **Strict Framing** strategy (max 400px container) to prevent it from spanning the full width of the page while maintaining high resolution.
- **Redundancy**: Eliminated duplicate text underneath the logo.

## Roadmap
1. **Design System**: Established Tailwind CSS configuration based on the logo's color palette (Black, Gold, Luxury Indigo).
2. **Website Implementation**: Core layout and sections (Hero, Services, About, Pricing, Contact) implemented.
3. **Refinement**: UI/UX adjustments based on owner feedback (Logo placement, sizing, photo updates).
4. **Deployment**: Host the project via the owner's GitHub account.

## Maintenance & Procedures

### Image Handling: Strict Framing
To control the size of a photo (like `Daniel4.jpg`) without degrading its quality through file-level resizing:
1. **Container-First Approach**: Wrap the Next.js `Image` in a `div` with a defined `max-width` (e.g., `max-w-[400px]`) and an `aspect-ratio` (e.g., `aspect-[4/5]`).
2. **Implementation**:
   ```tsx
   <div className="relative w-full max-w-[400px] aspect-[4/5]">
     <Image src="/Daniel4.jpg" fill className="object-cover" priority />
   </div>
   ```
3. **Benefit**: This keeps the image sharp and high-resolution while ensuring it never expands to fill the entire horizontal space of the page.

### Critical Steps for Activation
- Ensure all changes are committed to the `main` branch.
- Push to `origin main` to sync with GitHub.
- Vercel is configured to watch the `main` branch and will deploy automatically upon push.
