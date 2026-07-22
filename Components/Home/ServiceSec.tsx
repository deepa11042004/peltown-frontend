"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Monitor,
  Smartphone,
  Database,
  SearchCode,
  Server,
} from "lucide-react";
import Image from "next/image";

const SERVICES = [
  {
    icon: Monitor,
    title: "Website Design",
    desc: "Sleek, SEO-friendly, and business-driven websites tailored to your goals.",
    img: "/Img/web-dev.png",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Transform your ideas into fully functional, high-performing mobile applications.",
    img: "/Img/app-dev.png",
  },
  {
    icon: Database,
    title: "CRM Solutions",
    desc: "Enhance customer experiences and streamline management with custom CRMs.",
    img: "/Img/crm-sol.png",
  },
  {
    icon: SearchCode,
    title: "SEO & Marketing",
    desc: "Increase online visibility and drive organic traffic with proven strategies.",
    img: "/Img/seo-market.png",
  },
  {
    icon: Server,
    title: "Hosting & Server",
    desc: "Reliable hosting solutions from basic breeze to turbo titan performance.",
    img: "/Img/host-server.png",
  },
];

export default function ServiceSec() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [xRange, setXRange] = useState<[string, string]>(["0%", "-51%"]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Determine card width based on screen size
      let cardWidth = 360; // md:w-90 = 22.5rem = 360px
      if (width < 768) {
        cardWidth = 300; // w-75 = 18.75rem = 300px
      }

      const gap = 24; // gap-6 = 1.5rem = 24px
      const numCards = 5;

      // The parent of the slider track has left/right padding:
      // px-6 (24px) on mobile, md:px-16 (64px) on tablet, lg:px-24 (96px) on desktop.
      // And it's constrained by max-w-7xl (1280px) centered.
      let leftOffset = 24;
      if (width >= 1024) {
        leftOffset = Math.max(96, (width - 1280) / 2 + 96);
      } else if (width >= 768) {
        leftOffset = 64;
      }

      const rightOffset = leftOffset;
      const contentWidth = cardWidth * numCards + gap * (numCards - 1);

      // Target translation moves the track to line up the last card's right edge with the screen's right edge
      const targetTranslationPx =
        width - leftOffset - rightOffset - contentWidth;

      // The motion.div has padding-right: pr-[20vw]
      const elementWidth = contentWidth + width * 0.2;
      const endPercent = (targetTranslationPx / elementWidth) * 100;
      const finalEndPercent = Math.min(0, endPercent);

      setXRange(["0%", `${finalEndPercent}%`]);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track translation adjustment for the horizontal bento timeline slide
  const x = useTransform(scrollYProgress, [0, 1], xRange);

  return (
    <div ref={targetRef} className="relative h-[280vh] bg-white">
      {/* Sticky Frame Viewport Lock */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl w-full mx-auto space-y-12 relative flex flex-col">
          {/* Top Header Split Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full">
            <div className="lg:col-span-6 space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-400 shadow-xs text-left mb-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-black uppercase">
                  What We Offer
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-headingColor leading-tight">
                Comprehensive <br /> IT Services
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-descriptionColor text-base md:text-md font-medium leading-relaxed max-w-xl lg:ml-auto">
                From infrastructure management to custom software development,
                we provide the expertise to propel your business forward.
              </p>
            </div>
          </div>

          {/* SLIDER TRACK */}
          <div className="w-full relative z-10 flex items-center">
            <motion.div style={{ x }} className="flex gap-6 pr-[20vw]">
              {SERVICES.map((feat, index) => {
                return (
                  <div
                    key={index}
                    className="h-80 w-75 md:w-90 shrink-0 bg-cardBgColor border border-cardBorderColor rounded-4xl p-8 flex flex-col justify-between text-left relative overflow-hidden transition-all duration-300 group cursor-pointer hover:bg-[#BFCA16]"
                  >
                    {/* IMAGE CONTAINER */}
                    <div className="relative h-20 w-full">
                      <Image
                        src={feat.img}
                        alt={feat.title}
                        width={150}
                        height={150}
                        className="absolute -left-8"
                      />
                    </div>

                    {/* CONTENT ELEMENT COPIES */}
                    <div className="space-y-2.5 relative z-10">
                      <h3 className="text-xl font-bold tracking-tight text-zinc-950 group-hover:text-white transition-colors duration-200">
                        {feat.title}
                      </h3>
                      <p className="text-xs md:text-sm text-descriptionColor group-hover:text-white/80 font-medium leading-relaxed transition-colors duration-200">
                        {feat.desc}
                      </p>
                    </div>

                    {/* DYNAMIC CURVED INSET CORNER-CUT MASK */}
                    {/* Starts at 0px width/height and scales up dynamically to seamlessly curve inward ONLY on hover */}
                    <div className="absolute -top-px -right-px w-0 h-0 group-hover:w-18 group-hover:h-18 bg-white transition-all duration-300 rounded-bl-3xl pointer-events-none z-20 overflow-visible">
                      {/* Top-Edge Inverted Curve Bridge */}
                      <div className="absolute -left-4 top-0 w-4 h-4 bg-transparent transition-colors duration-300" />

                      {/* Right-Edge Inverted Curve Bridge */}
                      <div className="absolute -bottom-4 right-0 w-4 h-4 bg-transparent transition-colors duration-300" />
                    </div>

                    {/* Top-Right Arrow (Fades in and slots perfectly into the carved curve space) */}
                    <div className="absolute top-0 right-0 w-14 h-14 flex items-center justify-center text-transparent group-hover:text-black transition-all duration-300 delay-75 z-30 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                      <ArrowUpRight className="w-8 h-8 stroke-1" />
                    </div>

                    {/* Soft inside light ambient overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
