import type { Metadata } from "next";
import PrivacyContent from "@/features/privacy/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy - Gesitech Solutions Africa",
  description:
    "Privacy policy for Gesitech Solutions Africa. Learn how we collect, use, and protect your personal information and data when using our LPG services.",
  keywords:
    "Gesitech privacy policy, data protection Kenya, LPG services privacy, personal information security, GDPR compliance Africa",
  robots: { index: true, follow: true },
};

export default function Privacy() {
  return <PrivacyContent />;
}
