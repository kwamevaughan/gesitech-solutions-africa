import Image from "next/image";

interface Capability {
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    title: "Real-time cylinder profiles",
    description: "Create profiles for cylinders and display filling data in real time.",
  },
  {
    title: "Designated filling",
    description: "Support dedicated cylinders and designated filling operations.",
  },
  {
    title: "Refilling control",
    description: "Regulate the refilling of uninspected or scrapped cylinders.",
  },
  {
    title: "Loss monitoring",
    description: "Monitor cylinder loss and customer attrition.",
  },
  {
    title: "Complete traceability",
    description: "Keep cylinder profiles traceable and circulation trackable.",
  },
  {
    title: "Standardized processes",
    description: "Standardize cylinder management processes.",
  },
];

const numberColors = ["bg-gesitech-blue", "bg-gesitech-green", "bg-[#50B4BE]"];

export default function Platform() {
  return (
    <section id="platform" className="bg-white pt-20 pb-20">
      <div className="flex flex-col items-center justify-between gap-4 container-fluid px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-start gap-2 mb-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gesitech-blue">
            How to Manage LPG Cylinders?
          </h2>
          <p className="text-gesitech-gray text-lg font-semibold">
            Solution: LPG Cylinders IoT Management Platform
          </p>
          <p className="text-gray-500 text-base lg:text-lg max-w-4xl">
            A connected system for cylinder profiles, controlled filling, and
            whole-process traceability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 w-full items-stretch">
          {/* Left: Platform capabilities */}
          <div className="bg-gray-50 rounded-3xl p-8 flex flex-col">
            <span className="inline-flex self-start bg-gesitech-green/10 text-gesitech-green text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full mb-5">
              Platform Capabilities
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-gesitech-blue mb-2">
              What the platform enables
            </h3>
            <p className="text-gray-500 mb-6">
              Six connected capabilities that support safe, standardized
              cylinder management.
            </p>

            <div className="relative flex flex-col">
              <span
                aria-hidden
                className="absolute left-4 top-4 bottom-4 w-1 -translate-x-1/2 bg-gray-200"
              />
              {capabilities.map((capability, index) => (
                <div
                  key={capability.title}
                  className="relative flex items-start gap-4 py-4"
                >
                  <span
                    className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full text-white text-xs font-bold flex-shrink-0 ${
                      numberColors[index % numberColors.length]
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div
                    className={
                      index !== capabilities.length - 1
                        ? "pb-4 border-b border-gray-200 flex-1"
                        : "flex-1"
                    }
                  >
                    <h4 className="text-gesitech-blue font-bold text-lg">
                      {capability.title}
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">
                      {capability.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Cylinder lifecycle */}
          <div className="bg-[#1e2f53] rounded-3xl p-8 flex flex-col relative overflow-hidden">
            <span className="inline-flex self-start bg-white/10 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full mb-5">
              Whole-Process Traceability
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              One connected cylinder lifecycle
            </h3>
            <p className="text-white/70 mb-6">
              Every cylinder profile remains visible as it moves through the
              full circulation loop.
            </p>

            <div className="relative w-full flex-1 min-h-100">
              <Image
                src="/assets/images/lifecycle.png"
                alt="LPG cylinder lifecycle: collect, filling, transportation, distribution, delivery, user"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
