"use client";

import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

/*  Data — swap the `src` values for your own photography             */

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://picsum.photos/id/64/700/900",
    alt: "Portrait with flowing hair in golden light",
    width: 350,
  },
  {
    src: "https://picsum.photos/id/1011/900/900",
    alt: "Couple at a candlelit dinner table",
    width: 350,
  },
  {
    src: "https://picsum.photos/id/177/800/900",
    alt: "Beauty close-up with iridescent eyeshadow",
    width: 350,
  },
  {
    src: "https://picsum.photos/id/91/800/900",
    alt: "Black and white studio portrait",
    width: 350,
  },
  {
    src: "https://picsum.photos/id/225/800/900",
    alt: "Spa bottle product shot on green backdrop",
    width: 350,
  },
];

/*  Component                                                          */

export default function PhotoHero() {
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Gallery stays fixed (minimal movement for parallax effect)
  const galleryY = useTransform(scrollYProgress, [0, 1], ["0px", "40px"]);
  const galleryScale = useTransform(scrollYProgress, [0, 0.7], [1, 1.03]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white h-[140vh] md:min-h-[120vh] flex flex-col items-center select-none"
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        <motion.div
          style={{
            y: sectionY,
            width: sectionWidth,
            borderRadius: sectionBorderRadius,
          }}
          className="relative w-full h-full flex flex-col items-center justify-between pt-40 overflow-hidden transition-all duration-75 ease-out bg-black text-white"
        >
          {/* Heading + description */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="flex flex-col items-center text-center px-4 max-w-4xl z-10 space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.08]">
              Photoshoot Services
            </h1>

            <p className="max-w-2xl text-[18px] leading-relaxed text-white">
              We deliver clean, high-quality studio photography with professional
              lighting, sharp detail, and a refined look for brands, portraits,
              and commercial projects.
            </p>

            <button className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-4 text-sm font-medium text-black">
              Book a Photoshoot
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>

          {/* Infinite gallery marquee — hover an image to shrink it */}
          <motion.div
            style={{ y: galleryY, scale: galleryScale }}
            className="marquee-wrap w-full overflow-hidden mt-10"
          >
            <div className="marquee-track flex w-max">
              {[...galleryImages, ...galleryImages].map((img, i) => (
                <div
                  key={`${img.alt}-${i}`}
                  className="flex-none"
                  style={{ width: `${img.width}px` }}
                >
                  <div className="h-65 overflow-hidden sm:h-90 lg:h-110">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full origin-center object-cover transition-transform duration-300 ease-out hover:scale-90"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
