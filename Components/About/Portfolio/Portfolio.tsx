"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import {
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Moon,
  Home,
  Plane,
  Code2,
  Stethoscope,
  Trophy,
  Briefcase,
  Megaphone,
  Smartphone,
  Layers,
  Settings2,
  Globe,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Mail,
  type LucideIcon,
} from "lucide-react";

/*  Data — sourced directly from the studio's project record           */

type Category =
  | "Education"
  | "Wellness"
  | "E-commerce"
  | "Religious E-commerce"
  | "Real Estate"
  | "Travel & Tourism"
  | "Corporate Tech"
  | "Healthcare"
  | "Sports & Fitness"
  | "Recruitment"
  | "Marketing";

interface Project {
  code: string;
  name: string;
  category: Category;
  description: string;
  features: string[];
  icon: LucideIcon;
  image?: string;
  link?: string;
}

interface MobileApp {
  code: string;
  name: string;
  description: string;
  features: string[];
  platforms: string[];
}

interface Expertise {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Industry {
  name: string;
  icon: LucideIcon;
}

const projects: Project[] = [
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
    name: "Islamic Website",
    category: "Religious E-commerce",
    description:
      "A religious content and commerce platform offering Islamic products and educational resources.",
    features: [
      "Product store",
      "Content management",
      "Online ordering",
      "User accounts",
      "Responsive design",
    ],
    icon: Moon,
    image: "/Img/islam.webp",
    link: "https://islamicdukaan.com/",
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
  {
    code: "P07",
    name: "Mercure Travel",
    category: "Travel & Tourism",
    description:
      "A travel services site showcasing tour packages, destinations, and booking inquiries.",
    features: [
      "Tour package management",
      "Destination showcase",
      "Inquiry forms",
      "Customer support integration",
    ],
    icon: Plane,
    image: "/Img/mecure.webp",
    link: "https://mercurevacationclub.com/",
  },
  {
    code: "P08",
    name: "MPIS Software Solutions",
    category: "Corporate Tech",
    description:
      "A corporate site highlighting software development services and technical expertise.",
    features: [
      "Service portfolio",
      "Case studies",
      "Lead generation",
      "Corporate branding",
    ],
    icon: Code2,
    image: "/Img/mpis.webp",
    link: "https://mpis-two.vercel.app/",
  },
  {
    code: "P09",
    name: "Rosewood Travel",
    category: "Travel & Tourism",
    description:
      "A travel management platform built around package promotion and booking handling.",
    features: [
      "Travel packages",
      "Inquiry management",
      "Responsive experience",
      "Content management",
    ],
    icon: Plane,
    image: "/Img/rose.webp",
    link: "https://rosewood-flame.vercel.app/",
  },
  {
    code: "P10",
    name: "Saraswati Web Hospital",
    category: "Healthcare",
    description:
      "A hospital website improving patient communication and information access.",
    features: [
      "Doctor information",
      "Appointment requests",
      "Healthcare services",
      "Contact management",
    ],
    icon: Stethoscope,
    link: "",
  },
  {
    code: "P11",
    name: "Smash 2 Play",
    category: "Sports & Fitness",
    description:
      "A sports activity platform handling events, registrations, and memberships.",
    features: [
      "Activity listings",
      "Event registration",
      "Membership management",
      "User dashboard",
    ],
    icon: Trophy,
    image: "/Img/smash.webp",
    link: "https://smash2play.com/",
  },
  {
    code: "P12",
    name: "Stack Solution Job Portal",
    category: "Recruitment",
    description:
      "A recruitment platform connecting employers and candidates through a streamlined process.",
    features: [
      "Job listings",
      "Candidate profiles",
      "Employer dashboard",
      "Application tracking",
    ],
    icon: Briefcase,
    link: "https://stack-solution-frontend.vercel.app/",
  },
  {
    code: "P13",
    name: "UPMI Educational Institute",
    category: "Education",
    description:
      "An institutional site managing admissions, courses, and student engagement.",
    features: [
      "Admission inquiry",
      "Course showcase",
      "Faculty information",
      "Student resources",
    ],
    icon: GraduationCap,
    link: "",
  },
  {
    code: "P14",
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
];

const mobileApps: MobileApp[] = [
  {
    code: "A01",
    name: "BSERC Mobile App",
    description:
      "A mobile learning companion giving students and educators access to courses on the move.",
    features: [
      "Course access",
      "Student dashboard",
      "Notifications",
      "Progress tracking",
      "User authentication",
    ],
    platforms: ["Android", "iOS"],
  },
  {
    code: "A02",
    name: "Saraswati Hospital App",
    description:
      "A patient-facing app simplifying appointment booking and healthcare communication.",
    features: [
      "Appointment booking",
      "Patient information",
      "Healthcare updates",
      "Notification system",
      "Secure login",
    ],
    platforms: ["Android", "iOS"],
  },
];

const expertise: Expertise[] = [
  {
    title: "Website Development",
    description:
      "Corporate sites, business portals, educational platforms, and custom web applications.",
    icon: Globe,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Online stores, payment integration, inventory, and customer engagement systems.",
    icon: ShoppingBag,
  },
  {
    title: "Mobile App Development",
    description:
      "Android and iOS applications focused on performance, usability, and scale.",
    icon: Smartphone,
  },
  {
    title: "CRM Development",
    description:
      "Custom CRMs for lead management, sales automation, and reporting.",
    icon: Layers,
  },
  {
    title: "Custom Business Systems",
    description:
      "Tailor-made software that automates operations and improves efficiency.",
    icon: Settings2,
  },
];

const industries: Industry[] = [
  { name: "Education", icon: GraduationCap },
  { name: "Healthcare", icon: Stethoscope },
  { name: "Real Estate", icon: Home },
  { name: "Travel & Tourism", icon: Plane },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Recruitment", icon: Briefcase },
  { name: "Sports & Fitness", icon: Trophy },
  { name: "Marketing & Advertising", icon: Megaphone },
  { name: "Corporate Businesses", icon: Code2 },
];

const filters: ("All" | "Project List" | Category)[] = [
  "All",
  "Project List",
  "Education",
  "Healthcare",
  "E-commerce",
  "Religious E-commerce",
  "Real Estate",
  "Travel & Tourism",
  "Corporate Tech",
  "Wellness",
  "Sports & Fitness",
  "Recruitment",
  "Marketing",
];

/*  Motion variants */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const heroWord: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function FigureLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55 }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-400 shadow-xs mb-2"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
      <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-black uppercase">
        {children}
      </span>
    </motion.div>
  );
}

/*  Main component */

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<
    "All" | "Project List" | Category
  >("All");

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All" || activeFilter === "Project List"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  const totalBuilds = projects.length + mobileApps.length;

  return (
    <div className="font-body bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-32 sm:pt-40">
          {/* Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white/50"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#BFCA16] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#BFCA16]" />
              </span>
              <span className="text-white/70">Available for new projects</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Est. 2020</span>
              <span className="h-3 w-px bg-white/20" />
              <span>Remote / Worldwide</span>
            </div>
          </motion.div>

          {/* Main Card */}
          <div className="relative rounded-3xl border border-white/15 bg-linear-to-br from-white/3 to-transparent p-8 backdrop-blur-sm">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 h-6 w-6 border-t border-l border-[#BFCA16]/50 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 h-6 w-6 border-t border-r border-[#BFCA16]/50 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-[#BFCA16]/50 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-[#BFCA16]/50 rounded-br-3xl" />

            <FigureLabel>Studio Overview</FigureLabel>

            {/* Headline */}
            <motion.h1
              initial="hidden"
              animate="show"
              variants={stagger}
              className="font-display mt-5 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
            >
              {[
                { word: "Building", accent: false },
                { word: "digital", accent: false },
                { word: "experiences", accent: false },
                { word: "that", accent: false },
                { word: "drive", accent: false },
                { word: "business", accent: false },
                { word: "growth.", accent: true },
              ].map((item, i) => (
                <motion.span
                  key={i}
                  variants={heroWord}
                  className={`mr-3 inline-block ${
                    item.accent ? "text-[#BFCA16] italic" : "text-white"
                  }`}
                >
                  {item.word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 max-w-3xl text-lg font-medium leading-relaxed text-white/70 sm:text-xl"
            >
              We design and build websites, mobile apps, CRMs, e-commerce
              platforms, and custom business systems for organizations that want
              to streamline operations, engage customers, and scale.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:gap-6"
            >
              {[
                {
                  value: `${totalBuilds}`,
                  label: "Builds shipped",
                  hint: "and counting",
                },
                {
                  value: `${industries.length}`,
                  label: "Industries served",
                  hint: "global reach",
                },
                {
                  value: `${expertise.length}`,
                  label: "Core disciplines",
                  hint: "in-house",
                },
              ].map((stat, idx) => (
                <div key={stat.label} className="group relative">
                  <div className="flex items-baseline gap-2">
                    <div className="font-display text-4xl font-bold text-[#BFCA16] tabular-nums sm:text-5xl">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-white/30">
                      0{idx + 1}
                    </div>
                  </div>
                  <div className="mt-2 font-mono text-xs font-bold uppercase tracking-wide text-white/70">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-xs text-white/40">{stat.hint}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Service Marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8 overflow-hidden"
          >
            <div className="flex animate-marquee whitespace-nowrap">
              {[
                "Web Development",
                "Mobile Apps",
                "CRM Systems",
                "E-commerce",
                "Custom Software",
                "UI/UX Design",
                "Web Development",
                "Mobile Apps",
                "CRM Systems",
                "E-commerce",
                "Custom Software",
                "UI/UX Design",
              ].map((service, i) => (
                <span
                  key={i}
                  className="mx-6 flex items-center gap-6 font-mono text-sm font-bold uppercase tracking-[0.2em] text-white/40"
                >
                  {service}
                  <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16]" />
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </section>

      {/* Expertise */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <FigureLabel>Capabilities</FigureLabel>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
              Our <span className="text-[#BFCA16] italic">expertise</span>
            </h2>
          </div>
          <p className="max-w-md text-sm font-medium leading-relaxed text-white/60">
            A focused set of disciplines we&apos;ve refined over years of
            building products for startups, agencies, and enterprise teams.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {expertise.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = index === 0;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-zinc-900/60 to-zinc-950/60 p-7 backdrop-blur-sm transition-all duration-300 hover:border-[#BFCA16]/40  ${
                  isFeatured ? "lg:col-span-2" : ""
                }`}
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 h-4 w-4 border-t border-l border-[#BFCA16]/0 rounded-tl-2xl transition-colors duration-300 group-hover:border-[#BFCA16]/50" />
                <div className="absolute top-0 right-0 h-4 w-4 border-t border-r border-[#BFCA16]/0 rounded-tr-2xl transition-colors duration-300 group-hover:border-[#BFCA16]/50" />
                <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-[#BFCA16]/0 rounded-bl-2xl transition-colors duration-300 group-hover:border-[#BFCA16]/50" />
                <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-[#BFCA16]/0 rounded-br-2xl transition-colors duration-300 group-hover:border-[#BFCA16]/50" />

                {/* Background glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#BFCA16]/0 blur-3xl transition-all duration-500 group-hover:bg-[#BFCA16]/10" />

                {/* Header: Index + Icon */}
                <div className="relative flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#BFCA16]/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px w-6 bg-linear-to-r from-[#BFCA16]/40 to-transparent" />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-[#BFCA16]/10 group-hover:ring-[#BFCA16]/30">
                    <Icon
                      className="h-5 w-5 text-white/60 transition-colors group-hover:text-[#BFCA16]"
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`font-display relative mt-6 font-bold leading-tight text-white transition-colors group-hover:text-[#BFCA16] ${
                    isFeatured ? "text-2xl sm:text-3xl" : "text-xl"
                  }`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className={`relative mt-3 leading-relaxed text-white/60 ${
                    isFeatured ? "text-base sm:text-lg" : "text-sm"
                  }`}
                >
                  {item.description}
                </p>

                {/* Footer indicator */}
                <div className="relative mt-auto pt-5">
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                      Core discipline
                    </span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 transition-all duration-300 group-hover:bg-[#BFCA16]">
                      <ArrowUpRight className="h-3.5 w-3.5 text-white/50 transition-colors group-hover:text-black" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Project index */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-8 flex flex-col gap-6 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <FigureLabel>Project Index</FigureLabel>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Website development portfolio
              </h2>
            </div>
            <p className="max-w-sm text-base font-medium text-white/70">
              {projects.length} builds across education, healthcare, retail,
              real estate, travel, and more — filter by sector.
            </p>
          </motion.div>

          {/* Filter bar */}
          <div className="-mx-6 mb-10 flex gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`shrink-0 rounded-full border px-4 py-2 font-mono text-sm font-bold uppercase tracking-wide transition-colors ${
                  activeFilter === f
                    ? "border-white bg-white text-black"
                    : "border-white/20 text-white/60 hover:border-[#BFCA16] hover:text-[#BFCA16]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Cards */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => {
                const Icon = project.icon;

                if (activeFilter === "Project List") {
                  return (
                    <motion.article
                      key={project.code}
                      layout
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 20 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        delay: index * 0.05,
                      }}
                      whileHover={{ y: -6 }}
                      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-zinc-900/60 to-zinc-950/60 p-7 backdrop-blur-sm transition-all duration-300 hover:border-[#BFCA16]/40"
                    >
                      {/* Header: Index + Icon */}
                      <div className="relative flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#BFCA16]/70">
                            {project.code}
                          </span>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl">
                          <Icon
                            className="h-5 w-5 text-white/60 transition-colors group-hover:text-[#BFCA16]"
                            strokeWidth={1.8}
                          />
                        </div>
                      </div>

                      {/* Title + Category */}
                      <div className="relative mt-6">
                        <h3 className="font-display text-2xl font-bold leading-tight text-white transition-colors group-hover:text-[#BFCA16]">
                          {project.name}
                        </h3>
                        <span className="mt-2 inline-block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                          {project.category}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="relative mt-4 text-sm leading-relaxed text-white/60">
                        {project.description}
                      </p>

                      {/* Features as pills */}
                      <div className="relative mt-6 flex flex-wrap gap-2">
                        {project.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 transition-colors group-hover:border-[#BFCA16]/20 group-hover:text-white/90"
                          >
                            <CheckCircle2 className="h-3 w-3 text-[#BFCA16]/60" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Bottom divider with arrow */}
                      <div className="relative mt-auto pt-5">
                        <div className="flex items-center justify-between border-t border-white/10 pt-4">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                            {project.features.length}+ features
                          </span>
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-all duration-300 group-hover:bg-[#BFCA16] group-hover:text-black">
                            <ArrowUpRight className="h-4 w-4 text-white/50 transition-colors group-hover:text-black" />
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  );
                }

                return (
                  <motion.article
                    key={project.code}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      delay: index * 0.05,
                    }}
                    whileHover={{ y: -6 }}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 transition-all duration-300 hover:border-[#BFCA16]/40"
                  >
                    {/* Image Section with overlay */}
                    <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-800">
                      <Image
                        src={project.image || "/Img/about_peltown.webp"}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                      <div className="absolute inset-0 bg-linear-to-br from-[#BFCA16]/0 via-transparent to-transparent" />

                      {/* Top badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                        <div className="flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-md">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#BFCA16]" />
                          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                            {project.category}
                          </span>
                        </div>
                        <div className="rounded-full bg-black/50 p-2 backdrop-blur-md transition-all duration-300 group-hover:bg-[#BFCA16]">
                          <ArrowUpRight className="h-3.5 w-3.5 text-white transition-colors group-hover:text-black" />
                        </div>
                      </div>

                      {/* Bottom content overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="mt-1 font-display text-xl font-bold leading-tight text-white">
                          {project.name}
                        </h3>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-sm leading-relaxed text-white/60">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-[11px] font-medium text-white/70 transition-colors group-hover:bg-[#BFCA16]/10 group-hover:text-white/90"
                          >
                            <CheckCircle2 className="h-3 w-3 text-[#BFCA16]/60" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Footer with visit link */}
                      <div className="mt-auto pt-4">
                        <a
                          href={project.link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-[#BFCA16]"
                        >
                          <span>Visit Project</span>
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 transition-all group-hover/link:bg-[#BFCA16] group-hover/link:text-black">
                            <ArrowUpRight className="h-3 w-3" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Mobile apps */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-10 border-b border-white/10 pb-4"
        >
          <FigureLabel>Native Builds</FigureLabel>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Mobile application portfolio
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {mobileApps.map((app) => (
            <motion.div
              key={app.code}
              variants={fadeUp}
              className="relative rounded-3xl border border-white/10 bg-zinc-900/40 p-8 text-white"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-white/40">
                  {app.code}
                </span>
                <Smartphone
                  className="h-6 w-6 text-[#BFCA16]"
                  strokeWidth={2}
                />
              </div>
              <h3 className="font-display mt-5 text-2xl font-bold">
                {app.name}
              </h3>
              <p className="mt-3 text-base font-medium leading-relaxed text-white/70">
                {app.description}
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {app.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm font-medium text-white/75"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#BFCA16]/80" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex gap-3 border-t border-white/15 pt-5">
                {app.platforms.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-white/20 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wide text-white/70"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Industries */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <FigureLabel>Coverage</FigureLabel>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
                Industries we{" "}
                <span className="text-[#BFCA16] italic">serve</span>
              </h2>
            </div>
            <p className="max-w-md text-sm font-medium leading-relaxed text-white/60">
              From early-stage startups to established enterprises, we&apos;ve
              delivered solutions across diverse sectors.
            </p>
          </motion.div>

          {/* Industries Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.name}
                  variants={fadeUp}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-zinc-900/60 to-zinc-950/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#BFCA16]/40"
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 h-3 w-3 border-t border-l border-[#BFCA16]/0 rounded-tl-2xl transition-colors duration-300 group-hover:border-[#BFCA16]/50" />
                  <div className="absolute top-0 right-0 h-3 w-3 border-t border-r border-[#BFCA16]/0 rounded-tr-2xl transition-colors duration-300 group-hover:border-[#BFCA16]/50" />
                  <div className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-[#BFCA16]/0 rounded-bl-2xl transition-colors duration-300 group-hover:border-[#BFCA16]/50" />
                  <div className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-[#BFCA16]/0 rounded-br-2xl transition-colors duration-300 group-hover:border-[#BFCA16]/50" />

                  {/* Background glow */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#BFCA16]/0 blur-2xl transition-all duration-500 group-hover:bg-[#BFCA16]/10" />

                  {/* Icon container */}
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-[#BFCA16]/10 group-hover:ring-[#BFCA16]/30">
                    <Icon
                      className="h-4.5 w-4.5 text-white/60 transition-colors group-hover:text-[#BFCA16]"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Industry name */}
                  <span className="relative mt-3 text-sm font-bold leading-snug text-white transition-colors group-hover:text-[#BFCA16]">
                    {ind.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA   */}
      <section
        id="contact"
        className="relative overflow-hidden bg-black py-24 text-white"
      >
        <div className="relative text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="relative p-10 sm:p-14"
          >
            <FigureLabel>Next Build</FigureLabel>
            <h2 className="font-display mt-4 text-4xl lg:text-6xl font-bold tracking-tight">
              Let&apos;s build something amazing
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-xl font-medium text-white/70">
              Whether you&apos;re launching a startup, modernizing a business,
              or building a custom platform, we&apos;d like to hear about it.
            </p>
            <a
              href="mailto:hello@peltownstudio.com"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#BFCA16] px-8 py-4 text-base font-bold text-black transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-5 w-5" />
              Get in touch
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
