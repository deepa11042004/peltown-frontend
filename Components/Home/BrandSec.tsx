"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const floatingApps = [
  // Left side logos
  {
    src: "/Img/Godaddy.png",
    alt: "GoDaddy",
    className: "left-[4%] top-[8%]",
    size: "w-20 h-20 md:w-28 md:h-28",
    delay: 0,
  },
  {
    src: "/Img/Bluehost.png",
    alt: "Bluehost",
    className: "left-[14%] top-[28%]",
    size: "w-20 h-20 md:w-28 md:h-28",
    delay: 0.3,
  },
  {
    src: "/Img/Bigrock.png",
    alt: "BigRock",
    className: "left-[3%] top-[52%]",
    size: "w-20 h-20 md:w-28 md:h-28",
    delay: 0.6,
  },
  {
    src: "/Img/Hostinger.png",
    alt: "Hostinger",
    className: "left-[12%] bottom-[10%]",
    size: "w-20 h-20 md:w-28 md:h-28",
    delay: 0.9,
  },

  // Right side logos
  {
    src: "/Img/Namecheap.png",
    alt: "Namecheap",
    className: "right-[4%] top-[8%]",
    size: "w-20 h-20 md:w-28 md:h-28",
    delay: 0.2,
  },
  {
    src: "/Img/Digitalocean.png",
    alt: "DigitalOcean",
    className: "right-[14%] top-[28%]",
    size: "w-20 h-20 md:w-28 md:h-28",
    delay: 0.5,
  },
  {
    src: "/Img/Hostgator.png",
    alt: "HostGator",
    className: "right-[3%] top-[52%]",
    size: "w-20 h-20 md:w-28 md:h-28",
    delay: 0.8,
  },
  {
    src: "/Img/Aws.png",
    alt: "AWS",
    className: "right-[12%] bottom-[10%]",
    size: "w-20 h-20 md:w-28 md:h-28",
    delay: 1.1,
  },
];

export default function BrandSec() {
  return (
    <section className="relative overflow-hidden bg-white min-h-screen flex flex-col items-center justify-center px-6 py-16 lg:py-0">
      {/* Floating logos (Desktop only) */}
      {floatingApps.map((app, index) => (
        <motion.div
          key={index}
          className={`absolute ${app.className} ${app.size} hidden lg:block`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: app.delay },
            scale: { duration: 0.6, delay: app.delay },
            y: {
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: app.delay,
            },
          }}
        >
          <div className="relative w-full h-full rounded-2xl md:rounded-3xl bg-[#f9f9fb] border border-[#d4d4d8] p-3 md:p-4 flex items-center justify-center">
            <Image
              src={app.src}
              alt={app.alt}
              fill
              className="object-contain p-3 md:p-4"
              sizes="(max-width: 768px) 80px, 112px"
            />
          </div>
        </motion.div>
      ))}

      {/* Hero text */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="relative z-10 text-center max-w-5xl flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-400 shadow-xs mx-auto mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-black uppercase">
            Hassle-Free Operations
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-headingColor">
            Effortless <br /> Account Management
          </h1>
          {/* Paragraph Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-descriptionColor text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Managing your hosting and domain accounts can be complex and
            time-consuming. At PELTOWN, we simplify this for you. We handle
            account management, renewals, billing optimization, and performance
            monitoring for top platforms. Let us reduce your technical overheads
            and ensure maximum uptime while you focus on scaling your business.
          </motion.p>
        </motion.div>

        {/* Brand logos for Mobile/Tablet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 lg:hidden w-full"
        >
          <div className="text-center mb-6">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
              Supported Platforms
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {floatingApps.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.05, duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="relative h-16 sm:h-20 rounded-xl bg-[#f9f9fb] border border-[#d4d4d8]/70 p-3 flex items-center justify-center transition-all duration-300 cursor-default"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={app.src}
                    alt={app.alt}
                    fill
                    className="object-contain p-1"
                    sizes="120px"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
