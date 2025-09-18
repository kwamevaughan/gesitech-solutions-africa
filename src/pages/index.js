import { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-green-900 relative overflow-hidden">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-center">
        {/* Logo Section */}
        <div className="mb-12 transform hover:scale-105 transition-transform duration-300">
          <div className="bg-white backdrop-blur-lg rounded-lg px-4 py-2 border border-white/20 shadow-2xl">
            <Image src="/assets/images/logo.png" alt="logo" width={200} height={38} />
          </div>
        </div>

        {/* Main Message Card */}
        <div className="max-w-4xl mb-12 transform hover:scale-[1.02] transition-all duration-300">
          <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
            {/* Construction Icon */}
            <div className="mb-2">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
                <Icon
                  icon="carbon:construction"
                  className="text-5xl text-white "
                />
              </div>
            </div>

            <h2 className="text-4xl font-semibold text-white mb-8 leading-tight">
              We are redesigning our digital home
            </h2>

            <p className="text-2xl md:text-3xl text-white/90 font-light mb-10">
              We will be back online soon.
            </p>

          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Email Card */}
          <div className="group transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 h-full">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    icon="mdi:email"
                    className="text-4xl text-green-300"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Email Us
              </h3>
              <a
                href="mailto:info@gesitech.africa"
                className="text-white hover:text-green-100 transition-colors duration-300 break-all text-lg"
              >
                info@gesitech.africa
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 h-full">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    icon="mdi:phone"
                    className="text-4xl text-green-300"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Call Us</h3>
              <a
                href="tel:+254701850850"
                className="text-white hover:text-green-100 transition-colors duration-300 text-lg"
              >
                +254 701 850 850
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="group transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 h-full">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    icon="mdi:map-marker"
                    className="text-4xl text-green-300"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Visit Us
              </h3>
              <p className="text-white leading-relaxed">
                7th floor, Mitsumi Business Park,
                <br />
                Muthithi Road, Westlands
                <br />
                Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Gesitech Solutions Africa. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
