"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, GraduationCap, Utensils, Sparkles } from "lucide-react";

// --- Types ---
interface IndustryCard {
  title: string;
  icon: React.ElementType;
  desc: string;
  features: string[];
}

export interface IndustrySecProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  desc?: string;
  industries?: IndustryCard[];
}

// --- Data ---
const defaultIndustryData: IndustryCard[] = [
  {
    title: "Real Estate",
    icon: Building2,
    desc: "For the booming real estate sector in Delhi NCR, we create robust property listing portals with advanced search filters, interactive map integrations, and seamless CRM connectivity.",
    features: [
      "Property Listings",
      "CRM Integration",
      "Virtual Tours",
      "Map Integration",
    ],
  },
  {
    title: "LMS Development",
    icon: GraduationCap,
    desc: "The ed-tech industry demands scalable Learning Management Systems. We build custom e-learning platforms with secure video hosting, progress tracking, and automated assessments.",
    features: [
      "Video Hosting",
      "Progress Tracking",
      "Assessments",
      "Certifications",
    ],
  },
  {
    title: "Restaurant Management",
    icon: Utensils,
    desc: "For the F&B industry, we develop all-in-one restaurant management systems including online ordering, table reservations, digital menus, and inventory tracking.",
    features: [
      "Online Ordering",
      "Table Booking",
      "Inventory",
      "POS Integration",
    ],
  },
];

export default function IndustrySec({
  title = (
    <>
      Industry Deep-Dives:{" "}
      <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-900 to-zinc-600">
        Tailored Digital Portals
      </span>
    </>
  ),
  subtitle = "Industry Solutions",
  desc = "Specialized solutions designed for your industry's unique challenges and opportunities",
  industries = defaultIndustryData,
}: IndustrySecProps) {
  return (
    <section className="py-24 px-4 md:px-12 lg:px-20 bg-linear-to-b from-zinc-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-4 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>{subtitle}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 max-w-4xl"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-lg max-w-2xl font-medium"
          >
            {desc}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {industries.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="relative group"
              >
                <div className="bg-zinc-50 border border-zinc-200/60 p-6 md:p-10 rounded-2xl hover:border-[#BFCA16] hover:bg-white hover:shadow-xl hover:shadow-zinc-100 transition-all duration-300 group flex flex-col justify-between space-y-4 text-left h-full">
                  <div className="space-y-4">
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:text-[#BFCA16] group-hover:border-[#BFCA16] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-lg md:text-xl text-zinc-950 tracking-tight leading-snug">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-zinc-600 font-medium leading-relaxed">
                      {card.desc}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {card.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-black border border-zinc-200 rounded-full text-xs font-semibold text-white"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
