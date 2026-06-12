"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// --- DATA ---
const STEPS = [
  {
    num: "1",
    title: "Brainstorming Ideas",
    desc: "Generate innovative ideas and concepts to set a solid foundation for your project.",
    rotation: "-rotate-3",
  },
  {
    num: "2",
    title: "Product Design",
    desc: "Craft modern, intuitive UI/UX layouts tailored to your business needs.",
    rotation: "rotate-2",
  },
  {
    num: "3",
    title: "Front-End Development",
    desc: "Transform designs into responsive, pixel-perfect, and ultra-fast client-side interfaces.",
    rotation: "-rotate-1",
  },
  {
    num: "4",
    title: "Digital Marketing",
    desc: "Deploy data-driven marketing campaigns to reach the target audience and boost business growth.",
    rotation: "rotate-3",
  },
  {
    num: "5",
    title: "SEO Optimization",
    desc: "Implement search engine best practices to enhance visibility and drive organic traffic.",
    rotation: "-rotate-2",
  },
  {
    num: "6",
    title: "Back-End Development",
    desc: "Engineer secure, scalable databases and robust backend logic to power the platform.",
    rotation: "rotate-1",
  },
];

export default function OurModelSec() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-70%"]);

  return (
    <div ref={targetRef} className="relative h-[350vh] bg-white">
      {/* Sticky viewport frame locks into view during scroll */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center py-20">
        {/* HEADER HUB */}
        <div className="text-center space-y-4 mb-12 px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-400 shadow-xs mx-auto">
            <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-black uppercase">
              Our Model
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900">
            How We Do It.
          </h2>
        </div>

        {/* HORIZONTAL MOVING TRACK */}
        <div className="relative flex items-center w-full">
          {/* SVG Connector Line Layout Overlay behind cards */}
          <div className="absolute left-0 right-0 top-1/3 h-1 pointer-events-none z-0 hidden md:block">
            <svg
              className="w-full h-20 fill-none stroke-[#BFCA16] stroke-4 stroke-dasharray-[6,6]"
              viewBox="0 0 1440 80"
            >
              <path d="M0,40 Q360,80 720,40 T1440,40" />
            </svg>
          </div>

          <motion.div
            style={{ x }}
            className="flex gap-8 px-[5vw] relative z-10"
          >
            {STEPS.map((step, index) => (
              <div
                key={index}
                className={`w-75 sm:w-87.5 md:w-95 aspect-[4/4.2] shrink-0 bg-[#F9F9FB] border border-zinc-300 hover:border-(--highlight) rounded-3xl p-8 md:p-10 shadow-xl shadow-zinc-400/20 flex flex-col justify-between transform ${step.rotation} transition-transform duration-300 hover:rotate-0 hover:scale-[1.02] group text-left`}
              >
                {/* Large Counter Step ID Metric */}
                <div className="text-6xl md:text-7xl font-light tracking-tighter text-zinc-900 select-none font-sans">
                  {step.num}
                </div>

                {/* Info Text Stack Mapped cleanly */}
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-950 group-hover:text-(--highlight) transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-xs md:text-sm font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
