"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProductIntroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  bullets?: string[];
  finalText?: string;
}

export default function ProductIntro({
  title = "One Platform. Complete Business Control.",
  subtitle = "The Challenge & Solution",
  description = "Many businesses struggle because information is scattered across spreadsheets, WhatsApp groups, emails, accounting software, and disconnected systems.",
  bullets = [
    "Teams waste time searching for fragmented documents.",
    "Managers lack real-time operations visibility.",
    "Inventory counts become highly inaccurate.",
    "Important customer follow-ups get missed regularly.",
    "Decision-making reports become slow and unreliable.",
  ],
  finalText = "We eliminate these operational bottlenecks by bringing every department, data stream, and business process together under a single, cohesive dashboard.",
}: ProductIntroProps) {
  return (
    <section className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.2fr] gap-16 items-center">
        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="max-w-xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-300 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-black uppercase">
              {subtitle}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-tight">
            {title}
          </h2>

          <p className="text-zinc-600 font-medium text-sm md:text-base leading-relaxed">
            {description}
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#BFCA16]">
              <ArrowRight className="w-5 h-5" />
              <span className="text-xs font-bold tracking-wider uppercase">
                Our Solution
              </span>
            </div>
            <p className="text-zinc-800 font-semibold text-sm md:text-base leading-relaxed relative z-10">
              {finalText}
            </p>
          </div>
        </motion.div>

        {/* RIGHT */}

        <div className="relative overflow-hidden py-8">
          {/* left fade */}

          <div className="absolute left-0 top-0 z-20 h-full w-24 bg-linear-to-r from-[#ffff] to-transparent" />

          {/* right fade */}

          <div className="absolute right-0 top-0 z-20 h-full w-24 bg-linear-to-l from-[#ffff] to-transparent" />

          {/* carousel */}

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-5 w-max"
          >
            {[...bullets, ...bullets].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  y: -8,
                  rotate: 0,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.25,
                }}
                style={{
                  rotate:
                    idx % 3 === 0 ? "-2deg" : idx % 3 === 1 ? "2deg" : "-1deg",
                }}
                className="
                  w-[320px]
                  min-h-45
                  shrink-0
                  rounded-[28px]
                  bg-(--cardBgColor)
                  border
                  border-(--cardBorderColor)
                  p-8
                  shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                  flex
                  items-center
                "
              >
                <p className="text-lg md:text-xl font-medium leading-8 text-zinc-700">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
