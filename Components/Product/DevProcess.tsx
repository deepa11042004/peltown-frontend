"use client";

import React from "react";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Requirement Discovery",
    desc: "Understand your business model, customer workflows, and core operational goals.",
  },
  {
    number: "02",
    title: "Platform Planning",
    desc: "Design detailed database architecture, software workflows, and integration maps.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    desc: "Create a modern, clean, and high-converting shopping experience custom to your brand.",
  },
  {
    number: "04",
    title: "Development",
    desc: "Code the platform, integrate API endpoints, payment systems, and configure cloud servers.",
  },
  {
    number: "05",
    title: "Testing",
    desc: "Rigorous quality checks for security, load performance, payment flow, and compliance.",
  },
  {
    number: "06",
    title: "Launch & Support",
    desc: "Deployment under your custom domain, staff training support, and ongoing monitoring.",
  },
];

interface ProcessStep {
  number: string;
  title: string;
  desc: string;
}

interface DevProcessProps {
  title?: string;
  subtitle?: string;
  desc?: string;
  steps?: ProcessStep[];
}

export default function DevProcess({
  title = "Our Development Process",
  subtitle = "The Roadmap",
  desc = "A structured, transparent engineering lifecycle designed to launch your platform on time.",
  steps = PROCESS_STEPS,
}: DevProcessProps) {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-black uppercase">
              {subtitle}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-950">
            {title}
          </h2>
          <p className="text-zinc-500 font-medium text-sm md:text-base max-w-2xl mx-auto">
            {desc}
          </p>
        </div>

        <div className="relative border-l border-zinc-200 space-y-12 max-w-2xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              <div className="absolute -left-4 md:-left-6 top-1.5 w-8 h-8 md:w-12 md:h-12 rounded-full bg-zinc-950 border-4 border-white flex items-center justify-center text-white text-xs md:text-sm font-bold font-mono">
                {step.number}
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg md:text-xl text-zinc-950 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-zinc-500 font-medium leading-relaxed max-w-2xl">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
