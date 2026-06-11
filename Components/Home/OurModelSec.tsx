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

// steps
const steps = [
  { icon: BrainCircuit, title: "Brainstorming", subtitle: "Ideas" },
  { icon: Palette, title: "Product", subtitle: "Design" },
  { icon: Code2, title: "Front-End", subtitle: "Development" },
  { icon: Megaphone, title: "Digital", subtitle: "Marketing" },
  { icon: Search, title: "SEO", subtitle: "Optimization" },
  { icon: Terminal, title: "Back-End", subtitle: "Development" },
];

// layout
const CARD_W = 220; // Slightly optimized width for 3-column balancing
const CARD_H = 82;
const GAP_X = 32;
const GAP_Y = 56;

const COLS = 3;
const ROWS = 2;

const SVG_W = COLS * CARD_W + (COLS - 1) * GAP_X;
const SVG_H = ROWS * CARD_H + (ROWS - 1) * GAP_Y;

// Matrix mapping for a standard 3x2 Grid layout (0,1,2 on top | 3,4,5 on bottom)
function getAnchorPoints(idx: number) {
  const col = idx % COLS;
  const row = Math.floor(idx / COLS);

  const x = col * (CARD_W + GAP_X);
  const y = row * (CARD_H + GAP_Y);

  return {
    left: { x, y: y + CARD_H / 2 },
    right: { x: x + CARD_W, y: y + CARD_H / 2 },
    top: { x: x + CARD_W / 2, y },
    bottom: { x: x + CARD_W / 2, y: y + CARD_H },
    center: { x: x + CARD_W / 2, y: y + CARD_H / 2 },
  };
}

/* Connection Map: 0 -> 1 -> 2 -> 5 -> 4 -> 3 (S-shaped Snake Flow) */
const CONNECTIONS = [
  { from: 0, to: 1, type: "horizontal" },
  { from: 1, to: 2, type: "horizontal" },
  { from: 2, to: 5, type: "loop" }, // Drops down from 2 to 5 on the right edge
  { from: 5, to: 4, type: "horizontal" }, // Right-to-left flow on row 2
  { from: 4, to: 3, type: "horizontal" }, // Right-to-left flow on row 2
];

function buildPath(fromIdx: number, toIdx: number, type: string): string {
  const from = getAnchorPoints(fromIdx);
  const to = getAnchorPoints(toIdx);

  if (type === "horizontal") {
    // Determine direction based on index positions
    const isLeftToRight = fromIdx < toIdx;
    const start = isLeftToRight ? from.right : from.left;
    const end = isLeftToRight ? to.left : to.right;
    const mx = (start.x + end.x) / 2;

    return `M ${start.x} ${start.y} C ${mx} ${start.y} ${mx} ${end.y} ${end.x} ${end.y}`;
  }

  if (type === "loop") {
    // Smooth outer vertical U-turn curve around the right side of the layout grid
    const start = from.right;
    const end = to.right;
    const controlX = Math.max(start.x, end.x) + 40; // Curves beautifully outside the grid wall

    return `M ${start.x} ${start.y} C ${controlX} ${start.y} ${controlX} ${end.y} ${end.x} ${end.y}`;
  }

  return `M ${from.center.x} ${from.center.y} L ${to.center.x} ${to.center.y}`;
}

// connector

function Connector({
  fromIdx,
  toIdx,
  type,
  idx,
}: {
  fromIdx: number;
  toIdx: number;
  type: string;
  idx: number;
}) {
  const d = buildPath(fromIdx, toIdx, type);
  const to = getAnchorPoints(toIdx);

  // Point target matching connection entry configurations
  let dotX = to.left.x;
  let dotY = to.left.y;

  if (type === "loop" || fromIdx > toIdx) {
    dotX = to.right.x;
    dotY = to.right.y;
  }

  return (
    <g>
      {/* ghost track */}
      <path
        d={d}
        fill="none"
        stroke="rgba(191,202,22,0.12)"
        strokeWidth={2}
        strokeLinecap="round"
      />

      {/* animated dashed line */}
      <motion.path
        d={d}
        fill="none"
        stroke="#BFCA16"
        strokeWidth={2}
        strokeDasharray="6 5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: idx * 0.16, ease: "easeInOut" }}
      />

      {/* arrival target dot */}
      <motion.circle
        cx={dotX}
        cy={dotY}
        r={4.5}
        fill="#BFCA16"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          delay: idx * 0.16 + 0.65,
          type: "spring",
          stiffness: 300,
        }}
      />
      <motion.circle
        cx={dotX}
        cy={dotY}
        r={4.5}
        fill="none"
        stroke="#BFCA16"
        strokeWidth={1.5}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 2.2, opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: idx * 0.16 + 0.65 }}
      />

      {/* dynamic traveling micro-dot */}
      <motion.circle
        r={3}
        fill="#BFCA16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1, 1, 0] }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay: idx * 0.16 + 0.3,
          repeat: Infinity,
          repeatDelay: 3.5,
        }}
      >
        <animateMotion
          dur="1.2s"
          repeatCount="indefinite"
          begin={`${idx * 0.16 + 0.3}s`}
          path={d}
        />
      </motion.circle>
    </g>
  );
}

// main
export default function OurModelSec() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const cardVariants: Variants = {
    hidden: { y: 16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative bg-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden flex items-center justify-center">
      {/* dot grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle,#000 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center relative z-10">
        {/* LEFT COPY */}
        <div className="space-y-8 lg:sticky lg:top-24">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 bg-black border border-[#BFCA16]/30 rounded-full px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#BFCA16] uppercase">
              Our Model
            </span>
          </motion.div>

          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.07 }}
              className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-black leading-[1.04]"
            >
              How We {""}
              <span
                className="relative inline-block"
                style={{ color: "#BFCA16" }}
              >
                Do It.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.17 }}
            className="text-black text-base md:text-md leading-relaxed font-medium max-w-md"
          >
            PELTOWN drives business growth through cutting-edge website
            development, intuitive mobile apps, and strategic digital marketing.
            From startups to enterprises, we engineer scalable digital
            experiences for maximum ROI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.27 }}
            className="flex items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 bg-[#BFCA16] hover:bg-black text-white font-bold px-7 py-3.5 rounded-full transition-colors duration-300 text-sm"
            >
              Learn More
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
            <span className="text-black text-sm font-medium">
              6-step process
            </span>
          </motion.div>
        </div>

        {/* RIGHT CORE MODEL (3x2 Flow Layout) */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative" style={{ width: SVG_W, height: SVG_H }}>
            {/* Dynamic Curve Connection Overlay Layer */}
            <svg
              className="absolute inset-0 pointer-events-none z-0"
              width={SVG_W}
              height={SVG_H}
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              style={{ overflow: "visible" }}
            >
              {CONNECTIONS.map((conn, i) => (
                <Connector
                  key={i}
                  fromIdx={conn.from}
                  toIdx={conn.to}
                  type={conn.type}
                  idx={i}
                />
              ))}
            </svg>

            {/* Absolute Grid Mapping Array Container */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="absolute inset-0 z-10"
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${COLS}, ${CARD_W}px)`,
                gridTemplateRows: `repeat(${ROWS}, ${CARD_H}px)`,
                columnGap: `${GAP_X}px`,
                rowGap: `${GAP_Y}px`,
              }}
            >
              {steps.map((step, i) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    whileHover="hover"
                    className="group relative cursor-pointer w-full h-full rounded-2xl border border-zinc-200/80 bg-white shadow-sm overflow-hidden flex items-center gap-4 px-5 transition-shadow duration-300 hover:shadow-md"
                  >
                    {/* card slide fill animation */}
                    <motion.div
                      className="absolute inset-0 z-0"
                      style={{ background: "#BFCA16", transformOrigin: "left" }}
                      variants={{
                        hover: { scaleX: 1 },
                        initial: { scaleX: 0 },
                      }}
                      initial={{ scaleX: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />

                    {/* visual metric badge container */}
                    <motion.div
                      className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-zinc-100 bg-[#BFCA16]/8"
                      variants={{
                        hover: {
                          backgroundColor: "rgba(255,255,255,0.2)",
                          borderColor: "rgba(255,255,255,0.3)",
                        },
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-4.5 h-4.5 text-[#BFCA16] group-hover:text-white transition-colors duration-300" />
                    </motion.div>

                    {/* label elements */}
                    <div className="relative z-10 flex flex-col leading-snug min-w-0">
                      <motion.span
                        className="text-[9px] font-black uppercase tracking-[0.2em] truncate"
                        style={{ color: "#a8b600" }}
                        variants={{ hover: { color: "rgba(255,255,255,0.7)" } }}
                        transition={{ duration: 0.2 }}
                      >
                        {step.subtitle}
                      </motion.span>
                      <motion.span
                        className="text-sm font-bold text-zinc-900 truncate"
                        variants={{ hover: { color: "#fff" } }}
                        transition={{ duration: 0.2 }}
                      >
                        {step.title}
                      </motion.span>
                    </div>

                    {/* sequential index position display */}
                    <motion.span
                      className="absolute bottom-2.5 right-3.5 text-[10px] font-mono font-bold z-10 opacity-60 tabular-nums"
                      style={{ color: "#000" }}
                      variants={{ hover: { color: "#fff" } }}
                      transition={{ duration: 0.2 }}
                    >
                      0{i + 1}
                    </motion.span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
