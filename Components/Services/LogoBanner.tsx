"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Search,
  LineChart,
  Flame,
  TrendingUp,
  Sliders,
} from "lucide-react";
import Image from "next/image";

export interface LogoBannerTool {
  name: string;
  img?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: React.ComponentType<any>;
}

export interface LogoBannerProps {
  subtitle?: string;
  tools?: LogoBannerTool[];
}

const DEFAULT_TOOLS: LogoBannerTool[] = [
  { name: "Analytics", icon: BarChart3 },
  { name: "Search Console", icon: Search },
  { name: "Ahrefs", icon: LineChart },
  { name: "Semrush", icon: Flame },
  { name: "Google Trends", icon: TrendingUp },
  { name: "Screaming Frog", icon: Sliders },
];

export default function LogoBanner({
  subtitle = "Powered by industry leading tools",
  tools = DEFAULT_TOOLS,
}: LogoBannerProps) {
  // Tripling the array ensures zero empty gaps or jitter when the animation resets at 33.33%
  const loopTrack = [...tools, ...tools, ...tools];

  return (
    <section className="bg-white py-12 px-0 w-full flex flex-col items-center justify-center overflow-hidden font-sans select-none">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        {/* Small Top Subtitle */}
        {subtitle && (
          <div className="text-center">
            <p className="text-[10px] md:text-base font-bold text-black uppercase tracking-[0.25em]">
              {subtitle}
            </p>
          </div>
        )}

        {/*  INFINITE MARQUEE WITH EDGE BLEND MASKS  */}
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 md:before:w-32 before:bg-linear-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 md:after:w-32 after:bg-linear-to-l after:from-white after:to-transparent after:z-10">
          <div className="flex w-max">
            <motion.div
              animate={{ x: [0, "-33.33%"] }}
              transition={{
                ease: "linear",
                duration: 20, // Controls speed of continuous shift
                repeat: Infinity,
              }}
              className="flex items-center gap-12 md:gap-16 pr-12 md:pr-16"
            >
              {loopTrack.map((tool, idx) => {
                const ToolIcon = tool.icon;
                return (
                  <div
                    key={`${tool.name}-${idx}`}
                    className="flex items-center gap-2.5 text-zinc-400 hover:text-[#BFCA16] transition-colors duration-300 group cursor-pointer"
                  >
                    {/* Icon or Image configuration */}
                    {ToolIcon ? (
                      <ToolIcon className="w-8 h-8 text-black group-hover:text-[#BFCA16] group-hover:scale-105 transition-all duration-300 stroke-[1.75]" />
                    ) : tool.img ? (
                      <Image
                        src={tool.img}
                        alt={tool.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 object-contain group-hover:scale-105 transition-all duration-300"
                      />
                    ) : null}

                    {/* Typography label mapping */}
                    <span className="text-base md:text-xl font-bold tracking-tight text-zinc-500 group-hover:text-[#BFCA16] transition-colors duration-300">
                      {tool.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
