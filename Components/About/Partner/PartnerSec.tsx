"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

// --- PARTNERSHIP BENEFITS DATA ---
const benefits = [
  {
    title: "Referral Program",
    desc: "Earn generous commissions for every client you refer to us, backed by transparent tracking.",
  },
  {
    title: "White Label Services",
    desc: "We work behind the scenes delivering world-class code while you completely own and manage the client relationship.",
  },
  {
    title: "Technical Expertise",
    desc: "Leverage our highly experienced, AI-ready engineering and design team to conquer complex projects easily.",
  },
  {
    title: "Reliable Support",
    desc: "Gain priority access to dedicated support channels, fast-tracked deployments, and architectural audits.",
  },
];

export default function PartnerSec() {
  // Stagger entrance transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-20 w-full min-h-screen flex items-center justify-center overflow-hidden font-sans antialiased">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        {/* ================= LEFT CONTENT COLUMN ================= */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Why Partner with <span className="text-[#BFCA16]">PELTOWN?</span>
          </h2>

          {/* Styled Grid Cards Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-start gap-4 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:border-[#BFCA16]/40 hover:bg-zinc-900/60 transition-all duration-300 group"
              >
                {/* Styled Emerald Checkmark Circle */}
                <div className="w-8 h-8 rounded-lg bg-[#BFCA16]/10 border border-[#BFCA16]/20 flex items-center justify-center text-[#BFCA16] shrink-0 group-hover:bg-[#BFCA16] group-hover:text-zinc-950 transition-all duration-300 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Re-designed Becoming a Partner Call-to-Action Button */}
          <div className="pt-4">
            <button className="group inline-flex items-center gap-2 bg-white hover:bg-[#BFCA16] text-zinc-950 font-bold text-sm tracking-wide px-7 py-4 rounded-full transition-all duration-300 shadow-md active:scale-98">
              <span>Become a Partner</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ================= RIGHT IMAGE COLUMN ================= */}
        <div className="lg:col-span-5 relative w-full aspect-square max-w-xl mx-auto">
          {/* Framed Next.js Image Component */}
          <div className="relative w-full h-full bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden group">
            <Image
              src="/Img/partners_hero.webp"
              alt="Professional partnership shaking hands at PELTOWN"
              fill
              sizes="(max-w-768px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
