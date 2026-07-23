"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Megaphone,
  Home,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export interface ProjectData {
  code: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  image: string;
  link?: string;
}

const projects: ProjectData[] = [
  {
    code: "P01",
    name: "BSERC LMS",
    category: "Education",
    description:
      "A learning management system for online courses, enrollment, assessments, and certification.",
    features: [
      "Student & faculty portals",
      "Course management",
      "Online assessments",
      "Progress tracking",
      "Certificate generation",
      "Admin dashboard",
    ],
    icon: GraduationCap,
    image: "/Img/bserc.webp",
  },
  {
    code: "P02",
    name: "BSERC Website",
    category: "Education",
    description:
      "A corporate and educational site delivering announcements, courses, and services to its community.",
    features: [
      "Dynamic content management",
      "Responsive design",
      "News & updates",
      "Contact management",
      "SEO optimization",
    ],
    icon: GraduationCap,
    image: "/Img/bserc.webp",
    link: "https://bserc.in/",
  },
  {
    code: "P03",
    name: "Callories",
    category: "Wellness",
    description:
      "A wellness platform built to promote healthy living and nutrition awareness.",
    features: [
      "Informational pages",
      "User engagement tools",
      "Mobile responsive design",
      "Performance optimization",
    ],
    icon: HeartPulse,
    image: "/Img/callories.webp",
    link: "https://callories.com/",
  },
  {
    code: "P04",
    name: "Everace Dry Fruits",
    category: "E-commerce",
    description:
      "An online dry-fruit storefront with secure ordering and customer account management.",
    features: [
      "Product catalog",
      "Shopping cart",
      "Order management",
      "Secure checkout",
      "Customer dashboard",
    ],
    icon: ShoppingCart,
    image: "/Img/everce.webp",
    link: "https://everce.com/",
  },
  {
    code: "P05",
    name: "What N Idea",
    category: "Marketing",
    description:
      "A product marketing platform built to promote products and generate business leads.",
    features: [
      "Product showcase",
      "Marketing campaign support",
      "Lead generation",
      "Contact management",
    ],
    icon: Megaphone,
    image: "/Img/watnidea.webp",
    link: "https://watnidea.com/",
  },
  {
    code: "P06",
    name: "JMV Real Estate",
    category: "Real Estate",
    description:
      "A property portal built to showcase listings, capture leads, and simplify inquiries.",
    features: [
      "Property listings",
      "Search & filters",
      "Lead generation forms",
      "Agent management",
      "Mobile-friendly interface",
    ],
    icon: Home,
    image: "/Img/jvm.webp",
    link: "https://jvmrealestate.com/",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-400 shadow-xs text-left mb-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-black uppercase">
                Recent deploy
              </span>
            </motion.div>
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.08] mt-4 text-(--headingColor)">
              Featured Work
            </h2>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isStaggered = index % 2 !== 0;

            return (
              <motion.a
                key={project.code}
                href={project.link || "#"}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className={`group block ${isStaggered ? "md:mt-16" : ""}`}
              >
                {/* Image Container */}
                <div className="overflow-hidden mb-5 bg-neutral-200 rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={500}
                    className="w-full h-100 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-5 h-5 text-(--headingColor)" />
                    <h3 className="font-semibold text-2xl text-(--headingColor) transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-(--headingColor) opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Description / Features Teaser */}
                <p className="text-sm text-(--headingColor) mt-2 leading-relaxed">
                  {project.category} ·{" "}
                  {project.features.slice(0, 2).join(" · ")}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
