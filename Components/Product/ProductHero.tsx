"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, X, ZoomIn } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ProductHeroProps {
  hero: {
    tagline: string;
    title: string;
    description: string;
    ctaText?: string;
    imageSrc: string;
    imageAlt: string;
    additionalImages?: string[];
    showGallery?: boolean;
  };
}

export default function ProductHero({ hero }: ProductHeroProps) {
  // Combine the main image with the specific additional images if provided
  const additionalSrcs = hero.additionalImages || [];
  const allImages = [
    { src: hero.imageSrc, alt: hero.imageAlt || "Main view" },
    ...additionalSrcs.map((src, index) => ({
      src,
      alt: `Gallery image ${index + 1}`,
    })),
  ];

  // State to track which image is currently opened in the modal
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  return (
    <section className="relative pt-24 px-6 md:px-12 lg:px-20 min-h-[85vh] flex items-center py-20 lg:pt-40 overflow-hidden bg-zinc-50">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center gap-16">
        {/* --- Top Content Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          {/* Tag Line */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-sm text-center mx-auto">
            <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-black uppercase">
              {hero.tagline}
            </span>
          </div>

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

        {/* --- Interactive Collage Section --- */}
        {hero.showGallery !== false && (
          <div className="w-full max-w-5xl flex flex-col gap-4">
            {/* 1. Main Large Image */}
          {hero.imageSrc && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => openLightbox(0)}
              className="group relative w-full h-75 md:h-112.5 rounded-3xl overflow-hidden cursor-zoom-in shadow-lg border border-zinc-200"
            >
              <Image
                src={hero.imageSrc}
                alt={hero.imageAlt || "Main Feature"}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-102"
              />
              {/* Hover overlay indicator */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-xs p-3 rounded-full shadow-md text-zinc-900">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          )}

          {/* 2. Horizontal Row of Thumbnails */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          >
            {allImages.slice(1, 6).map((img, idx) => {
              const imageIndex = idx + 1; // absolute index matching the modal structure
              return (
                <div
                  key={img.src}
                  onClick={() => openLightbox(imageIndex)}
                  className="group relative aspect-video md:aspect-4/3 rounded-2xl overflow-hidden cursor-zoom-in shadow-sm border border-zinc-200"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay indicator */}
                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white drop-shadow-sm" />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
        )}
      </div>

      {/* --- Lightbox / Focus Modal --- */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox} // Click outside image closes modal
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all duration-200 focus:outline-none"
              aria-label="Close image modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Focused Active Image Container */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Stop propagation so clicking inside image doesn't close it
              className="relative w-full max-w-5xl h-[50vh] md:h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <Image
                src={allImages[activeImageIndex].src}
                alt={allImages[activeImageIndex].alt}
                fill
                sizes="100vw"
                className="object-contain bg-zinc-950/40" // Fits complete image cleanly in frame
              />

              {/* Optional Bottom Description */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent text-white text-center">
                <p className="text-sm font-medium tracking-wide">
                  {allImages[activeImageIndex].alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
