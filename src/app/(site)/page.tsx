import type { Metadata } from "next";
import HomeContent from "@/features/home/components/HomeContent";

export const metadata: Metadata = {
  title: "Gesitech Solutions Africa | Safe, Reliable LPG Solutions Across Africa",
  description:
    "Trusted LPG solutions provider in Africa since 2017. We deliver world-class LPG accessories, plant installations, and maintenance services that drive growth, protect communities, and support a cleaner energy future.",
  keywords:
    "LPG solutions Africa, LPG accessories Kenya, LPG plant installation, LPG maintenance services, EPRA licensed LPG, ISO certified LPG services, Nairobi LPG solutions, sustainable energy Africa",
};

export default function Home() {
  return <HomeContent />;
}
