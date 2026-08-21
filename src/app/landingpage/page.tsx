import type { Metadata } from "next";
import LandingPageContent from "@/features/landingpage/components/LandingPageContent";

export const metadata: Metadata = {
  title: "Gesitech Solutions Africa",
  robots: { index: false, follow: false },
};

export default function LandingPage() {
  return <LandingPageContent />;
}
