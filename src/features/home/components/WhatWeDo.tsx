import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-white pt-20 pb-20">
      <div className="flex flex-col items-center justify-between gap-4 container-fluid px-4 sm:px-6 lg:px-8">
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
  );
}
