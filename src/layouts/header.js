"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { menuItems } from "../data/menuData";
import { useFixedHeader, handleScroll } from "../utils/scrollUtils";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isFixed = useFixedHeader();

  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 rounded-xl z-50 transition-all duration-500 ease-in-out ${
        isFixed ? "fixed" : "absolute"
      } top-4 left-0 right-0 bg-white/85 backdrop-blur-md shadow-sm`}
    >
      <div className="w-full">
        <nav className="w-full py-2 flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <Image
                src="/assets/images/logo.png"
                alt="Logo"
                width={150}
                height={40}
                className="rounded-xl transition-all duration-300"
              />
            </Link>
          </div>

          <div className="flex items-center md:hidden z-60">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
            >
              <svg
                className={`h-6 w-6 ${isFixed ? "text-black" : "text-white"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-2">
              {menuItems.map((item) =>
                item.isAnchor ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href, isFixed)}
                    className={`${
                      isFixed
                        ? "text-gesitech-blue hover:text-gray-900"
                        : "text-gesitech-blue hover:text-white/90"
                    } hover:bg-gesitech-green px-4 py-2 rounded-full transition-all duration-300 cursor-pointer`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${
                      isFixed
                        ? "text-gesitech-blue hover:text-gray-900"
                        : "text-gesitech-blue hover:text-white/90"
                    } hover:bg-gradient-to-r from-gesitech-blue to-gesitech-green px-3 py-2 text-lg font-semibold rounded-full transition-all duration-300 cursor-pointer`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Contact Button - Right Side */}
          <div className="hidden md:flex flex-shrink-0">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-gesitech-blue to-gesitech-green text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </nav>

        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } w-full bg-white/95 rounded-lg mt-2`}
        >
          <div className="px-4 py-2 space-y-1">
            {menuItems.map((item) =>
              item.isAnchor ? (
                <a
                  key={`mobile-${item.href}`}
                  href={item.href}
                  onClick={(e) => {
                    handleScroll(e, item.href, isFixed);
                    setIsMenuOpen(false);
                  }}
                  className="block px-4 py-2 text-gray-900 hover:bg-gesitech-green font-bold rounded-full transition-all duration-300"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={`mobile-${item.href}`}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-gray-900 hover:bg-gesitech-green hover:text-blue-400 font-bold rounded-full transition-all duration-300"
                >
                  {item.label}
                </Link>
              )
            )}

            {/* Mobile Contact Button */}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-gradient-to-r from-gesitech-blue to-gesitech-green text-white px-6 py-3 rounded-full font-bold text-center mt-2 hover:shadow-lg transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
