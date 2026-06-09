"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  MapPin,
  Briefcase,
  ArrowUpRight,
  Code2,
  Palette,
  Megaphone,
} from "lucide-react";

// --- DATA STRUCTURE MAPPED DIRECTLY FROM THE IMAGE ---
const openPositions = [
  {
    title: "Senior PHP Developer",
    location: "Delhi, India (Hybrid)",
    type: "Full Time",
    icon: Code2,
    department: "Engineering",
  },
  {
    title: "UI/UX Designer",
    location: "Remote / Delhi",
    type: "Full Time",
    icon: Palette,
    department: "Design",
  },
  {
    title: "Digital Marketing Executive",
    location: "Delhi, India",
    type: "Full Time",
    icon: Megaphone,
    department: "Marketing",
  },
];

export default function CareerSec() {
  // Animation variants for entering elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-20 w-full min-h-[50vh] flex flex-col items-center justify-start font-sans antialiased">
      <div className="max-w-4xl mx-auto w-full space-y-12">
        {/* ================= JOB CARDS CONTAINER ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-4 w-full"
        >
          {openPositions.map((job, index) => {
            const IconComponent = job.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group relative bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:bg-zinc-900 hover:border-[#BFCA16]/30 hover:shadow-xl hover:shadow-zinc-900/50 transition-all duration-300 cursor-pointer"
              >
                {/* Left Block: Icon & Job Meta Details */}
                <div className="flex items-start md:items-center gap-5 text-left">
                  {/* Department Icon Sphere */}
                  <div className="w-12 h-12 rounded-xl bg-zinc-850 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-[#BFCA16] group-hover:border-[#BFCA16]/20 transition-colors shrink-0 shadow-xs">
                    <IconComponent className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  <div className="space-y-2">
                    {/* Position Title */}
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-[#BFCA16] transition-colors">
                      {job.title}
                    </h3>

                    {/* Informative Sub-tags Row */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-400 font-medium">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{job.location}</span>
                      </div>
                      <div className="h-3 w-px bg-zinc-700 hidden sm:block" />
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
                        <span className="text-[#BFCA16] font-semibold">
                          {job.type}
                        </span>
                      </div>
                      <div className="h-3 w-px bg-zinc-700 hidden sm:block" />
                      <span className="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider">
                        {job.department}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Block: Action Button Reveal */}
                <div className="w-full sm:w-auto flex justify-end items-center self-stretch sm:self-center">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-zinc-950 font-bold text-xs tracking-wider px-5 py-3 rounded-xl uppercase transition-all duration-300 group-hover:bg-[#BFCA16] group-hover:text-zinc-950 shadow-xs active:scale-98 shrink-0">
                    <span>Apply Now</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

                {/* Subtle Interactive Left Stripe Accent */}
                <div className="absolute left-0 top-4 bottom-4 w-0.75 bg-transparent rounded-r-md transition-colors group-hover:bg-[#BFCA16]" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
