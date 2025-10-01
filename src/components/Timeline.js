import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Timeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const milestones = [
    {
      year: "2017",
      title: "Foundation",
      description: "Gesitech Solutions Africa was established with a vision to provide safe and reliable LPG solutions across Africa.",
    },
    {
      year: "2018",
      title: "First Major Projects",
      description: "Successfully supplied and installed LPG accessories and completed our first LPG plant rectification projects for local businesses.",
    },
    {
      year: "2019",
      title: "Expansion of Services",
      description: "Introduced preventive and corrective maintenance services, helping clients improve safety and efficiency in LPG operations.",
    },
    {
      year: "2020",
      title: "Strengthening Partnerships",
      description: "Formed partnerships with leading global manufacturers to ensure supply of high-quality LPG accessories.",
    },
    {
      year: "2021",
      title: "Regional Reach",
      description: "Expanded operations to serve clients across multiple regions in Africa, supporting industrial and commercial LPG projects.",
    },
    {
      year: "2022",
      title: "Building Trust",
      description: "Recognized for excellence in safety and compliance, becoming a trusted partner for LPG distributors, industries, and institutions.",
    },
    {
      year: "2023",
      title: "Innovation and Training",
      description: "Launched consultancy and training services to build local capacity in safe LPG handling and plant operations.",
    },
    {
      year: "2024",
      title: "Sustainable Growth",
      description: "Continued expanding into new markets and investing in sustainable energy integration, positioning Gesitech Solutions Africa for the future.",
    },
    {
      year: "Today",
      title: "Trusted Energy Partner",
      description: "From 2017 to today, we remain committed to delivering innovative, safe, and sustainable LPG solutions that power Africa's growth.",
    },
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, milestones.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Drag handlers
  const handleDragStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;

    const diff = clientX - startX;
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    const threshold = 100; // Minimum drag distance to trigger navigation

    if (dragOffset > threshold && currentIndex > 0) {
      handlePrev();
    } else if (dragOffset < -threshold && currentIndex < maxIndex) {
      handleNext();
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  // Mouse events
  const handleMouseDown = (e) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  // Touch events
  const handleTouchStart = (e) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer hover:bg-gesitech-green hover:text-white"
            }`}
            style={{ cursor: currentIndex === 0 ? "not-allowed" : "pointer" }}
          >
            <Icon icon="lucide:chevron-left" width="24" height="24" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${
              currentIndex >= maxIndex
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer hover:bg-gesitech-green hover:text-white"
            }`}
            style={{
              cursor: currentIndex >= maxIndex ? "not-allowed" : "pointer",
            }}
          >
            <Icon icon="lucide:chevron-right" width="24" height="24" />
          </button>

          {/* Timeline container */}
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`${
                isDragging
                  ? ""
                  : "transition-transform duration-700 ease-in-out"
              }`}
              style={{
                transform: `translateX(${
                  -currentIndex * 100 + (dragOffset / window.innerWidth) * 100
                }%)`,
              }}
            >
              <div className="flex">
                {Array.from({ length: maxIndex + 1 }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="relative">
                      {/* Horizontal line */}
                      <div className="absolute top-3 left-0 right-0 h-0.5 bg-gesitech-green"></div>

                      {/* Timeline items for this slide */}
                      <div className="relative flex justify-between">
                        {milestones
                          .slice(slideIndex, slideIndex + itemsPerPage)
                          .map((milestone, index) => (
                            <div
                              key={slideIndex + index}
                              className="flex-1 relative"
                            >
                              {/* Circle node */}
                              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-gesitech-green border-1 border-gesitech-green shadow-lg"></div>

                              {/* Content */}
                              <div className="pt-10 pr-8">
                                <div className="flex items-baseline gap-2 text-gesitech-blue">
                                  <span className="text-xl font-bold ">
                                    {milestone.year}
                                  </span>
                                  <span className="text-xl font-bold ">
                                    –
                                  </span>
                                  <h3 className="text-xl font-bold">
                                    {milestone.title}
                                  </h3>
                                </div>
                                <p className="text-gray-700 text-md leading-relaxed mt-2">
                                  {milestone.description}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress indicators */}
          {/* <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-green-600 w-8" : "bg-gray-400"
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
