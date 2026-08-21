"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import ProductEnquiryModal from "@/shared/components/ProductEnquiryModal";

interface Product {
  name: string;
  category: "cylinder-valves" | "filling-systems";
  image: string;
}

const categories: { id: Product["category"]; label: string }[] = [
  { id: "cylinder-valves", label: "Smart Cylinder Valves" },
  { id: "filling-systems", label: "Intelligent Filling Systems" },
];

const products: Product[] = [
  {
    name: "Smart Cylinder Valve – Red Handwheel",
    category: "cylinder-valves",
    image: "Red Handwheel Smart Cylinder Valve.jpg",
  },
  {
    name: "Smart Cylinder Valve – QR Plate",
    category: "cylinder-valves",
    image: "Green Handwheel Smart Cylinder Valve with QR Plate.jpg",
  },
  {
    name: "Smart Cylinder Valve – RFID Module",
    category: "cylinder-valves",
    image: "Green Handwheel Smart Cylinder Valve with Teal Module.jpg",
  },
  {
    name: "Smart Compact Cylinder Valve – RFID Module",
    category: "cylinder-valves",
    image: "Green Handwheel Smart Cylinder Valve with Teal Module (2).jpg",
  },
  {
    name: "Smart Compact Valve – Blue Module",
    category: "cylinder-valves",
    image: "Smart Compact Valve with Blue Module.jpg",
  },
  {
    name: "ATEX-Rated Control Box",
    category: "filling-systems",
    image: "ATEX Control Box.jpg",
  },
  {
    name: "Intelligent Filling Head – Compact Valve",
    category: "filling-systems",
    image: "Intelligent Filling Head for Smart Compact Valve.jpg",
  },
  {
    name: "Intelligent Filling Head – POL Valve",
    category: "filling-systems",
    image: "Intelligent Filling Head for Smart POL Valve.jpg",
  },
  {
    name: "Pneumatic Intelligent Filling Head",
    category: "filling-systems",
    image: "Pneumatic Intelligent Filling Head.jpg",
  },
];

const ITEMS_PER_PAGE = 3;

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Product["category"]>(
    "cylinder-valves"
  );
  const [page, setPage] = useState(0);
  const [enquiryProduct, setEnquiryProduct] = useState<string | undefined>(
    undefined
  );
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );
  const pageCount = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const visibleProducts = filteredProducts.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const selectCategory = (category: Product["category"]) => {
    setActiveCategory(category);
    setPage(0);
  };

  const handlePrev = () => setPage((prev) => Math.max(0, prev - 1));
  const handleNext = () =>
    setPage((prev) => Math.min(pageCount - 1, prev + 1));

  const openEnquiry = (productName?: string) => {
    setEnquiryProduct(productName);
    setIsEnquiryOpen(true);
  };

  return (
    <section id="products" className="bg-gesitech-green/10 pt-20 pb-20">
      <div className="flex flex-col items-center justify-between gap-4 container-fluid px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-start gap-2 mb-6">
          <div className="flex flex-row items-center justify-start gap-4">
            <Image
              src="/assets/images/leaf.svg"
              alt="Smart LPG Products"
              width={30}
              height={0}
              className="transition-all duration-300"
            />
            <h2 className="text-3xl lg:text-4xl font-bold text-gesitech-blue text-center">
              Smart LPG Products
            </h2>
          </div>
          <p className="text-gray-500 text-base lg:text-lg text-center">
            Explore connected hardware for cylinder identification, controlled
            filling, safety, and traceability.
          </p>
        </div>

        <div className="inline-flex items-center gap-1 bg-white border border-gray-200 rounded-full shadow-sm p-1 mb-4 flex-wrap justify-center">
          {categories.map((category) => {
            const count = products.filter(
              (product) => product.category === category.id
            ).length;
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => selectCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gesitech-blue text-white"
                    : "text-gesitech-blue hover:bg-gesitech-blue/5"
                }`}
              >
                {category.label}
                <span
                  className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                    isActive
                      ? "bg-gesitech-green text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative w-full">
          {pageCount > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                disabled={page === 0}
                className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 rounded-full bg-white border border-gesitech-blue shadow-lg items-center justify-center transition-all ${
                  page === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer hover:bg-gesitech-blue hover:text-white"
                }`}
              >
                <Icon icon="lucide:chevron-left" width="24" height="24" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={page >= pageCount - 1}
                className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 rounded-full bg-white border border-gesitech-blue shadow-lg items-center justify-center transition-all ${
                  page >= pageCount - 1
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer hover:bg-gesitech-blue hover:text-white"
                }`}
              >
                <Icon icon="lucide:chevron-right" width="24" height="24" />
              </button>
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProducts.map((product) => (
              <div
                key={product.name}
                className="bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-64 bg-gray-50">
                  <Image
                    src={encodeURI(
                      `/assets/images/Products/${product.image}`
                    )}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <div className="flex flex-col items-start gap-1 px-6 pb-6 pt-2">
                  <span className="text-gesitech-green text-xs font-bold uppercase tracking-wide">
                    {categories.find((c) => c.id === product.category)?.label}
                  </span>
                  <h3 className="text-xl font-bold text-gesitech-blue">
                    {product.name}
                  </h3>
                  <button
                    type="button"
                    onClick={() => openEnquiry(product.name)}
                    className="mt-2 flex items-center gap-2 text-gesitech-blue font-semibold hover:text-gesitech-green transition-colors duration-300 cursor-pointer"
                  >
                    View details
                    <Icon icon="lucide:arrow-right" width="18" height="18" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {pageCount > 1 && (
          <div className="flex items-center gap-2 mt-4">
            {Array.from({ length: pageCount }).map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === page ? "bg-gesitech-blue" : "bg-gray-200"
                }`}
              />
            ))}
            <span className="text-gray-500 text-sm ml-2">
              {page + 1} of {pageCount}
            </span>
          </div>
        )}

        <button
          type="button"
          onClick={() => openEnquiry(undefined)}
          className="bg-white hover:bg-gesitech-blue hover:text-white transition-all duration-300 hover:-translate-y-1 border border-gesitech-blue text-gesitech-blue px-6 py-3 rounded-xl text-base lg:text-lg cursor-pointer mt-6"
        >
          View all products
        </button>
      </div>

      <ProductEnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        productName={enquiryProduct}
      />
    </section>
  );
}
