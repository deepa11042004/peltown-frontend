"use client";

import React from "react";
import { motion } from "framer-motion";

const INDUSTRIES = [
  { name: "Fashion & Apparel", color: "from-pink-500/20 to-rose-500/20" },
  { name: "Electronics", color: "from-blue-500/20 to-indigo-500/20" },
  { name: "Grocery & FMCG", color: "from-green-500/20 to-emerald-500/20" },
  { name: "Beauty & Cosmetics", color: "from-purple-500/20 to-fuchsia-500/20" },
  { name: "Furniture", color: "from-amber-500/20 to-orange-500/20" },
  { name: "Healthcare", color: "from-teal-500/20 to-cyan-500/20" },
  { name: "Industrial Products", color: "from-zinc-500/20 to-neutral-500/20" },
  { name: "Automotive Parts", color: "from-red-500/20 to-orange-500/20" },
  { name: "Books & Education", color: "from-sky-500/20 to-indigo-500/20" },
  { name: "Wholesale & Distribution", color: "from-violet-500/20 to-purple-500/20" },
];

interface IndustryItem {
  name: string;
  color: string;
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
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white uppercase">
              {subtitle}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {title}
          </h2>
          <p className="text-zinc-400 font-light text-sm md:text-base max-w-2xl mx-auto">
            {desc}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((industry, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col justify-between h-36 hover:border-[#BFCA16]/40 transition-all duration-300 relative overflow-hidden group"
            >
              <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full bg-linear-to-br ${industry.color} blur-xl group-hover:scale-150 transition-transform duration-500`} />
              <span className="text-white font-mono text-xs">{(idx + 1).toString().padStart(2, "0")}</span>
              <h3 className="font-bold text-base md:text-lg text-white leading-snug tracking-tight z-10">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
