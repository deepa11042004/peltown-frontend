"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Types ---
interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProcessSecProps {
  title?: React.ReactNode;
  desc?: string;
  steps?: ProcessStep[];
}

// --- Data ---
const defaultProcessSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Requirement Analysis",
    desc: 'We deep-dive into your business goals, target audience, and Delhi-based competitors to identify "content gaps".',
  },
  {
    num: "02",
    title: "Strategy & Wireframing",
    desc: 'Creating a detailed architecture and SEO framework, including a "Keyword Cluster" strategy.',
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "Crafting clean, modern interfaces that prioritize user engagement and conversion optimization.",
  },
  {
    num: "04",
    title: "Agile Development",
    desc: "Building the site using modern technologies (Laravel, Next.js) with a focus on clean, crawlable code.",
  },
  {
    num: "05",
    title: "Rigorous Testing",
    desc: "Performance, security, responsiveness, and speed checks to ensure the site is launch-ready.",
  },
  {
    num: "06",
    title: "Deployment & AEO",
    desc: "Launching the site and ensuring it is indexed properly for both Google and AI-driven search engines.",
  },
];

export default function ProcessSec({
  title = "The PELTOWN 6-Step Development Process",
  desc = "Our methodology combines digital strategy with technical excellence to ensure project success.",
  steps = defaultProcessSteps,
}: ProcessSecProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCards = steps.length;
  const anglePerCard = 360 / totalCards; 
  const radius = 430; // Distance from center

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalCards - 1 ? 0 : prev + 1));
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  // Calculate rotation for the carousel container
  const containerRotation = -currentIndex * anglePerCard;

  return (
    <section className="py-24 px-4 md:px-12 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-headingColor">
            {title}
          </h2>
          <p className="text-descriptionColor font-medium text-md max-w-2xl mx-auto">
            {desc}
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative flex items-center justify-center min-h-95 md:min-h-107.5 w-full">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-8 z-30 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 border border-zinc-200 hover:scale-110 hover:shadow-xl hover:border-[#BFCA16]/40"
          >
            <ChevronLeft className="w-5 h-5 text-zinc-700" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 md:right-8 z-30 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 border border-zinc-200 hover:scale-110 hover:shadow-xl hover:border-[#BFCA16]/40"
          >
            <ChevronRight className="w-5 h-5 text-zinc-700" />
          </button>

          {/* 3D Scene */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ perspective: "1400px" }}
          >
            {/* Rotating Carousel */}
            <motion.div
              className="relative w-67.5 md:w-77.5 h-72.5 md:h-82.5"
              style={{
                transformStyle: "preserve-3d",
              }}
              animate={{ rotateY: containerRotation }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 25,
                mass: 1,
              }}
            >
              {steps.map((step, index) => {
                const cardAngle = index * anglePerCard;

                return (
                  <motion.div
                    key={index}
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                    }}
                    initial={false}
                  >
                    {/* Card Content */}
                    <div className="relative p-6 md:p-7 bg-zinc-50 border border-zinc-200 rounded-2xl flex flex-col justify-between h-full w-full shadow-lg backdrop-blur-sm">
                      {/* Subtle gradient overlay for depth */}
                      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/50 to-transparent pointer-events-none" />

                      <div className="space-y-3 relative z-10">
                        <span className="text-3xl font-mono font-bold text-zinc-200">
                          {step.num}
                        </span>
                        <div className="space-y-2">
                          <h4 className="font-bold text-base md:text-lg text-zinc-950 tracking-tight leading-snug">
                            {step.title}
                          </h4>
                          <p className="text-xs md:text-sm text-descriptionColor font-medium leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      <div className="h-1.5 w-10 rounded-full bg-zinc-200 mt-3 relative z-10" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Pagination Dots - Fixed z-index to be on top */}
        <div className="flex items-center justify-center gap-2 mt-4 relative z-30">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2.5 bg-[#BFCA16]"
                  : "w-2.5 h-2.5 bg-zinc-300 hover:bg-zinc-400"
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
