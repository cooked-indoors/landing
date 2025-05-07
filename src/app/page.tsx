import LandingPage from "@/components";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";

// Generate static metadata for the home page
export const metadata: Metadata = generateMetadata(
  'Healthy Diet Plan | Reverse Diseases With Diet',
  'Get personalized meal plans and expert advice from our dietitians to help reverse diseases and improve your health with our scientifically-backed diet plans.',
  '/og-home.jpg'
);

export default function Home() {
  return (
    <>
      <LandingPage />
    </>
  );
}
