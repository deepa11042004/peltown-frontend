"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const PRICING_PLANS = [
  {
    title: "Startup Store",
    price: "₹75,000 – ₹1,50,000",
    desc: "Perfect for new retail setups looking to launch their first professional online store.",
    features: [
      "Online Storefront",
      "Product Management",
      "Payment Gateway Integration",
      "Basic SEO Setup",
      "Admin Dashboard",
    ],
  },
  {
    title: "Growth Commerce Suite",
    price: "₹2,00,000 – ₹5,00,000",
    desc: "Ideal for growing brands requiring advanced integrations and business automation.",
    features: [
      "Advanced Storefront Features",
      "CRM & WhatsApp Integrations",
      "Inventory Management",
      "Marketing Automation",
      "Reporting & Analytics Dashboard",
    ],
    popular: true,
  },
  {
    title: "Enterprise Commerce Platform",
    price: "₹5,00,000 – ₹20,00,000+",
    desc: "For large operations needing marketplace systems and full-scale ERP synchronization.",
    features: [
      "Multi-Vendor Marketplace Module",
      "Full ERP System Integration",
      "Advanced Billing Automation",
      "Custom Enterprise Features",
      "iOS & Android Mobile Apps",
      "Dedicated Technical Support",
    ],
  },
  {
    title: "SaaS Commerce Platform",
    price: "Custom Quote",
    desc: "For businesses looking to launch a self-hosted custom Shopify or marketplace alternative.",
    features: [
      "Shopify Alternative Architecture",
      "Multi-Tenant Commerce Engine",
      "Custom White-Label Solutions",
      "Global Infrastructure Hosting",
    ],
  },
];

interface PricingPlan {
  title: string;
  price: string;
  desc: string;
  features: string[];
  popular?: boolean;
}

interface PricingSecProps {
  title?: string;
  subtitle?: string;
  desc?: string;
  plans?: PricingPlan[];
}

export default function PricingSec({
  title = "Pricing Options",
  subtitle = "Cost Structure",
  desc = "No hidden transaction fees. Invest in custom business assets that you own completely.",
  plans = PRICING_PLANS,
}: PricingSecProps) {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-black uppercase">
              {subtitle}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-950">
            {title}
          </h2>
          <p className="text-zinc-500 font-medium text-sm md:text-base max-w-2xl mx-auto">
            {desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className={`bg-white p-8 rounded-3xl border flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? "border-zinc-900 shadow-xl ring-2 ring-zinc-950/5" 
                  : "border-zinc-200 shadow-xs hover:border-zinc-400"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-0 top-0 bg-[#BFCA16] text-black text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-bl-xl uppercase">
                  Most Popular
                </div>
              )}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-zinc-950 tracking-tight mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                    {plan.desc}
                  </p>
                </div>

                <div className="py-2 border-y border-zinc-100">
                  <span className="text-lg md:text-lg font-bold text-zinc-950 tracking-tight">
                    {plan.price}
                  </span>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-500 font-medium">
                      <Check className="w-4 h-4 text-[#BFCA16] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href="/about/contact"
                  className={`w-full text-center block py-3 rounded-xl text-xs md:text-sm font-bold tracking-wide transition-all ${
                    plan.popular
                      ? "bg-zinc-950 hover:bg-[#BFCA16] text-white hover:text-black"
                      : "bg-zinc-100 hover:bg-zinc-200 text-zinc-800"
                  }`}
                >
                  Get Tailored Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
