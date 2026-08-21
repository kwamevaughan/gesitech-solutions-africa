import type { Metadata } from "next";
import TermsContent from "@/features/terms/components/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions - Gesitech Solutions Africa",
  description:
    "Terms and conditions for Gesitech Solutions Africa LPG services, including warranties, liability, and service agreements for safe and reliable LPG solutions.",
  keywords:
    "LPG terms conditions, Gesitech warranty, LPG service agreement, EPRA compliance terms, LPG safety regulations Kenya",
  robots: { index: true, follow: true },
};

export default function Terms() {
  return <TermsContent />;
}
