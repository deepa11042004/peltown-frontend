"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dummy data for the right side
const FAQS = [
  {
    question: "What are your charges for website designing services?",
    answer:
      "Our website design pricing varies based on project complexity, number of pages, custom functionality, and design preferences. Get in touch with PELTOWN for a tailored quote that fits your business needs.",
  },
  {
    question: "How long does it take to design and launch a website",
    answer:
      "On average, it takes between 3 to 8 weeks to design and launch a website, depending on the number of pages, custom features, and feedback cycles.",
  },
  {
    question: "Do you offer website maintenance services?",
    answer:
      "Yes, we offer affordable website maintenance plans that include regular updates, backups, performance optimization, and technical support to keep your site running smoothly.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely! PELTOWN specializes in website redesigns that enhance user experience, speed, SEO, and visual appeal.",
  },
  {
    question: "Will my website be mobile-friendly and SEO-optimized?",
    answer:
      "Yes. We build fully responsive websites that provide excellent user experiences across all devices. Our development also follows best SEO practices.",
  },
];

// Reusable FAQ Item Component
const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group border-b border-white/10 border-solid transition-colors duration-300 hover:bg-[#1C1C1C]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 px-4 md:px-6 focus:outline-none"
      >
        <span className="text-left text-lg md:text-xl font-bold text-white">
          {question}
        </span>

        <div className="relative w-6 h-6 ml-4 shrink-0 flex items-center justify-center">
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white group-hover:text-white transition-colors"
            animate={{
              rotate: isOpen ? 0 : -45,
            }}
            whileHover={{
              rotate: 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <path d="M12 5v14" />
            <path d="M19 12l-7 7-7-7" />
          </motion.svg>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-6 pb-6 text-white leading-relaxed text-base md:text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSec() {
  return (
    <section className="w-full bg-black text-white py-24 md:py-32 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">
        {/* Section Headers */}
        <div className="mb-16 flex flex-col items-center text-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse"></span>
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#BFCA16] uppercase">
              Common Questions
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
            Frequently Asked <span className="text-[#BFCA16]">questions</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="w-full max-w-3xl flex flex-col border-t border-white/10 border-solid">
          {FAQS.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
