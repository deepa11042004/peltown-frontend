import { FAQItemType } from "@/Components/Home/FAQSec";

export const FAQ_CONTENT: Record<string, FAQItemType[]> = {
  // Service Pages
  "whatsapp-api": [
    {
      question: "Is WhatsApp API different from WhatsApp Business App?",
      answer: "Yes. The API is designed for businesses that need automation, integrations, team access, and large-scale messaging capabilities.",
    },
    {
      question: "Can you integrate WhatsApp with our website?",
      answer: "Yes. We can connect WhatsApp with websites, CRMs, ERPs, e-commerce stores, and custom software.",
    },
    {
      question: "Can multiple employees use one WhatsApp number?",
      answer: "Yes. Shared inbox functionality allows multiple team members to manage conversations from the same business number.",
    },
    {
      question: "Can WhatsApp send automated notifications?",
      answer: "Yes. Businesses can send approved template messages for orders, appointments, payments, OTPs, and other notifications.",
    },
    {
      question: "Is WhatsApp API free?",
      answer: "No. Meta charges based on messaging categories and usage. Additional setup and management costs may apply depending on requirements.",
    },
  ],

  "custom-crm": [
    {
      question: "Why should we choose a custom CRM over off-the-shelf software like Salesforce or HubSpot?",
      answer: "Off-the-shelf CRMs often include features you don't need while charging expensive monthly per-user licensing fees. A custom CRM developed by PELTOWN is tailored to your exact workflows, grants you complete ownership of your database, and has zero recurring monthly per-user costs.",
    },
    {
      question: "Can a custom CRM integrate with our existing ERP or third-party APIs?",
      answer: "Absolutely. We build custom CRM systems that seamlessly sync with your current accounting tools, ERPs, corporate emails, WhatsApp APIs, and lead generation channels.",
    },
    {
      question: "How secure is our database in a custom CRM?",
      answer: "Security is our top priority. We use strict encryption protocols, role-based access controls, and host your database on secure, isolated cloud servers with regular automated backups.",
    },
  ],

  "erp-system": [
    {
      question: "What business operations can be integrated into a custom ERP system?",
      answer: "We can integrate inventory management, supply chain tracking, human resources, payroll, customer billing, sales operations, and real-time dashboard analytics into a single unified dashboard.",
    },
    {
      question: "How long does it take to develop and deploy a custom ERP?",
      answer: "Because of the complexity, custom ERP development typically takes between 8 to 16 weeks, which includes extensive workflow mapping, database design, user testing, and staff training phases.",
    },
    {
      question: "Do you provide training and support after the ERP is launched?",
      answer: "Yes, we provide hands-on training sessions for your staff, comprehensive user documentation, and dedicated post-launch technical support to ensure a smooth transition.",
    },
  ],

  "email-solutions": [
    {
      question: "Why do I need a professional business email?",
      answer: "A professional email address builds trust, improves brand image, and creates a more credible business presence.",
    },
    {
      question: "Which is better: Google Workspace or Microsoft 365?",
      answer: "Both are excellent platforms. The right choice depends on your business workflow, collaboration needs, and existing software ecosystem.",
    },
    {
      question: "Can you migrate our existing emails?",
      answer: "Yes. We can safely migrate emails, contacts, calendars, and folders from most email providers.",
    },
    {
      question: "Do you provide email security setup?",
      answer: "Yes. We configure SPF, DKIM, DMARC, anti-spam protection, and security policies to improve protection and deliverability.",
    },
    {
      question: "Can you integrate email with our CRM?",
      answer: "Yes. We can connect your email system with CRM software, websites, mobile applications, and business tools.",
    },
  ],

  "web-development": [
    {
      question: "What are your charges for custom web development services?",
      answer: "Pricing depends on project scope, custom functionalities (like e-commerce, user portals), and design complexity. Contact PELTOWN for a customized quote tailored to your business goals.",
    },
    {
      question: "Will my website be mobile-friendly and optimized for SEO?",
      answer: "Yes. Every website we build is fully responsive across all screen sizes and structured following modern search engine optimization best practices for fast load times and indexing.",
    },
    {
      question: "Can we manage the website content ourselves after it is launched?",
      answer: "Yes, we integrate easy-to-use Content Management Systems (CMS) like WordPress, Sanity, or headless solutions so you can edit text, upload products, and manage media without any coding.",
    },
  ],

  "digital-marketing": [
    {
      question: "Which digital marketing channels will work best for my business?",
      answer: "It depends on your target audience. B2B businesses usually benefit most from SEO, LinkedIn campaigns, and Google Ads, while B2C brands see higher engagement through Meta Ads, Instagram campaigns, and influencer marketing.",
    },
    {
      question: "How long does it take to see tangible results from digital marketing campaigns?",
      answer: "Paid campaigns (Google/Meta Ads) can generate traffic and leads almost instantly. Organic channels like SEO and content marketing typically require 3 to 6 months to build domain authority and show consistent organic growth.",
    },
    {
      question: "Do you provide monthly reports on performance and spend?",
      answer: "Yes, we provide detailed monthly reports tracking key metrics like click-through rates, cost per lead, conversion rates, and return on ad spend (ROAS) to ensure complete transparency.",
    },
  ],

  "seo-optimization": [
    {
      question: "What is SEO, and why is it important for my website?",
      answer: "Search Engine Optimization (SEO) involves optimizing your website's content, structure, and speed to rank higher on search engines like Google. High search rankings bring free, high-intent organic traffic to your business.",
    },
    {
      question: "How long does it take to rank on the first page of Google?",
      answer: "SEO is a long-term strategy. Depending on keyword competitiveness, target location, and your website's history, it usually takes between 3 to 9 months to achieve stable page-one rankings.",
    },
    {
      question: "Do you perform local SEO for Google Maps listings?",
      answer: "Yes. We specialize in Local SEO and Google My Business (GMB) optimization to ensure your company appears in the 'Map Pack' when local customers search for your services.",
    },
  ],

  "bulk-email": [
    {
      question: "How many emails can you send?",
      answer: "The volume depends on your email platform, infrastructure, and subscriber list size. We can support campaigns ranging from hundreds to hundreds of thousands of emails.",
    },
    {
      question: "Do you provide email lists?",
      answer: "No. We only work with permission-based subscriber lists to maintain compliance and protect deliverability.",
    },
    {
      question: "Will my emails go to spam?",
      answer: "We implement proper authentication, deliverability best practices, and list management techniques to maximize inbox placement.",
    },
    {
      question: "Can you integrate with our CRM?",
      answer: "Yes. We can integrate email campaigns with CRM systems, websites, mobile apps, and business software.",
    },
    {
      question: "Do you create email content?",
      answer: "Yes. We provide complete email copywriting, design, and campaign management services.",
    },
  ],

  "mobile-app": [
    {
      question: "Do you develop apps for both iOS and Android platforms?",
      answer: "Yes. We develop cross-platform mobile apps using frameworks like React Native or Flutter, allowing you to launch high-performance apps on both iOS and Android from a single codebase.",
    },
    {
      question: "Can you help publish the app to the Apple App Store and Google Play Store?",
      answer: "Yes, we manage the entire publishing process, ensuring that the app meets all Apple and Google developer guidelines and submission requirements.",
    },
    {
      question: "How do you handle mobile app updates and maintenance?",
      answer: "We offer continuous maintenance packages to update your app for new iOS/Android versions, optimize performance, fix bugs, and implement new features.",
    },
  ],

  "service-branding": [
    {
      question: "Why is branding important for my business?",
      answer: "Strong branding helps customers recognize, trust, and remember your business, increasing credibility and customer loyalty.",
    },
    {
      question: "Can you redesign our existing brand?",
      answer: "Yes. We offer complete rebranding services for businesses looking to modernize their identity.",
    },
    {
      question: "Do you provide logo-only services?",
      answer: "Yes, but we recommend a complete branding package for long-term consistency and growth.",
    },
    {
      question: "Will I receive source files?",
      answer: "Yes. All final branding packages include editable source files and high-resolution formats.",
    },
    {
      question: "Can branding be integrated into our website and marketing?",
      answer: "Yes. Since Peltown Studio also provides website development, app development, SEO, and digital marketing services, we ensure brand consistency across all platforms.",
    },
  ],

  "social-media": [
    {
      question: "What social media platforms do you manage?",
      answer: "We manage and create content for all major social channels, including Instagram, Facebook, LinkedIn, YouTube, and X (Twitter), tailoring the content strategy for each platform.",
    },
    {
      question: "Do you create the posts, videos, and graphics yourself?",
      answer: "Yes. Our creative team designs all post graphics, writes engaging captions, and edits vertical videos/reels. We prepare a monthly content calendar for your approval before anything is posted.",
    },
    {
      question: "How often do you post on our social media handles?",
      answer: "Posting frequency depends on your package. We typically recommend 3 to 5 high-quality posts per week, including reels and stories, to maintain active engagement.",
    },
  ],

  "service-photoshoot": [
    {
      question: "Do you provide photoshoots outside Delhi?",
      answer: "Yes. We serve clients across Delhi NCR including Noida, Gurgaon, Faridabad, and Ghaziabad.",
    },
    {
      question: "Do you provide models for fashion shoots?",
      answer: "Yes. Models, makeup artists, stylists, and creative direction can be arranged based on project requirements.",
    },
    {
      question: "How long does delivery take?",
      answer: "Most projects are delivered within 3–10 business days depending on scope.",
    },
    {
      question: "Can you shoot at our office or location?",
      answer: "Yes. We offer both studio and on-site photography services.",
    },
  ],

  "gmb-services": [
    {
      question: "How does Google My Business (GMB) SEO help my local business?",
      answer: "GMB optimization ensures your business appears in local Google Maps searches when customers nearby look for your services. This drives direct calls, website visits, and physical store visits.",
    },
    {
      question: "How do you optimize a GMB profile for local ranking?",
      answer: "We optimize your GMB business category, write keyword-rich business descriptions, set up local citations, geotag uploaded photos, help implement a review acquisition strategy, and post weekly updates.",
    },
    {
      question: "Can you help recover a suspended GMB listing?",
      answer: "Yes. If your listing has been suspended, we audit the profile to identify compliance issues, fix the errors, and assist in submitting reinstatement requests to Google.",
    },
  ],

  // General / Site Pages
  home: [
    {
      question: "What services does PELTOWN offer?",
      answer: "PELTOWN is a full-service digital agency offering custom web and mobile app development, CRM/ERP solutions, custom domain business email setups, WhatsApp API integrations, digital marketing, SEO, and professional photoshoot services.",
    },
    {
      question: "Where is PELTOWN located?",
      answer: "We are based in Delhi NCR, India, and serve clients globally, helping businesses streamline operations and build powerful online identities.",
    },
    {
      question: "How can we get a project estimate?",
      answer: "You can reach out to us through our contact forms, email, or WhatsApp. We will schedule a discovery call to understand your needs and provide a tailored proposal.",
    },
  ],

  about: [
    {
      question: "What is PELTOWN's mission?",
      answer: "Our mission is to empower businesses with high-end, scalable software solutions and digital marketing strategies that fuel growth, optimize workflows, and build lasting digital brand footprints.",
    },
    {
      question: "How long has PELTOWN been in business?",
      answer: "We have been partner-engineering custom solutions and digital marketing systems for several years, helping startups and enterprises scale their digital operations.",
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes. We work with clients across different regions including India, the Middle East, the US, and Europe, adapting solutions to localized market demands.",
    },
  ],

  services: [
    {
      question: "Do you offer custom package deals for multiple services?",
      answer: "Yes. If you need web development, branding, and SEO together, we create custom bundled packages offering better pricing and a unified project execution timeline.",
    },
    {
      question: "Can we start with one service and scale up later?",
      answer: "Absolutely. Many clients start with custom web development or branding and later scale into SEO, WhatsApp API integration, and CRM/ERP systems as their operations grow.",
    },
    {
      question: "How are project payments structured?",
      answer: "Payments are typically structured around project milestones (e.g., initial kickoff, design approval, development phase, final launch) to ensure complete alignment and trust.",
    },
  ],

  "about-faqs": [
    {
      question: "How is this FAQ page organized?",
      answer: "This page lists answers to the most common queries regarding our software development, branding, photoshoots, and digital marketing services. For specific details, visit the individual service pages.",
    },
    {
      question: "Can we contact you if our question is not listed here?",
      answer: "Yes! Feel free to reach out directly through our contact page or via the quick WhatsApp chat button for instant support.",
    },
  ],

  "products/ecommerce-suite": [
    {
      question: "Can you build a platform similar to Shopify?",
      answer: "Yes. We can develop custom SaaS commerce platforms and multi-tenant e-commerce solutions tailored specifically to your business workflows.",
    },
    {
      question: "Do I own the source code?",
      answer: "Yes. Unlike subscription-based platforms, you own the platform source code, database, and infrastructure with zero monthly lock-ins.",
    },
    {
      question: "Can you integrate ERP and CRM systems?",
      answer: "Yes. We provide custom integrations for ERP, CRM, inventory management, accounting, and custom business automation tools.",
    },
    {
      question: "Is the platform SEO-friendly?",
      answer: "Yes. Every PELTOWN platform is developed following SEO best practices (fast load times, clean code structure, schema markups, and responsive indexing).",
    },
    {
      question: "Can the platform support multiple vendors?",
      answer: "Yes. Multi-vendor marketplace configurations are supported out of the box, allowing multiple sellers to sell on your storefront.",
    },
  ],

  "products/omnichannel-crm": [
    {
      question: "What is an Omnichannel CRM?",
      answer: "An Omnichannel CRM combines customer interactions from multiple communication channels into a single platform, helping businesses maintain complete customer context and deliver consistent experiences."
    },
    {
      question: "How is Omnichannel CRM different from traditional CRM?",
      answer: "Traditional CRMs mainly focus on customer records and sales activities. Omnichannel CRM connects customer interactions from email, WhatsApp, social media, phone calls, and other channels into one customer journey."
    },
    {
      question: "Can it integrate with WhatsApp Business API?",
      answer: "Yes. Peltown CRM can integrate with WhatsApp Business API, email systems, websites, and other communication channels."
    },
    {
      question: "Can the CRM automate follow-ups?",
      answer: "Yes. Automated reminders, email sequences, WhatsApp workflows, and lead nurturing campaigns can be configured."
    },
    {
      question: "Do you provide custom CRM development?",
      answer: "Yes. We build fully customized CRM platforms tailored to specific industries and workflows."
    }
  ],

  "products/quick-commerce": [
    {
      question: "Can you build a platform similar to Blinkit or Zepto?",
      answer: "Yes. We develop complete quick commerce ecosystems including customer apps, dark store management, inventory systems, delivery tracking, and analytics.",
    },
    {
      question: "Can the platform support multiple cities?",
      answer: "Yes. The system is designed for multi-city and multi-store operations.",
    },
    {
      question: "Do I own the source code?",
      answer: "Yes. You retain ownership of the platform, infrastructure, and customer data.",
    },
    {
      question: "Can you integrate ERP and CRM systems?",
      answer: "Yes. We provide custom integrations for ERP, CRM, accounting, and operational systems.",
    },
    {
      question: "Can the platform support 10–30 minute delivery models?",
      answer: "Yes. The architecture is designed around dark stores, optimized inventory management, and real-time delivery operations.",
    },
  ],

  "products/cloud-pos": [
    {
      question: "Can the system manage multiple stores?",
      answer: "Yes. You can manage multiple outlets, warehouses, and inventory locations from a centralized dashboard."
    },
    {
      question: "Does it support GST billing?",
      answer: "Yes. GST invoices, tax reports, and compliance-ready billing are included."
    },
    {
      question: "Can I use it on mobile devices?",
      answer: "Yes. The platform works on mobile phones, tablets, desktops, and laptops."
    },
    {
      question: "Does it work without internet?",
      answer: "Yes. Offline functionality can be implemented with automatic synchronization once connectivity is restored."
    },
    {
      question: "Can it integrate with my website?",
      answer: "Yes. Peltown Cloud POS can integrate with e-commerce stores, marketplaces, CRM systems, WhatsApp, and accounting software."
    }
  ],

  "products/fleet-delivery": [
    {
      question: "Can the platform track vehicles in real time?",
      answer: "Yes. The suite provides live GPS fleet tracking with geofencing, route history playback, speed alerts, and route deviation indicators."
    },
    {
      question: "Does it support route optimization?",
      answer: "Yes. Our intelligent routing algorithms optimize multi-stop delivery routes dynamically to reduce fuel consumption and travel times."
    },
    {
      question: "What is Electronic Proof of Delivery (ePOD)?",
      answer: "ePOD enables delivery drivers to capture customer digital signatures, photos of drop-offs, and QR/GPS confirmation stamps to avoid disputes."
    },
    {
      question: "Can it integrate with existing ERP and accounting systems?",
      answer: "Yes. We offer custom integrations with corporate ERPs, CRM networks, accounting platforms, WhatsApp templates, and SMS alert gateways."
    },
    {
      question: "Is there a mobile application for drivers?",
      answer: "Yes, a dedicated Driver Mobile App (Android/iOS) is included for dynamic route navigation, delivery status logs, and electronic proof captures."
    }
  ],

  "products/hrms-payroll": [
    {
      question: "Can the software integrate with biometric machines?",
      answer: "Yes. We support biometric devices, fingerprint systems, face recognition systems, and attendance machines."
    },
    {
      question: "Can employees mark attendance through mobile phones?",
      answer: "Yes. GPS-based attendance and mobile check-in functionality are available."
    },
    {
      question: "Does the system support payroll processing?",
      answer: "Yes. Payroll processing, salary structures, payslips, deductions, and compliance calculations are included."
    },
    {
      question: "Can it manage multiple branches?",
      answer: "Yes. Multi-branch workforce management is fully supported."
    },
    {
      question: "Is the software suitable for remote teams?",
      answer: "Yes. The platform supports hybrid, remote, and field workforce management."
    }
  ],

  "products/invoicing-billing": [
    {
      question: "Can the software generate GST invoices?",
      answer: "Yes. GST-compliant invoices with CGST, SGST, and IGST support are included."
    },
    {
      question: "Can customers pay directly from invoices?",
      answer: "Yes. Payment gateway integrations allow customers to make payments through invoice links."
    },
    {
      question: "Can it automate recurring billing?",
      answer: "Yes. Monthly, quarterly, annual, and subscription billing can be automated."
    },
    {
      question: "Does it support multiple branches?",
      answer: "Yes. Multi-branch billing and centralized reporting are supported."
    },
    {
      question: "Can it integrate with ERP and CRM systems?",
      answer: "Yes. We provide integration with ERP, CRM, HRMS, e-commerce platforms, and payment gateways."
    }
  ]
};
