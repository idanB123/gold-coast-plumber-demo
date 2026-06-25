import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ChatbaseWidget } from "@/components/chatbase-widget";

export const metadata: Metadata = {
  title: "Harbor Flow Plumbing | Gold Coast plumber demo",
  description:
    "Premium Gold Coast plumber demo site built with Next.js, premium typography, smooth motion, Netlify Forms markup, Cal.com booking embed, and a live chatbot placeholder.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Harbor Flow Plumbing | Gold Coast plumber demo",
    description:
      "Premium, conversion-first local service website demo for a Gold Coast plumber.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-stone-950 text-stone-100">
        <SmoothScroll />
        {children}
        <ChatbaseWidget />
      </body>
    </html>
  );
}
