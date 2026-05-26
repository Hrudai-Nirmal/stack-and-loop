import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://stackandloop.com",
  ),
  title: {
    default: "Stack and Loop | AI Workflow Automation Consultancy",
    template: "%s | Stack and Loop",
  },
  description:
    "Stack and Loop designs AI-assisted workflows that turn repetitive work into reliable systems for founders, operators, agencies, and creators.",
  openGraph: {
    title: "Stack and Loop",
    description:
      "Smarter systems. Less busywork. AI workflow automation for practical teams.",
    url: "/",
    siteName: "Stack and Loop",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
