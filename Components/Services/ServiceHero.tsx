"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface ServicesHeroProps {
  tagline?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  ctaText?: string;
}

const ROUTE_CONFIGS: Record<
  string,
  {
    bg: string;
    text: string;
    subtext: string;
    dot: string;
    badgeBorder: string;
    badgeBg: string;
  }
> = {
  "web-development": {
    bg: "#BFCA16",
    text: "text-white",
    subtext: "text-white/80",
    dot: "bg-white",
    badgeBorder: "border-white/20",
    badgeBg: "bg-white/10",
  },
  "erp-system": {
    bg: "#000000",
    text: "text-white",
    subtext: "text-white/80",
    dot: "bg-white",
    badgeBorder: "border-white/20",
    badgeBg: "bg-white/10",
  },
  "mobile-app": {
    bg: "#BFCA16",
    text: "text-white",
    subtext: "text-white/80",
    dot: "bg-white",
    badgeBorder: "border-white/20",
    badgeBg: "bg-white/10",
  },
  "custom-crm": {
    bg: "#000000",
    text: "text-white",
    subtext: "text-white/80",
    dot: "bg-white",
    badgeBorder: "border-white/20",
    badgeBg: "bg-white/10",
  },
  "seo-optimization": {
    bg: "#BFCA16",
    text: "text-white",
    subtext: "text-white/80",
    dot: "bg-white",
    badgeBorder: "border-white/20",
    badgeBg: "bg-white/10",
  },
  "social-media": {
    bg: "#000000",
    text: "text-white",
    subtext: "text-white/80",
    dot: "bg-white",
    badgeBorder: "border-white/20",
    badgeBg: "bg-white/10",
  },
  "digital-marketing": {
    bg: "#BFCA16",
    text: "text-white",
    subtext: "text-white/80",
    dot: "bg-white",
    badgeBorder: "border-white/20",
    badgeBg: "bg-white/10",
  },
  "gmb-services": {
    bg: "#000000",
    text: "text-white",
    subtext: "text-white/80",
    dot: "bg-white",
    badgeBorder: "border-white/20",
    badgeBg: "bg-white/10",
  },
  "service-photoshoot": {
    bg: "#BFCA16",
    text: "text-white",
    subtext: "text-white/80",
    dot: "bg-white",
    badgeBorder: "border-white/20",
    badgeBg: "bg-white/10",
  },
  "service-branding": {
    bg: "#000000",
    text: "text-white",
    subtext: "text-white/80",
    dot: "bg-white",
    badgeBorder: "border-white/20",
    badgeBg: "bg-white/10",
  },
  "bulk-email": {
    bg: "#BFCA16",
    text: "text-white",
    subtext: "text-white/80",
    dot: "bg-white",
    badgeBorder: "border-white/20",
    badgeBg: "bg-white/10",
  },
  "whatsapp-api": {
    bg: "#000000",
    text: "text-white",
    subtext: "text-white/80",
    dot: "bg-white",
    badgeBorder: "border-white/20",
    badgeBg: "bg-white/10",
  },
  "email-solutions": {
    bg: "#BFCA16",
    text: "text-white",
    subtext: "text-white/80",
    dot: "bg-white",
    badgeBorder: "border-white/20",
    badgeBg: "bg-white/10",
  },
};

const DEFAULT_CONFIG = {
  bg: "#000000",
  text: "text-black",
  subtext: "text-black/80",
  dot: "bg-black",
  badgeBorder: "border-black/20",
  badgeBg: "bg-black/10",
};

export default function ServicesHero({
  tagline,
  title,
  description,
  ctaText,
}: ServicesHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const slug = pathname ? pathname.split("/").pop() : "";
  const configColor = (slug && ROUTE_CONFIGS[slug]) || DEFAULT_CONFIG;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Background section moves upward on scroll
  const sectionY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  // Text moves upward faster than the section
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Section width decreases and border radius increases
  const sectionWidth = useTransform(scrollYProgress, [0, 0.7], ["100%", "92%"]);
  const sectionBorderRadius = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["0px", "48px"],
  );

  // Image stays fixed (minimal movement for parallax effect)
  const mockupY = useTransform(scrollYProgress, [0, 1], ["0px", "40px"]);
  const mockupScale = useTransform(scrollYProgress, [0, 0.7], [1, 1.03]);

  // Helper to dynamically render title with br and size scale-down
  const renderTitle = (t: React.ReactNode) => {
    if (typeof t === "string") {
      const separator = t.includes(":") ? ":" : t.includes(",") ? "," : "";
      if (separator) {
        const index = t.indexOf(separator);
        const first = t.slice(0, index + 1);
        const second = t.slice(index + 1).trim();
        return (
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-6 ${configColor.text}`}
          >
            {first}
            <br />
            <span className="text-xl md:text-2xl lg:text-3xl font-semibold opacity-90 block mt-2">
              {second}
            </span>
          </h1>
        );
      }
      const sizeClass =
        t.length > 35
          ? "text-3xl md:text-4xl lg:text-5xl"
          : "text-4xl md:text-5xl lg:text-6xl";
      return (
        <h1
          className={`${sizeClass} font-bold tracking-tight leading-[1.15] mb-6 ${configColor.text}`}
        >
          {t}
        </h1>
      );
    }
    return (
      <h1
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-6 ${configColor.text}`}
      >
        {t}
      </h1>
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white h-[140vh] md:h-[120vh] flex flex-col items-center select-none"
    >
      {/* Sticky wrapper - keeps content in viewport while scrolling */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Animated Background Section - moves up on scroll */}
        <motion.div
          style={{
            y: sectionY,
            width: sectionWidth,
            borderRadius: sectionBorderRadius,
            backgroundColor: configColor.bg,
          }}
          className="relative w-full h-full flex flex-col items-center justify-between pt-32 pb-12 overflow-hidden transition-all duration-75 ease-out"
        >
          {/* Top Typography Content - moves up and fades */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="flex flex-col items-center text-center px-4 max-w-4xl z-10 space-y-6"
          >
            {/* Tagline Badge */}
            {tagline && (
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-400 shadow-xs text-left"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse"
                />
                <span
                  className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-black uppercase"
                >
                  {tagline}
                </span>
              </motion.div>
            )}

            {renderTitle(title)}

            {description && (
              <p
                className={`text-base md:text-lg lg:text-xl font-medium max-w-2xl leading-relaxed flex flex-wrap items-center justify-center gap-x-2 ${configColor.subtext}`}
              >
                <span>{description}</span>
                {ctaText && (
                  <Link
                    href="/about/contact"
                    className={`underline underline-offset-8 font-bold inline-flex items-center gap-1 hover:opacity-80 transition-opacity ${configColor.text}`}
                  >
                    <span>{ctaText}</span>
                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 inline-block" />
                  </Link>
                )}
              </p>
            )}
          </motion.div>

          {/* Fixed Phone Mockup with Parallax Effect */}
          <motion.div
            style={{ y: mockupY, scale: mockupScale }}
            className="relative w-full max-w-150 md:max-w-225 h-auto mt-auto flex justify-center items-end pointer-events-none px-4"
          >
            {/* Hand & Phone Mockup Wrapper */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full aspect-square max-h-110 md:max-h-130 rounded-2xl overflow-hidden"
            >
              <Image
                src="/Img/mac.png"
                alt="Phone mockup presentation"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-contain object-center"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
