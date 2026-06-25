import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ChatbaseWidget } from "@/components/chatbase-widget";

export const metadata: Metadata = {
  title: "Harbor Flow Plumbing | Gold Coast Plumber",
  description:
    "Harbor Flow Plumbing delivers blocked drain repairs, hot water service, leak detection, gas fitting and emergency plumbing across the Gold Coast.",
  metadataBase: new URL("https://verdant-phoenix-125e53.netlify.app"),
  openGraph: {
    title: "Harbor Flow Plumbing | Gold Coast Plumber",
    description:
      "Reliable Gold Coast plumbing for blocked drains, hot water, leaks, gas and urgent callouts.",
    type: "website",
    url: "https://verdant-phoenix-125e53.netlify.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <SmoothScroll />
        {children}
        <ChatbaseWidget />
      </body>
    </html>
  );
}
