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
  IndianRupee,
  Settings,
  Key,
  TrendingUp,
  Search,
  Cpu,
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
    description: "Launch a robust, fully customizable multi-vendor or single-vendor online marketplace. Built with Next.js, modern databases, and optimized for maximum conversions.",
    ctaText: "Get Started",
    imageSrc: "/Img/store1.webp",
    imageAlt: "Enterprise E-commerce Suite",
  },
  "quick-commerce": {
    tagline: "Ultra-Fast Delivery",
    title: "Peltown Quick Commerce Suite",
    description: "Supercharge your local dispatch. Our system integrates dark store inventory, rapid rider allocation, and real-time mapping for sub-10 minute deliveries.",
    ctaText: "Request Demo",
    imageSrc: "/Img/store2.webp",
    imageAlt: "Quick Commerce Engine",
  },
  "cloud-pos": {
    tagline: "Point of Sale",
    title: "Peltown Cloud POS",
    description: "Sync your physical storefront with your online inventory instantly. Accept all payment methods, track register shifts, and generate reports on the fly.",
    ctaText: "See in Action",
    imageSrc: "/Img/store3.webp",
    imageAlt: "Cloud POS System",
  },
  "fleet-delivery": {
    tagline: "Logistics Optimization",
    title: "Peltown Fleet Delivery Suite",
    description: "Automate driver dispatching, optimize delivery routes, and provide end-to-end live tracking for your customers with dedicated rider and admin apps.",
    ctaText: "Schedule Demo",
    imageSrc: "/Img/store4.webp",
    imageAlt: "Fleet & Delivery Management",
  },
  "cloud-erp": {
    tagline: "Enterprise Operations",
    title: "Peltown Cloud ERP",
    description: "Unify your accounting, supply chain, inventory, and human resource modules under a single, highly-secure cloud dashboard.",
    ctaText: "Consult Our Experts",
    imageSrc: "/Img/store5.webp",
    imageAlt: "Cloud ERP System",
  },
  "hrms-payroll": {
    tagline: "Workforce Management",
    title: "Peltown HRMS & Payroll",
    description: "Manage employee shifts, automate employee management, attendance tracking, leave management, payroll processing, and handle employee lifecycles with absolute compliance.",
    ctaText: "Request Live Demo",
    imageSrc: "/Img/about_peltown.webp",
    imageAlt: "HRMS & Payroll System",
  },
  "omnichannel-crm": {
    tagline: "Sales & CRM",
    title: "Peltown Omnichannel CRM",
    description: "Centralize customer interactions into a unified platform. Unify WhatsApp, email, social, phone calls, and live chat to build long-term relationships.",
    ctaText: "Boost Sales Now",
    imageSrc: "/Img/how1.webp",
    imageAlt: "Omni-channel CRM",
  },
  "invoicing-billing": {
    tagline: "Financial Tech",
    title: "Peltown Invoicing & Billing",
    description: "Automate your billing lifecycle from quotation to payment collection. GST invoicing, recurring billing, and online payment integrations built for your business.",
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
    title: "Enterprise HR & Payroll Automation",
    desc: "Streamline employee scheduling, biometric logs, compliance, and payroll processing.",
    list: [
      { title: "Biometric & GPS Attendance", desc: "Sync biometric devices, RFID scanners, or geo-fenced mobile check-ins with employee timesheets.", icon: Fingerprint },
      { title: "Accurate Payroll & Taxes", desc: "Automate salaries, bonuses, and statutory deductions like PF, ESI, and TDS calculations.", icon: Calculator },
      { title: "Employee Self-Service (ESS)", desc: "Empower staff to view payslips, apply for leaves, and manage tax declarations independently.", icon: UserCheck }
    ]
  },
  "omnichannel-crm": {
    title: "One Customer. One Conversation.",
    desc: "Unify all communication channels under a single client dashboard.",
    list: [
      { title: "Unified Shared Inbox", desc: "Consolidate conversations from WhatsApp, email, website chat, and social media in one feed.", icon: MessageCircle },
      { title: "AI-Powered Lead Scoring", desc: "Grade sales prospects automatically based on web engagement, behavior analysis, and opportunity recommendations.", icon: Star },
      { title: "Deal Pipeline Dashboard", desc: "Visualize target deals at stages of the sales process to identify transaction bottlenecks.", icon: FolderGit2 }
    ]
  },
  "invoicing-billing": {
    title: "Frictionless Billing Infrastructure",
    desc: "Manage automated recurring billing and tax compliances effortlessly.",
    list: [
      { title: "Recurring Billing Automation", desc: "Automate monthly, quarterly, or annual billing cycles, renewals, and reminders for subscription models with minimal manual effort.", icon: RefreshCw },
      { title: "GST & Tax Compliance", desc: "Native support for CGST, SGST, IGST, and HSN/SAC codes tailored for multi-state Indian operations.", icon: Globe },
      { title: "Integrated Payments Collection", desc: "Accept Razorpay, Stripe, PayPal, UPI, net banking, or cards directly from visual digital invoices.", icon: DollarSign }
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
          "Blog Management"
        ],
        image: "/Img/store1.webp",
        href: "/services/web-development"
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
          "Product Reviews"
        ],
        image: "/Img/store2.webp",
        href: "/services/erp-system"
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
          "Order History"
        ],
        image: "/Img/store3.webp",
        href: "/services/custom-crm"
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
          "Purchase Management"
        ],
        image: "/Img/store4.webp",
        href: "/services/erp-system"
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
          "Marketing Automation"
        ],
        image: "/Img/how1.webp",
        href: "/services/custom-crm"
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
          "Credit & Debit Cards"
        ],
        image: "/Img/how2.webp",
        href: "/services/web-development"
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
          "Multiple Shipping Methods"
        ],
        image: "/Img/store5.webp",
        href: "/services/web-development"
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
          "Conversion Analytics"
        ],
        image: "/Img/how3.webp",
        href: "/services/seo-optimization"
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
          "Product Approval System"
        ],
        image: "/Img/how4.webp",
        href: "/services/web-development"
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
          "Business Accounts"
        ],
        image: "/Img/about_peltown.webp",
        href: "/services/web-development"
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
          "Delivery App"
        ],
        image: "/Img/partners_hero.webp",
        href: "/services/mobile-app"
      },
      {
        id: "12",
        title: "Marketing & Growth Tools",
        tagline: "Scale your store and reach more customers with built-in growth features.",
        bullets: [
          "Email Marketing",
          "WhatsApp Integration",
          "Discount Coupons",
          "Referral Programs",
          "Loyalty Programs",
          "SEO Tools",
          "Push Notifications",
          "Product Recommendations"
        ],
        image: "/Img/store1.webp",
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
        title: "Customer Ordering Platform",
        tagline: "Provide a seamless ordering experience.",
        bullets: [
          "Android & iOS Native Apps",
          "Progressive Web App (PWA)",
          "Real-Time Product Availability",
          "Smart Category Navigation",
          "Multiple Payment Gateways",
          "Live GPS Order Tracking"
        ],
        image: "/Img/store1.webp",
        href: "/services/web-development"
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
          "Micro-Fulfillment Center Optimization"
        ],
        image: "/Img/store2.webp",
        href: "/services/erp-system"
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
          "Product Option Mapping"
        ],
        image: "/Img/store3.webp",
        href: "/services/erp-system"
      },
      {
        id: "04",
        title: "Order Management System",
        tagline: "Manage thousands of daily orders efficiently from a single dashboard.",
        bullets: [
          "Automated Dispatch & Assignment",
          "End-to-End Order Status Tracking",
          "Comprehensive Order History & Ledger",
          "Instant Refunds & Dispute Handling",
          "Return Request Workflows",
          "Fulfillment Analytics & Reports"
        ],
        image: "/Img/store4.webp",
        href: "/services/custom-crm"
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
          "Fleet Performance & Payout Reports"
        ],
        image: "/Img/store5.webp",
        href: "/services/mobile-app"
      },
      {
        id: "06",
        title: "Warehouse & Fulfillment Module",
        tagline: "Manage inventory movement across multiple cities and locations.",
        bullets: [
          "Central & Regional Warehousing",
          "Inter-Store Stock Transfers",
          "Automated Purchase Orders",
          "Vendor & Supplier Management",
          "Inbound/Outbound Tracking",
          "Scalable Hyperlocal Logistics"
        ],
        image: "/Img/how1.webp",
        href: "/services/erp-system"
      }
    ]
  },
  "cloud-pos": {
    tagline: "Core Features",
    title: "More Than a POS. A Complete Business Management Platform.",
    description: "Traditional billing software only records sales. Peltown Cloud POS helps businesses manage billing, stock levels, and operations across multiple locations.",
    list: [
      {
        id: "01",
        title: "Smart Billing System",
        tagline: "Fast & Accurate Checkout. Speed up transactions and improve customer experience.",
        bullets: [
          "Barcode Scanning Support",
          "GST Compliant Billing",
          "Thermal & Digital Receipts",
          "Product Search & Filters",
          "Quick Billing Interface",
          "Return, Refund & Discount Management"
        ],
        image: "/Img/store3.webp",
        href: "/services/web-development"
      },
      {
        id: "02",
        title: "Inventory Management",
        tagline: "Real-Time Inventory Tracking. Know exactly what's in stock across every location.",
        bullets: [
          "Live Stock Level Tracking",
          "Low Stock Trigger Alerts",
          "Stock Adjustments & Transfers",
          "Batch & Variant Management",
          "Warehouse Stock Tracking",
          "Automated Purchase Orders"
        ],
        image: "/Img/store4.webp",
        href: "/services/erp-system"
      },
      {
        id: "03",
        title: "Multi-Store Management",
        tagline: "Manage Every Outlet From One Dashboard. Perfect for growing retail chains.",
        bullets: [
          "Multiple Store/Outlet Management",
          "Centralized Global Inventory",
          "Branch-Level Sales Performance Reports",
          "Role-Based User Permissions",
          "Real-Time Branch Analytics",
          "Automated Product Catalog Sync"
        ],
        image: "/Img/store5.webp",
        href: "/services/erp-system"
      },
      {
        id: "04",
        title: "Customer Management (CRM)",
        tagline: "Build Strong Customer Relationships. Understand your customers and increase repeat purchases.",
        bullets: [
          "Detailed Customer Profiles",
          "Historical Purchase Ledger",
          "Behavioral Customer Segmentation",
          "Reward Points & Loyalty Programs",
          "Birthday Offers & Promotions",
          "Advanced Customer Insights"
        ],
        image: "/Img/how1.webp",
        href: "/services/custom-crm"
      },
      {
        id: "05",
        title: "Purchase & Supplier Management",
        tagline: "Better Inventory Planning. Manage vendors and stock replenishment efficiently.",
        bullets: [
          "Supplier Directory Database",
          "Automated Purchase Orders",
          "Goods Receipt Notes (GRN)",
          "Vendor Performance Reports",
          "Inventory Cost Tracking",
          "Automated Stock Replenishment"
        ],
        image: "/Img/how2.webp",
        href: "/services/erp-system"
      },
      {
        id: "06",
        title: "Reports & Analytics",
        tagline: "Make Better Business Decisions. Access business insights in real time.",
        bullets: [
          "Daily Sales & Audit Reports",
          "Product Performance Analytics",
          "Gross Profit & Loss Reports",
          "Live Inventory Status Audit",
          "Staff Activity Performance Logs",
          "Tax Compliance Reports"
        ],
        image: "/Img/how3.webp",
        href: "/services/seo-optimization"
      },
      {
        id: "07",
        title: "Omnichannel Commerce",
        tagline: "Sell Online & Offline From One Platform. Connect physical stores with digital sales channels.",
        bullets: [
          "Dynamic E-Commerce Sync",
          "Website & Marketplace Integration",
          "Central Real-Time Inventory Control",
          "Unified Customer Order Management",
          "Profile & Loyalty Sync Across Channels"
        ],
        image: "/Img/store1.webp",
        href: "/services/web-development"
      }
    ]
  },
  "fleet-delivery": {
    tagline: "Core Features",
    title: "Complete Fleet & Logistics Management Software",
    description: "Running a delivery operation involves more than tracking vehicles. Peltown Fleet Delivery Suite helps businesses manage vehicles, drivers, route optimization, and dispatches from one dashboard.",
    list: [
      {
        id: "01",
        title: "Real-Time GPS Fleet Tracking",
        tagline: "Know Where Every Vehicle Is. Monitor your fleet in real time.",
        bullets: [
          "Live GPS Coordinates Tracking",
          "Comprehensive Vehicle Location History",
          "Interactive Route Playback",
          "Dynamic Geofencing & Alerts",
          "Speed Limit Monitoring",
          "Trip Logs & Utilization Reports"
        ],
        image: "/Img/store4.webp",
        href: "/services/mobile-app"
      },
      {
        id: "02",
        title: "Smart Dispatch Management",
        tagline: "Assign Deliveries Faster. Automate dispatch operations and reduce manual work.",
        bullets: [
          "Automated Delivery Assignment",
          "Smart Driver Allocation",
          "Route Scheduling & Allocation",
          "Load Planning Optimization",
          "High-Efficiency Automated Dispatch",
          "Urgent Delivery Prioritization"
        ],
        image: "/Img/store2.webp",
        href: "/services/mobile-app"
      },
      {
        id: "03",
        title: "Route Optimization",
        tagline: "Reduce Fuel Costs & Delivery Time. Optimize routes automatically using intelligent planning.",
        bullets: [
          "Multi-Stop Route Sequencing",
          "Traffic-Aware Smart Navigation",
          "Dynamic Delivery Rescheduling",
          "Total Distance Minimization",
          "Driver Workload Balance Map",
          "Geographic Territory Management"
        ],
        image: "/Img/how3.webp",
        href: "/services/seo-optimization"
      },
      {
        id: "04",
        title: "Driver Management",
        tagline: "Improve Fleet Productivity. Manage drivers and performance from one dashboard.",
        bullets: [
          "Comprehensive Driver Profiles",
          "Rider Performance Scorecards",
          "Attendance & Log-On Timesheets",
          "Detailed Trip History Log",
          "Safe Driving Scoring Matrix",
          "Native Mobile Driver Application"
        ],
        image: "/Img/store1.webp",
        href: "/services/mobile-app"
      },
      {
        id: "05",
        title: "Delivery Tracking System",
        tagline: "Complete Delivery Visibility. Track deliveries from dispatch to completion.",
        bullets: [
          "Live Order Transit Tracking",
          "Interactive Customer Map Link",
          "Real-Time Delivery Status Updates",
          "Live Estimated Arrival Time (ETA)",
          "Instant Delivery Confirmation",
          "Failed Delivery Reason Tracking"
        ],
        image: "/Img/how2.webp",
        href: "/services/web-development"
      },
      {
        id: "06",
        title: "Electronic Proof of Delivery (ePOD)",
        tagline: "Eliminate Delivery Disputes. Capture proof of completed deliveries instantly.",
        bullets: [
          "In-App Customer Digital Signatures",
          "Delivery Drop-off Photo Capture",
          "Secure OTP & QR Verification",
          "Digital Delivery Notes & Logs",
          "GPS Verified Drop Coordinates",
          "Automatic Timestamp Verification"
        ],
        image: "/Img/store5.webp",
        href: "/services/mobile-app"
      },
      {
        id: "07",
        title: "Fuel Management",
        tagline: "Control Fleet Operating Costs. Monitor fuel usage across your entire fleet.",
        bullets: [
          "Fuel Consumption & Expense Reports",
          "Accurate Vehicle Mileage Tracking",
          "SLA/Fuel Cost Variance Tracking",
          "Fuel Theft Detection Alerts",
          "Vehicle Efficiency Analytics",
          "Consolidated Fuel Costs Dashboard"
        ],
        image: "/Img/how1.webp",
        href: "/services/erp-system"
      },
      {
        id: "08",
        title: "Vehicle Maintenance Management",
        tagline: "Prevent Breakdowns Before They Happen. Track maintenance schedules and service history.",
        bullets: [
          "Preventive Maintenance Scheduling",
          "Service Reminders & Alerts",
          "Detailed Repair & Expense History",
          "Insurance & Tax Policy Tracking",
          "Fitness & Transport Permit Alerts",
          "Regulatory Compliance Scoring"
        ],
        image: "/Img/store3.webp",
        href: "/services/erp-system"
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
    description: "Automate workforce administration, attendance tracking, compliance, recruitment, and payroll processing in a single system.",
    list: [
      {
        id: "01",
        title: "Attendance & Location tracking",
        tagline: "Track attendance via biometric systems, face recognition, or GPS-enabled mobile apps.",
        bullets: [
          "Biometric, RFID, & Face Scanner integration",
          "GPS tracking & Geo-Fencing for field staff",
          "Shift roster scheduling & late arrival rules",
          "Timesheet corrections & holiday calendar management"
        ],
        image: "/Img/about_peltown.webp",
        href: "/services/erp-system"
      },
      {
        id: "02",
        title: "Auto-Payroll & Compliance Engine",
        tagline: "Automate complex monthly salary runs and stay compliant with Indian tax regulations.",
        bullets: [
          "Salary structure setups & one-click payroll runs",
          "PF, ESI, Professional Tax, and TDS calculations",
          "Automated compliance reporting & payslip distribution",
          "Bonus, incentives, loans, & reimbursement tracking"
        ],
        image: "/Img/how2.webp",
        href: "/services/custom-crm"
      },
      {
        id: "03",
        title: "Recruitment & Performance Management",
        tagline: "Hire top talent and align company goals with structured performance appraisals.",
        bullets: [
          "Job postings & Candidate database pipelines",
          "Resume parsing & interview scheduler tracking",
          "KPI tracking, reviews, & appraisals cycles",
          "Employee development & progress dashboards"
        ],
        image: "/Img/how4.webp",
        href: "/services/web-development"
      },
      {
        id: "04",
        title: "Employee Self-Service & Analytics",
        tagline: "Empower employees with self-service portals and gain data-driven HR insights.",
        bullets: [
          "View payslips, check leave balances & tax documents",
          "Submit leave applications & profile update requests",
          "Real-time team turnover & overtime dashboards",
          "Bi-directional approvals via Mobile Apps & Web portal"
        ],
        image: "/Img/store2.webp",
        href: "/services/digital-marketing"
      }
    ]
  },
  "omnichannel-crm": {
    tagline: "Sales Operations",
    title: "Advanced Customer CRM Suite",
    description: "Convert prospects, coordinate deals, automate follow-ups, and streamline support feeds in a single console.",
    list: [
      {
        id: "01",
        title: "Lead & Sales Pipeline Management",
        tagline: "Track sales opportunities from inquiry to conversion using interactive pipeline boards.",
        bullets: [
          "Custom pipelines and drag-and-drop deal cards",
          "Automatic lead assignment and routing rules",
          "Follow-up scheduling and automated notification alerts",
          "Revenue forecasting and bottleneck analysis charts"
        ],
        image: "/Img/how2.webp",
        href: "/services/custom-crm"
      },
      {
        id: "02",
        title: "Omnichannel Communication Hub",
        tagline: "Unify WhatsApp, email, website forms, social, and phone calls into a single customer timeline.",
        bullets: [
          "Official WhatsApp Business API team inbox",
          "Multi-channel message aggregation (FB, IG, LinkedIn)",
          "Email integration with campaign template builders",
          "Continuous timeline history as clients switch channels"
        ],
        image: "/Img/how1.webp",
        href: "/services/whatsapp-api"
      },
      {
        id: "03",
        title: "Marketing & Workflow Automation",
        tagline: "Nurture prospects automatically and eliminate repetitive tasks for sales reps.",
        bullets: [
          "Drip email campaigns and automated WhatsApp sequences",
          "Customer database segmentation models",
          "SLA ticket tracking and escalation path alerts",
          "Automated lead nurturing based on page clicks"
        ],
        image: "/Img/how3.webp",
        href: "/services/seo-optimization"
      },
      {
        id: "04",
        title: "Customer 360° & AI-Powered Insights",
        tagline: "Gain complete client visibility and prioritize actions with smart forecasting tools.",
        bullets: [
          "Unified profile with contact, purchase, and ticket logs",
          "AI lead prioritization and behavioral analysis",
          "Campaign conversion rates and agent scorecard tables",
          "Custom data reports and Excel exports"
        ],
        image: "/Img/store4.webp",
        href: "/services/digital-marketing"
      }
    ]
  },
  "invoicing-billing": {
    tagline: "Finance",
    title: "Global Recurring Invoicing Portal",
    description: "Automate invoicing pipelines, collect credit payments online, track custom expenses, and comply with state tax requirements.",
    list: [
      {
        id: "01",
        title: "Invoice & Estimate Management",
        tagline: "Create professional invoices and convert sales quotations into revenue documents in seconds.",
        bullets: [
          "Custom branding invoice designs and PDF generator",
          "Sales proposal, estimate, and quote acceptance tracking",
          "Proforma invoices, credit notes, and debit notes templates",
          "Multi-currency support for global cross-border billing"
        ],
        image: "/Img/how2.webp",
        href: "/services/erp-system"
      },
      {
        id: "02",
        title: "Recurring Billing & Payments",
        tagline: "Secure automatic subscription collections and integrate online payment gateways.",
        bullets: [
          "Subscription cycles automated runs (Monthly, Annual)",
          "Stripe, Razorpay, PayPal, and UPI checkout links",
          "Partial payment setups and outstanding customer ledgers",
          "Real-time receivables tracking and payment logs"
        ],
        image: "/Img/store5.webp",
        href: "/services/web-development"
      },
      {
        id: "03",
        title: "GST & Expense Audit Compliance",
        tagline: "Generate state-compliant tax statements and monitor business expenses under one dashboard.",
        bullets: [
          "Native CGST, SGST, IGST calculations and HSN/SAC tags support",
          "Expense categorization, vendor costs, and profitability analysis",
          "Automated tax summaries and GSTR billing report exports",
          "Multi-state tax compliance structures validation"
        ],
        image: "/Img/how4.webp",
        href: "/services/seo-optimization"
      },
      {
        id: "04",
        title: "Multi-Branch Billing & Auto-Reminders",
        tagline: "Manage multiple outlets on the go and reduce collections delays.",
        bullets: [
          "Branch-level billing limits and centralized reporting",
          "Automated invoice reminder alerts via WhatsApp, Email, & SMS",
          "Mobile Apps (Android & iOS) and tablet dashboard tools",
          "Role-based staff billing permissions profiles"
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

export const PRODUCTS_WHY_CHOOSE_US_CONTENT: Record<string, {
  title?: string;
  subtitle?: string;
  desc?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: { icon: any; title: string; desc: string; }[];
}> = {
  "ecommerce-suite": {
    title: "Why Choose Peltown Commerce Suite?",
    subtitle: "Why Peltown?",
    desc: "We build custom digital operating systems that adapt to your business, not the other way around.",
    items: [
      { icon: Settings, title: "Fully Customizable", desc: "Unlike SaaS platforms that restrict customization, our solution is tailored exactly to your business workflows." },
      { icon: Key, title: "Own Your Platform", desc: "No monthly platform lock-in. You own the source code, database, and infrastructure completely." },
      { icon: TrendingUp, title: "Scalable Architecture", desc: "Built to handle growth seamlessly from hundreds to millions of orders without slowing down." },
      { icon: Search, title: "SEO-Friendly", desc: "Designed following best practices to rank better on Google search results and generate organic traffic." },
      { icon: IndianRupee, title: "Made for Indian Businesses", desc: "Supports GST compliance, UPI Payments, Razorpay integration, Indian logistics providers, and multi-language setups." },
      { icon: Cpu, title: "Complete Business Ecosystem", desc: "Integrates directly with CRM systems, ERP software, WhatsApp Business APIs, email marketing, mobile apps, and accounting modules." }
    ]
  },
  "quick-commerce": {
    title: "Why Choose Peltown Quick Commerce Suite?",
    subtitle: "Why Peltown?",
    desc: "We build customized, enterprise-ready hyperlocal delivery solutions that adapt to your operations.",
    items: [
      { icon: IndianRupee, title: "Built for Indian Market", desc: "Supports GST, UPI Payments, local logistics providers, COD orders, and multi-language setups." },
      { icon: Settings, title: "Fully Customizable", desc: "Adapt the platform to your specific hyperlocal industry, delivery models, inventory systems, and business workflows." },
      { icon: Key, title: "White Label & Ownership", desc: "No SaaS platform lock-in. You own the source code, databases, customer data, and branding completely." },
      { icon: TrendingUp, title: "Enterprise Scale", desc: "Engineered to handle millions of transactions, multi-city operations, thousands of SKUs, and large delivery fleets." },
      { icon: Layers, title: "Real-Time Inventory Control", desc: "Complete visibility of stock counts across central warehouses, regional hubs, and local dark store shelves in real time." },
      { icon: Truck, title: "Optimized Last-Mile Logistics", desc: "Deliver within minutes through automated rider matching, live GPS tracking, and dynamic route planning." }
    ]
  },
  "cloud-pos": {
    title: "Why Choose Peltown Cloud POS?",
    subtitle: "Why Choose POS?",
    desc: "A powerful, feature-rich retail operating system that scales with your growth.",
    items: [
      { icon: Globe, title: "Fully Cloud-Based", desc: "Access your business data, sales charts, inventory metrics, and logs from anywhere in the world in real time." },
      { icon: WifiOff, title: "Works Online & Offline", desc: "Continue billing seamlessly even during internet disruptions and automatically reconcile data once connection returns." },
      { icon: TrendingUp, title: "Scalable Architecture", desc: "Engineered to start small with a single storefront register and scale smoothly to hundreds of outlets." },
      { icon: IndianRupee, title: "GST Ready", desc: "Built natively for Indian taxation and invoice compliances with tax audit exports reports." },
      { icon: Key, title: "Complete Ownership", desc: "Unlike recurring SaaS platforms, you completely own your database, customer records, and platform codebase." },
      { icon: Cpu, title: "Integrated Business Ecosystem", desc: "Connects with E-Commerce layouts, Quick Commerce apps, WhatsApp APIs, CRM pipelines, and ERP platforms." }
    ]
  },
  "fleet-delivery": {
    title: "Why Choose Peltown Fleet Delivery Suite?",
    subtitle: "Why Fleet Delivery?",
    desc: "A fully integrated, cloud-based logistics and dispatch engine built to optimize delivery networks.",
    items: [
      { icon: IndianRupee, title: "Built for Indian Logistics", desc: "Supports GST compliance, multi-city delivery routing protocols, local Indian delivery workflows, and localized networks." },
      { icon: Globe, title: "Cloud-Based Platform", desc: "Access dispatch logs, real-time rider maps, fuel consumption charts, and analytics remotely from any device." },
      { icon: TrendingUp, title: "Scalable Infrastructure", desc: "Engineered to scale from startup courier runs to large, national logistics fleets handling millions of monthly packages." },
      { icon: Eye, title: "Complete Operations Visibility", desc: "Full tracking transparency of vehicles, rider routes, delivery statuses, and fuel consumption on a central dashboard." },
      { icon: Settings, title: "Customizable Workflows", desc: "Configurable and tailored to your specific courier operations, distributors workflows, and manufacturer supply chain networks." },
      { icon: Cpu, title: "Business System Integrations", desc: "Connects with ERP platforms, CRM systems, accounting ledgers, e-commerce checkout apps, WhatsApp, and SMS gateways." }
    ]
  },
  "cloud-erp": {
    title: "Why Choose Peltown Enterprise ERP?",
    subtitle: "Why ERP?",
    desc: "Unify financial ledger, warehouse, and supply chain modules under one dashboard.",
    items: [
      { icon: Database, title: "Single Source of Truth", desc: "Eliminate spreadsheet chaos by centralizing data across multiple corporate departments." },
      { icon: Layers, title: "Modular Architecture", desc: "Deploy modules as you grow—choose accounting, HR, inventory, or CRM, all natively integrated." },
      { icon: Shield, title: "Compliance & Security", desc: "Built with double-entry validation rules, role access controls, and full immutable change histories." },
      { icon: Calculator, title: "Financial Ledger Sync", desc: "Auto-synchronize sales invoices, operating overhead, and bank statements in general ledgers." },
      { icon: Activity, title: "Auto-Replenishment Engine", desc: "Tracks supply chain material status and fires automated purchase orders to vendors." },
      { icon: Key, title: "Granular Permissions", desc: "Configure field-level user access permissions to protect confidential company databases." }
    ]
  },
  "hrms-payroll": {
    title: "Why Choose Peltown HRMS & Payroll?",
    subtitle: "Why Peltown?",
    desc: "We build tailored human resource and payroll engines around your custom organization structure.",
    items: [
      { icon: IndianRupee, title: "Built for Indian Businesses", desc: "Native support for PF, ESI, Professional Tax, TDS calculations, and multi-state compliance regulations." },
      { icon: Cpu, title: "Cloud-Based Platform", desc: "Access employee records, leave schedules, and run monthly payroll from anywhere on a secure cloud panel." },
      { icon: Layers, title: "Multi-Branch Support", desc: "Manage workers across multiple offices, retail stores, manufacturing hubs, and field locations seamlessly." },
      { icon: TrendingUp, title: "Scalable Architecture", desc: "Designed to grow with you, supporting operations from a few dozen workers up to enterprise-level operations." },
      { icon: Settings, title: "Fully Customizable", desc: "Easily adapt attendance rules, multi-level leave approvals, and salary structures to your workflow." },
      { icon: Key, title: "Complete Integration Capabilities", desc: "Connects with ERP modules, accounting tools, WhatsApp alert systems, email services, and biometric hardware devices." }
    ]
  },
  "omnichannel-crm": {
    title: "Why Choose Peltown CRM?",
    subtitle: "Why Peltown?",
    desc: "We build tailored CRM platforms that adapt to your sales pipeline and customer workflows.",
    items: [
      { icon: Settings, title: "Built Around Your Process", desc: "Unlike standard CRMs, we customize pipelines, automations, and custom fields to match your exact business workflows." },
      { icon: Cpu, title: "Cloud-Based & Scalable", desc: "Access all customer details, communication histories, and pipelines from anywhere on a secure cloud panel." },
      { icon: Eye, title: "Complete Visibility", desc: "Sales, marketing, and support teams work from the same single unified customer profile record." },
      { icon: RefreshCw, title: "Automation First", desc: "Eliminate repetitive typing, schedule follow-ups automatically, and assign leads instantly." },
      { icon: Key, title: "Integration Ready", desc: "Connects with ERP platforms, HRMS dashboards, WhatsApp API, payment gateways, and third-party APIs." },
      { icon: MessageCircle, title: "Omnichannel timeline", desc: "Unifies chats from WhatsApp, email, forms, calls, and socials into a single customer timeline." }
    ]
  },
  "invoicing-billing": {
    title: "Why Choose Peltown Invoicing & Billing?",
    subtitle: "Why Peltown?",
    desc: "We build secure, compliant, and highly automated billing systems customized for your business operations.",
    items: [
      { icon: IndianRupee, title: "Built for Indian Businesses", desc: "Native GST configurations, multi-state operations support, and pre-integrated Indian payment gateways." },
      { icon: Cpu, title: "Cloud-Based Platform", desc: "Access financial profiles, invoices ledger, and receivables reports securely from any mobile or desktop web browser." },
      { icon: TrendingUp, title: "Scalable Architecture", desc: "Our platform scales seamlessly from simple freelancer billing systems up to multi-branch corporate enterprises." },
      { icon: Clock, title: "Faster Payment Collection", desc: "Automate client payment chase cycles using smart WhatsApp, SMS, and Email payment reminders templates." },
      { icon: Settings, title: "Fully Customizable", desc: "Design custom invoice PDF formats, tax brackets, quotation approval routes, and automated billing workflows." },
      { icon: Key, title: "Integration Ready", desc: "Integrates with ERP directories, CRM pipelines, accounting tools, WhatsApp alert triggers, and third-party APIs." }
    ]
  },
  "travel-agency": {
    title: "Why Choose Peltown Travel Platform?",
    subtitle: "Why Travel?",
    desc: "A booking operator engine with itinerary composition and global integrations.",
    items: [
      { icon: Route, title: "Itinerary Composer", desc: "Drag and drop hotels, flights, and sightseeing details into downloadable itineraries." },
      { icon: Plane, title: "GDS Flights & Hotel Sync", desc: "Find live ticket availability and confirm bookings via API links with travel consolidators." },
      { icon: Receipt, title: "Split Invoices Builder", desc: "Configure agent commissions, custom markups, and split invoice billings for corporate groups." },
      { icon: UserCheck, title: "Traveler Profiles CRM", desc: "Store passport details, travel preferences, and visa status information for repeat clients." },
      { icon: Users, title: "Group Booking Boards", desc: "Manage bulk room allotments, bus charters, and group tours from a visual calendar dashboard." },
      { icon: FileText, title: "Auto Travel Vouchers", desc: "Generate PDF flight vouchers, hotel confirmation receipts, and visa itineraries automatically." }
    ]
  },
  "real-estate": {
    title: "Why Choose Peltown Real Estate Portal?",
    subtitle: "Why Real Estate?",
    desc: "A listing search platform with map polygon triggers and agent routing.",
    items: [
      { icon: Map, title: "Polygon Map Searches", desc: "Empower buyers to draw shape boundaries on a digital map to find nearby property matches." },
      { icon: Eye, title: "3D Virtual Tours Viewer", desc: "Embed interactive panoramic tours directly inside property listings to build client trust." },
      { icon: Bell, title: "Agent Lead Alerts Routing", desc: "Ping local property agents instantly when buyers submit contact requests on listings." },
      { icon: Search, title: "Advanced Catalog Filters", desc: "Sort real estate catalog by property type, square footage, amenities, and pricing brackets." },
      { icon: Database, title: "Property Inventory Registry", desc: "Central database for brokers to manage residential, commercial, and land plot availability." },
      { icon: MessageCircle, title: "Broker-Buyer Chats", desc: "Direct instant messaging interface between home searchers and listing agents." }
    ]
  },
  "restaurant-management": {
    title: "Why Choose Peltown Restaurant Suite?",
    subtitle: "Why Restaurant?",
    desc: "Manage dine-in table bookings, QR menus, and kitchen displays.",
    items: [
      { icon: QrCode, title: "QR Table Orders Engine", desc: "Permit dine-in customers to view digital menus, place kitchen orders, and pay via smartphones." },
      { icon: MonitorPlay, title: "Kitchen Display Screens", desc: "Provide chef staff with visual cooking orders lists sorted by table times and kitchen section." },
      { icon: CalendarDays, title: "Reservation Calendars Console", desc: "Prevent dining room overbookings and manage tables layout with an interactive calendar console." },
      { icon: Calculator, title: "Recipe Costing Database", desc: "Calculate margins on menu options by tracking raw material usage weights and vendor pricing." },
      { icon: Layers, title: "Central Kitchen Sync", desc: "Manage bulk inventory stock transfers from main storage warehouses to multiple outlets." },
      { icon: ShoppingCart, title: "Direct Delivery Checkout", desc: "Avoid aggregator commissions with custom delivery checkout maps and automated rider pings." }
    ]
  },
  "learning-management": {
    title: "Why Choose Peltown LMS?",
    subtitle: "Why LMS?",
    desc: "E-learning academy engine with chapter plans, testing, and certificates.",
    items: [
      { icon: PlayCircle, title: "Chapters Course Builder", desc: "Compose training chapters with video lessons, pdf attachments, and rich text notes." },
      { icon: Award, title: "Certificates Generator", desc: "Design custom course completion certificates and automatically email them to students." },
      { icon: Shield, title: "Secure Online Testing", desc: "Establish timed exams, randomize question pools, and auto-evaluate student results." },
      { icon: Activity, title: "Live Progress Tracking", desc: "Monitor student dashboard activity, lesson completion rates, and average quiz scores." },
      { icon: MessageCircle, title: "Student Forums Console", desc: "Facilitate direct discussion channels between students and course instructors." },
      { icon: DollarSign, title: "Subscriptions & Sales", desc: "Charge client enrollments via one-time payments or monthly membership checkouts." }
    ]
  },
  "bulk-whatsapp": {
    title: "Why Choose Peltown WhatsApp API?",
    subtitle: "Why WhatsApp?",
    desc: "Connect official bulk campaigns and AI chatbot replies at scale.",
    items: [
      { icon: CheckCircle2, title: "Official Green Tick API", desc: "Verify your business profile with Meta to raise customer trust and brand credibility." },
      { icon: Send, title: "Mass Campaign Broadcasts", desc: "Dispatch template-based promotional bulk alerts to target customer segments simultaneously." },
      { icon: Bot, title: "AI Chatbot Auto-Replies", desc: "Incorporate conversational reply templates to answer FAQ details without developer efforts." },
      { icon: Users, title: "Shared Multi-Agent Inbox", desc: "Enable multiple customer support representatives to chat from a single business phone number." },
      { icon: Bell, title: "Automated Triggers", desc: "Configure order updates, appointment reminders, and OTP checks to send automatically." },
      { icon: BarChart3, title: "Broadcast Delivery Reports", desc: "Detailed stats tracking message delivery rates, read marks, and link clicks." }
    ]
  },
  "email-automation": {
    title: "Why Choose Peltown Email Suite?",
    subtitle: "Why Email?",
    desc: "Reach inboxes directly with automated drips and responsive layouts.",
    items: [
      { icon: Brush, title: "Newsletter Layout Editor", desc: "Draft marketing layouts using responsive block layout editing grids." },
      { icon: GitFork, title: "Email Drip Automation Maps", desc: "Create visual email automation maps triggered when clients perform signup actions." },
      { icon: Activity, title: "SMTP Deliverability Optimizer", desc: "Configure DKIM, SPF, and DMARC settings to improve primary folder placement." },
      { icon: ShieldAlert, title: "Spam & Bounce Monitors", desc: "Automatically scrub inactive contacts and failed email addresses to protect domain scores." },
      { icon: BarChart3, title: "Campaign Click Reports", desc: "Observe tracking metrics including opens, links clicked, bounce lists, and spam reports." },
      { icon: Users, title: "Segmented Contact Lists", desc: "Filter subscriber database records by tags, purchase behaviors, and geographic locations." }
    ]
  },
  "helpdesk-ticketing": {
    title: "Why Choose Peltown Helpdesk?",
    subtitle: "Why Helpdesk?",
    desc: "Resolve customer issues faster with ticket dispatch rules and SLAs.",
    items: [
      { icon: Inbox, title: "Auto Ticket Dispatching", desc: "Forward customer support emails to the right department queue based on text keywords." },
      { icon: AlertCircle, title: "SLA Warning Timers", desc: "Escalate delayed customer response tickets to senior supervisors before deadlines expire." },
      { icon: StickyNote, title: "Internal Team Comments", desc: "Collaborate on customer requests by pinning internal comments visible only to support staff." },
      { icon: Star, title: "CSAT Feedback Scorecard", desc: "Email customers automated feedback links to grade agent helpfulness upon ticket resolutions." },
      { icon: Layers, title: "Multi-Channel Integration", desc: "Unify support tickets from email, chat widgets, WhatsApp, and social media in one log." },
      { icon: Activity, title: "SLA Compliance Dashboard", desc: "Audit logs tracking average ticket response timelines and agent resolution scores." }
    ]
  },
  "appointment-booking": {
    title: "Why Choose Peltown Booking Engine?",
    subtitle: "Why Booking?",
    desc: "Self-scheduling calendars with calendar sync and payment gateways.",
    items: [
      { icon: Calendar, title: "Calendar Sync Integration", desc: "Sync client meeting bookings to Google Calendar, Outlook, and Apple iCal dynamically." },
      { icon: BellRing, title: "SMS & WhatsApp Reminders", desc: "Reduce client booking no-shows by configuring automated alerts before meeting times." },
      { icon: DollarSign, title: "Booking Deposits Checkouts", desc: "Charge security deposits or full session payments upfront during scheduling flows." },
      { icon: Clock, title: "Staff Shift Schedulers", desc: "Present clients with correct open meeting slots calculated from staff work calendar states." },
      { icon: FileText, title: "Intake Form Fields", desc: "Collect crucial client details and documents during the appointment booking process." },
      { icon: Globe, title: "Auto Timezone Conversion", desc: "Convert scheduling slots automatically to match customer and staff local times." }
    ]
  }
};

export const PRODUCTS_INDUSTRIES_SERVE_CONTENT: Record<string, {
  title?: string;
  subtitle?: string;
  desc?: string;
  items: { name: string; color: string; }[];
}> = {
  "ecommerce-suite": {
    title: "Industries We Serve",
    subtitle: "Versatile Solutions",
    desc: "Our e-commerce suite powers businesses across diverse industries, from retail to manufacturing.",
    items: [
      { name: "Fashion & Apparel", color: "from-pink-500/20 to-rose-500/20" },
      { name: "Electronics", color: "from-blue-500/20 to-indigo-500/20" },
      { name: "Grocery & FMCG", color: "from-green-500/20 to-emerald-500/20" },
      { name: "Beauty & Cosmetics", color: "from-purple-500/20 to-fuchsia-500/20" },
      { name: "Furniture", color: "from-amber-500/20 to-orange-500/20" },
      { name: "Healthcare", color: "from-teal-500/20 to-cyan-500/20" },
      { name: "Industrial Products", color: "from-zinc-500/20 to-neutral-500/20" },
      { name: "Automotive Parts", color: "from-red-500/20 to-orange-500/20" },
      { name: "Books & Education", color: "from-sky-500/20 to-indigo-500/20" },
      { name: "Wholesale & Distribution", color: "from-violet-500/20 to-purple-500/20" }
    ]
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
      { name: "Flowers & Gifts", color: "from-purple-500/20 to-fuchsia-500/20" },
      { name: "Food & Beverage", color: "from-red-500/20 to-orange-500/20" },
      { name: "B2B Distribution", color: "from-violet-500/20 to-purple-500/20" }
    ]
  },
  "cloud-pos": {
    title: "Industries We Serve",
    subtitle: "POS Ecosystem",
    desc: "Our point-of-sale systems are optimized for diverse physical retail environments.",
    items: [
      { name: "Supermarkets & Marts", color: "from-green-500/20 to-emerald-500/20" },
      { name: "Fashion Retailers", color: "from-pink-500/20 to-rose-500/20" },
      { name: "Cafes & Bakeries", color: "from-amber-500/20 to-orange-500/20" },
      { name: "Pharmacy Stores", color: "from-teal-500/20 to-cyan-500/20" },
      { name: "Electronics Outlets", color: "from-blue-500/20 to-indigo-500/20" },
      { name: "Gift Shops", color: "from-purple-500/20 to-fuchsia-500/20" },
      { name: "Salons & Spas", color: "from-rose-500/20 to-pink-500/20" },
      { name: "Wholesale Counters", color: "from-zinc-500/20 to-neutral-500/20" }
    ]
  },
  "fleet-delivery": {
    title: "Logistics Sectors We Power",
    subtitle: "Fleet Routing",
    desc: "Providing high-performance courier dispatch networks across diverse markets.",
    items: [
      { name: "Hyperlocal Logistics", color: "from-blue-500/20 to-indigo-500/20" },
      { name: "Courier & Mail Services", color: "from-sky-500/20 to-blue-500/20" },
      { name: "Food Delivery Networks", color: "from-red-500/20 to-orange-500/20" },
      { name: "E-commerce Logistics", color: "from-yellow-500/20 to-amber-500/20" },
      { name: "Pharmacy Distributors", color: "from-green-500/20 to-emerald-500/20" },
      { name: "B2B Cargo Fleet", color: "from-zinc-500/20 to-neutral-500/20" },
      { name: "On-demand Laundromat", color: "from-purple-500/20 to-violet-500/20" },
      { name: "Grocery Fulfillment", color: "from-teal-500/20 to-cyan-500/20" }
    ]
  },
  "cloud-erp": {
    title: "ERP Industries We Optimize",
    subtitle: "Enterprise Sync",
    desc: "Centralized resources control tailored for complex manufacturing and retail chains.",
    items: [
      { name: "Manufacturing Plants", color: "from-zinc-500/20 to-neutral-500/20" },
      { name: "Wholesale Distributors", color: "from-blue-500/20 to-indigo-500/20" },
      { name: "Healthcare Groups", color: "from-teal-500/20 to-cyan-500/20" },
      { name: "Real Estate Developers", color: "from-amber-500/20 to-orange-500/20" },
      { name: "Construction Firms", color: "from-yellow-500/20 to-amber-500/20" },
      { name: "Retail Corporations", color: "from-pink-500/20 to-rose-500/20" },
      { name: "Educational Networks", color: "from-sky-500/20 to-indigo-500/20" },
      { name: "Import-Export Agents", color: "from-purple-500/20 to-violet-500/20" }
    ]
  },
  "hrms-payroll": {
    title: "Who We Manage Attendance For",
    subtitle: "Workforce Reach",
    desc: "Handling shifts schedules and payroll ledger calculations for diverse workforces.",
    items: [
      { name: "IT & Software Companies", color: "from-blue-500/20 to-indigo-500/20" },
      { name: "Manufacturing Lines", color: "from-zinc-500/20 to-neutral-500/20" },
      { name: "Schools & Colleges", color: "from-rose-500/20 to-pink-500/20" },
      { name: "Healthcare Organizations", color: "from-teal-500/20 to-cyan-500/20" },
      { name: "Retail Businesses", color: "from-amber-500/20 to-orange-500/20" },
      { name: "Logistics & Delivery", color: "from-purple-500/20 to-violet-500/20" },
      { name: "Construction Companies", color: "from-yellow-500/20 to-amber-500/20" },
      { name: "Corporate Enterprises", color: "from-emerald-500/20 to-teal-500/20" }
    ]
  },
  "omnichannel-crm": {
    title: "Sectors We Optimize Sales For",
    subtitle: "Sales Growth",
    desc: "Powering WhatsApp APIs notifications and leads mapping pipelines.",
    items: [
      { name: "Real Estate CRM", color: "from-amber-500/20 to-orange-500/20" },
      { name: "Education CRM", color: "from-purple-500/20 to-violet-500/20" },
      { name: "Healthcare CRM", color: "from-teal-500/20 to-cyan-500/20" },
      { name: "Manufacturing CRM", color: "from-zinc-500/20 to-neutral-500/20" },
      { name: "Service Business CRM", color: "from-blue-500/20 to-indigo-500/20" },
      { name: "E-Commerce CRM", color: "from-pink-500/20 to-rose-500/20" },
      { name: "Financial Services CRM", color: "from-green-500/20 to-emerald-500/20" },
      { name: "IT & Software Companies", color: "from-sky-500/20 to-blue-500/20" }
    ]
  },
  "invoicing-billing": {
    title: "Billing Systems We Configure",
    subtitle: "Billing Reach",
    desc: "Custom recurring checkouts pipelines integrated for diverse financial requirements.",
    items: [
      { name: "IT Companies & Agencies", color: "from-blue-500/20 to-indigo-500/20" },
      { name: "SaaS Businesses", color: "from-purple-500/20 to-fuchsia-500/20" },
      { name: "Professional Services", color: "from-zinc-500/20 to-neutral-500/20" },
      { name: "Wholesale & Distribution", color: "from-green-500/20 to-emerald-500/20" },
      { name: "Healthcare Businesses", color: "from-teal-500/20 to-cyan-500/20" },
      { name: "Educational Institutions", color: "from-amber-500/20 to-orange-500/20" },
      { name: "Manufacturing Companies", color: "from-red-500/20 to-rose-500/20" },
      { name: "E-Commerce Businesses", color: "from-sky-500/20 to-blue-500/20" }
    ]
  },
  "travel-agency": {
    title: "Travel Sectors We Modernize",
    subtitle: "Travel Tech",
    desc: "Itinerary composition templates and flight GDS booking portals.",
    items: [
      { name: "Holiday Tour Guides", color: "from-sky-500/20 to-indigo-500/20" },
      { name: "Corporate Booking Desks", color: "from-zinc-500/20 to-neutral-500/20" },
      { name: "Flight Ticket Brokers", color: "from-blue-500/20 to-indigo-500/20" },
      { name: "Hotel Aggregators", color: "from-amber-500/20 to-orange-500/20" },
      { name: "Adventure Outings", color: "from-green-500/20 to-emerald-500/20" },
      { name: "Rent-a-Car Operators", color: "from-yellow-500/20 to-amber-500/20" },
      { name: "Visa Consultancies", color: "from-purple-500/20 to-violet-500/20" },
      { name: "Cruise Line Operators", color: "from-teal-500/20 to-cyan-500/20" }
    ]
  },
  "real-estate": {
    title: "Real Estate Portals We Build",
    subtitle: "PropTech Hubs",
    desc: "Empowering brokers with dynamic boundary filters map listing catalogs.",
    items: [
      { name: "Listing Brokerages", color: "from-amber-500/20 to-orange-500/20" },
      { name: "Builders & Developers", color: "from-zinc-500/20 to-neutral-500/20" },
      { name: "Vacation Homestays", color: "from-sky-500/20 to-blue-500/20" },
      { name: "Commercial Leasing", color: "from-purple-500/20 to-violet-500/20" },
      { name: "Co-working Sites", color: "from-pink-500/20 to-rose-500/20" },
      { name: "Agriculture Land Deals", color: "from-green-500/20 to-emerald-500/20" },
      { name: "Student Accommodations", color: "from-teal-500/20 to-cyan-500/20" },
      { name: "Property Managers", color: "from-blue-500/20 to-indigo-500/20" }
    ]
  },
  "restaurant-management": {
    title: "Food Outlets We Sync",
    subtitle: "Kitchen POS",
    desc: "QR dine-in ordering widgets and franchise recipe controls inventories.",
    items: [
      { name: "Fine Dining Outlets", color: "from-amber-500/20 to-orange-500/20" },
      { name: "Cloud Kitchen Chains", color: "from-red-500/20 to-orange-500/20" },
      { name: "Bistro Cafes", color: "from-yellow-500/20 to-amber-500/20" },
      { name: "Malls Food Courts", color: "from-purple-500/20 to-violet-500/20" },
      { name: "Bars & Pubs Outlets", color: "from-pink-500/20 to-rose-500/20" },
      { name: "Fast Food (QSR)", color: "from-green-500/20 to-emerald-500/20" },
      { name: "Catering Outfits", color: "from-zinc-500/20 to-neutral-500/20" },
      { name: "Franchise Networks", color: "from-blue-500/20 to-indigo-500/20" }
    ]
  },
  "learning-management": {
    title: "LMS Academies We Deploy",
    subtitle: "EdTech Portals",
    desc: "Providing class chapters builders and certificates auto generation pipelines.",
    items: [
      { name: "Corporate Staff Training", color: "from-zinc-500/20 to-neutral-500/20" },
      { name: "EdTech Video Portals", color: "from-blue-500/20 to-indigo-500/20" },
      { name: "Test Prep Academies", color: "from-purple-500/20 to-violet-500/20" },
      { name: "Foreign Languages Hubs", color: "from-sky-500/20 to-indigo-500/20" },
      { name: "Fitness Instructors", color: "from-pink-500/20 to-rose-500/20" },
      { name: "Art Skill Workshops", color: "from-green-500/20 to-emerald-500/20" },
      { name: "Schools & Colleges", color: "from-teal-500/20 to-cyan-500/20" },
      { name: "Premium Course Sellers", color: "from-amber-500/20 to-orange-500/20" }
    ]
  },
  "bulk-whatsapp": {
    title: "WhatsApp API Channels We Connect",
    subtitle: "WhatsApp Hubs",
    desc: "Automating mass campaign alerts with official green tick accounts validations.",
    items: [
      { name: "E-commerce Retailers", color: "from-pink-500/20 to-rose-500/20" },
      { name: "Large Retail Store Chains", color: "from-amber-500/20 to-orange-500/20" },
      { name: "Courier Logistics Groups", color: "from-blue-500/20 to-indigo-500/20" },
      { name: "Coaching Classes", color: "from-sky-500/20 to-indigo-500/20" },
      { name: "Holiday Organizers", color: "from-teal-500/20 to-cyan-500/20" },
      { name: "Finance Advisory Firms", color: "from-green-500/20 to-emerald-500/20" },
      { name: "Healthcare Centers", color: "from-purple-500/20 to-violet-500/20" },
      { name: "SaaS Platforms", color: "from-zinc-500/20 to-neutral-500/20" }
    ]
  },
  "email-automation": {
    title: "Email Marketing Layouts We Host",
    subtitle: "Email Reach",
    desc: "SMTP deliverability optimizations to keep customer retention high.",
    items: [
      { name: "Tech SaaS Startups", color: "from-blue-500/20 to-indigo-500/20" },
      { name: "E-commerce Shops", color: "from-pink-500/20 to-rose-500/20" },
      { name: "Daily Newsletters", color: "from-purple-500/20 to-fuchsia-500/20" },
      { name: "Marketing Operators", color: "from-amber-500/20 to-orange-500/20" },
      { name: "B2B Lead Brokers", color: "from-zinc-500/20 to-neutral-500/20" },
      { name: "Real Estate Portals", color: "from-green-500/20 to-emerald-500/20" },
      { name: "Online Instructors", color: "from-sky-500/20 to-indigo-500/20" },
      { name: "Travel Promoters", color: "from-teal-500/20 to-cyan-500/20" }
    ]
  },
  "helpdesk-ticketing": {
    title: "Helpdesk Environments We Configure",
    subtitle: "Customer Desk",
    desc: "Unifying email-to-ticket triggers with strict SLA escalation warnings.",
    items: [
      { name: "SaaS Product Desks", color: "from-blue-500/20 to-indigo-500/20" },
      { name: "E-commerce Stores Support", color: "from-pink-500/20 to-rose-500/20" },
      { name: "Logistics Tracking Desks", color: "from-teal-500/20 to-cyan-500/20" },
      { name: "Broadband Service ISPs", color: "from-sky-500/20 to-blue-500/20" },
      { name: "Medical Consultations", color: "from-purple-500/20 to-violet-500/20" },
      { name: "Banking & Loan Queries", color: "from-green-500/20 to-emerald-500/20" },
      { name: "Device Repairs Centres", color: "from-zinc-500/20 to-neutral-500/20" },
      { name: "LMS Portal Academies", color: "from-amber-500/20 to-orange-500/20" }
    ]
  },
  "appointment-booking": {
    title: "Scheduling Portals We Setup",
    subtitle: "Calendar Booking",
    desc: "SMS alerts scheduling systems and calendars API integration channels.",
    items: [
      { name: "Doctor & Clinic Visits", color: "from-teal-500/20 to-cyan-500/20" },
      { name: "Legal Consulting Desks", color: "from-zinc-500/20 to-neutral-500/20" },
      { name: "Beauty Salons & Spas", color: "from-pink-500/20 to-rose-500/20" },
      { name: "Academic Mentors", color: "from-sky-500/20 to-indigo-500/20" },
      { name: "Gym & Fitness Personal", color: "from-purple-500/20 to-violet-500/20" },
      { name: "Car Maintenance Garages", color: "from-red-500/20 to-orange-500/20" },
      { name: "Local Handyman Repair", color: "from-amber-500/20 to-orange-500/20" },
      { name: "HR Interview Hiring", color: "from-blue-500/20 to-indigo-500/20" }
    ]
  }
};

export const PRODUCTS_PRICING_CONTENT: Record<string, {
  title?: string;
  subtitle?: string;
  desc?: string;
  plans: { title: string; price: string; desc: string; features: string[]; popular?: boolean; }[];
}> = {
  "ecommerce-suite": {
    title: "Pricing Options",
    subtitle: "Cost Structure",
    desc: "No hidden transaction fees. Invest in custom business assets that you own completely.",
    plans: [
      {
        title: "Startup Store",
        price: "₹75,000 – ₹1,50,000",
        desc: "Perfect for new retail setups looking to launch their first professional online store.",
        features: ["Online Storefront", "Product Management", "Payment Gateway Integration", "Basic SEO Setup", "Admin Dashboard"]
      },
      {
        title: "Growth Commerce Suite",
        price: "₹2,00,000 – ₹5,00,000",
        desc: "Ideal for growing brands requiring advanced integrations and business automation.",
        features: ["Advanced Storefront Features", "CRM & WhatsApp Integrations", "Inventory Management", "Marketing Automation", "Reporting & Analytics Dashboard"],
        popular: true
      },
      {
        title: "Enterprise Commerce Platform",
        price: "₹5,00,000 – ₹20,00,000+",
        desc: "For large operations needing marketplace systems and full-scale ERP synchronization.",
        features: ["Multi-Vendor Marketplace Module", "Full ERP System Integration", "Advanced Billing Automation", "Custom Enterprise Features", "iOS & Android Mobile Apps", "Dedicated Technical Support"]
      },
      {
        title: "SaaS Commerce Platform",
        price: "Custom Quote",
        desc: "For businesses looking to launch a self-hosted custom Shopify or marketplace alternative.",
        features: ["Shopify Alternative Architecture", "Multi-Tenant Commerce Engine", "Custom White-Label Solutions", "Global Infrastructure Hosting"]
      }
    ]
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
        features: ["Customer App (iOS & Android)", "Admin Control Panel", "Inventory Management", "UPI & Payment Integration", "Delivery Tracking"]
      },
      {
        title: "Growth Platform",
        price: "₹5,00,000 – ₹12,00,000",
        desc: "Ideal for expanding businesses operating multiple stores or hubs with advanced tools.",
        features: ["Multi-Store Operations", "Advanced Analytics & Reports", "Warehouse Management", "Delivery Partner App", "Customer Marketing Tools"],
        popular: true
      },
      {
        title: "Enterprise Suite",
        price: "₹12,00,000 – ₹50,00,000+",
        desc: "Designed for large logistics networks requiring multi-city reach and high-end automation.",
        features: ["Multi-City Operations", "Dark Store Fulfillment Network", "AI Demand Forecasting", "Full ERP System Integration", "Enterprise Grade Security", "Dedicated Cloud Infrastructure"]
      },
      {
        title: "SaaS Platform",
        price: "Custom Quote",
        desc: "Perfect for builders launching a Shopify or Blinkit-style multi-tenant hyperlocal model.",
        features: ["Blinkit/Zepto/Instamart Alternative", "Multi-Tenant Q-Commerce Engine", "Complete White-Label Setup", "Hyperlocal Marketplace Engine"]
      }
    ]
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
          "Basic Performance Reports"
        ]
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
          "Advanced Reports & Analytics"
        ],
        popular: true
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
          "Real-Time Live Analytics Dashboard"
        ]
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
          "Custom Tailored Business Workflows"
        ]
      }
    ]
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
          "Rider Mobile Application"
        ]
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
          "Advanced Analytics Scorecard"
        ],
        popular: true
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
          "AWS Isolated Cloud Hosting DB"
        ]
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
          "Isolated database schemas tables"
        ]
      }
    ]
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
        features: ["Double-Entry Accounting Core", "Purchase Orders Manager", "Multi-Warehouse inventory lists", "Up to 10 Employee profiles", "Email Support Assistance"]
      },
      {
        title: "Growth ERP Engine",
        price: "₹4,00,000 – ₹8,00,000",
        desc: "Expanding companies requiring sales CRM and HRMS timesheet integrations.",
        features: ["Modular HRMS & Payroll sync", "Leads Pipelines & CRM dashboard", "Auto-replenishment vendor rules", "Up to 50 Employee profiles", "WhatsApp Alerts Setup Integrations"],
        popular: true
      },
      {
        title: "Enterprise ERP Suite",
        price: "₹10,00,000 – ₹30,00,000+",
        desc: "Nationwide organizations requiring custom logistics data ledgers.",
        features: ["Unlimited Department logins", "Custom Modules Development", "SSO & Multi-Factor Security", "Full Database Isolated Cloud", "24/7 Dedicated Account Manager"]
      },
      {
        title: "Multi-Tenant ERP SaaS",
        price: "Custom Quote",
        desc: "White-label business engine for consulting resellers partners.",
        features: ["Reseller Client Creator panel", "Custom Branding White-Label", "Global AWS Multi-Region host", "Isolated Client Databases templates"]
      }
    ]
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
        features: ["Employee Management", "Attendance Tracking", "Leave Management", "Basic Payroll", "Email Helpdesk Support"]
      },
      {
        title: "Business HRMS",
        price: "₹1,50,000 – ₹5,00,000",
        desc: "Ideal for growing organizations seeking automation and self-service portals.",
        features: ["Attendance System Module", "Payroll Automation Engine", "Mobile HR App Access", "Employee Self-Service Portal", "Reporting & Audit Dashboard"],
        popular: true
      },
      {
        title: "Enterprise HRMS",
        price: "₹5,00,000 – ₹20,00,000+",
        desc: "Suitable for large organizations requiring custom scaling and full integrations.",
        features: ["Multi-Branch Management", "Recruitment & ATS Module", "Performance Management KPI", "Advanced HR Analytics", "Custom Approval Workflows", "API Integrations Support"]
      },
      {
        title: "SaaS HRMS Platform",
        price: "Custom Quote",
        desc: "Perfect for entrepreneurs looking to launch their own branded HRMS SaaS business.",
        features: ["HR SaaS Platform Hosting", "Payroll SaaS Software Engine", "Employee Portal White-labeling", "Workforce Management System APIs"]
      }
    ]
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
        features: ["Lead Management System", "Customer Directory Database", "Basic Reporting & Metrics", "Email Client Integration", "Standard Support Desk"]
      },
      {
        title: "Business CRM",
        price: "₹2,50,000 – ₹7,50,000",
        desc: "Ideal for growing businesses looking to automate WhatsApp sales and channels.",
        features: ["WhatsApp CRM Integration", "Visual Sales Pipeline Boards", "Marketing Automation Triggers", "Team Collaboration Tools", "Advanced Reporting Dashboards"],
        popular: true
      },
      {
        title: "Enterprise CRM",
        price: "₹7,50,000 – ₹30,00,000+",
        desc: "Ideal for large organizations needing full omnichannel sync and dedicated hosting.",
        features: ["Omnichannel Communication Hub", "Advanced Workflow Automation", "AI Insights & Forecasting", "Multi-Branch Support", "ERP Integration Systems", "Dedicated Infrastructure"]
      },
      {
        title: "SaaS CRM Platform",
        price: "Custom Quote",
        desc: "Launch your own branded CRM SaaS business or industry vertical product.",
        features: ["CRM SaaS Platform Hosting", "Industry-Specific CRM Engines", "White Label CRM Branding", "Customer Engagement APIs"]
      }
    ]
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
        features: ["GST-Compliant Invoicing", "Client Database Profiles", "Basic Reporting & Summaries", "Email Invoice delivery", "Standard Helpdesk Support"]
      },
      {
        title: "Business Billing Platform",
        price: "₹1,00,000 – ₹3,50,000",
        desc: "Ideal for growing businesses seeking quote workflows and gateways integration.",
        features: ["Quotation & Estimate Tools", "Payment Tracking System", "Razorpay / Stripe Gateways", "Automated Reminders sequences", "Advanced Revenue analytics"],
        popular: true
      },
      {
        title: "Enterprise Revenue Platform",
        price: "₹3,50,000 – ₹15,00,000+",
        desc: "Suitable for large enterprises requiring multi-branch setups and full integrations.",
        features: ["Multi-Branch Invoicing access", "Custom Billing Approval routes", "Full ERP & CRM Integrations", "Advanced Cash Flow analytics", "Role-Based Staff permissions", "Priority Technical Support"]
      },
      {
        title: "SaaS Billing Platform",
        price: "Custom Quote",
        desc: "Perfect for launching a custom subscription billing or invoicing SaaS product.",
        features: ["SaaS Platform Hosting setup", "White-Labeled Client Billing", "Developer API integrations", "Accounting SaaS engines tools"]
      }
    ]
  },
  "travel-agency": {
    title: "Travel Pricing Tiers",
    subtitle: "Travel Cost",
    desc: "Build travel operator platforms with itinerary builders.",
    plans: [
      {
        title: "Agency Storefront",
        price: "₹60,000 – ₹1,20,000",
        desc: "Online booking storefront showing holiday package options.",
        features: ["Holiday Packages list catalog", "Itinerary PDF auto compiler", "Admin booking leads console", "Basic SEO Pages structures", "Email Helpdesk support"]
      },
      {
        title: "Travel Operator Engine",
        price: "₹1,80,000 – ₹3,50,000",
        desc: "GDS integration connectors to find live flight ticket status.",
        features: ["Flight & Hotel GDS API link", "Split Invoices builder ledger", "Traveler passport metadata CRM", "WhatsApp booking voucher templates", "Credit lines for agent networks"],
        popular: true
      },
      {
        title: "Enterprise Travel Portal",
        price: "₹5,00,000 – ₹15,00,000+",
        desc: "Multi-branch travel networks running localized billing routes.",
        features: ["Multi-Agency branch logins", "Custom tour modules creation", "AWS isolated server hosting", "SSO Login configurations", "24/7 Dedicated Account Manager"]
      },
      {
        title: "Travel SaaS Engine",
        price: "Custom Quote",
        desc: "White-label reservation software reseller for agency networks.",
        features: ["White-Label Portal creator", "Reseller agent billing lines", "Custom payment split gateway", "Global GDS connection tokens"]
      }
    ]
  },
  "real-estate": {
    title: "Real Estate Pricing",
    subtitle: "Portal Cost",
    desc: "Property listing catalog sites with map boundary search engines.",
    plans: [
      {
        title: "Listing Portal",
        price: "₹50,000 – ₹1,20,000",
        desc: "Search listing database with agent contact cards fields.",
        features: ["Dynamic Property listings catalog", "Location search bar filters", "Agent contact lead forms", "SEO-Friendly listing schema", "Email Helpdesk support"]
      },
      {
        title: "Advanced Agency CRM",
        price: "₹1,50,000 – ₹3,50,000",
        desc: "Embed virtual tours and polygon maps on home listing grids.",
        features: ["Map Polygon boundary search", "3D Virtual Tour player link", "Agent matching assignment rules", "Automated WhatsApp lead alerts", "Broker logins accounts manager"],
        popular: true
      },
      {
        title: "Developer Launch Engine",
        price: "₹4,00,000 – ₹10,00,000+",
        desc: "Fulfill downpayment transactions for new housing launches.",
        features: ["Interactive master plan maps", "Booking checkout downpayment", "Custom buyer payment scheduling", "Full database isolated cloud", "Priority Developer Account manager"]
      },
      {
        title: "Real Estate SaaS",
        price: "Custom Quote",
        desc: "Launch your own multi-broker housing listings SaaS company.",
        features: ["White-Label Brokerage creator", "Client Subscription Billings", "AWS Multi-Region isolated DBs", "Developer API integrations kits"]
      }
    ]
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
        features: ["Quick cash billing screen", "Thermal Kitchen ticket print", "Menu categories compiler", "Daily register closing ledger", "Email support assistance"]
      },
      {
        title: "Kitchen Display Suite",
        price: "₹1,20,000 – ₹2,50,000",
        desc: "QR table orders, table booking calendars, and chef displays.",
        features: ["QR Dine-In table ordering POS", "Kitchen Display Screen UI", "Table Reservation Calendar", "UPI payments instant settlement", "WhatsApp Billing alerts setup"],
        popular: true
      },
      {
        title: "Franchise ERP Engine",
        price: "₹3,50,000 – ₹8,00,000+",
        desc: "Multi-outlet chains running raw material reorder checks.",
        features: ["Central warehouse stock transfers", "Recipe Margin costing checks", "Supplier purchase auto-reorders", "Franchise billing logs panel", "24/7 Dedicated phone support"]
      },
      {
        title: "Food Tech SaaS",
        price: "Custom Quote",
        desc: "White-label ordering SaaS for restaurant aggregator brands.",
        features: ["White-Label Restaurant app", "Merchant Subscription dashboard", "Custom Payment split gateway", "Rider dispatch API integrations"]
      }
    ]
  },
  "learning-management": {
    title: "LMS Pricing Options",
    subtitle: "LMS Cost",
    desc: "Create e-learning portals with chapter composers and certs.",
    plans: [
      {
        title: "Digital Academy Base",
        price: "₹50,000 – ₹1,00,000",
        desc: "Video hosting chapters with basic quiz checks lists.",
        features: ["Video Chapters organizer UI", "PDF Study Vouchers hosting", "Basic student quizzes templates", "Standard Certificate creator", "Email Helpdesk support"]
      },
      {
        title: "Interactive LMS Portal",
        price: "₹1,50,000 – ₹3,00,000",
        desc: "Charge subscriptions packages and run online exam templates.",
        features: ["Recurring fee subscriptions", "Timed exam generator logs", "Student discussion forums site", "Auto-grading quizzes scripts", "Custom Certificate templates builder"],
        popular: true
      },
      {
        title: "Enterprise EdTech Platform",
        price: "₹4,00,000 – ₹10,00,000+",
        desc: "Multi-instructor academies requiring Zoom webinars APIs.",
        features: ["Multi-Instructor backend accounts", "Zoom Webinar API integration", "Isolated database cloud server", "SSO Login configurations", "Priority Account manager support"]
      },
      {
        title: "LMS SaaS Engine",
        price: "Custom Quote",
        desc: "White-label academy reseller portals creator framework.",
        features: ["White-Labeled Customer Academy", "Instructor Subscription billing", "AWS Multi-Region host setups", "Reseller Billing Account Dashboard"]
      }
    ]
  },
  "bulk-whatsapp": {
    title: "WhatsApp API Pricing",
    subtitle: "WhatsApp Cost",
    desc: "Send mass promotional blasts via official green tick APIs.",
    plans: [
      {
        title: "Broadcast Base",
        price: "₹25,000 – ₹50,000",
        desc: "Official API integration with simple campaign scheduling.",
        features: ["Official Meta API link setup", "Broadcast campaigns scheduler", "Custom contact tags upload", "Opt-out list safeguards", "Email support assistance"]
      },
      {
        title: "Automated CRM API",
        price: "₹70,000 – ₹1,50,000",
        desc: "WhatsApp team shared inbox with automated template triggers.",
        features: ["Multi-Agent Shared Inbox panel", "Auto Template Trigger APIs", "Chat Tagging classification logs", "WhatsApp API validation scripts", "Historical SLA Compliance Reports"],
        popular: true
      },
      {
        title: "Enterprise Chatbot Suite",
        price: "₹2,00,000 – ₹5,00,000+",
        desc: "Intelligent chatbot replies maps linked to company database.",
        features: ["AI Chatbot replies designer", "Direct ERP/CRM API databases", "Isolated Secure Server deployment", "Custom Analytics telemetry", "24/7 Dedicated support manager"]
      },
      {
        title: "WhatsApp SaaS Reseller",
        price: "Custom Quote",
        desc: "Resell WhatsApp template broadcast software under your name.",
        features: ["White-Labeled Customer Portal", "Client subscription credits billing", "AWS isolated SQL structures", "Developer API Webhook builders"]
      }
    ]
  },
  "email-automation": {
    title: "Email Suite Pricing",
    subtitle: "Email Cost",
    desc: "Configure marketing automation drip maps with isolated SMTPs.",
    plans: [
      {
        title: "Campaign Manager",
        price: "₹25,000 – ₹50,000",
        desc: "Newsletter composer with dynamic layout blocks controls.",
        features: ["Drag-and-Drop Editor tool", "Newsletter subscriber list upload", "Standard campaign click stats", "Unsubscribe compliance links", "Email ticketing support"]
      },
      {
        title: "Marketing Drip Suite",
        price: "₹60,000 – ₹1,20,000",
        desc: "Establish client registration drip triggers maps sequences.",
        features: ["Visual Drip Automation Maps", "Subscriber behavioral tags logs", "Clean DKIM/SPF domain setup", "Auto-Scrub spam bounce rules", "Custom SMTP mail server sync"],
        popular: true
      },
      {
        title: "Enterprise Mail Server",
        price: "₹2,00,000 – ₹6,00,000+",
        desc: "Dedicated IP addresses with high volume delivery routers.",
        features: ["Dedicated Clean IP server host", "Full Corporate CRM sync API", "AWS isolated DB environments", "SSO Login configurations", "Priority Account Executive support"]
      },
      {
        title: "Email SaaS Platform",
        price: "Custom Quote",
        desc: "Resell bulk email blast pipelines under custom branding logos.",
        features: ["White-Label Customer Campaign portal", "Merchant credit subscription logs", "Custom SMTP setup wizards", "Developer API webhook builders"]
      }
    ]
  },
  "helpdesk-ticketing": {
    title: "Helpdesk Pricing Plans",
    subtitle: "Helpdesk Cost",
    desc: "Automate email-to-ticket dispatches and SLA timers.",
    plans: [
      {
        title: "Support Desk Base",
        price: "₹30,000 – ₹60,000",
        desc: "Core software matching incoming emails to support logs.",
        features: ["Email-to-Ticket routing dispatch", "Help center articles composition", "Daily ticket load ledger dashboard", "Standard Agent login accounts", "Email ticketing support"]
      },
      {
        title: "Omnichannel SLA Desk",
        price: "₹80,000 – ₹1,80,000",
        desc: "Configure ticket deadlines alerts and supervisors escalation rules.",
        features: ["Strict SLA deadline timers", "Automated ticket route dispatches", "Internal Agent notes collaboration", "CSAT Customer Feedback links", "Multi-Channel integration queues"],
        popular: true
      },
      {
        title: "Enterprise Helpdesk Suite",
        price: "₹2,50,000 – ₹6,00,000+",
        desc: "High volume customer dashboards synchronized with active CRM.",
        features: ["Unlimited Agent profiles setups", "SSO Login configurations", "Direct CRM Databases Sync", "AWS isolated SQL server hosting", "24/7 Phone Support Manager"]
      },
      {
        title: "Helpdesk SaaS Reseller",
        price: "Custom Quote",
        desc: "White-label support ticketing portals for reseller networks.",
        features: ["White-Labeled Customer Desk", "Client billing subscription maps", "Custom API Webhook integrations", "Developer code templates kits"]
      }
    ]
  },
  "appointment-booking": {
    title: "Booking Pricing Plans",
    subtitle: "Booking Cost",
    desc: "Google calendar sync schedulers and SMS alerts setup.",
    plans: [
      {
        title: "Scheduling Base",
        price: "₹25,000 – ₹50,000",
        desc: "Simple booking calendar layout matching open work shifts.",
        features: ["Booking calendar form checkout", "Manual appointment scheduling admin", "Basic shift calendar planner", "Auto email confirmations alerts", "Email ticketing support"]
      },
      {
        title: "Omnichannel Booking Suite",
        price: "₹60,000 – ₹1,20,000",
        desc: "Sync Google Calendar and process payments upfront.",
        features: ["Bi-directional Google Calendar sync", "Stripe / PayPal upfront payment", "Automated SMS/WhatsApp reminders", "Intake questionnaire form checks", "Auto local timezone converters"],
        popular: true
      },
      {
        title: "Enterprise Scheduling Engine",
        price: "₹2,00,000 – ₹5,00,000+",
        desc: "Multi-branch staff calendar coordination networks.",
        features: ["Multi-Branch staff portals logins", "Custom booking workflow scripts", "AWS isolated SQL databases", "SSO Login configurations", "Priority Account Manager support"]
      },
      {
        title: "Scheduling SaaS Engine",
        price: "Custom Quote",
        desc: "Resell calendar checkouts systems under custom branding.",
        features: ["White-Label Customer Booking", "Client Subscription Billings", "AWS Multi-Region host setups", "Developer API integrations kits"]
      }
    ]
  }
};

export const PRODUCTS_INTRO_CONTENT: Record<string, ProductIntroData> = {
  "ecommerce-suite": {
    title: "Scale Your Sales with Unified E-commerce Operations",
    subtitle: "The Challenge & Solution",
    description: "Building a successful e-commerce brand requires managing multiple sales channels, handling complex inventory, coordinating vendor shipments, and processing hundreds of checkouts without drop-offs.",
    bullets: [
      "Cart abandonment rates remain high due to slow checkouts.",
      "Synchronizing inventory across multi-vendor channels is error-prone.",
      "Managing shipping, order statuses, and vendor splits manually wastes time.",
      "Platform transaction fees eat away at profit margins.",
      "Lack of unified buyer analytics prevents effective customer retention."
    ],
    finalText: "Peltown E-commerce Suite unifies your store, catalog, vendors, checkouts, and logistics under one high-performance platform, giving you full control and zero platform lock-in."
  },
  "quick-commerce": {
    title: "Powering Sub-10 Minute Hyperlocal Deliveries",
    subtitle: "Fulfillment & Last-Mile",
    description: "Quick commerce demands precise synchronization between local dark store inventory, rapid dispatch systems, routing algorithms, and delivery riders. Every second counts.",
    bullets: [
      "Manual rider allocation slows down order dispatch timelines.",
      "Mismatched dark store shelf counts lead to out-of-stock cancellations.",
      "Inefficient route planning leads to delayed deliveries and cold food.",
      "High rider churn and communication gaps disrupt daily deliveries.",
      "Lack of real-time geographical tracking limits administrative control."
    ],
    finalText: "Our Quick Commerce Engine automates rider dispatching, tracks dark store stock in real time, and uses smart routing to complete deliveries within minutes."
  },
  "cloud-pos": {
    title: "Bridge the Gap Between Online and Physical Stores",
    subtitle: "Modern Point of Sale",
    description: "Running physical retail registers alongside online channels often leads to double-selling, disconnected records, and slow customer checkout queues.",
    bullets: [
      "Store registers lose connection and stop processing payments offline.",
      "Online stock and physical store inventory counts do not sync instantly.",
      "Reconciling daily sales receipts and cash drawers takes hours of manual work.",
      "Register staff struggle with slow, complex interface menus.",
      "Multi-branch sales tracking is scattered across local databases."
    ],
    finalText: "Peltown Cloud POS provides an offline-first register system that instantly synchronizes sales, cash registers, and warehouse stock across all store branches."
  },
  "fleet-delivery": {
    title: "Optimize Fleet Logistics and Last-Mile Deliveries",
    subtitle: "Logistics Management",
    description: "Managing a fleet of drivers, vehicle maintenance schedules, delivery routes, and customer expectations is complex without a centralized tracking system.",
    bullets: [
      "Inefficient routing maps increase fuel expenses and delivery times.",
      "Lack of real-time GPS tracking leaves customers questioning order status.",
      "Manual dispatching systems result in idle drivers and missed delivery SLA times.",
      "Managing proof of delivery (POD) through paper logs leads to payment disputes.",
      "No historical data on vehicle performance or fuel efficiency."
    ],
    finalText: "Peltown Fleet & Delivery Management automates dispatching, calculates greenest routes, and provides live GPS tracking with digital proof-of-delivery validation."
  },
  "cloud-erp": {
    title: "One Platform. Complete Business Control.",
    subtitle: "Enterprise Operations",
    description: "Many businesses struggle because information is scattered across spreadsheets, WhatsApp groups, emails, accounting software, and disconnected systems.",
    bullets: [
      "Teams waste time looking for information in scattered files.",
      "Managers lack real-time visibility into operations.",
      "Inventory counts become highly inaccurate.",
      "Important customer follow-ups get missed regularly.",
      "Reports become slow and unreliable."
    ],
    finalText: "Peltown Cloud ERP eliminates these challenges by bringing sales, inventory, finance, HR, procurement, projects, and manufacturing together under a single platform. Get real-time visibility into your operations and make faster, smarter business decisions."
  },
  "hrms-payroll": {
    title: "Manage Your Workforce Without Spreadsheets",
    subtitle: "The Challenge & Solution",
    description: "Many businesses still manage employee records, attendance, leave requests, payroll, and performance tracking using Excel sheets and multiple disconnected tools.",
    bullets: [
      "Payroll errors",
      "Attendance discrepancies",
      "Delayed approvals",
      "Compliance issues",
      "HR inefficiencies",
      "Employee dissatisfaction"
    ],
    finalText: "Peltown HRMS & Payroll centralizes your entire employee lifecycle into one platform, giving HR teams and business owners complete visibility and control."
  },
  "omnichannel-crm": {
    title: "Stop Losing Leads Across Multiple Channels",
    subtitle: "The Challenge & Solution",
    description: "Today's customers interact with businesses through multiple channels: WhatsApp, Website Forms, Email, Facebook, Instagram, Phone Calls, Live Chat, and SMS. The problem? Most businesses manage these channels separately.",
    bullets: [
      "Leads get missed",
      "Follow-ups are delayed",
      "Customer data becomes fragmented",
      "Sales opportunities are lost"
    ],
    finalText: "Peltown Omnichannel CRM centralizes all customer interactions into a unified system, giving your team a complete 360° view of every customer journey."
  },
  "invoicing-billing": {
    title: "Get Paid Faster. Manage Revenue Smarter.",
    subtitle: "The Challenge & Solution",
    description: "Many businesses still struggle with manual invoice creation, payment delays, missed follow-ups, GST compliance issues, unorganized financial records, and customer payment disputes.",
    bullets: [
      "Manual invoice creation",
      "Payment delays",
      "Missed follow-ups",
      "GST compliance issues",
      "Unorganized financial records",
      "Customer payment disputes"
    ],
    finalText: "Peltown Invoicing & Billing automates your billing lifecycle from quotation to payment collection, helping you spend less time chasing payments and more time growing your business."
  },
  "travel-agency": {
    title: "Manage bookings, itineraries, and operations dynamically",
    subtitle: "Travel Technology",
    description: "Travel agents must coordinate flights, hotels, visa documentation, customized itineraries, and group tour bookings without losing track of details.",
    bullets: [
      "Drafting customized visual travel itineraries manually is slow.",
      "Tracking travel booking deposits and supplier payout due dates is complex.",
      "Managing visa documents, passport copies, and client communications is messy.",
      "Connecting hotel APIs and local vehicle vendors requires custom code.",
      "Lack of real-time travel alerts updates for customers."
    ],
    finalText: "Our Travel Agency Platform automates itinerary creation, handles agent commission splits, tracks bookings, and integrates with major global travel APIs."
  },
  "real-estate": {
    title: "Maximize Property Sales with Smarter Listings",
    subtitle: "Property Technology",
    description: "Real estate agencies need to present high-quality listings, verify property documents, track buyer preferences, and coordinate agent site visits efficiently.",
    bullets: [
      "Uploading listing data across third-party directories manually is tedious.",
      "Inquiries for properties fail to map to agent schedules for prompt site visits.",
      "Struggling to share catalog PDF flyers and virtual tours with prospective buyers.",
      "No structured checklist to verify clean property titles or legal permits.",
      "Difficulty tracking agent commissions across closed transactions."
    ],
    finalText: "Peltown Real Estate Portal provides a centralized property directory, manages site visits, and optimizes property matching through structured lead tracking workflows."
  },
  "restaurant-management": {
    title: "Streamline Restaurant Tables, Kitchens, and Orders",
    subtitle: "F&B Technology",
    description: "Managing front-of-house table seating, taking offline orders, updating digital menus, and coordinating kitchen display screens is a major operational challenge.",
    bullets: [
      "Wait times increase because orders are written on paper and walked to kitchens.",
      "Menu item changes do not reflect instantly on digital qr-codes.",
      "Tracking kitchen raw material usage and stock spoilage is highly complex.",
      "Customer billing splits and loyalty program records are disconnected.",
      "Online food delivery orders do not flow into the main cash drawer."
    ],
    finalText: "Our F&B Management System connects table checkouts, updates kitchen display screens instantly, and coordinates raw material inventory in real time."
  },
  "learning-management": {
    title: "Deliver Premium Digital Training at Scale",
    subtitle: "EdTech & Training",
    description: "Creating course curriculums, handling secure video playback, managing student enrollments, and checking student progress requires a stable learning ecosystem.",
    bullets: [
      "Unsecured course video links get shared and downloaded illegally.",
      "Student enrollment payments do not automatically trigger course access codes.",
      "Grading student test quiz answers and tracking attendance is a manual chore.",
      "No platform support to issue verified certificate files automatically.",
      "Struggling to provide student discussion boards alongside video lessons."
    ],
    finalText: "Peltown LMS offers white-labeled course hubs, processes payments, protects lesson videos, and automates course completion certificates."
  },
  "bulk-whatsapp": {
    title: "Engage Thousands of Customers via WhatsApp API",
    subtitle: "Marketing & API Hub",
    description: "Reaching out to customer databases with personalized updates, marketing messages, and alerts via traditional channels results in low read rates.",
    bullets: [
      "Standard number broadcasts get banned or flagged as spam quickly.",
      "Unable to track message delivery logs, read states, or click metrics.",
      "Sending personalized confirmation messages manually is slow.",
      "Unable to build automated interactive chat responses for simple FAQs.",
      "Integrating WhatsApp with existing CRMs or ERP databases is complex."
    ],
    finalText: "Our Bulk WhatsApp Business API setup provides official Meta business line integration, automates trigger messages, and schedules campaign broadcasts."
  },
  "email-automation": {
    title: "Scale Your Customer Reach with Smart Email Campaigns",
    subtitle: "Marketing Automation",
    description: "Building list segments, scheduling drip emails, tracking click-through rates, and ensuring emails reach inboxes instead of spam folders is hard without a robust engine.",
    bullets: [
      "Campaign emails get flagged as promotional spam due to bad server IPs.",
      "Unable to group customer lists dynamically based on purchase behavior.",
      "Creating custom HTML template emails without design code is difficult.",
      "Struggling to automate follow-up emails based on user links click status.",
      "Reconciling campaign metrics with sales databases requires CSV exports."
    ],
    finalText: "Peltown Email Automation provides dedicated SMTP configurations, dynamic user list segment managers, and flow-based sequence builders to boost sales."
  },
  "helpdesk-ticketing": {
    title: "Resolve Customer Support Issues Faster",
    subtitle: "Support & Ticketing",
    description: "Handling client support requests via email, chat, and phone calls without ticket numbers and assigned queues results in long resolution times.",
    bullets: [
      "Multiple agents reply to the same customer email, causing confusion.",
      "Important support tickets are forgotten because they sit in standard emails.",
      "No mechanism to track SLA deadlines or warn about delayed responses.",
      "Support agents struggle to locate client contact histories or order details.",
      "No automated survey tools to collect customer satisfaction (CSAT) scores."
    ],
    finalText: "Our Helpdesk System organizes client tickets, sets up automatic queue routing, alerts managers when SLAs are missed, and integrates with your core database."
  },
  "appointment-booking": {
    title: "Automate Shift Bookings and Calendar Coordination",
    subtitle: "Scheduling Platform",
    description: "Scheduling phone meetings, field consultations, or group classes requires constant back-and-forth emails, leading to double-bookings and high cancellation rates.",
    bullets: [
      "Spending hours emailing back and forth trying to find a matching calendar time.",
      "Clients fail to show up because they do not receive automated follow-ups.",
      "Staff calendars are not coordinated, leading to over-bookings.",
      "Difficult to charge upfront deposits or secure booking reservations.",
      "Client timezone differences cause missed meeting slots."
    ],
    finalText: "Peltown Appointment Booking syncs directly with staff calendars, processes booking payments, and triggers automated email and WhatsApp alerts."
  }
};

