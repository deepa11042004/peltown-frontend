"use client";

import React, { useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  User,
  Infinity,
  Zap,
  Clock,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

// Word-fill Text Reveal

function WordFillReveal({
  text,
  as = "p",
  scrollYProgress,
  startOffset = 0,
  endOffset = 1,
}: {
  text: string;
  as?: "h1" | "p";
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  startOffset?: number;
  endOffset?: number;
}) {
  const words = text.split(" ");
  const Tag = as === "h1" ? motion.h1 : motion.p;
  const baseClass =
    as === "h1"
      ? "text-4xl md:text-6xl font-bold leading-[1.1] mb-2"
      : "text-2xl md:text-4xl font-medium leading-[1.3] mb-2";

  return (
    <Tag className={`${baseClass} flex flex-wrap gap-x-[0.3em] gap-y-1`}>
      {words.map((word, i) => {
        const wordStart =
          startOffset + (i / words.length) * (endOffset - startOffset);
        const wordEnd = Math.min(
          wordStart + (1 / words.length) * (endOffset - startOffset) * 2,
          endOffset,
        );
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const color = useTransform(
          scrollYProgress,
          [wordStart, wordEnd],
          ["#D1D5DB", "#0a0a0a"],
        );
        return (
          <motion.span key={i} style={{ color }} className="inline-block">
            {word}
          </motion.span>
        );
      })}
    </Tag>
  );
}

//  Feature Card

function FeatureCard({
  icon,
  title,
  description,
  isAccented = false,
  accentColor,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  isAccented?: boolean;
  accentColor?: string;
}) {
  return (
    <div
      style={
        isAccented && accentColor ? { backgroundColor: accentColor } : undefined
      }
      className={`shrink-0 w-95 md:w-112.5 p-6 md:p-10 rounded-4xl border transition-all duration-300 group flex flex-col justify-between space-y-4 text-left h-96
        ${
          isAccented
            ? "border-white text-white"
            : "bg-zinc-50 border-zinc-200/60 hover:border-[#BFCA16] hover:bg-white"
        }
      `}
    >
      <div className="space-y-4">
        <div
          className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300
            ${
              isAccented
                ? "bg-white/10 border-white/20 text-white"
                : "bg-white border-zinc-200 text-zinc-600 group-hover:text-[#BFCA16] group-hover:border-[#BFCA16]"
            }
          `}
        >
          {icon}
        </div>
        <h3
          className={`font-bold text-xl md:text-2xl tracking-tight leading-snug
            ${isAccented ? "text-white" : "text-zinc-950"}
          `}
        >
          {title}
        </h3>
        <p
          className={`text-base md:text-lg leading-relaxed
            ${isAccented ? "text-white/80 font-normal" : "text-zinc-600 font-medium"}
          `}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

//  Types

export interface ServiceFeatureItem {
  title: string;
  desc: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: React.ComponentType<any> | LucideIcon;
}

export interface ServiceFeatureProps {
  title?: React.ReactNode;
  desc?: React.ReactNode;
  list?: ServiceFeatureItem[];
}

const ROUTE_COLORS: Record<string, string> = {
  "web-development": "#ff5c26",
  "erp-system": "#3b82f6",
  "mobile-app": "#10b981",
  "custom-crm": "#8b5cf6",
  "seo-optimization": "#f59e0b",
  "social-media": "#ec4899",
  "digital-marketing": "#06b6d4",
  "gmb-services": "#14b8a6",
  "service-photoshoot": "#6366f1",
  "service-branding": "#f43f5e",
  "bulk-email": "#ef4444",
  "whatsapp-api": "#22c55e",
  "email-solutions": "#0ea5e9",
};

// Card dimensions – keep in sync with FeatureCard's w- classes
const CARD_WIDTH_PX = 450; // md width (use 380 for mobile if needed)
const CARD_GAP_PX = 24; // gap-6 = 1.5rem = 24px

//  Main Component

export default function ServiceFeature({
  title,
  desc,
  list = [],
}: ServiceFeatureProps) {
  const textSectionRef = useRef<HTMLDivElement>(null);
  // This is the scroll-driver: it must be tall (no overflow clipping on it)
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const slug = pathname ? pathname.split("/").pop() : "";
  const accentColor = (slug && ROUTE_COLORS[slug]) || "#ff5c26";

  // ── Text section scroll progress
  const { scrollYProgress: textProgress } = useScroll({
    target: textSectionRef,
    offset: ["start 0.9", "end 0.2"],
  });

  // Carousel scroll progress ─
  const { scrollYProgress: carouselProgress } = useScroll({
    target: carouselContainerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(carouselProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Background color transition from white to black
  const sectionBg = useTransform(
    carouselProgress,
    [0, 0.25],
    ["#ffffff", "#000000"],
  );

  // Width and bottom border radius animations
  const sectionWidth = useTransform(
    carouselProgress,
    [0.75, 0.95],
    ["100%", "92%"],
  );
  const sectionBorderRadius = useTransform(
    carouselProgress,
    [0.75, 0.95],
    ["0px", "48px"],
  );

  // Data
  const defaultList = [
    {
      title: "Your designer, from day one",
      desc: "A senior product designer fully dedicated to your company. Working like a founding designer, without the hiring process.",
      icon: User,
    },
    {
      title: "Unlimited design requests",
      desc: "Submit as many tasks as you need. No per-task billing, no cap, no waiting list. Just continuous output.",
      icon: Infinity,
    },
    {
      title: "Fast turnaround",
      desc: "Get your designs delivered in 24-48 hours. Quick iterations and rapid prototyping for your products.",
      icon: Zap,
    },
    {
      title: "Always available",
      desc: "Your designer is available during your working hours. Real-time collaboration and instant feedback.",
      icon: Clock,
    },
  ];

  const displayList = list.length > 0 ? list : defaultList;
  const totalCards = displayList.length + (list.length === 0 ? 1 : 0);

  const totalTranslatePx = (totalCards - 1) * (CARD_WIDTH_PX + CARD_GAP_PX);

  const carouselX = useTransform(
    smoothProgress,
    [0, 1],
    [0, -totalTranslatePx],
  );

  const pinHeight = `${totalCards * 100}vh`;

  const titleText =
    typeof title === "string" && title.trim()
      ? title
      : "Solutions for Every Growth Stage.";
  const descText =
    typeof desc === "string" && desc.trim()
      ? desc
      : "Tailored development solutions for various industries and business sizes. Aligned with your specific workflows.";

  const TITLE_END = 0.45;
  const DESC_START = 0.4;
  const DESC_END = 0.85;

  return (
    <div className="relative bg-white">
      {/* Text Reveal Section  */}
      <div
        ref={textSectionRef}
        className="min-h-[60vh] px-4 md:px-8 py-24 flex items-center"
      >
        <div className="max-w-5xl mx-auto space-y-4">
          <WordFillReveal
            text={titleText}
            as="h1"
            scrollYProgress={textProgress}
            startOffset={0}
            endOffset={TITLE_END}
          />
          <WordFillReveal
            text={descText}
            as="p"
            scrollYProgress={textProgress}
            startOffset={DESC_START}
            endOffset={DESC_END}
          />
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div
        ref={carouselContainerRef}
        style={{ height: pinHeight }}
        className="relative bg-white"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            style={{
              width: sectionWidth,
              borderBottomLeftRadius: sectionBorderRadius,
              borderBottomRightRadius: sectionBorderRadius,
              backgroundColor: sectionBg,
            }}
            className="relative w-full h-full flex items-center overflow-hidden"
          >
            <div className="w-full overflow-hidden">
              <motion.div
                style={{ x: carouselX }}
                className="flex gap-6 pl-[max(2rem,calc(50vw-190px))] pr-24"
              >
                {displayList.map((item, index) => {
                  const IconComp = item.icon;
                  return (
                    <FeatureCard
                      key={index}
                      icon={IconComp ? <IconComp className="w-6 h-6" /> : null}
                      title={item.title}
                      description={item.desc}
                    />
                  );
                })}

                {list.length === 0 && (
                  <FeatureCard
                    icon={<ArrowRight className="w-6 h-6" />}
                    title="Ready to start?"
                    description="Join hundreds of companies already designing with UMANO. Start your design journey today."
                    isAccented={true}
                    accentColor={accentColor}
                  />
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
