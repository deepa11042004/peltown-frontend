import {
  Users,
  Layers,
  ShoppingCart,
  Truck,
  Home,
  Navigation,
  WifiOff,
  Monitor,
  Landmark,
  MapPin,
  DollarSign,
  Activity,
  Receipt,
  Database,
  Fingerprint,
  Calculator,
  UserCheck,
  MessageCircle,
  Star,
  FolderGit2,
  RefreshCw,
  Globe,
  Route,
  Plane,
  FileText,
  Map,
  Eye,
  Bell,
  QrCode,
  MonitorPlay,
  CalendarDays,
  PlayCircle,
  Award,
  Shield,
  CheckCircle2,
  Send,
  Bot,
  Brush,
  GitFork,
  BarChart3,
  Inbox,
  AlertCircle,
  StickyNote,
  Clock,
  Calendar,
  BellRing,
  IndianRupee,
  Settings,
  Key,
  TrendingUp,
  Search,
  Cpu,
  Cloud,
  LucideIcon,
} from "lucide-react";

export interface ProductHeroData {
  tagline: string;
  title: string;
  description: string;
  ctaText?: string;
  imageSrc: string;
  imageAlt: string;
  additionalImages?: string[];
  showGallery?: boolean;
}

export interface FeatureItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface FeaturedSectionData {
  title: string;
  desc?: string;
  list: FeatureItem[];
}

export interface DetailItem {
  id: string;
  title: string;
  tagline: string;
  bullets: string[];
  image: string;
  href: string;
}

export interface DetailSectionData {
  tagline: string;
  title: string;
  description: string;
  list: DetailItem[];
}

export interface ProductIntroData {
  title?: string;
  subtitle?: string;
  description?: string;
  bullets?: string[];
  finalText?: string;
}

export const PRODUCTS_HERO_CONTENT: Record<string, ProductHeroData> = {
  "ecommerce-suite": {
    tagline: "Retail & Commerce",
    title: "Peltown Commerce Suite",
    description:
      "Launch a robust, fully customizable multi-vendor or single-vendor online marketplace. Built with Next.js, modern databases, and optimized for maximum conversions.",
    ctaText: "Get Started",
    imageSrc: "/Img/ecc1.png",
    imageAlt: "Enterprise E-commerce Suite",
    additionalImages: [
      "/Img/ecc2.png",
      "/Img/ecc3.png",
      "/Img/ecc4.png",
      "/Img/ecc5.png",
    ],
    showGallery: true,
  },
  "quick-commerce": {
    tagline: "Ultra-Fast Delivery",
    title: "Peltown Quick Commerce Suite",
    description:
      "Supercharge your local dispatch. Our system integrates dark store inventory, rapid rider allocation, and real-time mapping for sub-10 minute deliveries.",
    ctaText: "Request Demo",
    imageSrc: "/Img/ecc2.png",
    imageAlt: "Quick Commerce Engine",
    additionalImages: [
      "/Img/ecc1.png",
      "/Img/ecc3.png",
      "/Img/ecc4.png",
      "/Img/ecc5.png",
    ],
    showGallery: true,
  },
  "cloud-pos": {
    tagline: "Point of Sale",
    title: "Peltown Cloud POS",
    description:
      "Sync your physical storefront with your online inventory instantly. Accept all payment methods, track register shifts, and generate reports on the fly.",
    ctaText: "See in Action",
    imageSrc: "/Img/cloud2.png",
    imageAlt: "Cloud POS System",
    additionalImages: ["/Img/cloud1.png", "/Img/cloud2.png", "/Img/cloud3.png"],
    showGallery: true,
  },
  "fleet-delivery": {
    tagline: "Logistics Optimization",
    title: "Peltown Fleet Delivery Suite",
    description:
      "Automate driver dispatching, optimize delivery routes, and provide end-to-end live tracking for your customers with dedicated rider and admin apps.",
    ctaText: "Schedule Demo",
    imageSrc: "/Img/ecc1.png",
    imageAlt: "Fleet & Delivery Management",
    showGallery: false,
  },
  "cloud-erp": {
    tagline: "Enterprise Operations",
    title: "Peltown Cloud ERP",
    description:
      "Unify your accounting, supply chain, inventory, and human resource modules under a single, highly-secure cloud dashboard.",
    ctaText: "Consult Our Experts",
    imageSrc: "/Img/cloud1.png",
    imageAlt: "Cloud ERP System",
    additionalImages: ["/Img/cloud1.png", "/Img/cloud2.png", "/Img/cloud3.png"],
    showGallery: true,
  },
  "hrms-payroll": {
    tagline: "Workforce Management",
    title: "Peltown HRMS & Payroll",
    description:
      "Manage employee shifts, automate employee management, attendance tracking, leave management, payroll processing, and handle employee lifecycles with absolute compliance.",
    ctaText: "Request Live Demo",
    imageSrc: "/Img/pay1.png",
    imageAlt: "HRMS & Payroll System",
    additionalImages: ["/Img/cloud1.png", "/Img/cloud2.png", "/Img/cloud3.png"],
    showGallery: true,
  },
  "omnichannel-crm": {
    tagline: "Sales & CRM",
    title: "Peltown Omnichannel CRM",
    description:
      "Centralize customer interactions into a unified platform. Unify WhatsApp, email, social, phone calls, and live chat to build long-term relationships.",
    ctaText: "Boost Sales Now",
    imageSrc: "/Img/cloud3.png",
    imageAlt: "Omni-channel CRM",
    additionalImages: ["/Img/cloud1.png", "/Img/cloud2.png", "/Img/cloud3.png"],
    showGallery: true,
  },
  "invoicing-billing": {
    tagline: "Financial Tech",
    title: "Peltown Invoicing & Billing",
    description:
      "Automate your billing lifecycle from quotation to payment collection. GST invoicing, recurring billing, and online payment integrations built for your business.",
    ctaText: "Try Billing Suite",
    imageSrc: "/Img/invoice1.png",
    imageAlt: "Invoicing & Billing Portal",
    additionalImages: ["/Img/cloud1.png", "/Img/cloud2.png", "/Img/cloud3.png"],
    showGallery: true,
  },
  "travel-agency": {
    tagline: "Travel Technology",
    title: "Peltown Travel Agency Suite",
    description:
      "Create flight & hotel itineraries, manage direct bookings, handle visa processes, and generate invoice statements for holiday operators.",
    ctaText: "Modernize Booking",
    imageSrc: "/Img/travel1.png",
    imageAlt: "Travel Agency Suite",
    additionalImages: ["/Img/cloud1.png", "/Img/cloud2.png", "/Img/cloud3.png"],
    showGallery: true,
  },
  "real-estate": {
    tagline: "Property Tech",
    title: "Peltown Real Estate Suite",
    description:
      "Present high-definition property listings, engage hot leads, integrate virtual tours, and manage agents with robust CRM workflows.",
    ctaText: "Explore Platform",
    imageSrc: "/Img/real1.png",
    imageAlt: "Real Estate Suite",
    showGallery: true,
  },
  "restaurant-management": {
    tagline: "Food & Beverage",
    title: "Modern Restaurant Management",
    description:
      "Menu management, table reservations, and integrated kitchen display systems.",
    ctaText: "Deploy to Kitchen",
    imageSrc: "/Img/restaurant1.webp",
    imageAlt: "Restaurant Management Platform",
    showGallery: true,
  },
  "learning-management": {
    tagline: "EdTech & Training",
    title: "Peltown Learning Management System (LMS)",
    description:
      "Deploy white-labeled digital training hubs, host video lessons, design quizzes, track progress, and award certificates to students.",
    ctaText: "Create Academy",
    imageSrc: "/Img/learn1.png",
    imageAlt: "Learning Management System (LMS)",
    showGallery: true,
  },
  "bulk-whatsapp": {
    tagline: "Marketing & API",
    title: "Peltown WhatsApp Business Platform",
    description:
      "Automate sales, marketing, and customer support with the official WhatsApp Business ecosystem. Respond instantly, nurture leads, and scale conversations.",
    ctaText: "Request Live Demo",
    imageSrc: "/Img/partners_hero.webp",
    imageAlt: "WhatsApp Business Platform",
    showGallery: false,
  },
  "email-automation": {
    tagline: "Marketing Automation",
    title: "Peltown Email Automation Platform",
    description:
      "Create automated customer journeys that generate leads, increase conversions, and improve customer retention automatically.",
    ctaText: "Automate Campaigns",
    imageSrc: "/Img/store3.webp",
    imageAlt: "Email Automation Platform",
    showGallery: false,
  },
  "helpdesk-ticketing": {
    tagline: "Support & Ticketing",
    title: "Peltown Helpdesk & Ticketing System",
    description:
      "Peltown Helpdesk & Ticketing System ensures every customer request is tracked, assigned, prioritized, and resolved efficiently. Turn customer support into a growth driver instead of a bottleneck.",
    ctaText: "Optimize Support",
    imageSrc: "/Img/store4.webp",
    imageAlt: "Helpdesk Ticketing System",
    showGallery: false,
  },
  "appointment-booking": {
    tagline: "Scheduling Engine",
    title: "Peltown Appointment Booking Platform",
    description:
      "Peltown Appointment Booking Platform automates scheduling and customer communication so your team can focus on serving customers instead of managing calendars.",
    ctaText: "Set Up Calendar",
    imageSrc: "/Img/store5.webp",
    imageAlt: "Appointment Booking Engine",
    showGallery: false,
  },
};

export const PRODUCTS_FEATURED_CONTENT: Record<string, FeaturedSectionData> = {
  "ecommerce-suite": {
    title: "Advanced E-commerce Capabilities",
    desc: "High-performance features designed to scale your store and maximize revenue.",
    list: [
      {
        title: "Multi-vendor Support",
        desc: "Enable multiple merchants to manage storefronts, inventory, and payouts in a unified catalog ecosystem.",
        icon: Users,
      },
      {
        title: "Advanced Inventory",
        desc: "Track stock counts recursively across physical warehouses, localized hubs, and dark stores in real time.",
        icon: Layers,
      },
      {
        title: "Dynamic Checkout Engine",
        desc: "Increase checkout conversions with guest checkouts, local wallets, auto-discounts, and one-click buying.",
        icon: ShoppingCart,
      },
    ],
  },
  "quick-commerce": {
    title: "Sub-10 Minute Delivery Operations",
    desc: "Engineered for rapid fulfillment, dark stores, and logistics fleet management.",
    list: [
      {
        title: "Real-time Driver Dispatch",
        desc: "Automate delivery requests and match dark stores to nearby drivers instantly using ping checks.",
        icon: Truck,
      },
      {
        title: "Micro-fulfillment Dark Store Sync",
        desc: "Sync physical local store stock counts at high speed with catalog availability matrices.",
        icon: Home,
      },
      {
        title: "Smart Geo-routing Algorithm",
        desc: "Provide riders with high-efficiency streets navigation patterns to ensure rapid local delivery times.",
        icon: Navigation,
      },
    ],
  },
  "cloud-pos": {
    title: "Unified Retail Management",
    desc: "Perfect sync between online inventory, accounting, and registers.",
    list: [
      {
        title: "Offline-first Functionality",
        desc: "Process payments, generate print receipts, and track items even without internet connection.",
        icon: WifiOff,
      },
      {
        title: "Multi-register Management",
        desc: "Oversee sales, opening/closing floats, and staff register permissions across global physical hubs.",
        icon: Monitor,
      },
      {
        title: "Daily Cash Audits",
        desc: "Receive auto-generated end of day cash checks matching drawer counts against database ledger logs.",
        icon: Landmark,
      },
    ],
  },
  "fleet-delivery": {
    title: "Optimized Fleet Logistics",
    desc: "Powering real-time driver tracking and dispatching workflows.",
    list: [
      {
        title: "Live Location Tracking",
        desc: "Track delivery rider coordinates on mapping software to keep dispatch logs and customers updated.",
        icon: MapPin,
      },
      {
        title: "Automated Order Routing",
        desc: "Bundle delivery requests pointing in the same direction to maximize driver drop-off efficiency.",
        icon: Navigation,
      },
      {
        title: "Driver Payout Dashboard",
        desc: "Set up dynamic driver payouts based on travel distance, tip amounts, and active duty hours logs.",
        icon: DollarSign,
      },
    ],
  },
  "cloud-erp": {
    title: "End-to-End Enterprise Operations",
    desc: "Automate and integrate core operations across departments.",
    list: [
      {
        title: "Supply Chain Monitoring",
        desc: "Track raw material purchases, factory updates, and distribution logistics on centralized tables.",
        icon: Activity,
      },
      {
        title: "Multi-department Ledger Reconciliation",
        desc: "Compile sales data, operating costs, and raw invoices under synchronized chart of accounts.",
        icon: Receipt,
      },
      {
        title: "Advanced Asset Tracking",
        desc: "Monitor fixed assets, IT hardware, depreciation rates, and deployment lifecycles on the cloud.",
        icon: Database,
      },
    ],
  },
  "hrms-payroll": {
    title: "Enterprise HR & Payroll Automation",
    desc: "Streamline employee scheduling, biometric logs, compliance, and payroll processing.",
    list: [
      {
        title: "Biometric & GPS Attendance",
        desc: "Sync biometric devices, RFID scanners, or geo-fenced mobile check-ins with employee timesheets.",
        icon: Fingerprint,
      },
      {
        title: "Accurate Payroll & Taxes",
        desc: "Automate salaries, bonuses, and statutory deductions like PF, ESI, and TDS calculations.",
        icon: Calculator,
      },
      {
        title: "Employee Self-Service (ESS)",
        desc: "Empower staff to view payslips, apply for leaves, and manage tax declarations independently.",
        icon: UserCheck,
      },
    ],
  },
  "omnichannel-crm": {
    title: "One Customer. One Conversation.",
    desc: "Unify all communication channels under a single client dashboard.",
    list: [
      {
        title: "Unified Shared Inbox",
        desc: "Consolidate conversations from WhatsApp, email, website chat, and social media in one feed.",
        icon: MessageCircle,
      },
      {
        title: "AI-Powered Lead Scoring",
        desc: "Grade sales prospects automatically based on web engagement, behavior analysis, and opportunity recommendations.",
        icon: Star,
      },
      {
        title: "Deal Pipeline Dashboard",
        desc: "Visualize target deals at stages of the sales process to identify transaction bottlenecks.",
        icon: FolderGit2,
      },
    ],
  },
  "invoicing-billing": {
    title: "Frictionless Billing Infrastructure",
    desc: "Manage automated recurring billing and tax compliances effortlessly.",
    list: [
      {
        title: "Recurring Billing Automation",
        desc: "Automate monthly, quarterly, or annual billing cycles, renewals, and reminders for subscription models with minimal manual effort.",
        icon: RefreshCw,
      },
      {
        title: "GST & Tax Compliance",
        desc: "Native support for CGST, SGST, IGST, and HSN/SAC codes tailored for multi-state Indian operations.",
        icon: Globe,
      },
      {
        title: "Integrated Payments Collection",
        desc: "Accept Razorpay, Stripe, PayPal, UPI, net banking, or cards directly from visual digital invoices.",
        icon: DollarSign,
      },
    ],
  },
  "travel-agency": {
    title: "Complete Travel Operator Engine",
    desc: "Manage client bookings, itineraries, and visa status in real time.",
    list: [
      {
        title: "Visual Itinerary Builder",
        desc: "Drag and drop hotel layouts, flight details, and local tours into downloadable PDFs.",
        icon: Route,
      },
      {
        title: "Multi-API GDS Flight Integrations",
        desc: "Find live ticket availability and confirm flight bookings via API links with travel consolidators.",
        icon: Plane,
      },
      {
        title: "Dynamic Guest Invoice Generation",
        desc: "Split payment structures and generate custom receipts detailing itemized trip booking lists.",
        icon: FileText,
      },
    ],
  },
  "real-estate": {
    title: "Modern Property Listings Platform",
    desc: "Attract home buyers and manage property inventory.",
    list: [
      {
        title: "Advanced Polygon Map Search",
        desc: "Empower buyers to draw shape boundaries on a digital map to find nearby property matches.",
        icon: Map,
      },
      {
        title: "Integrated 3D Virtual Tour Viewer",
        desc: "Embed interactive panoramic tours directly inside property listings to build client trust.",
        icon: Eye,
      },
      {
        title: "Automated Agent Notification Routing",
        desc: "Ping local property agents instantly when buyers submit contact requests on their listings.",
        icon: Bell,
      },
    ],
  },
  "restaurant-management": {
    title: "High-Efficiency Kitchen Operations",
    desc: "Keep operations smooth from table reservations to table delivery.",
    list: [
      {
        title: "Interactive QR Table Orders",
        desc: "Permit dine-in customers to view digital menus, place kitchen orders, and pay via their smartphones.",
        icon: QrCode,
      },
      {
        title: "Real-time Kitchen Display Screens",
        desc: "Provide chef staff with visual cooking orders lists sorted by table times and kitchen section.",
        icon: MonitorPlay,
      },
      {
        title: "Dynamic Reservation Calendar",
        desc: "Prevent dining room overbookings and manage tables layout with an interactive calendar console.",
        icon: CalendarDays,
      },
    ],
  },
  "learning-management": {
    title: "Immersive E-learning Software",
    desc: "Build customizable training courses and evaluate students.",
    list: [
      {
        title: "Course Builder with Multimedia Support",
        desc: "Upload training video formats, organize chapters, and share downloadable source files.",
        icon: PlayCircle,
      },
      {
        title: "Automated Certificate Generator",
        desc: "Create white-labeled course completion PDFs and award credentials to students automatically.",
        icon: Award,
      },
      {
        title: "Secure Online Examination Engine",
        desc: "Generate randomized question pools, establish timers, and check results automatically.",
        icon: Shield,
      },
    ],
  },
  "bulk-whatsapp": {
    title: "Scalable Customer Broadcasts",
    desc: "Send official templates and support chats at scale.",
    list: [
      {
        title: "Verified Green Tick Integration",
        desc: "Setup WhatsApp Business profiles with verified business status to raise customer trust.",
        icon: CheckCircle2,
      },
      {
        title: "High-throughput Campaign Broadcasts",
        desc: "Dispatch template-based promotional bulk alerts to target customer segments simultaneously.",
        icon: Send,
      },
      {
        title: "AI Chatbot Auto-responses",
        desc: "Incorporate conversational reply templates to answer faq details without developer efforts.",
        icon: Bot,
      },
    ],
  },
  "email-automation": {
    title: "Advanced Email Delivery & Campaigns",
    desc: "Ensure newsletters reach the primary inbox every time.",
    list: [
      {
        title: "Drag-and-drop Newsletter Designer",
        desc: "Draft high-converting marketing layouts using responsive block layout editing grids.",
        icon: Brush,
      },
      {
        title: "Drip Sequence Workflows",
        desc: "Create visual email automation maps triggered when clients perform signup actions.",
        icon: GitFork,
      },
      {
        title: "Real-time Click/Bounce Analytics",
        desc: "Observe tracking metrics including opens, links clicked, bounce lists, and spam reports.",
        icon: BarChart3,
      },
    ],
  },
  "helpdesk-ticketing": {
    title: "SLA-Driven Support Tickets",
    desc: "Resolve issues faster with automated support routing.",
    list: [
      {
        title: "Ticket Categories Routing",
        desc: "Forward support requests automatically to the right department using text analysis rules.",
        icon: Inbox,
      },
      {
        title: "Auto-escalation SLA Rules",
        desc: "Escalate delayed customer response tickets to senior supervisors before deadlines expire.",
        icon: AlertCircle,
      },
      {
        title: "Shared Internal Teammate Notes",
        desc: "Collaborate on customer requests by pinning internal comments visible only to support staff.",
        icon: StickyNote,
      },
    ],
  },
  "appointment-booking": {
    title: "Smart Self-Scheduling Calendar",
    desc: "Allow clients to book appointments and sync calendars.",
    list: [
      {
        title: "Live Staff Slot Availability",
        desc: "Present clients with correct open meeting slots calculated from staff work calendar states.",
        icon: Clock,
      },
      {
        title: "Calendar Synchronization",
        desc: "Sync meeting bookings to Google Calendar, Outlook, and Apple iCal dynamically.",
        icon: Calendar,
      },
      {
        title: "Automatic Booking Reminders",
        desc: "Reduce client no-shows by configuring automated sms or email alerts before meeting times.",
        icon: BellRing,
      },
    ],
  },
};

export const PRODUCTS_DETAIL_CONTENT: Record<string, DetailSectionData> = {
  "ecommerce-suite": {
    tagline: "Why Choose Us?",
    title: "A Complete E-commerce Solution",
    description:
      "At Peltown, we provide a holistic approach to building your online business.",
    list: [
      {
        id: "01",
        title: "Beautiful Online Storefront",
        tagline: "Create a professional online store that reflects your brand.",
        bullets: [
          "Mobile Responsive Design",
          "Custom Branding",
          "SEO-Friendly Architecture",
          "Fast Loading Pages",
          "Product Search & Filters",
          "Multiple Theme Options",
          "Landing Pages",
          "Blog Management",
        ],
        image: "/Img/store1.webp",
        href: "/services/web-development",
      },
      {
        id: "02",
        title: "Product Management",
        tagline: "Manage thousands of products with ease.",
        bullets: [
          "Unlimited Products",
          "Product Variants",
          "Categories & Subcategories",
          "Product Attributes",
          "Bulk Import & Export",
          "Digital Products",
          "Inventory Tracking",
          "Product Reviews",
        ],
        image: "/Img/store2.webp",
        href: "/services/erp-system",
      },
      {
        id: "03",
        title: "Order Management System",
        tagline: "Track and process orders from one dashboard.",
        bullets: [
          "Order Tracking",
          "Order Status Updates",
          "Invoice Generation",
          "Shipping Management",
          "Return Requests",
          "Refund Management",
          "Order History",
        ],
        image: "/Img/store3.webp",
        href: "/services/custom-crm",
      },
      {
        id: "04",
        title: "Inventory Management",
        tagline: "Maintain accurate stock levels across your business.",
        bullets: [
          "Real-Time Inventory Tracking",
          "Warehouse Management",
          "Stock Alerts",
          "Inventory Reports",
          "Multi-Location Inventory",
          "Purchase Management",
        ],
        image: "/Img/store4.webp",
        href: "/services/erp-system",
      },
      {
        id: "05",
        title: "Customer Management (CRM)",
        tagline: "Understand and manage your customers better.",
        bullets: [
          "Customer Profiles",
          "Purchase History",
          "Customer Segmentation",
          "Loyalty Programs",
          "Customer Notes",
          "Marketing Automation",
        ],
        image: "/Img/how1.webp",
        href: "/services/custom-crm",
      },
      {
        id: "06",
        title: "Payment Gateway Integration",
        tagline: "Accept payments securely with all major networks.",
        bullets: [
          "Razorpay",
          "Stripe",
          "PayPal",
          "Cash on Delivery",
          "UPI Payments",
          "Net Banking",
          "Credit & Debit Cards",
        ],
        image: "/Img/how2.webp",
        href: "/services/web-development",
      },
      {
        id: "07",
        title: "Shipping & Logistics",
        tagline: "Simplify fulfillment operations.",
        bullets: [
          "Shipping Integration",
          "Shipment Tracking",
          "Shipping Labels",
          "Delivery Updates",
          "Courier Management",
          "Multiple Shipping Methods",
        ],
        image: "/Img/store5.webp",
        href: "/services/web-development",
      },
      {
        id: "08",
        title: "Analytics & Reports",
        tagline: "Make data-driven decisions.",
        bullets: [
          "Sales Reports",
          "Revenue Analytics",
          "Customer Reports",
          "Product Performance",
          "Inventory Reports",
          "Marketing Performance",
          "Conversion Analytics",
        ],
        image: "/Img/how3.webp",
        href: "/services/seo-optimization",
      },
      {
        id: "09",
        title: "Multi-Vendor Marketplace Module",
        tagline: "Allow multiple sellers to sell on your platform.",
        bullets: [
          "Vendor Registration",
          "Vendor Dashboard",
          "Commission Management",
          "Seller Reports",
          "Vendor Payments",
          "Product Approval System",
        ],
        image: "/Img/how4.webp",
        href: "/services/web-development",
      },
      {
        id: "10",
        title: "B2B Commerce Features",
        tagline: "Ideal for manufacturers, wholesalers, and distributors.",
        bullets: [
          "Dealer Accounts",
          "Custom Pricing",
          "Bulk Orders",
          "Quotation Requests",
          "Credit Limits",
          "Business Accounts",
        ],
        image: "/Img/about_peltown.webp",
        href: "/services/web-development",
      },
      {
        id: "11",
        title: "Mobile Application Integration",
        tagline: "Extend your business through mobile applications.",
        bullets: [
          "Android App",
          "iOS App",
          "Customer App",
          "Vendor App",
          "Delivery App",
        ],
        image: "/Img/partners_hero.webp",
        href: "/services/mobile-app",
      },
      {
        id: "12",
        title: "Marketing & Growth Tools",
        tagline:
          "Scale your store and reach more customers with built-in growth features.",
        bullets: [
          "Email Marketing",
          "WhatsApp Integration",
          "Discount Coupons",
          "Referral Programs",
          "Loyalty Programs",
          "SEO Tools",
          "Push Notifications",
          "Product Recommendations",
        ],
        image: "/Img/store1.webp",
        href: "/services/digital-marketing",
      },
    ],
  },
  "quick-commerce": {
    tagline: "Operations & Execution",
    title: "Complete Local Dispatch Engine",
    description:
      "Manage dark stores, delivery agents, and rapid fulfillments seamlessly.",
    list: [
      {
        id: "01",
        title: "Customer Ordering Platform",
        tagline: "Provide a seamless ordering experience.",
        bullets: [
          "Android & iOS Native Apps",
          "Progressive Web App (PWA)",
          "Real-Time Product Availability",
          "Smart Category Navigation",
          "Multiple Payment Gateways",
          "Live GPS Order Tracking",
        ],
        image: "/Img/store1.webp",
        href: "/services/web-development",
      },
      {
        id: "02",
        title: "Dark Store Management",
        tagline: "Power fast deliveries with optimized dark store nodes.",
        bullets: [
          "Multi-Dark Store Operations",
          "Granular Inventory Visibility",
          "Fulfillment & Performance Tracking",
          "In-Store Stock Management",
          "Efficient Picking & Packing Workflows",
          "Micro-Fulfillment Center Optimization",
        ],
        image: "/Img/store2.webp",
        href: "/services/erp-system",
      },
      {
        id: "03",
        title: "Real-Time Inventory Management",
        tagline: "Never lose sales due to stock or availability issues.",
        bullets: [
          "Live Stock Level Tracking",
          "Multi-Warehouse Cross-Sync",
          "Automated Inventory Alert Triggers",
          "Smart Auto-Replenishment Matrix",
          "SKU & Variant Lifecycle Management",
          "Product Option Mapping",
        ],
        image: "/Img/store3.webp",
        href: "/services/erp-system",
      },
      {
        id: "04",
        title: "Order Management System",
        tagline:
          "Manage thousands of daily orders efficiently from a single dashboard.",
        bullets: [
          "Automated Dispatch & Assignment",
          "End-to-End Order Status Tracking",
          "Comprehensive Order History & Ledger",
          "Instant Refunds & Dispute Handling",
          "Return Request Workflows",
          "Fulfillment Analytics & Reports",
        ],
        image: "/Img/store4.webp",
        href: "/services/custom-crm",
      },
      {
        id: "05",
        title: "Delivery Management System",
        tagline: "Optimize last-mile logistics and routing.",
        bullets: [
          "Dedicated Rider App (Android & iOS)",
          "Smart Automatic Driver Matching",
          "Dynamic Route Optimization Algorithms",
          "Live Rider GPS Telemetry",
          "Proof of Delivery (OTP/Photo)",
          "Fleet Performance & Payout Reports",
        ],
        image: "/Img/store5.webp",
        href: "/services/mobile-app",
      },
      {
        id: "06",
        title: "Warehouse & Fulfillment Module",
        tagline:
          "Manage inventory movement across multiple cities and locations.",
        bullets: [
          "Central & Regional Warehousing",
          "Inter-Store Stock Transfers",
          "Automated Purchase Orders",
          "Vendor & Supplier Management",
          "Inbound/Outbound Tracking",
          "Scalable Hyperlocal Logistics",
        ],
        image: "/Img/how1.webp",
        href: "/services/erp-system",
      },
    ],
  },
  "cloud-pos": {
    tagline: "Core Features",
    title: "More Than a POS. A Complete Business Management Platform.",
    description:
      "Traditional billing software only records sales. Peltown Cloud POS helps businesses manage billing, stock levels, and operations across multiple locations.",
    list: [
      {
        id: "01",
        title: "Smart Billing System",
        tagline:
          "Fast & Accurate Checkout. Speed up transactions and improve customer experience.",
        bullets: [
          "Barcode Scanning Support",
          "GST Compliant Billing",
          "Thermal & Digital Receipts",
          "Product Search & Filters",
          "Quick Billing Interface",
          "Return, Refund & Discount Management",
        ],
        image: "/Img/store3.webp",
        href: "/services/web-development",
      },
      {
        id: "02",
        title: "Inventory Management",
        tagline:
          "Real-Time Inventory Tracking. Know exactly what's in stock across every location.",
        bullets: [
          "Live Stock Level Tracking",
          "Low Stock Trigger Alerts",
          "Stock Adjustments & Transfers",
          "Batch & Variant Management",
          "Warehouse Stock Tracking",
          "Automated Purchase Orders",
        ],
        image: "/Img/store4.webp",
        href: "/services/erp-system",
      },
      {
        id: "03",
        title: "Multi-Store Management",
        tagline:
          "Manage Every Outlet From One Dashboard. Perfect for growing retail chains.",
        bullets: [
          "Multiple Store/Outlet Management",
          "Centralized Global Inventory",
          "Branch-Level Sales Performance Reports",
          "Role-Based User Permissions",
          "Real-Time Branch Analytics",
          "Automated Product Catalog Sync",
        ],
        image: "/Img/store5.webp",
        href: "/services/erp-system",
      },
      {
        id: "04",
        title: "Customer Management (CRM)",
        tagline:
          "Build Strong Customer Relationships. Understand your customers and increase repeat purchases.",
        bullets: [
          "Detailed Customer Profiles",
          "Historical Purchase Ledger",
          "Behavioral Customer Segmentation",
          "Reward Points & Loyalty Programs",
          "Birthday Offers & Promotions",
          "Advanced Customer Insights",
        ],
        image: "/Img/how1.webp",
        href: "/services/custom-crm",
      },
      {
        id: "05",
        title: "Purchase & Supplier Management",
        tagline:
          "Better Inventory Planning. Manage vendors and stock replenishment efficiently.",
        bullets: [
          "Supplier Directory Database",
          "Automated Purchase Orders",
          "Goods Receipt Notes (GRN)",
          "Vendor Performance Reports",
          "Inventory Cost Tracking",
          "Automated Stock Replenishment",
        ],
        image: "/Img/how2.webp",
        href: "/services/erp-system",
      },
      {
        id: "06",
        title: "Reports & Analytics",
        tagline:
          "Make Better Business Decisions. Access business insights in real time.",
        bullets: [
          "Daily Sales & Audit Reports",
          "Product Performance Analytics",
          "Gross Profit & Loss Reports",
          "Live Inventory Status Audit",
          "Staff Activity Performance Logs",
          "Tax Compliance Reports",
        ],
        image: "/Img/how3.webp",
        href: "/services/seo-optimization",
      },
      {
        id: "07",
        title: "Omnichannel Commerce",
        tagline:
          "Sell Online & Offline From One Platform. Connect physical stores with digital sales channels.",
        bullets: [
          "Dynamic E-Commerce Sync",
          "Website & Marketplace Integration",
          "Central Real-Time Inventory Control",
          "Unified Customer Order Management",
          "Profile & Loyalty Sync Across Channels",
        ],
        image: "/Img/store1.webp",
        href: "/services/web-development",
      },
    ],
  },
  "fleet-delivery": {
    tagline: "Core Features",
    title: "Complete Fleet & Logistics Management Software",
    description:
      "Running a delivery operation involves more than tracking vehicles. Peltown Fleet Delivery Suite helps businesses manage vehicles, drivers, route optimization, and dispatches from one dashboard.",
    list: [
      {
        id: "01",
        title: "Real-Time GPS Fleet Tracking",
        tagline:
          "Know Where Every Vehicle Is. Monitor your fleet in real time.",
        bullets: [
          "Live GPS Coordinates Tracking",
          "Comprehensive Vehicle Location History",
          "Interactive Route Playback",
          "Dynamic Geofencing & Alerts",
          "Speed Limit Monitoring",
          "Trip Logs & Utilization Reports",
        ],
        image: "/Img/store4.webp",
        href: "/services/mobile-app",
      },
      {
        id: "02",
        title: "Smart Dispatch Management",
        tagline:
          "Assign Deliveries Faster. Automate dispatch operations and reduce manual work.",
        bullets: [
          "Automated Delivery Assignment",
          "Smart Driver Allocation",
          "Route Scheduling & Allocation",
          "Load Planning Optimization",
          "High-Efficiency Automated Dispatch",
          "Urgent Delivery Prioritization",
        ],
        image: "/Img/store2.webp",
        href: "/services/mobile-app",
      },
      {
        id: "03",
        title: "Route Optimization",
        tagline:
          "Reduce Fuel Costs & Delivery Time. Optimize routes automatically using intelligent planning.",
        bullets: [
          "Multi-Stop Route Sequencing",
          "Traffic-Aware Smart Navigation",
          "Dynamic Delivery Rescheduling",
          "Total Distance Minimization",
          "Driver Workload Balance Map",
          "Geographic Territory Management",
        ],
        image: "/Img/how3.webp",
        href: "/services/seo-optimization",
      },
      {
        id: "04",
        title: "Driver Management",
        tagline:
          "Improve Fleet Productivity. Manage drivers and performance from one dashboard.",
        bullets: [
          "Comprehensive Driver Profiles",
          "Rider Performance Scorecards",
          "Attendance & Log-On Timesheets",
          "Detailed Trip History Log",
          "Safe Driving Scoring Matrix",
          "Native Mobile Driver Application",
        ],
        image: "/Img/store1.webp",
        href: "/services/mobile-app",
      },
      {
        id: "05",
        title: "Delivery Tracking System",
        tagline:
          "Complete Delivery Visibility. Track deliveries from dispatch to completion.",
        bullets: [
          "Live Order Transit Tracking",
          "Interactive Customer Map Link",
          "Real-Time Delivery Status Updates",
          "Live Estimated Arrival Time (ETA)",
          "Instant Delivery Confirmation",
          "Failed Delivery Reason Tracking",
        ],
        image: "/Img/how2.webp",
        href: "/services/web-development",
      },
      {
        id: "06",
        title: "Electronic Proof of Delivery (ePOD)",
        tagline:
          "Eliminate Delivery Disputes. Capture proof of completed deliveries instantly.",
        bullets: [
          "In-App Customer Digital Signatures",
          "Delivery Drop-off Photo Capture",
          "Secure OTP & QR Verification",
          "Digital Delivery Notes & Logs",
          "GPS Verified Drop Coordinates",
          "Automatic Timestamp Verification",
        ],
        image: "/Img/store5.webp",
        href: "/services/mobile-app",
      },
      {
        id: "07",
        title: "Fuel Management",
        tagline:
          "Control Fleet Operating Costs. Monitor fuel usage across your entire fleet.",
        bullets: [
          "Fuel Consumption & Expense Reports",
          "Accurate Vehicle Mileage Tracking",
          "SLA/Fuel Cost Variance Tracking",
          "Fuel Theft Detection Alerts",
          "Vehicle Efficiency Analytics",
          "Consolidated Fuel Costs Dashboard",
        ],
        image: "/Img/how1.webp",
        href: "/services/erp-system",
      },
      {
        id: "08",
        title: "Vehicle Maintenance Management",
        tagline:
          "Prevent Breakdowns Before They Happen. Track maintenance schedules and service history.",
        bullets: [
          "Preventive Maintenance Scheduling",
          "Service Reminders & Alerts",
          "Detailed Repair & Expense History",
          "Insurance & Tax Policy Tracking",
          "Fitness & Transport Permit Alerts",
          "Regulatory Compliance Scoring",
        ],
        image: "/Img/store3.webp",
        href: "/services/erp-system",
      },
    ],
  },
  "cloud-erp": {
    tagline: "Business Engine",
    title: "Unified Resource Planning Platform",
    description:
      "Reconcile corporate accounts, supply chains, and HR operations on one secure ERP engine.",
    list: [
      {
        id: "01",
        title: "Financials & General Ledger",
        tagline:
          "Draft balance sheets, tax statement exports, and operational audit trails automatically.",
        bullets: [
          "Double-entry bookkeeping validation rules",
          "Dynamic multi-currency conversion accounts",
          "Automated bank ledger feed sync plugins",
          "Consolidated profit & loss statement generators",
        ],
        image: "/Img/store5.webp",
        href: "/services/erp-system",
      },
      {
        id: "02",
        title: "Inventory & Procurement",
        tagline:
          "Oversee worldwide product stock locations and automate supplier purchase orders.",
        bullets: [
          "Multi-warehouse balance sheets matrices",
          "Minimum-threshold automated inventory reorders",
          "Vendor rate sheet comparison tables",
          "Incoming cargo inspection checklist forms",
        ],
        image: "/Img/how1.webp",
        href: "/services/custom-crm",
      },
      {
        id: "03",
        title: "Enterprise Resource Security",
        tagline:
          "Establish role-based access rules and data encryption policies to protect enterprise assets.",
        bullets: [
          "Strict SSO & MFA verification integrations",
          "Granular field-level user access controls",
          "Full immutable document change histories",
          "Daily secure database backups schedules",
        ],
        image: "/Img/how4.webp",
        href: "/services/web-development",
      },
      {
        id: "04",
        title: "Reporting & AI Insights",
        tagline:
          "Leverage machine learning dashboards to predict cash flows, seasonal stock demands, and department utility.",
        bullets: [
          "Interactive business intelligence metrics dashboards",
          "Predictive inventory forecasting algorithms",
          "Operational bottleneck indicators",
          "One-click corporate report compilers",
        ],
        image: "/Img/store1.webp",
        href: "/services/digital-marketing",
      },
    ],
  },
  "hrms-payroll": {
    tagline: "HR Operations",
    title: "Complete Workforce Management",
    description:
      "Automate workforce administration, attendance tracking, compliance, recruitment, and payroll processing in a single system.",
    list: [
      {
        id: "01",
        title: "Attendance & Location tracking",
        tagline:
          "Track attendance via biometric systems, face recognition, or GPS-enabled mobile apps.",
        bullets: [
          "Biometric, RFID, & Face Scanner integration",
          "GPS tracking & Geo-Fencing for field staff",
          "Shift roster scheduling & late arrival rules",
          "Timesheet corrections & holiday calendar management",
        ],
        image: "/Img/about_peltown.webp",
        href: "/services/erp-system",
      },
      {
        id: "02",
        title: "Auto-Payroll & Compliance Engine",
        tagline:
          "Automate complex monthly salary runs and stay compliant with Indian tax regulations.",
        bullets: [
          "Salary structure setups & one-click payroll runs",
          "PF, ESI, Professional Tax, and TDS calculations",
          "Automated compliance reporting & payslip distribution",
          "Bonus, incentives, loans, & reimbursement tracking",
        ],
        image: "/Img/how2.webp",
        href: "/services/custom-crm",
      },
      {
        id: "03",
        title: "Recruitment & Performance Management",
        tagline:
          "Hire top talent and align company goals with structured performance appraisals.",
        bullets: [
          "Job postings & Candidate database pipelines",
          "Resume parsing & interview scheduler tracking",
          "KPI tracking, reviews, & appraisals cycles",
          "Employee development & progress dashboards",
        ],
        image: "/Img/how4.webp",
        href: "/services/web-development",
      },
      {
        id: "04",
        title: "Employee Self-Service & Analytics",
        tagline:
          "Empower employees with self-service portals and gain data-driven HR insights.",
        bullets: [
          "View payslips, check leave balances & tax documents",
          "Submit leave applications & profile update requests",
          "Real-time team turnover & overtime dashboards",
          "Bi-directional approvals via Mobile Apps & Web portal",
        ],
        image: "/Img/store2.webp",
        href: "/services/digital-marketing",
      },
    ],
  },
  "omnichannel-crm": {
    tagline: "Sales Operations",
    title: "Advanced Customer CRM Suite",
    description:
      "Convert prospects, coordinate deals, automate follow-ups, and streamline support feeds in a single console.",
    list: [
      {
        id: "01",
        title: "Lead & Sales Pipeline Management",
        tagline:
          "Track sales opportunities from inquiry to conversion using interactive pipeline boards.",
        bullets: [
          "Custom pipelines and drag-and-drop deal cards",
          "Automatic lead assignment and routing rules",
          "Follow-up scheduling and automated notification alerts",
          "Revenue forecasting and bottleneck analysis charts",
        ],
        image: "/Img/how2.webp",
        href: "/services/custom-crm",
      },
      {
        id: "02",
        title: "Omnichannel Communication Hub",
        tagline:
          "Unify WhatsApp, email, website forms, social, and phone calls into a single customer timeline.",
        bullets: [
          "Official WhatsApp Business API team inbox",
          "Multi-channel message aggregation (FB, IG, LinkedIn)",
          "Email integration with campaign template builders",
          "Continuous timeline history as clients switch channels",
        ],
        image: "/Img/how1.webp",
        href: "/services/whatsapp-api",
      },
      {
        id: "03",
        title: "Marketing & Workflow Automation",
        tagline:
          "Nurture prospects automatically and eliminate repetitive tasks for sales reps.",
        bullets: [
          "Drip email campaigns and automated WhatsApp sequences",
          "Customer database segmentation models",
          "SLA ticket tracking and escalation path alerts",
          "Automated lead nurturing based on page clicks",
        ],
        image: "/Img/how3.webp",
        href: "/services/seo-optimization",
      },
      {
        id: "04",
        title: "Customer 360° & AI-Powered Insights",
        tagline:
          "Gain complete client visibility and prioritize actions with smart forecasting tools.",
        bullets: [
          "Unified profile with contact, purchase, and ticket logs",
          "AI lead prioritization and behavioral analysis",
          "Campaign conversion rates and agent scorecard tables",
          "Custom data reports and Excel exports",
        ],
        image: "/Img/store4.webp",
        href: "/services/digital-marketing",
      },
    ],
  },
  "invoicing-billing": {
    tagline: "Finance",
    title: "Global Recurring Invoicing Portal",
    description:
      "Automate invoicing pipelines, collect credit payments online, track custom expenses, and comply with state tax requirements.",
    list: [
      {
        id: "01",
        title: "Invoice & Estimate Management",
        tagline:
          "Create professional invoices and convert sales quotations into revenue documents in seconds.",
        bullets: [
          "Custom branding invoice designs and PDF generator",
          "Sales proposal, estimate, and quote acceptance tracking",
          "Proforma invoices, credit notes, and debit notes templates",
          "Multi-currency support for global cross-border billing",
        ],
        image: "/Img/how2.webp",
        href: "/services/erp-system",
      },
      {
        id: "02",
        title: "Recurring Billing & Payments",
        tagline:
          "Secure automatic subscription collections and integrate online payment gateways.",
        bullets: [
          "Subscription cycles automated runs (Monthly, Annual)",
          "Stripe, Razorpay, PayPal, and UPI checkout links",
          "Partial payment setups and outstanding customer ledgers",
          "Real-time receivables tracking and payment logs",
        ],
        image: "/Img/store5.webp",
        href: "/services/web-development",
      },
      {
        id: "03",
        title: "GST & Expense Audit Compliance",
        tagline:
          "Generate state-compliant tax statements and monitor business expenses under one dashboard.",
        bullets: [
          "Native CGST, SGST, IGST calculations and HSN/SAC tags support",
          "Expense categorization, vendor costs, and profitability analysis",
          "Automated tax summaries and GSTR billing report exports",
          "Multi-state tax compliance structures validation",
        ],
        image: "/Img/how4.webp",
        href: "/services/seo-optimization",
      },
      {
        id: "04",
        title: "Multi-Branch Billing & Auto-Reminders",
        tagline:
          "Manage multiple outlets on the go and reduce collections delays.",
        bullets: [
          "Branch-level billing limits and centralized reporting",
          "Automated invoice reminder alerts via WhatsApp, Email, & SMS",
          "Mobile Apps (Android & iOS) and tablet dashboard tools",
          "Role-based staff billing permissions profiles",
        ],
        image: "/Img/store3.webp",
        href: "/services/digital-marketing",
      },
    ],
  },
  "travel-agency": {
    tagline: "Complete Operating System",
    title: "Complete Travel Business Operating System",
    description: "One Platform To Manage Everything",
    list: [
      {
        id: "01",
        title: "Travel CRM",
        tagline: "Convert More Travel Inquiries Into Bookings",
        bullets: [
          "Lead Management & Inquiry Tracking",
          "Follow-Up Automation & Customer Profiles",
          "Lead Source Tracking & Sales Pipeline",
          "Customer Communication History & Conversion Reports",
        ],
        image: "/Img/how3.webp",
        href: "/services/custom-crm",
      },
      {
        id: "02",
        title: "Tour Package & Itinerary Builder",
        tagline:
          "Build & Sell Holiday Packages & Professional Itineraries Instantly",
        bullets: [
          "Domestic, International, Group & Corporate Tours",
          "Day-Wise Itinerary Planning & Day-by-Day Scheduling",
          "Hotel & Transport Details Integration",
          "PDF Itinerary Generation & Custom Branding",
        ],
        image: "/Img/partners_hero.webp",
        href: "/services/web-development",
      },
      {
        id: "03",
        title: "Booking & Supplier Operations",
        tagline:
          "Centralized Booking Operations and Travel Supply Chain Control",
        bullets: [
          "Package, Hotel, Transport & Activity Reservations",
          "Supplier & Vendor Contracts Management",
          "Local Tour Operator & Airline Partners Coordination",
          "Booking Status/History Tracking & Vendor Payments",
        ],
        image: "/Img/how1.webp",
        href: "/services/erp-system",
      },
      {
        id: "04",
        title: "Hotel & Visa Management Modules",
        tagline: "Manage Hotel Inventory & Simplify Visa Processing",
        bullets: [
          "Hotel Database, Room Inventory & Availability Tracking",
          "Hotel Pricing, Seasonal Pricing & Booking Reports",
          "Visa Applications, Document Management & Status Tracking",
          "Appointment Scheduling & Customer Status Notifications",
        ],
        image: "/Img/store4.webp",
        href: "/services/custom-crm",
      },
      {
        id: "05",
        title: "Payment, Invoice & Customer Portal",
        tagline: "Get Paid Faster and Deliver A Better Customer Experience",
        bullets: [
          "GST Invoices, Advance Payments & Installments Tracking",
          "Customer Ledgers & Agency Financial Reports",
          "Customer Portal for Booking, Itineraries & Visa Status",
          "Travel Documents Download & Support Request portal",
        ],
        image: "/Img/how2.webp",
        href: "/services/web-development",
      },
      {
        id: "06",
        title: "Automation, B2B Agent Portal & Mobile Apps",
        tagline: "Automate Customer Communication & Manage Operations Anywhere",
        bullets: [
          "WhatsApp & Email Automation (Inquiries, Confirmations, Reminders)",
          "B2B Travel Agent Portal for Sub-Agents & Partner Networks",
          "B2B Agent Pricing, Commission tracking & Wallet System",
          "Admin & Customer Mobile Apps (iOS & Android)",
        ],
        image: "/Img/store3.webp",
        href: "/services/mobile-app",
      },
    ],
  },
  "real-estate": {
    tagline: "Property Tech",
    title: "Complete Real Estate Business Platform",
    description: "Everything Needed To Sell More Properties",
    list: [
      {
        id: "01",
        title: "Real Estate CRM",
        tagline: "Convert More Inquiries Into Sales",
        bullets: [
          "Lead Capture Forms & Lead Scoring",
          "Automated Lead Assignment & Routing",
          "Follow-Ups & Call Tracking Automation",
          "Lead Source Tracking & Communication History",
        ],
        image: "/Img/how4.webp",
        href: "/services/custom-crm",
      },
      {
        id: "02",
        title: "Property & Listing Portal",
        tagline: "Showcase Projects & Manage Inventory Professionally",
        bullets: [
          "Tower, Unit & Availability Management",
          "Smart Filters & Property Discovery Map",
          "360° Virtual Tours & Floor Plans",
          "Property Gallery & Walkthrough Videos",
        ],
        image: "/Img/store2.webp",
        href: "/services/web-development",
      },
      {
        id: "03",
        title: "Site Visit Management",
        tagline: "Improve Sales Team Productivity",
        bullets: [
          "Dynamic Visit Scheduling & Reminders",
          "Automated Agent Assignment",
          "Customer Feedback Collection & Reports",
          "GPS Tracking for On-Field Sales Teams",
        ],
        image: "/Img/how1.webp",
        href: "/services/custom-crm",
      },
      {
        id: "04",
        title: "Booking & Payments System",
        tagline: "Simplify Bookings & Track Payments Easily",
        bullets: [
          "Unit Reservations & Inventory Blocking",
          "Booking Confirmations & Documents Tracking",
          "Installments & Outstanding Dues Management",
          "GST Invoicing & Customer Financial Ledgers",
        ],
        image: "/Img/store3.webp",
        href: "/services/erp-system",
      },
      {
        id: "05",
        title: "Portals & Partner Networks",
        tagline: "Deliver Better Customer & Broker Experiences",
        bullets: [
          "Broker Registration & Dashboard Access",
          "Partner Commission Management & Reports",
          "Customer Portal for Booking & Payments Status",
          "Construction Updates & Support Requests Tracking",
        ],
        image: "/Img/how2.webp",
        href: "/services/custom-crm",
      },
      {
        id: "06",
        title: "Marketing & Mobile Apps",
        tagline: "Automate Campaigns & Manage Operations Anywhere",
        bullets: [
          "WhatsApp, Email, & SMS Marketing Automation",
          "Lead Nurturing & Event Promotions",
          "Sales Team App for Visits & Follow-Ups",
          "Customer App for Listings & Support",
        ],
        image: "/Img/store4.webp",
        href: "/services/mobile-app",
      },
    ],
  },
  "restaurant-management": {
    tagline: "Restaurant Tech",
    title: "Unified Kitchen & Dine-in System",
    description:
      "Manage table bookings, QR smartphone menus, and kitchen cooking order timelines.",
    list: [
      {
        id: "01",
        title: "Digital QR smartphone menus",
        tagline:
          "Generate QR codes for tables to allow guests to select items, order, and pay from their devices.",
        bullets: [
          "Live digital menu editing portals",
          "Automatic QR table sticker code generators",
          "Direct guest table mobile payment checkouts",
          "Item out-of-stock indicators dashboards",
        ],
        image: "/Img/store1.webp",
        href: "/services/web-development",
      },
      {
        id: "02",
        title: "Kitchen Display Screens (KDS)",
        tagline:
          "Provide kitchen chefs with dynamic touchscreen panels showing cooking orders sorted by prep times.",
        bullets: [
          "Durable touchscreen KDS panel visual layouts",
          "Prep time threshold delay color indicators",
          "Interactive order ticket check-off controls",
          "Dish recipe detail lookup buttons",
        ],
        image: "/Img/store5.webp",
        href: "/services/erp-system",
      },
      {
        id: "03",
        title: "Dine-in Table Reservations",
        tagline:
          "Reconcile phone bookings and online reservations on a synchronized dining room table layout console.",
        bullets: [
          "Interactive table seating floorplan editors",
          "Automated SMS booking confirmation alerts",
          "Average table turnover analytics charts",
          "Customer dining history review dashboards",
        ],
        image: "/Img/how3.webp",
        href: "/services/custom-crm",
      },
      {
        id: "04",
        title: "Inventory & Recipe Audits",
        tagline:
          "Calculate recipe ingredient use dynamically to update dark store grocery stock tallies.",
        bullets: [
          "Ingredient usage matrix calculations",
          "Recipe cost variance tracking tables",
          "Supplier invoice parsing tools integrations",
          "Daily inventory waste audit templates",
        ],
        image: "/Img/store2.webp",
        href: "/services/digital-marketing",
      },
    ],
  },
  "learning-management": {
    tagline: "Complete Learning Ecosystem",
    title: "Complete Learning Ecosystem",
    description: "Everything Needed To Launch & Manage Online Learning",
    list: [
      {
        id: "01",
        title: "Course Creation & Management",
        tagline: "Build Professional Online Courses",
        bullets: [
          "Video Courses & Recorded Lectures",
          "Structured Learning Paths & Categories",
          "Interactive Lessons & Prerequisites",
          "PDFs, Documents & Multimedia Uploads",
        ],
        image: "/Img/store2.webp",
        href: "/services/web-development",
      },
      {
        id: "02",
        title: "Student & Batch Management",
        tagline: "Manage Thousands of Learners Efficiently",
        bullets: [
          "Student Profiles & Batch Assignments",
          "Real-Time Progress & Learning History tracking",
          "Bulk Enrollment & Access Control Management",
          "Integrated Student Notifications & Communication",
        ],
        image: "/Img/partners_hero.webp",
        href: "/services/custom-crm",
      },
      {
        id: "03",
        title: "Live Classes & Virtual Learning",
        tagline: "Conduct Interactive Online Sessions",
        bullets: [
          "Live Video Classes & Webinars integration",
          "Zoom & Google Meet API Sync",
          "Class Scheduling & Attendance tracking",
          "Interactive Discussions & Session Recordings",
        ],
        image: "/Img/how1.webp",
        href: "/services/web-development",
      },
      {
        id: "04",
        title: "Assessments & Certificate Management",
        tagline: "Measure Outcomes & Automate Course Certifications",
        bullets: [
          "Online Quizzes, MCQ & Descriptive Exams",
          "Mock Tests & Automated Evaluations",
          "Branded PDF Completion Certificates",
          "QR Code Verification & Validation portals",
        ],
        image: "/Img/store4.webp",
        href: "/services/custom-crm",
      },
      {
        id: "05",
        title: "Engagement, Gamification & Mobile Apps",
        tagline: "Increase Course Completion & Learn Anywhere",
        bullets: [
          "Points, Badges & Leaderboards system",
          "Learning Streaks & Achievement Tracking",
          "Android & iOS Apps with Offline Learning",
          "Mobile Assessments & Push Notifications",
        ],
        image: "/Img/how2.webp",
        href: "/services/mobile-app",
      },
      {
        id: "06",
        title: "Sectors, E-Commerce & Analytics",
        tagline: "Corporate, Coaching, Schools and Monetization",
        bullets: [
          "Corporate Training & Employee Onboarding modules",
          "School/College Portals & Coaching Batch management",
          "Course Selling Marketplace & Subscriptions/Coupons",
          "Course Completion, Performance & Revenue Reports",
        ],
        image: "/Img/store3.webp",
        href: "/services/erp-system",
      },
    ],
  },
  "bulk-whatsapp": {
    tagline: "Complete WhatsApp Business Platform",
    title: "Complete WhatsApp Business Platform",
    description: "Everything Needed To Grow Through WhatsApp",
    list: [
      {
        id: "01",
        title: "Official API & Bulk Messaging",
        tagline:
          "Build On The Official WhatsApp Infrastructure & Send Messages At Scale",
        bullets: [
          "Verified Business Messaging & Green Tick",
          "High Message Deliverability & Broadcaster",
          "Campaign Scheduling & Mass Broadcasts",
          "Universal Meta Infrastructure API Integration",
        ],
        image: "/Img/partners_hero.webp",
        href: "/services/whatsapp-api",
      },
      {
        id: "02",
        title: "WhatsApp CRM & Sales Pipeline",
        tagline: "Convert More Leads Into Customers & Track Interactions",
        bullets: [
          "Comprehensive Customer Profiles & History",
          "Lead Tracking & Pipeline Management",
          "Interactive Dashboard & Sales Follow-Ups",
          "Audience Segmentation & Behavior tracking",
        ],
        image: "/Img/how1.webp",
        href: "/services/custom-crm",
      },
      {
        id: "03",
        title: "Chatbots & Conversational AI",
        tagline: "AI-Powered Customer Conversations 24/7",
        bullets: [
          "Lead Capture & Customer Support Bots",
          "Appointment Booking Chatbots",
          "Product Recommendation AI Engines",
          "Automated FAQ & Dynamic reply workflows",
        ],
        image: "/Img/store1.webp",
        href: "/services/whatsapp-api",
      },
      {
        id: "04",
        title: "Shared Team Inbox & Collaboration",
        tagline: "Manage Customer Conversations Together on One Number",
        bullets: [
          "Multi-Agent Access & Team Routing rules",
          "Internal Chat Notes & Mentions for agents",
          "Complete Conversation History & Logs",
          "Granular User Permissions & Activity Logs",
        ],
        image: "/Img/how3.webp",
        href: "/services/custom-crm",
      },
      {
        id: "05",
        title: "Automations, Notifications & Alerts",
        tagline:
          "Automate Repetitive Conversations & Deliver Real-Time Updates",
        bullets: [
          "Automated Greetings & Out-of-Office triggers",
          "Order, Shipping & Delivery updates",
          "Appointment & Payment Reminders",
          "Dynamic Booking Confirmations & Event Alerts",
        ],
        image: "/Img/store3.webp",
        href: "/services/whatsapp-api",
      },
      {
        id: "06",
        title: "E-Commerce, Web & Mobile Apps",
        tagline: "Increase Online Sales & Manage Conversations Anywhere",
        bullets: [
          "E-Commerce Product Catalogs & Cart Recovery",
          "WhatsApp Payment Links & Checkout Sync",
          "Web Dashboard, Android, & iOS Applications",
          "Message Delivery, Response Rate & Agent Performance reports",
        ],
        image: "/Img/store4.webp",
        href: "/services/mobile-app",
      },
    ],
  },
  "email-automation": {
    tagline: "Complete Email Automation Ecosystem",
    title: "Complete Email Automation Ecosystem",
    description: "Everything Needed To Grow Through Email",
    list: [
      {
        id: "01",
        title: "Email Marketing Automation",
        tagline: "Send Smarter Campaigns That Drive Engagement",
        bullets: [
          "Visual Campaign Builder & Email Scheduling",
          "Audience Segmentation & Dynamic Content",
          "A/B Testing & Personalization tags",
          "Pre-designed Responsive Campaign Templates",
        ],
        image: "/Img/store3.webp",
        href: "/services/email-solutions",
      },
      {
        id: "02",
        title: "Lead Nurturing & Workflows",
        tagline: "Convert More Leads Into Customers Automatically",
        bullets: [
          "Lead Capture Integration & Prospect Tracking",
          "Automated Drip Campaigns & Follow-Ups",
          "Lead Scoring & Automated Sales Alerts",
          "Personalized Customer Journey Automation",
        ],
        image: "/Img/how3.webp",
        href: "/services/custom-crm",
      },
      {
        id: "03",
        title: "Sales & Onboarding Automation",
        tagline: "Close Deals Faster & Deliver Better First Impressions",
        bullets: [
          "Automated Outreach & Follow-Up Sequences",
          "Meeting Scheduling & Pipeline Automation",
          "New Customer Welcome Series & Education",
          "Training Content Delivery & Milestone Tracking",
        ],
        image: "/Img/how1.webp",
        href: "/services/email-solutions",
      },
      {
        id: "04",
        title: "E-Commerce & Retention Automation",
        tagline: "Increase Online Store Revenue & Lifetime Value",
        bullets: [
          "Cart Abandonment Emails & Loyalty Campaigns",
          "Personalized Product Recommendations",
          "Order Confirmations & Shipping Notifications",
          "Renewal Reminders, Birthday & Anniversary Campaigns",
        ],
        image: "/Img/store1.webp",
        href: "/services/erp-system",
      },
      {
        id: "05",
        title: "CRM Integration & AI Engine",
        tagline: "Connect Customer Data & Deliver Smarter Communication",
        bullets: [
          "CRM Customer Profiles Sync & Segmentation",
          "Behavioral Tracking & Journey Monitoring",
          "AI Content Suggestions & Send-Time Optimization",
          "AI Predictive Analytics & Recommendations",
        ],
        image: "/Img/how2.webp",
        href: "/services/custom-crm",
      },
      {
        id: "06",
        title: "Infrastructure & Deliverability",
        tagline: "Ensure Emails Reach The Inbox Safely",
        bullets: [
          "SMTP Integration & Dedicated Sending Domains",
          "SPF, DKIM, and DMARC Security Setup",
          "Automated Bounce & Reputation Management",
          "Analytics: Open, Click, and Conversion tracking",
        ],
        image: "/Img/store4.webp",
        href: "/services/email-solutions",
      },
    ],
  },
  "helpdesk-ticketing": {
    tagline: "Complete Customer Support Platform",
    title: "Everything Needed To Deliver Exceptional Support",
    description:
      "Peltown Helpdesk & Ticketing System ensures every customer request is tracked, assigned, prioritized, and resolved efficiently.",
    list: [
      {
        id: "01",
        title: "Smart Ticket Management",
        tagline: "Never lose track of customer issues again.",
        bullets: [
          "Ticket Creation & Status Tracking",
          "Automatic & Manual Ticket Assignment",
          "Ticket Prioritization & Routing",
          "Escalation Rules & Custom Workflows",
          "Internal Notes & Collaboration Comments",
          "Complete Ticket Interaction History",
          "Customer Relationship History Dashboard",
          "Customer Profiles & Communication Logs",
        ],
        image: "/Img/store4.webp",
        href: "/services/custom-crm",
      },
      {
        id: "02",
        title: "Omnichannel Support Center",
        tagline: "Manage all customer conversations in one place.",
        bullets: [
          "Centralized Multi-Channel Support Feed",
          "Official WhatsApp Business API integration",
          "Unified Shared Team Email Inbox",
          "Website Forms & Contact Page Queries",
          "Live Chat & Real-Time Website Widgets",
          "Phone Support Logs & Contact Center Sync",
          "Facebook & Instagram DM Integrations",
          "Mobile App Push Notifications",
        ],
        image: "/Img/how1.webp",
        href: "/services/whatsapp-api",
      },
      {
        id: "03",
        title: "SLA & Escalation Management",
        tagline: "Meet service commitments consistently.",
        bullets: [
          "Customizable SLA Policies per Tier",
          "First Response Time Target Tracking",
          "Ticket Resolution Time Tracking",
          "Automated Manager Escalation Rules",
          "Breach Warnings & Status Alerts",
          "Priority Management Indicators",
          "Supervisor Override Controls",
          "Department Accountability Reports",
        ],
        image: "/Img/how2.webp",
        href: "/services/erp-system",
      },
      {
        id: "04",
        title: "Customer Self-Service Portal",
        tagline: "Reduce support workload with independent answers.",
        bullets: [
          "Dedicated Customer Ticket Submission Portal",
          "Real-time Ticket Status Tracking",
          "Searchable Knowledge Base Articles",
          "Interactive FAQ Center & Guides",
          "Service Requests & Help Center Access",
          "Direct Portal Customer Communication",
          "Reduce Repetitive Support Requests",
          "Seamless White-Labeled Domain Setup",
        ],
        image: "/Img/store1.webp",
        href: "/services/seo-optimization",
      },
      {
        id: "05",
        title: "Live Chat & AI Chatbots",
        tagline: "Resolve issues in real time and automate queries.",
        bullets: [
          "Real-time Website Live Chat Widget",
          "Seamless Live Agent Transfers & Queues",
          "Complete Conversation Chat History",
          "Visitor Geolocation & Analytics Tracking",
          "AI Chatbot FAQ & Automation Flows",
          "Automated Greeting & Routing Bot",
          "Instant Ticket Creation Chatbots",
          "24/7 Intelligent Customer Guidance",
        ],
        image: "/Img/store3.webp",
        href: "/services/web-development",
      },
      {
        id: "06",
        title: "Team Collaboration & Support Analytics",
        tagline:
          "Resolve complex issues faster and measure support performance.",
        bullets: [
          "Internal Agent Notes & Mentions (@name)",
          "Shared Multi-Agent Team Collaboration",
          "Automated Workflow Rules & Assigns",
          "Role-Based Access Control & Logs",
          "Support Ticket Volume Reports",
          "Agent Performance & Response Times",
          "SLA Compliance & Breach Reports",
          "Customer Satisfaction (CSAT) Surveys",
        ],
        image: "/Img/how3.webp",
        href: "/services/custom-crm",
      },
    ],
  },
  "appointment-booking": {
    tagline: "Complete Scheduling & Booking Ecosystem",
    title: "Everything Needed To Manage Appointments Efficiently",
    description:
      "Peltown Appointment Booking Platform automates scheduling and customer communication so your team can focus on serving customers instead of managing calendars.",
    list: [
      {
        id: "01",
        title: "Online Appointment Booking System",
        tagline: "Let Customers Book Appointments 24/7",
        bullets: [
          "Online Booking Portal & Portal Rescheduling",
          "Real-Time Slot Availability & Confirmations",
          "Service & Staff Selection Checklists",
          "Multi-Location Booking Capabilities",
          "Appointment Cancellation Workflows",
          "Convert Visitors to Confirmed Bookings",
        ],
        image: "/Img/store5.webp",
        href: "/services/web-development",
      },
      {
        id: "02",
        title: "Smart Calendar Management",
        tagline: "Keep Every Schedule Organized",
        bullets: [
          "Centralized Booking Calendar Dashboard",
          "Daily, Weekly, and Monthly Views",
          "Drag & Drop Scheduling Actions",
          "Availability & Shift Management",
          "Resource & Equipment Allocation",
          "Bi-Directional Calendar Synchronization",
        ],
        image: "/Img/how4.webp",
        href: "/services/erp-system",
      },
      {
        id: "03",
        title: "Staff & Resource Management",
        tagline: "Optimize Team Productivity",
        bullets: [
          "Employee Availability & Calendars",
          "Shift Scheduling & Hours Tracking",
          "Resource & Facility Allocations",
          "Leave Management & Out-Of-Office",
          "Service Assignments by Skills",
          "Capacity Planning & Load Balancing",
        ],
        image: "/Img/how3.webp",
        href: "/services/erp-system",
      },
      {
        id: "04",
        title: "Automated Reminders & Notifications",
        tagline: "Reduce No-Shows Automatically",
        bullets: [
          "Automated Email Booking Reminders",
          "WhatsApp Business API Notifications",
          "SMS Appointment Alerts",
          "Booking Confirmation Dispatches",
          "Reschedule & Cancel Alerts",
          "Follow-Up & Feedback Messages",
        ],
        image: "/Img/how2.webp",
        href: "/services/whatsapp-api",
      },
      {
        id: "05",
        title: "Customer Portal & Relationship Management",
        tagline: "Build Long-Term Customer Relationships",
        bullets: [
          "Detailed Customer Profiles & History",
          "Appointment & Service Record Ledgers",
          "Client Preferences & Interaction Notes",
          "Independent Customer Self-Service Portal",
          "Portal Booking, Rescheduling & Cancelling",
          "Mobile Booking Apps (Customer & Staff)",
        ],
        image: "/Img/store1.webp",
        href: "/services/custom-crm",
      },
      {
        id: "06",
        title: "Online Payments & Performance Analytics",
        tagline: "Get Paid Faster & Make Better Decisions",
        bullets: [
          "Accept Online Payments & Deposits",
          "Partial Payments & Booking Reservations",
          "Automated GST Invoices & Receipts",
          "Multi-Location Branch Billing Dashboard",
          "Appointment & Revenue Reports",
          "Cancellation & No-Show Trend Analysis",
        ],
        image: "/Img/store3.webp",
        href: "/services/digital-marketing",
      },
    ],
  },
};

export const PRODUCTS_WHY_CHOOSE_US_CONTENT: Record<
  string,
  {
    title?: string;
    subtitle?: string;
    desc?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: { icon: any; title: string; desc: string }[];
  }
> = {
  "ecommerce-suite": {
    title: "Why Choose Peltown Commerce Suite?",
    subtitle: "Why Peltown?",
    desc: "We build custom digital operating systems that adapt to your business, not the other way around.",
    items: [
      {
        icon: Settings,
        title: "Fully Customizable",
        desc: "Unlike SaaS platforms that restrict customization, our solution is tailored exactly to your business workflows.",
      },
      {
        icon: Key,
        title: "Own Your Platform",
        desc: "No monthly platform lock-in. You own the source code, database, and infrastructure completely.",
      },
      {
        icon: TrendingUp,
        title: "Scalable Architecture",
        desc: "Built to handle growth seamlessly from hundreds to millions of orders without slowing down.",
      },
      {
        icon: Search,
        title: "SEO-Friendly",
        desc: "Designed following best practices to rank better on Google search results and generate organic traffic.",
      },
      {
        icon: IndianRupee,
        title: "Made for Indian Businesses",
        desc: "Supports GST compliance, UPI Payments, Razorpay integration, Indian logistics providers, and multi-language setups.",
      },
      {
        icon: Cpu,
        title: "Complete Business Ecosystem",
        desc: "Integrates directly with CRM systems, ERP software, WhatsApp Business APIs, email marketing, mobile apps, and accounting modules.",
      },
    ],
  },
  "quick-commerce": {
    title: "Why Choose Peltown Quick Commerce Suite?",
    subtitle: "Why Peltown?",
    desc: "We build customized, enterprise-ready hyperlocal delivery solutions that adapt to your operations.",
    items: [
      {
        icon: IndianRupee,
        title: "Built for Indian Market",
        desc: "Supports GST, UPI Payments, local logistics providers, COD orders, and multi-language setups.",
      },
      {
        icon: Settings,
        title: "Fully Customizable",
        desc: "Adapt the platform to your specific hyperlocal industry, delivery models, inventory systems, and business workflows.",
      },
      {
        icon: Key,
        title: "White Label & Ownership",
        desc: "No SaaS platform lock-in. You own the source code, databases, customer data, and branding completely.",
      },
      {
        icon: TrendingUp,
        title: "Enterprise Scale",
        desc: "Engineered to handle millions of transactions, multi-city operations, thousands of SKUs, and large delivery fleets.",
      },
      {
        icon: Layers,
        title: "Real-Time Inventory Control",
        desc: "Complete visibility of stock counts across central warehouses, regional hubs, and local dark store shelves in real time.",
      },
      {
        icon: Truck,
        title: "Optimized Last-Mile Logistics",
        desc: "Deliver within minutes through automated rider matching, live GPS tracking, and dynamic route planning.",
      },
    ],
  },
  "cloud-pos": {
    title: "Why Choose Peltown Cloud POS?",
    subtitle: "Why Choose POS?",
    desc: "A powerful, feature-rich retail operating system that scales with your growth.",
    items: [
      {
        icon: Globe,
        title: "Fully Cloud-Based",
        desc: "Access your business data, sales charts, inventory metrics, and logs from anywhere in the world in real time.",
      },
      {
        icon: WifiOff,
        title: "Works Online & Offline",
        desc: "Continue billing seamlessly even during internet disruptions and automatically reconcile data once connection returns.",
      },
      {
        icon: TrendingUp,
        title: "Scalable Architecture",
        desc: "Engineered to start small with a single storefront register and scale smoothly to hundreds of outlets.",
      },
      {
        icon: IndianRupee,
        title: "GST Ready",
        desc: "Built natively for Indian taxation and invoice compliances with tax audit exports reports.",
      },
      {
        icon: Key,
        title: "Complete Ownership",
        desc: "Unlike recurring SaaS platforms, you completely own your database, customer records, and platform codebase.",
      },
      {
        icon: Cpu,
        title: "Integrated Business Ecosystem",
        desc: "Connects with E-Commerce layouts, Quick Commerce apps, WhatsApp APIs, CRM pipelines, and ERP platforms.",
      },
    ],
  },
  "fleet-delivery": {
    title: "Why Choose Peltown Fleet Delivery Suite?",
    subtitle: "Why Fleet Delivery?",
    desc: "A fully integrated, cloud-based logistics and dispatch engine built to optimize delivery networks.",
    items: [
      {
        icon: IndianRupee,
        title: "Built for Indian Logistics",
        desc: "Supports GST compliance, multi-city delivery routing protocols, local Indian delivery workflows, and localized networks.",
      },
      {
        icon: Globe,
        title: "Cloud-Based Platform",
        desc: "Access dispatch logs, real-time rider maps, fuel consumption charts, and analytics remotely from any device.",
      },
      {
        icon: TrendingUp,
        title: "Scalable Infrastructure",
        desc: "Engineered to scale from startup courier runs to large, national logistics fleets handling millions of monthly packages.",
      },
      {
        icon: Eye,
        title: "Complete Operations Visibility",
        desc: "Full tracking transparency of vehicles, rider routes, delivery statuses, and fuel consumption on a central dashboard.",
      },
      {
        icon: Settings,
        title: "Customizable Workflows",
        desc: "Configurable and tailored to your specific courier operations, distributors workflows, and manufacturer supply chain networks.",
      },
      {
        icon: Cpu,
        title: "Business System Integrations",
        desc: "Connects with ERP platforms, CRM systems, accounting ledgers, e-commerce checkout apps, WhatsApp, and SMS gateways.",
      },
    ],
  },
  "cloud-erp": {
    title: "Why Choose Peltown Enterprise ERP?",
    subtitle: "Why ERP?",
    desc: "Unify financial ledger, warehouse, and supply chain modules under one dashboard.",
    items: [
      {
        icon: Database,
        title: "Single Source of Truth",
        desc: "Eliminate spreadsheet chaos by centralizing data across multiple corporate departments.",
      },
      {
        icon: Layers,
        title: "Modular Architecture",
        desc: "Deploy modules as you grow—choose accounting, HR, inventory, or CRM, all natively integrated.",
      },
      {
        icon: Shield,
        title: "Compliance & Security",
        desc: "Built with double-entry validation rules, role access controls, and full immutable change histories.",
      },
      {
        icon: Calculator,
        title: "Financial Ledger Sync",
        desc: "Auto-synchronize sales invoices, operating overhead, and bank statements in general ledgers.",
      },
      {
        icon: Activity,
        title: "Auto-Replenishment Engine",
        desc: "Tracks supply chain material status and fires automated purchase orders to vendors.",
      },
      {
        icon: Key,
        title: "Granular Permissions",
        desc: "Configure field-level user access permissions to protect confidential company databases.",
      },
    ],
  },
  "hrms-payroll": {
    title: "Why Choose Peltown HRMS & Payroll?",
    subtitle: "Why Peltown?",
    desc: "We build tailored human resource and payroll engines around your custom organization structure.",
    items: [
      {
        icon: IndianRupee,
        title: "Built for Indian Businesses",
        desc: "Native support for PF, ESI, Professional Tax, TDS calculations, and multi-state compliance regulations.",
      },
      {
        icon: Cpu,
        title: "Cloud-Based Platform",
        desc: "Access employee records, leave schedules, and run monthly payroll from anywhere on a secure cloud panel.",
      },
      {
        icon: Layers,
        title: "Multi-Branch Support",
        desc: "Manage workers across multiple offices, retail stores, manufacturing hubs, and field locations seamlessly.",
      },
      {
        icon: TrendingUp,
        title: "Scalable Architecture",
        desc: "Designed to grow with you, supporting operations from a few dozen workers up to enterprise-level operations.",
      },
      {
        icon: Settings,
        title: "Fully Customizable",
        desc: "Easily adapt attendance rules, multi-level leave approvals, and salary structures to your workflow.",
      },
      {
        icon: Key,
        title: "Complete Integration Capabilities",
        desc: "Connects with ERP modules, accounting tools, WhatsApp alert systems, email services, and biometric hardware devices.",
      },
    ],
  },
  "omnichannel-crm": {
    title: "Why Choose Peltown CRM?",
    subtitle: "Why Peltown?",
    desc: "We build tailored CRM platforms that adapt to your sales pipeline and customer workflows.",
    items: [
      {
        icon: Settings,
        title: "Built Around Your Process",
        desc: "Unlike standard CRMs, we customize pipelines, automations, and custom fields to match your exact business workflows.",
      },
      {
        icon: Cpu,
        title: "Cloud-Based & Scalable",
        desc: "Access all customer details, communication histories, and pipelines from anywhere on a secure cloud panel.",
      },
      {
        icon: Eye,
        title: "Complete Visibility",
        desc: "Sales, marketing, and support teams work from the same single unified customer profile record.",
      },
      {
        icon: RefreshCw,
        title: "Automation First",
        desc: "Eliminate repetitive typing, schedule follow-ups automatically, and assign leads instantly.",
      },
      {
        icon: Key,
        title: "Integration Ready",
        desc: "Connects with ERP platforms, HRMS dashboards, WhatsApp API, payment gateways, and third-party APIs.",
      },
      {
        icon: MessageCircle,
        title: "Omnichannel timeline",
        desc: "Unifies chats from WhatsApp, email, forms, calls, and socials into a single customer timeline.",
      },
    ],
  },
  "invoicing-billing": {
    title: "Why Choose Peltown Invoicing & Billing?",
    subtitle: "Why Peltown?",
    desc: "We build secure, compliant, and highly automated billing systems customized for your business operations.",
    items: [
      {
        icon: IndianRupee,
        title: "Built for Indian Businesses",
        desc: "Native GST configurations, multi-state operations support, and pre-integrated Indian payment gateways.",
      },
      {
        icon: Cpu,
        title: "Cloud-Based Platform",
        desc: "Access financial profiles, invoices ledger, and receivables reports securely from any mobile or desktop web browser.",
      },
      {
        icon: TrendingUp,
        title: "Scalable Architecture",
        desc: "Our platform scales seamlessly from simple freelancer billing systems up to multi-branch corporate enterprises.",
      },
      {
        icon: Clock,
        title: "Faster Payment Collection",
        desc: "Automate client payment chase cycles using smart WhatsApp, SMS, and Email payment reminders templates.",
      },
      {
        icon: Settings,
        title: "Fully Customizable",
        desc: "Design custom invoice PDF formats, tax brackets, quotation approval routes, and automated billing workflows.",
      },
      {
        icon: Key,
        title: "Integration Ready",
        desc: "Integrates with ERP directories, CRM pipelines, accounting tools, WhatsApp alert triggers, and third-party APIs.",
      },
    ],
  },
  "travel-agency": {
    title: "Why Choose Peltown Travel Agency Suite?",
    subtitle: "Designed Specifically For Travel Businesses",
    desc: "Unlike generic CRM or ERP systems, this platform is built around travel industry workflows.",
    items: [
      {
        icon: Route,
        title: "Travel Workflows",
        desc: "Built specifically around travel agency CRM, booking, and itinerary management workflows.",
      },
      {
        icon: CheckCircle2,
        title: "Complete Automation",
        desc: "From inquiry generation to completed trip, manage every customer journey in one place.",
      },
      {
        icon: Globe,
        title: "Cloud-Based Access",
        desc: "Manage your travel business from anywhere, on any device, with cloud-based platform access.",
      },
      {
        icon: Layers,
        title: "Multi-Branch Support",
        desc: "Scale your travel operations seamlessly with full support for growing travel networks.",
      },
      {
        icon: Settings,
        title: "Fully Customizable",
        desc: "We customize booking workflows, package management, supplier processes, and pricing models.",
      },
      {
        icon: Key,
        title: "Integration Ready",
        desc: "Connect with WhatsApp API, Payment Gateways, ERP/CRM systems, and Hotel/Flight APIs.",
      },
    ],
  },
  "real-estate": {
    title: "Why Choose Peltown Real Estate Suite?",
    subtitle: "Designed For Indian Real Estate Businesses",
    desc: "Supports local sales processes, payment structures, and project workflows.",
    items: [
      {
        icon: IndianRupee,
        title: "Indian Real Estate Focused",
        desc: "Supports local sales processes, payment structures, and Indian project workflows.",
      },
      {
        icon: Eye,
        title: "Complete Business Visibility",
        desc: "Track leads, inventory, bookings, and revenue from a single unified dashboard.",
      },
      {
        icon: Cloud,
        title: "Cloud-Based Platform",
        desc: "Access property data, payment collections, and lead statuses securely from anywhere.",
      },
      {
        icon: Layers,
        title: "Multi-Project Support",
        desc: "Manage multiple residential and commercial projects simultaneously without conflicts.",
      },
      {
        icon: Settings,
        title: "Highly Customizable",
        desc: "Customize property booking workflows, site visit processes, and sales pipelines.",
      },
      {
        icon: Key,
        title: "Integration Ready",
        desc: "Seamlessly connect with WhatsApp API, payment gateways, ERPs, accounting software, and SMS gateways.",
      },
    ],
  },
  "restaurant-management": {
    title: "Why Choose Peltown Restaurant Suite?",
    subtitle: "Why Restaurant?",
    desc: "Manage dine-in table bookings, QR menus, and kitchen displays.",
    items: [
      {
        icon: QrCode,
        title: "QR Table Orders Engine",
        desc: "Permit dine-in customers to view digital menus, place kitchen orders, and pay via smartphones.",
      },
      {
        icon: MonitorPlay,
        title: "Kitchen Display Screens",
        desc: "Provide chef staff with visual cooking orders lists sorted by table times and kitchen section.",
      },
      {
        icon: CalendarDays,
        title: "Reservation Calendars Console",
        desc: "Prevent dining room overbookings and manage tables layout with an interactive calendar console.",
      },
      {
        icon: Calculator,
        title: "Recipe Costing Database",
        desc: "Calculate margins on menu options by tracking raw material usage weights and vendor pricing.",
      },
      {
        icon: Layers,
        title: "Central Kitchen Sync",
        desc: "Manage bulk inventory stock transfers from main storage warehouses to multiple outlets.",
      },
      {
        icon: ShoppingCart,
        title: "Direct Delivery Checkout",
        desc: "Avoid aggregator commissions with custom delivery checkout maps and automated rider pings.",
      },
    ],
  },
  "learning-management": {
    title: "Why Choose Peltown LMS?",
    subtitle: "Built For Modern Education & Training",
    desc: "Supports schools, universities, coaching institutes, corporate training, and EdTech startups.",
    items: [
      {
        icon: Award,
        title: "Modern Education Built",
        desc: "Supports schools, universities, coaching institutes, corporate training, and EdTech startups.",
      },
      {
        icon: Cloud,
        title: "Cloud-Based Platform",
        desc: "Access learning content, live virtual classes, and student profiles securely from anywhere.",
      },
      {
        icon: Shield,
        title: "White Label Solution",
        desc: "Launch your own branded learning platform with a custom domain, branding, and mobile apps.",
      },
      {
        icon: TrendingUp,
        title: "Scalable Infrastructure",
        desc: "Built on a robust cloud network to support hundreds or millions of learners without latency.",
      },
      {
        icon: Settings,
        title: "Fully Customizable",
        desc: "Customize learning journeys, assessments, certificates, user roles, and monetization models.",
      },
      {
        icon: Key,
        title: "Integration Ready",
        desc: "Connect with Zoom, Google Meet, WhatsApp API, payment gateways, and CRM/ERP systems.",
      },
    ],
  },
  "bulk-whatsapp": {
    title: "Why Choose Peltown WhatsApp Business Platform?",
    subtitle: "Built For Growth-Focused Businesses",
    desc: "Work with scalable, official Meta WhatsApp API infrastructure for maximum reliability.",
    items: [
      {
        icon: CheckCircle2,
        title: "Built for Business Growth",
        desc: "Designed to support lead generation, support, marketing, sales automation, and customer retention.",
      },
      {
        icon: Bot,
        title: "Official API Integration",
        desc: "Build directly on Meta's official WhatsApp Business API infrastructure for maximum reliability.",
      },
      {
        icon: Cloud,
        title: "Cloud-Based Platform",
        desc: "Access your campaign dashboards, shared inboxes, and chatbot stats securely from anywhere.",
      },
      {
        icon: Settings,
        title: "Highly Customizable",
        desc: "Tailor chatbot logic, message templates, auto-replies, and assignment rules to your workflows.",
      },
      {
        icon: Shield,
        title: "Enterprise-Ready Security",
        desc: "Ensure complete protection of customer communication histories and sensitive personal data.",
      },
      {
        icon: Key,
        title: "Integration Ready",
        desc: "Connect with CRM, ERP, e-commerce storefronts, billing software, and custom payment gateways.",
      },
    ],
  },
  "email-automation": {
    title: "Why Choose Peltown Email Automation Platform?",
    subtitle: "Built For Growth-Focused Businesses",
    desc: "Create automated customer journeys that generate leads, increase conversions, and improve customer retention.",
    items: [
      {
        icon: Award,
        title: "Built for Business Growth",
        desc: "Designed to support lead generation, sales, customer retention, and business scalability.",
      },
      {
        icon: Cloud,
        title: "Cloud-Based Platform",
        desc: "Access and manage your email marketing automation workflows securely from anywhere.",
      },
      {
        icon: Shield,
        title: "Enterprise-Grade Security",
        desc: "Ensure complete protection for your customer list databases, email contents, and communications.",
      },
      {
        icon: Settings,
        title: "Fully Customizable",
        desc: "Customize customer journeys, sales processes, marketing funnels, and automation rules.",
      },
      {
        icon: Key,
        title: "Integration Ready",
        desc: "Connect with CRM, ERP, e-commerce storefronts, payment gateways, and WhatsApp/SMS APIs.",
      },
      {
        icon: TrendingUp,
        title: "Timely Lead Touchpoints",
        desc: "Engage every prospect automatically with multiple touchpoints to prevent leads from going cold.",
      },
    ],
  },
  "helpdesk-ticketing": {
    title: "Why Choose Peltown Helpdesk & Ticketing System?",
    subtitle: "Built For Modern Customer Support Teams",
    desc: "Designed for businesses that prioritize customer experience.",
    items: [
      {
        icon: MessageCircle,
        title: "Omnichannel Communication",
        desc: "Handle every support channel from one platform including email, WhatsApp, live chat, and social media.",
      },
      {
        icon: Cloud,
        title: "Cloud-Based Infrastructure",
        desc: "Access support operations and manage customer queries securely from anywhere, on any device.",
      },
      {
        icon: Shield,
        title: "Enterprise-Grade Security",
        desc: "Protect sensitive customer information, profiles, and historical communication log databases.",
      },
      {
        icon: Settings,
        title: "Fully Customizable",
        desc: "Customize ticket workflows, SLA policies, support processes, agent permissions, and customer portals.",
      },
      {
        icon: Key,
        title: "Integration Ready",
        desc: "Connect seamlessly with CRM systems, ERP software, WhatsApp API, email platforms, and HRMS.",
      },
      {
        icon: CheckCircle2,
        title: "Customer Experience Focused",
        desc: "Unify tracking, assignment, and prioritization to resolve issues faster and boost CSAT scores.",
      },
    ],
  },
  "appointment-booking": {
    title: "Why Choose Peltown Appointment Booking Platform?",
    subtitle: "Designed For Service-Based Businesses",
    desc: "Supports Healthcare, Beauty & Wellness, Education, Professional Services, Home Services, and Fitness Businesses.",
    items: [
      {
        icon: Cloud,
        title: "Cloud-Based Platform",
        desc: "Access schedules, calendars, and customer data securely from anywhere, on any device.",
      },
      {
        icon: Settings,
        title: "Fully Customizable",
        desc: "Customize booking workflows, approval processes, notifications, customer journeys, and payment models.",
      },
      {
        icon: Shield,
        title: "Enterprise-Ready Security",
        desc: "Ensure complete protection of customer information and business data.",
      },
      {
        icon: TrendingUp,
        title: "Scalable Infrastructure",
        desc: "Built on a high-availability cloud network suitable for startups, growing brands, and enterprise organizations.",
      },
      {
        icon: Key,
        title: "Integration Ready",
        desc: "Connect seamlessly with Google Calendar, Outlook Calendar, WhatsApp API, payment gateways, CRM, ERP, and HRMS.",
      },
      {
        icon: CheckCircle2,
        title: "Built for Service Success",
        desc: "Reduce no-shows, increase confirmed bookings, automate communication, and collect payments faster.",
      },
    ],
  },
};

export const PRODUCTS_INDUSTRIES_SERVE_CONTENT: Record<
  string,
  {
    title?: string;
    subtitle?: string;
    desc?: string;
    items: { name: string; color: string }[];
  }
> = {
  "ecommerce-suite": {
    title: "Industries We Serve",
    subtitle: "Versatile Solutions",
    desc: "Our e-commerce suite powers businesses across diverse industries, from retail to manufacturing.",
    items: [
      { name: "Fashion & Apparel", color: "from-pink-500/20 to-rose-500/20" },
      { name: "Electronics", color: "from-blue-500/20 to-indigo-500/20" },
      { name: "Grocery & FMCG", color: "from-green-500/20 to-emerald-500/20" },
      {
        name: "Beauty & Cosmetics",
        color: "from-purple-500/20 to-fuchsia-500/20",
      },
      { name: "Furniture", color: "from-amber-500/20 to-orange-500/20" },
      { name: "Healthcare", color: "from-teal-500/20 to-cyan-500/20" },
      {
        name: "Industrial Products",
        color: "from-zinc-500/20 to-neutral-500/20",
      },
      { name: "Automotive Parts", color: "from-red-500/20 to-orange-500/20" },
      { name: "Books & Education", color: "from-sky-500/20 to-indigo-500/20" },
      {
        name: "Wholesale & Distribution",
        color: "from-violet-500/20 to-purple-500/20",
      },
    ],
  },
  "quick-commerce": {
    title: "Industries We Serve",
    subtitle: "Versatile Solutions",
    desc: "Our quick commerce engine powers instant delivery operations across a wide range of retail sectors.",
    items: [
      { name: "Grocery & FMCG", color: "from-green-500/20 to-emerald-500/20" },
      { name: "Pharmacy", color: "from-teal-500/20 to-cyan-500/20" },
      { name: "Electronics", color: "from-blue-500/20 to-indigo-500/20" },
      { name: "Fashion & Lifestyle", color: "from-pink-500/20 to-rose-500/20" },
      { name: "Pet Supplies", color: "from-amber-500/20 to-orange-500/20" },
      {
        name: "Flowers & Gifts",
        color: "from-purple-500/20 to-fuchsia-500/20",
      },
      { name: "Food & Beverage", color: "from-red-500/20 to-orange-500/20" },
      {
        name: "B2B Distribution",
        color: "from-violet-500/20 to-purple-500/20",
      },
    ],
  },
  "cloud-pos": {
    title: "Industries We Serve",
    subtitle: "POS Ecosystem",
    desc: "Our point-of-sale systems are optimized for diverse physical retail environments.",
    items: [
      {
        name: "Supermarkets & Marts",
        color: "from-green-500/20 to-emerald-500/20",
      },
      { name: "Fashion Retailers", color: "from-pink-500/20 to-rose-500/20" },
      { name: "Cafes & Bakeries", color: "from-amber-500/20 to-orange-500/20" },
      { name: "Pharmacy Stores", color: "from-teal-500/20 to-cyan-500/20" },
      {
        name: "Electronics Outlets",
        color: "from-blue-500/20 to-indigo-500/20",
      },
      { name: "Gift Shops", color: "from-purple-500/20 to-fuchsia-500/20" },
      { name: "Salons & Spas", color: "from-rose-500/20 to-pink-500/20" },
      {
        name: "Wholesale Counters",
        color: "from-zinc-500/20 to-neutral-500/20",
      },
    ],
  },
  "fleet-delivery": {
    title: "Logistics Sectors We Power",
    subtitle: "Fleet Routing",
    desc: "Providing high-performance courier dispatch networks across diverse markets.",
    items: [
      {
        name: "Hyperlocal Logistics",
        color: "from-blue-500/20 to-indigo-500/20",
      },
      {
        name: "Courier & Mail Services",
        color: "from-sky-500/20 to-blue-500/20",
      },
      {
        name: "Food Delivery Networks",
        color: "from-red-500/20 to-orange-500/20",
      },
      {
        name: "E-commerce Logistics",
        color: "from-yellow-500/20 to-amber-500/20",
      },
      {
        name: "Pharmacy Distributors",
        color: "from-green-500/20 to-emerald-500/20",
      },
      { name: "B2B Cargo Fleet", color: "from-zinc-500/20 to-neutral-500/20" },
      {
        name: "On-demand Laundromat",
        color: "from-purple-500/20 to-violet-500/20",
      },
      { name: "Grocery Fulfillment", color: "from-teal-500/20 to-cyan-500/20" },
    ],
  },
  "cloud-erp": {
    title: "ERP Industries We Optimize",
    subtitle: "Enterprise Sync",
    desc: "Centralized resources control tailored for complex manufacturing and retail chains.",
    items: [
      {
        name: "Manufacturing Plants",
        color: "from-zinc-500/20 to-neutral-500/20",
      },
      {
        name: "Wholesale Distributors",
        color: "from-blue-500/20 to-indigo-500/20",
      },
      { name: "Healthcare Groups", color: "from-teal-500/20 to-cyan-500/20" },
      {
        name: "Real Estate Developers",
        color: "from-amber-500/20 to-orange-500/20",
      },
      {
        name: "Construction Firms",
        color: "from-yellow-500/20 to-amber-500/20",
      },
      { name: "Retail Corporations", color: "from-pink-500/20 to-rose-500/20" },
      {
        name: "Educational Networks",
        color: "from-sky-500/20 to-indigo-500/20",
      },
      {
        name: "Import-Export Agents",
        color: "from-purple-500/20 to-violet-500/20",
      },
    ],
  },
  "hrms-payroll": {
    title: "Who We Manage Attendance For",
    subtitle: "Workforce Reach",
    desc: "Handling shifts schedules and payroll ledger calculations for diverse workforces.",
    items: [
      {
        name: "IT & Software Companies",
        color: "from-blue-500/20 to-indigo-500/20",
      },
      {
        name: "Manufacturing Lines",
        color: "from-zinc-500/20 to-neutral-500/20",
      },
      { name: "Schools & Colleges", color: "from-rose-500/20 to-pink-500/20" },
      {
        name: "Healthcare Organizations",
        color: "from-teal-500/20 to-cyan-500/20",
      },
      {
        name: "Retail Businesses",
        color: "from-amber-500/20 to-orange-500/20",
      },
      {
        name: "Logistics & Delivery",
        color: "from-purple-500/20 to-violet-500/20",
      },
      {
        name: "Construction Companies",
        color: "from-yellow-500/20 to-amber-500/20",
      },
      {
        name: "Corporate Enterprises",
        color: "from-emerald-500/20 to-teal-500/20",
      },
    ],
  },
  "omnichannel-crm": {
    title: "Sectors We Optimize Sales For",
    subtitle: "Sales Growth",
    desc: "Powering WhatsApp APIs notifications and leads mapping pipelines.",
    items: [
      { name: "Real Estate CRM", color: "from-amber-500/20 to-orange-500/20" },
      { name: "Education CRM", color: "from-purple-500/20 to-violet-500/20" },
      { name: "Healthcare CRM", color: "from-teal-500/20 to-cyan-500/20" },
      {
        name: "Manufacturing CRM",
        color: "from-zinc-500/20 to-neutral-500/20",
      },
      {
        name: "Service Business CRM",
        color: "from-blue-500/20 to-indigo-500/20",
      },
      { name: "E-Commerce CRM", color: "from-pink-500/20 to-rose-500/20" },
      {
        name: "Financial Services CRM",
        color: "from-green-500/20 to-emerald-500/20",
      },
      {
        name: "IT & Software Companies",
        color: "from-sky-500/20 to-blue-500/20",
      },
    ],
  },
  "invoicing-billing": {
    title: "Billing Systems We Configure",
    subtitle: "Billing Reach",
    desc: "Custom recurring checkouts pipelines integrated for diverse financial requirements.",
    items: [
      {
        name: "IT Companies & Agencies",
        color: "from-blue-500/20 to-indigo-500/20",
      },
      {
        name: "SaaS Businesses",
        color: "from-purple-500/20 to-fuchsia-500/20",
      },
      {
        name: "Professional Services",
        color: "from-zinc-500/20 to-neutral-500/20",
      },
      {
        name: "Wholesale & Distribution",
        color: "from-green-500/20 to-emerald-500/20",
      },
      {
        name: "Healthcare Businesses",
        color: "from-teal-500/20 to-cyan-500/20",
      },
      {
        name: "Educational Institutions",
        color: "from-amber-500/20 to-orange-500/20",
      },
      {
        name: "Manufacturing Companies",
        color: "from-red-500/20 to-rose-500/20",
      },
      {
        name: "E-Commerce Businesses",
        color: "from-sky-500/20 to-blue-500/20",
      },
    ],
  },
  "travel-agency": {
    title: "Industries We Serve",
    subtitle: "Travel Sectors",
    desc: "We deliver tailored software solutions across diverse sectors of the travel and tourism industry.",
    items: [
      { name: "Travel Agencies", color: "from-sky-500/20 to-indigo-500/20" },
      { name: "Tour Operators", color: "from-blue-500/20 to-indigo-500/20" },
      {
        name: "Destination Management Companies (DMC)",
        color: "from-teal-500/20 to-cyan-500/20",
      },
      {
        name: "Visa Consultants",
        color: "from-purple-500/20 to-violet-500/20",
      },
      {
        name: "Hotel Booking Platforms",
        color: "from-amber-500/20 to-orange-500/20",
      },
      {
        name: "Corporate Travel Companies",
        color: "from-zinc-500/20 to-neutral-500/20",
      },
      {
        name: "Religious Tourism Operators",
        color: "from-yellow-500/20 to-amber-500/20",
      },
      {
        name: "Adventure Tour Companies",
        color: "from-green-500/20 to-emerald-500/20",
      },
    ],
  },
  "real-estate": {
    title: "Industries We Serve",
    subtitle: "Real Estate Sectors",
    desc: "We deliver tailored software solutions across residential, commercial, and agency segments.",
    items: [
      {
        name: "Real Estate Developers",
        color: "from-sky-500/20 to-indigo-500/20",
      },
      { name: "Builders", color: "from-zinc-500/20 to-neutral-500/20" },
      { name: "Property Brokers", color: "from-blue-500/20 to-indigo-500/20" },
      {
        name: "Commercial Real Estate Companies",
        color: "from-purple-500/20 to-violet-500/20",
      },
      {
        name: "Channel Partner Networks",
        color: "from-pink-500/20 to-rose-500/20",
      },
      {
        name: "Property Consultants",
        color: "from-green-500/20 to-emerald-500/20",
      },
      {
        name: "Co-Living & Rental Businesses",
        color: "from-teal-500/20 to-cyan-500/20",
      },
      {
        name: "Property Marketplaces",
        color: "from-amber-500/20 to-orange-500/20",
      },
    ],
  },
  "restaurant-management": {
    title: "Food Outlets We Sync",
    subtitle: "Kitchen POS",
    desc: "QR dine-in ordering widgets and franchise recipe controls inventories.",
    items: [
      {
        name: "Fine Dining Outlets",
        color: "from-amber-500/20 to-orange-500/20",
      },
      {
        name: "Cloud Kitchen Chains",
        color: "from-red-500/20 to-orange-500/20",
      },
      { name: "Bistro Cafes", color: "from-yellow-500/20 to-amber-500/20" },
      {
        name: "Malls Food Courts",
        color: "from-purple-500/20 to-violet-500/20",
      },
      { name: "Bars & Pubs Outlets", color: "from-pink-500/20 to-rose-500/20" },
      { name: "Fast Food (QSR)", color: "from-green-500/20 to-emerald-500/20" },
      { name: "Catering Outfits", color: "from-zinc-500/20 to-neutral-500/20" },
      {
        name: "Franchise Networks",
        color: "from-blue-500/20 to-indigo-500/20",
      },
    ],
  },
  "learning-management": {
    title: "Industries We Serve",
    subtitle: "LMS Sectors",
    desc: "We deploy tailored software solutions across diverse sectors of the education and training industry.",
    items: [
      { name: "Schools & Colleges", color: "from-sky-500/20 to-indigo-500/20" },
      { name: "Universities", color: "from-blue-500/20 to-indigo-500/20" },
      { name: "Coaching Institutes", color: "from-teal-500/20 to-cyan-500/20" },
      {
        name: "Corporate Training Companies",
        color: "from-purple-500/20 to-violet-500/20",
      },
      { name: "EdTech Startups", color: "from-pink-500/20 to-rose-500/20" },
      {
        name: "Certification Providers",
        color: "from-green-500/20 to-emerald-500/20",
      },
      {
        name: "Professional Training Centers",
        color: "from-teal-500/20 to-cyan-500/20",
      },
      {
        name: "Government Training Organizations",
        color: "from-amber-500/20 to-orange-500/20",
      },
    ],
  },
  "bulk-whatsapp": {
    title: "Industries We Serve",
    subtitle: "Industry Solutions",
    desc: "We deliver tailored WhatsApp automation systems across diverse industry segments.",
    items: [
      { name: "E-Commerce", color: "from-sky-500/20 to-indigo-500/20" },
      { name: "Real Estate", color: "from-blue-500/20 to-indigo-500/20" },
      { name: "Travel Agencies", color: "from-teal-500/20 to-cyan-500/20" },
      {
        name: "Educational Institutions",
        color: "from-purple-500/20 to-violet-500/20",
      },
      {
        name: "Healthcare Providers",
        color: "from-pink-500/20 to-rose-500/20",
      },
      {
        name: "Financial Services",
        color: "from-green-500/20 to-emerald-500/20",
      },
      { name: "Restaurants & QSR", color: "from-teal-500/20 to-cyan-500/20" },
      {
        name: "Service Businesses",
        color: "from-amber-500/20 to-orange-500/20",
      },
    ],
  },
  "email-automation": {
    title: "Industries We Serve",
    subtitle: "Email Solutions",
    desc: "We deploy high-deliverability email marketing and automation workflows across diverse business sectors.",
    items: [
      { name: "SaaS Companies", color: "from-sky-500/20 to-indigo-500/20" },
      { name: "E-Commerce Brands", color: "from-blue-500/20 to-indigo-500/20" },
      {
        name: "Real Estate Companies",
        color: "from-teal-500/20 to-cyan-500/20",
      },
      {
        name: "Educational Institutions",
        color: "from-purple-500/20 to-violet-500/20",
      },
      {
        name: "Healthcare Providers",
        color: "from-pink-500/20 to-rose-500/20",
      },
      {
        name: "Financial Services",
        color: "from-green-500/20 to-emerald-500/20",
      },
      { name: "Travel Companies", color: "from-teal-500/20 to-cyan-500/20" },
      {
        name: "Service Businesses",
        color: "from-amber-500/20 to-orange-500/20",
      },
    ],
  },
  "helpdesk-ticketing": {
    title: "Industry Solutions",
    subtitle: "Industry Solutions",
    desc: "We configure tailored helpdesk workflows and ticket assignment systems across various industry segments.",
    items: [
      {
        name: "SaaS & Software Companies",
        color: "from-sky-500/20 to-indigo-500/20",
      },
      {
        name: "E-Commerce Businesses",
        color: "from-blue-500/20 to-indigo-500/20",
      },
      {
        name: "Healthcare Providers",
        color: "from-pink-500/20 to-rose-500/20",
      },
      {
        name: "Educational Institutions",
        color: "from-purple-500/20 to-violet-500/20",
      },
      {
        name: "Financial Services",
        color: "from-green-500/20 to-emerald-500/20",
      },
      {
        name: "IT Service Companies",
        color: "from-teal-500/20 to-cyan-500/20",
      },
      {
        name: "Real Estate Companies",
        color: "from-teal-500/20 to-cyan-500/20",
      },
      {
        name: "Manufacturing Businesses",
        color: "from-amber-500/20 to-orange-500/20",
      },
    ],
  },
  "appointment-booking": {
    title: "Industry Solutions",
    subtitle: "Industry Solutions",
    desc: "Our appointment booking platform is tailored to the specific scheduling and operational workflows of various service businesses.",
    items: [
      { name: "Healthcare Clinics", color: "from-teal-500/20 to-cyan-500/20" },
      { name: "Hospitals", color: "from-blue-500/20 to-indigo-500/20" },
      { name: "Salons & Spas", color: "from-pink-500/20 to-rose-500/20" },
      {
        name: "Fitness Centers & Gyms",
        color: "from-purple-500/20 to-violet-500/20",
      },
      {
        name: "Coaching Institutes",
        color: "from-sky-500/20 to-indigo-500/20",
      },
      {
        name: "Legal Consultants",
        color: "from-zinc-500/20 to-neutral-500/20",
      },
      {
        name: "Financial Advisors",
        color: "from-green-500/20 to-emerald-500/20",
      },
      {
        name: "Repair & Service Businesses",
        color: "from-amber-500/20 to-orange-500/20",
      },
    ],
  },
};

export const PRODUCTS_PRICING_CONTENT: Record<
  string,
  {
    title?: string;
    subtitle?: string;
    desc?: string;
    plans: {
      title: string;
      price: string;
      desc: string;
      features: string[];
      popular?: boolean;
    }[];
  }
> = {
  "ecommerce-suite": {
    title: "Pricing Options",
    subtitle: "Cost Structure",
    desc: "No hidden transaction fees. Invest in custom business assets that you own completely.",
    plans: [
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
    ],
  },
  "quick-commerce": {
    title: "Pricing Options",
    subtitle: "Cost Structure",
    desc: "No hidden transaction fees. Invest in custom quick commerce assets that you own completely.",
    plans: [
      {
        title: "Startup Platform",
        price: "₹2,50,000 – ₹5,00,000",
        desc: "Best for local brands looking to launch their first ultra-fast hyperlocal delivery service.",
        features: [
          "Customer App (iOS & Android)",
          "Admin Control Panel",
          "Inventory Management",
          "UPI & Payment Integration",
          "Delivery Tracking",
        ],
      },
      {
        title: "Growth Platform",
        price: "₹5,00,000 – ₹12,00,000",
        desc: "Ideal for expanding businesses operating multiple stores or hubs with advanced tools.",
        features: [
          "Multi-Store Operations",
          "Advanced Analytics & Reports",
          "Warehouse Management",
          "Delivery Partner App",
          "Customer Marketing Tools",
        ],
        popular: true,
      },
      {
        title: "Enterprise Suite",
        price: "₹12,00,000 – ₹50,00,000+",
        desc: "Designed for large logistics networks requiring multi-city reach and high-end automation.",
        features: [
          "Multi-City Operations",
          "Dark Store Fulfillment Network",
          "AI Demand Forecasting",
          "Full ERP System Integration",
          "Enterprise Grade Security",
          "Dedicated Cloud Infrastructure",
        ],
      },
      {
        title: "SaaS Platform",
        price: "Custom Quote",
        desc: "Perfect for builders launching a Shopify or Blinkit-style multi-tenant hyperlocal model.",
        features: [
          "Blinkit/Zepto/Instamart Alternative",
          "Multi-Tenant Q-Commerce Engine",
          "Complete White-Label Setup",
          "Hyperlocal Marketplace Engine",
        ],
      },
    ],
  },
  "cloud-pos": {
    title: "Pricing Options",
    subtitle: "POS Pricing",
    desc: "No transaction fees. Invest in custom POS software assets that you own completely.",
    plans: [
      {
        title: "Starter POS",
        price: "₹35,000 – ₹75,000",
        desc: "Core software for single outlet registers with basic features.",
        features: [
          "Single Checkout Register POS",
          "Barcode Scanning Support",
          "GST Compliant Invoicing",
          "Thermal & Digital Receipts",
          "Basic Performance Reports",
        ],
      },
      {
        title: "Business POS",
        price: "₹75,000 – ₹2,00,000",
        desc: "Ideal for busy retail outlets requiring advanced loyalty and vendor systems.",
        features: [
          "Multi-User Staff Access",
          "CRM & Loyalty Program Features",
          "Customer Reward Points Engine",
          "Purchase & Vendor Management",
          "Advanced Reports & Analytics",
        ],
        popular: true,
      },
      {
        title: "Multi-Store POS",
        price: "₹2,00,000 – ₹5,00,000",
        desc: "Synchronized operations for expanding retail store chains.",
        features: [
          "Multi-Branch Outlet Synchronization",
          "Centralized Real-Time Inventory Control",
          "Warehouse & Stock Transfers Management",
          "Role-Based User Permissions",
          "Real-Time Live Analytics Dashboard",
        ],
      },
      {
        title: "Enterprise & SaaS POS",
        price: "₹5,00,000 – ₹25,00,000+",
        desc: "Complete enterprise ERP integrations or custom reseller platform platforms.",
        features: [
          "Unlimited Store Connections",
          "Full ERP & E-Commerce Integrations",
          "White-Label & SaaS Multi-Tenant Engine",
          "Isolated Dedicated Database Hosting",
          "Custom Tailored Business Workflows",
        ],
      },
    ],
  },
  "fleet-delivery": {
    title: "Pricing Options",
    subtitle: "Fleet Packages",
    desc: "No hidden transaction fees. Invest in custom logistics software assets you own completely.",
    plans: [
      {
        title: "Starter Fleet Package",
        price: "₹1,50,000 – ₹3,00,000",
        desc: "Core software for local dispatch setup and fleet GPS tracking operations.",
        features: [
          "Admin Operations Dashboard",
          "Real-Time GPS Fleet Tracking",
          "Rider/Driver Management Profiles",
          "Basic Trip & Performance Reports",
          "Rider Mobile Application",
        ],
      },
      {
        title: "Business Fleet Solution",
        price: "₹3,00,000 – ₹7,50,000",
        desc: "Best for growing logistics companies requiring advanced route planning & fuel metrics.",
        features: [
          "Dynamic Route Optimization API",
          "Complete Delivery Tracking System",
          "ePOD Digital Signature Capture",
          "Fuel Consumption & Theft Monitor",
          "Advanced Analytics Scorecard",
        ],
        popular: true,
      },
      {
        title: "Enterprise Logistics Platform",
        price: "₹7,50,000 – ₹25,00,000+",
        desc: "Designed for nationwide carriers running multi-city dispatch networks.",
        features: [
          "Multi-Branch & Location Sync",
          "Auto-replenishment Supplier ERP sync",
          "Full CRM & WhatsApp Notifications",
          "Custom Operational Workflows",
          "AWS Isolated Cloud Hosting DB",
        ],
      },
      {
        title: "SaaS Fleet Platform",
        price: "Custom Quote",
        desc: "White-label reseller dispatch platform software for transport operations.",
        features: [
          "reseller white-label TMS platform",
          "Client Subscription billing panel",
          "Transport Management software",
          "Custom API Webhook integrations",
          "Isolated database schemas tables",
        ],
      },
    ],
  },
  "cloud-erp": {
    title: "ERP Pricing Options",
    subtitle: "Enterprise Cost",
    desc: "Consolidate charts of accounts and manufacturing ledgers seamlessly.",
    plans: [
      {
        title: "SME Operations ERP",
        price: "₹1,50,000 – ₹3,00,000",
        desc: "Core software modules for inventory procurement and basic financial ledgers.",
        features: [
          "Double-Entry Accounting Core",
          "Purchase Orders Manager",
          "Multi-Warehouse inventory lists",
          "Up to 10 Employee profiles",
          "Email Support Assistance",
        ],
      },
      {
        title: "Growth ERP Engine",
        price: "₹4,00,000 – ₹8,00,000",
        desc: "Expanding companies requiring sales CRM and HRMS timesheet integrations.",
        features: [
          "Modular HRMS & Payroll sync",
          "Leads Pipelines & CRM dashboard",
          "Auto-replenishment vendor rules",
          "Up to 50 Employee profiles",
          "WhatsApp Alerts Setup Integrations",
        ],
        popular: true,
      },
      {
        title: "Enterprise ERP Suite",
        price: "₹10,00,000 – ₹30,00,000+",
        desc: "Nationwide organizations requiring custom logistics data ledgers.",
        features: [
          "Unlimited Department logins",
          "Custom Modules Development",
          "SSO & Multi-Factor Security",
          "Full Database Isolated Cloud",
          "24/7 Dedicated Account Manager",
        ],
      },
      {
        title: "Multi-Tenant ERP SaaS",
        price: "Custom Quote",
        desc: "White-label business engine for consulting resellers partners.",
        features: [
          "Reseller Client Creator panel",
          "Custom Branding White-Label",
          "Global AWS Multi-Region host",
          "Isolated Client Databases templates",
        ],
      },
    ],
  },
  "hrms-payroll": {
    title: "HRMS Pricing Tiers",
    subtitle: "HRMS Cost",
    desc: "Complete workforce management tools and payroll compliance calculators.",
    plans: [
      {
        title: "Starter HRMS",
        price: "₹75,000 – ₹1,50,000",
        desc: "Ideal for startups and small businesses needing core workforce controls.",
        features: [
          "Employee Management",
          "Attendance Tracking",
          "Leave Management",
          "Basic Payroll",
          "Email Helpdesk Support",
        ],
      },
      {
        title: "Business HRMS",
        price: "₹1,50,000 – ₹5,00,000",
        desc: "Ideal for growing organizations seeking automation and self-service portals.",
        features: [
          "Attendance System Module",
          "Payroll Automation Engine",
          "Mobile HR App Access",
          "Employee Self-Service Portal",
          "Reporting & Audit Dashboard",
        ],
        popular: true,
      },
      {
        title: "Enterprise HRMS",
        price: "₹5,00,000 – ₹20,00,000+",
        desc: "Suitable for large organizations requiring custom scaling and full integrations.",
        features: [
          "Multi-Branch Management",
          "Recruitment & ATS Module",
          "Performance Management KPI",
          "Advanced HR Analytics",
          "Custom Approval Workflows",
          "API Integrations Support",
        ],
      },
      {
        title: "SaaS HRMS Platform",
        price: "Custom Quote",
        desc: "Perfect for entrepreneurs looking to launch their own branded HRMS SaaS business.",
        features: [
          "HR SaaS Platform Hosting",
          "Payroll SaaS Software Engine",
          "Employee Portal White-labeling",
          "Workforce Management System APIs",
        ],
      },
    ],
  },
  "omnichannel-crm": {
    title: "CRM Pricing Plans",
    subtitle: "CRM Cost",
    desc: "Automate leads tracking and client chats channels cleanly.",
    plans: [
      {
        title: "Starter CRM",
        price: "₹1,00,000 – ₹2,50,000",
        desc: "Ideal for startups and small businesses needing core customer databases.",
        features: [
          "Lead Management System",
          "Customer Directory Database",
          "Basic Reporting & Metrics",
          "Email Client Integration",
          "Standard Support Desk",
        ],
      },
      {
        title: "Business CRM",
        price: "₹2,50,000 – ₹7,50,000",
        desc: "Ideal for growing businesses looking to automate WhatsApp sales and channels.",
        features: [
          "WhatsApp CRM Integration",
          "Visual Sales Pipeline Boards",
          "Marketing Automation Triggers",
          "Team Collaboration Tools",
          "Advanced Reporting Dashboards",
        ],
        popular: true,
      },
      {
        title: "Enterprise CRM",
        price: "₹7,50,000 – ₹30,00,000+",
        desc: "Ideal for large organizations needing full omnichannel sync and dedicated hosting.",
        features: [
          "Omnichannel Communication Hub",
          "Advanced Workflow Automation",
          "AI Insights & Forecasting",
          "Multi-Branch Support",
          "ERP Integration Systems",
          "Dedicated Infrastructure",
        ],
      },
      {
        title: "SaaS CRM Platform",
        price: "Custom Quote",
        desc: "Launch your own branded CRM SaaS business or industry vertical product.",
        features: [
          "CRM SaaS Platform Hosting",
          "Industry-Specific CRM Engines",
          "White Label CRM Branding",
          "Customer Engagement APIs",
        ],
      },
    ],
  },
  "invoicing-billing": {
    title: "Billing Pricing Tiers",
    subtitle: "Billing cost",
    desc: "Secure recurring subscriptions checkout portals configurations.",
    plans: [
      {
        title: "Starter Billing System",
        price: "₹50,000 – ₹1,00,000",
        desc: "Ideal for freelancers, startups, and small businesses needing core tax invoicing.",
        features: [
          "GST-Compliant Invoicing",
          "Client Database Profiles",
          "Basic Reporting & Summaries",
          "Email Invoice delivery",
          "Standard Helpdesk Support",
        ],
      },
      {
        title: "Business Billing Platform",
        price: "₹1,00,000 – ₹3,50,000",
        desc: "Ideal for growing businesses seeking quote workflows and gateways integration.",
        features: [
          "Quotation & Estimate Tools",
          "Payment Tracking System",
          "Razorpay / Stripe Gateways",
          "Automated Reminders sequences",
          "Advanced Revenue analytics",
        ],
        popular: true,
      },
      {
        title: "Enterprise Revenue Platform",
        price: "₹3,50,000 – ₹15,00,000+",
        desc: "Suitable for large enterprises requiring multi-branch setups and full integrations.",
        features: [
          "Multi-Branch Invoicing access",
          "Custom Billing Approval routes",
          "Full ERP & CRM Integrations",
          "Advanced Cash Flow analytics",
          "Role-Based Staff permissions",
          "Priority Technical Support",
        ],
      },
      {
        title: "SaaS Billing Platform",
        price: "Custom Quote",
        desc: "Perfect for launching a custom subscription billing or invoicing SaaS product.",
        features: [
          "SaaS Platform Hosting setup",
          "White-Labeled Client Billing",
          "Developer API integrations",
          "Accounting SaaS engines tools",
        ],
      },
    ],
  },
  "travel-agency": {
    title: "Pricing",
    subtitle: "Choose Your Plan",
    desc: "Scale your travel business with plans built for operations of all sizes.",
    plans: [
      {
        title: "Startup Travel Software",
        price: "₹2,50,000 – ₹5,00,000",
        desc: "Ideal for new travel agencies.",
        features: [
          "Website",
          "Lead Management",
          "Package Management",
          "Booking System",
          "Basic CRM",
        ],
      },
      {
        title: "Growth Travel Platform",
        price: "₹5,00,000 – ₹12,00,000",
        desc: "Ideal for established travel businesses.",
        features: [
          "CRM & Lead Capture",
          "Dynamic Itinerary Builder",
          "Supplier Management",
          "Payment Tracking",
          "Customer Portal",
        ],
        popular: true,
      },
      {
        title: "Enterprise Travel Suite",
        price: "₹12,00,000 – ₹50,00,000+",
        desc: "Ideal for large travel companies and DMCs.",
        features: [
          "B2B Portal & Agent Networks",
          "Multi-Branch Operations",
          "API Integrations (Hotel/Flight)",
          "Mobile Apps (Admin/Customer)",
          "Advanced Analytics",
          "Workflow Automation",
        ],
      },
      {
        title: "Travel SaaS Platform",
        price: "Custom Quote",
        desc: "Perfect for Travel Tech Startups, OTA Platforms, and Networks.",
        features: [
          "Travel Tech Startups",
          "OTA Platforms",
          "Travel Marketplaces",
          "White Label Travel Software",
          "B2B Travel Networks",
        ],
      },
    ],
  },
  "real-estate": {
    title: "Pricing",
    subtitle: "Choose Your Plan",
    desc: "Scale your real estate operations with plans designed for builders, brokers, and enterprise developers.",
    plans: [
      {
        title: "Starter Real Estate CRM",
        price: "₹2,50,000 – ₹5,00,000",
        desc: "Ideal for brokers and small agencies.",
        features: [
          "Property Website",
          "Lead Management",
          "CRM Dashboard",
          "Property Listings",
          "Basic Reports",
        ],
      },
      {
        title: "Growth Real Estate Platform",
        price: "₹5,00,000 – ₹15,00,000",
        desc: "Ideal for developers and growing firms.",
        features: [
          "Real Estate CRM",
          "Site Visit Management",
          "Booking System",
          "Payment & Installment Tracking",
          "Marketing Automation",
          "Customer Portal",
        ],
        popular: true,
      },
      {
        title: "Enterprise Real Estate Suite",
        price: "₹15,00,000 – ₹75,00,000+",
        desc: "Ideal for large developers and enterprises.",
        features: [
          "Multi-Project Management",
          "Channel Partner Portal",
          "Sales & Customer Mobile Apps",
          "ERP & Accounting Integration",
          "Advanced Analytics & Dashboards",
          "Workflow & Commission Automation",
        ],
      },
      {
        title: "Real Estate SaaS Platform",
        price: "Custom Quote",
        desc: "Perfect for PropTech Startups, Property Portals, and Broker Networks.",
        features: [
          "PropTech Startups",
          "Property Portals",
          "Real Estate Marketplaces",
          "Broker Networks",
          "White Label Real Estate Platforms",
        ],
      },
    ],
  },
  "restaurant-management": {
    title: "Restaurant Pricing Plans",
    subtitle: "Kitchen Cost",
    desc: "QR Dine-in table orders and franchise central kitchens.",
    plans: [
      {
        title: "Startup QSR POS",
        price: "₹40,000 – ₹80,000",
        desc: "High speed cash billing screen for fast counter checkouts.",
        features: [
          "Quick cash billing screen",
          "Thermal Kitchen ticket print",
          "Menu categories compiler",
          "Daily register closing ledger",
          "Email support assistance",
        ],
      },
      {
        title: "Kitchen Display Suite",
        price: "₹1,20,000 – ₹2,50,000",
        desc: "QR table orders, table booking calendars, and chef displays.",
        features: [
          "QR Dine-In table ordering POS",
          "Kitchen Display Screen UI",
          "Table Reservation Calendar",
          "UPI payments instant settlement",
          "WhatsApp Billing alerts setup",
        ],
        popular: true,
      },
      {
        title: "Franchise ERP Engine",
        price: "₹3,50,000 – ₹8,00,000+",
        desc: "Multi-outlet chains running raw material reorder checks.",
        features: [
          "Central warehouse stock transfers",
          "Recipe Margin costing checks",
          "Supplier purchase auto-reorders",
          "Franchise billing logs panel",
          "24/7 Dedicated phone support",
        ],
      },
      {
        title: "Food Tech SaaS",
        price: "Custom Quote",
        desc: "White-label ordering SaaS for restaurant aggregator brands.",
        features: [
          "White-Label Restaurant app",
          "Merchant Subscription dashboard",
          "Custom Payment split gateway",
          "Rider dispatch API integrations",
        ],
      },
    ],
  },
  "learning-management": {
    title: "Pricing",
    subtitle: "Choose Your Plan",
    desc: "Create e-learning portals with custom workflows, plans, and white-labeled designs.",
    plans: [
      {
        title: "Starter LMS",
        price: "₹1,50,000 – ₹3,50,000",
        desc: "Ideal for coaching institutes and small training companies.",
        features: [
          "Course Management",
          "Student Portal",
          "Online Classes",
          "Basic Assessments",
        ],
      },
      {
        title: "Business LMS Platform",
        price: "₹3,50,000 – ₹10,00,000",
        desc: "Ideal for educational businesses and training organizations.",
        features: [
          "Mobile Apps",
          "Assessments & Exams",
          "Certificates Engine",
          "Detailed Analytics",
          "Payment Gateway Integration",
        ],
        popular: true,
      },
      {
        title: "Enterprise LMS",
        price: "₹10,00,000 – ₹50,00,000+",
        desc: "Ideal for universities, large enterprises, and edtech startups.",
        features: [
          "White Label Platform",
          "Multi-Tenant Architecture",
          "Advanced Analytics dashboard",
          "AI Recommendations",
          "Enterprise CRM/ERP Integrations",
        ],
      },
      {
        title: "LMS SaaS Platform",
        price: "Custom Quote",
        desc: "Perfect for EdTech Startups, Online Academies, and marketplaces.",
        features: [
          "EdTech Startups portal",
          "Online Academies creator",
          "Coaching Networks management",
          "Corporate Training Providers",
          "Learning Marketplaces",
        ],
      },
    ],
  },
  "bulk-whatsapp": {
    title: "Pricing",
    subtitle: "Choose Your Plan",
    desc: "Scale your customer conversations with pricing tiers made for operations of all sizes.",
    plans: [
      {
        title: "Starter WhatsApp Solution",
        price: "₹50,000 – ₹1,50,000",
        desc: "Ideal for small businesses.",
        features: [
          "WhatsApp API Integration",
          "Shared Inbox for agents",
          "Basic Automation",
          "Reporting Dashboard",
        ],
      },
      {
        title: "Business WhatsApp Platform",
        price: "₹1,50,000 – ₹5,00,000",
        desc: "Ideal for growing companies.",
        features: [
          "Marketing Campaigns broadcast",
          "CRM & Database Integration",
          "Chatbot Development & flows",
          "Multi-Agent Support inbox",
          "Advanced Analytics dashboard",
        ],
        popular: true,
      },
      {
        title: "Enterprise WhatsApp Platform",
        price: "₹5,00,000 – ₹25,00,000+",
        desc: "Ideal for enterprises and large organizations.",
        features: [
          "AI Chatbots Integration",
          "Workflow Automation",
          "Omnichannel Integration",
          "Enterprise Security",
          "Custom API integrations",
          "Dedicated Infrastructure hosting",
        ],
      },
      {
        title: "WhatsApp SaaS Platform",
        price: "Custom Quote",
        desc: "Perfect for SaaS Startups, Marketing Platforms, and CRM Providers.",
        features: [
          "SaaS Startups portal",
          "Marketing Platforms API",
          "CRM Providers integration",
          "Customer Engagement Platform",
          "White Label Solutions",
        ],
      },
    ],
  },
  "email-automation": {
    title: "Pricing",
    subtitle: "Choose Your Plan",
    desc: "Scale your customer email reach with plans designed for companies of all sizes.",
    plans: [
      {
        title: "Starter Email Automation",
        price: "₹75,000 – ₹1,50,000",
        desc: "Ideal for startups and small businesses.",
        features: [
          "Campaign Management",
          "Basic Automation",
          "Email Templates",
          "Analytics Dashboard",
        ],
      },
      {
        title: "Business Automation Platform",
        price: "₹1,50,000 – ₹5,00,000",
        desc: "Ideal for growing businesses.",
        features: [
          "Advanced Automation flows",
          "CRM Integration & Sync",
          "Lead Scoring & Analytics",
          "Behavioral tracking tags",
          "Visual Workflow Builder",
        ],
        popular: true,
      },
      {
        title: "Enterprise Email Platform",
        price: "₹5,00,000 – ₹25,00,000+",
        desc: "Ideal for enterprises and SaaS companies.",
        features: [
          "AI Email Automation tools",
          "Multi-Brand Management",
          "Advanced Reports & Attribution",
          "Custom CRM/ERP Integrations",
          "Dedicated Infrastructure SMTP",
        ],
      },
      {
        title: "SaaS Email Automation Platform",
        price: "Custom Quote",
        desc: "Perfect for SaaS Startups, Marketing Platforms, and CRM Providers.",
        features: [
          "SaaS Startups setups",
          "Marketing Platforms API",
          "CRM Providers portals",
          "Customer Engagement Platforms",
          "White Label Solutions",
        ],
      },
    ],
  },
  "helpdesk-ticketing": {
    title: "Pricing Plans",
    subtitle: "Pricing",
    desc: "Unlocking modern ticketing, workflow automations, and SLA policies tailored for your customer desk.",
    plans: [
      {
        title: "Starter Helpdesk",
        price: "₹75,000 – ₹2,00,000",
        desc: "Ideal for startups and small businesses.",
        features: [
          "Ticket Management",
          "Email Support Integration",
          "Basic Support Reports",
          "Customer Self-Service Portal",
        ],
      },
      {
        title: "Business Support Platform",
        price: "₹2,00,000 – ₹7,50,000",
        desc: "Ideal for growing organizations.",
        features: [
          "Omnichannel Support Center",
          "SLA & Escalation Management",
          "Knowledge Base Management",
          "Workflow Automation Rules",
          "Real-Time Analytics Dashboard",
        ],
        popular: true,
      },
      {
        title: "Enterprise Service Desk",
        price: "₹7,50,000 – ₹30,00,000+",
        desc: "Ideal for enterprises and large organizations.",
        features: [
          "AI Chatbots Integration",
          "Advanced Workflow Automation",
          "Multi-Department Support",
          "Enterprise CRM/ERP Integrations",
          "Fully Custom Workflows",
          "Dedicated Cloud Infrastructure",
        ],
      },
      {
        title: "SaaS Helpdesk Platform",
        price: "Custom Quote",
        desc: "Perfect for SaaS startups and white-labeled service desk solutions.",
        features: [
          "SaaS Support Platforms",
          "Customer Desk white-labeling",
          "IT Service Providers integration",
          "Enterprise Service Desk products",
          "Dedicated Infrastructure & APIs",
        ],
      },
    ],
  },
  "appointment-booking": {
    title: "Pricing Plans",
    subtitle: "Pricing",
    desc: "No hidden transaction fees. Invest in a scheduling platform that you own completely.",
    plans: [
      {
        title: "Starter Booking System",
        price: "₹75,000 – ₹2,00,000",
        desc: "Ideal for small businesses.",
        features: [
          "Online Booking Portal",
          "Calendar Management",
          "Email Notifications & Alerts",
          "Basic Performance Reporting",
        ],
      },
      {
        title: "Business Scheduling Platform",
        price: "₹2,00,000 – ₹7,50,000",
        desc: "Ideal for growing service businesses.",
        features: [
          "Staff & Shift Management",
          "WhatsApp Notifications & SMS",
          "Upfront Payment Integration",
          "Customer Self-Service Portal",
          "Analytics & Reporting Dashboard",
        ],
        popular: true,
      },
      {
        title: "Enterprise Booking Platform",
        price: "₹7,50,000 – ₹30,00,000+",
        desc: "Ideal for large organizations and franchises.",
        features: [
          "Multi-Location & Branch Dashboard",
          "Mobile Applications (Staff & Client)",
          "Advanced Scheduling Automation",
          "Enterprise CRM & ERP Integrations",
          "Custom Approval Workflows",
          "Enterprise-Ready Cloud Security",
        ],
      },
      {
        title: "SaaS Booking Platform",
        price: "Custom Quote",
        desc: "Perfect for startups and white-labeled booking solutions.",
        features: [
          "Healthcare & Medical Startups",
          "Salon Booking Platforms",
          "Fitness & Trainer Apps",
          "Service Marketplaces portals",
          "White Label Booking Solutions",
        ],
      },
    ],
  },
};

export const PRODUCTS_INTRO_CONTENT: Record<string, ProductIntroData> = {
  "ecommerce-suite": {
    title: "Scale Your Sales with Unified E-commerce Operations",
    subtitle: "The Challenge & Solution",
    description:
      "Building a successful e-commerce brand requires managing multiple sales channels, handling complex inventory, coordinating vendor shipments, and processing hundreds of checkouts without drop-offs.",
    bullets: [
      "Cart abandonment rates remain high due to slow checkouts.",
      "Synchronizing inventory across multi-vendor channels is error-prone.",
      "Managing shipping, order statuses, and vendor splits manually wastes time.",
      "Platform transaction fees eat away at profit margins.",
      "Lack of unified buyer analytics prevents effective customer retention.",
    ],
    finalText:
      "Peltown E-commerce Suite unifies your store, catalog, vendors, checkouts, and logistics under one high-performance platform, giving you full control and zero platform lock-in.",
  },
  "quick-commerce": {
    title: "Powering Sub-10 Minute Hyperlocal Deliveries",
    subtitle: "Fulfillment & Last-Mile",
    description:
      "Quick commerce demands precise synchronization between local dark store inventory, rapid dispatch systems, routing algorithms, and delivery riders. Every second counts.",
    bullets: [
      "Manual rider allocation slows down order dispatch timelines.",
      "Mismatched dark store shelf counts lead to out-of-stock cancellations.",
      "Inefficient route planning leads to delayed deliveries and cold food.",
      "High rider churn and communication gaps disrupt daily deliveries.",
      "Lack of real-time geographical tracking limits administrative control.",
    ],
    finalText:
      "Our Quick Commerce Engine automates rider dispatching, tracks dark store stock in real time, and uses smart routing to complete deliveries within minutes.",
  },
  "cloud-pos": {
    title: "Bridge the Gap Between Online and Physical Stores",
    subtitle: "Modern Point of Sale",
    description:
      "Running physical retail registers alongside online channels often leads to double-selling, disconnected records, and slow customer checkout queues.",
    bullets: [
      "Store registers lose connection and stop processing payments offline.",
      "Online stock and physical store inventory counts do not sync instantly.",
      "Reconciling daily sales receipts and cash drawers takes hours of manual work.",
      "Register staff struggle with slow, complex interface menus.",
      "Multi-branch sales tracking is scattered across local databases.",
    ],
    finalText:
      "Peltown Cloud POS provides an offline-first register system that instantly synchronizes sales, cash registers, and warehouse stock across all store branches.",
  },
  "fleet-delivery": {
    title: "Optimize Fleet Logistics and Last-Mile Deliveries",
    subtitle: "Logistics Management",
    description:
      "Managing a fleet of drivers, vehicle maintenance schedules, delivery routes, and customer expectations is complex without a centralized tracking system.",
    bullets: [
      "Inefficient routing maps increase fuel expenses and delivery times.",
      "Lack of real-time GPS tracking leaves customers questioning order status.",
      "Manual dispatching systems result in idle drivers and missed delivery SLA times.",
      "Managing proof of delivery (POD) through paper logs leads to payment disputes.",
      "No historical data on vehicle performance or fuel efficiency.",
    ],
    finalText:
      "Peltown Fleet & Delivery Management automates dispatching, calculates greenest routes, and provides live GPS tracking with digital proof-of-delivery validation.",
  },
  "cloud-erp": {
    title: "One Platform. Complete Business Control.",
    subtitle: "Enterprise Operations",
    description:
      "Many businesses struggle because information is scattered across spreadsheets, WhatsApp groups, emails, accounting software, and disconnected systems.",
    bullets: [
      "Teams waste time looking for information in scattered files.",
      "Managers lack real-time visibility into operations.",
      "Inventory counts become highly inaccurate.",
      "Important customer follow-ups get missed regularly.",
      "Reports become slow and unreliable.",
    ],
    finalText:
      "Peltown Cloud ERP eliminates these challenges by bringing sales, inventory, finance, HR, procurement, projects, and manufacturing together under a single platform. Get real-time visibility into your operations and make faster, smarter business decisions.",
  },
  "hrms-payroll": {
    title: "Manage Your Workforce Without Spreadsheets",
    subtitle: "The Challenge & Solution",
    description:
      "Many businesses still manage employee records, attendance, leave requests, payroll, and performance tracking using Excel sheets and multiple disconnected tools.",
    bullets: [
      "Payroll errors",
      "Attendance discrepancies",
      "Delayed approvals",
      "Compliance issues",
      "HR inefficiencies",
      "Employee dissatisfaction",
    ],
    finalText:
      "Peltown HRMS & Payroll centralizes your entire employee lifecycle into one platform, giving HR teams and business owners complete visibility and control.",
  },
  "omnichannel-crm": {
    title: "Stop Losing Leads Across Multiple Channels",
    subtitle: "The Challenge & Solution",
    description:
      "Today's customers interact with businesses through multiple channels: WhatsApp, Website Forms, Email, Facebook, Instagram, Phone Calls, Live Chat, and SMS. The problem? Most businesses manage these channels separately.",
    bullets: [
      "Leads get missed",
      "Follow-ups are delayed",
      "Customer data becomes fragmented",
      "Sales opportunities are lost",
    ],
    finalText:
      "Peltown Omnichannel CRM centralizes all customer interactions into a unified system, giving your team a complete 360° view of every customer journey.",
  },
  "invoicing-billing": {
    title: "Get Paid Faster. Manage Revenue Smarter.",
    subtitle: "The Challenge & Solution",
    description:
      "Many businesses still struggle with manual invoice creation, payment delays, missed follow-ups, GST compliance issues, unorganized financial records, and customer payment disputes.",
    bullets: [
      "Manual invoice creation",
      "Payment delays",
      "Missed follow-ups",
      "GST compliance issues",
      "Unorganized financial records",
      "Customer payment disputes",
    ],
    finalText:
      "Peltown Invoicing & Billing automates your billing lifecycle from quotation to payment collection, helping you spend less time chasing payments and more time growing your business.",
  },
  "travel-agency": {
    title:
      "Stop Managing Your Travel Business Through Excel, WhatsApp & Emails",
    subtitle: "Travel Technology",
    description: "Most travel companies struggle with:",
    bullets: [
      "Lost inquiries",
      "Delayed follow-ups",
      "Manual itinerary creation",
      "Supplier coordination issues",
      "Payment tracking problems",
      "Booking management chaos",
      "Customer communication gaps",
    ],
    finalText:
      "Peltown Travel Agency Suite centralizes your entire business into one powerful platform. From inquiry to completed trip, every customer journey is managed in one place.",
  },
  "real-estate": {
    title: "Stop Managing Properties Through Excel Sheets & WhatsApp",
    subtitle: "Property Technology",
    description: "Most real estate businesses face challenges like:",
    bullets: [
      "Lost leads",
      "Poor follow-ups",
      "Unorganized property data",
      "Missed site visits",
      "Delayed bookings",
      "Payment tracking issues",
      "Channel partner management problems",
    ],
    finalText:
      "Peltown Real Estate Suite centralizes your entire sales and operations process into a single platform. Track every lead from inquiry to property possession.",
  },
  "restaurant-management": {
    title: "Streamline Restaurant Tables, Kitchens, and Orders",
    subtitle: "F&B Technology",
    description:
      "Managing front-of-house table seating, taking offline orders, updating digital menus, and coordinating kitchen display screens is a major operational challenge.",
    bullets: [
      "Wait times increase because orders are written on paper and walked to kitchens.",
      "Menu item changes do not reflect instantly on digital qr-codes.",
      "Tracking kitchen raw material usage and stock spoilage is highly complex.",
      "Customer billing splits and loyalty program records are disconnected.",
      "Online food delivery orders do not flow into the main cash drawer.",
    ],
    finalText:
      "Our F&B Management System connects table checkouts, updates kitchen display screens instantly, and coordinates raw material inventory in real time.",
  },
  "learning-management": {
    title: "Transform Learning Into A Scalable Digital Business",
    subtitle: "LMS Technology",
    description: "Many educational organizations struggle with:",
    bullets: [
      "Manual student management",
      "Unorganized course content",
      "Lack of progress tracking",
      "Poor learner engagement",
      "Limited scalability",
      "Assessment management issues",
      "Certificate generation challenges",
      "Inconsistent learning experiences",
    ],
    finalText:
      "Peltown LMS centralizes your entire learning ecosystem into one platform, allowing you to deliver professional online education at scale.",
  },
  "bulk-whatsapp": {
    title: "Your Customers Are Already On WhatsApp",
    subtitle: "WhatsApp Platform",
    description:
      "Most businesses spend heavily on email marketing, SMS campaigns, paid ads, and cold calling—yet customers respond faster on WhatsApp. Managing it manually leads to:",
    bullets: [
      "Missed inquiries",
      "Slow response times",
      "Lost leads",
      "Unorganized conversations",
      "Poor customer experiences",
    ],
    finalText:
      "Peltown WhatsApp Business Platform centralizes customer communication, automation, marketing, and support into one scalable solution.",
  },
  "email-automation": {
    title: "Stop Sending Emails Manually",
    subtitle: "Email Platform",
    description: "Most businesses lose customers because:",
    bullets: [
      "Leads are never followed up",
      "Prospects forget about your business",
      "Customers abandon purchases",
      "Communication is inconsistent",
      "Sales teams waste time on repetitive tasks",
    ],
    finalText:
      "Email automation delivers the right message at the right time automatically. Peltown Email Automation Platform helps you create automated customer journeys that generate leads, increase conversions, and improve customer retention.",
  },
  "helpdesk-ticketing": {
    title: "Great Customer Support Is A Competitive Advantage",
    subtitle: "Support & Ticketing",
    description: "Most businesses struggle with:",
    bullets: [
      "Missed support requests",
      "Slow response times",
      "Unorganized customer communication",
      "Lack of accountability",
      "Poor customer satisfaction",
      "Difficulty tracking issues",
      "No visibility into support performance",
    ],
    finalText:
      "Peltown Helpdesk & Ticketing System ensures every customer request is tracked, assigned, prioritized, and resolved efficiently. Turn customer support into a growth driver instead of a bottleneck.",
  },
  "appointment-booking": {
    title: "Stop Managing Appointments Through Calls, WhatsApp & Excel Sheets",
    subtitle: "Scheduling Platform",
    description: "Many businesses lose revenue because of:",
    bullets: [
      "Missed appointments",
      "Double bookings",
      "No-shows",
      "Manual scheduling errors",
      "Poor customer communication",
      "Unorganized calendars",
      "Inefficient staff allocation",
    ],
    finalText:
      "Peltown Appointment Booking Platform automates scheduling and customer communication so your team can focus on serving customers instead of managing calendars.",
  },
};
