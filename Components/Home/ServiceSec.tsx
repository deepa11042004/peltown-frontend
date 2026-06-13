"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Monitor,
  Smartphone,
  Database,
  SearchCode,
  Server,
} from "lucide-react";

const SERVICES = [
  {
    icon: Monitor,
    title: "Website Design",
    desc: "Sleek, SEO-friendly, and business-driven websites tailored to your goals.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Transform your ideas into fully functional, high-performing mobile applications.",
  },
  {
    icon: Database,
    title: "CRM Solutions",
    desc: "Enhance customer experiences and streamline management with custom CRMs.",
  },
  {
    icon: SearchCode,
    title: "SEO & Marketing",
    desc: "Increase online visibility and drive organic traffic with proven strategies.",
  },
  {
    icon: Server,
    title: "Hosting & Server",
    desc: "Reliable hosting solutions from basic breeze to turbo titan performance.",
  },
];

export default function ServiceSec() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Track translation adjustment for the horizontal bento timeline slide
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-51%"]);

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
                const IconComponent = feat.icon;
                return (
                  <div
                    key={index}
                    className="w-75 md:w-90 aspect-[1/1.1] shrink-0 bg-cardBgColor border border-cardBorderColor rounded-4xl p-8 flex flex-col justify-between text-left relative overflow-hidden transition-all duration-300 group cursor-pointer hover:bg-[#BFCA16]"
                  >
                    {/* ICON VECTOR OBJECT CONTAINER */}
                    <div className="flex items-center justify-between w-full relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-white text-zinc-900 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:text-white shadow-xs">
                        <IconComponent className="w-5 h-5 stroke-[1.75]" />
                      </div>
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
