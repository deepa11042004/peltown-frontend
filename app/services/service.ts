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
} from "lucide-react";

export const SERVICES_CONTENT: Record<string, SectionConfig> = {
  "erp-system": {
    hero: {
      tagline: "Intelligent Automation",
      title:
        "ERP Development Company India: Custom Cloud ERP Solutions for Scaling Enterprises",
      description:
        "Eliminate disconnected systems. Centralize your data and operations with future-proof, AI-integrated enterprise software built specifically for your workflows.",
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
      title: "Mobile App Development Company in Delhi",
      description:
        "Turn your business ideas into reality with our custom mobile application development services for iOS and Android. We build AI-powered, high-performing, and secure apps ready for global scalability.",
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
      title: "Custom CRM Development India",
      description:
        "Build a customer relationship management system tailored specifically to your unique workflows. Eliminate recurring per-user licensing fees and own your data.",
      ctaText: "Get Your Free CRM Quote",
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
      title: "AI-Driven SEO Strategies",
      description:
        "Stop guessing and start ranking. We combine data-driven insights with advanced AI tools to boost your visibility, drive organic traffic, and maximize ROI.",
      ctaText: "Get Free Audit",
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
      tagline: "Viral Growth & Brand Loyalty",
      title: "AI-Powered Social Media Marketing",
      description:
        "Transform your social presence into a revenue engine. We use AI-driven insights to create viral content, engage your audience, and build lasting community loyalty.",
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
      title: "Digital Marketing Services",
      description:
        "A holistic approach to online growth. We combine SEO, PPC, and Content Marketing to deliver measurable results.",
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
      title: "Google My Business Services",
      description:
        "Get discovered by local buyers in your city. We optimize your Google Business Profile to rank in the coveted local 3-pack search layout.",
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
      title: "Professional Product Photoshoot",
      description:
        "Capture your customers' attention with stunning product visuals. We provide high-quality photography that highlights every detail and boosts conversions.",
      ctaText: "Book a Session",
    },
    definition: {
      title: "High-Fidelity Visual Branding",
      subtitle: "Visual Communication Crafted for Premium Brands",
      desc: "Stock photos destroy trust. Our professional crew captures clean product shots, interior views, workspace environments, and high-fidelity corporate headshots tailored specifically to tell your brand story and fit your website layout.",
    },
    audience: {
      title: "Photography Services",
      desc: "We offer a range of photography styles to suit your brand aesthetic and marketplace requirements.",
      list: [
        {
          title: "E-commerce White Background",
          desc: "Clean, crisp, and high-resolution images on a pure white background. Essential for listing on Amazon, Flipkart, Myntra, and your own website. We ensure color accuracy and sharp details.",
          icon: Camera,
        },
        {
          title: "Creative Lifestyle Shots",
          desc: "Showcase your product in a real-world setting. We use creative props, textured backgrounds, and lighting to tell a story and help customers visualize the product in their lives.",
          icon: BookImage,
        },
        {
          title: "Model Photography",
          desc: "Add a human touch. Professional model shoots are perfect for apparel, jewelry, and lifestyle accessories. We handle casting, styling, and makeup to match your brand image.",
          icon: Users,
        },
        {
          title: "360-Degree Spins",
          desc: "Increase engagement and reduce returns. Interactive 360-degree product views allow customers to examine every angle, building confidence in their purchase decision.",
          icon: RefreshCw,
        },
      ],
    },
    features: {
      title: "Premium Visual Content Production Modules",
      desc: "Every photoshoot is managed by specialized directors to ensure premium brand standards.",
      list: [
        {
          title: "Studio Product Catalog Photography",
          icon: Camera,
          desc: "Capture high-definition studio shots of catalog items with clean white backgrounds or custom lifestyle prop arrangements.",
        },
        {
          title: "Workspace Environmental Captures",
          icon: Globe,
          desc: "Shoot environmental photographs of your office, factory setup, or retail space to highlight corporate culture.",
        },
        {
          title: "High-End Corporate Portfolios",
          icon: Users,
          desc: "Equip executive team leads with consistent, studio-lit, high-resolution business profile photographs.",
        },
        {
          title: "Professional Post-Production",
          icon: Layers,
          desc: "Color correction, skin retouching, background cleaning, and file optimization tailored for fast web rendering.",
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
      title: "Commercial Photoshoot Pricing in Delhi (2026 Breakdown)",
      desc: "High-end brand photography and video production that sets your brand apart.",
      headers: [
        "Package",
        "Ideal For",
        "Estimated Investment",
        "Key Deliverables",
      ],
      rows: [
        {
          pkg: "Studio Catalog",
          for: "E-commerce Catalog / Products",
          cost: "₹25,000 – ₹40,000",
          del: "Up to 15 products, clean white backgrounds, high-end editing",
          color: "text-black",
        },
        {
          pkg: "Creative Editorial",
          for: "Lifestyle Brands & Portfolios",
          cost: "₹50,000 – ₹80,000",
          del: "Model coordination, indoor/outdoor shoot, 50 edited images",
          color: "text-[#BFCA16]",
        },
        {
          pkg: "Enterprise Video & Photo",
          for: "Manufacturing & Corporate",
          cost: "₹1.2L+",
          del: "Corporate video, drone shots, team headshots, full event coverage",
          color: "text-black",
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
      desc: "Capturing high-end product photos and vertical video campaigns customized for web layouts.",
      steps: [
        {
          num: "01",
          title: "Concept Board Planning",
          desc: "Consulting on visual aesthetic directions, color palettes, prop selections, and styling requirements.",
        },
        {
          num: "02",
          title: "Scouting & Model Coordination",
          desc: "Sourcing models, booking studio schedules, and scouting lifestyle locations.",
        },
        {
          num: "03",
          title: "Shoot Production & Lighting",
          desc: "Executing the photoshoot utilizing high-end strobe systems and calibrated cameras.",
        },
        {
          num: "04",
          title: "Retouching & Color Grading",
          desc: "Editing visual assets, correcting color details, and removing surface imperfections.",
        },
        {
          num: "05",
          title: "Fast-Web Compression",
          desc: "Routing images through optimization tools to export WebP formats ready for page speeds.",
        },
        {
          num: "06",
          title: "Digital Delivery & Handoff",
          desc: "Delivering print-grade vector images and web-ready visual assets via secure download links.",
        },
      ],
    },
  },

  "service-branding": {
    hero: {
      tagline: "Identity & Design",
      title: "Branding & Packaging",
      description:
        "Your brand is more than just a logo. It's the feeling your customers get when they unbox your product. We help you create an unforgettable experience.",
      ctaText: "Start Branding",
    },
    definition: {
      title: "Bespoke Brand Identity Studio",
      subtitle: "Typography, Harmonious Colors, and Iconic Visual Design",
      desc: "Branding is the promise you make to your clients. We build unified design systems that define how your logo, typography, color palettes, marketing layouts, and packaging materials exist together to create an unforgettable corporate impression.",
    },
    audience: {
      title: "Brand Identity Services",
      desc: "Building cohesive brands that resonate with your audience and stand the test of time.",
      list: [
        {
          title: "Logo & Identity Design",
          desc: "We craft unique logos and complete visual identity systems including color palettes, typography, and usage guidelines. Your logo is the face of your brand; we make sure it's memorable.",
          icon: PenTool,
        },
        {
          title: "Product Packaging",
          desc: 'Stunning box and label designs that make unboxing a delight. We ensure your packaging stands out on the shelf and in delivery, creating an "Instagrammable" moment for your customers.',
          icon: Package,
        },
        {
          title: "Print Collateral",
          desc: "Business cards, thank you notes, stickers, and brochures that reinforce your brand value with every physical touchpoint. Consistency across print builds professional credibility.",
          icon: Layers,
        },
        {
          title: "Social Media Kit",
          desc: "Ready-to-use templates for Instagram, Facebook, and LinkedIn. We design profile covers, post templates, and story layouts to ensure your brand looks consistent across all digital channels.",
          icon: LayoutGrid,
        },
      ],
    },
    features: {
      title: "Our Branding Methodology",
      desc: "We follow a proven process to uncover your brand's true potential.",
      list: [
        {
          title: "Discovery",
          icon: Search,
          desc: "We dive deep into your business goals, target audience, and competitors to understand your unique position.",
        },
        {
          title: "Design",
          icon: PenTool,
          desc: "Our designers explore multiple creative directions, sketching and refining concepts until they perfectly capture your essence.",
        },
        {
          title: "Delivery",
          icon: Rocket,
          desc: "We deliver all final assets in print and web formats, along with a comprehensive brand guideline document.",
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
      title: "Corporate Branding Packages (2026 Breakdown)",
      desc: "Cohesive brand identities that resonate with your target audience and stand the test of time.",
      headers: [
        "Package",
        "Ideal For",
        "Estimated Investment",
        "Key Deliverables",
      ],
      rows: [
        {
          pkg: "Visual Starter",
          for: "Startups & Solopreneurs",
          cost: "₹25,000 – ₹40,000",
          del: "Logo design, color palette, typography guidelines",
          color: "text-black",
        },
        {
          pkg: "Full Brand Guidelines",
          for: "Growing Enterprises",
          cost: "₹50,000 – ₹90,000",
          del: "Logo variations, stationery, brand book, social templates",
          color: "text-[#BFCA16]",
        },
        {
          pkg: "Enterprise Brand Strategy",
          for: "Complete Rebranding",
          cost: "₹1.5L+",
          del: "Competitor research, naming, trademark prep, brand design roll-out",
          color: "text-black",
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
      title: "Our Visual Branding Design Process",
      desc: "We engineer memorable design systems that express your brand's core values.",
      steps: [
        {
          num: "01",
          title: "Brand Strategy & Naming",
          desc: "Researching target competitors, market positioning opportunities, and brand names.",
        },
        {
          num: "02",
          title: "Logo Concepts Design",
          desc: "Illustrating unique, modern logo variants scalable from icons to billboards.",
        },
        {
          num: "03",
          title: "Color & Typography Systems",
          desc: "Establishing readable primary font pairings and premium color palettes.",
        },
        {
          num: "04",
          title: "Stationery & Social Styling",
          desc: "Structuring business cards, letterheads, email footers, and templates.",
        },
        {
          num: "05",
          title: "Dielines & Product Packaging",
          desc: "Designing boxes, bags, labels, and physical packaging dieline templates.",
        },
        {
          num: "06",
          title: "Brand Guideline Handbook",
          desc: "Delivering a comprehensive PDF guide outlining exact layout usage rules.",
        },
      ],
    },
  },

  "bulk-email": {
    hero: {
      tagline: "Grow Your Reach",
      title: "Bulk Email Marketing Solutions",
      description:
        "Reach your audience effectively with our comprehensive bulk email services. Whether you need a web-based panel or personal desktop software, we have the right tool for you.",
      ctaText: "Get Started",
    },
    definition: {
      title: "Primary Inbox Deliverability",
      subtitle: "Bulk Emails That Land in the Inbox, Not Spam",
      desc: "Sending large volumes of emails requires deep technical setup. We configure custom domain records (SPF, DKIM, DMARC), set up dedicated SMTP servers, program automated list warming tools, and deploy dynamic content tools to maximize campaign open rates.",
    },
    audience: {
      title: "Why Choose Our Email Services?",
      desc: "Everything you need to create, send, and track successful email campaigns.",
      list: [
        {
          title: "Dedicated Admin Panel",
          desc: "Access a powerful web-based panel to manage your contact lists, schedule campaigns, and view real-time reports from anywhere.",
          icon: Layout,
        },
        {
          title: "Personal Software",
          desc: "Prefer desktop control? We provide specialized bulk email software content suited for high-volume senders requiring granular control.",
          icon: Monitor,
        },
        {
          title: "Email Templating System",
          desc: "Design beautiful emails with our drag-and-drop builder or use our pre-designed templates. No coding knowledge required.",
          icon: Palette,
        },
        {
          title: "Advanced Analytics",
          desc: "Track open rates, click-through rates, and bounces to understand your audience and optimize your future campaigns.",
          icon: BarChart3,
        },
        {
          title: "WhatsApp API Integration",
          desc: "Combine email with WhatsApp marketing. Use our official API integration to send notifications and promotional messages.",
          icon: MessageSquare,
        },
        {
          title: "Secure & Reliable",
          desc: "Our dedicated servers ensure high deliverability rates and secure handling of your varied customer data.",
          icon: ShieldCheck,
        },
      ],
    },
    features: {
      title: "High-Volume Email Delivery Infrastructure",
      desc: "Ensure broadcasts reach your target audience's primary folder folders.",
      list: [
        {
          title: "SPF, DKIM & DMARC Sync",
          icon: Lock,
          desc: "Configure secure domain-level authentication rules to authorize SMTP servers and verify sending credentials.",
        },
        {
          title: "Domain Warm-Up Routines",
          icon: Zap,
          desc: "Gradually scale daily sending volume using automated reply patterns to build email server IP reputation.",
        },
        {
          title: "List Cleanse & Verification",
          icon: Database,
          desc: "Filter out invalid emails, spam traps, and duplicate records to protect domain deliverability metrics.",
        },
        {
          title: "Dynamic Merge Fields",
          icon: Code,
          desc: "Personalize email headlines, user names, and purchase summaries dynamically using database query syncs.",
        },
      ],
    },
    deepDive: {
      title: "Technical Deep-Dive: Inbox Security Protocols",
      tabs: [
        {
          name: "SMTP Delivery Relays",
          title: "Dedicated IP vs Shared IP Relay SMTP Pools",
          content:
            "Shared SMTP relays expose your domain to blocklists caused by other senders. We set up dedicated IP pools and configure secondary domains to isolate transaction mails, ensuring bulk mail campaigns have maximum delivery rates.",
        },
        {
          name: "Email Security Schemas",
          title: "Configuring SPF, DKIM, and DMARC Authentications",
          content:
            "We set up SPF, DKIM, and DMARC TXT records inside your DNS. This cryptographically signs every outbound message, validating to receiving email servers (Gmail, Outlook) that the email is authenticated and not spoofed.",
        },
      ],
    },
    costTable: {
      title: "Bulk Email Marketing Cost (2026 Breakdown)",
      desc: "Reach thousands of prospects directly with custom setup or managed newsletters.",
      headers: [
        "Package",
        "Ideal For",
        "Estimated Investment",
        "Key Deliverables",
      ],
      rows: [
        {
          pkg: "SMTP Server Setup",
          for: "In-house Sales Teams",
          cost: "₹20,000 – ₹30,000",
          del: "PowerMTA/SMTP setup, IP warm-up guidelines, SPF/DKIM/DMARC configuration",
          color: "text-black",
        },
        {
          pkg: "Monthly Newsletters",
          for: "E-commerce & Lead Gen",
          cost: "₹15,000 – ₹25,000 / mo",
          del: "Copywriting, HTML design, list segmenting, analytics reports",
          color: "text-[#BFCA16]",
        },
        {
          pkg: "Enterprise High-Volume",
          for: "Large Databases",
          cost: "₹40,000+ / mo",
          del: "Dedicated IPs, custom automation funnels, delivery monitoring",
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
      title: "Our Bulk Email Delivery Process",
      desc: "A technical setup designed to maximize your domain sending reputation.",
      steps: [
        {
          num: "01",
          title: "SMTP Server Configuration",
          desc: "Setting up SMTP delivery relays and dedicated IP pools isolated from shared queues.",
        },
        {
          num: "02",
          title: "DNS Record Optimizations",
          desc: "Writing matching SPF, DKIM, and DMARC TXT configurations to verify domain authority.",
        },
        {
          num: "03",
          title: "Email List Cleanse",
          desc: "Filtering out invalid accounts, spam traps, and dead leads to prevent delivery bounce spikes.",
        },
        {
          num: "04",
          title: "Responsive HTML Templates",
          desc: "Coding email layouts with optimized CSS styles to display correctly across mail clients.",
        },
        {
          num: "05",
          title: "IP Warm-Up Campaigns",
          desc: "Executing gradual sending volume ramps to warm up IP addresses and secure inbox trust.",
        },
        {
          num: "06",
          title: "Broadcast & Tracking Analytics",
          desc: "Deploying campaigns, tracking metrics (open rates, link clicks), and refining bounce triggers.",
        },
      ],
    },
  },

  "whatsapp-api": {
    hero: {
      tagline: "Instant Communication",
      title: "WhatsApp Business API",
      description:
        "Connect with your customers on their favorite messaging app. Send automated notifications, provide support, and drive sales.",
      ctaText: "Get API Access",
    },
    definition: {
      title: "Conversational Automation Engine",
      subtitle: "Official Meta API Integrations with Intelligent Chatbots",
      desc: "Deliver instant support, broadcast order tracking updates, and automate sales conversations. By connecting the official WhatsApp Business API to custom dashboards, your team can manage chats collaboratively and deploy automated flows.",
    },
    audience: {
      title: "Frictionless Conversational Commerce",
      desc: "For companies aiming to minimize customer support wait times and drive instant client query resolutions.",
      list: [
        {
          title: "Official Access",
          desc: "We help you get verified and access the official WhatsApp Business API for scalable messaging.",
          icon: MessageCircle,
        },
        {
          title: "Chatbots",
          desc: "Automate responses and customer service with intelligent chatbots that work 24/7.",
          icon: Bot,
        },
        {
          title: "Broadcasts",
          desc: "Send promotional messages and updates to thousands of opted-in customers instantly.",
          icon: Radio,
        },
      ],
    },
    features: {
      title: "Conversational WhatsApp Integration Features",
      desc: "Unify lead routing, automation systems, and outbound marketing sequences on Meta's official network.",
      list: [
        {
          title: "Custom Chatbot Decision Trees",
          icon: Cpu,
          desc: "Deploy quick-reply menus, interactive buttons, and auto-reply scripts to qualify inbound customer queries.",
        },
        {
          title: "Shared Multi-Agent Inbox",
          icon: Users,
          desc: "Enable your customer support team to log in simultaneously to chat, assign tickets, and share resources.",
        },
        {
          title: "Meta Approved Templates",
          icon: Lock,
          desc: "Create utility, marketing, and verification templates approved by Meta for outbound customer broadcasts.",
        },
        {
          title: "Analytical Response Boards",
          icon: BarChart3,
          desc: "Monitor outbound message delivery rates, read receipt percentages, and chatbot routing logs.",
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
      title: "WhatsApp API Integration Cost (2026 Breakdown)",
      desc: "Automate chats, send transactional alerts, and support customers on WhatsApp.",
      headers: [
        "Package",
        "Ideal For",
        "Estimated Investment",
        "Key Deliverables",
      ],
      rows: [
        {
          pkg: "WhatsApp Alerts",
          for: "Transactional Updates",
          cost: "₹15,000 – ₹25,000",
          del: "API integration, template approval support, status callbacks",
          color: "text-black",
        },
        {
          pkg: "AI Chatbot",
          for: "Support & Lead Qualification",
          cost: "₹35,000 – ₹60,000",
          del: "Custom flow builder, API triggers, agent handover panel",
          color: "text-[#BFCA16]",
        },
        {
          pkg: "Enterprise CRM Connect",
          for: "High-Volume Support Teams",
          cost: "₹75,000+",
          del: "Integration with CRM/ERP, automated broadcast scheduling, custom reports",
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
      title: "Our WhatsApp API Integration Process",
      desc: "Setting up official Meta Business channels to automate support and alerts.",
      steps: [
        {
          num: "01",
          title: "Meta Business Verification",
          desc: "Assisting in business profile verification to unlock access to the Cloud API.",
        },
        {
          num: "02",
          title: "Official API Access Setup",
          desc: "Provisioning official phone numbers and configuring API webhook endpoints.",
        },
        {
          num: "03",
          title: "Chatbot Flow Architecting",
          desc: "Drawing conversational decision trees, interactive menu options, and auto-reply routing.",
        },
        {
          num: "04",
          title: "Broadcast Template Approvals",
          desc: "Formatting marketing/utility templates matching Meta verification rules.",
        },
        {
          num: "05",
          title: "CRM & System Sync",
          desc: "Linking WhatsApp APIs directly into ERP/CRM backends for automated contact logs.",
        },
        {
          num: "06",
          title: "Live Handoff Routing",
          desc: "Deploying multi-agent support panels, chat transfer buttons, and analytics dashboards.",
        },
      ],
    },
  },

  "email-solutions": {
    hero: {
      tagline: "Professional Identity",
      title: "Establish Trust with Professional Business Email",
      description:
        "Secure, reliable, and branded email solutions powered by world-class leaders. Communicate with confidence using your own domain (you@yourcompany.com).",
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
