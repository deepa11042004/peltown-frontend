/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Smartphone,
  Search,
  Sparkles,
  Zap,
  ShieldCheck,
  ShoppingBag,
  Users,
  Layers,
  Gauge,
  Building2,
  CheckCircle2,
  XCircle,
  Target,
  Server,
  Globe,
} from "lucide-react";
import IndustrySec, { IndustrySecProps } from "./IndustrySec";
import ProcessSec, { ProcessSecProps } from "./ProcessSec";
import LogoBanner, { LogoBannerProps } from "../LogoBanner";
import BannerDetail, { BannerDetailProps } from "../BannerDetail";
import ServicesHero from "../ServiceHero";
import ServiceFeature from "../ServiceFeature";

// --- Types ---
export interface HeroConfig {
  tagline?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  ctaText?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface DefinitionConfig {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  desc?: React.ReactNode;
}

export interface ItemConfig {
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
}

export interface AudienceConfig {
  title?: React.ReactNode;
  desc?: React.ReactNode;
  list?: ItemConfig[];
}

export interface FeaturesConfig {
  title?: React.ReactNode;
  desc?: React.ReactNode;
  list?: ItemConfig[];
}

export interface AIAdvantageConfig {
  tagline?: string;
  title?: React.ReactNode;
  desc?: React.ReactNode;
}

export interface TechStackConfig {
  title?: React.ReactNode;
  desc?: React.ReactNode;
  list?: ItemConfig[];
}

export interface TabConfig {
  name: string;
  title: string;
  content: React.ReactNode;
}

export interface DeepDiveConfig {
  title?: React.ReactNode;
  tabs?: TabConfig[];
}

export interface DominanceCardConfig {
  title: string;
  desc: React.ReactNode;
  icon: React.ComponentType<any>;
}

export interface LocalDominanceConfig {
  title?: React.ReactNode;
  desc?: React.ReactNode;
  cards?: DominanceCardConfig[];
}

export interface CostRow {
  pkg?: string;
  for?: string;
  cost?: string;
  del?: string;
  color?: string;
  values?: string[];
}

export interface CostTableConfig {
  title?: React.ReactNode;
  desc?: React.ReactNode;
  headers?: string[];
  rows?: CostRow[];
}

export interface ComparisonRow {
  f?: string;
  c?: string;
  d?: string;
  values?: string[];
}

export interface ComparisonTableConfig {
  title?: React.ReactNode;
  desc?: React.ReactNode;
  headers?: string[];
  rows?: ComparisonRow[];
}

export interface SectionConfig {
  hero?: HeroConfig;
  definition?: DefinitionConfig;
  audience?: AudienceConfig;
  features?: FeaturesConfig;
  aiAdvantage?: AIAdvantageConfig;
  techStack?: TechStackConfig;
  deepDive?: DeepDiveConfig;
  localDominance?: LocalDominanceConfig;
  costTable?: CostTableConfig;
  comparisonTable?: ComparisonTableConfig;
  industryDeepDives?: IndustrySecProps;
  process?: ProcessSecProps;
  logoBanner?: LogoBannerProps;
  bannerDetail?: BannerDetailProps;
}

export interface WebSecProps {
  showHero?: boolean;
  showDefinition?: boolean;
  showAudience?: boolean;
  showIndustryDeepDives?: boolean;
  showFeatures?: boolean;
  showAiAdvantage?: boolean;
  showTechStackAccordion?: boolean;
  showDeepDiveTabs?: boolean;
  showProcess?: boolean;
  showLocalDominance?: boolean;
  showCostTable?: boolean;
  showComparisonTable?: boolean;
  showLogoBanner?: boolean;
  showBannerDetail?: boolean;

  config?: SectionConfig;
}

// --- Defaults ---
const DEFAULT_HERO: HeroConfig = {
  tagline: "Next-Gen Web Solutions",
  title: "Website Development",
  description:
    "We build high-performance, responsive websites integrated with native AI features engineered for scale.",
  ctaText: "Get a Quote",
  imageSrc: "/Img/mac.png",
  imageAlt: "Website development presentation",
};

const DEFAULT_DEFINITION: DefinitionConfig = {
  title: "What is Professional Website Development?",
  subtitle: "(The Answer-First Definition)",
  desc: (
    <>
      At <span className="text-black font-semibold">PELTOWN</span>, website
      development is defined as the strategic engineering of a high-performance
      digital asset that acts as your brand&apos;s identity, sales channel, and
      customer engagement hub. Unlike basic site-building, our professional
      development focuses on AI-powered architecture, ensuring your site is
      optimized for both traditional search engines (Google) and modern Answer
      Engine Optimization (AEO) platforms like Perplexity and ChatGPT. A truly
      professional website must be scalable, secure, and conversion-focused to
      drive long-term digital growth in a competitive landscape.
    </>
  ),
};

const DEFAULT_AUDIENCE: AudienceConfig = {
  title: "Who This Is For : Solutions for Every Growth Stage",
  desc: "We provide tailored development solutions for various industries and business sizes, ensuring that every project aligns with specific workflows and branding requirements.",
  list: [
    {
      title: "Startups & New Ventures",
      desc: "Building MVP (Minimum Viable Product) websites in as little as 4 weeks to help you enter the market quickly.",
      icon: Zap,
    },
    {
      title: "Small to Mid-Sized Businesses",
      desc: "Cost-effective, high-conversion sites designed to build trust and improve local brand visibility in the Delhi NCR region.",
      icon: Users,
    },
    {
      title: "Ecommerce Brands",
      desc: "Scalable platforms using Shopify, WooCommerce, or custom solutions designed to reduce cart abandonment and manage complex inventory.",
      icon: ShoppingBag,
    },
    {
      title: "Industry Professionals",
      desc: "Targeted landing pages for doctors, lawyers, boutique stores, and travel agencies in Delhi.",
      icon: Layers,
    },
    {
      title: "Enterprise Companies",
      desc: "Complex web applications requiring advanced backend functionality via Laravel or high-speed frontend performance via Next.js.",
      icon: Cpu,
    },
  ],
};

const DEFAULT_FEATURES: FeaturesConfig = {
  title: "Core Features of PELTOWN's Development Solutions",
  desc: "Every website we build is designed according to modern standards focused on performance and user experience.",
  list: [
    {
      title: "AI-Powered Personalization",
      icon: Sparkles,
      desc: "We integrate AI chatbots for small business websites to automate lead generation and provide 24/7 customer support.",
    },
    {
      title: "Mobile-First Responsive Design",
      icon: Smartphone,
      desc: 'With most Indian users browsing on smartphones, we ensure your site is "thumb-friendly" and passes all mobile SEO benchmarks.',
    },
    {
      title: "Core Web Vitals & Speed Optimization",
      icon: Gauge,
      desc: "We optimize scripts, caching, and images to ensure lightning-fast loading speeds, which directly improves search rankings and user retention.",
    },
    {
      title: "SEO-Friendly Architecture",
      icon: Search,
      desc: "Beyond basic keywords, we implement proper heading hierarchy, schema markup, internal linking, and crawl-friendly code to ensure visibility.",
    },
    {
      title: "Advanced Security",
      icon: ShieldCheck,
      desc: "Every site includes SSL integration, secure coding practices, and malware protection to safeguard business and customer data.",
    },
  ],
};

const DEFAULT_AI_ADVANTAGE: AIAdvantageConfig = {
  tagline: "AI ADVANTAGE MODULE",
  title: "The AI Advantage: Generative AI for Ecommerce",
  desc: "Generative AI is completely revolutionizing the digital storefront. At PELTOWN, we don&apos;t just build ecommerce websites; we build intelligent retail ecosystems. By leveraging advanced AI models, we automate dynamic product descriptions tailored to individual user personas, ensuring higher conversion rates. Generative AI powers hyper-personalized shopping assistants that guide users through your catalog, answering complex queries, suggesting complementary products, and providing real-time styling or technical advice. This dramatically enhances customer interactions, reduces support overhead, and creates a highly engaging shopping journey that traditional websites simply cannot match.",
};

const DEFAULT_TECH_STACK: TechStackConfig = {
  title: "Our Tech Stack: Choosing the Right Engine for Your Growth",
  desc: "Selecting the right technology is critical for scalability. We help you navigate the “Laravel vs. Next.js” debate based on your business goals.",
  list: [
    {
      title: "Laravel Development",
      desc: "Ideal for enterprise-level solutions and custom web applications that require robust backend security and complex logic.",
      icon: Server,
    },
    {
      title: "React.js & Next.js",
      desc: "The gold standard for modern, ultra-fast websites that offer superior user experiences and high scalability.",
      icon: Zap,
    },
    {
      title: "Custom WordPress",
      desc: "For businesses that need flexible content management without sacrificing SEO support or design freedom.",
      icon: Globe,
    },
    {
      title: "Shopify & Ecommerce",
      desc: "Secure and scalable online store solutions designed to reduce cart abandonment and manage complex inventory.",
      icon: ShoppingBag,
    },
    {
      title: "Headless CMS",
      desc: "Separating content from design for businesses looking for multi-platform delivery and future-proof tech stacks.",
      icon: Layers,
    },
  ],
};

const DEFAULT_DEEP_DIVE: DeepDiveConfig = {
  title: "Technical Deep-Dive: Architecture Breakdowns",
  tabs: [
    {
      name: "Server-Side Rendering (SSR)",
      title: "Server-Side Rendering (SSR)",
      content: (
        <>
          For businesses aiming to scale their digital presence, frontend
          architecture plays a pivotal role in performance and SEO.{" "}
          <span className="text-black font-semibold">
            Server-Side Rendering (SSR)
          </span>{" "}
          using frameworks like{" "}
          <span className="text-[#BFCA16] font-semibold">Next.js</span>{" "}
          pre-renders pages on the server before sending them to the browser.
          This results in lightning-fast initial page loads, perfect Core Web
          Vitals scores, and superior SEO performance—essential for e-commerce,
          corporate sites, and content-heavy platforms. At PELTOWN, we
          meticulously analyze your traffic expectations and business objectives
          to architect the optimal rendering strategy, ensuring your web
          application is both blindingly fast and fully optimized for Google and
          AI-driven search engines.
        </>
      ),
    },
    {
      name: "Client-Side Rendering (CSR)",
      title: "Client-Side Rendering (CSR)",
      content: (
        <>
          Conversely,{" "}
          <span className="text-black font-semibold">
            Client-Side Rendering (CSR)
          </span>
          , typically used in standard React applications, renders content
          directly in the user&apos;s browser. While excellent for highly
          interactive user dashboards, it can lead to slower initial load times
          and suboptimal search engine indexing. CSR fits dynamic application
          logic workflows beautifully where instant page hydration outweighs
          public visibility constraints.
        </>
      ),
    },
  ],
};

const DEFAULT_LOCAL_DOMINANCE: LocalDominanceConfig = {
  title: (
    <>
      Architecture Built for Local Dominance: <br className="hidden md:block" />
      Gurgaon, Noida & Delhi NCR
    </>
  ),
  desc: (
    <>
      A stunning website is only effective if your local customers can find it.
      While our development headquarters are rooted in{" "}
      <span className="text-black font-bold">Delhi</span>, we engineer websites
      with advanced{" "}
      <span className="text-[#BFCA16] font-bold">localized SEO strategies</span>{" "}
      specifically designed to capture the thriving corporate hubs of{" "}
      <span className="text-black font-bold">Gurgaon and Noida.</span>
      We don&apos;t just build pages; we build localized digital authorities.
    </>
  ),
  cards: [
    {
      title: "Hyper-Targeted Engineering",
      icon: Target,
      desc: (
        <>
          We structurally integrate{" "}
          <span className="text-zinc-900 font-semibold">
            targeted landing pages
          </span>{" "}
          and
          <span className="text-zinc-900 font-semibold">
            {" "}
            hyper-local schema markups
          </span>{" "}
          directly into your website&apos;s core code, ensuring perfect
          alignment with{" "}
          <span className="text-[#BFCA16] font-bold underline underline-offset-4">
            Google My Business
          </span>{" "}
          profiles.
        </>
      ),
    },
    {
      title: "Sector-Specific Domination",
      icon: Building2,
      desc: (
        <>
          Whether targeting{" "}
          <span className="text-zinc-900 font-semibold">
            corporate real estate in Gurgaon
          </span>{" "}
          or
          <span className="text-zinc-900 font-semibold">
            {" "}
            tech manufacturing in Noida
          </span>
          , our architecture guarantees your brand remains the authoritative
          choice from{" "}
          <span className="text-zinc-900 font-semibold">
            South Delhi to Cyber City.
          </span>
        </>
      ),
    },
  ],
};

const DEFAULT_COST_TABLE: CostTableConfig = {
  title: (
    <>
      Website Development Cost in Delhi <br />
      (2026 Breakdown)
    </>
  ),
  desc: "Transparency in pricing is essential. We provide a breakdown based on current Indian market standards to help you choose the right investment for your ROI.",
  headers: ["Package", "Ideal For", "Estimated Investment", "Key Deliverables"],
  rows: [
    {
      pkg: "Growth Starter",
      for: "Local SMBs / Portfolios",
      cost: "₹25,000 – ₹50,000",
      del: "5–7 Pages, Mobile Responsive, Basic Technical SEO",
      color: "text-black",
    },
    {
      pkg: "Business Pro",
      for: "Growing Service Brands",
      cost: "₹75,000 – ₹1.5L",
      del: "AI Chatbot Integration, CMS, Advanced UI/UX",
      color: "text-[#BFCA16]",
    },
    {
      pkg: "Enterprise Custom",
      for: "Ecommerce / SaaS",
      cost: "₹2L+",
      del: "Laravel/Next.js Build, Full Security, Custom API Integration",
      color: "text-black",
    },
  ],
};

const DEFAULT_COMPARISON_TABLE: ComparisonTableConfig = {
  title: "Custom Development vs. DIY Platforms",
  desc: "Understanding why a professional website design service in Delhi outperforms &ldquo;builder&rdquo; platforms like Wix or Squarespace is vital for long-term success.",
  headers: [
    "Feature",
    "PELTOWN Custom Build",
    "DIY Builders (Wix/Squarespace)",
  ],
  rows: [
    {
      f: "SEO Depth",
      c: "Full control over metadata and schema",
      d: "Limited to platform constraints",
    },
    {
      f: "Loading Speed",
      c: "Optimized for Core Web Vitals",
      d: "Often bloated with generic code",
    },
    {
      f: "AI Integration",
      c: "Custom AI models and API access",
      d: "Limited to basic third-party plugins",
    },
    {
      f: "Code Ownership",
      c: "You own 100% of the code",
      d: "Locked into their subscription model",
    },
    {
      f: "Scalability",
      c: "Unlimited growth potential",
      d: "Becomes difficult/expensive at scale",
    },
  ],
};

export default function WebSec({
  showHero = true,
  showDefinition = true,
  showAudience = true,
  showIndustryDeepDives = true,
  showFeatures = true,
  showAiAdvantage = true,
  showTechStackAccordion = true,
  showDeepDiveTabs = true,
  showProcess = true,
  showLocalDominance = true,
  showCostTable = true,
  showComparisonTable = true,
  showLogoBanner = false,
  showBannerDetail = false,
  config = {},
}: WebSecProps) {
  const [activeTab, setActiveTab] = useState(0);

  // Merge overrides with defaults
  const hero = { ...DEFAULT_HERO, ...config.hero };
  const definition = { ...DEFAULT_DEFINITION, ...config.definition };
  const audience = { ...DEFAULT_AUDIENCE, ...config.audience };
  const features = { ...DEFAULT_FEATURES, ...config.features };
  const aiAdvantage = { ...DEFAULT_AI_ADVANTAGE, ...config.aiAdvantage };
  const techStack = { ...DEFAULT_TECH_STACK, ...config.techStack };
  const deepDive = { ...DEFAULT_DEEP_DIVE, ...config.deepDive };
  const localDominance = {
    ...DEFAULT_LOCAL_DOMINANCE,
    ...config.localDominance,
  };
  const costTable = { ...DEFAULT_COST_TABLE, ...config.costTable };
  const comparisonTable = {
    ...DEFAULT_COMPARISON_TABLE,
    ...config.comparisonTable,
  };
  const logoBanner = config.logoBanner || {};
  const bannerDetail = config.bannerDetail || {};

  return (
    <div className="bg-white text-black font-sans antialiased selection:bg-[#BFCA16]/20 selection:text-zinc-900">
      {/* 1. HERO SECTION */}
      {showHero && (
        <ServicesHero
          tagline={hero.tagline}
          title={hero.title}
          description={hero.description}
          ctaText={hero.ctaText}
        />
      )}

      {/* Dynamic Features Carousel */}
      {showFeatures && features.list && (
        <ServiceFeature
          title={features.title}
          desc={features.desc}
          list={features.list}
        />
      )}

      {showLogoBanner && <LogoBanner {...logoBanner} />}

      {/* 2. ANSWER-FIRST DEFINITION */}
      {showDefinition && (
        <section className="pt-30 pb-24 px-6 md:px-12 lg:px-20 bg-white">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-headingColor">
              {definition.title} <br />
              {definition.subtitle && (
                <span className="text-zinc-400 font-normal inline-block mt-5">
                  {definition.subtitle}
                </span>
              )}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="text-descriptionColor text-base md:text-lg font-medium leading-relaxed text-justify md:text-center">
                {definition.desc}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. TARGET AUDIENCE / SOLUTIONS FOR STAGES */}
      {showAudience && audience.list && (
        <section className="py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-headingColor">
                {audience.title}
              </h2>
              {audience.desc && (
                <p className="text-descriptionColor font-medium text-sm md:text-base">
                  {audience.desc}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audience.list.map((feat, idx) => {
                const FeatIcon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-cardBgColor border border-cardBorderColor p-6 md:p-10 rounded-2xl hover:border-[#BFCA16] hover:bg-white hover:shadow-xl hover:shadow-zinc-100 transition-all duration-300 group flex flex-col justify-between space-y-4 text-left h-full"
                  >
                    <div className="space-y-4">
                      {/* Icon Container */}
                      <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:text-[#BFCA16] group-hover:border-[#BFCA16] transition-all duration-300">
                        <FeatIcon className="w-6 h-6" />
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-lg md:text-xl text-headingColor tracking-tight leading-snug">
                        {feat.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-descriptionColor font-medium leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4. INDUSTRY DEEP-DIVES COMPONENT */}
      {showIndustryDeepDives && <IndustrySec {...config.industryDeepDives} />}



      {/* 6. GEN-AI SPECIAL HOVER BLOCK */}
      {showAiAdvantage && (
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
          <div className="max-w-6xl mx-auto bg-linear-to-br from-zinc-900 to-zinc-950 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl border border-zinc-800">
            <div className="relative z-10 space-y-4 text-left">
              {aiAdvantage.tagline && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-[#BFCA16] text-sm font-bold">
                  {aiAdvantage.tagline}
                </div>
              )}
              <h3 className="text-2xl md:text-5xl font-bold tracking-tight text-white">
                {aiAdvantage.title}
              </h3>
              <p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed text-justify">
                {aiAdvantage.desc}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 7. TECH STACK INTERACTIVE ACCORDION ROW */}
      {showTechStackAccordion && techStack.list && (
        <section className="py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-headingColor">
                {techStack.title}
              </h2>
              {techStack.desc && (
                <p className="text-descriptionColor font-medium text-md">
                  {techStack.desc}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.list.map((feat, idx) => {
                const FeatIcon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-cardBgColor border border-cardBorderColor p-6 md:p-10 rounded-2xl hover:border-[#BFCA16] hover:bg-white hover:shadow-xl hover:shadow-zinc-100 transition-all duration-300 group flex flex-col justify-between space-y-4 text-left h-full"
                  >
                    <div className="space-y-4">
                      {/* Icon Container */}
                      <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:text-[#BFCA16] group-hover:border-[#BFCA16] transition-all duration-300">
                        <FeatIcon className="w-6 h-6" />
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-lg md:text-xl text-headingColor tracking-tight leading-snug">
                        {feat.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-descriptionColor font-medium leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 8. TECHNICAL DEEP DIVE INTERACTIVE TABS */}
      {showDeepDiveTabs && deepDive.tabs && deepDive.tabs.length > 0 && (
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
          <div className="max-w-4xl mx-auto space-y-10">
            {deepDive.title && (
              <div className="flex items-center gap-3 pb-3 justify-center text-center w-full">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-headingColor">
                  {deepDive.title}
                </h3>
              </div>
            )}

            {(() => {
              const safeActiveTab =
                activeTab < deepDive.tabs.length ? activeTab : 0;
              return (
                <>
                  <div className="flex bg-zinc-200/60 p-1 rounded-xl w-full max-w-md mx-auto">
                    {deepDive.tabs.map((tab, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${safeActiveTab === idx ? "bg-white text-zinc-950 shadow-sm" : "text-zinc-500 hover:text-zinc-900"}`}
                      >
                        {tab.name}
                      </button>
                    ))}
                  </div>

                  <div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 text-left min-h-40 flex items-center shadow-sm">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={safeActiveTab}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="text-xs md:text-lg text-descriptionColor font-medium leading-relaxed"
                      >
                        {deepDive.tabs[safeActiveTab]?.content}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </>
              );
            })()}
          </div>
        </section>
      )}

      {/* 9. THE PELTOWN 6-STEP DEVELOPMENT PROCESS */}
      {showProcess && <ProcessSec {...config.process} />}

      {showBannerDetail && <BannerDetail {...bannerDetail} />}

      {/* 10. Architecture Built for Local Dominance */}
      {showLocalDominance && localDominance.cards && (
        <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto border border-zinc-200 rounded-[2.5rem] bg-white p-8 md:p-14 shadow-2xl shadow-zinc-100/50"
          >
            {/* HEADER SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-b border-zinc-100 pb-12">
              <div className="lg:col-span-11 space-y-6 text-left">
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-headingColor leading-tight">
                    {localDominance.title}
                  </h2>
                </div>

                <div className="text-descriptionColor text-base md:text-lg font-medium leading-relaxed max-w-4xl">
                  {localDominance.desc}
                </div>
              </div>
            </div>

            {/*  CARDS SECTION  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
              {localDominance.cards.map((card, idx) => {
                const CardIcon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="group p-8 rounded-3xl bg-cardBgColor border border-cardBorderColor hover:border-[#BFCA16] hover:bg-white hover:shadow-xl hover:shadow-zinc-200/40 transition-all duration-300"
                  >
                    <div className="flex flex-col gap-6 text-left">
                      <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:text-[#BFCA16] group-hover:border-[#BFCA16] transition-all">
                        <CardIcon className="w-5 h-5" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold tracking-tight text-headingColor flex items-center gap-2">
                          {card.title}
                        </h3>
                        <div className="text-sm text-descriptionColor font-medium leading-relaxed">
                          {card.desc}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>
      )}

      {/*  11. WEBSITE DEVELOPMENT COST IN DELHI */}
      {showCostTable && costTable.rows && (
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-white border-b border-zinc-100">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-headingColor">
                {costTable.title}
              </h2>
              {costTable.desc && (
                <p className="text-descriptionColor font-medium text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                  {costTable.desc}
                </p>
              )}
            </div>

            {/* Clean Bento-Style Pricing Table Container */}
            <div className="border border-zinc-200 rounded-md bg-white overflow-hidden shadow-sm">
              {(() => {
                const gridColsMap: Record<number, string> = {
                  1: "grid-cols-1",
                  2: "grid-cols-2",
                  3: "grid-cols-3",
                  4: "grid-cols-4",
                  5: "grid-cols-5",
                  6: "grid-cols-6",
                };
                const costCols =
                  gridColsMap[costTable.headers?.length || 4] || "grid-cols-4";
                return (
                  <>
                    {/* Table Header row layout */}
                    {costTable.headers && (
                      <div
                        className={`grid ${costCols} bg-blue-50/70 text-zinc-900 text-xs md:text-sm font-bold tracking-wide uppercase py-4 px-6 border-b border-zinc-200 text-left`}
                      >
                        {costTable.headers.map((header, idx) => (
                          <div key={idx}>{header}</div>
                        ))}
                      </div>
                    )}

                    {/* Matrix Pricing Item Nodes */}
                    {costTable.rows.map((tier, index) => {
                      const cells = tier.values || [
                        tier.pkg,
                        tier.for,
                        tier.cost,
                        tier.del,
                      ];
                      return (
                        <div
                          key={index}
                          className={`grid ${costCols} py-5 px-6 items-center text-xs md:text-sm border-b border-zinc-150 last:border-0 text-left hover:bg-zinc-50/50 transition-colors`}
                        >
                          {cells.map((cell, idx) => {
                            if (idx === 0) {
                              return (
                                <div
                                  key={idx}
                                  className={`font-bold text-sm md:text-base ${tier.color || "text-black"}`}
                                >
                                  {cell}
                                </div>
                              );
                            } else if (idx === 1) {
                              return (
                                <div
                                  key={idx}
                                  className="text-zinc-700 font-medium"
                                >
                                  {cell}
                                </div>
                              );
                            } else if (idx === 2) {
                              return (
                                <div
                                  key={idx}
                                  className="font-bold text-zinc-950 text-sm md:text-base tracking-tight"
                                >
                                  {cell}
                                </div>
                              );
                            } else {
                              return (
                                <div
                                  key={idx}
                                  className="text-zinc-500 font-medium leading-relaxed"
                                >
                                  {cell}
                                </div>
                              );
                            }
                          })}
                        </div>
                      );
                    })}
                  </>
                );
              })()}
            </div>
          </div>
        </section>
      )}

      {/* 12. CUSTOM DEVELOPMENT VS DIY PLATFORMS */}
      {showComparisonTable && comparisonTable.rows && (
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-zinc-50/50 border-b border-zinc-100">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-headingColor">
                {comparisonTable.title}
              </h2>
              {comparisonTable.desc && (
                <p className="text-descriptionColor font-medium text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                  {comparisonTable.desc}
                </p>
              )}
            </div>

            {/* Overhauled SaaS Comparison Table Grid */}
            <div className="border border-zinc-200 rounded-md bg-white overflow-hidden shadow-sm">
              {(() => {
                const gridColsMap: Record<number, string> = {
                  1: "grid-cols-1",
                  2: "grid-cols-2",
                  3: "grid-cols-3",
                  4: "grid-cols-4",
                  5: "grid-cols-5",
                  6: "grid-cols-6",
                };
                const compCols =
                  gridColsMap[comparisonTable.headers?.length || 3] ||
                  "grid-cols-3";
                return (
                  <>
                    {/* Table Header Row */}
                    {comparisonTable.headers && (
                      <div
                        className={`grid ${compCols} bg-black text-white text-xs md:text-sm font-bold tracking-wide uppercase py-4 px-6 border-b border-zinc-800`}
                      >
                        {comparisonTable.headers.map((header, idx) => (
                          <div
                            key={idx}
                            className={
                              idx === 1
                                ? "text-[#BFCA16]"
                                : idx === 2
                                  ? "text-red-600"
                                  : ""
                            }
                          >
                            {header}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Matrix Data Rows */}
                    {comparisonTable.rows.map((row, i) => {
                      const cells = row.values || [row.f, row.c, row.d];
                      return (
                        <div
                          key={i}
                          className={`grid ${compCols} py-4.5 px-6 items-center text-xs md:text-sm border-b border-zinc-100 last:border-0 text-left ${i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}`}
                        >
                          {cells.map((cell, idx) => {
                            if (idx === 0) {
                              return (
                                <div
                                  key={idx}
                                  className="font-bold text-headingColor"
                                >
                                  {cell}
                                </div>
                              );
                            } else if (idx === 1) {
                              return (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2 text-zinc-700 font-medium"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-[#BFCA16] shrink-0" />
                                  <span>{cell}</span>
                                </div>
                              );
                            } else if (idx === 2) {
                              return (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2 text-zinc-500"
                                >
                                  <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                                  <span>{cell}</span>
                                </div>
                              );
                            } else {
                              return (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2 text-zinc-600 font-medium"
                                >
                                  <span>{cell}</span>
                                </div>
                              );
                            }
                          })}
                        </div>
                      );
                    })}
                  </>
                );
              })()}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
