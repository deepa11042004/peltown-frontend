"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

interface ProductHeroProps {
  hero: {
    tagline: string;
    title: string;
    description: string;
    ctaText?: string;
    imageSrc: string;
    imageAlt: string;
  };
}

const DEFAULT_POOL = [
  "/Img/store1.webp",
  "/Img/store2.webp",
  "/Img/store3.webp",
  "/Img/store4.webp",
  "/Img/store5.webp",
  "/Img/how1.webp",
  "/Img/how2.webp",
  "/Img/how3.webp",
  "/Img/how4.webp",
];

const tileVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

function Tile({
  src,
  alt,
  className,
  priority,
  index,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={tileVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.03,
      }}
      className={`relative overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
      />
    </motion.div>
  );
}

function ProductHero({ hero }: ProductHeroProps) {
  const collageImages = DEFAULT_POOL.filter((img) => img !== hero.imageSrc);

  return (
    <section className="relative pt-24 px-6 md:px-12 lg:px-20 min-h-[85vh] flex items-center py-20 lg:pt-40 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center gap-16">
        {/* Top Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          {/* Tag Line */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-400 shadow-xs text-center mx-auto"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-black uppercase">
              {hero.tagline}
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.1] text-center max-w-2xl mx-auto">
            {hero.title}
          </h1>

          <div className="text-zinc-500 text-base md:text-lg font-medium leading-relaxed max-w-2xl text-center mx-auto">
            {hero.description}
          </div>

          {hero.ctaText && (
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/about/contact"
                className="group inline-flex items-center gap-2 bg-zinc-950 hover:bg-[#BFCA16] text-white px-7 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 shadow-md shadow-zinc-950/10 active:scale-98"
              >
                <span>{hero.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about/contact"
                className="inline-flex items-center bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-750 hover:text-black px-7 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 active:scale-98"
              >
                Contact Sales
              </Link>
            </div>
          )}
        </motion.div>

        {/* Collage */}
        {hero.imageSrc && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="hidden md:block w-full max-w-6xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.5fr_0.8fr] gap-4 h-auto md:h-130">
              {/* LEFT */}
              <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-4 h-75 md:h-auto">
                <Tile
                  index={0}
                  src={collageImages[0]}
                  alt="Product feature dashboard view"
                  className="rounded-2xl"
                />
                <Tile
                  index={1}
                  src={collageImages[1]}
                  alt="Product interface elements"
                  className="rounded-2xl"
                />
              </div>

              {/* CENTER */}
              <div className="grid grid-rows-[1.4fr_1fr] gap-4 h-125 md:h-auto">
                <Tile
                  index={2}
                  priority
                  src={hero.imageSrc}
                  alt={hero.imageAlt || "Main product overview"}
                  className="rounded-2xl"
                />
                <Tile
                  index={3}
                  src={collageImages[2]}
                  alt="Product platform stats overview"
                  className="rounded-2xl"
                />
              </div>

              {/* RIGHT */}
              <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-[0.8fr_1fr] gap-4 h-75 md:h-auto">
                <Tile
                  index={4}
                  src={collageImages[3]}
                  alt="Product tool integrations"
                  className="rounded-2xl"
                />
                <Tile
                  index={5}
                  src={collageImages[4]}
                  alt="Product workflow setup"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default ProductHero;
