"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Phone,
  ArrowUpRight,
  Monitor,
  Cpu,
  Smartphone,
  Database,
  Search,
  Share2,
  TrendingUp,
  MapPin,
  Camera,
  Layers,
  Mail,
  MessageSquare,
  ArrowRight,
  ShoppingBag,
  Zap,
  Briefcase,
  Receipt,
  Plane,
  Home as HomeIcon,
  Utensils,
  GraduationCap,
  Bell,
  ShieldAlert,
  Truck,
  Calendar,
  Info,
  Workflow,
  HeartHandshake,
  FolderGit2,
  UserCheck,
  HelpCircle,
  Headphones,
  Calculator,
  FileText,
  Undo2,
  Users2,
} from "lucide-react";

// --- DATA STRUCTURES ---
const servicesData = [
  {
    category: "Development",
    items: [
      {
        name: "Website Development",
        desc: "Next.js & React expert sites",
        icon: Monitor,
        href: "/services/web-development",
      },
      {
        name: "ERP Systems",
        desc: "Internal structural enterprise apps",
        icon: Cpu,
        href: "/services/erp-system",
      },
      {
        name: "Mobile Apps",
        desc: "Native iOS & Android builds",
        icon: Smartphone,
        href: "/services/mobile-app",
      },
      {
        name: "Custom CRM",
        desc: "Tailored operations pipelines",
        icon: Database,
        href: "/services/custom-crm",
      },
    ],
  },
  {
    category: "Marketing",
    items: [
      {
        name: "SEO Optimization",
        desc: "Rank higher on search engines",
        icon: Search,
        href: "/services/seo-optimization",
      },
      {
        name: "Social Media",
        desc: "Grow digital presence & organic reach",
        icon: Share2,
        href: "/services/social-media",
      },
      {
        name: "Digital Marketing",
        desc: "Performance-led paid campaigns",
        icon: TrendingUp,
        href: "/services/digital-marketing",
      },
      {
        name: "Google My Business",
        desc: "Local optimization structures",
        icon: MapPin,
        href: "/services/gmb-services",
      },
    ],
  },
  {
    category: "Business Studio",
    items: [
      {
        name: "Product Photoshoot",
        desc: "High-end brand asset capturing",
        icon: Camera,
        href: "/services/service-photoshoot",
      },
      {
        name: "Branding & Packaging",
        desc: "Visual identities engineered",
        icon: Layers,
        href: "/services/service-branding",
      },
    ],
  },
  {
    category: "Communication",
    items: [
      {
        name: "Bulk Email Services",
        desc: "High deliverability newsletters",
        icon: Mail,
        href: "/services/bulk-email",
      },
      {
        name: "WhatsApp API",
        desc: "Automated direct client chat hubs",
        icon: MessageSquare,
        href: "/services/whatsapp-api",
      },
      {
        name: "Business Email",
        desc: "Secure custom domain mailboxes",
        icon: ShieldAlert,
        href: "/services/email-solutions",
      },
    ],
  },
];

const productsData = [
  {
    category: "Commerce",
    items: [
      { name: "E-commerce Suite", icon: ShoppingBag, href: "/products/ecommerce-suite" },
      { name: "Quick Commerce (10-Min)", icon: Zap, href: "/products/quick-commerce" },
      { name: "Cloud POS System", icon: Monitor, href: "/products/cloud-pos" },
      { name: "Fleet Delivery App", icon: Truck, href: "/products/fleet-delivery" },
    ],
  },
  {
    category: "Enterprise",
    items: [
      { name: "Cloud ERP System", icon: Cpu, href: "/products/cloud-erp" },
      { name: "HRMS & Payroll", icon: Briefcase, href: "/products/hrms-payroll" },
      { name: "Omni-channel CRM", icon: Database, href: "/products/omnichannel-crm" },
      { name: "Invoicing & Billing", icon: Receipt, href: "/products/invoicing-billing" },
    ],
  },
  {
    category: "Industry Specific",
    items: [
      { name: "Travel Agency System", icon: Plane, href: "/products/travel-agency" },
      { name: "Real Estate Portal", icon: HomeIcon, href: "/products/real-estate" },
      { name: "Restaurant Management", icon: Utensils, href: "/products/restaurant-management" },
      { name: "Learning Management", icon: GraduationCap, href: "/products/learning-management" },
    ],
  },
  {
    category: "Communications",
    items: [
      { name: "Bulk WhatsApp API", icon: MessageSquare, href: "/products/bulk-whatsapp" },
      { name: "Email Automation", icon: Mail, href: "/products/email-automation" },
      { name: "Helpdesk Ticketing", icon: Bell, href: "/products/helpdesk-ticketing" },
      { name: "Appointment Booking", icon: Calendar, href: "/products/appointment-booking" },
    ],
  },
];

const companyData = [
  {
    category: "Company",
    items: [
      { name: "About Us", icon: Info, href: "/about" },
      { name: "How We Do", icon: Workflow, href: "/about/how-we-do" },
      { name: "Testimonials", icon: HeartHandshake, href: "/about/testimonials" },
    ],
  },
  {
    category: "Resources",
    items: [
      { name: "Portfolio", icon: FolderGit2, href: "/about/portfolio" },
      { name: "Careers", icon: Briefcase, href: "/about/careers" },
      { name: "Background Verification", icon: UserCheck, href: "/about/background-verification" },
      { name: "FAQs", icon: HelpCircle, href: "/about/faqs" },
    ],
  },
  {
    category: "Support",
    items: [
      { name: "Contact Us", icon: Headphones, href: "/about/contact" },
      { name: "Cost Calculator", icon: Calculator, href: "/about/cost-calculator" },
      { name: "Terms & Conditions", icon: FileText, href: "/about/terms" },
      { name: "Refund Policy", icon: Undo2, href: "/about/refund-policy" },
    ],
  },
  {
    category: "Connect",
    items: [
      { name: "Partner With Us", icon: Users2, href: "/about/partner-with-us" },
      { name: "Locations", icon: MapPin, href: "/about/locations" },
    ],
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<
    "services" | "products" | "company" | null
  >(null);

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-white border-b border-zinc-100 z-50 font-sans"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        {/* BRAND LOGO */}
        <Link href="/" className="flex items-center select-none">
          <Image
            src="/Img/logo.webp"
            alt="Peltown Studio Logo"
            width={120}
            height={36}
            priority
            className="object-contain w-auto h-9"
          />
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center gap-1 h-full">
          <Link
            href="/"
            className="text-sm font-bold text-zinc-600 hover:text-black px-4 py-2 rounded-md transition-colors"
          >
            Home
          </Link>

          {/* Services Trigger Dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setActiveMenu("services")}
          >
            <Link
              href="/services"
              className={`flex items-center gap-1 text-sm font-bold px-4 py-2 rounded-md transition-colors ${activeMenu === "services" ? "text-[#BFCA16] bg-zinc-50" : "text-zinc-600 hover:text-black"}`}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${activeMenu === "services" ? "rotate-180 text-[#BFCA16]" : ""}`}
              />
            </Link>
          </div>

          {/* Products Trigger Dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setActiveMenu("products")}
          >
            <Link
              href="/products"
              className={`flex items-center gap-1 text-sm font-bold px-4 py-2 rounded-md transition-colors ${activeMenu === "products" ? "text-[#BFCA16] bg-zinc-50" : "text-zinc-600 hover:text-black"}`}
            >
              Products
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${activeMenu === "products" ? "rotate-180 text-[#BFCA16]" : ""}`}
              />
            </Link>
          </div>

          <Link
            href="/store"
            className="text-sm font-bold text-zinc-600 hover:text-black px-4 py-2 rounded-md transition-colors"
          >
            LiveMarket
          </Link>

          {/* Company Trigger Dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setActiveMenu("company")}
          >
            <Link
              href="/about"
              className={`flex items-center gap-1 text-sm font-bold px-4 py-2 rounded-md transition-colors ${activeMenu === "company" ? "text-[#BFCA16] bg-zinc-50" : "text-zinc-600 hover:text-black"}`}
            >
              Company
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${activeMenu === "company" ? "rotate-180 text-[#BFCA16]" : ""}`}
              />
            </Link>
          </div>
        </nav>

        {/* RIGHT SIDE UTILITIES */}
        <div className="flex items-center gap-6">
          {/* Contact Metadata Column */}
          <a
            href="tel:+919818381669"
            className="hidden sm:flex items-center gap-3 text-right group"
          >
            <div className="w-9 h-9 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100 group-hover:bg-[#BFCA16]/5 group-hover:border-[#BFCA16]/10 transition-colors">
              <Phone className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#BFCA16] transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-[#BFCA16] uppercase tracking-wider flex items-center justify-end gap-0.5">
                Call Us <ArrowUpRight className="w-3 h-3" />
              </span>
              <span className="text-xs font-semibold text-zinc-900 tracking-tight">
                +91 981 838 1669
              </span>
            </div>
          </a>

          {/* Right Dividers */}
          <div className="hidden sm:block h-8 w-px bg-zinc-200" />

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-bold text-zinc-700 hover:text-black px-5 py-2.5 rounded-full border border-zinc-200 hover:border-zinc-300 transition-all"
            >
              Login
            </Link>
            <Link
              href="/contact"
              className="text-sm font-bold bg-black text-white px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-all shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* DYNAMIC DROPDOWN FLYOUT PANEL */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.99 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-6 right-6 top-full bg-white border border-zinc-200 rounded-2xl shadow-2xl shadow-black/5 overflow-hidden z-50 grid grid-cols-12"
            >
              {/* Main Dynamic Panel Grid Area */}
              <div className="col-span-12 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                {/* RENDERING SERVICES LAYER */}
                {activeMenu === "services" &&
                  servicesData.map((cat, i) => (
                    <div key={i} className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                        {cat.category}
                      </h4>
                      <div className="space-y-2">
                        {cat.items.map((item, idx) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="group flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-zinc-50 transition-colors"
                            >
                              <div className="w-9 h-9 rounded-lg border border-zinc-200 bg-white flex items-center justify-center text-zinc-500 group-hover:border-[#BFCA16]/30 group-hover:bg-[#BFCA16]/5 group-hover:text-[#BFCA16] transition-colors shrink-0">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="space-y-0.5">
                                <p className="text-sm font-semibold text-zinc-900 group-hover:text-black transition-colors">
                                  {item.name}
                                </p>
                                <p className="text-xs text-zinc-400 group-hover:text-zinc-500 transition-colors line-clamp-1">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                {/* RENDERING PRODUCTS LAYER */}
                {activeMenu === "products" &&
                  productsData.map((cat, i) => (
                    <div key={i} className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                        {cat.category}
                      </h4>
                      <div className="space-y-1">
                        {cat.items.map((item, idx) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="group flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-50 transition-colors"
                            >
                              <div className="w-8 h-8 rounded-md border border-zinc-150 bg-zinc-50/50 flex items-center justify-center text-zinc-400 group-hover:border-[#BFCA16]/30 group-hover:bg-[#BFCA16]/5 group-hover:text-[#BFCA16] transition-all shrink-0">
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-sm font-bold text-zinc-600 group-hover:text-black transition-colors">
                                {item.name}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                {/* RENDERING COMPANY LAYER */}
                {activeMenu === "company" &&
                  companyData.map((cat, i) => (
                    <div key={i} className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                        {cat.category}
                      </h4>
                      <div className="space-y-1">
                        {cat.items.map((item, idx) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="group flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-50 transition-colors"
                            >
                              <div className="w-8 h-8 rounded-md border border-zinc-150 bg-zinc-50/50 flex items-center justify-center text-zinc-400 group-hover:border-[#BFCA16]/30 group-hover:bg-[#BFCA16]/5 group-hover:text-[#BFCA16] transition-all shrink-0">
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-sm font-bold text-zinc-600 group-hover:text-black transition-colors">
                                {item.name}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
              </div>

              {/* Bottom Sticky Action Banner Footer */}
              {activeMenu === "services" && (
                <div className="col-span-12 bg-zinc-50/70 border-t border-zinc-100 px-8 py-4 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-bold">
                    Looking for custom engineering solutions outside this model?
                  </span>
                  <Link
                    href="/services"
                    className="text-xs font-bold text-[#BFCA16] hover:text-[#9ba40e] flex items-center gap-1 transition-colors group"
                  >
                    All Services
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
