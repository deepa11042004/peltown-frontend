"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Eye,
  Target,
  Puzzle,
  Lightbulb,
  Handshake,
  User,
  Quote,
} from "lucide-react";

// --- CORE VALUES DATA ---
const coreValues = [
  {
    title: "Synergy",
    description:
      "Like pixels forming an image, our diverse skills combine to create powerful digital solutions.",
    icon: Puzzle,
  },
  {
    title: "Innovation",
    description:
      "We continuously push the boundaries of technology to deliver modern, scalable ecosystems.",
    icon: Lightbulb,
  },
  {
    title: "Client Success",
    description:
      "Your growth is our ultimate metric. We partner with you for the long term.",
    icon: Handshake,
  },
];

export default function AboutSec() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-20 w-full min-h-screen overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-full aspect-square max-w-125 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/Img/about_peltown.webp"
                alt="Peltown Team"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55 }}
                className="inline-flex items-center gap-2 bg-black border border-[#BFCA16]/30 rounded-full px-4 py-1.5 mb-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#BFCA16] uppercase">
                  Our Genesis
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                The City of Pixels
              </h2>
            </div>

            <div className="space-y-4 text-zinc-400 text-sm md:text-lg font-light leading-relaxed">
              <p>
                We believe that a single service, much like a single pixel, is
                just a fragment. Alone, it holds potential, but it cannot convey
                the full story. But when multiple pixels come together, they
                create a complete, breathtaking picture.
              </p>

              {/* Highlight Standout Quote Box */}
              <div className="p-4 bg-zinc-950/60 border-l-2 border-[#BFCA16] rounded-r-xl">
                <p className="font-semibold text-white text-sm">
                  &ldquo;Pel&rdquo; stands for{" "}
                  <span className="text-[#BFCA16]">Pixel</span>, and
                  &ldquo;Town&rdquo; stands for{" "}
                  <span className="text-[#BFCA16]">City</span>.
                </p>
              </div>

              <p>
                Peltown is a{" "}
                <span className="text-white italic">City of Pixels</span>—a
                place where individual services like development, design, and
                marketing seamlessly collaborate like a well-oiled factory.
                Here, we don&apos;t just offer standalone services; we combine
                every digital pixel to build a flawless final product and a
                complete business ecosystem for our clients.
              </p>
            </div>
          </div>
        </div>

        {/*  2. VISION & MISSION  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card: Our Vision */}
          <TiltCard className="bg-zinc-950/40 backdrop-blur-md border border-zinc-900 rounded-3xl p-8 md:p-10 flex flex-col gap-6 text-left hover:border-[#BFCA16]/30 transition-colors">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#BFCA16]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-white">
                Our Vision
              </h3>
            </div>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              To be the ultimate digital factory where ideas are transformed
              into complete, scalable realities, empowering businesses globally
              through cohesive technology and unparalleled digital
              craftsmanship.
            </p>
          </TiltCard>

          {/* Card: Our Mission */}
          <TiltCard className="bg-zinc-950/40 backdrop-blur-md border border-zinc-900 rounded-3xl p-8 md:p-10 flex flex-col gap-6 text-left hover:border-[#BFCA16]/30 transition-colors">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#BFCA16]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-white">
                Our Mission
              </h3>
            </div>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              To provide 360-degree, end-to-end IT solutions by combining
              diverse expertise. We ensure that every digital
              &ldquo;pixel&rdquo; we craft contributes meaningfully to our
              clients&apos; ultimate success story.
            </p>
          </TiltCard>
        </div>

        {/* 3. LEADERSHIP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-950/30 border border-zinc-900 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Avatar Profile Grid Spacer */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-70 h-70 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group overflow-hidden">
                {/* Placeholder */}
                <User className="w-20 h-20 text-zinc-700 group-hover:text-[#BFCA16] transition-colors duration-500" />
              </div>
            </div>

            {/* Profile Information Block */}
            <div className="lg:col-span-7 space-y-6 text-left relative">
              <Quote className="absolute right-0 top-0 w-20 h-20 text-zinc-900/40 pointer-events-none" />

              <div className="space-y-4">
                <h3 className="text-4xl font-bold tracking-tight text-white">
                  Saqib Khan
                </h3>
                <p className="text-sm font-bold text-zinc-500 tracking-widest uppercase">
                  Founder & Director
                </p>
              </div>

              <p className="text-sm md:text-lg text-zinc-400 font-light leading-relaxed italic">
                &ldquo;When a client comes to us with an idea, they aren&apos;t
                just looking for software; they are looking for a partner to
                help them scale. My goal has always been to build a team that
                goes beyond development to handle the intricacies of the digital
                ecosystem, so you can focus on what matters most—building your
                business.&rdquo;
              </p>

              <div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#0077B5] hover:bg-[#006297] text-white font-bold text-xs tracking-wider px-5 py-3 rounded-full uppercase transition-all duration-300 shadow-lg shadow-[#0077B5]/10"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. CORE VALUES */}
        <div className="space-y-12">
          {/* Header Block */}
          <div className="space-y-3 text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 bg-black border border-[#BFCA16]/30 rounded-full px-4 py-1.5 mb-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#BFCA16] uppercase">
                Our Principles
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Core Values
            </h2>
          </div>

          {/* Three-Column Values System */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {coreValues.map((value, idx) => {
              const ValIcon = value.icon;
              return (
                <TiltCard
                  key={idx}
                  className="group relative bg-[#0B0C10] border border-zinc-900 rounded-3xl p-8 flex flex-col justify-between h-70 hover:border-[#BFCA16]/40 transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Dynamic Slide Background sweep panel */}
                  <motion.div
                    className="absolute inset-0 z-0 bg-[#BFCA16]"
                    style={{ originY: 1 }}
                    variants={{ hover: { scaleY: 1 }, initial: { scaleY: 0 } }}
                    initial={{ scaleY: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  />

                  {/* Icon Frame */}
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#BFCA16] group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-white transition-colors duration-300">
                    <ValIcon className="w-5 h-5" />
                  </div>

                  {/* Contents */}
                  <div className="relative z-10 space-y-2 text-left">
                    <h4 className="text-xl font-bold tracking-tight text-white">
                      {value.title}
                    </h4>
                    <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-white/85 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </TiltCard>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- INTERACTIVE TILT-SPRING WRAPPER HELPER ---
function TiltCard({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const relativeX = e.clientX - rect.left - width / 2;
    const relativeY = e.clientY - rect.top - height / 2;

    mouseX.set(relativeX / width);
    mouseY.set(relativeY / height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={className}
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        whileHover="hover"
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
}
