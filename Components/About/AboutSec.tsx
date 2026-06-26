"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Workflow,
  Bot,
  Sparkles,
  ShoppingCart,
  Database,
  Users,
  Megaphone,
  HeartPulse,
  GraduationCap,
  Building2,
  Plane,
  Factory,
  Briefcase,
  Search,
  ListChecks,
  PenTool,
  Hammer,
  ShieldCheck,
  Rocket,
  Headphones,
  Target,
  Cpu,
  MessageSquare,
  Layers,
  Wrench,
  HelpCircle,
  LifeBuoy,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  CalendarClock,
  MapPin,
  type LucideIcon,
} from "lucide-react";

/* Content */

type IconItem = { icon: LucideIcon; title: string; desc: string };

const capabilities: IconItem[] = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Business applications designed around your workflows.",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "High-performance websites and web applications.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Android and iOS applications for modern businesses.",
  },
  {
    icon: Cloud,
    title: "SaaS Product Development",
    desc: "Scalable software products and platforms.",
  },
  {
    icon: Database,
    title: "ERP & CRM Solutions",
    desc: "Business management and customer relationship systems.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    desc: "Reducing manual work through intelligent automation.",
  },
  {
    icon: Sparkles,
    title: "AI & Emerging Technologies",
    desc: "Helping businesses leverage modern technologies.",
  },
];

const beliefs: string[] = [
  "Generate more revenue",
  "Reduce operational costs",
  "Improve experiences",
  "Increase productivity",
  "Automate repetitive tasks",
  "Scale efficiently",
];

const industries: IconItem[] = [
  {
    icon: Cloud,
    title: "Technology & SaaS",
    desc: "Scalable software products and platforms.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Retail",
    desc: "Online stores, marketplaces, POS, ERP and inventory.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Patient management, booking and healthcare software.",
  },
  {
    icon: GraduationCap,
    title: "Education & EdTech",
    desc: "Learning management systems and platforms.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "CRM, property management and real-estate technology.",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    desc: "Booking systems, travel portals and engagement tools.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "ERP systems and operational automation.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    desc: "Business management and workflow automation.",
  },
];

const services: IconItem[] = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Professional websites that convert visitors into customers.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    desc: "Online stores built for growth and scalability.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Custom Android and iOS applications.",
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    desc: "Cloud-based software products and subscription platforms.",
  },
  {
    icon: Database,
    title: "ERP Development",
    desc: "Business management systems for growing organisations.",
  },
  {
    icon: Users,
    title: "CRM Development",
    desc: "Customer relationship and sales management platforms.",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    desc: "Automation, AI assistants and intelligent systems.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "SEO, PPC, social media and lead generation.",
  },
];

const whyChoose: IconItem[] = [
  {
    icon: Target,
    title: "Business-Focused Development",
    desc: "We build solutions that support business objectives.",
  },
  {
    icon: Cpu,
    title: "Modern Technology Stack",
    desc: "Using scalable and future-ready technologies.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    desc: "Clear project planning and regular updates.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Built for future growth.",
  },
  {
    icon: Headphones,
    title: "Reliable Support",
    desc: "Long-term maintenance and support services.",
  },
  {
    icon: Wrench,
    title: "Custom Development Expertise",
    desc: "Solutions tailored to unique business requirements.",
  },
];

const processSteps: {
  icon: LucideIcon;
  step: string;
  title: string;
  desc: string;
}[] = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    desc: "Understanding your business goals and requirements.",
  },
  {
    icon: ListChecks,
    step: "02",
    title: "Planning",
    desc: "Creating a roadmap for successful execution.",
  },
  {
    icon: PenTool,
    step: "03",
    title: "Design",
    desc: "Crafting user-friendly experiences.",
  },
  {
    icon: Hammer,
    step: "04",
    title: "Development",
    desc: "Building scalable and secure solutions.",
  },
  {
    icon: ShieldCheck,
    step: "05",
    title: "Testing",
    desc: "Ensuring reliability and quality.",
  },
  {
    icon: Rocket,
    step: "06",
    title: "Deployment",
    desc: "Launching the solution successfully.",
  },
  {
    icon: Headphones,
    step: "07",
    title: "Support",
    desc: "Continuous improvements and maintenance.",
  },
];

const locations: string[] = [
  "Delhi",
  "Noida",
  "Greater Noida",
  "Gurgaon",
  "Gurugram",
  "Faridabad",
  "Ghaziabad",
  "India",
  "International Markets",
];

const stats: { value: string; label: string; desc: string }[] = [
  {
    value: "100%",
    label: "Custom Development",
    desc: "No one-size-fits-all solutions.",
  },
  {
    value: "E2E",
    label: "End-To-End Services",
    desc: "From idea to deployment and support.",
  },
  {
    value: "8+",
    label: "Industries Served",
    desc: "Solutions built for diverse business sectors.",
  },
  {
    value: "∞",
    label: "Scalable Architecture",
    desc: "Designed for long-term growth.",
  },
];

/* Shared bits */

function Reveal({
  children,
  delay = 0,
  className = "",
  y = 22,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? undefined : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionTag({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55 }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-400 shadow-xs mb-5"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#BFCA16] animate-pulse" />
      <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-black uppercase">
        {label}
      </span>
    </motion.div>
  );
}

/* Sections */

function Hero() {
  const reduce = useReducedMotion();
  const headline = [
    "Building Software",
    "That Solves Real",
    "Business Problems",
  ];

  return (
    <section className="relative overflow-hidden bg-black text-white pt-32 pb-20 px-6 md:px-12">
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-16 items-center">
        <div>
          <SectionTag label="About Peltown" />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] mb-6 text-white">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-0.5">
                <motion.span
                  className="block"
                  initial={reduce ? undefined : { y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-base md:text-lg text-zinc-400 max-w-md mb-9 leading-relaxed"
          >
            We help startups, SMEs, and enterprises across Delhi NCR build
            websites, apps, SaaS platforms, ERPs, CRMs, and automation systems
            that create measurable business growth.
          </motion.p>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.68 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-[#BFCA16] text-zinc-950 font-bold px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-zinc-800 text-zinc-300 px-6 py-3 rounded-full bg-zinc-900/40 hover:border-zinc-500 hover:text-white hover:bg-zinc-900/85 transition-colors duration-300 shadow-xs"
            >
              <CalendarClock className="w-4 h-4 text-[#BFCA16]" />
              Schedule Consultation
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <Image
            src="/Img/about_peltown.webp"
            alt="About Peltown"
            width={760}
            height={400}
            priority
            className="w-full h-auto rounded-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[0.85fr_1.15fr] gap-12">
        <Reveal>
          <SectionTag label="Our Story" />
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white">
            Every business problem has a technology solution.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="space-y-5 text-zinc-400 leading-relaxed">
          <p>
            Technology should simplify business, not complicate it. Too many
            companies invest in software that&rsquo;s expensive, hard to use,
            and disconnected from what they&rsquo;re actually trying to achieve.
          </p>
          <p>
            Peltown Studio exists to close that gap between business
            requirements and practical technology. We work with businesses
            across Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad, and
            throughout India, building digital systems that improve operations,
            increase efficiency, and open new growth opportunities.
          </p>
          <p className="font-medium text-white">
            From a startup&rsquo;s first product to an established company
            digitising its operations, the mission stays the same: build
            technology that creates measurable business value.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Capabilities() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionTag label="Who We Are" />
        <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl mb-12 text-white">
          A technology partner for growing businesses.
        </h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {capabilities.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={
                reduce
                  ? {}
                  : {
                      hidden: { opacity: 0, y: 16 },
                      show: { opacity: 1, y: 0 },
                    }
              }
              className="group relative bg-zinc-900/40 border border-zinc-800/80 hover:border-[#BFCA16] hover:shadow-lg transition-all duration-300 p-6 rounded-2xl"
            >
              <Icon className="w-6 h-6 text-[#BFCA16] mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-white mb-1.5 leading-snug">
                {title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Beliefs() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionTag label="What We Believe" />
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6 text-white">
              Software should do more than look good.
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Every solution we ship is judged against one question: does this
              create real business value? If a technology investment
              doesn&rsquo;t, it isn&rsquo;t the right solution.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="grid sm:grid-cols-2 gap-4">
            {beliefs.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 bg-zinc-950 border border-zinc-800/80 rounded-2xl p-4 shadow-2xs hover:border-[#BFCA16] transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[#BFCA16] shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed text-zinc-300">
                  {b}
                </span>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-8 hover:border-[#BFCA16] transition-colors shadow-2xs">
            <h3 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#BFCA16] mb-3">
              Mission
            </h3>
            <p className="text-lg leading-relaxed text-white">
              Empower businesses with scalable, reliable, and innovative
              technology that improves efficiency, enhances customer experience,
              and unlocks growth — built for long-term value, not short-term
              projects.
            </p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-8 hover:border-[#BFCA16] transition-colors shadow-2xs"
          >
            <h3 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#BFCA16] mb-3">
              Vision
            </h3>
            <p className="text-lg leading-relaxed text-white">
              To be a software development company recognised for building
              impactful digital products — solving real problems and
              contributing to business success worldwide.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Differentiators() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionTag label="What Makes Peltown Different" />
        <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl mb-14 text-white">
          We think like business owners, not just developers.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Reveal className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-8 hover:border-[#BFCA16] transition-all duration-300 shadow-2xs">
            <HelpCircle
              className="w-6 h-6 text-[#BFCA16] mb-4"
              strokeWidth={1.5}
            />
            <h3 className="font-semibold text-lg text-white mb-3">
              Business-first, before code
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Many agencies focus on delivering code. We focus on solving
              business problems — before a single line is written, we ask what problem we are solving, how it will improve operations, increase revenue, reduce costs, and scale in the future.
            </p>
          </Reveal>
          <Reveal
            delay={0.12}
            className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-8 hover:border-[#BFCA16] transition-all duration-300 shadow-2xs"
          >
            <Layers className="w-6 h-6 text-[#BFCA16] mb-4" strokeWidth={1.5} />
            <h3 className="font-semibold text-lg text-white mb-3">
              Custom solutions, not templates
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Every business is unique, so we build for your requirements
              instead of forcing your business into generic software — whether
              that&rsquo;s a startup MVP, an enterprise ERP, a CRM platform, a
              booking system, an e-commerce store, or a SaaS product.
            </p>
          </Reveal>
          <Reveal
            delay={0.24}
            className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-8 hover:border-[#BFCA16] transition-all duration-300 shadow-2xs"
          >
            <LifeBuoy
              className="w-6 h-6 text-[#BFCA16] mb-4"
              strokeWidth={1.5}
            />
            <h3 className="font-semibold text-lg text-white mb-3">
              A long-term partnership
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              We don&rsquo;t disappear after deployment. Our team stays on for technical support, system maintenance, feature enhancements, performance optimisation, security updates, and scalability planning.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionTag label="Industries We Serve" />
        <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl mb-12 text-white">
          Built for the way your industry actually works.
        </h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={
                reduce
                  ? {}
                  : {
                      hidden: { opacity: 0, y: 16 },
                      show: { opacity: 1, y: 0 },
                    }
              }
              className="group relative bg-zinc-950 border border-zinc-800/80 hover:border-[#BFCA16] rounded-2xl transition-all duration-300 p-6 hover:shadow-md"
            >
              <Icon className="w-5 h-5 text-[#BFCA16] mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold mb-1.5 leading-snug text-[15px] text-white">
                {title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionTag label="Our Core Services" />
        <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl mb-12 text-white">
          What we build, end to end.
        </h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } },
          }}
          className="border-t border-zinc-800"
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={
                reduce
                  ? {}
                  : {
                      hidden: { opacity: 0, x: -12 },
                      show: { opacity: 1, x: 0 },
                    }
              }
              className="group flex items-center gap-5 py-5 border-b border-zinc-800 hover:bg-zinc-900/40 transition-colors px-4 rounded-xl -mx-4"
            >
              <Icon
                className="w-5 h-5 text-[#BFCA16] shrink-0"
                strokeWidth={1.5}
              />
              <div className="flex-1 grid sm:grid-cols-[220px_1fr] gap-2 sm:gap-6">
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-[#BFCA16] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionTag label="Why Businesses Choose Us" />
        <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl mb-12 text-white">
          A readout of what you can expect.
        </h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyChoose.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={
                reduce
                  ? {}
                  : {
                      hidden: { opacity: 0, y: 16 },
                      show: { opacity: 1, y: 0 },
                    }
              }
              className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 hover:border-[#BFCA16] transition-all duration-300 shadow-2xs hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className="w-5 h-5 text-[#BFCA16]" strokeWidth={1.5} />
                <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-semibold text-white mb-1.5">{title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <SectionTag label="Our Process" />
        <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl mb-16 text-white">
          From idea to successful launch.
        </h2>
        <div ref={ref} className="relative">
          <div className="absolute left-4.75 top-2 bottom-2 w-px bg-zinc-800" />
          <motion.div
            className="absolute left-4.75 top-2 bottom-2 w-px bg-[#BFCA16] origin-top"
            style={reduce ? undefined : { scaleY: lineScale }}
          />
          <div className="space-y-10">
            {processSteps.map(({ icon: Icon, step, title, desc }, i) => (
              <Reveal
                key={step}
                delay={i * 0.04}
                className="relative flex gap-6 pl-0"
              >
                <div className="relative z-10 w-10 h-10 rounded-full bg-zinc-950 border-2 border-[#BFCA16] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#BFCA16]" strokeWidth={1.75} />
                </div>
                <div className="pt-1">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="font-mono text-[11px] text-[#BFCA16] tracking-[0.15em]">
                      {step}
                    </span>
                    <h3 className="font-semibold text-lg text-white">
                      {title}
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                    {desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Presence() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionTag label="Local Presence" />
        <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl mb-6 text-white">
          A software development company in Delhi NCR.
        </h2>
        <Reveal className="text-zinc-400 leading-relaxed max-w-2xl mb-10">
          <p>
            Whether you need a business website, mobile application, SaaS
            platform, ERP solution, or CRM software, our team is ready to help
            turn your ideas into successful digital products.
          </p>
        </Reveal>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.04 } },
          }}
          className="flex flex-wrap gap-3 mb-20"
        >
          {locations.map((loc) => (
            <motion.span
              key={loc}
              variants={
                reduce
                  ? {}
                  : { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }
              }
              className="inline-flex items-center gap-1.5 bg-zinc-950 border border-zinc-800/80 rounded-full px-4 py-2 text-sm text-zinc-300 shadow-3xs hover:border-[#BFCA16] transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#BFCA16]" />
              {loc}
            </motion.span>
          ))}
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-7 hover:border-[#BFCA16] transition-all shadow-2xs"
            >
              <div className="text-4xl font-bold text-[#BFCA16] mb-2">
                {s.value}
              </div>
              <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-white mb-2">
                {s.label}
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const reduce = useReducedMotion();
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black text-white py-28 px-6 md:px-12"
    >
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.span
          initial={reduce ? undefined : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-medium inline-block text-sm tracking-[0.25em] uppercase text-[#BFCA16] mb-6"
        >
          Let&rsquo;s Build
        </motion.span>
        <motion.h2
          initial={reduce ? undefined : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl md:text-5xl font-semibold leading-tight mb-6 text-white"
        >
          Looking for a technology partner, not just a vendor?
        </motion.h2>
        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Whether you&rsquo;re launching a startup, digitising operations,
          building a SaaS product, or scaling an existing business — let&rsquo;s
          build something that creates real business value.
        </motion.p>
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="/about/contact"
            className="group inline-flex items-center gap-2 bg-[#BFCA16] text-zinc-950 font-bold px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/about/contact"
            className="inline-flex items-center gap-2 border border-zinc-800 text-zinc-300 px-6 py-3 rounded-full bg-zinc-900/40 hover:border-zinc-500 hover:text-white hover:bg-zinc-900/85 transition-colors duration-300 shadow-xs"
          >
            <CalendarClock className="w-4 h-4 text-[#BFCA16]" />
            Schedule Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* Page */

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Hero />
      <Story />
      <Capabilities />
      <Beliefs />
      <Differentiators />
      <Industries />
      <Services />
      <WhyChoose />
      <Process />
      <Presence />
      <FinalCTA />
    </main>
  );
}
