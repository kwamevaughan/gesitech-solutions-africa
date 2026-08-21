import Image from "next/image";

export default function MissionVision() {
  return (
    <section id="mission" className="bg-gesitech-blue/10 pt-20 pb-20">
      <div className="flex flex-col items-center justify-between gap-4 container-fluid px-4 sm:px-6 lg:px-8">
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
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 w-full">
          <div className="flex flex-col items-start justify-center lg:w-3/5 h-full">
            <div className="flex flex-col items-stretch justify-start gap-4 h-full w-full">
              <div className="flex flex-row items-center justify-start gap-4 bg-white hover:shadow-2xl transition-all duration-300 px-4 py-10 rounded-xl h-full">
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
              <div className="flex flex-row items-center justify-start gap-4 bg-white hover:shadow-2xl transition-all duration-300 px-4 py-10 rounded-xl h-full">
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
                    To be Africa&rsquo;s trusted partner in safe, efficient,
                    and sustainable LPG solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-row items-center justify-center lg:w-2/5 min-h-80">
            <Image
              src="/assets/images/missionvission.jpg"
              alt="Mission and Vision"
              fill
              className="hover:shadow-2xl transition-all duration-300 rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
