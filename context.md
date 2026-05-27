# Stack and Loop Context

## Project
Stack and Loop is a solo AI workflow automation consultancy for founders, operators, agencies, creators, and small-to-medium businesses. The website should feel premium, highly approachable, and clear about turning repetitive work into reliable AI-assisted systems.

## Current Plan
- Built a fresh Next.js App Router site with TypeScript, Tailwind, ESLint, npm, and Vercel deployment in mind.
- Launch routes: Home, Services, Process, Examples, Contact.
- Use a kinetic minimal design inspired by Linear but distinct: deep graphite background, crisp typography, subtle loop motif, restrained accent, low cognitive load, and precise motion.
- Visual upgrade direction: animated workflow loop with a moving glowing pointer, diagram-first service cards, and a process flow that includes automation insights/dashboard visibility in Step 4.
- Process visual refinement: Step 1 uses interconnected task boxes, Step 2 uses a diagonal 3D agent surface, Step 3 uses a simple loop animation, and Step 4 uses an insights/metrics dashboard.
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
