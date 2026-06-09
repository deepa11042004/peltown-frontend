"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const HOW_WE_DO_DATA = [
  {
    id: "01",
    title: "Discovery & Brainstorming",
    tagline:
      "We start by understanding your business goals, target audience, and requirements. This phase involves deep research and brainstorming ideas to set a solid foundation.",
    image: "/Img/how1.webp",
  },
  {
    id: "02",
    title: "Planning & Strategy",
    tagline:
      "We create a detailed roadmap, site architecture, and wireframes. This ensures that everyone is aligned on the project scope and deliverables before development begins.",
    image: "/Img/how2.webp",
  },
  {
    id: "03",
    title: "Design & Development",
    tagline:
      "Our designers create stunning visuals while our developers bring them to life with clean, efficient code. We follow best practices for performance and security.",
    image: "/Img/how3.webp",
  },
  {
    id: "04",
    title: "Launch & Support",
    tagline:
      "After rigorous testing, we launch your project. But our relationship doesn't end there; we provide ongoing support and maintenance to ensure long-term success.",
    image: "/Img/how4.webp",
  },
];

export default function HowWeDoSec() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Toggle function for mobile/tablet clicks
  const handleItemClick = (idx: number) => {
    setActiveIndex(activeIndex === idx ? 0 : idx);
  };

  // Active item
  const activeItem = HOW_WE_DO_DATA[activeIndex];

  return (
    <section className="relative bg-black min-h-screen py-20 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* MAIN CONTENT: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT: List Items */}
          <div className="lg:col-span-7 flex flex-col border-t border-white/10">
            {HOW_WE_DO_DATA.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseLeave={() => setActiveIndex(0)}
                  onClick={() => handleItemClick(idx)}
                  className="group relative border-b border-white/10 py-8 md:py-12 cursor-pointer z-10"
                >
                  <div className="flex items-center justify-between gap-4">
                    {/* Number + Title */}
                    <div className="flex items-baseline gap-4 md:gap-6 flex-1 min-w-0">
                      <span
                        className={`text-sm md:text-base font-mono font-medium transition-colors duration-500 ${
                          isActive ? "text-(--highlight)" : "text-white/30"
                        }`}
                      >
                        {item.id}
                      </span>
                      <h3
                        className={`text-white text-2xl md:text-4xl lg:text-5xl font-medium tracking-tighter transition-all duration-500 ${
                          isActive
                            ? "opacity-100"
                            : "opacity-70 group-hover:opacity-100"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Arrow Icon */}
                    <div className="relative w-8 h-8 md:w-12 md:h-12 shrink-0 flex items-center justify-center">
                      <motion.svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white/40 group-hover:text-white transition-colors"
                        animate={{
                          rotate: isActive ? 0 : -45,
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <path d="M12 5v14" />
                        <path d="M19 12l-7 7-7-7" />
                      </motion.svg>
                    </div>
                  </div>

                  {/* REVEAL TAGLINE */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-0 md:pl-12 pt-3 md:pt-4">
                          <p className="text-white/70 text-base md:text-xl lg:text-2xl font-light max-w-2xl leading-relaxed">
                            {item.tagline}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Sticky Image Preview */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="sticky top-24 h-[calc(100vh-12rem)] flex items-center justify-center">
              <div className="relative w-full aspect-4/5 max-h-150 rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeItem.image}
                      alt={activeItem.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 0px, 40vw"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                    {/* Step label */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-(--highlight) font-mono text-sm font-medium">
                          STEP {activeItem.id}
                        </span>
                        <div className="h-px flex-1 bg-white/20" />
                      </div>
                      <h4 className="text-white text-xl md:text-2xl font-medium tracking-tight">
                        {activeItem.title}
                      </h4>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE: Inline Image Preview (appears below active item) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id + "-mobile"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="lg:hidden mt-8 relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-white/5 border border-white/10"
          >
            <Image
              src={activeItem.image}
              alt={activeItem.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-(--highlight) font-mono text-xs font-medium">
                  STEP {activeItem.id}
                </span>
                <div className="h-px flex-1 bg-white/20" />
              </div>
              <h4 className="text-white text-lg font-medium tracking-tight">
                {activeItem.title}
              </h4>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
