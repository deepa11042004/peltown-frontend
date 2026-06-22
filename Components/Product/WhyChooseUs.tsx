"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Settings,
  Key,
  TrendingUp,
  Search,
  IndianRupee,
  Cpu,
} from "lucide-react";

const WHY_CHOOSE_US = [
  {
    icon: Settings,
    title: "Fully Customizable",
    desc: "Unlike SaaS platforms that restrict customization, our solution is tailored exactly to your business workflows.",
  },
  {
    icon: Key,
    title: "Own Your Platform",
    desc: "No monthly platform lock-in. You own the source code, database, and infrastructure completely.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    desc: "Built to handle growth seamlessly from hundreds to millions of orders without slowing down.",
  },
  {
    icon: Search,
    title: "SEO-Friendly",
    desc: "Designed following best practices to rank better on Google search results and generate organic traffic.",
  },
  {
    icon: IndianRupee,
    title: "Made for Indian Businesses",
    desc: "Supports GST compliance, UPI Payments, Razorpay integration, Indian logistics providers, and multi-language setups.",
  },
  {
    icon: Cpu,
    title: "Complete Business Ecosystem",
    desc: "Integrates directly with CRM systems, ERP software, WhatsApp Business APIs, email marketing, mobile apps, and accounting modules.",
  },
];

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  desc: string;
}

interface WhyChooseUsProps {
  title?: string;
  subtitle?: string;
  desc?: string;
  items?: FeatureItem[];
}

export default function WhyChooseUs({
  title = "Why Choose Peltown Commerce Suite?",
  subtitle = "Why Peltown?",
  desc = "We build custom digital operating systems that adapt to your business, not the other way around.",
  items = WHY_CHOOSE_US,
}: WhyChooseUsProps) {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-300 shadow-xs">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group bg-cardBgColor border border-cardBorderColor p-8 rounded-2xl shadow-xs hover:shadow-xl hover:border-[#BFCA16] transition-all duration-300 flex flex-col space-y-4"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:text-[#BFCA16] group-hover:border-[#BFCA16] transition-all duration-300">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-zinc-950 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-zinc-500 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
