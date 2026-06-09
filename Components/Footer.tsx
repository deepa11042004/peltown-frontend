"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Lock,
  ArrowRight,
  Send,
  MessageCircle,
} from "lucide-react";

// --- FOOTER LINKS DATA ---
const footerLinks = {
  development: {
    title: "Development",
    links: [
      { name: "Mobile Apps", href: "/services/mobile-app" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Custom CRM", href: "/services/custom-crm" },
      { name: "Ecommerce", href: "/services/ecommerce" },
      { name: "Travel System", href: "/services/travel-system" },
    ],
  },
  hosting: {
    title: "Hosting",
    links: [
      { name: "Shared Hosting", href: "/hosting/shared" },
      { name: "VPS Servers", href: "/hosting/vps" },
      { name: "Cloud Hosting", href: "/hosting/cloud" },
      { name: "Dedicated Servers", href: "/hosting/dedicated" },
      { name: "Domain Names", href: "/hosting/domains" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Products", href: "/products" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Careers", href: "/careers" },
      { name: "Latest Tech News", href: "/news" },
      { name: "Company Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
    ],
  },
  support: {
    title: "Support & Legal",
    links: [
      { name: "FAQs", href: "/faqs" },
      { name: "Cost Calculator", href: "/calculator" },
      { name: "Contact Us", href: "/contact" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Refund Policy", href: "/refund-policy" },
    ],
  },
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="relative bg-black text-white pt-24 pb-12 px-6 md:px-12 lg:px-20 overflow-hidden font-bold">
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* TOP SECTION: CALL TO ACTION & NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border-b border-zinc-900 pb-16">
          <div className="lg:col-span-7 space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Let&apos;s get started on <br className="hidden md:block" />
              something <span className="text-[#BFCA16]">great</span>
            </h2>
            <p className="text-zinc-500 text-sm md:text-base font-light max-w-xl">
              We provide the expertise and support to propel your business
              forward. Get industry-leading solutions tailored for scale.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form
              onSubmit={handleSubscribe}
              className="relative flex items-center w-full"
            >
              <div className="relative w-full group">
                <input
                  type="email"
                  required
                  placeholder="For subscribe newsletter"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-950/60 border border-zinc-800/80 rounded-full py-4 pl-6 pr-36 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#BFCA16] focus:ring-1 focus:ring-[#BFCA16]/30 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-[#BFCA16] hover:bg-[#BFCA16]/80 text-white px-6 rounded-full text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-all active:scale-95 shadow-lg shadow-[#BFCA16]/20"
                >
                  {isSubscribed ? (
                    "Subscribed!"
                  ) : (
                    <>
                      Subscribe <Send className="w-3 h-3" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* MIDDLE SECTION: LINK GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {Object.entries(footerLinks).map(([key, group]) => (
            <div key={key} className="space-y-5 text-left">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                {group.title}
              </h3>
              <ul className="space-y-3.5">
                {group.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-[#BFCA16] transition-colors duration-250 flex items-center group/link"
                    >
                      <ArrowRight className="w-0 h-3 opacity-0 text-[#BFCA16] group-hover/link:w-3 group-hover/link:opacity-100 group-hover/link:mr-1.5 transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}

                {/* Special UI Treatment for Login Link */}
                {key === "support" && (
                  <li className="pt-2">
                    <Link
                      href="/login"
                      className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#BFCA16]/10 border border-[#BFCA16]/20 text-[#BFCA16] hover:bg-[#BFCA16] hover:text-white transition-all duration-300"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>Client Login</span>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: BRANDING & BENTO CONTACT INFO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-zinc-900 items-start">
          {/* Logo & Bio Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <Link
              href="/"
              className="flex flex-col items-start select-none group"
            >
              <span className="text-2xl font-bold tracking-tight text-white leading-none uppercase">
                Peltown<span className="text-[#BFCA16]">.</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.45em] text-zinc-500 uppercase mt-1 pl-0.5 group-hover:text-zinc-300 transition-colors">
                STUDIO
              </span>
            </Link>
            <p className="text-xs md:text-sm text-zinc-500 font-light leading-relaxed max-w-lg">
              PELTOWN is a leading IT solutions provider specializing in
              cutting-edge web development, mobile applications, customized CRM
              & ERP systems, and results-driven digital marketing. Our mission
              is to empower businesses with scalable, innovative technology
              tailored to drive sustainable growth and operational excellence.
            </p>
          </div>

          {/* Bento-style Contact Information Card */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-zinc-950/40 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 md:p-8 space-y-6 text-left hover:border-zinc-700/50 transition-colors duration-300">
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#BFCA16]">
                Get In Touch
              </h4>

              <div className="space-y-4">
                {/* Phone Item */}
                <a
                  href="tel:+919818381669"
                  className="flex items-start gap-4 group/contact"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover/contact:border-[#BFCA16]/30 group-hover/contact:bg-[#BFCA16]/5 group-hover/contact:text-[#BFCA16] transition-all shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                      Phone
                    </p>
                    <p className="text-sm font-semibold text-zinc-200 group-hover/contact:text-white transition-colors">
                      +91 981 838 1669
                    </p>
                  </div>
                </a>

                <div className="h-px bg-zinc-900" />

                {/* Mail Item */}
                <a
                  href="mailto:info@peltown.com"
                  className="flex items-start gap-4 group/contact"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover/contact:border-[#BFCA16]/30 group-hover/contact:bg-[#BFCA16]/5 group-hover/contact:text-[#BFCA16] transition-all shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                      Mail
                    </p>
                    <p className="text-sm font-semibold text-zinc-200 group-hover/contact:text-white transition-colors">
                      info@peltown.com
                    </p>
                  </div>
                </a>

                <div className="h-px bg-zinc-900" />

                {/* Address Item */}
                <div className="flex items-start gap-4 group/contact">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover/contact:border-[#BFCA16]/30 group-hover/contact:bg-[#BFCA16]/5 group-hover/contact:text-[#BFCA16] transition-all shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                      Corporate Address
                    </p>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
                      C-32, Block C, Sector 14, Kaushambi, Ghaziabad, Uttar
                      Pradesh 201010
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SOCIALS & COPYRIGHT BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-zinc-900/50">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              {
                href: "https://facebook.com",
                icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                  </svg>
                ),
              },
              {
                href: "https://twitter.com",
                icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
              {
                href: "https://instagram.com",
                icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                ),
              },
              {
                href: "https://linkedin.com",
                icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                ),
              },
            ].map((soc, index) => (
              <a
                key={index}
                href={soc.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-950 border border-zinc-850 flex items-center justify-center text-zinc-500 hover:text-white hover:border-[#BFCA16] hover:bg-[#BFCA16]/5 transition-all duration-300"
              >
                {soc.icon}
              </a>
            ))}
          </div>

          {/* Copyright Tag */}
          <span className="text-[11px] text-zinc-600 font-bold tracking-wide">
            &copy; {new Date().getFullYear()} PELTOWN. All rights reserved.
          </span>
        </div>
      </div>

      {/* FLOATING WHATSAPP CHAT INITIATOR */}
      <motion.a
        href="https://wa.me/919818381669"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 cursor-pointer group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:animate-none" />
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </motion.a>
    </footer>
  );
}
