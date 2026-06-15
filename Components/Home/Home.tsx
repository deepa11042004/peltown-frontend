"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HERO_CONTENT = [
  {
    tagline: "Design & Development",
    highlight: "Website Design",
    subtext: "App Development.",
    desc: "The best place for all IT solutions in one place. We specialize in modern website development, high-performance mobile apps, and creative UI/UX design.",
  },
  {
    tagline: "Enterprise Systems",
    highlight: "Custom CRM",
    subtext: "ERP Solutions.",
    desc: "Streamline your business operations with our bespoke CRM and ERP systems. Tailored specifically for your unique organizational workflows.",
  },
  {
    tagline: "Digital Marketing",
    highlight: "Results-Driven",
    subtext: "Digital Marketing.",
    desc: "Dominate search engines and social media. Let our experts drive targeted traffic and increase your online revenue exponentially.",
  },
];

const SERVICES = [
  { label: "Web Development" },
  { label: "AI Solutions" },
  { label: "Mobile Apps" },
  { label: "Digital Marketing" },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  // Loop through titles every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % HERO_CONTENT.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Animation variants for staggered initial page fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  // Blur text animation variants
  const blurVariants: Variants = {
    enter: {
      filter: "blur(12px)",
      opacity: 0,
      y: 10,
    },
    center: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      filter: "blur(12px)",
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col justify-between py-24 px-6 md:px-12 lg:px-20 overflow-hidden select-none">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03),transparent_45%)] pointer-events-none" />

      {/* Main Hero Content Area */}
      <motion.div
        className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content Column */}
        <div className="flex-1 flex flex-col justify-end w-full">
          {/* Dynamic Blur Headline Container */}
          <motion.div
            variants={itemVariants}
            className="mb-12 min-h-48 sm:min-h-64 md:min-h-80 lg:min-h-96 flex flex-col justify-end"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={blurVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col gap-4 items-start"
              >
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-400 shadow-xs text-left"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-black uppercase">
                    {HERO_CONTENT[index].tagline}
                  </span>
                </motion.div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
                  {HERO_CONTENT[index].highlight}
                  <span className="block mt-2 hero-subtext">
                    {HERO_CONTENT[index].subtext}
                  </span>
                </h1>
                {HERO_CONTENT[index].desc && (
                  <p className="mt-4 text-neutral-300 text-sm sm:text-base max-w-xl leading-relaxed">
                    {HERO_CONTENT[index].desc}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 items-center"
            variants={itemVariants}
          >
            <button className="px-8 py-4 bg-neutral-300 text-black font-medium rounded-full text-lg hover:bg-white transition-colors duration-200 shadow-lg active:scale-98 flex items-center gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 bg-zinc-900 text-neutral-300 font-medium rounded-full text-lg border border-neutral-800 hover:bg-[#1f1f1f] hover:border-neutral-700 transition-all duration-200 active:scale-98">
              Learn more
            </button>
          </motion.div>
        </div>

        {/* Hero Image on Right Side */}
        <motion.div
          className="relative w-full lg:w-[45%] aspect-square max-w-125 pointer-events-none hidden lg:block select-none z-0"
          variants={itemVariants}
        >
          <Image
            src="/Img/home.png"
            alt="Hero Illustration"
            fill
            priority
            className="object-contain object-right"
          />
        </motion.div>
      </motion.div>

      {/* Bottom Infinite Marquee Section */}
      <motion.div
        className="mt-16 border-t border-neutral-900 pt-8 w-full relative overflow-hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {/* Left & Right Blending Edge Fades */}
        <div className="absolute left-0 top-8 bottom-0 w-16 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-8 bottom-0 w-16 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex overflow-hidden w-full gap-6">
          <motion.div
            className="flex flex-nowrap gap-6 shrink-0 pr-6"
            animate={{ x: "-50%" }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {/* Double mapping guarantees a completely seamless loop without gaps */}
            {[...SERVICES, ...SERVICES, ...SERVICES, ...SERVICES].map(
              (service, idx) => (
                <div
                  key={idx}
                  className="group px-6 py-3 bg-zinc-900 text-neutral-300 font-medium rounded-full text-md border border-neutral-800 flex items-center gap-2 whitespace-nowrap cursor-default hover:text-white hover:border-neutral-300 transition-colors duration-200"
                >
                  {service.label}
                  <ArrowRight className="w-4 h-4 opacity-60 text-neutral-400 group-hover:opacity-100 transition-transform duration-200 group-hover:-rotate-45" />
                </div>
              ),
            )}
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
