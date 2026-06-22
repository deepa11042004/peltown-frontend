"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const INDUSTRIES = [
  { name: "Fashion & Apparel" },
  { name: "Electronics" },
  { name: "Grocery & FMCG" },
  { name: "Beauty & Cosmetics" },
  { name: "Furniture" },

  { name: "Healthcare" },
  { name: "Industrial Products" },
  { name: "Automotive Parts" },
  { name: "Books & Education" },
  { name: "Wholesale & Distribution" },

  { name: "Pet Supplies" },
  { name: "Sports & Fitness" },
  { name: "Luxury Brands" },
  { name: "Home Decor" },
  { name: "Marketplace" },
];

interface IndustryItem {
  name: string;
}

interface IndustriesServeProps {
  title?: string;
  subtitle?: string;
  desc?: string;
  items?: IndustryItem[];
}

export default function IndustriesServe({
  title = "Industries We Serve",
  subtitle = "Versatile Solutions",
  desc = "Our e-commerce suite powers businesses across diverse industries, from retail to manufacturing.",

  items = INDUSTRIES,
}: IndustriesServeProps) {
  const row1 = items.filter((_, i) => i % 2 === 0);
  const row2 = items.filter((_, i) => i % 2 !== 0);

  const doubledRow1 = [...row1, ...row1, ...row1, ...row1, ...row1, ...row1];
  const doubledRow2 = [...row2, ...row2, ...row2, ...row2, ...row2, ...row2];

  return (
    <section className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-20 bg-black text-white">
      <div className="relative max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/3">
            <span className="h-2 w-2 rounded-full bg-[#BFCA16] animate-pulse" />

            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-zinc-300">
              {subtitle}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {title}
          </h2>

          <p className="max-w-2xl mx-auto text-zinc-400 text-sm md:text-base leading-7">
            {desc}
          </p>
        </div>

        {/* Dual Infinite Loop Marquee Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Track 1: Moving Left */}
          <div className="relative w-screen left-1/2 right-1/2 mx-[-50vw] overflow-hidden py-2 mask-[linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
              {doubledRow1.map((industry, index) => {
                return (
                  <div
                    key={`row1-${industry.name}-${index}`}
                    className="group px-6 py-3 bg-zinc-900 text-neutral-300 font-medium rounded-full text-md border border-neutral-800 flex items-center gap-2 whitespace-nowrap cursor-default hover:text-white hover:border-[#BFCA16] transition-colors duration-200"
                  >
                    {industry.name}
                    <ArrowRight className="w-4 h-4 opacity-60 text-neutral-400 group-hover:opacity-100 transition-transform duration-200 group-hover:-rotate-45 group-hover:text-[#BFCA16]" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Track 2: Moving Right */}
          <div className="relative w-screen left-1/2 right-1/2 mx-[-50vw] overflow-hidden py-2 mask-[linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <div className="flex gap-6 w-max animate-marquee-reverse hover:[animation-play-state:paused]">
              {doubledRow2.map((industry, index) => {
                return (
                  <div
                    key={`row2-${industry.name}-${index}`}
                    className="group px-6 py-3 bg-zinc-900 text-neutral-300 font-medium rounded-full text-md border border-neutral-800 flex items-center gap-2 whitespace-nowrap cursor-default hover:text-white hover:border-[#BFCA16] transition-colors duration-200"
                  >
                    {industry.name}
                    <ArrowRight className="w-4 h-4 opacity-60 text-neutral-400 group-hover:opacity-100 transition-transform duration-200 group-hover:-rotate-45 group-hover:text-[#BFCA16]" />
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
