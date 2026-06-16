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
  ShieldAlert,
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
  LucideIcon
} from "lucide-react";

export interface ProductHeroData {
  tagline: string;
  title: string;
  description: string;
  ctaText?: string;
  imageSrc: string;
  imageAlt: string;
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

export const PRODUCTS_HERO_CONTENT: Record<string, ProductHeroData> = {
  "ecommerce-suite": {
    tagline: "Retail & Commerce",
    title: "Enterprise E-commerce Suite",
    description: "Launch a robust, fully customizable multi-vendor or single-vendor online marketplace. Built with Next.js, modern databases, and optimized for maximum conversions.",
    ctaText: "Get Started",
    imageSrc: "/Img/store1.webp",
    imageAlt: "Enterprise E-commerce Suite",
  },
  "quick-commerce": {
    tagline: "Ultra-Fast Delivery",
    title: "10-Min Quick Commerce Engine",
    description: "Supercharge your local dispatch. Our system integrates dark store inventory, rapid rider allocation, and real-time mapping for sub-10 minute deliveries.",
    ctaText: "Request Demo",
    imageSrc: "/Img/store2.webp",
    imageAlt: "Quick Commerce Engine",
  },
  "cloud-pos": {
    tagline: "Point of Sale",
    title: "Next-Gen Cloud POS System",
    description: "Sync your physical storefront with your online inventory instantly. Accept all payment methods, track register shifts, and generate reports on the fly.",
    ctaText: "See in Action",
    imageSrc: "/Img/store3.webp",
    imageAlt: "Cloud POS System",
  },
  "fleet-delivery": {
    tagline: "Logistics Optimization",
    title: "Smart Fleet & Delivery Management",
    description: "Automate driver dispatching, optimize delivery routes, and provide end-to-end live tracking for your customers with dedicated rider and admin apps.",
    ctaText: "Schedule Demo",
    imageSrc: "/Img/store4.webp",
    imageAlt: "Fleet & Delivery Management",
  },
  "cloud-erp": {
    tagline: "Enterprise Operations",
    title: "Centralized Cloud ERP System",
    description: "Unify your accounting, supply chain, inventory, and human resource modules under a single, highly-secure cloud dashboard.",
    ctaText: "Consult Our Experts",
    imageSrc: "/Img/store5.webp",
    imageAlt: "Cloud ERP System",
  },
  "hrms-payroll": {
    tagline: "Workforce Management",
    title: "Automated HRMS & Payroll",
    description: "Manage employee shifts, automate complex payroll calculations, track attendance, and handle employee lifecycles with absolute compliance.",
    ctaText: "Start Free Trial",
    imageSrc: "/Img/about_peltown.webp",
    imageAlt: "HRMS & Payroll System",
  },
  "omnichannel-crm": {
    tagline: "Sales & CRM",
    title: "Omni-channel Customer CRM",
    description: "Consolidate chat, email, phone, and lead tickets in a single dashboard to close deals faster and build long-term relationships.",
    ctaText: "Boost Sales Now",
    imageSrc: "/Img/how1.webp",
    imageAlt: "Omni-channel CRM",
  },
  "invoicing-billing": {
    tagline: "Financial Tech",
    title: "Smart Invoicing & Billing Portal",
    description: "Automate recurring billing, generate professional invoices, manage multi-currency rates, and streamline tax compliances seamlessly.",
    ctaText: "Try Billing Suite",
    imageSrc: "/Img/how2.webp",
    imageAlt: "Invoicing & Billing Portal",
  },
  "travel-agency": {
    tagline: "Travel Technology",
    title: "Global Travel Agency Platform",
    description: "Create flight & hotel itineraries, manage direct bookings, handle visa processes, and generate invoice statements for holiday operators.",
    ctaText: "Modernize Booking",
    imageSrc: "/Img/how3.webp",
    imageAlt: "Travel Agency Platform",
  },
  "real-estate": {
    tagline: "Property Tech",
    title: "Interactive Real Estate Portal",
    description: "Present high-definition property listings, engage hot leads, integrate virtual tours, and manage agents with robust CRM workflows.",
    ctaText: "Explore Platform",
    imageSrc: "/Img/how4.webp",
    imageAlt: "Real Estate Portal",
  },
  "restaurant-management": {
    tagline: "Food & Beverage",
    title: "Modern Restaurant Management",
    description: "Menu management, table reservations, and integrated kitchen display systems.",
    ctaText: "Deploy to Kitchen",
    imageSrc: "/Img/store1.webp",
    imageAlt: "Restaurant Management Platform",
  },
  "learning-management": {
    tagline: "EdTech & Training",
    title: "Interactive Learning Management (LMS)",
    description: "Deploy white-labeled digital training hubs, host video lessons, design quizzes, track progress, and award certificates to students.",
    ctaText: "Create Academy",
    imageSrc: "/Img/store2.webp",
    imageAlt: "Learning Management System",
  },
  "bulk-whatsapp": {
    tagline: "Marketing & API",
    title: "Bulk WhatsApp Business API",
    description: "Broadcast promotional campaigns, schedule transactional alert templates, and build interactive chat automation hubs at scale.",
    ctaText: "Connect API",
    imageSrc: "/Img/partners_hero.webp",
    imageAlt: "Bulk WhatsApp Business API",
  },
  "email-automation": {
    tagline: "Marketing Automation",
    title: "Smart Email Automation Hub",
    description: "Build robust drip campaigns, manage customer lists, run newsletter sequences, and get high-deliverability inbox placement.",
    ctaText: "Automate Campaigns",
    imageSrc: "/Img/store3.webp",
    imageAlt: "Email Automation Hub",
  },
  "helpdesk-ticketing": {
    tagline: "Support & Ticketing",
    title: "Omni-channel Helpdesk System",
    description: "Track customer issues, establish SLA alert triggers, assign automated support queues, and resolve tickets across all modern communications.",
    ctaText: "Optimize Support",
    imageSrc: "/Img/store4.webp",
    imageAlt: "Helpdesk Ticketing System",
  },
  "appointment-booking": {
    tagline: "Scheduling Engine",
    title: "Automated Appointment Booking",
    description: "Empower customers to book meetings, sync multi-staff calendars, trigger SMS/Email reminders, and process deposits upfront.",
    ctaText: "Set Up Calendar",
    imageSrc: "/Img/store5.webp",
    imageAlt: "Appointment Booking Engine",
  },
};

export const PRODUCTS_FEATURED_CONTENT: Record<string, FeaturedSectionData> = {
  "ecommerce-suite": {
    title: "Advanced E-commerce Capabilities",
    desc: "High-performance features designed to scale your store and maximize revenue.",
    list: [
      { title: "Multi-vendor Support", desc: "Enable multiple merchants to manage storefronts, inventory, and payouts in a unified catalog ecosystem.", icon: Users },
      { title: "Advanced Inventory", desc: "Track stock counts recursively across physical warehouses, localized hubs, and dark stores in real time.", icon: Layers },
      { title: "Dynamic Checkout Engine", desc: "Increase checkout conversions with guest checkouts, local wallets, auto-discounts, and one-click buying.", icon: ShoppingCart }
    ]
  },
  "quick-commerce": {
    title: "Sub-10 Minute Delivery Operations",
    desc: "Engineered for rapid fulfillment, dark stores, and logistics fleet management.",
    list: [
      { title: "Real-time Driver Dispatch", desc: "Automate delivery requests and match dark stores to nearby drivers instantly using ping checks.", icon: Truck },
      { title: "Micro-fulfillment Dark Store Sync", desc: "Sync physical local store stock counts at high speed with catalog availability matrices.", icon: Home },
      { title: "Smart Geo-routing Algorithm", desc: "Provide riders with high-efficiency streets navigation patterns to ensure rapid local delivery times.", icon: Navigation }
    ]
  },
  "cloud-pos": {
    title: "Unified Retail Management",
    desc: "Perfect sync between online inventory, accounting, and registers.",
    list: [
      { title: "Offline-first Functionality", desc: "Process payments, generate print receipts, and track items even without internet connection.", icon: WifiOff },
      { title: "Multi-register Management", desc: "Oversee sales, opening/closing floats, and staff register permissions across global physical hubs.", icon: Monitor },
      { title: "Daily Cash Audits", desc: "Receive auto-generated end of day cash checks matching drawer counts against database ledger logs.", icon: Landmark }
    ]
  },
  "fleet-delivery": {
    title: "Optimized Fleet Logistics",
    desc: "Powering real-time driver tracking and dispatching workflows.",
    list: [
      { title: "Live Location Tracking", desc: "Track delivery rider coordinates on mapping software to keep dispatch logs and customers updated.", icon: MapPin },
      { title: "Automated Order Routing", desc: "Bundle delivery requests pointing in the same direction to maximize driver drop-off efficiency.", icon: Navigation },
      { title: "Driver Payout Dashboard", desc: "Set up dynamic driver payouts based on travel distance, tip amounts, and active duty hours logs.", icon: DollarSign }
    ]
  },
  "cloud-erp": {
    title: "End-to-End Enterprise Operations",
    desc: "Automate and integrate core operations across departments.",
    list: [
      { title: "Supply Chain Monitoring", desc: "Track raw material purchases, factory updates, and distribution logistics on centralized tables.", icon: Activity },
      { title: "Multi-department Ledger Reconciliation", desc: "Compile sales data, operating costs, and raw invoices under synchronized chart of accounts.", icon: Receipt },
      { title: "Advanced Asset Tracking", desc: "Monitor fixed assets, IT hardware, depreciation rates, and deployment lifecycles on the cloud.", icon: Database }
    ]
  },
  "hrms-payroll": {
    title: "Empower Your HR Workflows",
    desc: "Streamline shift planning, payroll processing, and attendance.",
    list: [
      { title: "Biometric Attendance Integration", desc: "Sync physical face scanner or card readers with digital employee timesheet database records.", icon: Fingerprint },
      { title: "Compliant Auto-payroll Processing", desc: "Calculate taxes, standard deductibles, overtime, and direct bank transfers with one click.", icon: Calculator },
      { title: "Employee Self-service Dashboard", desc: "Allow employees to submit leave requests, view payslip history, and update emergency contacts.", icon: UserCheck }
    ]
  },
  "omnichannel-crm": {
    title: "Holistic Customer Engagement",
    desc: "Unify all communication channels under a single client dashboard.",
    list: [
      { title: "Unified Chat Inbox", desc: "Unify direct messages from WhatsApp, Facebook Messenger, live chat, and email in one feed.", icon: MessageCircle },
      { title: "Automated Lead Score Tracking", desc: "Grade sales prospects automatically based on web engagement, email open history, and company details.", icon: Star },
      { title: "Deal Pipeline Dashboard", desc: "Visualize target deals at stages of the sales process to identify transaction bottlenecks.", icon: FolderGit2 }
    ]
  },
  "invoicing-billing": {
    title: "Frictionless Billing Infrastructure",
    desc: "Manage automated recurring billing and tax compliances effortlessly.",
    list: [
      { title: "Automated Subscription Billing", desc: "Charge credit cards recursively and adjust payment amounts dynamically based on service tiers.", icon: RefreshCw },
      { title: "Worldwide Tax Validation Rules", desc: "Check business VAT IDs and calculate tax rates based on client billing addresses.", icon: Globe },
      { title: "Smart Dunning sequences", desc: "Establish retry plans and email notification schedules for failed subscription card payments.", icon: ShieldAlert }
    ]
  },
  "travel-agency": {
    title: "Complete Travel Operator Engine",
    desc: "Manage client bookings, itineraries, and visa status in real time.",
    list: [
      { title: "Visual Itinerary Builder", desc: "Drag and drop hotel layouts, flight details, and local tours into downloadable PDFs.", icon: Route },
      { title: "Multi-API GDS Flight Integrations", desc: "Find live ticket availability and confirm flight bookings via API links with travel consolidators.", icon: Plane },
      { title: "Dynamic Guest Invoice Generation", desc: "Split payment structures and generate custom receipts detailing itemized trip booking lists.", icon: FileText }
    ]
  },
  "real-estate": {
    title: "Modern Property Listings Platform",
    desc: "Attract home buyers and manage property inventory.",
    list: [
      { title: "Advanced Polygon Map Search", desc: "Empower buyers to draw shape boundaries on a digital map to find nearby property matches.", icon: Map },
      { title: "Integrated 3D Virtual Tour Viewer", desc: "Embed interactive panoramic tours directly inside property listings to build client trust.", icon: Eye },
      { title: "Automated Agent Notification Routing", desc: "Ping local property agents instantly when buyers submit contact requests on their listings.", icon: Bell }
    ]
  },
  "restaurant-management": {
    title: "High-Efficiency Kitchen Operations",
    desc: "Keep operations smooth from table reservations to table delivery.",
    list: [
      { title: "Interactive QR Table Orders", desc: "Permit dine-in customers to view digital menus, place kitchen orders, and pay via their smartphones.", icon: QrCode },
      { title: "Real-time Kitchen Display Screens", desc: "Provide chef staff with visual cooking orders lists sorted by table times and kitchen section.", icon: MonitorPlay },
      { title: "Dynamic Reservation Calendar", desc: "Prevent dining room overbookings and manage tables layout with an interactive calendar console.", icon: CalendarDays }
    ]
  },
  "learning-management": {
    title: "Immersive E-learning Software",
    desc: "Build customizable training courses and evaluate students.",
    list: [
      { title: "Course Builder with Multimedia Support", desc: "Upload training video formats, organize chapters, and share downloadable source files.", icon: PlayCircle },
      { title: "Automated Certificate Generator", desc: "Create white-labeled course completion PDFs and award credentials to students automatically.", icon: Award },
      { title: "Secure Online Examination Engine", desc: "Generate randomized question pools, establish timers, and check results automatically.", icon: Shield }
    ]
  },
  "bulk-whatsapp": {
    title: "Scalable Customer Broadcasts",
    desc: "Send official templates and support chats at scale.",
    list: [
      { title: "Verified Green Tick Integration", desc: "Setup WhatsApp Business profiles with verified business status to raise customer trust.", icon: CheckCircle2 },
      { title: "High-throughput Campaign Broadcasts", desc: "Dispatch template-based promotional bulk alerts to target customer segments simultaneously.", icon: Send },
      { title: "AI Chatbot Auto-responses", desc: "Incorporate conversational reply templates to answer faq details without developer efforts.", icon: Bot }
    ]
  },
  "email-automation": {
    title: "Advanced Email Delivery & Campaigns",
    desc: "Ensure newsletters reach the primary inbox every time.",
    list: [
      { title: "Drag-and-drop Newsletter Designer", desc: "Draft high-converting marketing layouts using responsive block layout editing grids.", icon: Brush },
      { title: "Drip Sequence Workflows", desc: "Create visual email automation maps triggered when clients perform signup actions.", icon: GitFork },
      { title: "Real-time Click/Bounce Analytics", desc: "Observe tracking metrics including opens, links clicked, bounce lists, and spam reports.", icon: BarChart3 }
    ]
  },
  "helpdesk-ticketing": {
    title: "SLA-Driven Support Tickets",
    desc: "Resolve issues faster with automated support routing.",
    list: [
      { title: "Ticket Categories Routing", desc: "Forward support requests automatically to the right department using text analysis rules.", icon: Inbox },
      { title: "Auto-escalation SLA Rules", desc: "Escalate delayed customer response tickets to senior supervisors before deadlines expire.", icon: AlertCircle },
      { title: "Shared Internal Teammate Notes", desc: "Collaborate on customer requests by pinning internal comments visible only to support staff.", icon: StickyNote }
    ]
  },
  "appointment-booking": {
    title: "Smart Self-Scheduling Calendar",
    desc: "Allow clients to book appointments and sync calendars.",
    list: [
      { title: "Live Staff Slot Availability", desc: "Present clients with correct open meeting slots calculated from staff work calendar states.", icon: Clock },
      { title: "Calendar Synchronization", desc: "Sync meeting bookings to Google Calendar, Outlook, and Apple iCal dynamically.", icon: Calendar },
      { title: "Automatic Booking Reminders", desc: "Reduce client no-shows by configuring automated sms or email alerts before meeting times.", icon: BellRing }
    ]
  }
};

export const PRODUCTS_DETAIL_CONTENT: Record<string, DetailSectionData> = {
  "ecommerce-suite": {
    tagline: "Why Choose Us?",
    title: "A Complete E-commerce Solution",
    description: "At Peltown, we provide a holistic approach to building your online business.",
    list: [
      {
        id: "01",
        title: "E-commerce Website Development",
        tagline: "We build robust, high-converting online stores that provide an exceptional shopping experience for your customers.",
        bullets: [
          "Custom UI/UX Design tailored to your niche",
          "Mobile Responsive & Fast Loading Speed",
          "Secure Payment Gateway Integration",
          "User-Friendly Admin Panel for easy management"
        ],
        image: "/Img/store1.webp",
        href: "/services/web-development"
      },
      {
        id: "02",
        title: "Professional Product Photoshoot",
        tagline: "Visuals sell. Our professional photography services ensure your products look compelling and trustworthy.",
        bullets: [
          "High-Quality Studio Product Photography",
          "Creative Lifestyle & Model Shoots",
          "360-Degree Product Spin Videos",
          "Post-Processing & Retouching"
        ],
        image: "/Img/store2.webp",
        href: "/services/service-photoshoot"
      },
      {
        id: "03",
        title: "Branding & Packaging",
        tagline: "Create an unforgettable unboxing experience. We design your visual identity to resonate with your audience.",
        bullets: [
          "Logo & Brand Identity Design",
          "Custom Product Packaging & Labels",
          "Thank You Cards & Inserts",
          "Social Media Branding Kits"
        ],
        image: "/Img/store3.webp",
        href: "/services/service-branding"
      },
      {
        id: "04",
        title: "Digital Marketing & Growth",
        tagline: "Building the store is just the beginning. We help you attract traffic and convert visitors into loyal customers.",
        bullets: [
          "Search Engine Optimization (SEO) for organic ranking",
          "Social Media Marketing (Instagram, Facebook Ads)",
          "Google Ads & PPC Performance Marketing",
          "Email & SMS Marketing Automation"
        ],
        image: "/Img/store4.webp",
        href: "/services/digital-marketing"
      }
    ]
  },
  "quick-commerce": {
    tagline: "Operations & Execution",
    title: "Complete Local Dispatch Engine",
    description: "Manage dark stores, delivery agents, and rapid fulfillments seamlessly.",
    list: [
      {
        id: "01",
        title: "Dark Store Setup & Integration",
        tagline: "Model physical layout inventories inside our digital platform to speed up warehouse packing cycles.",
        bullets: [
          "Localized Dark Store inventory management",
          "Barcode pick-and-pack optimization tools",
          "Real-time low stock trigger alerts",
          "Offline backup for warehouse registers"
        ],
        image: "/Img/store2.webp",
        href: "/services/web-development"
      },
      {
        id: "02",
        title: "Rider App & Smart Dispatching",
        tagline: "Empower local drivers with intuitive maps, order logs, and direct chat consoles to speed up dropoffs.",
        bullets: [
          "Native Android/iOS rider applications",
          "Automated rider ping matchmaking algorithms",
          "In-app call and chat navigation overlays",
          "Daily driver cash collection control cards"
        ],
        image: "/Img/store5.webp",
        href: "/services/mobile-app"
      },
      {
        id: "03",
        title: "Geo-Location & Route Optimization",
        tagline: "Calculate best travel paths dynamically using mapping integrations to keep delivery cycles under 10 minutes.",
        bullets: [
          "Multi-stop dynamic route planning algorithms",
          "Traffic congestion delay calculations",
          "Precise buyer geofencing indicators",
          "Visual order progress history tracking"
        ],
        image: "/Img/how3.webp",
        href: "/services/seo-optimization"
      },
      {
        id: "04",
        title: "Marketing & Growth Boosters",
        tagline: "Attract local food, grocery, or pharmacy orders using precise location-based campaigns.",
        bullets: [
          "Hyperlocal push notification targeting systems",
          "Dynamic delivery coupon rules builder",
          "First-time buyer registration incentives",
          "Referral program share kits integration"
        ],
        image: "/Img/store4.webp",
        href: "/services/digital-marketing"
      }
    ]
  },
  "cloud-pos": {
    tagline: "Store Operations",
    title: "Enterprise Multi-Store Registry",
    description: "Oversee registers, transaction logs, and inventory counts on a central POS platform.",
    list: [
      {
        id: "01",
        title: "Terminal Hardware Sync",
        tagline: "Connect receipt printers, barcode scanners, card swipe machines, and cash registers instantly.",
        bullets: [
          "Dual Bluetooth and USB device interfaces",
          "Universal esc/pos thermal print layout",
          "Fast barcode SKU validation lookups",
          "Customer-facing display screen sync support"
        ],
        image: "/Img/store3.webp",
        href: "/services/web-development"
      },
      {
        id: "02",
        title: "Offline Payments & Syncing",
        tagline: "Process inventory transactions even during internet drops and reconcile balances once connection returns.",
        bullets: [
          "Local IndexedDB database transaction caching",
          "Safe offline credit card approval logs",
          "Auto-sync script triggers upon reconnection",
          "Dual-slip cash backup print configurations"
        ],
        image: "/Img/store5.webp",
        href: "/services/erp-system"
      },
      {
        id: "03",
        title: "Live Inventory & Ledger Reconciliations",
        tagline: "Sync purchase tallies directly with backoffice accounting records to prevent manual bookkeeping entry steps.",
        bullets: [
          "Auto-deduction SKU counts after checkouts",
          "Direct integration to ERP general ledgers",
          "Supplier purchase order generation",
          "Tax category sales audit documentation"
        ],
        image: "/Img/how1.webp",
        href: "/services/custom-crm"
      },
      {
        id: "04",
        title: "Omni-channel Checkout Sync",
        tagline: "Integrate POS with your online store catalog to run buy-online-pick-up-in-store (BOPIS) rules.",
        bullets: [
          "Single catalog matrix for online and offline",
          "In-store pickup order alerts dashboard",
          "Localized gift card balance audits",
          "Consolidated customer purchase history logs"
        ],
        image: "/Img/store1.webp",
        href: "/services/digital-marketing"
      }
    ]
  },
  "fleet-delivery": {
    tagline: "Logistics",
    title: "Optimized Fleet Dispatch Engine",
    description: "Manage route dispatch schedules and courier rosters on interactive mapping grids.",
    list: [
      {
        id: "01",
        title: "Driver App & Rosters",
        tagline: "Verify rider profiles, manage scheduling logs, and calculate payouts on standard layouts.",
        bullets: [
          "Driver background verification templates",
          "Weekly attendance shift scheduling grids",
          "Dynamic distance-based payroll calculators",
          "Customer tip balance audit accounts"
        ],
        image: "/Img/store4.webp",
        href: "/services/mobile-app"
      },
      {
        id: "02",
        title: "Real-time Rider Tracking",
        tagline: "Sync rider location telemetry on visual dashboards to calculate precise delivery ETA values.",
        bullets: [
          "High-accuracy background GPS tracking",
          "Interactive WebSockets coordinates stream",
          "Custom ETA indicators for consumer apps",
          "Geofenced drop-off confirmation checks"
        ],
        image: "/Img/how2.webp",
        href: "/services/seo-optimization"
      },
      {
        id: "03",
        title: "Auto-Dispatch Routing Engine",
        tagline: "Select best-fit carriers automatically based on vehicle capacities, delivery zones, and cargo load weight rules.",
        bullets: [
          "Dynamic bundle dispatch algorithms",
          "Carrier capacity limits checkers",
          "High-priority dispatch trigger rules",
          "Weather-based route optimization adjustments"
        ],
        image: "/Img/how3.webp",
        href: "/services/web-development"
      },
      {
        id: "04",
        title: "Fleet Performance Analytics",
        tagline: "Obtain clean analytics regarding average shipment transit times, driver utility rates, and fuel overhead logs.",
        bullets: [
          "Interactive driver leaderboard dashboards",
          "Historical SLA compliance reports",
          "Cost per delivery metrics analysis",
          "Asset health and maintenance reminders"
        ],
        image: "/Img/store1.webp",
        href: "/services/digital-marketing"
      }
    ]
  },
  "cloud-erp": {
    tagline: "Business Engine",
    title: "Unified Resource Planning Platform",
    description: "Reconcile corporate accounts, supply chains, and HR operations on one secure ERP engine.",
    list: [
      {
        id: "01",
        title: "Financials & General Ledger",
        tagline: "Draft balance sheets, tax statement exports, and operational audit trails automatically.",
        bullets: [
          "Double-entry bookkeeping validation rules",
          "Dynamic multi-currency conversion accounts",
          "Automated bank ledger feed sync plugins",
          "Consolidated profit & loss statement generators"
        ],
        image: "/Img/store5.webp",
        href: "/services/erp-system"
      },
      {
        id: "02",
        title: "Inventory & Procurement",
        tagline: "Oversee worldwide product stock locations and automate supplier purchase orders.",
        bullets: [
          "Multi-warehouse balance sheets matrices",
          "Minimum-threshold automated inventory reorders",
          "Vendor rate sheet comparison tables",
          "Incoming cargo inspection checklist forms"
        ],
        image: "/Img/how1.webp",
        href: "/services/custom-crm"
      },
      {
        id: "03",
        title: "Enterprise Resource Security",
        tagline: "Establish role-based access rules and data encryption policies to protect enterprise assets.",
        bullets: [
          "Strict SSO & MFA verification integrations",
          "Granular field-level user access controls",
          "Full immutable document change histories",
          "Daily secure database backups schedules"
        ],
        image: "/Img/how4.webp",
        href: "/services/web-development"
      },
      {
        id: "04",
        title: "Reporting & AI Insights",
        tagline: "Leverage machine learning dashboards to predict cash flows, seasonal stock demands, and department utility.",
        bullets: [
          "Interactive business intelligence metrics dashboards",
          "Predictive inventory forecasting algorithms",
          "Operational bottleneck indicators",
          "One-click corporate report compilers"
        ],
        image: "/Img/store1.webp",
        href: "/services/digital-marketing"
      }
    ]
  },
  "hrms-payroll": {
    tagline: "HR Operations",
    title: "Complete Workforce Management",
    description: "Automate global payroll calculations, timesheet approvals, and corporate HR policies.",
    list: [
      {
        id: "01",
        title: "Attendance & Shift Planning",
        tagline: "Oversee employee timesheets, shift rotation layouts, and direct leave request approvals.",
        bullets: [
          "Custom multi-shift rotation templates",
          "Leave policy configurations (Sick, Paid, Parental)",
          "Overtime rate calculation schedules",
          "Real-time employee calendar sync integrations"
        ],
        image: "/Img/about_peltown.webp",
        href: "/services/erp-system"
      },
      {
        id: "02",
        title: "Compliant Payroll Engine",
        tagline: "Automate monthly payouts, localized tax deductions, and bank file generation checks.",
        bullets: [
          "One-click monthly payroll runs",
          "Local tax bracket audit rule setups",
          "Automatic bank salary payout file exports",
          "Employee tax declaration entry consoles"
        ],
        image: "/Img/how2.webp",
        href: "/services/custom-crm"
      },
      {
        id: "03",
        title: "HR Portal & Documents",
        tagline: "Maintain compliance archives, corporate manuals, and employee contracts on a central secure portal.",
        bullets: [
          "Digital employee contract signature flows",
          "Secure personal identification documents storage",
          "Corporate policy handbook wikis",
          "Annual performance review cycle templates"
        ],
        image: "/Img/how4.webp",
        href: "/services/web-development"
      },
      {
        id: "04",
        title: "Onboarding & Recruitment",
        tagline: "Build structured job posting layouts, score hiring applicants, and automate background checks.",
        bullets: [
          "Applicant tracking system (ATS) pipelines",
          "Structured candidate scoring sheets",
          "Automated reference check forms",
          "Standardized employee welcome packets"
        ],
        image: "/Img/store2.webp",
        href: "/services/digital-marketing"
      }
    ]
  },
  "omnichannel-crm": {
    tagline: "Sales Operations",
    title: "Advanced Customer CRM Suite",
    description: "Convert prospects, coordinate deals, and streamline support feeds in a single console.",
    list: [
      {
        id: "01",
        title: "Multi-channel Social Inbox",
        tagline: "Consolidate sales leads from WhatsApp, email, and social networks into a unified conversation queue.",
        bullets: [
          "Integrated WhatsApp Business messaging nodes",
          "Automated incoming email-to-ticket conversion",
          "Customer engagement histories sidebars",
          "Shared agent internal messaging sidepanels"
        ],
        image: "/Img/how1.webp",
        href: "/services/whatsapp-api"
      },
      {
        id: "02",
        title: "Visual Sales Pipelines",
        tagline: "Drag and drop sales opportunities across stages to forecast revenues accurately.",
        bullets: [
          "Custom pipeline deal stage creation",
          "Drag-and-drop opportunity cards",
          "Weighted sales forecast reports",
          "In-app deal velocity indicators"
        ],
        image: "/Img/how2.webp",
        href: "/services/custom-crm"
      },
      {
        id: "03",
        title: "Lead Scoring & Triggers",
        tagline: "Configure triggers to assign lead score numbers based on email activities and page interactions.",
        bullets: [
          "Automated activity-based lead scoring matrix",
          "Custom high-priority sales agent alerts",
          "Auto-assignment round-robin rules",
          "Trigger-based outbound email automation"
        ],
        image: "/Img/how3.webp",
        href: "/services/seo-optimization"
      },
      {
        id: "04",
        title: "Analytics & Sales Reports",
        tagline: "Inspect charts detailing agent close rates, call frequencies, and average deal resolution times.",
        bullets: [
          "Interactive sales agent scoreboard tables",
          "Pipeline bottleneck analysis charts",
          "Campaign conversion rate counters",
          "Custom corporate data exports"
        ],
        image: "/Img/store4.webp",
        href: "/services/digital-marketing"
      }
    ]
  },
  "invoicing-billing": {
    tagline: "Finance",
    title: "Global Recurring Invoicing Portal",
    description: "Reconcile account transactions, manage worldwide sales tax, and run card retry scripts.",
    list: [
      {
        id: "01",
        title: "Automated Subscription Billing",
        tagline: "Reconcile tiered monthly access invoices, pay-per-use tallies, and user seat license fees automatically.",
        bullets: [
          "Visual recurring plan configurators",
          "Metered API consumption pricing calculators",
          "Prorated upgrade and downgrade adjustments",
          "Flexible localized coupon code processors"
        ],
        image: "/Img/how2.webp",
        href: "/services/erp-system"
      },
      {
        id: "02",
        title: "Multi-currency Global Payments",
        tagline: "Process global credit cards, local bank wire routing numbers, and regional wallet systems safely.",
        bullets: [
          "PCI-compliant payment checkout page models",
          "Real-time currency exchange conversions",
          "Fallback payment merchant router systems",
          "Localized customer checkout invoice prints"
        ],
        image: "/Img/store5.webp",
        href: "/services/web-development"
      },
      {
        id: "03",
        title: "Tax Compliances & Invoices",
        tagline: "Compile compliant sales tax receipts automatically to fulfill tax authority requirements.",
        bullets: [
          "Automated global VAT/GST calculators",
          "Verified commercial e-invoice XML exports",
          "Quarterly tax liability statement summaries",
          "Customer tax-exempt validation workflows"
        ],
        image: "/Img/how4.webp",
        href: "/services/seo-optimization"
      },
      {
        id: "04",
        title: "Dunning & Collections Control",
        tagline: "Deploy card retries and customized email alerts to recover outstanding customer invoice dues.",
        bullets: [
          "Smart dunning interval schedules sets",
          "Overdue payment warning email automations",
          "Automated client access limit triggers",
          "Consolidated bad-debt accounting logs"
        ],
        image: "/Img/store3.webp",
        href: "/services/digital-marketing"
      }
    ]
  },
  "travel-agency": {
    tagline: "Booking Engine",
    title: "Central Holiday Operator Platform",
    description: "Create visual client itineraries, sync flight catalogs, and process guest payments.",
    list: [
      {
        id: "01",
        title: "Visual Itinerary Builder",
        tagline: "Add day-by-day sightseeing programs, hotels layouts, and transport guides inside client PDFs.",
        bullets: [
          "Drag-and-drop itinerary template builders",
          "Pre-populated hotel description databases",
          "Integrated Google Maps visual route displays",
          "Interactive customer-facing quote consoles"
        ],
        image: "/Img/how3.webp",
        href: "/services/web-development"
      },
      {
        id: "02",
        title: "GDS Flights & Hotel APIs",
        tagline: "Retrieve live ticket pricing lists and confirm hotel reservations dynamically from booking wholesalers.",
        bullets: [
          "Universal Amadeus / Sabre API interfaces",
          "Live ticket reservation hold scripts",
          "Direct XML hotel inventory feeds sync",
          "Dynamic agency commission margin markups"
        ],
        image: "/Img/partners_hero.webp",
        href: "/services/erp-system"
      },
      {
        id: "03",
        title: "Travel Visa & Passport CRM",
        tagline: "Store traveler identification details securely and follow visa application updates on progress steps.",
        bullets: [
          "Secure personal ID file uploads archives",
          "Automated visa requirement checking scripts",
          "Teammate visa submission reminders",
          "Buyer embassy document request notifications"
        ],
        image: "/Img/how1.webp",
        href: "/services/custom-crm"
      },
      {
        id: "04",
        title: "Marketing & Lead Capture",
        tagline: "Convert web visitors into travel inquiries with custom holiday search widgets and packages.",
        bullets: [
          "Dynamic destination landing page templates",
          "Custom lead capture travel widgets",
          "Seasonal promotional package banner sets",
          "Automated inquiry follow-up email scripts"
        ],
        image: "/Img/store4.webp",
        href: "/services/digital-marketing"
      }
    ]
  },
  "real-estate": {
    tagline: "Property Tech",
    title: "Dynamic Broker & Agency Portal",
    description: "Showcase residential property listings, track client applications, and organize virtual tours.",
    list: [
      {
        id: "01",
        title: "Modern Listings Directory",
        tagline: "Upload high-definition listing photos, tag specific property features, and list structural details.",
        bullets: [
          "Detailed property profile editing forms",
          "Advanced filter query panels (Price, Beds, Type)",
          "Bulk photo upload and compression tools",
          "Exportable PDF property flyer templates"
        ],
        image: "/Img/how4.webp",
        href: "/services/web-development"
      },
      {
        id: "02",
        title: "3D Panoramic Virtual Tours",
        tagline: "Allow buyers to explore properties from home by embedding panoramic visual assets inside listing profiles.",
        bullets: [
          "Universal Matterport iframe compatibility",
          "Full-screen 360 viewer layouts",
          "Custom interactive floor plan layouts",
          "Mobile-optimized visual VR console views"
        ],
        image: "/Img/store2.webp",
        href: "/services/service-photoshoot"
      },
      {
        id: "03",
        title: "Lead Routing & Agent CRM",
        tagline: "Forward property lead inquiries to specific real estate brokers based on local zip codes rules.",
        bullets: [
          "Automated zip code matching rules",
          "Lead status trackers (Contacted, Offer, Closed)",
          "Individual broker task dashboards",
          "Automated buyer text reminder scripts"
        ],
        image: "/Img/how1.webp",
        href: "/services/custom-crm"
      },
      {
        id: "04",
        title: "SEO & Local Landing Pages",
        tagline: "Rank higher on local search terms with automated neighborhood property catalogs pages.",
        bullets: [
          "Automated local landing pages creation",
          "Structured schema markers for real estate listings",
          "Dynamic neighborhood price charts widgets",
          "Local schools data integration interfaces"
        ],
        image: "/Img/store3.webp",
        href: "/services/seo-optimization"
      }
    ]
  },
  "restaurant-management": {
    tagline: "Restaurant Tech",
    title: "Unified Kitchen & Dine-in System",
    description: "Manage table bookings, QR smartphone menus, and kitchen cooking order timelines.",
    list: [
      {
        id: "01",
        title: "Digital QR smartphone menus",
        tagline: "Generate QR codes for tables to allow guests to select items, order, and pay from their devices.",
        bullets: [
          "Live digital menu editing portals",
          "Automatic QR table sticker code generators",
          "Direct guest table mobile payment checkouts",
          "Item out-of-stock indicators dashboards"
        ],
        image: "/Img/store1.webp",
        href: "/services/web-development"
      },
      {
        id: "02",
        title: "Kitchen Display Screens (KDS)",
        tagline: "Provide kitchen chefs with dynamic touchscreen panels showing cooking orders sorted by prep times.",
        bullets: [
          "Durable touchscreen KDS panel visual layouts",
          "Prep time threshold delay color indicators",
          "Interactive order ticket check-off controls",
          "Dish recipe detail lookup buttons"
        ],
        image: "/Img/store5.webp",
        href: "/services/erp-system"
      },
      {
        id: "03",
        title: "Dine-in Table Reservations",
        tagline: "Reconcile phone bookings and online reservations on a synchronized dining room table layout console.",
        bullets: [
          "Interactive table seating floorplan editors",
          "Automated SMS booking confirmation alerts",
          "Average table turnover analytics charts",
          "Customer dining history review dashboards"
        ],
        image: "/Img/how3.webp",
        href: "/services/custom-crm"
      },
      {
        id: "04",
        title: "Inventory & Recipe Audits",
        tagline: "Calculate recipe ingredient use dynamically to update dark store grocery stock tallies.",
        bullets: [
          "Ingredient usage matrix calculations",
          "Recipe cost variance tracking tables",
          "Supplier invoice parsing tools integrations",
          "Daily inventory waste audit templates"
        ],
        image: "/Img/store2.webp",
        href: "/services/digital-marketing"
      }
    ]
  },
  "learning-management": {
    tagline: "EdTech",
    title: "White-label Learning Platform",
    description: "Coordinate interactive training classes, draft quizzes, and auto-award course certificates.",
    list: [
      {
        id: "01",
        title: "Visual Course Builder",
        tagline: "Create structured learning curriculum maps with custom modules, lessons, and video streams.",
        bullets: [
          "Drag-and-drop course curriculum builders",
          "Secure video streaming hosting modules",
          "Student downloadable files upload storage",
          "Live virtual classroom scheduler links"
        ],
        image: "/Img/store2.webp",
        href: "/services/web-development"
      },
      {
        id: "02",
        title: "Examinations & Quizzes",
        tagline: "Evaluate student progress with custom quizzes, timers, and automatic score cards.",
        bullets: [
          "Multi-question types builders (Boolean, Multiple Choice)",
          "Randomized question pooling rules configuration",
          "Time-limited quiz verification scripts",
          "Manual assignment grading review dashboards"
        ],
        image: "/Img/how3.webp",
        href: "/services/custom-crm"
      },
      {
        id: "03",
        title: "Automated Certificates Engine",
        tagline: "Issue course completion credentials containing unique verification IDs directly to student profiles.",
        bullets: [
          "Visual certificate template canvas designers",
          "Dynamic recipient name print fields",
          "Immutable booking serial number indicators",
          "One-click LinkedIn credential share buttons"
        ],
        image: "/Img/how4.webp",
        href: "/services/service-branding"
      },
      {
        id: "04",
        title: "Marketing & Course Sales",
        tagline: "Sell courses to global students with custom checkout pages, discount codes, and affiliates.",
        bullets: [
          "SEO-optimized course catalog landing pages",
          "Direct course purchase checkout forms",
          "Student referral and affiliate tracking tools",
          "Corporate volume discount code managers"
        ],
        image: "/Img/store1.webp",
        href: "/services/digital-marketing"
      }
    ]
  },
  "bulk-whatsapp": {
    tagline: "Communications",
    title: "Enterprise WhatsApp Broadcast Engine",
    description: "Launch targeted marketing campaigns and handle customer support on WhatsApp.",
    list: [
      {
        id: "01",
        title: "Template Broadcast Campaigns",
        tagline: "Send personalized notifications, payment reminders, and shipping updates via official APIs.",
        bullets: [
          "Official Meta WhatsApp API integrations",
          "Custom text variable matching algorithms",
          "Scheduled campaign calendar planners",
          "Broadcast queue delivery status reports"
        ],
        image: "/Img/partners_hero.webp",
        href: "/services/whatsapp-api"
      },
      {
        id: "02",
        title: "Verified Business Green Tick",
        tagline: "Coordinate profile audits and apply for verified green badge ticks from WhatsApp/Meta teams.",
        bullets: [
          "Meta Business verification document guide forms",
          "Official profile API configuration setups",
          "Brand name compliance validation checks",
          "WhatsApp display name update workflows"
        ],
        image: "/Img/how1.webp",
        href: "/services/email-solutions"
      },
      {
        id: "03",
        title: "AI Automated Chatbots",
        tagline: "Deploy customer reply scenarios to answer basic questions without agent actions.",
        bullets: [
          "Visual chatbot path builder grids",
          "Keyword-triggered auto-reply scripts",
          "Direct agent handover escalation conditions",
          "Interactive chat button selector panels"
        ],
        image: "/Img/how3.webp",
        href: "/services/custom-crm"
      },
      {
        id: "04",
        title: "Shared Team Inbox",
        tagline: "Enable multiple support agents to respond to incoming chats from a single business number.",
        bullets: [
          "Multi-agent chat allocation pipelines",
          "Agent internal thread notes pinpoints",
          "Average message response times scoreboards",
          "Customer chat resolution status labels"
        ],
        image: "/Img/store4.webp",
        href: "/services/digital-marketing"
      }
    ]
  },
  "email-automation": {
    tagline: "Marketing Automation",
    title: "Smart Campaign & Email Engine",
    description: "Build visual automation pathways, design responsive emails, and audit delivery logs.",
    list: [
      {
        id: "01",
        title: "Drag & Drop Email Creator",
        tagline: "Compose eye-catching HTML newsletters using predefined block layouts without coding.",
        bullets: [
          "Mobile-responsive newsletter design canvases",
          "Predefined block components lists",
          "Custom template HTML importer panels",
          "Automatic email size and image optimization"
        ],
        image: "/Img/store3.webp",
        href: "/services/web-development"
      },
      {
        id: "02",
        title: "Visual Drip Campaigns",
        tagline: "Configure workflow maps that execute steps dynamically when users sign up.",
        bullets: [
          "Trigger-action email flow builders",
          "Dynamic delay timers adjustments (Days, Hours)",
          "Customer engagement branching branches",
          "Automated tag assignment scripts"
        ],
        image: "/Img/how2.webp",
        href: "/services/bulk-email"
      },
      {
        id: "03",
        title: "List Management & Signup Forms",
        tagline: "Create high-converting email subscription popups and segments to keep lists organized.",
        bullets: [
          "Custom website signup forms widgets",
          "Double opt-in verification scripts",
          "Dynamic list segment filters matrices",
          "Bulk contact CSV file import panels"
        ],
        image: "/Img/how4.webp",
        href: "/services/seo-optimization"
      },
      {
        id: "04",
        title: "Analytics & Delivery Reports",
        tagline: "Audit bounce tallies, spam complaint alerts, and click histories on unified visual charts.",
        bullets: [
          "Detailed inbox deliverability percentage indicators",
          "A/B campaign subject tests comparisons",
          "Individual recipient activity logs",
          "Automated campaign performance emails"
        ],
        image: "/Img/store4.webp",
        href: "/services/digital-marketing"
      }
    ]
  },
  "helpdesk-ticketing": {
    tagline: "Customer Service",
    title: "SLA-Driven Support Ticketing",
    description: "Manage incoming customer complaints, resolve tickets, and track SLA violations.",
    list: [
      {
        id: "01",
        title: "Multi-channel Ticketing Feed",
        tagline: "Forward issues from email, social networks, and chat to a central support dashboard.",
        bullets: [
          "Unified ticketing feed listings",
          "Automated email thread grouping algorithms",
          "Universal query search tags labels",
          "Support request urgency scoring indicators"
        ],
        image: "/Img/store4.webp",
        href: "/services/web-development"
      },
      {
        id: "02",
        title: "Automated Agent Queues",
        tagline: "Forward tickets to available support agents automatically based on skills rules.",
        bullets: [
          "Round-robin ticket assignment scripts",
          "Agent skills classification dashboards",
          "Out-of-office ticket reassignment rules",
          "Incoming ticket load balancer charts"
        ],
        image: "/Img/how3.webp",
        href: "/services/custom-crm"
      },
      {
        id: "03",
        title: "SLA Deadline Monitoring",
        tagline: "Establish reply timers for different issues and track ticket violations on charts.",
        bullets: [
          "Custom SLA target time configurations",
          "Live ticket countdown timer badges",
          "Auto-escalation warning alert emails",
          "Department SLA compliance rate indicators"
        ],
        image: "/Img/how2.webp",
        href: "/services/erp-system"
      },
      {
        id: "04",
        title: "Knowledge Base & FAQs",
        tagline: "Reduce support ticket loads by publishing customer help center articles pages.",
        bullets: [
          "Article composer with SEO markers",
          "Hierarchical help category consoles",
          "Customer article feedback thumbs scores",
          "In-app ticketing widget FAQ links"
        ],
        image: "/Img/store1.webp",
        href: "/services/seo-optimization"
      }
    ]
  },
  "appointment-booking": {
    tagline: "Scheduling Tech",
    title: "Unified Staff Scheduling Engine",
    description: "Empower clients to book slot appointments and sync meeting invites across calendars.",
    list: [
      {
        id: "01",
        title: "Real-time Availability Calendars",
        tagline: "Draft visual booking layouts showing open staff availability slots automatically.",
        bullets: [
          "Dynamic staff shift scheduling slots",
          "Buffer time interval gap settings",
          "Multi-timezone scheduling conversion maps",
          "Dine-in or service select checklist panels"
        ],
        image: "/Img/store5.webp",
        href: "/services/web-development"
      },
      {
        id: "02",
        title: "Calendar Sync Integrations",
        tagline: "Sync confirm bookings to staff personal schedules automatically to prevent double-bookings.",
        bullets: [
          "Bi-directional Google Calendar API sync",
          "Direct Microsoft Outlook calendar connectors",
          "Exportable universal iCal invite attachments",
          "Real-time schedule conflict validation scripts"
        ],
        image: "/Img/how4.webp",
        href: "/services/erp-system"
      },
      {
        id: "03",
        title: "Automated Booking Notifications",
        tagline: "Forward booking confirmation files and SMS/Email reminders to clients before meeting times.",
        bullets: [
          "Personalized SMS text dispatch workflows",
          "Dynamic email booking confirmation sheets",
          "Customer booking reschedule request consoles",
          "Automated follow-up survey email scripts"
        ],
        image: "/Img/how2.webp",
        href: "/services/whatsapp-api"
      },
      {
        id: "04",
        title: "Upfront Checkout Payments",
        tagline: "Process security deposits or full booking payments during appointment bookings slots.",
        bullets: [
          "Integrated Stripe / PayPal card widgets",
          "Refund and cancellation transaction policies",
          "Tax invoice prints receipt creators",
          "Sales audit balance reconciliation sheets"
        ],
        image: "/Img/store3.webp",
        href: "/services/digital-marketing"
      }
    ]
  }
};
