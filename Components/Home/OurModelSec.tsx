"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// --- DATA ---
const STEPS = [
  {
    num: "1",
    title: "Brainstorming Ideas",
    desc: "Generate innovative ideas and concepts to set a solid foundation for your project.",
    rotation: "-rotate-3",
    img: "/Img/brain.webp",
  },
  {
    num: "2",
    title: "Product Design",
    desc: "Craft modern, intuitive UI/UX layouts tailored to your business needs.",
    rotation: "rotate-2",
    img: "/Img/design.webp",
  },
  {
    num: "3",
    title: "Front-End Development",
    desc: "Transform designs into responsive, pixel-perfect, and ultra-fast client-side interfaces.",
    rotation: "-rotate-1",
    img: "/Img/front.webp",
  },
  {
    num: "4",
    title: "Digital Marketing",
    desc: "Deploy data-driven marketing campaigns to reach the target audience and boost business growth.",
    rotation: "rotate-3",
    img: "/Img/marketing.webp",
  },
  {
    num: "5",
    title: "SEO Optimization",
    desc: "Implement search engine best practices to enhance visibility and drive organic traffic.",
    rotation: "-rotate-2",
    img: "/Img/seo.webp",
  },
  {
    num: "6",
    title: "Back-End Development",
    desc: "Engineer secure, scalable databases and robust backend logic to power the platform.",
    rotation: "rotate-1",
    img: "/Img/back.webp",
  },
];

export default function OurModelSec() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [xRange, setXRange] = useState<[string, string]>(["10%", "-70%"]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let cardWidth = 380; // md:w-95 (23.75rem = 380px)
      if (width < 640) {
        cardWidth = 300; // w-75 (18.75rem = 300px)
      } else if (width < 768) {
        cardWidth = 350; // sm:w-87.5 (21.875rem = 350px)
      }

      const gap = 32; // gap-8 (2rem = 32px)
      const numCards = 6;
      // padding is px-[5vw] on both sides, which totals 10vw of window width
      const padding = width * 0.1;
      const totalTrackWidth =
        cardWidth * numCards + gap * (numCards - 1) + padding;

      // target translation puts the right edge of track at the right edge of viewport
      const targetTranslationPx = width - totalTrackWidth;
      const endPercent = (targetTranslationPx / totalTrackWidth) * 100;

      // Start with 5% offset on mobile for more space, 10% otherwise
      const startPercent = width < 640 ? 5 : 10;

      setXRange([`${startPercent}%`, `${endPercent}%`]);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], xRange);

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-headingColor">
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
                className={`relative w-75 sm:w-87.5 md:w-95 aspect-[4/4.2] shrink-0 bg-cardBgColor border border-cardBorderColor hover:border-(--highlight) rounded-3xl p-8 md:p-10 shadow-xl shadow-zinc-400/20 flex flex-col justify-center gap-20 transform ${step.rotation} transition-transform duration-300 hover:rotate-0 hover:scale-[1.02] group text-left`}
              >
                {/* Large Counter Step ID Metric */}
                <div className="text-6xl md:text-7xl font-light tracking-tighter text-zinc-900 select-none font-sans">
                  {step.num}
                </div>

                <div className="img-container absolute top-10 right-6">
                  <Image
                    src={step.img}
                    alt={step.title}
                    width={120}
                    height={120}
                  />
                </div>

                {/* Info Text Stack Mapped cleanly */}
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-950 group-hover:text-(--highlight) transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-descriptionColor text-xs md:text-sm font-medium leading-relaxed">
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
