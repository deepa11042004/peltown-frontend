"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  CloudLightning,
  ShieldCheck,
  RefreshCw,
  TrendingUp,
} from "lucide-react";

const features = [
  { icon: CloudLightning, text: "Performance Monitoring" },
  { icon: ShieldCheck, text: "Billing Optimization" },
  { icon: RefreshCw, text: "Automated Renewals" },
  { icon: TrendingUp, text: "Maximum Uptime" },
];

const logos = [
  { name: "GoDaddy", src: "/Img/godaddy.webp" },
  { name: "Bluehost", src: "/Img/bluehost.webp" },
  { name: "BigRock", src: "/Img/bigrock.webp" },
  { name: "Hostinger", src: "/Img/hostinger.webp" },
  { name: "Namecheap", src: "/Img/namecheap.webp" },
  { name: "DigitalOcean", src: "/Img/digitalocean.webp" },
  { name: "HostGator", src: "/Img/hostgator.webp" },
  { name: "AWS", src: "/Img/aws.webp" },
];

export default function EffortlessManagement() {
  const firstRow = logos.slice(0, 4);
  const secondRow = logos.slice(4, 8);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white text-black py-24 px-6 md:px-12 flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-6xl mx-auto text-center space-y-12 w-full">
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse"></span>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#BFCA16] uppercase">
            Hassle-Free Operations
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900"
        >
          Effortless Account Management
        </motion.h2>

        {/* Paragraph Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-zinc-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light"
        >
          Managing your hosting and domain accounts can be complex and
          time-consuming. At{" "}
          <span className="text-black font-bold">PELTOWN</span>, we simplify
          this for you. We handle technical overheads so you can focus entirely
          on scaling your business.
        </motion.p>

        {/* Feature Badges */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-full px-4 py-2 text-sm text-zinc-700 cursor-pointer"
              >
                <Icon className="w-4 h-4 text-zinc-500" />
                <span>{item.text}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Separator Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent my-16"
        />

        {/* Platform Integration Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-8"
        >
          Supporting your favorite top platforms
        </motion.p>

        {/* Logo Layout Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12 md:space-y-16 max-w-5xl mx-auto px-4"
        >
          {/* Row 1: 4 Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center">
            {firstRow.map((logo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full max-w-40 h-12 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  fill
                  sizes="(max-w-768px) 50vw, 25vw"
                  className="object-contain cursor-pointer"
                  priority={index < 4}
                />
              </motion.div>
            ))}
          </div>

          {/* Row 2: 4 Logos (Staggered Layout) */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-12">
            {secondRow.map((logo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-36 md:w-44 h-12 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  fill
                  sizes="(max-w-768px) 50vw, 25vw"
                  className="object-contain cursor-pointer"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
