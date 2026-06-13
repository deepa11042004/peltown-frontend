"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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

function ProductHero({ hero }: ProductHeroProps) {
  return (
    <section className="relative pt-24 px-6 md:px-12 lg:px-20 min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Tag Line */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-400 shadow-xs text-left"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-black uppercase">
              {hero.tagline}
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.1]">
            {hero.title}
          </h1>

          <div className="text-zinc-500 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
            {hero.description}
          </div>

          {hero.ctaText && (
            <div className="flex flex-wrap items-center gap-4 pt-4">
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
        </div>

        {/* Right Image */}
        {hero.imageSrc && (
          <div className="lg:col-span-5 relative w-full aspect-square max-w-md mx-auto">
            <Image
              src={hero.imageSrc}
              alt={hero.imageAlt || ""}
              fill
              className="object-contain"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductHero;
