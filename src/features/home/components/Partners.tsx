import Image from "next/image";

export default function Partners() {
  return (
    <section id="partners" className="bg-white pt-20 pb-20">
      <div className="flex flex-col items-center justify-between gap-4 container-fluid px-4 sm:px-6 lg:px-8">
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
  );
}
