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

// Text Reveal Component
function TextReveal({ text, as = "p" }: { text: string; as?: "h1" | "p" }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  if (as === "h1") {
    return (
      <motion.h1
        ref={ref}
        style={{ opacity, y }}
        className="text-4xl md:text-6xl font-bold text-black leading-[1.1] mb-2"
      >
        {text}
      </motion.h1>
    );
  }

  return (
    <motion.p
      ref={ref}
      style={{ opacity, y }}
      className="text-2xl md:text-4xl font-medium text-gray-500 leading-[1.3] mb-2"
    >
      {text}
    </motion.p>
  );
}

// Feature Card Component
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
      className={`shrink-0 w-95 md:w-112.5 p-6 md:p-10 rounded-2xl border transition-all duration-300 group flex flex-col justify-between space-y-4 text-left h-96
        ${
          isAccented
            ? "border-transparent text-white"
            : "bg-zinc-50 border-zinc-200/60 hover:border-[#BFCA16]/30 hover:bg-white hover:shadow-xl hover:shadow-zinc-100"
        }
      `}
    >
      <div className="space-y-4">
        {/* Icon Container */}
        <div
          className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300
            ${
              isAccented
                ? "bg-white/10 border-white/20 text-white"
                : "bg-white border-zinc-200 text-zinc-600 group-hover:text-[#BFCA16] group-hover:border-[#BFCA16]/30"
            }
          `}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          className={`font-bold text-xl md:text-2xl tracking-tight leading-snug
            ${isAccented ? "text-white" : "text-zinc-950"}
          `}
        >
          {title}
        </h3>

        {/* Description */}
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

// Word wrapping helper for clean text reveals
const splitIntoLines = (text: React.ReactNode, maxLen = 35): string[] => {
  if (typeof text !== "string") return [];
  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  words.forEach((word) => {
    if ((currentLine + " " + word).trim().length <= maxLen) {
      currentLine = (currentLine + " " + word).trim();
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  });
  if (currentLine) lines.push(currentLine);
  return lines;
};

export default function ServiceFeature({
  title,
  desc,
  list = [],
}: ServiceFeatureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textSectionRef = useRef<HTMLDivElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const slug = pathname ? pathname.split("/").pop() : "";
  const accentColor = (slug && ROUTE_COLORS[slug]) || "#ff5c26";

  const { scrollYProgress } = useScroll({
    target: carouselContainerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring for carousel movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
  const listLength = displayList.length + (list.length === 0 ? 1 : 0);

  // Dynamic horizontal carousel scroll percent calculation
  const maxScroll =
    listLength > 1 ? `-${((listLength - 1) / listLength) * 100}%` : "0%";
  const carouselX = useTransform(smoothProgress, [0, 1], ["0%", maxScroll]);

  // Construct text reveal lines
  const titleLines = splitIntoLines(title, 35);
  const descLines = splitIntoLines(desc, 45);

  const hasContent = titleLines.length > 0 || descLines.length > 0;
  const finalTitleLines = hasContent
    ? titleLines
    : ["Solutions for Every Growth Stage."];
  const finalDescLines = hasContent
    ? descLines
    : [
        "Tailored development solutions for",
        "various industries and business sizes.",
        "Aligned with your specific workflows.",
      ];

  return (
    <div ref={containerRef} className="relative">
      {/* Text Reveal Section */}
      <div ref={textSectionRef} className="min-h-[50vh] px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div>
            {finalTitleLines.map((line, index) => (
              <TextReveal key={`title-${index}`} text={line} as="h1" />
            ))}
          </div>
          {finalDescLines.length > 0 && (
            <div className="mt-6">
              {finalDescLines.map((line, index) => (
                <TextReveal key={`desc-${index}`} text={line} as="p" />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Dynamic Horizontal Carousel */}
      <div ref={carouselContainerRef} className="relative">
        <div className="sticky top-20 h-screen flex items-center overflow-hidden">
          <motion.div
            style={{ x: carouselX }}
            className="flex gap-6 px-[calc(50vw-190px)]"
          >
            {displayList.map((item, index) => {
              const IconComp = item.icon;
              const isLastCard =
                index === displayList.length - 1 && list.length > 0;
              return (
                <FeatureCard
                  key={index}
                  icon={IconComp ? <IconComp className="w-6 h-6" /> : null}
                  title={item.title}
                  description={item.desc}
                  isAccented={isLastCard}
                  accentColor={accentColor}
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
      </div>
    </div>
  );
}
