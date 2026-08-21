import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Certifications() {
  return (
    <section id="certifications" className="bg-gesitech-blue/5 pt-20 pb-20">
      <div className="container-fluid px-4 sm:px-6 lg:px-8">
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
              <p className="text-gray-950 text-md">EPRA Licensed Operator</p>
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
  );
}
