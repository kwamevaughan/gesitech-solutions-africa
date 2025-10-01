import { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Header from "../layouts/header";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative overflow-hidden mx-auto">
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <section className="bg-gesitech-blue/10 pt-32 pb-16">
          <div className="flex flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-5xl font-bold text-gesitech-blue mb-8">
                Powering Africa with Safe, Reliable, and Sustainable LPG
                Solutions
              </h2>
              <p className="text-gray-500 text-lg">
                Trusted since 2017, Gesitech Solutions Africa delivers
                world-class LPG accessories, plant installations, and
                maintenance services that drive growth, protect communities, and
                support a cleaner energy future.
              </p>
              <div className="flex flex-row items-center justify-start gap-4 mt-8">
                <button className="bg-gradient-to-r from-gesitech-green to-gesitech-blue hover:bg-gesitech-blue hover:-translate-y-1 transition-all duration-300 text-white px-4 py-4 rounded-xl text-lg cursor-pointer">
                  Explore Our Services
                </button>
                <button className="bg-white hover:bg-gesitech-blue hover:text-white transition-all duration-300 hover:-translate-y-1 border border-gesitech-blue text-gesitech-blue px-4 py-4 rounded-xl text-lg cursor-pointer">
                  Discover Our Products
                </button>
              </div>
              <div className="flex flex-row items-center justify-start gap-4 mt-8">
                <span className="text-gesitech-gray font-semibold flex items-center gap-2 text-md">
                  <Icon
                    icon="mdi:circle"
                    className="text-gesitech-green text-2xl"
                  />
                  EPRA & ISO Certified
                </span>
                <span className="text-gesitech-gray font-semibold flex items-center gap-2 text-md">
                  <Icon
                    icon="mdi:circle"
                    className="text-gesitech-green text-2xl"
                  />
                  Turnkey Delivery
                </span>
                <span className="text-gesitech-gray font-semibold flex items-center gap-2 text-md">
                  <Icon
                    icon="mdi:circle"
                    className="text-gesitech-green text-2xl"
                  />
                  Trusted Since 2017
                </span>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center">
              <Image
                src="/assets/images/header-img.png"
                alt="Gesitech Solutions Africa"
                width={1000}
                height={100}
                className="hover:skew-y-1 hover:shadow-2xl transition-all duration-300 rounded-2xl"
              />
            </div>
          </div>
        </section>

        <section className="bg-gesitech-green/10 pt-20 pb-20">
          <div className="flex flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
            <div className="flex flex-row items-center justify-center w-1/2">
              <Image
                src="/assets/images/whoweare.png"
                alt="Gesitech Solutions Africa"
                width={1000}
                height={100}
                className="hover:skew-y-1 hover:shadow-2xl transition-all duration-300 rounded-2xl"
              />
            </div>

            <div className="flex flex-col items-start justify-center w-1/2">
              <div className="flex flex-row items-center justify-start gap-4 mb-8">
                <Image
                  src="/assets/images/leaf.svg"
                  alt="Who we are"
                  width={30}
                  height={0}
                  className="transition-all duration-300"
                />
                <h2 className="text-4xl font-bold text-gesitech-blue">
                  Who We Are
                </h2>
              </div>
              <p className="text-gray-500 text-lg">
                Since 2017, Gesitech Solutions Africa has been at the forefront
                of safe, reliable, and sustainable LPG solutions. We partner
                with businesses, industries, and communities to deliver
                innovation, safety, and efficiency that power growth and protect
                people and the environment. Our skilled professionals combine
                technical expertise with hands-on experience, ensuring every
                project exceeds expectations and complies with international
                standards.
              </p>
              <div className="flex flex-col items-start justify-start gap-4 mt-8">
                <span className="text-gesitech-blue font-semibold flex items-center gap-2 text-md">
                  <Icon
                    icon="material-symbols:check"
                    className="text-white text-3xl bg-gesitech-green rounded-full p-1"
                  />
                  Trusted partner across Africa since 2017
                </span>
                <span className="text-gesitech-blue font-semibold flex items-center gap-2 text-md">
                  <Icon
                    icon="material-symbols:check"
                    className="text-white text-3xl bg-gesitech-green rounded-full p-1"
                  />
                  End-to-end LPG supply, installation & maintenance
                </span>
                <span className="text-gesitech-blue font-semibold flex items-center gap-2 text-md">
                  <Icon
                    icon="material-symbols:check"
                    className="text-white text-3xl bg-gesitech-green rounded-full p-1"
                  />
                  Committed to sustainability and compliance
                </span>
                <div className="flex flex-row items-center justify-start gap-4 mt-8">
                  <button className="bg-gradient-to-r from-gesitech-green to-gesitech-blue hover:bg-gesitech-blue hover:-translate-y-1 transition-all duration-300 text-white px-4 py-4 rounded-xl text-lg cursor-pointer">
                    Explore Our Services
                  </button>
                  <button className="bg-white hover:bg-gesitech-blue hover:text-white transition-all duration-300 hover:-translate-y-1 border border-gesitech-blue text-gesitech-blue px-4 py-4 rounded-xl text-lg cursor-pointer">
                    Contact Us Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gesitech-blue/10 pt-20 pb-20">
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

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Gesitech Solutions Africa. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
