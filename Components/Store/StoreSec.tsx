"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ExternalLink,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

//  DATA STRUCTURES
const categories = [
  "E-Commerce",
  "School & Education",
  "Restaurant",
  "Gym & Fitness",
  "Portfolio",
  "Directory",
  "Corporate",
  "SaaS",
];

const products = [
  {
    id: 1,
    title: "Fashion & Apparel Store",
    category: "E-Commerce",
    description:
      "A complete chic e-commerce solution with admin panel, dynamic cart management, and pre-integrated multi-gateway payment channels.",
    priceUSD: 299,
    image: "/Img/store1.webp", // Falls back gracefully if local asset does not exist
    badge: "Best Seller",
  },
  {
    id: 2,
    title: "Tech & Electronics Store",
    category: "E-Commerce",
    description:
      "Modern tech store theme featuring robust product specification grids, structured user review engines, and a blazing fast interface.",
    priceUSD: 349,
    image: "/Img/store2.webp",
    badge: "Hot Choice",
  },
  {
    id: 3,
    title: "EduCampus Academy Portal",
    category: "School & Education",
    description:
      "Comprehensive educational platform with online course registries, student assessment modules, and intuitive grading dashboards.",
    priceUSD: 399,
    image: "/Img/store3.webp",
    badge: "Enterprise",
  },
  {
    id: 4,
    title: "BistroGourmet Restaurant App",
    category: "Restaurant",
    description:
      "An elegant interactive menu and table reservation engine designed to skyrocket local customer acquisitions.",
    priceUSD: 279,
    image: "/Img/store4.webp",
    badge: "New Release",
  },
  {
    id: 5,
    title: "SaaS Analytics Dashboard Engine",
    category: "SaaS",
    description:
      "A comprehensive plug-and-play dashboard console with metric widgets, data exports, and subscription management templates.",
    priceUSD: 499,
    image: "/Img/store5.webp",
    badge: "Advanced",
  },
];

export default function StoreSec() {
  //  CLIENT-SIDE STATES
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<
    "all" | "under200" | "200-300" | "above300"
  >("all");

  const exchangeRate = 83; // 1 USD = 83 INR conversion standard

  //  INTERACTIVE FILTER LOGIC
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // 1. Search filter
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      // 2. Category filter
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      // 3. Price filter
      let matchesPrice = true;
      if (priceRange === "under200") {
        matchesPrice = product.priceUSD < 200;
      } else if (priceRange === "200-300") {
        matchesPrice = product.priceUSD >= 200 && product.priceUSD <= 300;
      } else if (priceRange === "above300") {
        matchesPrice = product.priceUSD > 300;
      }

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategories, priceRange]);

  // Handle category toggle
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  // Format currency helpers
  const formatPrice = (priceInUSD: number) => {
    if (currency === "INR") {
      const converted = Math.round(priceInUSD * exchangeRate);
      return `₹${converted.toLocaleString("en-IN")}`;
    }
    return `$${priceInUSD}`;
  };

  return (
    <section className="bg-white text-black pb-24 px-6 md:px-12 lg:px-20 w-full min-h-screen overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* HERO INTRO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center border-b border-zinc-100 pb-16">
          {/* Hero Content Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-400 shadow-xs text-left"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-black uppercase">
                3, 2, Live
              </span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-headingColor leading-tight">
                Premium Ready-
                <br />
                Made Software
              </h1>
              <p className="text-descriptionColor text-base md:text-lg font-light leading-relaxed max-w-xl">
                Choose a complete product, purchase it, and our developers will
                connect with you to make it live in just minutes.
              </p>
            </div>

            {/* Currency Switcher Toggle Container */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-wider text-zinc-400 uppercase">
                Currency:
              </span>
              <div className="relative p-1 bg-zinc-100 rounded-full flex items-center w-48">
                <button
                  onClick={() => setCurrency("USD")}
                  className={`relative z-10 w-1/2 py-2 text-xs font-bold transition-all duration-300 ${currency === "USD" ? "text-zinc-950" : "text-zinc-400"}`}
                >
                  USD ($)
                </button>
                <button
                  onClick={() => setCurrency("INR")}
                  className={`relative z-10 w-1/2 py-2 text-xs font-bold transition-all duration-300 ${currency === "INR" ? "text-zinc-950" : "text-zinc-400"}`}
                >
                  INR (₹)
                </button>

                {/* Sliding highlight layer */}
                <motion.div
                  className="absolute top-1 bottom-1 left-1 bg-white rounded-full shadow"
                  animate={{ x: currency === "USD" ? 0 : "92%" }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  style={{ width: "48%" }}
                />
              </div>
            </div>
          </div>

          {/* Hero Image Component Column */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative group w-full max-w-lg aspect-square rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-100 shadow-xl shadow-zinc-100/50">
              {/* Image mapping request */}
              <Image
                src="/Img/hero.png"
                alt="Premium ready-made product illustration ecosystem"
                fill
                priority
                sizes="(max-w-768px) 100vw, 40vw"
                className="object-contain p-6 group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* STORE DIRECTORY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT FILTER SIDEBAR */}
          <div className="lg:col-span-3 space-y-8 bg-zinc-50/40 border border-zinc-200/60 rounded-3xl p-6 lg:sticky lg:top-24">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold tracking-wider uppercase text-zinc-400 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-zinc-400" /> Filters
              </h3>
              {(selectedCategories.length > 0 ||
                searchQuery !== "" ||
                priceRange !== "all") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategories([]);
                    setPriceRange("all");
                  }}
                  className="text-xs font-bold text-[#BFCA16] hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* A. Search products input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-700 tracking-wide uppercase block text-left">
                Search Products
              </label>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-zinc-200 rounded-xl py-2.5 pl-10 pr-4 text-sm text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-[#BFCA16] focus:ring-1 focus:ring-[#BFCA16]/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* B. Categories selector list */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-zinc-700 tracking-wide uppercase block text-left">
                Categories
              </label>
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {categories.map((category) => {
                  const isChecked = selectedCategories.includes(category);
                  return (
                    <button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className="flex items-center gap-3 w-full text-left py-1 group"
                    >
                      {/* Customized checkbox block */}
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200 ${isChecked ? "bg-[#BFCA16] border-[#BFCA16] text-white" : "border-zinc-300 bg-white group-hover:border-[#BFCA16]"}`}
                      >
                        {isChecked && (
                          <svg
                            className="w-3 h-3 fill-none stroke-current stroke-2"
                            viewBox="0 0 24 24"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </div>
                      <span
                        className={`text-sm tracking-tight transition-colors ${isChecked ? "font-semibold text-zinc-950" : "text-zinc-500 group-hover:text-zinc-950"}`}
                      >
                        {category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* C. Price Range radio filters */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-zinc-700 tracking-wide uppercase block text-left">
                Price Range
              </label>
              <div className="space-y-2.5">
                {[
                  { value: "all", label: "All Prices" },
                  { value: "under200", label: "Under $200" },
                  { value: "200-300", label: "$200 - $300" },
                  { value: "above300", label: "Above $300" },
                ].map((option) => {
                  const isChecked = priceRange === option.value;
                  return (
                    <button
                      key={option.value}
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      onClick={() => setPriceRange(option.value as any)}
                      className="flex items-center gap-3 w-full text-left py-1 group"
                    >
                      {/* Customized radio circle */}
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${isChecked ? "border-[#BFCA16] bg-white" : "border-zinc-300 bg-white group-hover:border-[#BFCA16]"}`}
                      >
                        {isChecked && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#BFCA16]" />
                        )}
                      </div>
                      <span
                        className={`text-sm tracking-tight transition-colors ${isChecked ? "font-semibold text-zinc-950" : "text-zinc-500 group-hover:text-zinc-950"}`}
                      >
                        {option.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT PRODUCTS PANEL */}
          <div className="lg:col-span-9 space-y-6">
            {/* Products Count Header banner */}
            <div className="flex justify-between items-center bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 w-full">
              <span className="text-sm font-semibold text-zinc-500">
                Showing{" "}
                <span className="text-zinc-950 font-bold">
                  {filteredProducts.length}
                </span>{" "}
                of {products.length} products
              </span>
            </div>

            {/* Horizontal Product list area with fluid entrance animations */}
            <div className="space-y-6">
              <AnimatePresence mode="popLayout">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <motion.div
                      layout
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="group relative bg-white border border-zinc-150 rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-100 transition-all duration-300"
                    >
                      {/* 1. Preview Screen Container Column */}
                      <div className="md:col-span-4 relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-100">
                        {/* Dynamic category stamp badge inside frame */}
                        <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 bg-white/95 px-2.5 py-1 rounded-lg border border-zinc-100 shadow-sm text-[10px] font-bold text-zinc-900">
                          <Sparkles className="w-3.5 h-3.5 text-[#BFCA16]" />{" "}
                          {product.badge}
                        </div>
                        {/* If local product graphics exist, they render here */}
                        <Image
                          src={product.image}
                          alt={`${product.title} layout dashboard representation preview`}
                          fill
                          sizes="(max-w-768px) 100vw, 25vw"
                          className="object-cover p-3 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* 2. Detailed Specs Block Column */}
                      <div className="md:col-span-8 flex flex-col justify-between h-full text-left space-y-6">
                        <div className="space-y-2">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#BFCA16]">
                            {product.category}
                          </span>
                          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-headingColor">
                            {product.title}
                          </h3>
                          <p className="text-descriptionColor text-sm font-light leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        {/* Interactive Pricing and Action Controls Footer block inside the card */}
                        <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-zinc-100">
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                              License Price
                            </span>
                            <span className="text-2xl md:text-3xl font-bold text-headingColor">
                              {formatPrice(product.priceUSD)}
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            {/* Live preview outline action */}
                            <a
                              href="#"
                              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-full border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-zinc-800 transition-all"
                            >
                              <ExternalLink className="w-4 h-4 text-zinc-400" />
                              <span>Live Preview</span>
                            </a>

                            {/* Purchase primary solid action */}
                            <a
                              href="#"
                              className="inline-flex items-center gap-2 text-sm font-bold bg-black hover:bg-[#BFCA16] text-white px-6 py-3 rounded-full transition-all shadow-sm active:scale-95 shrink-0"
                            >
                              <ShoppingCart className="w-4 h-4" />
                              <span>Purchase</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  // Fallback empty search viewport state
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-20 px-4 text-center bg-zinc-50 border border-zinc-100 rounded-3xl"
                  >
                    <SlidersHorizontal className="w-12 h-12 text-zinc-300 mb-4" />
                    <h3 className="text-lg font-bold text-headingColor">
                      No products match your criteria
                    </h3>
                    <p className="text-sm text-descriptionColor max-w-sm mt-1">
                      Try updating your text query, selecting different
                      categories, or altering the price constraints.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
