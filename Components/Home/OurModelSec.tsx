"use client";
import { motion, Variants } from "framer-motion";
import {
  BrainCircuit,
  Palette,
  Code2,
  Terminal,
  Search,
  Megaphone,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    icon: BrainCircuit,
    title: "Brainstorming",
    subtitle: "Ideas",
    desc: "Mapping out specifications and technical architectures.",
  },
  {
    icon: Palette,
    title: "Product",
    subtitle: "Design",
    desc: "Crafting intuitive, pixel-perfect user interfaces.",
  },
  {
    icon: Code2,
    title: "Front-End",
    subtitle: "Development",
    desc: "Building highly responsive, animated user interfaces.",
  },
  {
    icon: Terminal,
    title: "Back-End",
    subtitle: "Development",
    desc: "Engineering scalable APIs and robust infrastructure.",
  },
  {
    icon: Search,
    title: "SEO",
    subtitle: "Optimization",
    desc: "Maximizing visibility and performance auditing.",
  },
  {
    icon: Megaphone,
    title: "Digital",
    subtitle: "Marketing",
    desc: "Deploying growth campaigns for maximum ROI.",
  },
];

export default function OurModelSec() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative bg-white text-black py-24 px-6 md:px-12 lg:px-20 overflow-hidden flex items-center justify-center min-h-screen">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        {/* Left Column */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse"></span>
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#BFCA16] uppercase">
                Our Model
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900">
              How We Do
            </h2>
          </div>

          <p className="text-zinc-600 text-base md:text-lg leading-relaxed font-light">
            PELTOWN drives business growth through cutting-edge website
            development, intuitive mobile apps, and strategic digital marketing.
          </p>

          <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-light">
            We don&apos;t just build software; we engineer scalable digital
            experiences tailored for maximum ROI. From startups to enterprises,
            we provide the technical expertise to secure your future.
          </p>

          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 bg-[#BFCA16] hover:bg-black text-white font-bold px-6 py-3 rounded-full transition-colors duration-300 shadow-md shadow-[#BFCA16]/10"
          >
            <span>Learn More</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* Right Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 relative"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative border border-zinc-200 flex flex-col justify-between rounded-3xl overflow-hidden p-6 h-48 group cursor-pointer"
                whileHover="hover"
              >
                {/* Dynamic Slide-in from left hover accent panel */}
                <motion.div
                  className="absolute inset-0 z-0"
                  style={{ background: "#BFCA16", originX: 0 }}
                  variants={{ hover: { scaleX: 1 }, initial: { scaleX: 0 } }}
                  initial={{ scaleX: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />

                <div className="relative z-10 flex items-start justify-between">
                  {/* Icon Sphere */}
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors border"
                    style={{
                      backgroundColor: "#ffffff",
                      borderColor: "rgba(0,0,0,0.06)",
                    }}
                    variants={{
                      hover: {
                        scale: 1.05,
                        backgroundColor: "rgba(255,255,255,0.15)",
                        borderColor: "rgba(255,255,255,0.2)",
                      },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-5 h-5 text-[#BFCA16] group-hover:text-white transition-colors duration-300" />
                  </motion.div>

                  {/* Number Step Counter */}
                  <motion.span
                    className="text-xs font-mono font-bold"
                    style={{ color: "#18181b" }}
                    variants={{ hover: { color: "rgba(255,255,255,0.85)" } }}
                    transition={{ duration: 0.25 }}
                  >
                    0{index + 1}
                  </motion.span>
                </div>

                {/* Typography Container */}
                <div className="relative z-10 space-y-1">
                  <div className="flex items-baseline gap-1.5">
                    <motion.h3
                      className="text-md font-bold"
                      style={{ color: "#18181b" }}
                      variants={{ hover: { color: "#ffffff" } }}
                      transition={{ duration: 0.25 }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.span
                      className="text-xs font-bold"
                      style={{ color: "#18181b" }}
                      variants={{ hover: { color: "#fff" } }}
                      transition={{ duration: 0.25 }}
                    >
                      {step.subtitle}
                    </motion.span>
                  </div>
                  <motion.p
                    className="text-sm font-normal leading-relaxed line-clamp-2"
                    style={{ color: "#71717a" }}
                    variants={{ hover: { color: "#fff" } }}
                    transition={{ duration: 0.25 }}
                  >
                    {step.desc}
                  </motion.p>
                </div>

               
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
