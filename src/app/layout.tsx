import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SoraFont = Sora({
  variable: "--font-Sora",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Welcome!",
  description: "Portfolio.v3",
  icons: {
    icon: "/favicon.gif",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${SoraFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
