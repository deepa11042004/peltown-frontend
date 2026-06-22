/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

// Uniform studio highlight color
const ACCENT_COLOR = "#BFCA16";

const CARDS = [
  {
    tag: "Email Us",
    icon: <Mail size={24} strokeWidth={1.75} />,
    hint: "Email us today for content, strategy, and growth support.",
    value: "info@peltown.com",
    href: "mailto:info@peltown.com",
  },
  {
    tag: "Call Us",
    icon: <Phone size={24} strokeWidth={1.75} />,
    hint: "Contact us to build stronger digital visibility.",
    value: "+91 981 838 1669",
    href: "tel:+919818381669",
  },
  {
    tag: "Address",
    icon: <MapPin size={24} strokeWidth={1.75} />,
    hint: "Visit our studio hub for personalized development and marketing support.",
    value: "Kaushambi, Ghaziabad",
    fullAddress:
      "C-32, Block C, Sector 14, Kaushambi, Ghaziabad, Uttar Pradesh 201010",
    href: "https://maps.google.com/?q=C-32,+Block+C,+Sector+14,+Kaushambi,+Ghaziabad,+Uttar+Pradesh+201010",
  },
];

// --- 3D TILT INFO CARD SUB-COMPONENT ---
function InfoCard({ card, index }: { card: (typeof CARDS)[0]; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-8% 0px" });

  // 3D Motion tracking spring values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const bounds = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - bounds.left - bounds.width / 2) / bounds.width);
    mouseY.set((e.clientY - bounds.top - bounds.height / 2) / bounds.height);
  };

  return (
    <div style={{ perspective: 1200 }}>
      <motion.a
        ref={cardRef}
        href={card.href}
        target="_blank"
        rel="noreferrer"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
        className="relative flex flex-col justify-between rounded-3xl overflow-hidden p-8 lg:p-10 h-85 sm:h-90 lg:aspect-square no-underline group bg-zinc-900/60 border border-zinc-800"
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        initial={{ opacity: 0, y: 48 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.65,
          ease: [0.16, 1, 0.3, 1],
          delay: index * 0.1,
        }}
        whileHover="hover"
      >
        {/* Fill Accent Backdrop Sheet */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ background: ACCENT_COLOR, originY: 1 }}
          variants={{ hover: { scaleY: 1 }, initial: { scaleY: 0 } }}
          initial={{ scaleY: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Icon Sphere */}
        <motion.div
          className="relative z-10 w-12 h-12 md:w-14 rounded-2xl flex items-center justify-center bg-zinc-800 border border-zinc-700 transition-all duration-300"
          style={{ transform: "translateZ(30px)" }}
          variants={{
            hover: {
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.15)",
              borderColor: "rgba(255,255,255,0.2)",
            },
          }}
        >
          <div className="text-[#BFCA16] group-hover:text-white transition-colors duration-300">
            {card.icon}
          </div>
        </motion.div>

        {/* Text Details Area */}
        <div
          className="relative z-10 flex flex-col gap-2 text-left"
          style={{ transform: "translateZ(20px)" }}
        >
          <p className="text-[#BFCA16] group-hover:text-white/80 uppercase tracking-[0.2em] text-[10px] font-bold transition-colors">
            {card.tag}
          </p>

          <h3
            className="font-bold leading-[1.2] text-white group-hover:text-white transition-colors tracking-tight line-clamp-1"
            style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.8rem)" }}
          >
            {card.value}
          </h3>

          <p className="text-xs md:text-sm leading-relaxed text-zinc-400 group-hover:text-white/70 max-w-[30ch] font-light transition-colors">
            {card.tag === "Address" ? card.fullAddress : card.hint}
          </p>
        </div>
      </motion.a>
    </div>
  );
}

// --- FLEXIBLE INPUT FORM FIELD COMPONENT ---
function Field({ as: Tag = "input", placeholder, ...props }: any) {
  return (
    <Tag
      className="w-full bg-zinc-900/50 border border-zinc-800 text-white text-sm outline-none rounded-xl px-5 py-4 placeholder-zinc-500 focus:bg-zinc-900 focus:border-[#BFCA16] focus:ring-1 focus:ring-[#BFCA16]/20 transition-all duration-300 resize-none font-medium"
      placeholder={placeholder}
      {...props}
    />
  );
}

// --- MAIN MASTER COMPONENT ---
export default function ContactSec() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden px-6 py-20 md:py-32">
      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* INFO CARDS MATRIX GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <InfoCard key={i} card={card} index={i} />
          ))}
        </div>

        {/* BENTO ACTION AREA: FORM + MAP GRID CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-4">
          {/* FORM CONTAINER CARD (7/12 Width) */}
          <div className="lg:col-span-7 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-10 lg:p-12 shadow-sm text-left flex flex-col justify-between">
            <div className="space-y-2 mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Send a <span className="text-[#BFCA16]">Message</span>
              </h2>
            </div>

            <form className="flex flex-col gap-4 md:gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <Field placeholder="First Name" />
                <Field placeholder="Last Name" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <Field placeholder="Email Address" type="email" />
                <Field placeholder="Mobile Number" type="tel" />
              </div>
              <Field
                as="textarea"
                placeholder="How can we help you?"
                rows={4}
              />

              <motion.button
                whileHover={{
                  scale: 1.01,
                  backgroundColor: "#9ba40e",
                }}
                whileTap={{ scale: 0.99 }}
                className="mt-2 bg-[#BFCA16] text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs py-4.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-[#BFCA16]/10"
              >
                <span>Send Message</span>
                <ArrowUpRight size={16} />
              </motion.button>
            </form>
          </div>

          {/* SATELLITE MAP CONTAINER CARD (5/12 Width) */}
          <div className="lg:col-span-5 border border-zinc-800 rounded-3xl overflow-hidden min-h-87.5 md:min-h-100 shadow-sm relative group bg-zinc-900">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.1969446820543!2d77.31976077631388!3d28.623864775670857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb43a9926487%3A0x8677c7ea1a6039ea!2sKaushambi%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201010!5e0!3m2!1sen!2sin!4v1717482000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter:
                  "grayscale(1) invert(0.9) contrast(1.2) brightness(0.9)",
              }}
              className="absolute inset-0 group-hover:scale-[1.01] transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
