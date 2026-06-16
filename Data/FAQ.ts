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
      question: "Why do we need a custom domain email instead of using generic Gmail or Yahoo?",
      answer: "Custom domain emails (like name@yourbrand.com) instantly build professional credibility. They assure clients that you are a legitimate business, improve response rates, and prevent your emails from landing in spam folders.",
    },
    {
      question: "Can you help migrate our existing email data to Google Workspace or Office 365?",
      answer: "Yes, we handle the entire migration process. We migrate your existing mailboxes, folders, and contact history securely to Google Workspace or Microsoft 365 with zero downtime.",
    },
    {
      question: "How do you protect our emails from phishing and spam?",
      answer: "We implement robust email authentication protocols including SPF, DKIM, and DMARC. We also set up advanced spam filters and security rules to block incoming phishing attempts.",
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
};
