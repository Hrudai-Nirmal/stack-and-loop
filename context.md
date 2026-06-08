# Stack and Loop Context

## Project
Stack and Loop is a solo AI workflow automation consultancy for small teams, agencies, and operators. The website should feel premium, highly approachable, and clear about turning repetitive work into reliable AI-assisted systems.

## Current Plan
- Built a fresh Next.js App Router site with TypeScript, Tailwind, ESLint, npm, and Vercel deployment in mind.
- Launch routes: Home, Services, Process, Examples, About, Contact.
- Use a premium theme system inspired by Linear but distinct: crisp typography, subtle loop motif, low cognitive load, restrained motion, a warm stone/olive/brown light mode, and a black/white/teal-cyan dark mode.
- Current visual direction: monochrome landing hero parallax that settles into an interactive services grid, diagram-first service visuals, and a process flow that includes automation insights/dashboard visibility in Step 4.
- Process visual refinement: Step 1 uses interconnected task boxes, Step 2 uses a diagonal 3D agent surface, Step 3 uses a simple loop animation, and Step 4 uses an insights/metrics dashboard.
- Header keeps logo left with nav and `Send brief` grouped right at 64px height; homepage hides the footer; top-level section/page headings and descriptions are left-aligned and larger.
- Theme direction: add a light/dark mode switch on the right side of the header. Light mode uses `#2C3930`, `#3F4F44`, `#A27B5C`, and `#DCD7C9`; dark mode uses black, white, `#26CCC2`, and `#6AECE1` accents. The logo and theme switch stay neutral rather than accent-colored.
- Landing reform direction: remove the large landing-page loop visual, use an Aceternity-style hero parallax with custom monochrome workflow panels, avoid background spotlight effects, and use Magic UI Animated Beam in the homepage Process section to show AI coordinating multiple task streams for a human.
- AI beam visual direction: the task boxes rotate through 30 realistic automatable tasks/tools, 10 per input box, using a vertical lottery-reel transition rather than an instant swap. Use SVGL imports for available marks such as Gmail, Slack, Notion, Google Sheets, and Sanity; use lucide or small realistic-color custom SVGs for the rest.
- AI beam direction: task nodes and the AI workflow node send beams both ways to imply analysis and action loops; the Human review node receives one-way beams from the AI workflow only.
- AI beam interaction: the box starts with a Human operator node in the center and 10 surrounding task nodes connected by bidirectional beams. The top-right `Automate` button fades into a slower `Automating workflow` transition with the progressive steps `Gathering the Pieces`, `Figuring out the Plan`, and `Making the Move`, then shows the automated AI workflow. In automated mode, five task boxes rotate through six tasks each and the button reads `Manualise`; clicking it fades back to manual mode.
- Hero parallax direction: the landing parallax should be full-viewport rather than boxed, and should settle from angled 3D rows into a flatter 2D workflow grid as the user scrolls toward Services.
- Homepage services reform: the old separate Services section is removed from `/`; the hero parallax itself now becomes the services surface by flattening into an interactive fixed 2D workflow grid with selectable panels and a selected-detail readout.
- Responsive rule: preserve the desktop composition as the visual baseline, but simplify dense motion/diagram surfaces on phones. The landing hero uses a shorter mobile scroll transition and a stable 2D workflow grid below `md`, while tablet/desktop keep the 3D parallax-to-grid behavior.
- Responsive QA targets: verify `360x800`, `390x844`, `768x1024`, `1024x768`, `1366x900`, and `1440x1000` across `/`, `/services`, `/process`, `/examples`, and `/contact`; acceptance means no horizontal overflow, no clipped/overlapping text, usable header controls, aligned contact fields, and working beam mode toggles.
- Responsive typography rule: top-level landing, page, and section headings should use bounded responsive sizing rather than fixed oversized mobile/tablet sizes. Keep headings left-aligned with max widths.
- AI beam responsive rule: keep the full beam-node map on tablet/desktop; use a compact stacked mobile presentation without cramped absolute-positioned nodes.
- Latest landing polish: background spotlight effects are removed, landing/service hero type is reduced by about 15%, the services subheading is shortened to avoid grid overlap, and parallax cards are taller for stronger visual presence.
- Parallax card polish: workflow SVG diagrams are positioned in the upper visual area of each card so the description band no longer covers the diagrams.
- SVG visual fixes: Process Step 2 isometric agent blocks should sit cleanly on the same base plane, and the client delivery envelope uses a normal, less elongated envelope ratio.
- Process Step 2 refinement: remove the isometric base/crease plane entirely and center-align the chip-topped module boxes as the focal visual.
- Process Step 2 accenting: only the processor/chip elements on the tops of the module boxes should use the accent color.
- Copy voice: clear, calm, confident, human, and low-jargon.
- Brand: refined Stack and Loop wordmark plus a subtle loop motif.
- Founder/trust layer: public founder is Hrudai Nirmal, AI Workflow Designer, based in Bangalore, India. Positioning line: "Helping small teams turn repetitive work into reliable systems." Bio line: "I design AI workflows that take the repetitive work off your team's plate." LinkedIn: `https://www.linkedin.com/in/hrudai-nirmal-0b589b1b8`.
- Conversion direction: keep `Send project brief` as the primary CTA, and support lower-friction paths for booking a call/meeting, viewing a sample workflow breakdown, and connecting on LinkedIn. The homepage hero should stay simple with one `Contact` button. `NEXT_PUBLIC_CALENDLY_URL` is optional; when absent, booking links fall back to `/contact`.
- Contact page direction: show four contact options (`Send project brief`, `Book a call/meeting`, `See sample breakdown`, `Connect on LinkedIn`) and switch the displayed panel based on the selected option. The brief option shows the project brief form; the call/meeting option embeds Calendly when configured and otherwise shows a polished fallback.
- Services page direction: the post-hero visual should show concrete typical SMB automation services rather than the old abstract `Inputs -> Routing -> Human review -> Automated output` diagram.
- Process page direction: below the process cards, include one or two detailed code-native example flowcharts for realistic project workflows.
- Pricing direction: show a public starting signal for workflow audits at `₹15,000 / $160`, with USD based on the planning conversion `1 USD = ₹95`. Contact budget ranges default to INR with a UI toggle for USD.
- Examples direction: `/examples` must provide deeper anonymized workflow breakdowns than the homepage cards, using pain, workflow, tools involved, expected outcome, and handoff. Do not present them as named case studies.
- FAQ direction: include practical buyer objections around existing tools, non-technical maintenance, sensitive data, support after delivery, and project timelines.
- Domain note: keep the production domain as `stackandloop.hrudainirmal.in` for now.
- GitHub repository: `https://github.com/Hrudai-Nirmal/stack-and-loop.git`.
- Commit and push workspace changes after implementation work so Vercel can deploy from GitHub.

## Contact Form
- Fields: name, email, company/project, automation goal, tools used, timeline, optional budget range, notes.
- Budget range defaults to INR and can be switched to USD; the submitted value includes the selected currency.
- Submit to `POST /api/project-brief`.
- Send notification email to the site owner via Resend.
- Show an on-page acknowledgement only; no auto-reply in v1.
- Required env vars: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `NEXT_PUBLIC_SITE_URL`.
- Optional env var: `NEXT_PUBLIC_CALENDLY_URL` for the workflow chat CTA.
- The Resend API key will be configured in Vercel environment variables, not committed locally.
- Vercel Web Analytics is included, with a project brief submitted event fired from the client after a successful response.

## Notes
- Maintain this file as the project evolves.
- Do not add fake metrics, fake logos, fake testimonials, fake awards, pricing, or named case studies.
