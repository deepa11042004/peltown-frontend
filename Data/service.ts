import { SectionConfig } from "@/Components/Services/Web/WebSec";
import {
  MapPin,
  Camera,
  Layers,
  ShieldAlert,
  Globe,
  Settings,
  Users,
  Lock,
  Factory,
  GraduationCap,
  Building2,
  Plane,
  Building,
  Truck,
  ShoppingBag,
  Rocket,
  Network,
  Shield,
  Pencil,
  Link,
  Code,
  TrendingUp,
  Search,
  Video,
  Megaphone,
  MessagesSquare,
  Award,
  BarChart3,
  ChessBishop,
  Pen,
  Mails,
  Lightbulb,
  RefreshCw,
  BookImage,
  PenTool,
  LayoutGrid,
  Package,
  Bot,
  MessageCircle,
  Radio,
  Cpu,
  Zap,
  Database,
  Target,
  Sparkles,
  Gauge,
  Server,
  CreditCard,
  Fingerprint,
  Smartphone,
  Webhook,
  MessageSquare,
  Map,
  Sliders,
  Flame,
  LineChart,
  Settings2,
  ShoppingCart,
  Eye,
  Heart,
  Layout,
  Monitor,
  Palette,
  ShieldCheck,
  AtSign,
  UtensilsCrossed,
  Shirt,
  PartyPopper,
} from "lucide-react";

export const SERVICES_CONTENT: Record<string, SectionConfig> = {
  "erp-system": {
    hero: {
      tagline: "Intelligent Automation",
      title: "ERP Development",
      description:
        "Centralize your operations with future-proof, AI-driven software built for your workflows.",
      ctaText: "Get a Free Quote",
    },
    definition: {
      title: "What is a Custom ERP System?",
      subtitle: "(The Answer-First Definition)",
      desc: "An Enterprise Resource Planning (ERP) system is a centralized software architecture that integrates all core business processes—including finance, human resources, supply chain, and manufacturing—into a single, unified database. At PELTOWN, we provide custom website development and software engineering that eliminates the need for disconnected spreadsheets, allowing for real-time data flow across your entire organization. Our AI-powered ERP solutions are designed to be 'future-proof,' ensuring your business is ready for the next generation of automation and Answer Engine Optimization (AEO).",
    },
    audience: {
      title: "Industry-Specific Enterprise Solutions",
      desc: "Our development is tailored for businesses that have outgrown off-the-shelf software and require a system built around their unique organizational workflows.",
      list: [
        {
          title: "Small to Mid-Sized Businesses (SMBs)",
          desc: "Cost-effective ERP for small business India that automates repetitive tasks.",
          icon: Building2,
        },
        {
          title: "Travel Agencies",
          desc: "Specialized travel agency systems featuring automated booking and itinerary management.",
          icon: Plane,
        },
        {
          title: "Real Estate Firms",
          desc: "Custom real estate portal software India with integrated lead management and property tracking.",
          icon: Building,
        },
        {
          title: "Manufacturing & Retail",
          desc: "Implementing cloud POS systems and inventory management to streamline the supply chain.",
          icon: Factory,
        },
        {
          title: "Educational Institutions",
          desc: "Scalable Learning Management Systems (LMS) to manage student lifecycles and course delivery.",
          icon: GraduationCap,
        },
      ],
    },
    features: {
      title: "Key Features of a PELTOWN ERP Solution",
      desc: "We engineer scalable digital experiences designed for maximum ROI, focusing on the following core modules:",
      list: [
        {
          title: "HRMS & Payroll Automation",
          icon: LayoutGrid,
          desc: "A complete HRMS for SMB India that handles attendance, tax compliance, and automated salary disbursements.",
        },
        {
          title: "Inventory & Invoicing",
          icon: Users,
          desc: "Real-time tracking of stock levels with integrated invoicing & billing to maintain healthy cash flow.",
        },
        {
          title: "Business Intelligence Dashboards",
          icon: BarChart3,
          desc: "Predictive analytics that provide a 360° view of company performance.",
        },
        {
          title: "AI Chatbot Integration",
          icon: Bot,
          desc: "We offer AI chatbot integration for small business websites to automate internal helpdesk ticketing and customer inquiries.",
        },
      ],
    },
    deepDive: {
      title: "ERP vs. CRM: Understanding the Difference",
      tabs: [
        {
          name: "CRM",
          title: "Cloud vs On-Premise ERP Hosting",
          content:
            "  This is your front-office tool. It focuses on the customer—managing leads, sales pipelines, marketing automation, and customer support. A custom CRM vs Salesforce comparison often shows that custom builds are better for companies with unique sales cycles that want to avoid high per-user monthly fees.",
        },
        {
          name: "ERP",
          title: "Monolithic vs Microservice ERP Architectures",
          content:
            "This is your back-office powerhouse. It focuses on the business itself—managing finance, HR, supply chain, and internal operations. While a CRM helps you get the customer, the ERP helps you service the customer efficiently while maintaining profitability.",
        },
      ],
    },
    costTable: {
      title: "Custom ERP Development Cost in India",
      desc: "We believe in a 'cost-effective' approach with no hidden per-user licensing fees.",
      headers: [
        "Package",
        "Ideal For",
        "Estimated Investment",
        "Key Deliverables",
      ],
      rows: [
        {
          pkg: "Startup Starter",
          for: "Teams under 10",
          cost: "₹1.5L - ₹3L",
          del: "Core CRM, Invoicing, Basic HRMS",
          color: "text-black",
        },
        {
          pkg: "Business Pro",
          for: "Growing SMBs",
          cost: "₹5L - ₹12L",
          del: "Full ERP Suite, AI Chatbot, Multi-location",
          color: "text-[#BFCA16]",
        },
        {
          pkg: "Enterprise Custom",
          for: "Large Corporations",
          cost: "₹15L+",
          del: "Custom AI Models, Global API Access, Dedicated Support",
          color: "text-black",
        },
      ],
    },
    comparisonTable: {
      title: "Custom ERP vs. Off-the-Shelf SaaS",
      desc: "Why hiring an IT solutions company in Delhi for a custom build is a better long-term strategy:",
      headers: ["Feature", "PELTOWN Custom ERP", "Ready-Made SaaS (Zoho/Odoo)"],
      rows: [
        {
          f: "Long-Term Cost",
          c: "One-time development cost",
          d: "Forever monthly subscription fees",
        },
        {
          f: "Ownership",
          c: "You own 100% of the code",
          d: 'You are "renting" the software',
        },
        {
          f: "Customization",
          c: "Built for your exact workflow",
          d: "You must adapt to their logic",
        },
        {
          f: "Data Control",
          c: "Private cloud hosting",
          d: "Your data is on their servers",
        },
      ],
    },
    process: {
      title: "The PELTOWN 6-Step App Development Process",
      desc: 'Our "How We Do" model ensures transparency and eliminates technical overhead.',
      steps: [
        {
          num: "1",
          title: "Requirement & Market Analysis",
          desc: "We identify content gaps and competitor weaknesses to give your app a strategic advantage.",
        },
        {
          num: "2",
          title: "Planning & UI/UX Strategy",
          desc: "Crafting clean, modern interfaces focused on user experience and conversion.",
        },
        {
          num: "3",
          title: "Agile Development",
          desc: "Building your app in iterative sprints using modern technologies like React.js and Next.js.",
        },
        {
          num: "4",
          title: "AI & Third-Party Integration",
          desc: "Connecting your app to the WhatsApp Business API India, CRM systems, and AI models.",
        },
        {
          num: "5",
          title: "Testing & Optimization",
          desc: "Rigorous testing of responsiveness, performance, speed, and security.",
        },
        {
          num: "6",
          title: "Launch & Maintenance",
          desc: "Handling store deployment while providing ongoing support to keep your site running smoothly.",
        },
      ],
    },
  },

  "mobile-app": {
    hero: {
      tagline: "Expert Mobile Solutions",
      title: "Mobile App Development",
      description:
        "Build high-performing, secure iOS and Android apps tailored to your business needs.",
      ctaText: "Start Your App Project",
    },
    definition: {
      title: "What is Professional Mobile App Development?",
      subtitle: "",
      desc: "At PELTOWN, mobile app development is the high-precision engineering of native or cross-platform applications designed to solve complex business problems and enhance user engagement. As a leading mobile app development company Delhi, we focus on building AI-powered mobile apps that utilize predictive analytics and automated workflows to provide a competitive edge. Our process ensures every app is high-performing, secure, and ready for global scalability, moving beyond simple code to create a strategic business asset.",
    },
    audience: {
      title: "Who We Build Mobile Apps For?",
      desc: "Empowering startups and enterprises to engage their users directly on their smartphones.",
      list: [
        {
          title: "Startups & Visionaries",
          desc: "For those looking how to build an MVP app in 4 weeks to test market fit with minimal investment.",
          icon: Rocket,
        },
        {
          title: "E-commerce & Retail Brands",
          desc: "Businesses needing high-performance shopping and delivery apps to compete in the mobile-first Indian market.",
          icon: ShoppingBag,
        },
        {
          title: "Quick Commerce Ventures",
          desc: "Specialized teams looking for 10-minute delivery app development with real-time tracking.",
          icon: Truck,
        },
        {
          title: "Established Enterprises",
          desc: "Large organizations requiring enterprise mobile app development to streamline field operations and data management.",
          icon: Building2,
        },
        {
          title: "Industry Verticals",
          desc: "Specialized portals for Travel Agency Systems, Real Estate Portals, and Restaurant Management.",
          icon: Globe,
        },
      ],
    },
    features: {
      title: "Key Features of PELTOWN Mobile Applications",
      desc: "Every app we build includes a suite of modern features designed for performance and growth.",
      list: [
        {
          title: "AI-Powered Personalization",
          icon: Bot,
          desc: "Integrating ChatGPT for business to provide intelligent in-app customer support and personalized user journeys.",
        },
        {
          title: "Real-Time Geolocation",
          icon: MapPin,
          desc: "Essential for fleet delivery apps and local service directories, ensuring precise tracking and ETA calculations.",
        },
        {
          title: "Secure Payment Gateway Integration",
          icon: CreditCard,
          desc: "Supporting all major Indian and international payment methods for seamless transactions.",
        },
        {
          title: "Biometric Security",
          icon: Fingerprint,
          desc: "Implementing Fingerprint and Face ID authentication to protect sensitive user data.",
        },
        {
          title: "Advanced Analytics",
          icon: BarChart3,
          desc: "Built-in dashboards to track user behaviours, retention, and conversion metrics in real-time.",
        },
        {
          title: "Hassle-Free Account Management",
          icon: Server,
          desc: "We simplify hosting, renewals, and performance monitoring to ensure maximum uptime.",
        },
      ],
    },
    deepDive: {
      title: "Technical Deep-Dive: Mobile Technologies",
      tabs: [
        {
          name: "Native vs Cross-Platform",
          title: "Native App Development vs Cross-Platform Frameworks",
          content:
            "Native development (Swift for iOS, Kotlin for Android) ensures maximum performance, smooth custom animations, and complete hardware API access. Hybrid cross-platform frameworks like React Native or Flutter allow you to deploy a single codebase to both App Store and Play Store, cutting dev timelines and budgets in half without compromising premium aesthetic standards.",
        },
        {
          name: "API Sync Protocols",
          title: "Real-Time REST vs GraphQL Sync Protocols",
          content:
            "We deploy WebSockets and GraphQL subscriptions for real-time mobile tracking and instant messaging hubs. For standard lead capture and database access, structured REST APIs with optimized JSON compression payloads ensure low cellular battery consumption and blindingly fast loading times.",
        },
      ],
    },
    costTable: {
      title: "Pricing Tiers: Mobile App Development Cost India (2026)",
      desc: "We provide a transparent real pricing breakdown to help you plan your ROI.",
      headers: ["Package", "Ideal For", "Investment Range", "Key Deliverables"],
      rows: [
        {
          pkg: "MVP Starter",
          for: "Market Validation",
          cost: "₹2.5L - ₹5L",
          del: "Essential features, 1 Platform, Basic AI",
          color: "text-black",
        },
        {
          pkg: "Professional Growth",
          for: "Scaling Brands",
          cost: "₹7L - ₹15L",
          del: "Android + iOS (Flutter), CRM Integration, Advanced UI",
          color: "text-[#BFCA16]",
        },
        {
          pkg: "Enterprise Suite",
          for: "Complex Systems",
          cost: "₹20L+",
          del: "Custom AI Models, Multi-lingual, High Security, SaaS Ready",
          color: "text-black",
        },
      ],
    },
    comparisonTable: {
      title: "Custom App Development vs. Template App Builders",
      desc: "Why native/custom frameworks outperform standard drag-and-drop builders.",
      headers: [
        "Feature",
        "PELTOWN Custom App",
        "Template Builders (AppyPie/Adalo)",
      ],
      rows: [
        {
          f: "App Speed & Fluidity",
          c: "Highly optimized code, smooth 60fps renders",
          d: "Heavy lag, webview wrapper limitations",
        },
        {
          f: "Offline Capabilities",
          c: "Full custom SQLite syncing architecture",
          d: "Fails without active internet connection",
        },
        {
          f: "Hardware & native API access",
          c: "Direct access to camera, Bluetooth, biometrics",
          d: "Very limited hardware/native API access",
        },
        {
          f: "Store Submission Support",
          c: "Guaranteed publication with expert guidance",
          d: "High rejection rate due to generic templates",
        },
      ],
    },
    process: {
      title: "Our Mobile App Launch Process",
      desc: "From concept mockups to active App Store and Google Play submissions, we manage the entire mobile app lifecycle.",
      steps: [
        {
          num: "01",
          title: "Requirement & User Flows",
          desc: "Mapping visual user journeys, button actions, and back-end logic integrations.",
        },
        {
          num: "02",
          title: "Wireframing & App UI/UX",
          desc: "Designing premium, high-fidelity app screens prioritizing mobile-first conversion principles.",
        },
        {
          num: "03",
          title: "Cross-Platform Development",
          desc: "Writing native-performance React Native/Flutter codebase with highly optimized rendering cycles.",
        },
        {
          num: "04",
          title: "API & Gateway Integrations",
          desc: "Connecting secure REST/GraphQL API streams, payment processors, and biometric sensors.",
        },
        {
          num: "05",
          title: "Beta Calibrations & QA",
          desc: "Executing automated device tests across a range of iOS and Android screen resolutions.",
        },
        {
          num: "06",
          title: "Store Submission & Launch",
          desc: "Managing store submission guidelines, privacy policies, and launching live to global stores.",
        },
      ],
    },
  },

  "custom-crm": {
    hero: {
      tagline: "Bespoke Solutions",
      title: "Custom CRM Development",
      description:
        "Build contact management software tailored to your workflows with zero recurring licensing fees.",
      ctaText: "Get Your CRM Quote",
    },
    definition: {
      title: "What is Custom CRM Development?",
      subtitle: "",
      desc: "Custom CRM development is the process of building a customer relationship management system tailored specifically to a single business's unique workflows, data structures, and third-party integrations. Unlike off-the-shelf SaaS platforms like Salesforce or Zoho, a custom CRM is owned entirely by the buyer, eliminates recurring per-user licensing fees, and is engineered to match exact operational use-cases rather than forcing a business to adapt to a pre-set template. At PELTOWN, we combine this bespoke engineering with AI-powered analytics to turn your customer data into a strategic growth asset.",
    },
    audience: {
      title: "Why Your Business Needs a Custom CRM Solution",
      desc: "In the competitive landscape of 2026, relying on generic software can create data silos and operational bottlenecks.",
      list: [
        {
          title: "Scaling Startups",
          desc: "Entrepreneurs who need a scalable tech foundation that grows with their lead volume without increasing monthly subscription costs.",
          icon: Rocket,
        },
        {
          title: "Niche Industry Verticals",
          desc: "Specialized businesses such as Travel Agencies, Real Estate Firms, and Educational Institutes that require industry-specific fields.",
          icon: Layers,
        },
        {
          title: "Enterprises with Complex Workflows",
          desc: "Organizations that need deep integration with existing ERP systems, HRMS, or inventory databases.",
          icon: Network,
        },
        {
          title: "Data-Sensitive Organizations",
          desc: "Businesses that require complete ownership of their source code and data for security and compliance purposes.",
          icon: Shield,
        },
      ],
    },
    features: {
      // change
      title: "Key Features of PELTOWN Custom CRM Systems",
      desc: "We build CRMs that do more than just store contacts; we build engines that drive sales.",
      list: [
        {
          title: "AI-Powered Lead Scoring",
          icon: Target,
          desc: "Using predictive analytics to identify which leads are most likely to convert.",
        },
        {
          title: "Omni-channel Communication",
          icon: MessageSquare,
          desc: "Seamlessly integrated with the WhatsApp Business API India, Bulk Email, and SMS.",
        },
        {
          title: "Automated Workflow Triggers",
          icon: Zap,
          desc: 'Set up "if-then" logic to automate follow-ups, invoice generation, and task assignments.',
        },
        {
          title: "Advanced Business Intelligence",
          icon: BarChart3,
          desc: "Real-time dashboards and custom reporting that give you a 360-degree view of your sales pipeline.",
        },
        {
          title: "Mobile-First Access",
          icon: Smartphone,
          desc: "Every CRM we build is fully responsive, ensuring your field agents have access to critical data.",
        },
        {
          title: "Secure API Integrations",
          icon: Webhook,
          desc: "We connect your CRM to your website, accounting software, and lead generation tools.",
        },
      ],
    },
    deepDive: {
      title: "Technical Deep-Dive: CRM Data Modeling",
      tabs: [
        {
          name: "Relational vs Document DB",
          title: "SQL Relational Databases vs NoSQL Document Databases",
          content:
            "For structured, transaction-heavy pipelines (deals, invoicing, HR connections), PostgreSQL relational databases maintain strict data consistency and ACID compliance. For flexible customer profiles, interaction histories, and custom fields that evolve frequently, MongoDB document databases allow dynamic metadata storage without complex schema migrations.",
        },
        {
          name: "Pipeline Webhooks",
          title: "Automated Webhooks & Third-Party API Syncs",
          content:
            "We bridge your custom CRM to telephony providers (Twilio), mailing platforms, and payment endpoints. Automated webhooks listen for trigger events (e.g. status changes) to push lead records to Slack channels, dispatch confirmation texts, and update marketing campaigns instantly.",
        },
      ],
    },
    costTable: {
      title: "Pricing: Custom CRM Development Cost India (2026)",
      desc: "We believe in transparency. Your investment is based on complexity and integrations.",
      headers: [
        "Package",
        "Ideal For",
        "Estimated Investment",
        "Key Deliverables",
      ],
      rows: [
        {
          pkg: "Startup Essentials",
          for: "Small Teams",
          cost: "₹1.5L - ₹3L",
          del: "Core Lead Management, WhatsApp Integration, Basic Reporting",
          color: "text-black",
        },
        {
          pkg: "Business Pro",
          for: "Growing SMBs",
          cost: "₹5L - ₹10L",
          del: "Advanced Automation, AI Lead Scoring, Full API Suite",
          color: "text-[#BFCA16]",
        },
        {
          pkg: "Enterprise Suite",
          for: "Large Organizations",
          cost: "₹15L+",
          del: "Custom AI Models, Multi-lingual, ERP Sync, Dedicated Support",
          color: "text-black",
        },
      ],
    },
    comparisonTable: {
      title: "Custom CRM vs. Off-the-Shelf CRMs (HubSpot/Salesforce)",
      desc: "Evaluate the long-term ROI of owning your CRM versus paying per seat.",
      headers: ["Feature", "PELTOWN Custom CRM", "SaaS CRMs"],
      rows: [
        {
          f: "Pricing Model",
          c: "Flat build fee, unlimited users",
          d: "Skyrockets with team growth (per-seat charges)",
        },
        {
          f: "UX Simplicity",
          c: "Clean UI displaying only your needed data",
          d: "Overwhelming features that confuse sales reps",
        },
        {
          f: "Field Customization",
          c: "Unlimited custom database relations",
          d: "Restricted custom fields unless on high tiers",
        },
      ],
    },
    process: {
      title: "The PELTOWN 6-Step Implementation Process",
      desc: 'Our "How We Do" model eliminates technical overhead and ensures project success.',
      steps: [
        {
          num: "1",
          title: "Requirement & Gap Analysis",
          desc: 'We study your current sales process and identify the "content gaps" in your data management.',
        },
        {
          num: "2",
          title: "Strategic Blueprinting",
          desc: "Creating wireframes and a data-flow architecture that aligns with your ROI goals.",
        },
        {
          num: "3",
          title: "UI/UX Design",
          desc: 'Designing a "clean and modern" interface that your team will actually enjoy using.',
        },
        {
          num: "4",
          title: "Bespoke Development",
          desc: "Our developers build the system in agile sprints, integrating AI chatbot capabilities.",
        },
        {
          num: "5",
          title: "Rigorous Testing",
          desc: "We test for speed, responsiveness, and security to ensure a bug-free launch.",
        },
        {
          num: "6",
          title: "Launch & Support",
          desc: "Beyond deployment, we handle account management, renewals, and performance monitoring.",
        },
      ],
    },
  },

  "seo-optimization": {
    hero: {
      tagline: "Dominate Search Results",
      title: "SEO Optimization",
      description:
        "Boost your organic visibility and drive high-intent traffic with data-driven search strategies.",
      ctaText: "Get a Free Audit",
    },
    definition: {
      title: "SEO for Professional Service Business",
      subtitle: "",
      desc: "Search Engine Optimization is the precise process of making your website visible to users actively seeking your products or services. At PELTOWN, we don't just optimize for search keywords; we optimize for search intent. By auditing technical structure, building comprehensive content structures, improving Core Web Vitals speed parameters, and acquiring authoritative backlink structures, we turn organic search into a scalable revenue pipeline.",
    },
    audience: {
      title: "Comprehensive SEO Services",
      desc: "We cover every angle to ensure your site ranks at the top.",
      list: [
        {
          title: "Keyword Research",
          desc: "Targeting high-intent keywords that drive ready-to-buy traffic to your site.",
          icon: Search,
        },
        {
          title: "Technical SEO",
          desc: "Optimizing site speed, mobile usability, and schema markup for perfect indexing.",
          icon: Code,
        },
        {
          title: "Content Strategy",
          desc: "AI-assisted content creation that engages users and satisfies search algorithms.",
          icon: Pencil,
        },
        {
          title: "Link Building",
          desc: "Acquiring high-quality backlinks to boost your domain authority and credibility.",
          icon: Link,
        },
        {
          title: "Local SEO",
          desc: "Dominating local search results and Google Maps for your specific area.",
          icon: MapPin,
        },
        {
          title: "On-Page Optimization",
          desc: "Fine-tuning meta tags, headers, and images for maximum relevance.",
          icon: TrendingUp,
        },
      ],
    },
    features: {
      title: "Performance-Driven Search Optimization Strategy",
      desc: "Our SEO strategy addresses technical performance, semantic relevance, and content authority.",
      list: [
        {
          title: "In-Depth Keyword Clustering",
          icon: Search,
          desc: "Map user search patterns to keyword groups, preventing keyword cannibalization and improving domain coverage.",
        },
        {
          title: "Technical Core Vitals Optimizations",
          icon: Gauge,
          desc: "Accelerate page speeds, optimize layout stability, and clean up script payloads to pass Google Core Web Vitals audits.",
        },
        {
          title: "Authority Backlink Generation",
          icon: Globe,
          desc: "Earn secure, relevant backlinks from high-domain-authority publishers to elevate your domain credibility.",
        },
        {
          title: "Answer Engine Optimizations (AEO)",
          icon: Sparkles,
          desc: "Format page metadata and structured schemas to ensure Google and AI search agents feature your brand in response outputs.",
        },
      ],
    },
    deepDive: {
      title: "Technical Deep-Dive: Search Crawling",
      tabs: [
        {
          name: "Static Generation (SSG)",
          title: "Static Site Generation (SSG) for SEO",
          content:
            "Generating pages as static HTML at build time is the gold standard for SEO. Search engine crawlers (Googlebot, Bing) index fully-rendered content instantly without executing heavy JS, and loading speeds improve dramatically, directly boosting Core Web Vitals rankings.",
        },
        {
          name: "Structured Data Schemas",
          title: "JSON-LD Rich Schema Markups",
          content:
            "We inject customized JSON-LD schema schemas (Organization, LocalBusiness, FAQPage, Product) directly into the code. This gives search engine algorithms context about your corporate services, enabling rich search snippets and maps visibility.",
        },
      ],
    },
    costTable: {
      title: "SEO Optimization Packages in Delhi (2026 Breakdown)",
      desc: "Organic search campaigns that focus on search rankings and revenue generation.",
      headers: [
        "Package",
        "Ideal For",
        "Estimated Investment",
        "Key Deliverables",
      ],
      rows: [
        {
          pkg: "Local SEO Boost",
          for: "Local Service Providers",
          cost: "₹15,000 – ₹25,000 / mo",
          del: "GMB optimization, 10 Target Keywords, On-Page SEO",
          color: "text-black",
        },
        {
          pkg: "National SEO Ranker",
          for: "E-commerce & B2B Brands",
          cost: "₹35,000 – ₹60,000 / mo",
          del: "Content marketing, High-DA backlink building, Technical Audit",
          color: "text-[#BFCA16]",
        },
        {
          pkg: "Enterprise SEO",
          for: "Highly Competitive Niches",
          cost: "₹75,000+ / mo",
          del: "AEO Optimization (ChatGPT/Perplexity), PR Outreach, Full-site recovery",
          color: "text-black",
        },
      ],
    },
    comparisonTable: {
      title: "Custom SEO Strategy vs. Automated Software Plans",
      desc: "Why hand-crafted SEO campaigns outperform robotic automated plugins.",
      headers: ["Feature", "PELTOWN SEO Team", "Automated Plugins / Agencies"],
      rows: [
        {
          f: "Core Update Adapting",
          c: "Manual quality checks, safe white-hat tactics",
          d: "Spammy footprints that risk penalty from Google",
        },
        {
          f: "Site Architecture Audits",
          c: "Dev-level JS rendering, Schema markup & speed fixes",
          d: "Only meta tag changes and surface-level checks",
        },
        {
          f: "Content Strategy",
          c: "Human-researched, high-intent expert articles",
          d: "AI-generated boilerplate or spun blogs",
        },
      ],
    },
    process: {
      title: "Our Revenue-Focused SEO Process",
      desc: "A search optimization campaign designed to drive organic visibility and ranking metrics.",
      steps: [
        {
          num: "01",
          title: "Technical Domain Audit",
          desc: "Auditing domain redirects, indexing issues, page loading speeds, and structural tags.",
        },
        {
          num: "02",
          title: "Intent Keyword Clustering",
          desc: "Grouping thousands of search query terms into targeted keyword clusters to guide landing pages.",
        },
        {
          num: "03",
          title: "On-Page Content Structuring",
          desc: "Writing high-quality content optimized with semantic headers, custom schemas, and internal links.",
        },
        {
          num: "04",
          title: "Link & Citation Campaigns",
          desc: "Acquiring premium backlink references from high-domain authority directories and newspapers.",
        },
        {
          num: "05",
          title: "Answer Engine Optimization",
          desc: "Configuring structured JSON-LD schemas so AI tools (ChatGPT/Perplexity) reference your services.",
        },
        {
          num: "06",
          title: "Performance Rank Tracking",
          desc: "Monitoring daily rank changes, impression metrics, and organic conversion actions via Search Console.",
        },
      ],
    },
    logoBanner: {
      subtitle: "Powered by Industry Leading Tools",
      tools: [
        { name: "Analytics", icon: BarChart3 },
        { name: "Search Console", icon: Search },
        { name: "Ahrefs Premium", icon: LineChart },
        { name: "Semrush Suite", icon: Flame },
        { name: "Google Trends", icon: TrendingUp },
        { name: "Screaming Frog", icon: Sliders },
      ],
    },
    bannerDetail: {
      tag: "The SEO Lifecycle",
      title: "Our Proven SEO Process",
      desc: "Success in SEO isn't luck; it's a process. We follow a strict methodology to ensure consistent keyword rankings.",
      btnText: "Get Free SEO Audit",
      steps: [
        {
          num: "01",
          title: "Audit & Analysis",
          desc: "Deep-dive into your current site health, core vitals, and indexing.",
          icon: BarChart3,
        },
        {
          num: "02",
          title: "Strategy Building",
          desc: "Custom keyword cluster maps and competitor gaps audit.",
          icon: Map,
        },
        {
          num: "03",
          title: "Optimization",
          desc: "Executing dev-level technical SEO and high-intent content fixes.",
          icon: Settings2,
        },
        {
          num: "04",
          title: "Reporting & Scale",
          desc: "Monthly position tracking reports and scaling high-performing pages.",
          icon: TrendingUp,
        },
      ],
    },
  },

  "social-media": {
    hero: {
      tagline: "Viral Growth",
      title: "Social Media Marketing",
      description:
        "Grow your social presence and build brand loyalty with platform-specific content.",
      ctaText: "Start Growing",
    },
    definition: {
      title: "Organic Social Media Strategy",
      subtitle: "Storytelling Meets Data-Driven Organic Distribution",
      desc: "We help brands establish an authoritative voice on Instagram, LinkedIn, YouTube, and X. From high-quality short-form video scripts to custom grid design and engagement frameworks, we turn passive scrollers into dedicated brand advocates.",
    },
    audience: {
      title: "Comprehensive SMM Services",
      desc: "From content creation to community management, we handle it all.",
      list: [
        {
          title: "Strategy Development",
          desc: "AI-backed audience analysis to define your voice and targets.",
          icon: ChessBishop,
        },
        {
          title: "Content Creation",
          desc: "High-converting Reels, graphics, and videos tailored for virality.",
          icon: Video,
        },
        {
          title: "Paid Advertising",
          desc: "Precision-targeted Meta & LinkedIn ads to maximize ROI.",
          icon: Megaphone,
        },
        {
          title: "Community Management",
          desc: "24/7 engagement to turn followers into loyal brand advocates.",
          icon: MessagesSquare,
        },
        {
          title: "Influencer Marketing",
          desc: "Connect with key influencers to amplify your brand's reach.",
          icon: Award,
        },
        {
          title: "Analytics & Reporting",
          desc: "Transparent data reporting to track growth and optimize Strategy.",
          icon: BarChart3,
        },
      ],
    },
    features: {
      title: "Organic Audience Development & Campaign Architecture",
      desc: "We plan, produce, and optimize visual storytelling schemas designed to grow organic distribution.",
      list: [
        {
          title: "Content Planning & Grid Sync",
          icon: LayoutGrid,
          desc: "Organize monthly content calendars, grid layouts, and visual concepts for cohesive aesthetic grids.",
        },
        {
          title: "Short-Form Video Production",
          icon: Camera,
          desc: "Conceptualize, draft scripts, direct lighting, and edit high-retention vertical videos for reels, shorts, and TikTok formats.",
        },
        {
          title: "Community Engagement Routines",
          icon: Users,
          desc: "Automate and coordinate comment replies, direct message replies, and niche community interactions to drive algorithm signals.",
        },
        {
          title: "In-Depth Performance Analytics",
          icon: BarChart3,
          desc: "Track reach growth, follower conversion statistics, click-through metrics, and demographic responses monthly.",
        },
      ],
    },
    deepDive: {
      title: "Technical Deep-Dive: Social Algorithms",
      tabs: [
        {
          name: "Vertical Video Hooks",
          title: "High-Retention Video Editing Schemas",
          content:
            "Short-form video success relies on the first 3 seconds (the hook). We edit vertical video assets with dynamic typography, audio trends, and pacing to minimize drop-off rates, signaling algorithms to distribute your content to broader audiences.",
        },
        {
          name: "SMM Analytics Sync",
          title: "API Analytics Integration",
          content:
            "We build custom dashboards that sync with Instagram Graph API and YouTube Reporting APIs. This aggregates follower demographics, active engagement hours, and traffic flows to optimize publishing schedules.",
        },
      ],
    },
    costTable: {
      title: "Social Media Management Packages (2026 Breakdown)",
      desc: "Build a community, increase brand recall, and drive organic leads.",
      headers: [
        "Package",
        "Ideal For",
        "Estimated Investment",
        "Key Deliverables",
      ],
      rows: [
        {
          pkg: "Social Starter",
          for: "Small Businesses",
          cost: "₹20,000 – ₹30,000 / mo",
          del: "12 custom posts/mo, basic graphics, copywriting, hashtag setup",
          color: "text-black",
        },
        {
          pkg: "Brand Pro",
          for: "Active Consumer Brands",
          cost: "₹40,000 – ₹60,000 / mo",
          del: "20 posts/mo (including Reels/Shorts), Community Engagement, Ad setup",
          color: "text-[#BFCA16]",
        },
        {
          pkg: "Enterprise Omni",
          for: "Premium Brands & Corporates",
          cost: "₹75,000+ / mo",
          del: "High-end content production, influencer marketing, analytics & tracking",
          color: "text-black",
        },
      ],
    },
    comparisonTable: {
      title: "PELTOWN Custom SMM vs. Cheap Posting Agencies",
      desc: "Bespoke social storytelling versus generic template scheduling.",
      headers: ["Feature", "PELTOWN Strategy", "Low-cost Agencies"],
      rows: [
        {
          f: "Design Standard",
          c: "Custom branded graphic styles and illustration",
          d: "Stock templates used by thousands of other brands",
        },
        {
          f: "Short-form Reels / TikToks",
          c: "Scripted, shot, and dynamically edited videos",
          d: "Repurposed static slides or zero video content",
        },
        {
          f: "Lead & Engagement Tracking",
          c: "Monthly ROI reports tracking real conversions",
          d: "Vague vanity metrics (likes, impressions only)",
        },
      ],
    },
    process: {
      title: "Our Social Media Content Process",
      desc: "Creating visually engaging content campaigns designed to increase brand authority.",
      steps: [
        {
          num: "01",
          title: "Brand & Competitor Audit",
          desc: "Analyzing competitor channels, audience demographics, and visual graphic style gaps.",
        },
        {
          num: "02",
          title: "Content Grid Scheduling",
          desc: "Formulating a weekly scheduling calendar mapping static graphics, reels, and stories.",
        },
        {
          num: "03",
          title: "Scripting & Storyboarding",
          desc: "Drafting high-retention video script hooks and visual layouts for creative designs.",
        },
        {
          num: "04",
          title: "Multimedia Production",
          desc: "Shooting high-resolution video reels, styling illustrations, and composing copywriting layouts.",
        },
        {
          num: "05",
          title: "Publish & Algorithm Tuning",
          desc: "Deploying posts with optimized descriptions, local search hashtags, and custom cover grids.",
        },
        {
          num: "06",
          title: "Metrics Analysis & Review",
          desc: "Reviewing weekly engagement rates, follower conversion stats, and adjusting visual guidelines.",
        },
      ],
    },
    logoBanner: {
      subtitle: "Mastering Every Platform",
      tools: [
        { name: "Meta Business", icon: MessageSquare },
        { name: "Instagram Grid", icon: BookImage },
        { name: "YouTube", icon: Video },
        { name: "Pinterest", icon: PenTool },
        { name: "Buffer Hub", icon: LayoutGrid },
        { name: "X (Twitter)", icon: Search },
      ],
    },
    bannerDetail: {
      tag: "The SMM Lifecycle",
      title: "From Audit to Virality",
      desc: "We don't just post; we execute a calculated plan to ensure your brand stands out in the noise.",
      btnText: "Get Your Blueprint",
      steps: [
        {
          num: "01",
          title: "Audit & Persona",
          desc: "Defining your ideal customer.",
          icon: BarChart3,
        },
        {
          num: "02",
          title: "Content Strategy",
          desc: "Planning calendars & formats.",
          icon: Map,
        },
        {
          num: "03",
          title: "Distribution",
          desc: "Posting & Paid Promotion.",
          icon: Settings2,
        },
        {
          num: "04",
          title: "Engagement",
          desc: "Building relationship & sales.",
          icon: TrendingUp,
        },
      ],
    },
  },

  "digital-marketing": {
    hero: {
      tagline: "360° Solutions",
      title: "Digital Marketing",
      description:
        "Grow your online presence with integrated SEO, PPC, and content strategies focused on ROI.",
      ctaText: "Get a Strategy",
    },
    definition: {
      title: "Paid Acquisition Engineering",
      subtitle: "Maximize Return on Ad Spend (ROAS) with Precision Targeting",
      desc: "We focus on the bottom line. By designing high-converting ad creatives, targeting lookalike audiences, deploying remarketing flows, and setting up strict conversion tracking dashboards, we ensure every rupee in ad spend works to acquire real buyers.",
    },
    audience: {
      title: "Comprehensive Marketing Solutions",
      desc: "We combine data-driven strategies with creative campaigns to drive real growth.",
      list: [
        {
          title: "PPC Advertising",
          desc: "Paid campaigns on Google and Social Media for instant traffic and leads. We optimize ad spend to maximize your Return on Ad Spend (ROAS).",
          icon: Megaphone,
        },
        {
          title: "Brand Strategy",
          desc: "Defining your unique value proposition and voice. We help you stand out in the crowded market by storytelling that connects with your audience.",
          icon: Lightbulb,
        },
        {
          title: "Lead Generation",
          desc: "Strategies to attract, nurture, and convert customized prospects into loyal customers using high-converting landing pages and automated email sequences.",
          icon: Mails,
        },
        {
          title: "SEO Optimization",
          desc: "Improve your organic ranking on Google. We perform technical audits, keyword research, and on-page optimization to bring long-term organic traffic.",
          icon: Search,
        },
        {
          title: "Content Marketing",
          desc: "Creating valuable blogs, videos, and infographics that educate your audience, build authority, and drive engagement across all channels.",
          icon: Pen,
        },
        {
          title: "Analytics & Reporting",
          desc: "Transparency is key. We provide detailed monthly reports tracking KPIs like traffic, engagement, and conversions so you know exactly where your money is going.",
          icon: TrendingUp,
        },
      ],
    },
    features: {
      title: "Our Digital Growth Funnel",
      desc: "A systematic approach to turning strangers into brand advocates.",
      list: [
        {
          title: "Attract",
          icon: Eye,
          desc: "Use SEO, PPC, and Social Media to bring relevant traffic to your site.",
        },
        {
          title: "Engage",
          icon: MessageSquare,
          desc: "Use compelling content and UX to keep visitors interested and interacting.",
        },
        {
          title: "Convert",
          icon: ShoppingCart,
          desc: "Turn visitors into customers with persuasive copy and seamless checkout flows.",
        },
        {
          title: "Retain",
          icon: Heart,
          desc: "Build loyalty through email marketing, support, and remarketing campaigns.",
        },
      ],
    },
    deepDive: {
      title: "Technical Deep-Dive: Tracking & Attribution",
      tabs: [
        {
          name: "Server-Side Tracking",
          title: "Server-Side Tagging vs Browser-Side Pixels",
          content:
            "Browser-side cookies are blocked by modern privacy protections and ad blockers, leading to incomplete campaign data. By setting up server-side conversion tracking relays (Google Tag Manager Server Container), we route client conversions directly from the server to Meta and Google, restoring attribution accuracy.",
        },
        {
          name: "Attribution Models",
          title: "First-Touch vs Multi-Touch Lead Attribution",
          content:
            "We configure advanced attribution reporting to evaluate customer journeys. First-touch models highlight top-of-funnel discovery campaigns, while multi-touch algorithms distribute conversion credit across email follow-ups, search retargeting, and direct visits.",
        },
      ],
    },
    costTable: {
      title: "Performance Marketing Packages (2026 Breakdown)",
      desc: "Data-driven advertising campaigns that maximize Return on Ad Spend (ROAS).",
      headers: [
        "Package",
        "Ideal For",
        "Estimated Investment",
        "Key Deliverables",
      ],
      rows: [
        {
          pkg: "Leads Accelerator",
          for: "B2B & Service Companies",
          cost: "₹30,000 – ₹45,000 / mo",
          del: "Google/Meta Ads Setup, Landing Page Optimization, Lead Tracking",
          color: "text-black",
        },
        {
          pkg: "Scale Ecommerce",
          for: "Online Stores",
          cost: "₹50,000 – ₹80,000 / mo",
          del: "Shopping Ads, Retargeting Funnels, Catalog Setup, Conversion API",
          color: "text-[#BFCA16]",
        },
        {
          pkg: "Performance Enterprise",
          for: "High Ad-Spend Businesses",
          cost: "₹1L+ / mo",
          del: "Dedicated media buyer, creative variations testing, full funnel setup",
          color: "text-black",
        },
      ],
    },
    comparisonTable: {
      title: "Performance Marketing vs. Boost Campaigns",
      desc: "Why strategic funnel-building conversion models deliver superior ROI.",
      headers: ["Feature", "PELTOWN Funnels", "Basic Boost Ad Agencies"],
      rows: [
        {
          f: "Conversion Tracking",
          c: "Server-side GTM setup, iOS 14+ resilient tracking",
          d: "Basic pixel setup with lost attribution",
        },
        {
          f: "Ad Copy & Design",
          c: "Custom high-conversion copy, dynamic creatives",
          d: "Single standard image without variations",
        },
        {
          f: "Audience Funneling",
          c: "Lookalike, Custom LTV, and precise custom segmentation",
          d: "Broad interest targeting with wasted ad budget",
        },
      ],
    },
    process: {
      title: "Our Performance Marketing Process",
      desc: "A scientific methodology to build target lead pipelines and optimize your Return on Ad Spend (ROAS).",
      steps: [
        {
          num: "01",
          title: "Funnel Target Structuring",
          desc: "Defining cost-per-acquisition metrics, landing page actions, and business goals.",
        },
        {
          num: "02",
          title: "Audience Profiling & Research",
          desc: "Mapping demographic filters, search query intent layers, and custom lookalike lists.",
        },
        {
          num: "03",
          title: "High-Conversion Creative Dev",
          desc: "Designing dynamic ad variations, writing hook headlines, and structuring call-to-actions.",
        },
        {
          num: "04",
          title: "Tracking & Conversion API Sync",
          desc: "Setting up server-side conversion tracking to prevent attribution losses under iOS privacy limits.",
        },
        {
          num: "05",
          title: "A/B Testing & Optimization",
          desc: "Running ad variations, analyzing performance data, and closing down unprofitable segments.",
        },
        {
          num: "06",
          title: "Budget Scaling & Funnels",
          desc: "Increasing budgets on winning ad configurations and deploying retargeting sequences to convert drop-offs.",
        },
      ],
    },
  },

  "gmb-services": {
    hero: {
      tagline: "Local SEO",
      title: "Google My Business",
      description:
        "Optimize your Google Business Profile to rank higher in local map and search results.",
      ctaText: "Claim Your Local Rankings",
    },
    definition: {
      title: "Local Map Optimization",
      subtitle: "Connect Instantly with Searchers Near You",
      desc: "When customers search for services 'near me' or in Delhi NCR, Google displays map pack results first. We optimize your Google Business Profile with structured reviews, geographical location tags, optimized local keywords, and automated posting schemas to drive calls and store visits.",
    },
    audience: {
      title: "Driving Foot Traffic & Direct Calls",
      desc: "Crucial local strategies for physical stores, local service providers, and regional corporate hubs.",
      list: [
        {
          title: "Physical Retailers & Dining",
          desc: "Drive walk-ins and table bookings to your physical location with clear photos and reviews optimization.",
          icon: MapPin,
        },
        {
          title: "On-Site Service Providers",
          desc: "Position plumbers, clinics, and localized agencies at the top of geographic search regions.",
          icon: Settings,
        },
        {
          title: "Regional Showrooms",
          desc: "Enable easy mapping directions, operational hours updates, and local messaging hubs for buyers.",
          icon: Users,
        },
      ],
    },
    features: {
      title: "Local Map Pack Visibility Modules",
      desc: "Increase regional traffic, direct inquiries, and physical location visits in Delhi NCR.",
      list: [
        {
          title: "Review Generation Setup",
          icon: Sparkles,
          desc: "Integrate QR-code review links and automate messaging sequences requesting customer feedback to boost ratings.",
        },
        {
          title: "Geographic Coordinate Tagging",
          icon: MapPin,
          desc: "Embed physical coordinate metadata inside corporate photos and uploads to strengthen regional search signals.",
        },
        {
          title: "Local Business Schema Markup",
          icon: Code,
          desc: "Implement correct localized schema codes, operational hours syncs, and services markup to help search crawlers.",
        },
        {
          title: "Competitor Ranking Audits",
          icon: Search,
          desc: "Analyze competitor local ranking parameters, citation directories, and search density factors to outrank local players.",
        },
      ],
    },
    deepDive: {
      title: "Technical Deep-Dive: Map Algorithm Signals",
      tabs: [
        {
          name: "Citation Consistency",
          title: "NAP Consistency Across Citation Directories",
          content:
            "Google Map ranking algorithms audit regional directory data. Having matching Name, Address, and Phone number (NAP) details across directories (Justdial, Sulekha, YellowPages) confirms search trust and lifts map results.",
        },
        {
          name: "Geo-Spatials & Coordinates",
          title: "Geographic Proximity Optimization",
          content:
            "We map target neighborhood profiles, embed EXIF geo-coordinate tags inside business images, and structure localized landing pages to signal to GMB algorithms that your corporate services cover specific regional radii.",
        },
      ],
    },
    costTable: {
      title: "Google My Business & Local SEO Cost (2026 Breakdown)",
      desc: "Dominate local map searches and attract customers right to your physical storefront.",
      headers: [
        "Package",
        "Ideal For",
        "Estimated Investment",
        "Key Deliverables",
      ],
      rows: [
        {
          pkg: "GMB Optimization",
          for: "Single Storefronts",
          cost: "₹10,000 – ₹15,000 / mo",
          del: "Profile setup, category audit, spam listing cleaning, 5 local posts",
          color: "text-black",
        },
        {
          pkg: "Maps Domination",
          for: "Competitive Service Areas",
          cost: "₹20,000 – ₹30,000 / mo",
          del: "Geo-targeted posts, local schema, citation building, review strategy",
          color: "text-[#BFCA16]",
        },
        {
          pkg: "Multi-Location Enterprise",
          for: "Chains & Franchises",
          cost: "₹45,000+ / mo",
          del: "Bulk GMB management, local brand consistency, API integration",
          color: "text-black",
        },
      ],
    },
    comparisonTable: {
      title: "PELTOWN Local Maps Strategy vs. Profile Setup Agencies",
      desc: "Active daily/weekly maps rank tracking versus set-and-forget setup.",
      headers: ["Feature", "PELTOWN GMB Management", "One-Time Setup Agencies"],
      rows: [
        {
          f: "Maps Content Posting",
          c: "Regular geo-optimized posts and photo updates",
          d: "Done once, profiles become inactive over time",
        },
        {
          f: "Review Response Strategy",
          c: "SEO-optimized review responses targeting keywords",
          d: "No responses or automated generic templates",
        },
        {
          f: "Spam Competitor Removal",
          c: "Active reporting of fake competitors keyword stuffing",
          d: "No competitor monitoring or reporting",
        },
      ],
    },
    process: {
      title: "Our Local Map Pack Ranking Process",
      desc: "We focus on positioning your physical profile at the top of local maps pack searches.",
      steps: [
        {
          num: "01",
          title: "Profile Auditing & Verification",
          desc: "Optimizing listing information, category alignments, and resolving verification errors.",
        },
        {
          num: "02",
          title: "Geo-Coordinate Tagging",
          desc: "Embedding coordinate tags inside product images and storefront uploads to define service areas.",
        },
        {
          num: "03",
          title: "Directory Citation Syncs",
          desc: "Synchronizing matching Name, Address, and Phone (NAP) details across local citation directories.",
        },
        {
          num: "04",
          title: "Review Campaigns Optimization",
          desc: "Designing automated outreach prompts and review QR-codes to generate keyword-rich reviews.",
        },
        {
          num: "05",
          title: "Map Spam Monitoring",
          desc: "Auditing competitor listings, identifying spammy keyword stuffing, and reporting fake competitor tags.",
        },
        {
          num: "06",
          title: "Local Conversion Analytics",
          desc: "Monitoring directions requests, map views, direct calls, and website clicks monthly.",
        },
      ],
    },
  },

  "service-photoshoot": {
    hero: {
      tagline: "Visual Excellence",
      title: "Photoshoot Services",
      description:
        "High-quality photography that helps your business stand out online. From product photography and corporate shoots to social media content and brand campaigns, Peltown Studio creates visuals that capture attention and build trust.",
      ctaText: "Book a Photoshoot",
    },
    definition: {
      title: "Photography That Helps Your Business Grow",
      subtitle: "Serving Businesses Across Delhi, Noida, Gurgaon, Faridabad & Ghaziabad",
      desc: "A great product or service deserves great visuals. Whether you're launching a new brand, selling products online, updating your company profile, or creating content for social media, professional photography helps create a stronger first impression. At Peltown Studio, we provide end-to-end photoshoot solutions including planning, styling, shooting, editing, and delivery of optimized images for websites, social media, advertisements, marketplaces, and marketing campaigns.",
    },
    audience: {
      title: "Photography Services We Offer",
      desc: "We offer a comprehensive range of photography styles to suit every brand aesthetic and marketplace requirement.",
      list: [
        {
          title: "Product Photography",
          desc: "Professional product photography for e-commerce stores, Amazon & Flipkart listings, Shopify websites, social media campaigns, and catalogs. We create clean, high-resolution images that showcase your products from every angle.",
          icon: Camera,
        },
        {
          title: "Corporate Photography",
          desc: "Build a professional image with corporate headshots, team photography, office photography, LinkedIn profile photos, and leadership portraits. Perfect for company websites and marketing materials.",
          icon: Users,
        },
        {
          title: "Brand & Lifestyle Photography",
          desc: "Showcase your brand story through creative visuals including lifestyle shoots, brand campaigns, marketing creatives, social media content, and promotional photography that connects emotionally with customers.",
          icon: BookImage,
        },
        {
          title: "Food Photography",
          desc: "Professional food photography for restaurants, cafes, cloud kitchens, food brands, and delivery platforms. Make your dishes look irresistible with studio-quality food photography.",
          icon: UtensilsCrossed,
        },
        {
          title: "Fashion Photography",
          desc: "For clothing brands, fashion startups, designers, boutiques, and e-commerce stores. Includes model shoots, catalog photography, lookbooks, and social media content.",
          icon: Shirt,
        },
        {
          title: "Event Photography",
          desc: "Capture important business events including corporate events, product launches, conferences, seminars, award ceremonies, and exhibitions. Professional event coverage provides valuable marketing content.",
          icon: PartyPopper,
        },
      ],
    },
    features: {
      title: "Why Choose Peltown Studio?",
      desc: "We don't just click photos. We create visuals aligned with your business and marketing goals.",
      list: [
        {
          title: "Strategic Approach",
          icon: Target,
          desc: "Every photoshoot is backed by a creative strategy aligned with your brand's marketing goals, target audience, and visual identity standards.",
        },
        {
          title: "Professional Editing",
          icon: Layers,
          desc: "Every image goes through meticulous color correction, skin retouching, background cleaning, and optimization before final delivery.",
        },
        {
          title: "Fast Turnaround",
          icon: Zap,
          desc: "Receive professionally edited, high-resolution images within agreed timelines. Most projects delivered within 3–10 business days.",
        },
        {
          title: "Multi-Platform Ready",
          icon: Globe,
          desc: "Images optimized for websites, social media, Google Ads, Amazon, Flipkart, brochures, and print media — ready to deploy everywhere.",
        },
      ],
    },
    deepDive: {
      title: "Technical Deep-Dive: Digital Asset Standards",
      tabs: [
        {
          name: "Resolution & Color Space",
          title: "sRGB Web Standard Color Calibration",
          content:
            "We capture assets in RAW format and export them calibrated to the standard sRGB color space. This prevents product color shifts when viewed on different phone or laptop screens, ensuring customers receive exact color matches.",
        },
        {
          name: "Image Compression APIs",
          title: "Next-Gen WebP and AVIF Formatting",
          content:
            "High-resolution product photos can slow down your site's load speed. We run automated script pipelines to compress and convert image assets into WebP or AVIF formats, preserving print-grade visual detail while reducing file size.",
        },
      ],
    },
    costTable: {
      title: "Photoshoot Packages (2026 Pricing)",
      desc: "Final pricing depends on location, duration, number of products, models, equipment requirements, editing, and production complexity.",
      headers: [
        "Package",
        "Price Range",
      ],
      rows: [
        {
          values: ["Basic Product Photoshoot", "₹8,000 – ₹15,000"],
          color: "text-black",
        },
        {
          values: ["Ecommerce Product Shoot (50 Products)", "₹15,000 – ₹35,000"],
          color: "text-[#BFCA16]",
        },
        {
          values: ["Corporate Headshots", "₹10,000 – ₹25,000"],
          color: "text-black",
        },
        {
          values: ["Food Photography", "₹12,000 – ₹30,000"],
          color: "text-[#BFCA16]",
        },
        {
          values: ["Fashion Photoshoot", "₹20,000 – ₹75,000"],
          color: "text-black",
        },
        {
          values: ["Brand Campaign Shoot", "₹30,000 – ₹1,50,000+"],
          color: "text-[#BFCA16]",
        },
        {
          values: ["Event Photography", "₹15,000 – ₹60,000"],
          color: "text-black",
        },
        {
          values: ["Custom Commercial Shoot", "Custom Quote"],
          color: "text-[#BFCA16]",
        },
      ],
    },
    comparisonTable: {
      title: "Professional Production vs. Amateur Freelancers",
      desc: "Compare clean, calibrated studio photography with generic amateur setups.",
      headers: ["Feature", "PELTOWN Professional Crew", "Amateur Freelancers"],
      rows: [
        {
          f: "Equipment Standard",
          c: "High-end studio strobe systems, medium-format cameras",
          d: "Standard DSLR with natural/on-camera flash",
        },
        {
          f: "Color Grading",
          c: "Strict color calibration for e-commerce accuracy",
          d: "Over-filtered or inaccurate color representations",
        },
        {
          f: "Concept Storyboarding",
          c: "Full mood boards, location scouting, styling support",
          d: "Showing up with no preset strategy or guidance",
        },
      ],
    },
    process: {
      title: "Our Commercial Photoshoot Process",
      desc: "A structured end-to-end workflow from concept to delivery.",
      steps: [
        {
          num: "01",
          title: "Discovery Call",
          desc: "Understanding your business goals, target audience, brand aesthetics, and specific shoot requirements.",
        },
        {
          num: "02",
          title: "Shoot Planning",
          desc: "Location scouting, style direction, mood board creation, equipment selection, and schedule planning.",
        },
        {
          num: "03",
          title: "Professional Photoshoot",
          desc: "Executing the photography session with experienced creatives, high-end strobe systems, and calibrated cameras.",
        },
        {
          num: "04",
          title: "Editing & Retouching",
          desc: "Enhancement, color grading, skin retouching, background cleaning, and visual optimization.",
        },
        {
          num: "05",
          title: "Final Delivery",
          desc: "High-resolution and web-optimized files delivered digitally via secure download links, ready for all platforms.",
        },
        {
          num: "06",
          title: "Post-Shoot Support",
          desc: "Access to our team for any questions regarding image usage, file formats, or future shoot planning.",
        }
      ],
    },
  },

  "service-branding": {
    hero: {
      tagline: "Identity & Design",
      title: "Branding Services in Delhi NCR That Build Trust & Recognition",
      description:
        "Your brand is more than a logo. It's how customers see, remember, and trust your business. Peltown Studio helps startups, local businesses, and growing companies create powerful brand identities that stand out in competitive markets.",
      ctaText: "Build My Brand",
    },
    definition: {
      title: "Create a Brand Customers Remember",
      subtitle: "A professional brand identity builds credibility, creates trust, and helps your business stand out.",
      desc: "In today's digital world, customers form an opinion about your business within seconds. Whether you're launching a startup, rebranding an existing business, or expanding into new markets, Peltown Studio creates branding solutions that align with strategy, creativity, and market research to ensure your brand looks professional across websites, social media, packaging, and marketing materials.",
    },
    audience: {
      title: "What We Offer",
      desc: "From logo design and brand strategy to complete visual identity systems, we help businesses build brands that attract customers and support long-term growth.",
      list: [
        {
          title: "Brand Strategy",
          desc: "Before designing anything, we help define your brand: positioning, competitor analysis, target audience research, brand messaging, and voice development. A strong strategy ensures growth.",
          icon: Target,
        },
        {
          title: "Logo Design",
          desc: "We create modern, corporate, minimalist, luxury, and e-commerce logos designed to work across digital/print. Includes primary/secondary variations, icon version, high-res & source files.",
          icon: PenTool,
        },
        {
          title: "Visual Identity Design",
          desc: "Create a consistent and professional brand appearance. Includes brand color palette, typography selection, design system, graphic elements, patterns, and visual guidelines.",
          icon: Palette,
        },
        {
          title: "Brand Guidelines",
          desc: "Ensure consistency across every platform. Includes logo usage rules, color & typography guidelines, social media, and brand voice guidelines. Perfect for teams & agencies.",
          icon: BookImage,
        },
        {
          title: "Social Media Branding",
          desc: "Build a professional presence across social platforms (Instagram, Facebook, LinkedIn, X, YouTube). Includes profile branding, covers, templates, post systems, and content branding.",
          icon: LayoutGrid,
        },
        {
          title: "Corporate Branding",
          desc: "Professional branding for growing businesses, B2B companies, and startups. Includes business card, letterhead, company profile, email signature, and presentation templates.",
          icon: Building2,
        },
        {
          title: "Packaging & Product Branding",
          desc: "For product-based businesses and e-commerce brands. Includes custom product packaging design, labels, box packaging, product inserts, and complete packaging systems.",
          icon: Package,
        },
      ],
    },
    features: {
      title: "Why Businesses Choose Peltown Studio",
      desc: "We focus on strategic outcomes, not just attractive designs, delivering scalable systems that adapt as you grow.",
      list: [
        {
          title: "Strategy-Driven Branding",
          desc: "We focus on real business outcomes, ensuring every visual decision aligns with your market positioning, not just attractive designs.",
          icon: Target,
        },
        {
          title: "Startup-Friendly Approach",
          desc: "We understand the unique challenges faced by startups and growing businesses, offering scalable, high-impact branding solutions.",
          icon: Rocket,
        },
        {
          title: "Consistent Brand Systems",
          desc: "Your brand remains highly professional and cohesive across websites, social media, print materials, packaging, and advertising.",
          icon: Layers,
        },
        {
          title: "Scalable Identity",
          desc: "We build flexible design systems and brand guidelines that easily adapt and grow alongside your business as you expand.",
          icon: Sparkles,
        },
        {
          title: "Complete Digital Integration",
          desc: "Since we also build websites, mobile apps, and marketing campaigns, your brand assets integrate seamlessly across all digital touchpoints.",
          icon: Globe,
        },
      ],
    },
    deepDive: {
      title: "Technical Deep-Dive: Asset Design Delivery",
      tabs: [
        {
          name: "Vector Scalability",
          title: "SVG and AI Vector Design Systems",
          content:
            "We construct all brand graphics as mathematical vectors (AI, EPS, SVG). Unlike raster formats (PNG, JPG), vector graphics scale infinitely without pixelation, guaranteeing your brand lines remain sharp on small favicons and giant outdoor displays.",
        },
        {
          name: "Color Model Calibration",
          title: "Pantone (PMS) vs CMYK vs RGB Color Profiling",
          content:
            "We calibrate colors across standard systems: RGB for web screens, CMYK for standard office printers, and Pantone Matching System (PMS) for premium product packaging, guaranteeing that your brand colors look identical across physical print and digital screens.",
        },
      ],
    },
    costTable: {
      title: "Branding Packages (2026 Pricing)",
      desc: "Comprehensive branding packages tailored to launch new brands and scale growing enterprises.",
      headers: [
        "Package",
        "Ideal For",
        "Estimated Investment",
        "Key Deliverables",
      ],
      rows: [
        {
          pkg: "Starter Branding Package",
          for: "Startups & New Brands",
          cost: "₹15,000 – ₹25,000",
          del: "Logo Design, Brand Colors, Typography Selection, Basic Brand Guidelines",
          color: "text-black",
        },
        {
          pkg: "Business Branding Package",
          for: "Growing Businesses",
          cost: "₹35,000 – ₹75,000",
          del: "Brand Strategy, Logo Design, Visual Identity, Business Card Design, Social Media Branding, Brand Guidelines",
          color: "text-[#BFCA16]",
        },
        {
          pkg: "Premium Brand Identity Package",
          for: "Established Enterprises",
          cost: "₹75,000 – ₹2,00,000+",
          del: "Complete Brand Strategy, Advanced Visual Identity, Corporate Branding, Packaging Design, Social Media System, Brand Guidelines, Marketing Assets",
          color: "text-black",
        },
        {
          pkg: "Startup Launch Package",
          for: "Newly Launched Ventures",
          cost: "₹50,000+",
          del: "Branding, Website Design, Social Media Setup, Company Profile Design",
          color: "text-[#BFCA16]",
        },
      ],
    },
    comparisonTable: {
      title: "Strategic Branding vs. Quick Logo Generators",
      desc: "Why tailored visual storytelling builds long-term customer loyalty.",
      headers: [
        "Feature",
        "PELTOWN Custom Identity",
        "Logo Contests / Generators",
      ],
      rows: [
        {
          f: "Market Placement",
          c: "Deep competitor gap analysis & audience alignment",
          d: "Zero research; visual aesthetics are randomly assigned",
        },
        {
          f: "File Deliverables",
          c: "Fully responsive layouts, print-ready source files",
          d: "Raster templates or unoptimized SVG vectors",
        },
        {
          f: "Originality Guarantee",
          c: "100% custom vectors created from scratch",
          d: "Risks using stock graphics already registered elsewhere",
        },
      ],
    },
    process: {
      title: "Our Branding Process",
      desc: "We engineer memorable design systems that express your brand's core values.",
      steps: [
        {
          num: "01",
          title: "Discovery & Research",
          desc: "Understanding your business, audience, competitors, and goals to build a solid baseline.",
        },
        {
          num: "02",
          title: "Strategy Development",
          desc: "Creating a branding direction and guidelines based on market positioning and gap analysis.",
        },
        {
          num: "03",
          title: "Concept Creation",
          desc: "Developing custom, scalable logo concepts and unique visual identity options.",
        },
        {
          num: "04",
          title: "Refinement & Feedback",
          desc: "Collaborative revision cycles to refine and finalize the best design direction.",
        },
        {
          num: "05",
          title: "Brand System Development",
          desc: "Creating rules, guidelines, typographic systems, and final brand assets.",
        },
        {
          num: "06",
          title: "Final Delivery",
          desc: "Providing all final source files and print-ready formats ready for seamless implementation.",
        },
      ],
    },
  },

  "bulk-email": {
    hero: {
      tagline: "Grow Your Reach",
      title: "Bulk Email Marketing Services in Delhi NCR",
      description:
        "Reach thousands of customers instantly with professional bulk email campaigns that drive engagement, generate leads, and increase sales. Peltown Studio helps businesses across Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad create, manage, and optimize bulk email marketing campaigns that deliver measurable results.",
      ctaText: "Start Email Campaign",
    },
    definition: {
      title: "Turn Emails Into Customers",
      subtitle: "Email marketing remains one of the most cost-effective digital marketing channels for businesses of all sizes.",
      desc: "A well-planned email campaign helps you stay connected with existing customers, nurture leads, promote products, and increase repeat business. At Peltown Studio, we provide complete bulk email solutions including strategy, email design, content creation, list management, campaign setup, automation, and performance tracking to help your business generate more leads and sales.",
    },
    audience: {
      title: "Our Bulk Email Services",
      desc: "We design and execute targeted email marketing strategies to engage your users and drive sales.",
      list: [
        {
          title: "Promotional Campaigns",
          desc: "Promote products, services, and special offers with professionally designed campaigns. Ideal for product launches, seasonal promotions, discounts, and sales announcements.",
          icon: Megaphone,
        },
        {
          title: "Newsletter Management",
          desc: "Keep your audience informed and engaged with monthly newsletters, company updates, industry insights, educational content, and event announcements.",
          icon: Mails,
        },
        {
          title: "Lead Nurturing",
          desc: "Convert potential customers into paying clients with automated email sequences, welcome series, follow-ups, and customer education emails.",
          icon: Users,
        },
        {
          title: "E-commerce Email Marketing",
          desc: "Increase customer retention and sales with product recommendations, abandoned cart recovery, order follow-ups, and upsell campaigns for top platforms.",
          icon: ShoppingCart,
        },
        {
          title: "Corporate Email Campaigns",
          desc: "Maintain professional communication for growing businesses with company announcements, client updates, investor relations, and event invitations.",
          icon: Building2,
        },
        {
          title: "Event & Webinar Marketing",
          desc: "Drive registrations and attendance with event invitations, reminder emails, confirmations, follow-up campaigns, and feedback collection.",
          icon: Video,
        },
      ],
    },
    features: {
      title: "Why Choose Peltown Studio?",
      desc: "We don't just send emails. We combine technical expertise, strategic copywriting, and analytics to ensure your campaigns deliver results.",
      list: [
        {
          title: "Strategy Before Sending",
          desc: "We focus on business outcomes, designing custom email campaigns aligned directly with your marketing and growth objectives.",
          icon: Target,
        },
        {
          title: "Professional Email Design",
          desc: "Responsive and visually appealing email templates coded to display perfectly on both desktop and mobile screens.",
          icon: PenTool,
        },
        {
          title: "Better Deliverability",
          desc: "Proper cryptographic setup of SPF, DKIM, and DMARC records to maximize primary inbox placement and reduce spam risks.",
          icon: Lock,
        },
        {
          title: "Data-Driven Optimization",
          desc: "Continuous monitoring and A/B testing of headlines, copy, and layout styling to scale open and click rates.",
          icon: BarChart3,
        },
        {
          title: "Complete Digital Support",
          desc: "As a full-service agency, we seamlessly integrate your email campaigns with your website, CRM, mobile app, and marketing ads.",
          icon: Globe,
        },
      ],
    },
    deepDive: {
      title: "Technical Deep-Dive: Infrastructure & Workflows",
      tabs: [
        {
          name: "Smart Automation",
          title: "Automated Workflows that Save Time & Drive Conversion",
          content:
            "We build automated email sequences triggered by user behaviors: Welcome series, Lead Follow-ups, Customer Onboarding, Birthday & Anniversary greetings, Re-engagement campaigns, Abandoned Cart recovery, and Customer Feedback requests. Automation communicates consistently without manual effort.",
        },
        {
          name: "Supported Platforms",
          title: "Campaign Management Across Top Email Systems",
          content:
            "We create and manage campaigns using industry-leading tools like Mailchimp, Brevo (Sendinblue), MailerLite, Zoho Campaigns, HubSpot, ActiveCampaign, Amazon SES, and custom SMTP solutions. We also integrate email campaigns directly with your CRM, website, and mobile apps.",
        },
        {
          name: "Technical Setup",
          title: "SPF, DKIM, and DMARC Authentication Setup",
          content:
            "To ensure high deliverability and prevent your emails from landing in the spam folder, we perform full cryptographic domain verification (SPF, DKIM, DMARC), set up dedicated SMTP servers, monitor sender reputation, and execute gradual IP warm-up routines.",
        },
      ],
    },
    costTable: {
      title: "Bulk Email Marketing Packages",
      desc: "Reach thousands of prospects directly with custom setup or managed newsletters.",
      headers: [
        "Package",
        "Ideal For",
        "Estimated Investment",
        "Key Deliverables",
      ],
      rows: [
        {
          pkg: "Starter Package",
          for: "Small Businesses starting email campaigns",
          cost: "₹8,000 / month",
          del: "Up to 2 Campaigns Monthly, Basic Email Design, Audience Segmentation, Performance Report",
          color: "text-black",
        },
        {
          pkg: "Growth Package",
          for: "Growing Brands expanding reach",
          cost: "₹18,000 / month",
          del: "Up to 6 Campaigns Monthly, Custom Email Templates, Audience Segmentation, A/B Testing, Monthly Analytics Report",
          color: "text-[#BFCA16]",
        },
        {
          pkg: "Business Package",
          for: "Mid-Sized Businesses needing automation",
          cost: "₹35,000 / month",
          del: "Unlimited Campaign Management, Marketing Automation, Lead Nurturing Workflows, CRM Integration, Advanced Reporting",
          color: "text-black",
        },
        {
          pkg: "Enterprise Solution",
          for: "Enterprise clients with large databases",
          cost: "₹60,000+ / month",
          del: "Dedicated Strategy, Advanced Automation, Large Volume Infrastructure, Custom Integrations, Dedicated Account Management",
          color: "text-[#BFCA16]",
        },
        {
          pkg: "Bulk Email Infrastructure Setup",
          for: "One-Time Infrastructure configuration",
          cost: "₹15,000 – ₹75,000",
          del: "SMTP Setup, Amazon SES Configuration, Domain Authentication (SPF, DKIM, DMARC Setup), Deliverability Optimization",
          color: "text-black",
        },
      ],
    },
    comparisonTable: {
      title:
        "Custom Bulk Email Setup vs. Shared Mailer Pools (Mailchimp/Sendgrid)",
      desc: "Control your domain reputation and delivery rates at fraction of the cost.",
      headers: ["Feature", "PELTOWN Custom Setup", "Shared Platform Pools"],
      rows: [
        {
          f: "Pricing Model",
          c: "One-time setup fee + low server hosting costs",
          d: "Tiered pricing that escalates as database size grows",
        },
        {
          f: "IP Reputation",
          c: "Dedicated IP solely used by your brand",
          d: "Shared IPs frequently blacklisted by other users' spam",
        },
        {
          f: "Template Restrictions",
          c: "100% custom code, no hidden tracking footprints",
          d: "Rigid templates containing platform branding",
        },
      ],
    },
    process: {
      title: "Our Process",
      desc: "A structured, end-to-end workflow designed to maximize inbox placement and campaign performance.",
      steps: [
        {
          num: "01",
          title: "Requirement Analysis",
          desc: "We dive deep to understand your business goals, target audience demographics, and past campaign performance.",
        },
        {
          num: "02",
          title: "Strategy Development",
          desc: "Planning campaign objectives, messaging calendars, user targeting lists, and specific call-to-actions.",
        },
        {
          num: "03",
          title: "Design & Content Creation",
          desc: "Designing responsive, on-brand templates and crafting persuasive copy tailored to drive conversion.",
        },
        {
          num: "04",
          title: "Campaign Setup",
          desc: "Configuring subscriber lists, custom segmentations, automation flows, and conversion tracking pixels.",
        },
        {
          num: "05",
          title: "Launch & Monitor",
          desc: "Executing the broadcast while monitoring delivery logs, IP bounce metrics, and initial open activity.",
        },
        {
          num: "06",
          title: "Reporting & Optimization",
          desc: "Analyzing click heatmaps, unsubscribe requests, and conversions to optimize the next campaign cycle.",
        },
      ],
    },
  },

  "whatsapp-api": {
    hero: {
      tagline: "Instant Messaging",
      title: "Official WhatsApp API Solutions for Businesses in Delhi NCR",
      description:
        "Automate customer communication, generate leads, send notifications, and provide instant support with the Official WhatsApp Business API. Peltown Studio helps businesses across Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad implement WhatsApp API solutions that improve customer engagement, increase sales, and streamline operations.",
      ctaText: "Get WhatsApp API Setup",
    },
    definition: {
      title: "Turn WhatsApp Into a Sales & Support Channel",
      subtitle: "Connect with customers on the platform they prefer every single day.",
      desc: "Your customers already use WhatsApp every day. Instead of asking them to fill forms or send emails, connect with them directly. The Official WhatsApp Business API enables businesses to automate conversations, send order updates, generate and nurture leads, run marketing campaigns, provide customer support, and integrate WhatsApp with CRM and business software.",
    },
    audience: {
      title: "Our WhatsApp API Services",
      desc: "From chatbot automation to seamless CRM integrations, we build complete WhatsApp-powered systems.",
      list: [
        {
          title: "API Setup & Verification",
          desc: "Complete setup including WhatsApp Business Account (WABA) registration, Meta Business Manager verification assistance, phone number configuration, API setup, template approval, and profile setup.",
          icon: MessageCircle,
        },
        {
          title: "WhatsApp Chatbots",
          desc: "Provide instant responses 24/7. Automated FAQs, lead qualification flows, appointment booking calendars, order tracking, and AI-powered workflows to reduce wait times.",
          icon: Bot,
        },
        {
          title: "CRM Integration",
          desc: "Connect WhatsApp directly with HubSpot, Salesforce, Zoho CRM, ERP systems, or custom lead management platforms to automatically sync conversations and client data.",
          icon: Database,
        },
        {
          title: "Lead Gen Automation",
          desc: "Capture and convert leads directly from WhatsApp using Click-to-WhatsApp ads, interactive qualification flows, automated follow-ups, and sales pipeline tracking.",
          icon: Target,
        },
        {
          title: "WhatsApp Marketing",
          desc: "Reach customers with targeted promotional messages, product launches, event invitations, and festival campaigns with higher engagement and open rates.",
          icon: Megaphone,
        },
        {
          title: "Alerts & Notifications",
          desc: "Keep customers informed automatically with order confirmations, shipping updates, payment reminders, OTP verification codes, and service notifications.",
          icon: Radio,
        },
        {
          title: "Shared Team Inbox",
          desc: "Allow multiple team members to manage chats from a single WhatsApp number. Multi-agent support, internal notes, conversation tracking, and analytics dashboards.",
          icon: Users,
        },
      ],
    },
    features: {
      title: "Why Choose Peltown Studio?",
      desc: "Most providers only sell API access. We develop complete WhatsApp-powered systems integrated with your business processes.",
      list: [
        {
          title: "We Build, Not Just Resell",
          desc: "We develop complete WhatsApp-powered systems integrated with your website, CRM, ERP, mobile app, and business processes.",
          icon: Cpu,
        },
        {
          title: "Custom Development Expertise",
          desc: "We build custom automation workflows, tailored webhook listeners, and chatbot dialog trees based on your requirements.",
          icon: Code,
        },
        {
          title: "Official API Solutions",
          desc: "We implement solutions using official WhatsApp Business Platform technologies and best practices, keeping your numbers secure.",
          icon: Lock,
        },
        {
          title: "End-to-End Support",
          desc: "From registration and verification assistance to template management, automation setups, and ongoing maintenance.",
          icon: RefreshCw,
        },
        {
          title: "Scalable Infrastructure",
          desc: "Whether you handle 100 conversations or 100,000 conversations per month, we build systems that scale seamlessly with your needs.",
          icon: Sparkles,
        },
      ],
    },
    deepDive: {
      title: "Technical Deep-Dive: Meta API Endpoints",
      tabs: [
        {
          name: "Official API Webhooks",
          title: "Real-Time Message Events & Webhooks Routing",
          content:
            "We link Meta's Cloud API endpoints to custom webhooks on your server. When a client sends a message, Meta triggers a webhook payload containing text, coordinates, or media, allowing immediate routing to CRM databases.",
        },
        {
          name: "Opt-In & Consent Flows",
          title: "Securing User Consent & Meta Template Rules",
          content:
            "To protect your number from spam reports, we configure automated opt-in mechanisms (website widgets, SMS replies). Outbound notifications are limited to pre-approved templates matching Meta's categorization rules.",
        },
      ],
    },
    costTable: {
      title: "WhatsApp API Packages",
      desc: "Automate chats, send transactional alerts, and support customers on WhatsApp.",
      headers: [
        "Package",
        "Ideal For",
        "Estimated Investment",
        "Key Deliverables",
      ],
      rows: [
        {
          pkg: "Starter Setup",
          for: "Businesses starting API messaging",
          cost: "₹15,000 – ₹25,000",
          del: "WhatsApp Business API Setup, Meta Verification Assistance, 5 approved templates, basic automation",
          color: "text-black",
        },
        {
          pkg: "Business Package",
          for: "Growing brands needing CRM sync",
          cost: "₹35,000 – ₹75,000",
          del: "API setup, CRM integration, lead capture automation, shared team inbox, analytics dashboard",
          color: "text-[#BFCA16]",
        },
        {
          pkg: "Growth Package",
          for: "High-volume marketing campaigns",
          cost: "₹75,000 – ₹1,50,000",
          del: "Advanced automation, multi-agent setup, custom workflows, marketing campaign integration, API development",
          color: "text-black",
        },
        {
          pkg: "Enterprise Solution",
          for: "Complex system integrations",
          cost: "₹2,00,000+",
          del: "Custom WhatsApp platform, ERP/CRM integration, AI Chatbot development, advanced reporting, dedicated support",
          color: "text-[#BFCA16]",
        },
        {
          pkg: "Monthly Management",
          for: "Continuous support and campaigns",
          cost: "₹8,000 – ₹50,000 / month",
          del: "Campaign management, Meta template management, automation monitoring, technical support",
          color: "text-black",
        },
      ],
    },
    comparisonTable: {
      title: "Official WhatsApp Cloud API vs. Unofficial Chrome Plugins",
      desc: "Why official integrations are crucial to prevent number banning.",
      headers: ["Feature", "Official Meta Cloud API", "Unofficial Web Plugins"],
      rows: [
        {
          f: "Number Banning Risk",
          c: "Zero risk - fully approved Meta partner API",
          d: "Extremely high risk - numbers banned within hours",
        },
        {
          f: "Interactive Automation",
          c: "Complex interactive lists, quick replies, and AI bots",
          d: "Basic text replies easily marked as automated spam",
        },
        {
          f: "Broadcast Limits",
          c: "Send to unlimited users per day once warmed up",
          d: "Limited to small batches, slow sending speeds",
        },
      ],
    },
    process: {
      title: "Our Process",
      desc: "Setting up official Meta Business channels to automate support and alerts.",
      steps: [
        {
          num: "01",
          title: "Requirement Analysis",
          desc: "Understand your business goals, target audience, and specific communication workflows.",
        },
        {
          num: "02",
          title: "Solution Planning",
          desc: "Designing conversation steps, database integrations, chatbot responses, and agent routing.",
        },
        {
          num: "03",
          title: "API Setup",
          desc: "Provisioning official phone numbers and configuring WhatsApp Business API and Meta Business assets.",
        },
        {
          num: "04",
          title: "Development & Integration",
          desc: "Connecting the WhatsApp APIs directly to your CRM, website, databases, and workflow pipelines.",
        },
        {
          num: "05",
          title: "Testing & Launch",
          desc: "Verifying interactive message flows, template callbacks, auto-replies, and notification triggers.",
        },
        {
          num: "06",
          title: "Ongoing Support",
          desc: "Continuous workflow monitoring, template additions, database optimizations, and system updates.",
        },
      ],
    },
  },

  "email-solutions": {
    hero: {
      tagline: "Professional Identity",
      title: "Business Email",
      description:
        "Build credibility and communicate securely with custom professional domain emails.",
      ctaText: "Get Started",
    },
    definition: {
      title: "Enterprise Email Solutions",
      subtitle: "Professional Custom Domain Mail with Advanced SPAM Filters",
      desc: "Avoid generic @gmail or @yahoo email addresses that hurt business credibility. We configure secure email hosting on your custom domain, establish Google Workspace / MS 365 syncing, implement spam filters, and deploy corporate security policies.",
    },
    audience: {
      title: "Establishing Professional Credibility",
      desc: "Crucial communications setup for operations teams, startups, and growing enterprise groups.",
      list: [
        {
          title: "Your Brand, Your Email",
          desc: "Build instant credibility with a branded email address that matches your domain.",
          icon: AtSign,
        },
        {
          title: "Ironclad Protection",
          desc: "State-of-the-art encryption, anti-phishing protocols, and spam filters to keep your inbox safe.",
          icon: ShieldCheck,
        },
        {
          title: "Work Anywhere",
          desc: "Real-time synchronization across all your devices—mobile, tablet, and desktop.",
          icon: RefreshCw,
        },
        {
          title: "Scalable Storage",
          desc: "Start with generous quotas and expand effortlessly as your team grows.",
          icon: Database,
        },
      ],
    },
    features: {
      title: "Enterprise Email Architecture Deliverables",
      desc: "Ensure spam-free, secure, and professional email communications across your organization.",
      list: [
        {
          title: "Secure Workspace Sync",
          icon: Lock,
          desc: "Provision business emails on Google Workspace or Microsoft 365 with unified corporate drive access.",
        },
        {
          title: "SMTP/IMAP Server Relays",
          icon: Server,
          desc: "Set up SMTP credentials for site notification routing, invoice triggers, and system notifications.",
        },
        {
          title: "Advanced Spam Safeguards",
          icon: ShieldAlert,
          desc: "Implement network filters to screen incoming emails for ransomware link addresses, spoof domains, and malware.",
        },
        {
          title: "Group Aliases & Routing Rules",
          icon: Settings,
          desc: "Create generic department mailboxes (e.g. sales@, info@) with automated distribution groups.",
        },
      ],
    },
    deepDive: {
      title: "Technical Deep-Dive: Enterprise Email Security",
      tabs: [
        {
          name: "Workspace Provisioning",
          title: "Google Workspace and MS 365 Cloud Directory Sync",
          content:
            "We set up custom DNS MX records to route business mail through Google or Microsoft cloud directories. This enables single-sign-on (SSO), automated user provisioning, and full mobile device management security policies.",
        },
        {
          name: "Incoming Spam Filtering",
          title: "DNS Blacklisting & Spam Gateway Integrations",
          content:
            "We configure secondary security gateways (such as Proofpoint or Barracuda) to scan incoming emails before they reach employee folders, blocking phishing URLs, attachment scripts, and domain spoofing attempts.",
        },
      ],
    },
    costTable: {
      title: "Business Email Setup Pricing (2026 Breakdown)",
      desc: "Secure, professional, custom domain business email solutions for teams.",
      headers: [
        "Package",
        "Ideal For",
        "Estimated Investment",
        "Key Deliverables",
      ],
      rows: [
        {
          pkg: "Corporate Essentials",
          for: "Small Teams (1-5 users)",
          cost: "₹5,000 – ₹10,000",
          del: "Domain link, SPF/DKIM/DMARC setup, desktop mail clients setup",
          color: "text-black",
        },
        {
          pkg: "Google Workspace / M365",
          for: "Growing Companies",
          cost: "₹15,000 + License fees",
          del: "DNS management, migration of old inbox data, admin dashboard setup",
          color: "text-[#BFCA16]",
        },
        {
          pkg: "Enterprise Secure Mail",
          for: "Healthcare/Finance",
          cost: "₹35,000+",
          del: "Custom mail server, email archival, DLP policy setup",
          color: "text-black",
        },
      ],
    },
    comparisonTable: {
      title: "Professional Custom Domain Setup vs. Free Mail Providers",
      desc: "Why a professional custom domain email is crucial for business credibility.",
      headers: [
        "Feature",
        "PELTOWN Custom Business Mail",
        "Free Providers (Gmail/Yahoo)",
      ],
      rows: [
        {
          f: "Client Perception",
          c: "Custom address (e.g. contact@yourbrand.com)",
          d: "Generic address (e.g. yourbrand@gmail.com)",
        },
        {
          f: "Spam & Phishing Security",
          c: "DKIM/DMARC aligned preventing domain spoofing",
          d: "No protection against hackers spoofing your name",
        },
        {
          f: "Deliverability",
          c: "High sender score, bypasses client spam filters",
          d: "Often classified as promotional or junk mail",
        },
      ],
    },
    process: {
      title: "Our Enterprise Mail Setup Process",
      desc: "We configure custom domain mail setups backed by secure cloud infrastructure.",
      steps: [
        {
          num: "01",
          title: "Domain MX Records Audit",
          desc: "Auditing domain DNS records to prepare for mail hosting transitions.",
        },
        {
          num: "02",
          title: "Cloud Suite Provisioning",
          desc: "Setting up admin controls inside Google Workspace or Microsoft 365 dashboards.",
        },
        {
          num: "03",
          title: "User Directory Setup",
          desc: "Creating corporate email directories, aliases, and department distribution lists.",
        },
        {
          num: "04",
          title: "Inbox Data Migration",
          desc: "Migrating historical inbox data, folders, and contact records from old hosts.",
        },
        {
          num: "05",
          title: "SPF/DKIM/DMARC Configuration",
          desc: "Writing authentication records to prevent domain spoofing and verify outbound mail.",
        },
        {
          num: "06",
          title: "Admin Panel Handoff",
          desc: "Delivering secure admin control configurations, passwords, and custom user support.",
        },
      ],
    },
  },
};
