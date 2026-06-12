"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

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
    <section className="bg-white text-black py-24 px-6 md:px-12 flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto text-center space-y-12 w-full">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-400 shadow-xs mx-auto">
          <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-black uppercase">
            Hassle-Free Operations
          </span>
        </div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900"
        >
          Effortless Account Management
        </motion.h2>

        {/* Paragraph Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-zinc-900 text-md max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Managing your hosting and domain accounts can be complex and
          time-consuming. At PELTOWN, we simplify this for you. We handle
          account management, renewals, billing optimization, and performance
          monitoring for top platforms. Let us reduce your technical overheads
          and ensure maximum uptime while you focus on scaling your business.
        </motion.p>

        {/* Separator Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent"
        />

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
