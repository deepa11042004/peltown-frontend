"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquareQuote } from "lucide-react";

const testimonials = [
  {
    name: "Isabella Rodriguez",
    role: "CEO and Co-founder of ABC Company",
    quote:
      "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
  },
  {
    name: "Gabrielle Williams",
    role: "CEO and Co-founder of ABC Company",
    quote:
      "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
  },
  {
    name: "Samantha Johnson",
    role: "CEO and Co-founder of ABC Company",
    quote:
      "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.",
  },
  {
    name: "Natalie Martinez",
    role: "CEO and Co-founder of ABC Company",
    quote:
      "From concept to execution, their creativity knows no bounds - a game-changer for our brand's success.",
  },
  {
    name: "Victoria Thompson",
    role: "CEO and Co-founder of ABC Company",
    quote:
      "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.",
  },
  {
    name: "John Peter",
    role: "CEO and Co-founder of ABC Company",
    quote:
      "Their team's artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.",
  },
];

export default function TestimonialSec() {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  const firstTrack = [...firstRow, ...firstRow, ...firstRow];
  const secondTrack = [...secondRow, ...secondRow, ...secondRow];

  return (
    <section className="bg-white text-black pb-24 px-0 w-full min-h-screen flex flex-col items-center justify-center overflow-hidden font-sans">
      {/* ================= MARQUEE SCROLL SYSTEM ================= */}
      <div className="relative w-full overflow-hidden space-y-6">
        {/* TRACK 1: CONTINUOUS LEFT SLIDE */}
        <div className="flex w-max overflow-hidden select-none">
          <motion.div
            animate={{ x: [0, "-33.33%"] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
            className="flex gap-6 pr-6"
          >
            {firstTrack.map((item, idx) => (
              <TestimonialCard key={`row1-${idx}`} item={item} />
            ))}
          </motion.div>
        </div>

        {/* TRACK 2: CONTINUOUS RIGHT SLIDE (OPPOSITE DIRECTION) */}
        <div className="flex w-max overflow-hidden select-none">
          <motion.div
            animate={{ x: ["-33.33%", 0] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
            className="flex gap-6 pr-6"
          >
            {secondTrack.map((item, idx) => (
              <TestimonialCard key={`row2-${idx}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- CARD SUB-COMPONENT ---
function TestimonialCard({ item }: { item: (typeof testimonials)[0] }) {
  const initials = item.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="w-90 md:w-105 shrink-0 bg-black border border-zinc-900 rounded-3xl p-8 flex flex-col justify-between items-start text-left hover:bg-zinc-950 hover:border-zinc-800 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 group">
      <div className="space-y-5 w-full">
        {/* High-End Lucide Quote Variant */}
        <div className="text-zinc-700 group-hover:text-[#BFCA16]/60 transition-colors duration-300">
          <MessageSquareQuote className="w-8 h-8 stroke-[1.25]" />
        </div>

        <p className="text-zinc-300 text-sm md:text-base font-medium leading-relaxed tracking-tight group-hover:text-zinc-100 transition-colors">
          {item.quote}
        </p>
      </div>

      <div className="flex items-center gap-4 pt-6 border-t border-zinc-900 w-full mt-6">
        <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center font-bold text-xs text-zinc-400 group-hover:text-white group-hover:border-zinc-700 shrink-0 transition-all duration-300">
          {initials}
        </div>

        <div className="space-y-0.5 min-w-0">
          <h4 className="text-sm font-bold text-zinc-100 tracking-tight group-hover:text-white transition-colors truncate">
            {item.name}
          </h4>
          <p className="text-xs text-zinc-500 font-medium truncate">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
}
