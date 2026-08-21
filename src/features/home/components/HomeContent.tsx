"use client";

import { useState } from "react";
import Hero from "./Hero";
import About from "./About";
import MissionVision from "./MissionVision";
import CoreValues from "./CoreValues";
import WhatWeDo from "./WhatWeDo";
import Products from "./Products";
import Platform from "./Platform";
import GrowthStory from "./GrowthStory";
import TeamSection from "./TeamSection";
import Certifications from "./Certifications";
import Partners from "./Partners";
import ContactModal from "@/shared/components/ContactModal";
import * as gtag from "@/shared/lib/gtag";

export default function HomeContent() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
    gtag.trackContactModalOpen();
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <>
      <Hero onOpenContact={openContactModal} />
      <About onOpenContact={openContactModal} />
      <MissionVision />
      <CoreValues />
      <WhatWeDo />
      <Products />
      <Platform />
      <GrowthStory />
      <TeamSection />
      <Certifications />
      <Partners />

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
}
