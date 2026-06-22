"use client";

import React, { useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ShoppingBag,
  Zap,
  Monitor,
  Truck,
  Cpu,
  Briefcase,
  Database,
  Receipt,
  Plane,
  Home,
  Utensils,
  GraduationCap,
  MessageSquare,
  Mail,
  Bell,
  Calendar,
  Server,
  Wrench,
  ArrowRight,
} from "lucide-react";

// --- PRODUCT DATA  ---
const productsData = [
  {
    category: "1. Commerce & Retail",
    items: [
      {
        title: "E-commerce Suite",
        description:
          "Complete multi-vendor or single-vendor e-commerce platform with inventory management.",
        icon: ShoppingBag,
        badge: "Retail",
      },
      {
        title: "Quick Commerce",
        description:
          "10-minute delivery apps optimized for dark stores and rapid dispatch logistics.",
        icon: Zap,
        badge: "Fast",
      },
      {
        title: "Cloud POS System",
        description:
          "Modern Point of Sale system synced directly to your cloud inventory and accounting.",
        icon: Monitor,
        badge: "Store",
      },
      {
        title: "Fleet Delivery App",
        description:
          "Driver apps and management dashboards for real-time tracking and dispatching.",
        icon: Truck,
        badge: "Logistics",
      },
    ],
  },
  {
    category: "2. Enterprise",
    items: [
      {
        title: "Cloud ERP System",
        description:
          "Centralized platform for managing resources, supply chains, and financials.",
        icon: Cpu,
        badge: "Core",
      },
      {
        title: "HRMS & Payroll",
        description:
          "Automate payroll, track attendance, and manage employee lifecycles efficiently.",
        icon: Briefcase,
        badge: "HR",
      },
      {
        title: "Omni-channel CRM",
        description:
          "Track leads, manage pipelines, and close deals faster with our advanced CRM.",
        icon: Database,
        badge: "Sales",
      },
      {
        title: "Invoicing & Billing",
        description:
          "Automated recurring billing, tax compliance, and seamless invoice generation.",
        icon: Receipt,
        badge: "Finance",
      },
    ],
  },
  {
    category: "3. Industry Specific",
    items: [
      {
        title: "Travel Agency System",
        description:
          "Manage bookings, itineraries, and client visas all in one centralized hub.",
        icon: Plane,
        badge: "Travel",
      },
      {
        title: "Real Estate Portal",
        description:
          "Listings management, lead generation, and virtual tours for property agencies.",
        icon: Home,
        badge: "Property",
      },
      {
        title: "Restaurant Management",
        description:
          "Menu management, table reservations, and integrated kitchen display systems.",
        icon: Utensils,
        badge: "Food",
      },
      {
        title: "Learning Management",
        description:
          "Host courses, conduct exams, and issue certificates with our robust LMS.",
        icon: GraduationCap,
        badge: "Education",
      },
    ],
  },
  {
    category: "4. Communications",
    items: [
      {
        title: "Bulk WhatsApp API",
        description:
          "Send promotional campaigns and transactional alerts directly via WhatsApp.",
        icon: MessageSquare,
        badge: "Chat",
      },
      {
        title: "Email Automation",
        description:
          "Drip campaigns, newsletter management, and high-deliverability email routing.",
        icon: Mail,
        badge: "Email",
      },
      {
        title: "Helpdesk Ticketing",
        description:
          "Omni-channel support ticketing system to resolve customer issues faster.",
        icon: Bell,
        badge: "Support",
      },
      {
        title: "Appointment Booking",
        description:
          "Allow clients to self-schedule meetings or services with calendar syncing.",
        icon: Calendar,
        badge: "Schedule",
      },
    ],
  },
  {
    category: "5. Core Advantages",
    items: [
      {
        title: "Ready to Launch",
        description:
          "Skip the months of development. Our products are fully built and ready to deploy in days.",
        icon: Zap,
        badge: "Speed",
      },
      {
        title: "Scalable Infrastructure",
        description:
          "Built on modern, scalable cloud infrastructure designed to grow alongside your business.",
        icon: Server,
        badge: "Cloud",
      },
      {
        title: "Fully Customizable",
        description:
          "You own it. We can easily modify the codebase to fit your exact operational workflows.",
        icon: Wrench,
        badge: "Custom",
      },
    ],
  },
];

export default function ProductSec() {
  return (
    <section className="bg-white text-black py-24 px-6 md:px-12 lg:px-20 w-full min-h-screen font-sans">
      <div className="max-w-7xl mx-auto space-y-24">
        {productsData.map((section, sectionIdx) => (
          <div key={sectionIdx} className="space-y-10 text-left">
            {/* Category Header */}
            <div className="relative inline-block pb-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-headingColor">
                {section.category}
              </h2>
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#BFCA16]" />
            </div>

            {/* Grid Layout (Switches automatically to 3 columns for Section 5) */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 ${
                section.items.length === 3
                  ? "lg:grid-cols-3 max-w-5xl"
                  : "lg:grid-cols-4"
              } gap-6`}
            >
              {section.items.map((product, index) => (
                <ProductCard key={index} product={product} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- PRODUCT CARD ---
function ProductCard({
  product,
  index,
}: {
  product: (typeof productsData)[0]["items"][0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const Icon = product.icon;

  // Real-time Mouse Coordinate Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth Spring Filtering
  const mouseXSpring = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 150, damping: 20 });

  // Map limits to max 12 degrees of physical spatial tilt
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const relativeX = e.clientX - rect.left - width / 2;
    const relativeY = e.clientY - rect.top - height / 2;

    mouseX.set(relativeX / width);
    mouseY.set(relativeY / height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex flex-col justify-between rounded-3xl overflow-hidden p-8 md:p-9 h-90 group cursor-pointer select-none bg-cardBgColor border border-cardBorderColor"
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        initial={{ opacity: 0, y: 48 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.65,
          ease: [0.16, 1, 0.3, 1],
          delay: index * 0.08,
        }}
        whileHover="hover"
      >
        {/* Fill Background Slide Transition */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ background: "#BFCA16", originY: 1 }}
          variants={{ hover: { scaleY: 1 }, initial: { scaleY: 0 } }}
          initial={{ scaleY: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Top Header Block: Icon and Mini Badge */}
        <div
          className="relative z-10 flex items-center justify-between w-full"
          style={{ transform: "translateZ(30px)" }}
        >
          <motion.div
            className="w-12 h-12 rounded-xl flex items-center justify-center bg-white border border-zinc-200/80 transition-colors"
            variants={{
              hover: {
                backgroundColor: "rgba(255,255,255,0.15)",
                borderColor: "rgba(255,255,255,0.2)",
              },
            }}
          >
            <Icon className="w-5 h-5 text-[#BFCA16] group-hover:text-white transition-colors duration-300" />
          </motion.div>

          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-200/60 text-zinc-600 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
            {product.badge}
          </span>
        </div>

        {/* Bottom Body Block: Text Copy & Action Prompt */}
        <div
          className="relative z-10 flex flex-col gap-4"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="space-y-2">
            <motion.h3
              className="text-lg md:text-xl font-bold tracking-tight text-headingColor leading-snug"
              variants={{ hover: { color: "#ffffff" } }}
              transition={{ duration: 0.2 }}
            >
              {product.title}
            </motion.h3>

            <motion.p className="text-xs md:text-sm leading-relaxed font-normal text-descriptionColor group-hover:text-white/80 transition-colors duration-250 line-clamp-3">
              {product.description}
            </motion.p>
          </div>

          {/* View Product Hyperlink Accent */}
          <motion.div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900 group-hover:text-white pt-1 transition-colors duration-200">
            <span>View Product</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
