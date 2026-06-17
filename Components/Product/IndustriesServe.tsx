"use client";

import React from "react";
import { motion } from "framer-motion";

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

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {items.map((industry) => {
            return (
              <motion.div
                key={industry.name}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className={`
                  relative
                  aspect-[1]
                  rounded-2xl
                  border
                  border-[#242424]
                  bg-white/1
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                  group
                `}
              >
                {/* Dot */}

                <span
                  className="
                    absolute
                    top-5
                    left-5
                    h-2
                    w-2
                    rounded-full
                    bg-[#BFCA16]
                    transition-all
                    duration-300
                    group-hover:scale-150
                  "
                />

                {/* Hover Glow */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    bg-[radial-gradient(circle_at_center,#000,transparent_70%)]
                  "
                />

                {/* Text */}

                <h3
                  className="
                    px-6
                    text-center
                    text-base
                    md:text-xl
                    font-semibold
                    leading-snug
                    tracking-tight
                    text-white
                    z-10
                  "
                >
                  {industry.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
