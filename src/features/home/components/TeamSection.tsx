import Image from "next/image";
import TeamMembers from "./TeamMembers";

export default function TeamSection() {
  return (
    <section id="team" className="bg-white pt-20 pb-20">
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
              Our Leadership Team
            </h2>
          </div>
          <p className="text-lg text-gray-500">
            Experienced, visionary, and committed to Africa&rsquo;s energy
            future.
          </p>
        </div>

        <TeamMembers />
      </div>
    </section>
  );
}
