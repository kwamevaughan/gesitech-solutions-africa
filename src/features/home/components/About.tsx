import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface AboutProps {
  onOpenContact: () => void;
}

export default function About({ onOpenContact }: AboutProps) {
  return (
    <section id="about" className="bg-gesitech-green/10 pt-20 pb-20 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 container-fluid">
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
                onClick={onOpenContact}
                className="bg-white hover:bg-gesitech-blue hover:text-white transition-all duration-300 hover:-translate-y-1 border border-gesitech-blue text-gesitech-blue px-6 py-3 rounded-xl text-base lg:text-lg cursor-pointer w-full sm:w-auto"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
