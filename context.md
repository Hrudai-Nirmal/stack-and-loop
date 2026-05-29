# Stack and Loop Context

## Project
Stack and Loop is a solo AI workflow automation consultancy for founders, operators, agencies, creators, and small-to-medium businesses. The website should feel premium, highly approachable, and clear about turning repetitive work into reliable AI-assisted systems.

## Current Plan
- Built a fresh Next.js App Router site with TypeScript, Tailwind, ESLint, npm, and Vercel deployment in mind.
- Launch routes: Home, Services, Process, Examples, Contact.
- Use a premium theme system inspired by Linear but distinct: crisp typography, subtle loop motif, low cognitive load, restrained motion, a warm stone/olive/brown light mode, and a black/white/teal-cyan dark mode.
- Current visual direction: monochrome landing hero parallax that settles into an interactive services grid, diagram-first service visuals, and a process flow that includes automation insights/dashboard visibility in Step 4.
- Process visual refinement: Step 1 uses interconnected task boxes, Step 2 uses a diagonal 3D agent surface, Step 3 uses a simple loop animation, and Step 4 uses an insights/metrics dashboard.
- Header keeps logo left with nav and `Send brief` grouped right at 64px height; homepage hides the footer; top-level section/page headings and descriptions are left-aligned and larger.
- Theme direction: add a light/dark mode switch on the right side of the header. Light mode uses `#2C3930`, `#3F4F44`, `#A27B5C`, and `#DCD7C9`; dark mode uses black, white, `#26CCC2`, and `#6AECE1` accents. The logo and theme switch stay neutral rather than accent-colored.
- Landing reform direction: remove the large landing-page loop visual, use an Aceternity-style hero parallax with custom monochrome workflow panels, avoid background spotlight effects, and use Magic UI Animated Beam in the homepage Process section to show AI coordinating multiple task streams for a human.
- AI beam visual direction: the task boxes rotate through 30 realistic automatable tasks/tools, 10 per input box, using a vertical lottery-reel transition rather than an instant swap. Use SVGL imports for available marks such as Gmail, Slack, Notion, Google Sheets, and Sanity; use lucide or small realistic-color custom SVGs for the rest.
- AI beam direction: task nodes and the AI workflow node send beams both ways to imply analysis and action loops; the Human review node receives one-way beams from the AI workflow only.
- Hero parallax direction: the landing parallax should be full-viewport rather than boxed, and should settle from angled 3D rows into a flatter 2D workflow grid as the user scrolls toward Services.
- Homepage services reform: the old separate Services section is removed from `/`; the hero parallax itself now becomes the services surface by flattening into an interactive fixed 2D workflow grid with selectable panels and a selected-detail readout.
- Latest landing polish: background spotlight effects are removed, landing/service hero type is reduced by about 15%, the services subheading is shortened to avoid grid overlap, and parallax cards are taller for stronger visual presence.
- Parallax card polish: workflow SVG diagrams are positioned in the upper visual area of each card so the description band no longer covers the diagrams.
- SVG visual fixes: Process Step 2 isometric agent blocks should sit cleanly on the same base plane, and the client delivery envelope uses a normal, less elongated envelope ratio.
- Process Step 2 refinement: remove the isometric base/crease plane entirely and center-align the chip-topped module boxes as the focal visual.
- Process Step 2 accenting: only the processor/chip elements on the tops of the module boxes should use the accent color.
- Copy voice: clear, calm, confident, human, and low-jargon.
- Brand: refined Stack and Loop wordmark plus a subtle loop motif.
- GitHub repository: `https://github.com/Hrudai-Nirmal/stack-and-loop.git`.
- Commit and push workspace changes after implementation work so Vercel can deploy from GitHub.

## Contact Form
- Fields: name, email, company/project, automation goal, tools used, timeline, optional budget range, notes.
- Submit to `POST /api/project-brief`.
- Send notification email to the site owner via Resend.
- Show an on-page acknowledgement only; no auto-reply in v1.
- Required env vars: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `NEXT_PUBLIC_SITE_URL`.
- The Resend API key will be configured in Vercel environment variables, not committed locally.
- Vercel Web Analytics is included, with a project brief submitted event fired from the client after a successful response.

## Notes
- Maintain this file as the project evolves.
- Do not add fake metrics, fake logos, fake testimonials, fake awards, pricing, or named case studies.
