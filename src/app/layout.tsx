import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { baseMetadata, baseOpenGraph, baseTwitter } from "@/lib/metadata";
import MetadataProvider from "@/components/meta/MetadataProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'Healthy Diet Plan | Reverse Diseases With Diet',
  description: 'Get personalized meal plans and expert advice from our dietitians to help reverse diseases and improve your health with our scientifically-backed diet plans.',
  openGraph: {
    ...baseOpenGraph,
    title: 'Healthy Diet Plan | Reverse Diseases With Diet',
    description: 'Get personalized meal plans and expert advice from our dietitians to help reverse diseases and improve your health with our scientifically-backed diet plans.',
  },
  twitter: {
    ...baseTwitter,
    title: 'Healthy Diet Plan | Reverse Diseases With Diet',
    description: 'Get personalized meal plans and expert advice from our dietitians to help reverse diseases and improve your health with our scientifically-backed diet plans.',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <MetadataProvider
          title="Healthy Diet Plan"
          description="Reverse Diseases With a Simple Diet Plan - Get personalized meal plans and expert advice from our dietitians."
        />
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
