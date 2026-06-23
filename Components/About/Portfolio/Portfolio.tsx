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
        <div className="blueprint-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-40">
          <div className="relative rounded-3xl border border-white/15 p-8 sm:p-12">
            <FigureLabel>Studio Overview</FigureLabel>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={stagger}
              className="font-display mt-5 max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-7xl"
            >
              {[
                "Building",
                "digital",
                "experiences",
                "that",
                "drive",
                "business",
                "growth.",
              ].map((word, i) => (
                <motion.span
                  key={i}
                  variants={heroWord}
                  className="mr-3 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 max-w-4xl text-lg font-medium text-white/70 sm:text-xl"
            >
              We design and build websites, mobile apps, CRMs, e-commerce
              platforms, and custom business systems for organizations that want
              to streamline operations, engage customers, and scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="mt-10 grid grid-cols-3 gap-6 border-t border-white/15 pt-8"
            >
              {[
                { value: `${totalBuilds}`, label: "Builds shipped" },
                { value: `${industries.length}`, label: "Industries served" },
                { value: `${expertise.length}`, label: "Core disciplines" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-4xl font-bold text-[#BFCA16]">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-mono text-xs font-bold uppercase tracking-wide text-white/55">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-10 flex items-end justify-between gap-4 border-b border-white/10 pb-4"
        >
          <div>
            <FigureLabel>Capabilities</FigureLabel>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Our expertise
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {expertise.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group rounded-3xl bg-zinc-900/40 p-8 border border-zinc-800/80 hover:border-[#BFCA16] hover:shadow-lg transition-all duration-300"
              >
                <Icon className="h-6 w-6 text-[#BFCA16]" strokeWidth={2} />
                <h3 className="font-display mt-5 text-lg font-bold">
                  {item.title}
                </h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-white/70">
                  {item.description}
                </p>
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
              {visibleProjects.map((project) => {
                const Icon = project.icon;

                if (activeFilter === "Project List") {
                  return (
                    <motion.article
                      key={project.code}
                      layout
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 20 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                      whileHover={{ y: -4 }}
                      className="group relative flex flex-col rounded-3xl border border-white/10 bg-zinc-900/40 p-8 transition-colors hover:border-[#BFCA16]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold tracking-wide text-white/40">
                          {project.code}
                        </span>
                        <Icon
                          className="h-5 w-5 text-white/50 transition-colors group-hover:text-[#BFCA16]"
                          strokeWidth={2}
                        />
                      </div>

                      <h3 className="font-display mt-5 text-xl font-bold leading-snug">
                        {project.name}
                      </h3>
                      <span className="mt-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#BFCA16]">
                        {project.category}
                      </span>
                      <p className="mt-4 text-base font-medium leading-relaxed text-white/70">
                        {project.description}
                      </p>

                      <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                        {project.features.slice(0, 4).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm font-medium text-white/70"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-white/45" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.article>
                  );
                }

                return (
                  <motion.article
                    key={project.code}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    whileHover={{ y: -4 }}
                    className="group relative flex flex-col rounded-3xl border border-white/10 bg-zinc-900/40 p-2.5 transition-colors hover:border-[#BFCA16]"
                  >
                    {/* Image Section */}
                    <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-zinc-800">
                      <Image
                        src={project.image || "/Img/web.png"}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Top Left Badge: Category */}
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide text-white border border-white/10 shadow-sm">
                        {project.category}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-3 pt-4 pb-2 flex flex-col grow">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-lg font-bold text-white leading-tight truncate transition-colors group-hover:text-[#BFCA16]">
                            {project.name}
                          </h3>
                          <p className="mt-1 text-sm text-white/70 truncate font-medium">
                            {project.description}
                          </p>
                        </div>
                        {/* Live Link Button */}
                        <a
                          href={project.link || "#"}
                          className="shrink-0 inline-flex items-center gap-1 text-[#BFCA16] font-bold text-sm transition-transform hover:scale-105"
                        >
                          Visit
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-4 overflow-hidden text-[13px] font-medium text-white/60">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-1.5 shrink-0"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-white/40 transition-colors group-hover:text-[#BFCA16]" />
                            <span className="truncate max-w-30">
                              {feature}
                            </span>
                          </div>
                        ))}
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

      {/* Industries  */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-10 border-b border-white/10 pb-4"
          >
            <FigureLabel>Coverage</FigureLabel>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Industries we serve
            </h2>
          </motion.div>

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
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/40 px-5 py-4 transition-colors hover:border-[#BFCA16]"
                >
                  <Icon
                    className="h-5 w-5 flex-none text-white/60"
                    strokeWidth={2}
                  />
                  <span className="text-base font-bold leading-snug">
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
