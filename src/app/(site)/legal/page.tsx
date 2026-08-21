import type { Metadata } from "next";
import LegalContent from "@/features/legal/components/LegalContent";

export const metadata: Metadata = {
  title: "Terms & Privacy - Gesitech Solutions Africa",
  description:
    "Terms and conditions and privacy policy for Gesitech Solutions Africa LPG services, including warranties, liability, data protection, and service agreements.",
  keywords:
    "LPG terms conditions, Gesitech warranty, LPG service agreement, EPRA compliance terms, LPG safety regulations Kenya, Gesitech privacy policy, data protection Kenya, GDPR compliance Africa",
  robots: { index: true, follow: true },
};

export default function Legal() {
  return <LegalContent />;
}
