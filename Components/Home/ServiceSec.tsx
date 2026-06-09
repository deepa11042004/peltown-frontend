"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Database,
  SearchCode,
  Server,
  ArrowUpRight,
} from "lucide-react";

const services = [
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="bg-white text-black py-24 px-6 md:px-12 lg:px-16 w-full flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-16">
        {/* Top Header Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end w-full">
          <div className="lg:col-span-6 space-y-2">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse"></span>
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#BFCA16] uppercase">
                What We Offer
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
              Comprehensive IT Services
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-zinc-500 text-base md:text-lg font-light leading-relaxed max-w-xl lg:ml-auto">
              From infrastructure management to custom software development, we
              provide the expertise to propel your business forward.
            </p>
          </div>
        </div>

        {/* Clean, Uniform Horizontal Cards Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative flex flex-col justify-between rounded-3xl overflow-hidden p-6 md:p-8 min-h-72.5 group cursor-pointer"
                style={{
                  background: "#f9f9fb",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
                whileHover="hover"
              >
                {/* Dynamic Slide-up hover accent panel */}
                <motion.div
                  className="absolute inset-0 z-0"
                  style={{ background: "#BFCA16", originY: 1 }}
                  variants={{ hover: { scaleY: 1 }, initial: { scaleY: 0 } }}
                  initial={{ scaleY: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Content Block */}
                <div className="relative z-10 space-y-6">
                  {/* Icon Sphere */}
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors border"
                    style={{
                      background: "#ffffff",
                      borderColor: "rgba(0,0,0,0.06)",
                    }}
                    variants={{
                      hover: {
                        scale: 1.05,
                        backgroundColor: "rgba(255,255,255,0.15)",
                        borderColor: "rgba(255,255,255,0.2)",
                      },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-5 h-5 text-[#BFCA16] group-hover:text-white transition-colors duration-300" />
                  </motion.div>

                  {/* Text Information */}
                  <div className="space-y-2">
                    <motion.h3
                      className="text-lg font-bold tracking-tight leading-[1.2]"
                      style={{ color: "#18181b" }}
                      variants={{ hover: { color: "#ffffff" } }}
                      transition={{ duration: 0.25 }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      className="text-sm font-normal leading-relaxed"
                      style={{ color: "#71717a" }}
                      variants={{ hover: { color: "rgba(255,255,255,0.85)" } }}
                      transition={{ duration: 0.25 }}
                    >
                      {service.desc}
                    </motion.p>
                  </div>
                </div>

                {/* Subtle Interactive Link Arrow */}
                <motion.div
                  className="relative z-10 flex justify-end pt-4"
                  variants={{
                    hover: { opacity: 1, y: 0 },
                    initial: { opacity: 0, y: 4 },
                  }}
                  initial={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-sm font-bold flex items-center gap-0.5 text-[#BFCA16] group-hover:text-white transition-colors duration-300">
                    Explore <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
