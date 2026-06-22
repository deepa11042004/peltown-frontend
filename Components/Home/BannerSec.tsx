"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Wrench,
  Rocket,
  CheckCircle2,
  ShoppingBag,
  Database,
  Plane,
  MonitorCheck,
  ArrowRight,
} from "lucide-react";

export default function BannerSec() {
  // Container stagger wrapper configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // Upward motion card reveal animation
  const cardVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="bg-white text-black py-24 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center space-y-12">
        {/* --- HEADER BLOCK --- */}
        <div className="flex flex-col items-center space-y-4 max-w-4xl">
          {/* Requested Highlight Tagline Implementation */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-400 shadow-xs mx-auto">
            <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-black uppercase">
              Our Expertise, Your Advantage
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-headingColor max-w-4xl leading-tight">
            Software Built for Your Success
          </h2>

          <p className="text-descriptionColor text-base md:text-md max-w-2xl font-medium leading-relaxed">
            At <span className="font-bold text-headingColor">PELTOWN</span>, we
            provide the best of both worlds. Whether you need a unique system
            designed specifically for you or a ready-made SaaS product to launch
            your business instantly, we have the perfect solutions to help you
            grow.
          </p>
        </div>

        {/* --- HORIZONTAL GRID CARDS SYSTEM --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6"
        >
          {/* CARD 1: Custom Software Development (Light Elegant Panel) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="group relative bg-cardBgColor border border-cardBorderColor rounded-3xl p-8 md:p-10 flex flex-col justify-between gap-8 text-left hover:bg-white hover:border-[#BFCA16] hover:shadow-2xl hover:shadow-zinc-200/60 transition-all duration-300"
          >
            <div className="space-y-6">
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 group-hover:border-[#BFCA16] group-hover:bg-[#BFCA16] group-hover:text-white transition-colors duration-300">
                <Wrench className="w-5 h-5" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight text-headingColor">
                  Custom Software Development
                </h3>
                <p className="text-sm text-descriptionColor font-medium leading-relaxed">
                  Give us your biggest ideas, and we will turn them into
                  reality. We build powerful, custom-made software shaped
                  entirely around your brand, giving you complete ownership and
                  control.
                </p>
              </div>

              {/* Core Feature Bullet Points List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 pt-2">
                {[
                  "Custom Web Applications",
                  "Scalable Startup Tech",
                  "Enterprise Mobile Apps",
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 text-sm font-bold text-zinc-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#BFCA16] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro-Interaction Button Arrow */}
            <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 bg-white group-hover:border-[#BFCA16] group-hover:text-white group-hover:bg-[#BFCA16] transition-all duration-300 self-end shrink-0 shadow-sm">
              <ArrowRight className="w-5 h-5" />
            </div>
          </motion.div>

          {/* CARD 2: Ready-to-Launch SaaS Products (Premium High-Contrast Dark Panel) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="group relative bg-black text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between gap-8 text-left border border-zinc-900 hover:border-[#BFCA16]/30 hover:shadow-2xl hover:shadow-[#BFCA16]/5 transition-all duration-300"
          >
            {/* Header Content Area inside Dark Card */}
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:border-[#BFCA16]/30 group-hover:bg-[#BFCA16]/10 group-hover:text-[#BFCA16] transition-colors duration-300">
                <Rocket className="w-5 h-5" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Ready-to-Launch SaaS Products
                </h3>
                <p className="text-sm text-neutral-400 font-medium leading-relaxed">
                  Skip the long wait of standard development. Use our deeply
                  tested, pre-built platforms to launch your new business safely
                  in a matter of days.
                </p>
              </div>
            </div>

            {/* Product Feature Matrix Grid Layout (Updated to 2 columns for side-by-side design) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {[
                { label: "E-Commerce & Delivery Apps", icon: ShoppingBag },
                { label: "Modern CRM & HRMS Portals", icon: Database },
                { label: "Travel & Flight Booking", icon: Plane },
                { label: "Cloud POS & Restaurant", icon: MonitorCheck },
              ].map((subProduct, index) => {
                const SubIcon = subProduct.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-4 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0 group-hover:text-zinc-200 transition-colors">
                      <SubIcon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-neutral-400 leading-snug tracking-tight">
                      {subProduct.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
