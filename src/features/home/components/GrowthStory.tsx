import Image from "next/image";
import Timeline from "./Timeline";

export default function GrowthStory() {
  return (
    <section id="growth-story" className="bg-gesitech-blue/5 pt-20 pb-20">
      <div className="container-fluid px-4 sm:px-6 lg:px-8">
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
  );
}
