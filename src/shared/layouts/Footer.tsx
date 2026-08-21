"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gesitech-gray text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="bg-white rounded-2xl px-4 py-2 inline-block">
              <Link href="/" passHref>
                <Image
                  src="/assets/images/logo.png"
                  alt="Gesitech Solutions Africa"
                  width={240}
                  height={240}
                  className="h-20 w-auto"
                />
              </Link>
            </div>

            {/* Main Heading */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-2">
                Let&apos;s Power Africa Together
              </h2>
              <p className="text-gray-300 text-md">
                Talk to our team about safe, reliable LPG solutions.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <Link
                href="https://www.instagram.com/gesitech_solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Icon
                  icon="mdi:instagram"
                  className="w-8 h-8 text-gesitech-green hover:text-white transition-all duration-300"
                />
              </Link>
              <Link
                href="https://www.facebook.com/gesitechsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Icon
                  icon="uil:facebook"
                  className="w-8 h-8 text-gesitech-green hover:text-white transition-all duration-300"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/gesitech-solutions-africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Icon
                  icon="mdi:linkedin"
                  className="w-8 h-8 text-gesitech-green hover:text-white transition-all duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="space-y-6 lg:ml-auto lg:max-w-md">
            {/* Email */}
            <div>
              <h3 className="text-gesitech-green text-lg font-semibold mb-2">
                Email
              </h3>
              <Link
                href="mailto:info@gesitech.africa"
                className="text-gray-300 hover:text-white transition-all duration-300"
              >
                info@gesitech.africa
              </Link>
            </div>

            {/* Office */}
            <div>
              <h3 className="text-gesitech-green text-lg font-semibold mb-2">
                Office
              </h3>
              <p className="text-gray-300 leading-relaxed">
                7th floor, Mitsumi Business Park,
                <br />
                Muthithi Road, Westlands, Nairobi
              </p>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-gesitech-green text-lg font-semibold mb-2">
                Address
              </h3>
              <p className="text-gray-300">P.O. Box 856-00100, Kenya</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-400 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-200 text-sm">
              © {currentYear} Gesitech Solutions Africa
            </p>
            <div className="flex gap-6">
              <Link
                href="/terms"
                className="text-gray-200 hover:text-white text-sm transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-gray-200 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
