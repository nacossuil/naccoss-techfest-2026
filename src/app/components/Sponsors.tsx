'use client'
import React, { useRef, useEffect } from "react";

function PartnersCarousel({ partners }: { partners: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Auto-slide interval (ms)
  const interval = 2200;
  // Number of pixels to scroll per slide
  const scrollAmount = 260;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let isHovered = false;
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    // Auto-slide logic
    const slide = () => {
      if (!isHovered && !isDragging) {
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 1) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    };
    const timer = setInterval(slide, interval);

    // Pause on hover/drag
    const onMouseEnter = () => { isHovered = true; };
    const onMouseLeave = () => { isHovered = false; };
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };
    const onMouseUp = () => { isDragging = false; };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.2;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);

    // Touch events for mobile
    let touchStartX = 0;
    let touchScrollLeft = 0;
    const onTouchStart = (e: TouchEvent) => {
      isDragging = true;
      touchStartX = e.touches[0].pageX;
      touchScrollLeft = container.scrollLeft;
    };
    const onTouchEnd = () => { isDragging = false; };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX;
      const walk = (x - touchStartX) * 1.2;
      container.scrollLeft = touchScrollLeft - walk;
    };
    container.addEventListener("touchstart", onTouchStart);
    container.addEventListener("touchend", onTouchEnd);
    container.addEventListener("touchmove", onTouchMove);

    return () => {
      clearInterval(timer);
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
      container.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex gap-8 overflow-x-auto py-4 px-2 select-none partners-carousel-scrollbar"
      style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
    >
      {partners.map((file, index) => (
        <div
          key={index}
          className="flex items-center justify-center min-w-[220px] max-w-xs shrink-0 px-4"
          style={{ scrollSnapAlign: 'center' }}
        >
          <img
            src={`/partners/${file}`}
            alt={file.replace(/\.[^.]+$/, "")}
            className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-200 cursor-pointer drop-shadow-md bg-transparent"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

import "./partners-carousel.css";

export default function Sponsors() {
  // List of partner/community partner image files from public/partners
  const partners = [
    "20231228_212018 - Akinrinde Joel.png",
    "Blue-Logo (2) - Mubarak Akinwande.png",
    "file_000000006630722fa762903991796d76 - Wisdom Gowon.png",
    "Full Logo - SwiftXR Community.png",
    "gdg.jpg",
    "Icon 7@4x - Zooma.png",
    "IMG-20260420-WA0036.jpg",
    "IMG_0030.JPG",
    "kelekto logo - Ghazali Habeebulahi.jpg",
  ];

  // Sponsors
  const sponsors = [
    {
      label: "Headline Sponsor",
      image: "/sponsors/full  Ethnos Logo (4) - Halimot Abdulrasaq.png",
      name: "Ethnos"
    },
    {
      label: "Platinum Sponsor",
      image: "/sponsors/IMG_5915 - Imam Abubakar.png",
      name: "Platinum Sponsor"
    }
  ];

  return (
    <section className="py-16 bg-transparent border-y border-[#8cfe63]/20 overflow-hidden relative">
      {/* Sponsors Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-20">
        <p className="text-gray-500 font-mono text-sm tracking-widest uppercase mb-4">
          Our Sponsors
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {sponsors.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-white/5 rounded-xl p-4 flex items-center justify-center mb-3 shadow-lg">
                <img
                  src={s.image}
                  alt={s.name}
                  className="max-h-28 md:max-h-32 w-auto object-contain"
                  loading="lazy"
                  style={{ background: 'transparent' }}
                />
              </div>
              <span className="text-xs font-semibold text-[#8cfe63] uppercase tracking-wider mt-1">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center relative z-20">
        <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
          Partners & Community Partners
        </p>
      </div>

      {/* Auto-sliding and manually controllable partners carousel */}
      <PartnersCarousel partners={partners} />
    </section>
  );
}