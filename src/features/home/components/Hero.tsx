import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section id="home" className="bg-gesitech-blue/10 pt-46 pb-18">
      <div className="flex flex-col lg:flex-row items-center gap-10 container-fluid px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-center lg:flex-[3] min-w-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gesitech-blue mb-6 lg:mb-8 text-center lg:text-left">
            Powering Africa with Safe, Reliable, and Sustainable LPG Solutions
          </h2>
          <p className="text-gray-500 text-base lg:text-lg text-center lg:text-left">
            Trusted since 2017, Gesitech Solutions Africa delivers world-class
            LPG accessories, plant installations, and maintenance services that
            drive growth, protect communities, and support a cleaner energy
            future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6 lg:mt-8 w-full">
            <Link href="#what-we-do">
              <button className="bg-gradient-to-r from-gesitech-green to-gesitech-blue hover:bg-gesitech-blue hover:-translate-y-1 transition-all duration-300 text-white px-6 py-3 rounded-xl text-base lg:text-lg cursor-pointer w-full sm:w-auto">
                Explore Our Services
              </button>
            </Link>
            <button
              onClick={onOpenContact}
              className="bg-white hover:bg-gesitech-blue hover:text-white transition-all duration-300 hover:-translate-y-1 border border-gesitech-blue text-gesitech-blue px-6 py-3 rounded-xl text-base lg:text-lg cursor-pointer w-full sm:w-auto"
            >
              Discover Our Products
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

        <div className="flex flex-row items-center justify-center lg:flex-[2] min-w-0 mt-8 lg:mt-0 w-full">
          <Image
            src="/assets/images/hero-img.jpg"
            alt="Gesitech Solutions Africa"
            width={1000}
            height={100}
            className="hover:shadow-2xl transition-all duration-300 rounded-2xl w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
