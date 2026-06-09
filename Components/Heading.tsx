"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface HeadingProps {
  tagline: string;
  title: string;
  description?: string;
  highlightColor?: string; // Defaults to your brand green #BFCA16
  theme?: "black" | "white";
}

export default function Heading({
  tagline,
  title,
  description,
  highlightColor = "#BFCA16",
  theme = "white",
}: HeadingProps) {
  // Animation variants for a smooth staggered reveal
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const isBlack = theme === "black";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`w-full min-h-[50vh] flex flex-col items-center text-center pt-30 px-6 transition-colors duration-300 ${
        isBlack ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Dynamic Tagline with Pulsing Indicator */}
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-2 mb-4"
      >
        <span
          style={{ backgroundColor: highlightColor }}
          className="h-2 w-2 rounded-full animate-pulse"
        />
        <span
          style={{ color: highlightColor }}
          className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase"
        >
          {tagline}
        </span>
      </motion.div>

      {/* Main Title */}
      <motion.h2
        variants={itemVariants}
        className={`text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl leading-[1.1] ${
          isBlack ? "text-white" : "text-zinc-900"
        }`}
      >
        {title}
      </motion.h2>

      {/* Optional Description */}
      {description && (
        <motion.p
          variants={itemVariants}
          className={`mt-6 text-base md:text-lg lg:text-xl max-w-2xl font-light leading-relaxed ${
            isBlack ? "text-zinc-400" : "text-zinc-500"
          }`}
        >
          {description}
        </motion.p>
      )}

      {/* Optional Subtle Underline Accent */}
      <motion.div
        variants={itemVariants}
        style={{ backgroundColor: highlightColor }}
        className="h-1 w-12 rounded-full mt-8 opacity-20"
      />
    </motion.div>
  );
}
