import Image from "next/image";

export default function CoreValues() {
  return (
    <section className="bg-gesitech-blue pt-20 pb-20 px-4">
      <div className="flex flex-col items-center justify-between gap-4 container-fluid">
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
  );
}
