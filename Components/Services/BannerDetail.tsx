"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  BarChart3,
  Map,
  Settings2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

// --- DATA STRUCTURE MAPPED DIRECTLY FROM THE SCREENSHOT ---
export interface BannerDetailStep {
  num: string;
  title: string;
  desc: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
}

export interface BannerDetailProps {
  tag?: string;
  title?: React.ReactNode;
  desc?: string;
  btnText?: string;
  steps?: BannerDetailStep[];
}

const defaultSteps: BannerDetailStep[] = [
  {
    num: "01",
    title: "Audit & Analysis",
    desc: "Deep-dive into your current site health.",
    icon: BarChart3,
  },
  {
    num: "02",
    title: "Strategy Building",
    desc: "Custom roadmap based on your goals.",
    icon: Map,
  },
  {
    num: "03",
    title: "Optimization",
    desc: "Executing technical and content fixes.",
    icon: Settings2,
  },
  {
    num: "04",
    title: "Reporting & Scale",
    desc: "Monthly reports and scaling what works.",
    icon: TrendingUp,
  },
];

export default function BannerDetail({
  tag = "How We Work",
  title = (
    <>
      Our Proven <br />
      SEO Process
    </>
  ),
  desc = "Success in SEO isn't luck; it's a process. We follow a strict methodology to ensure consistent results.",
  btnText = "Start Your Journey",
  steps = defaultSteps,
}: BannerDetailProps) {
  // Animation orchestrators
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="bg-white text-black py-24 px-6 md:px-12 lg:px-20 w-full flex items-center justify-center font-sans antialiased">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        {/* ================= LEFT NARRATIVE COLUMN (5/12 Width) ================= */}
        <div className="lg:col-span-5 space-y-6 text-left">
          {tag && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BFCA16]/10 border border-[#BFCA16]/20">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#BFCA16] uppercase">
                {tag}
              </span>
            </div>
          )}

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-950 leading-[1.1]">
            {title}
          </h2>

          {desc && (
            <p className="text-zinc-500 text-base md:text-lg font-medium leading-relaxed max-w-md">
              {desc}
            </p>
          )}

          {btnText && (
            <div className="pt-4">
              <button className="group inline-flex items-center gap-2 bg-zinc-950 hover:bg-[#BFCA16] text-white px-6 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 shadow-md shadow-zinc-950/10 active:scale-98">
                <span>{btnText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>

        {/* ================= RIGHT STEPS HUB COLUMN (7/12 Width) ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative bg-white border border-zinc-200/60 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-48 text-left hover:bg-white hover:border-[#BFCA16] hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300"
              >
                {/* Top Action Metrics Bar */}
                <div className="flex items-center justify-between w-full">
                  <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:text-[#BFCA16] group-hover:border-[#BFCA16] transition-all duration-300 shadow-xs">
                    <IconComponent className="w-4 h-4 stroke-2" />
                  </div>
                  <span className="text-xl font-mono font-black text-black group-hover:text-[#BFCA16] transition-colors duration-300">
                    {step.num}
                  </span>
                </div>

                {/* Content Area Mapping */}
                <div className="space-y-1.5 mt-4">
                  <h3 className="font-bold text-base md:text-lg text-zinc-900 group-hover:text-black transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-500 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Left Active Border Stripe */}
                <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-transparent rounded-r-md transition-colors duration-300 group-hover:bg-[#BFCA16]" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
