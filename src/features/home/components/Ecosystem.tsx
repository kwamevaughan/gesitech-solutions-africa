import Image from "next/image";
import { Icon } from "@iconify/react";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Live filling data",
    description: "See filled cylinders, weight, and sales performance in real time.",
  },
  {
    title: "Equipment visibility",
    description: "Track electronic scales and connected equipment online status.",
  },
  {
    title: "Order intelligence",
    description: "Review normal, cancelled, replenishment, and modified orders.",
  },
  {
    title: "Operational reports",
    description: "Compare payment methods, filling modes, and monthly trends.",
  },
];

interface Module {
  title: string;
  description: string;
}

const modules: Module[] = [
  {
    title: "Filling service & authorization",
    description: "",
  },
  {
    title: "Base data & equipment status",
    description: "",
  },
  {
    title: "Statistics reports & invoicing",
    description: "",
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="bg-gesitech-gray pt-20 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-center container-fluid px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight mb-5">
            Monitor every filling operation in one place.
          </h2>
          <p className="text-gray-200 text-base lg:text-lg mb-8">
            A simplified view of filling performance, equipment status,
            orders, payments, and annual activity—designed for fast
            operational decisions.
          </p>

          <div className="flex flex-col gap-6 mb-10 w-full">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gesitech-green flex-shrink-0 mt-1">
                  <Icon icon="lucide:check" className="text-white text-base" />
                </span>
                <div>
                  <h3 className="text-white font-bold text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full border-t border-white/10 pt-8">
            <span className="text-gesitech-green text-xs font-bold uppercase tracking-wide mb-4 inline-block">
              Core System Modules
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              {modules.map((module, index) => (
                <div
                  key={module.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-4"
                >
                  <span className="text-gesitech-green text-xs font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-white font-semibold text-sm mt-2">
                    {module.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-3xl">
          <div className="relative w-full aspect-[942/1001] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/images/monitoring-dashboard.png"
              alt="Intelligent Filling Plant Management System dashboard"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
