"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight } from "lucide-react";

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
    "Decision-making reports become slow and unreliable."
  ],
  finalText = "We eliminate these operational bottlenecks by bringing every department, data stream, and business process together under a single, cohesive dashboard."
}: ProductIntroProps) {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Information & Value Proposition */}
        <div className="space-y-6">
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

          <div className="p-6 bg-white border border-zinc-200 rounded-2xl shadow-xs space-y-3 relative overflow-hidden group hover:border-[#BFCA16] transition-all duration-300">
            <div className="absolute right-0 top-0 w-24 h-24 rounded-full bg-[#BFCA16]/5 blur-xl group-hover:scale-150 transition-all duration-500" />
            <div className="flex items-center gap-2 text-[#BFCA16]">
              <ArrowRight className="w-5 h-5" />
              <span className="text-xs font-bold tracking-wider uppercase">Our Solution</span>
            </div>
            <p className="text-zinc-800 font-semibold text-sm md:text-base leading-relaxed relative z-10">
              {finalText}
            </p>
          </div>
        </div>

        {/* Right Column - The Friction/Challenges Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden"
        >
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-red-500/10 blur-2xl" />
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Common Bottlenecks</h3>
                <p className="text-[10px] text-zinc-400 uppercase font-mono tracking-widest">Pain Points We Solve</p>
              </div>
            </div>

            <div className="border-t border-zinc-800 my-4" />

            <ul className="space-y-4">
              {bullets.map((bullet, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  className="flex items-start gap-3 text-sm md:text-base text-zinc-300 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5" />
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
