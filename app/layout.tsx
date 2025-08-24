import type React from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Go Productive Space - Premium Coworking in Noida | Private Offices & Virtual Office Plans",
  description:
    "Premium coworking space in Spectrum Mall, Noida. Private offices, virtual office plans, and flexible coworking from ₹500/day. High-speed internet, ergonomic seating, metro connectivity.",
  keywords:
    "coworking space noida, private office noida, virtual office noida, spectrum mall coworking, flexible workspace, office rental noida",
  generator: "v0.app",
  openGraph: {
    title: "Go Productive Space - Premium Coworking in Noida",
    description:
      "Premium coworking space in Spectrum Mall, Noida. Private offices, virtual office plans, and flexible coworking solutions.",
    url: "https://goproductivespace.com",
    siteName: "Go Productive Space",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Go Productive Space - Premium Coworking in Noida",
    description:
      "Premium coworking space in Spectrum Mall, Noida. Private offices, virtual office plans, and flexible coworking solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
