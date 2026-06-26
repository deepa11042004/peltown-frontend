/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
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
  Menu,
  X,
} from "lucide-react";

// --- DATA STRUCTURES ---
const servicesData = [
  {
    category: "Development",
    icon: Cpu,
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
    icon: TrendingUp,
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
    icon: Camera,
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
    icon: Mail,
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
    icon: ShoppingBag,
    items: [
      { name: "E-commerce Suite", icon: ShoppingBag, href: "/products/ecommerce-suite" },
      { name: "Quick Commerce (10-Min)", icon: Zap, href: "/products/quick-commerce" },
      { name: "Cloud POS System", icon: Monitor, href: "/products/cloud-pos" },
      { name: "Fleet Delivery App", icon: Truck, href: "/products/fleet-delivery" },
    ],
  },
  {
    category: "Enterprise",
    icon: Briefcase,
    items: [
      { name: "Cloud ERP System", icon: Cpu, href: "/products/cloud-erp" },
      { name: "HRMS & Payroll", icon: Briefcase, href: "/products/hrms-payroll" },
      { name: "Omni-channel CRM", icon: Database, href: "/products/omnichannel-crm" },
      { name: "Invoicing & Billing", icon: Receipt, href: "/products/invoicing-billing" },
    ],
  },
  {
    category: "Industry Specific",
    icon: Layers,
    items: [
      { name: "Travel Agency System", icon: Plane, href: "/products/travel-agency" },
      { name: "Real Estate Portal", icon: HomeIcon, href: "/products/real-estate" },
      { name: "Restaurant Management", icon: Utensils, href: "/products/restaurant-management" },
      { name: "Learning Management", icon: GraduationCap, href: "/products/learning-management" },
    ],
  },
  {
    category: "Communications",
    icon: MessageSquare,
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
    icon: Info,
    items: [
      { name: "About Us", icon: Info, href: "/about" },
      { name: "How We Do", icon: Workflow, href: "/about/how-we-do" },
      { name: "Testimonials", icon: HeartHandshake, href: "/about/testimonials" },
    ],
  },
  {
    category: "Resources",
    icon: FolderGit2,
    items: [
      { name: "Portfolio", icon: FolderGit2, href: "/about/portfolio" },
      { name: "Careers", icon: Briefcase, href: "/about/careers" },
      { name: "Background Verification", icon: UserCheck, href: "/about/background-verification" },
      { name: "FAQs", icon: HelpCircle, href: "/about/faqs" },
    ],
  },
  {
    category: "Support",
    icon: Headphones,
    items: [
      { name: "Contact Usss", icon: Headphones, href: "/about/contact" },
      { name: "Cost Calculator", icon: Calculator, href: "/about/cost-calculator" },
      { name: "Terms & Conditions", icon: FileText, href: "/about/terms" },
      { name: "Refund Policy", icon: Undo2, href: "/about/refund-policy" },
    ],
  },
  {
    category: "Connect",
    icon: Users2,
    items: [
      { name: "Partner With Us", icon: Users2, href: "/about/partner-with-us" },
      { name: "Locations", icon: MapPin, href: "/about/locations" },
    ],
  },
];

// --- MOBILE ACCORDION ITEM ---
function MobileAccordion({
  label,
  href,
  data,
  onNavigate,
}: {
  label: string;
  href: string;
  data: { category: string; icon: any; items: { name: string; icon: any; href: string }[] }[];
  onNavigate: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-100 last:border-b-0">
      <div className="flex items-center justify-between">
        <Link
          href={href}
          onClick={onNavigate}
          className="flex-1 py-4 text-base font-bold text-zinc-800"
        >
          {label}
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 -mr-2 text-zinc-400 hover:text-zinc-700 transition-colors"
          aria-label={`Toggle ${label} submenu`}
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#BFCA16]" : ""}`}
          />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-4 space-y-4">
              {data.map((cat) => (
                <div key={cat.category}>
                  <span className="text-[10px] font-extrabold text-[#BFCA16] uppercase tracking-widest px-3 mb-2 block">
                    {cat.category}
                  </span>
                  <div className="space-y-0.5">
                    {cat.items.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={onNavigate}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-zinc-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-zinc-50 group-hover:bg-[#BFCA16]/10 flex items-center justify-center shrink-0 transition-colors">
                            <Icon className="w-4 h-4 text-zinc-400 group-hover:text-[#BFCA16] transition-colors" />
                          </div>
                          <span className="text-sm font-semibold text-zinc-600 group-hover:text-zinc-900 transition-colors">
                            {item.name}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<
    "services" | "products" | "company" | null
  >(null);
  const [activeSubTab, setActiveSubTab] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuEnter = (menu: "services" | "products" | "company") => {
    setActiveMenu(menu);
    if (menu === "services") {
      setActiveSubTab("Development");
    } else if (menu === "products") {
      setActiveSubTab("Commerce");
    } else if (menu === "company") {
      setActiveSubTab("Company");
    }
  };

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Backdrop for mobile menu — click to close */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      <header
        className="fixed top-4 sm:top-6 lg:top-10 left-3 right-3 sm:left-4 sm:right-4 z-50 font-sans pointer-events-none flex justify-center"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div
          className={`pointer-events-auto w-full max-w-7xl bg-white/95 backdrop-blur-md border border-zinc-200/80 shadow-lg transition-all duration-300 ease-in-out relative overflow-hidden ${
            activeMenu || mobileMenuOpen ? "rounded-3xl sm:rounded-4xl" : "rounded-3xl sm:rounded-4xl"
          }`}
        >
          <div className="px-4 sm:px-6 lg:px-10 h-14 sm:h-16 flex items-center justify-between">
            {/* BRAND LOGO */}
            <Link href="/" className="flex items-center select-none shrink-0">
              <Image
                src="/Img/logo.webp"
                alt="Peltown Studio Logo"
                width={120}
                height={36}
                priority
                className="object-contain w-auto h-7 sm:h-9"
              />
            </Link>

            {/* DESKTOP NAVIGATION LINKS */}
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
                onMouseEnter={() => handleMenuEnter("services")}
              >
                <Link
                  href="/services"
                  className={`flex items-center gap-1 text-sm font-bold px-4 py-2 rounded-md transition-colors ${
                    activeMenu === "services" ? "text-[#BFCA16] bg-zinc-50" : "text-zinc-600 hover:text-black"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeMenu === "services" ? "rotate-180 text-[#BFCA16]" : ""
                    }`}
                  />
                </Link>
              </div>

              {/* Products Trigger Dropdown */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMenuEnter("products")}
              >
                <Link
                  href="/products"
                  className={`flex items-center gap-1 text-sm font-bold px-4 py-2 rounded-md transition-colors ${
                    activeMenu === "products" ? "text-[#BFCA16] bg-zinc-50" : "text-zinc-600 hover:text-black"
                  }`}
                >
                  Products
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeMenu === "products" ? "rotate-180 text-[#BFCA16]" : ""
                    }`}
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
                onMouseEnter={() => handleMenuEnter("company")}
              >
                <Link
                  href="/about"
                  className={`flex items-center gap-1 text-sm font-bold px-4 py-2 rounded-md transition-colors ${
                    activeMenu === "company" ? "text-[#BFCA16] bg-zinc-50" : "text-zinc-600 hover:text-black"
                  }`}
                >
                  Company
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeMenu === "company" ? "rotate-180 text-[#BFCA16]" : ""
                    }`}
                  />
                </Link>
              </div>
            </nav>

            {/* RIGHT SIDE UTILITIES */}
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 shrink-0">
              {/* Contact Metadata Column — hidden below xl */}
              <a
                href="tel:+919818381669"
                className="hidden xl:flex items-center gap-3 text-right group"
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

              {/* Right Divider — hidden below xl */}
              <div className="hidden xl:block h-8 w-px bg-zinc-200" />

              {/* Action Buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                <Link
                  href="/login"
                  className="hidden sm:inline-flex text-sm font-bold text-zinc-700 hover:text-black px-4 lg:px-5 py-2 rounded-full border border-zinc-200 hover:border-zinc-300 transition-all"
                >
                  Login
                </Link>
                <Link
                  href="/about/contact"
                  className="hidden lg:inline-flex xl:inline-flex text-sm font-bold bg-black text-white px-5 py-2 rounded-full hover:bg-zinc-800 transition-all shadow-sm"
                >
                  Contact Us
                </Link>
              </div>

              {/* HAMBURGER BUTTON — visible below lg */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-zinc-200 hover:border-zinc-300 bg-zinc-50/80 hover:bg-zinc-100 transition-all"
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-5 h-5 text-zinc-700" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-5 h-5 text-zinc-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* DESKTOP DYNAMIC DROPDOWN FLYOUT PANEL */}
          <AnimatePresence>
            {activeMenu && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden border-t border-zinc-100 bg-white hidden lg:block"
              >
                <div className="p-6 grid grid-cols-12 gap-6">
                  {/* 1. LEFT COLUMN: VERTICAL TABS (3 cols) */}
                  <div className="col-span-12 md:col-span-3 border-r border-zinc-100 pr-4 space-y-1">
                    {activeMenu === "services" &&
                      servicesData.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = activeSubTab === cat.category;
                        return (
                          <div
                            key={cat.category}
                            onMouseEnter={() => setActiveSubTab(cat.category)}
                            className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group ${
                              isActive
                                ? "bg-zinc-50 text-zinc-950 font-bold"
                                : "text-zinc-500 hover:bg-zinc-50/55 hover:text-zinc-800"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-[#BFCA16]" : "text-zinc-400 group-hover:text-zinc-600"}`} />
                              <span className="text-sm">{cat.category}</span>
                            </div>
                            {isActive && (
                              <ChevronRight className="w-4 h-4 text-[#BFCA16]" />
                            )}
                          </div>
                        );
                      })}

                    {activeMenu === "products" &&
                      productsData.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = activeSubTab === cat.category;
                        return (
                          <div
                            key={cat.category}
                            onMouseEnter={() => setActiveSubTab(cat.category)}
                            className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group ${
                              isActive
                                ? "bg-zinc-50 text-zinc-950 font-bold"
                                : "text-zinc-500 hover:bg-zinc-50/55 hover:text-zinc-800"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-[#BFCA16]" : "text-zinc-400 group-hover:text-zinc-600"}`} />
                              <span className="text-sm">{cat.category}</span>
                            </div>
                            {isActive && (
                              <ChevronRight className="w-4 h-4 text-[#BFCA16]" />
                            )}
                          </div>
                        );
                      })}

                    {activeMenu === "company" &&
                      companyData.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = activeSubTab === cat.category;
                        return (
                          <div
                            key={cat.category}
                            onMouseEnter={() => setActiveSubTab(cat.category)}
                            className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group ${
                              isActive
                                ? "bg-zinc-50 text-zinc-950 font-bold"
                                : "text-zinc-500 hover:bg-zinc-50/55 hover:text-zinc-800"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-[#BFCA16]" : "text-zinc-400 group-hover:text-zinc-600"}`} />
                              <span className="text-sm">{cat.category}</span>
                            </div>
                            {isActive && (
                              <ChevronRight className="w-4 h-4 text-[#BFCA16]" />
                            )}
                          </div>
                        );
                      })}
                  </div>

                  {/* 2. MIDDLE COLUMN: SUB-SERVICES/ITEMS LIST (5 cols) */}
                  <div className="col-span-12 md:col-span-5 px-2 flex flex-col justify-start">
                    <div className="mb-4">
                      <h3 className="text-xs font-extrabold text-[#BFCA16] uppercase tracking-wider px-3 py-1 bg-[#BFCA16]/5 rounded-md inline-block">
                        {activeSubTab}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {(() => {
                        let activeItems: any[] = [];
                        if (activeMenu === "services") {
                          activeItems = servicesData.find((cat) => cat.category === activeSubTab)?.items || [];
                        } else if (activeMenu === "products") {
                          activeItems = productsData.find((cat) => cat.category === activeSubTab)?.items || [];
                        } else if (activeMenu === "company") {
                          activeItems = companyData.find((cat) => cat.category === activeSubTab)?.items || [];
                        }

                        return activeItems.map((item, idx) => {
                          return (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="group flex items-center px-3 py-1.5 rounded-lg hover:bg-zinc-50 transition-colors"
                            >
                              <span className="text-sm font-semibold text-zinc-700 group-hover:text-black transition-colors flex items-center gap-1.5">
                                {item.name}
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#BFCA16]" />
                              </span>
                            </Link>
                          );
                        });
                      })()}
                    </div>
                  </div>

                  {/* 3. RIGHT COLUMN: FEATURED BANNER CARD (4 cols) */}
                  <div className="col-span-12 md:col-span-4 pl-2">
                    <div className="relative h-full min-h-65 rounded-2xl bg-zinc-950 p-6 flex flex-col justify-between overflow-hidden shadow-lg group/card">
                      {/* Glowing background shapes */}
                      <div className="absolute top-0 right-0 w-36 h-36 bg-[#BFCA16]/10 rounded-full blur-3xl pointer-events-none group-hover/card:scale-125 transition-transform duration-500" />
                      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-zinc-900 rounded-full blur-2xl pointer-events-none" />

                      <div className="relative z-10 space-y-2.5">
                        <span className="text-[9px] font-extrabold text-[#BFCA16] uppercase tracking-widest bg-[#BFCA16]/10 px-2.5 py-1 rounded-full inline-block">
                          Peltown Studio
                        </span>
                        <h4 className="text-base font-bold text-white leading-snug">
                          {activeMenu === "services" && "Scale Your Operations with Custom CRM & ERP"}
                          {activeMenu === "products" && "Accelerate Your Business with Cloud SaaS Tools"}
                          {activeMenu === "company" && "Partner with Top-Tier Engineers & Marketers"}
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {activeMenu === "services" && "Get custom-designed enterprise software matching your exact operational workflows."}
                          {activeMenu === "products" && "Launch high-performance apps built on robust Next.js framework for fast scaling."}
                          {activeMenu === "company" && "Learn more about our collaborative process and structural engineering methodology."}
                        </p>
                      </div>

                      <div className="relative z-10 pt-4 flex items-center justify-between">
                        <Link
                          href="/about/contact"
                          onClick={() => setActiveMenu(null)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-black bg-white hover:bg-zinc-100 px-4.5 py-2.5 rounded-full transition-all group-hover/card:shadow-lg hover:scale-[1.02]"
                        >
                          Book a Consultation
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide">
                          Response in 24h
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Sticky Action Banner Footer */}
                <div className="bg-zinc-50/70 border-t border-zinc-100 px-6 py-4 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-bold">
                    Looking for custom engineering solutions outside this model?
                  </span>
                  <Link
                    href={activeMenu === "services" ? "/services" : activeMenu === "products" ? "/products" : "/about"}
                    onClick={() => setActiveMenu(null)}
                    className="text-xs font-bold text-[#BFCA16] hover:text-[#9ba40e] flex items-center gap-1 transition-colors group"
                  >
                    {activeMenu === "services" && "All Services"}
                    {activeMenu === "products" && "All Products"}
                    {activeMenu === "company" && "Company Overview"}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* MOBILE MENU — expands INSIDE the floating navbar pill        */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden border-t border-zinc-100 bg-white lg:hidden"
              >
                <div className="max-h-[70dvh] overflow-y-auto overscroll-contain">
                  {/* Navigation Links */}
                  <div className="px-5 py-2">
                    <Link
                      href="/"
                      onClick={closeMobileMenu}
                      className="block py-3.5 text-[15px] font-bold text-zinc-800 border-b border-zinc-100"
                    >
                      Home
                    </Link>

                    <MobileAccordion
                      label="Services"
                      href="/services"
                      data={servicesData}
                      onNavigate={closeMobileMenu}
                    />
                    <MobileAccordion
                      label="Products"
                      href="/products"
                      data={productsData}
                      onNavigate={closeMobileMenu}
                    />

                    <Link
                      href="/store"
                      onClick={closeMobileMenu}
                      className="block py-3.5 text-[15px] font-bold text-zinc-800 border-b border-zinc-100"
                    >
                      LiveMarket
                    </Link>

                    <MobileAccordion
                      label="Company"
                      href="/about"
                      data={companyData}
                      onNavigate={closeMobileMenu}
                    />
                  </div>

                  {/* Footer: Phone + Action Buttons */}
                  <div className="border-t border-zinc-100 px-5 py-4 space-y-3 bg-zinc-50/50">
                    <a
                      href="tel:+919818381669"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-zinc-200 group-hover:border-[#BFCA16]/30 transition-colors">
                        <Phone className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#BFCA16] transition-colors" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-[#BFCA16] uppercase tracking-wider flex items-center gap-0.5">
                          Call Us <ArrowUpRight className="w-3 h-3" />
                        </span>
                        <span className="text-sm font-semibold text-zinc-900 tracking-tight">
                          +91 981 838 1669
                        </span>
                      </div>
                    </a>

                    <div className="flex items-center gap-2">
                      <Link
                        href="/login"
                        onClick={closeMobileMenu}
                        className="flex-1 text-center text-sm font-bold text-zinc-700 px-4 py-2.5 rounded-full border border-zinc-200 hover:border-zinc-300 transition-all"
                      >
                        Login
                      </Link>
                      <Link
                        href="/about/contact"
                        onClick={closeMobileMenu}
                        className="flex-1 text-center text-sm font-bold bg-black text-white px-4 py-2.5 rounded-full hover:bg-zinc-800 transition-all shadow-sm"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
