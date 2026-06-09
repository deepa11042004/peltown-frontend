"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface DetailItem {
  id: string;
  title: string;
  tagline: string;
  bullets: string[];
  image: string;
  href: string;
}

interface DetailSecProps {
  detail: {
    tagline: string;
    title: string;
    description: string;
    list: DetailItem[];
  };
}

export default function DetailSec({ detail }: DetailSecProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Toggle function for mobile/tablet clicks
  const handleItemClick = (idx: number) => {
    setActiveIndex(activeIndex === idx ? 0 : idx);
  };

  // Active item
  const activeItem = detail.list[activeIndex] || detail.list[0];

  return (
    <section className="relative bg-black min-h-screen py-20 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-[#BFCA16] animate-pulse" />
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-[#BFCA16] uppercase">
              {detail.tagline}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            {detail.title}
          </h2>
          <p className="text-zinc-400 text-sm md:text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            {detail.description}
          </p>
        </div>

        {/* MAIN CONTENT: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT: List Items */}
          <div className="lg:col-span-7 flex flex-col border-t border-white/10">
            {detail.list.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(idx)}
                  className="group relative border-b border-white/10 py-8 md:py-12 cursor-pointer z-10"
                >
                  <div className="flex items-center justify-between gap-4">
                    {/* Number + Title */}
                    <div className="flex items-baseline gap-4 md:gap-6 flex-1 min-w-0">
                      <span
                        className={`text-sm md:text-base font-mono font-medium transition-colors duration-500 ${
                          isActive ? "text-[#BFCA16]" : "text-white/30"
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

                  {/* REVEAL TAGLINE & BULLETS */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-0 md:pl-12 pt-3 md:pt-4 space-y-4">
                          <p className="text-white/70 text-base md:text-xl lg:text-2xl font-light max-w-2xl leading-relaxed">
                            {item.tagline}
                          </p>

                          {/* Bullet Points if any */}
                          {item.bullets.length > 0 && (
                            <ul className="space-y-2.5 pt-2">
                              {item.bullets.map((bullet, bulletIdx) => (
                                <li
                                  key={bulletIdx}
                                  className="flex items-center gap-3 text-white/50 text-sm md:text-base lg:text-lg font-light"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#BFCA16] shrink-0" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Learn More Link */}
                          <div className="pt-4 pb-2">
                            <Link
                              href={item.href}
                              className="inline-flex items-center gap-2 text-[#BFCA16] hover:text-[#BFCA16]/80 text-sm md:text-base font-bold tracking-wider uppercase group/btn transition-colors"
                            >
                              <span>Learn More</span>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="group-hover/btn:translate-x-1 transition-transform duration-250"
                              >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Sticky Image Preview */}
          {activeItem && (
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
                          <span className="text-[#BFCA16] font-mono text-sm font-medium">
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
          )}
        </div>

        {/* MOBILE: Inline Image Preview (appears below active item) */}
        {activeItem && (
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
                  <span className="text-[#BFCA16] font-mono text-xs font-medium">
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
        )}
      </div>
    </section>
  );
}
