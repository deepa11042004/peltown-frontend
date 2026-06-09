"use client";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { Monitor, Cpu, Smartphone, Target } from "lucide-react";

const HERO_CONTENT = [
  {
    tagline: "PELTOWN IT SOLUTIONS",
    title: "Expert Website",
    highlight: "Design & Mobile App Development.",
    description:
      'We don\'t just design logos; we architect the "Aura" that makes your brand the Main Character of your industry.',
  },
  {
    tagline: "ENTERPRISE SOFTWARE",
    title: "Custom CRM",
    highlight: "ERP Solutions.",
    description:
      "Static is invisible. We engineer high-octane video and social ecosystems that turn casual scrollers into a loyal tribe.",
  },
  {
    tagline: "DIGITAL GROWTH",
    title: "Results-Driven",
    highlight: "Digital Marketing.",
    description:
      "Stop guessing and start scaling. We use Synthetic Cinema and Growth Alchemy to turn every ₹1 spent into predictable profit.",
  },
];

const SERVICES = [
  {
    id: "web",
    label: "Web Development",
    icon: Monitor,
    targetIndex: 0,
    description: "Custom premium web designs",
  },
  {
    id: "ai",
    label: "AI Solutions",
    icon: Cpu,
    targetIndex: 1,
    description: "Smart CRM & ERP systems",
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    icon: Smartphone,
    targetIndex: 0,
    description: "Native iOS & Android apps",
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    icon: Target,
    targetIndex: 2,
    description: "Data-driven scale & ROI",
  },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  // TEXT ANIMATION
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_CONTENT.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // PARALLAX EFFECTS
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen lg:h-screen w-full bg-white lg:overflow-hidden flex flex-col justify-center py-12 lg:py-0"
    >
      {/* Main grid layout for left-text and right-image */}
      <div className="relative z-30 grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-8 lg:gap-16 items-center h-full w-full max-w-384 mx-auto px-6 md:px-20 pt-10 pb-20">
        {/* Left Column: ROTATING TEXT */}
        <motion.div
          style={{ y: textY }}
          className="text-black w-full flex flex-col justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse"></span>
                <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#BFCA16] uppercase">
                  {HERO_CONTENT[index].tagline}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-6xl leading-[1.1] font-bold tracking-tighter text-black">
                {HERO_CONTENT[index].title} <br />
                <span className="text-(--highlight)">
                  {HERO_CONTENT[index].highlight}
                </span>
              </h1>

              <p className="text-gray-700 text-lg md:text-xl max-w-xl leading-relaxed font-light">
                {HERO_CONTENT[index].description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#BFCA16] text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest shadow-xl transition-colors hover:bg-black hover:text-white w-fit"
              >
                Get Started
              </motion.button>
            </motion.div>
          </AnimatePresence>

          {/* Services Navigation Grid */}
          <div className="mt-10 w-full max-w-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SERVICES.map((service) => {
                const IconComponent = service.icon;
                const isActive = index === service.targetIndex;
                return (
                  <button
                    key={service.id}
                    onClick={() => setIndex(service.targetIndex)}
                    className={`group relative flex flex-col items-start p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#BFCA16]/10 border-[#BFCA16]/30 shadow-[0_8px_30px_rgba(46,119,99,0.08)]"
                        : "bg-[#F8F9FA]/40 hover:bg-[#F8F9FA]/80 border-gray-100 hover:border-gray-200/80 shadow-sm"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute top-3 right-3 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BFCA16] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BFCA16]"></span>
                      </span>
                    )}

                    <div
                      className={`p-2 rounded-xl mb-2.5 transition-all duration-300 ${
                        isActive
                          ? "bg-[#BFCA16] text-white shadow-md shadow-[#BFCA16]/20"
                          : "bg-white text-gray-500 group-hover:text-[#BFCA16] group-hover:bg-[#BFCA16]/5 group-hover:scale-105"
                      }`}
                    >
                      <IconComponent size={18} className="stroke-[1.8]" />
                    </div>

                    <span
                      className={`text-xs md:text-sm font-semibold tracking-tight transition-colors duration-200 ${
                        isActive
                          ? "text-black"
                          : "text-gray-700 group-hover:text-black"
                      }`}
                    >
                      {service.label}
                    </span>
                    <span className="text-[10px] text-gray-400 mt-0.5 line-clamp-1 font-light">
                      {service.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Image component */}
        <motion.div
          style={{ y: textY }}
          className="relative w-full h-[40vh] lg:h-[80vh] flex items-center justify-center lg:justify-end"
        >
          <div className="w-full h-full">
            <Image
              src="/Img/hero.png"
              alt="Studio Creative Illustration"
              fill
              priority
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
