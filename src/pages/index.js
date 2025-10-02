import { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Header from "../layouts/header";
import Timeline from "../components/Timeline";
import TeamMembers from "@/components/TeamMembers";
import Footer from "../layouts/footer";
import ScrollToTop from "../components/ScrollToTop";
import ContactModal from "../components/ContactModal";
import SEO from "../components/SEO";
import * as gtag from "../utils/gtag";
import Link from "next/link";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openContactModal = () => {
    setIsContactModalOpen(true);
    gtag.trackContactModalOpen();
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  if (!mounted) return null;

  return (
    <>
      <SEO 
        title="Gesitech Solutions Africa | Safe, Reliable LPG Solutions Across Africa"
        description="Trusted LPG solutions provider in Africa since 2017. We deliver world-class LPG accessories, plant installations, and maintenance services that drive growth, protect communities, and support a cleaner energy future."
        keywords="LPG solutions Africa, LPG accessories Kenya, LPG plant installation, LPG maintenance services, EPRA licensed LPG, ISO certified LPG services, Nairobi LPG solutions, sustainable energy Africa"
      />
      
      <div className="min-h-screen relative overflow-hidden mx-auto">
        {/* Header */}
        <Header />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <section id="home" className="bg-gesitech-blue/10 pt-32 pb-16 px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
            <div className="flex flex-col items-start justify-center lg:w-1/2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gesitech-blue mb-6 lg:mb-8 text-center lg:text-left">
                Powering Africa with Safe, Reliable, and Sustainable LPG
                Solutions
              </h2>
              <p className="text-gray-500 text-base lg:text-lg text-center lg:text-left">
                Trusted since 2017, Gesitech Solutions Africa delivers
                world-class LPG accessories, plant installations, and
                maintenance services that drive growth, protect communities, and
                support a cleaner energy future.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6 lg:mt-8 w-full">
                <Link href="#what-we-do">
                  <button className="bg-gradient-to-r from-gesitech-green to-gesitech-blue hover:bg-gesitech-blue hover:-translate-y-1 transition-all duration-300 text-white px-6 py-3 rounded-xl text-base lg:text-lg cursor-pointer w-full sm:w-auto">
                    Explore Our Services
                  </button>
                </Link>
                <button
                  onClick={openContactModal}
                  className="bg-white hover:bg-gesitech-blue hover:text-white transition-all duration-300 hover:-translate-y-1 border border-gesitech-blue text-gesitech-blue px-6 py-3 rounded-xl text-base lg:text-lg cursor-pointer w-full sm:w-auto"
                >
                  Get Quote
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 mt-6 lg:mt-8">
                <span className="text-gesitech-gray font-semibold flex items-center gap-2 text-sm lg:text-md">
                  <Icon
                    icon="mdi:circle"
                    className="text-gesitech-green text-xl lg:text-2xl"
                  />
                  EPRA & ISO Certified
                </span>
                <span className="text-gesitech-gray font-semibold flex items-center gap-2 text-sm lg:text-md">
                  <Icon
                    icon="mdi:circle"
                    className="text-gesitech-green text-xl lg:text-2xl"
                  />
                  Turnkey Delivery
                </span>
                <span className="text-gesitech-gray font-semibold flex items-center gap-2 text-sm lg:text-md">
                  <Icon
                    icon="mdi:circle"
                    className="text-gesitech-green text-xl lg:text-2xl"
                  />
                  Trusted Since 2017
                </span>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center lg:w-1/2 mt-8 lg:mt-0">
              <Image
                src="/assets/images/header-img.png"
                alt="Gesitech Solutions Africa"
                width={1000}
                height={100}
                className="hover:skew-y-1 hover:shadow-2xl transition-all duration-300 rounded-2xl w-full max-w-lg"
              />
            </div>
          </div>
        </section>

        <section id="about" className="bg-gesitech-green/10 pt-20 pb-20 px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
            <div className="flex flex-row items-center justify-center lg:w-1/2 order-2 lg:order-1">
              <Image
                src="/assets/images/whoweare.png"
                alt="Gesitech Solutions Africa"
                width={1000}
                height={100}
                className="hover:skew-y-1 hover:shadow-2xl transition-all duration-300 rounded-2xl w-full max-w-lg"
              />
            </div>

            <div className="flex flex-col items-start justify-center lg:w-1/2 order-1 lg:order-2">
              <div className="flex flex-row items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-8">
                <Image
                  src="/assets/images/leaf.svg"
                  alt="Who we are"
                  width={30}
                  height={0}
                  className="transition-all duration-300"
                />
                <h2 className="text-3xl lg:text-4xl font-bold text-gesitech-blue text-center lg:text-left">
                  Who We Are
                </h2>
              </div>
              <p className="text-gray-500 text-base lg:text-lg text-center lg:text-left">
                Since 2017, Gesitech Solutions Africa has been at the forefront
                of safe, reliable, and sustainable LPG solutions. We partner
                with businesses, industries, and communities to deliver
                innovation, safety, and efficiency that power growth and protect
                people and the environment. Our skilled professionals combine
                technical expertise with hands-on experience, ensuring every
                project exceeds expectations and complies with international
                standards.
              </p>
              <div className="flex flex-col items-center lg:items-start justify-start gap-4 mt-6 lg:mt-8">
                <span className="text-gesitech-blue font-semibold flex items-center gap-2 text-sm lg:text-md text-center lg:text-left">
                  <Icon
                    icon="material-symbols:check"
                    className="text-white text-2xl lg:text-3xl bg-gesitech-green rounded-full p-1 flex-shrink-0"
                  />
                  Trusted partner across Africa since 2017
                </span>
                <span className="text-gesitech-blue font-semibold flex items-center gap-2 text-sm lg:text-md text-center lg:text-left">
                  <Icon
                    icon="material-symbols:check"
                    className="text-white text-2xl lg:text-3xl bg-gesitech-green rounded-full p-1 flex-shrink-0"
                  />
                  End-to-end LPG supply, installation & maintenance
                </span>
                <span className="text-gesitech-blue font-semibold flex items-center gap-2 text-sm lg:text-md text-center lg:text-left">
                  <Icon
                    icon="material-symbols:check"
                    className="text-white text-2xl lg:text-3xl bg-gesitech-green rounded-full p-1 flex-shrink-0"
                  />
                  Committed to sustainability and compliance
                </span>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6 lg:mt-8 w-full">
                  <Link href="#what-we-do">
                  <button className="bg-gradient-to-r from-gesitech-green to-gesitech-blue hover:bg-gesitech-blue hover:-translate-y-1 transition-all duration-300 text-white px-6 py-3 rounded-xl text-base lg:text-lg cursor-pointer w-full sm:w-auto">
                    Explore Our Services
                  </button>
                  </Link>
                  <button
                    onClick={openContactModal}
                    className="bg-white hover:bg-gesitech-blue hover:text-white transition-all duration-300 hover:-translate-y-1 border border-gesitech-blue text-gesitech-blue px-6 py-3 rounded-xl text-base lg:text-lg cursor-pointer w-full sm:w-auto"
                  >
                    Contact Us Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="bg-gesitech-blue/10 pt-20 pb-20">
          <div className="flex flex-col items-center justify-between gap-4 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-start gap-2 mb-6">
              <div className="flex flex-row items-center justify-start gap-4">
                <Image
                  src="/assets/images/leaf.svg"
                  alt="Who we are"
                  width={30}
                  height={0}
                  className="transition-all duration-300"
                />
                <h2 className="text-4xl font-bold text-gesitech-blue">
                  Our Mission & Vision
                </h2>
              </div>
              <p className="text-gray-500 text-lg">
                End-to-end LPG solutions combining safety, reliability, and
                innovation.
              </p>
            </div>
            <div className="flex flex-row items-center justify-between gap-10">
              <div className="flex flex-col items-start justify-center">
                <div className="flex flex-col items-center justify-start gap-4 mt-8">
                  <div className="flex flex-row items-center justify-start gap-4 bg-white hover:skew-y-1 hover:shadow-2xl transition-all duration-300 px-4 py-10 rounded-xl">
                    <Image
                      src="/assets/images/mission.png"
                      alt="Mission"
                      width={100}
                      height={100}
                      className="transition-all duration-300"
                    />
                    <div className="flex flex-col items-start justify-start gap-2">
                      <h3 className="text-2xl font-bold text-gesitech-green">
                        Mission
                      </h3>
                      <p className="text-gray-500 text-lg">
                        To deliver reliable LPG accessories, installation, and
                        maintenance services that drive energy access, safety,
                        and sustainability.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-4 bg-white hover:skew-y-1 hover:shadow-2xl transition-all duration-300 px-4 py-10 rounded-xl">
                    <Image
                      src="/assets/images/vision.png"
                      alt="Vision"
                      width={100}
                      height={100}
                      className="transition-all duration-300"
                    />
                    <div className="flex flex-col items-start justify-start gap-2">
                      <h3 className="text-2xl font-bold text-gesitech-green">
                        Vision
                      </h3>
                      <p className="text-gray-500 text-lg">
                        To be Africa’s trusted partner in safe, efficient, and
                        sustainable LPG solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center justify-center">
                <Image
                  src="/assets/images/mission-vision.png"
                  alt="Mission and Vision"
                  width={700}
                  height={0}
                  className="hover:skew-y-1 hover:shadow-2xl transition-all duration-300 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gesitech-blue pt-20 pb-20 px-4">
          <div className="flex flex-col items-center justify-between gap-4 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-start gap-2 mb-6">
              <div className="flex flex-row items-center justify-start gap-4">
                <div className="w-[30px] h-[30px] text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                  </svg>
                </div>
                <h2 className="text-3xl lg:text-4xl text-white font-bold text-center">
                  Our Core Values
                </h2>
              </div>
              <p className="text-base lg:text-lg text-white text-center">
                The principles that guide our work and partnerships.
              </p>
            </div>
            <div className="flex flex-row items-center justify-between gap-10">
              <div className="flex flex-col items-start justify-center">
                <div className="flex flex-col items-center justify-start gap-4 mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
                    <div className="flex flex-col items-start justify-start gap-2 bg-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 p-6 rounded-xl h-full">
                      <Image
                        src="/assets/images/safety.svg"
                        alt="Safety"
                        width={30}
                        height={30}
                        className="text-gesitech-green text-2xl"
                      />
                      <h3 className="text-2xl font-semibold text-gesitech-green">
                        Safety
                      </h3>
                      <p className="text-gray-500 text-md">
                        Protecting people and assets with rigorous standards.
                      </p>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-2 bg-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 p-6 rounded-xl h-full">
                      <Image
                        src="/assets/images/innovation.svg"
                        alt="Innovation"
                        width={30}
                        height={30}
                        className="text-gesitech-green text-2xl"
                      />
                      <h3 className="text-2xl font-semibold text-gesitech-green">
                        Innovation
                      </h3>
                      <p className="text-gray-500 text-md">
                        Applying modern tech for better performance.
                      </p>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-2 bg-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 p-6 rounded-xl h-full">
                      <Image
                        src="/assets/images/integrity.svg"
                        alt="Integrity"
                        width={30}
                        height={30}
                        className="text-gesitech-green text-2xl"
                      />
                      <h3 className="text-2xl font-semibold text-gesitech-green">
                        Integrity
                      </h3>
                      <p className="text-gray-500 text-md">
                        Doing the right thing—always.
                      </p>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-2 bg-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 p-6 rounded-xl h-full">
                      <Image
                        src="/assets/images/customer-focus.svg"
                        alt="Customer Focus"
                        width={30}
                        height={30}
                        className="text-gesitech-green text-2xl"
                      />
                      <h3 className="text-2xl font-semibold text-gesitech-green">
                        Customer Focus
                      </h3>
                      <p className="text-gray-500 text-md">
                        Designing around your needs and outcomes.
                      </p>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-2 bg-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 p-6 rounded-xl h-full">
                      <Image
                        src="/assets/images/sustainability.svg"
                        alt="Sustainability"
                        width={30}
                        height={30}
                        className="text-gesitech-green text-2xl"
                      />
                      <h3 className="text-2xl font-semibold text-gesitech-green">
                        Sustainability
                      </h3>
                      <p className="text-gray-500 text-md">
                        Reducing risk and environmental impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="what-we-do" className="bg-white pt-20 pb-20 px-4">
          <div className="flex flex-col items-center justify-between gap-4 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-start gap-2 mb-6">
              <div className="flex flex-row items-center justify-start gap-4">
                <div className="">
                  <Image
                    src="/assets/images/leaf.svg"
                    alt="What we do"
                    width={30}
                    height={0}
                    className="transition-all duration-300"
                  />
                </div>
                <h2 className="text-3xl lg:text-4xl text-gesitech-blue font-bold text-center">
                  What We Do
                </h2>
              </div>
              <p className="text-base lg:text-lg text-gray-500 text-center">
                End-to-end LPG solutions combining safety, reliability, and
                innovation.
              </p>
            </div>
            <div className="flex flex-row items-center justify-between gap-10">
              <div className="flex flex-col items-start justify-center">
                <div className="flex flex-col items-center justify-start gap-4 mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    <div className="flex flex-col items-start justify-start gap-2 bg-gesitech-green hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 px-6 py-10 rounded-xl h-full">
                      <Image
                        src="/assets/images/lpg-accessories.png"
                        alt="LPG Accessories"
                        width={140}
                        height={140}
                        className="text-white text-2xl mb-4"
                      />
                      <h3 className="text-2xl font-semibold text-white">
                        Supply of LPG Accessories
                      </h3>
                      <p className="text-white text-md">
                        High-quality cylinders, valves, regulators, piping
                        systems, burners, tanks, and smart meters to keep
                        operations safe and efficient.
                      </p>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-2 bg-gesitech-green hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 px-6 py-10 rounded-xl h-full">
                      <Image
                        src="/assets/images/lpg-plant.png"
                        alt="LPG Plants"
                        width={140}
                        height={140}
                        className="text-white text-2xl mb-4"
                      />
                      <h3 className="text-2xl font-semibold text-white">
                        Installation of LPG Plants
                      </h3>
                      <p className="text-white text-md">
                        Turnkey rectification and bottling plants with pipeline
                        systems, storage facilities, and integrated safety
                        testing that meet global standards.
                      </p>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-2 bg-gesitech-green hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 px-6 py-10 rounded-xl h-full">
                      <Image
                        src="/assets/images/lpg-maintenance.png"
                        alt="LPG Maintenance"
                        width={140}
                        height={140}
                        className="text-white text-2xl mb-4"
                      />
                      <h3 className="text-2xl font-semibold text-white">
                        Maintenance & Safety Services
                      </h3>
                      <p className="text-white text-md">
                        Comprehensive inspections, emergency repairs, compliance
                        audits, and staff training that extend system lifespan
                        and protect communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="growth-story" className="bg-gesitech-blue/5 pt-20 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Image
                  src="/assets/images/leaf.svg"
                  alt="Our Journey"
                  width={30}
                  height={30}
                  className="transition-all duration-300"
                />
                <h2 className="text-4xl font-bold text-gesitech-blue">
                  Our Growth Story
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A horizontal timeline of our journey from 2017 to today.
              </p>
            </div>

            <Timeline />
          </div>
        </section>

        <section id="team" className="bg-white pt-20 pb-20 px-4">
          <div className="flex flex-col items-center justify-between gap-4 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-start gap-2 mb-6">
              <div className="flex flex-row items-center justify-start gap-4">
                <div className="">
                  <Image
                    src="/assets/images/leaf.svg"
                    alt="What we do"
                    width={30}
                    height={0}
                    className="transition-all duration-300"
                  />
                </div>
                <h2 className="text-3xl lg:text-4xl text-gesitech-blue font-bold text-center">
                  Our Leadership Team
                </h2>
              </div>
              <p className="text-lg text-gray-500">
                Experienced, visionary, and committed to Africa’s energy future.
              </p>
            </div>

            <TeamMembers />
          </div>
        </section>

        <section id="certifications" className="bg-gesitech-blue/5 pt-20 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Image
                  src="/assets/images/leaf.svg"
                  alt="Our Journey"
                  width={30}
                  height={30}
                  className="transition-all duration-300"
                />
                <h2 className="text-4xl font-bold text-gesitech-blue">
                  Certifications & Compliance
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Safety and compliance are at the heart of everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              <div className="flex flex-row items-center justify-start gap-4 border border-gesitech-blue bg-gesitech-blue/30 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 px-4 py-4 rounded-xl">
                <Icon
                  icon="material-symbols:check"
                  className="text-white text-3xl bg-gesitech-blue rounded-full p-1"
                />
                <div className="flex flex-col items-start justify-start gap-2">
                  <h3 className="text-xl font-normal text-gray-600 ">Kenya</h3>
                  <p className="text-gray-950 text-md">
                    EPRA Licensed Operator
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-start gap-4 border border-gesitech-blue bg-gesitech-blue/30 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 px-4 py-4 rounded-xl">
                <Icon
                  icon="material-symbols:check"
                  className="text-white text-3xl bg-gesitech-blue rounded-full p-1"
                />
                <div className="flex flex-col items-start justify-start gap-2">
                  <h3 className="text-xl font-normal text-gray-600 ">Global</h3>
                  <p className="text-gray-950 text-md">
                    ISO Integrated (9001/14001/45001)
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-4 border border-gesitech-blue bg-gesitech-blue/30 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 px-4 py-4 rounded-xl">
                <Icon
                  icon="material-symbols:check"
                  className="text-white text-3xl bg-gesitech-blue rounded-full p-1"
                />
                <div className="flex flex-col items-start justify-start gap-2">
                  <h3 className="text-xl font-normal text-gray-600 ">
                    Safety Code
                  </h3>
                  <p className="text-gray-950 text-md">NFPA 58 Alignment</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full mt-10">
              <div className="flex flex-col items-start justify-start gap-2 bg-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 px-6 py-8 rounded-xl h-full">
                <span className="bg-gesitech-green/20 border border-gesitech-green px-4 py-1 text-gesitech-green text-xs rounded-full">
                  Regulatory
                </span>
                <h3 className="text-xl font-semibold text-gesitech-blue">
                  Kenyan Certifications & Approvals
                </h3>
                <span className="w-full h-[1px] bg-gesitech-blue/60 mb-4" />
                <div className="flex flex-col items-start justify-start gap-5">
                  <p className="text-gray-600 text-md">
                    EPRA – LPG supply, install & maintain
                  </p>
                  <p className="text-gray-600 text-md">
                    KEBS – KS standards (cylinders, regulators, accessories)
                  </p>
                  <p className="text-gray-600 text-md">
                    NEMA – Environmental approvals
                  </p>
                  <p className="text-gray-600 text-md">
                    DOSHS – Workplace health & safety
                  </p>
                  <p className="text-gray-600 text-md">
                    County & Fire Safety approvals
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start gap-2 bg-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 px-6 py-8 rounded-xl h-full">
                <span className="bg-gesitech-green/20 border border-gesitech-green px-4 py-1 text-gesitech-green text-xs rounded-full">
                  Standards
                </span>
                <h3 className="text-xl font-semibold text-gesitech-blue">
                  International Standards & Certifications
                </h3>
                <span className="w-full h-[1px] bg-gesitech-blue/60 mb-4" />
                <div className="flex flex-col items-start justify-start gap-5">
                  <p className="text-gray-600 text-md">
                    ISO 9001 – Quality Management
                  </p>
                  <p className="text-gray-600 text-md">
                    ISO 14001 – Environmental Management
                  </p>
                  <p className="text-gray-600 text-md">
                    ISO 45001 – Occupational Health & Safety
                  </p>
                  <p className="text-gray-600 text-md">NFPA 58 – LPG Code</p>
                  <p className="text-gray-600 text-md">
                    WLPGA – Global Best Practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="bg-white pt-20 pb-20 px-4">
          <div className="flex flex-col items-center justify-between gap-4 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-start gap-2">
              <div className="flex flex-row items-center justify-start gap-4">
                <div className="text-gesitech-blue">
                  <Image
                    src="/assets/images/leaf.svg"
                    alt="Who we are"
                    width={30}
                    height={0}
                    className="transition-all duration-300"
                  />
                </div>
                <h2 className="text-3xl lg:text-4xl text-gesitech-blue font-bold text-center">
                  Our Partners
                </h2>
              </div>
              <p className="text-base lg:text-lg text-gesitech-blue text-center">
                Strong partnerships that power sustainable growth.
              </p>
            </div>
            <div className="flex flex-row items-center justify-between gap-10">
              <div className="flex flex-col items-start justify-center">
                <div className="flex flex-col items-center justify-start gap-4 mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                    <div className="flex flex-col items-start justify-start gap-2 bg-gesitech-blue hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 px-6 py-10 rounded-xl h-full">
                      <Image
                        src="/assets/images/global-manu.png"
                        alt="Global Manufacturers"
                        width={90}
                        height={90}
                        className="text-white text-2xl mb-4"
                      />
                      <h3 className="text-xl font-semibold text-gesitech-green">
                        Global Manufacturers
                      </h3>
                      <p className="text-white text-md">
                        High-quality LPG accessories meeting international
                        standards.
                      </p>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-2 bg-gesitech-blue hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 px-6 py-10 rounded-xl ">
                      <Image
                        src="/assets/images/energy.png"
                        alt="Energy Distributors & Marketers"
                        width={90}
                        height={90}
                        className="text-white text-2xl mb-4"
                      />
                      <h3 className="text-xl font-semibold text-gesitech-green">
                        Energy Distributors & Marketers
                      </h3>
                      <p className="text-white text-md">
                        Turnkey installations and maintenance for reliable
                        supply.
                      </p>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-2 bg-gesitech-blue hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 px-6 py-10 rounded-xl h-full">
                      <Image
                        src="/assets/images/reg.png"
                        alt="Regulatory Bodies & Institutions"
                        width={90}
                        height={90}
                        className="text-white text-2xl mb-4"
                      />
                      <h3 className="text-xl font-semibold text-gesitech-green">
                        Regulatory Bodies & Institutions
                      </h3>
                      <p className="text-white text-md">
                        Ensuring compliance with safety, environmental &
                        operational standards.
                      </p>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-2 bg-gesitech-blue hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 px-6 py-10 rounded-xl h-full">
                      <Image
                        src="/assets/images/corp.png"
                        alt="Corporate Clients & Industries"
                        width={90}
                        height={90}
                        className="text-white text-2xl mb-4"
                      />
                      <h3 className="text-xl font-semibold text-gesitech-green">
                        Corporate Clients & Industries
                      </h3>
                      <p className="text-white text-md">
                        Hospitality, healthcare, manufacturing, real estate and
                        more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
      </div>
    </>
  );
}
