# Stack and Loop

Premium portfolio website for Stack and Loop, a solo AI workflow automation consultancy.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Resend for project brief emails
- Vercel Web Analytics

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and configure:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

The contact form sends project briefs to `CONTACT_TO_EMAIL` and shows an on-page acknowledgement only.
