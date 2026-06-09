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
  Monitor,
  Cpu,
  Smartphone,
  Database,
  Search,
  Share2,
  Megaphone,
  MapPin,
  Camera,
  Layers,
  Mail,
  MessageSquare,
  ShieldCheck,
  Zap,
  Server,
  Wrench,
  LucideIcon,
  ArrowRight,
} from "lucide-react";

// --- SERVICE DATA ---
const servicesData = [
  {
    category: "1. Development",
    items: [
      {
        title: "Website\nDevelopment",
        description:
          "Visually appealing, SEO-friendly, and business-driven websites tailored to your brand.",
        icon: Monitor,
        accent: "#BFCA16",
        multiline: false,
        badge: "Web",
      },
      {
        title: "ERP Systems",
        description:
          "Cloud-based Enterprise Resource Planning to manage your entire business operations.",
        icon: Cpu,
        accent: "#BFCA16",
        multiline: false,
        badge: "ERP",
      },
      {
        title: "Mobile Apps",
        description:
          "Scalable Android and iOS applications built for high performance and user engagement.",
        icon: Smartphone,
        accent: "#BFCA16",
        multiline: false,
        badge: "App",
      },
      {
        title: "Custom CRM",
        description:
          "Omni-channel Customer Relationship Management tailored for your sales workflows.",
        icon: Database,
        accent: "#BFCA16",
        multiline: false,
        badge: "CRM",
      },
    ],
  },
  {
    category: "2. Marketing",
    items: [
      {
        title: "SEO\nOptimization",
        description:
          "Data-driven strategies to dominate search results and drive organic traffic consistently.",
        icon: Search,
        accent: "#BFCA16",
        multiline: false,
        badge: "SEO",
      },
      {
        title: "Social Media",
        description:
          "Viral content strategies and community management to build brand loyalty and awareness.",
        icon: Share2,
        accent: "#BFCA16",
        multiline: false,
        badge: "Social",
      },
      {
        title: "Digital\nMarketing",
        description:
          "Comprehensive PPC and digital ad campaigns engineered for maximum ROI and lead generation.",
        icon: Megaphone,
        accent: "#BFCA16",
        multiline: false,
        badge: "Ads",
      },
      {
        title: "Google Business",
        description:
          "Optimize your local presence to attract customers actively searching in your area.",
        icon: MapPin,
        accent: "#BFCA16",
        multiline: false,
        badge: "GMB",
      },
    ],
  },
  {
    category: "3. Business Studio",
    items: [
      {
        title: "Product\nPhotoshoot",
        description:
          "High-quality professional photography to make your products stand out.",
        icon: Camera,
        accent: "#BFCA16",
        multiline: false,
        badge: "Photo",
      },
      {
        title: "Branding &\nPackaging",
        description:
          "Creative brand identity design and eye-catching packaging solutions.",
        icon: Layers,
        accent: "#BFCA16",
        multiline: false,
        badge: "Brand",
      },
    ],
  },
  {
    category: "4. Communication",
    items: [
      {
        title: "Bulk Email",
        description:
          "Reliable bulk email delivery systems for marketing and transactional alerts.",
        icon: Mail,
        accent: "#BFCA16",
        multiline: false,
        badge: "Email",
      },
      {
        title: "WhatsApp API",
        description:
          "Automate customer support and notifications via Official WhatsApp Business API.",
        icon: MessageSquare,
        accent: "#BFCA16",
        multiline: false,
        badge: "API",
      },
      {
        title: "Business Email",
        description:
          "Secure, custom business email solutions (G-Suite, Outlook) for your team.",
        icon: ShieldCheck,
        accent: "#BFCA16",
        multiline: false,
        badge: "Mail",
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
        accent: "#BFCA16",
        multiline: false,
        badge: "Fast",
      },
      {
        title: "Scalable Infrastructure",
        description:
          "Built on modern, scalable cloud infrastructure designed to grow alongside your business.",
        icon: Server,
        accent: "#BFCA16",
        multiline: false,
        badge: "Cloud",
      },
      {
        title: "Fully Customizable",
        description:
          "You own it. We can easily modify the codebase to fit your exact operational workflows.",
        icon: Wrench,
        accent: "#BFCA16",
        multiline: false,
        badge: "Custom",
      },
    ],
  },
];

export default function ServiceSec() {
  return (
    <section className="bg-white text-black py-24 px-6 md:px-12 lg:px-20 w-full min-h-screen">
      <div className="max-w-7xl mx-auto space-y-24">
        {servicesData.map((section, sectionIdx) => (
          <div key={sectionIdx} className="space-y-10 text-left">
            {/* Category Section Header line */}
            <div className="relative inline-block pb-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-950">
                {section.category}
              </h2>
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#BFCA16]" />
            </div>

            {/* Grid of customized motion cards with adaptive widths for 3 or 4 item rows */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 ${
                section.items.length === 3
                  ? "lg:grid-cols-3 max-w-5xl"
                  : "lg:grid-cols-4"
              } gap-6`}
            >
              {section.items.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- SERVICE CARD ---
function ServiceCard({
  service,
  index,
}: {
  service: Omit<(typeof servicesData)[0]["items"][0], "icon"> & {
    icon: LucideIcon;
  };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-8% 0px" });
  const Icon = service.icon;

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
        className="relative flex flex-col justify-between rounded-3xl overflow-hidden p-8 md:p-9 h-90 group cursor-pointer select-none bg-[#f9f9fb] border border-zinc-200/50"
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
            {service.badge}
          </span>
        </div>

        {/* Bottom Body Block: Text Copy & Action Prompt */}
        <div
          className="relative z-10 flex flex-col gap-4"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="space-y-2">
            <motion.h3
              className="text-lg md:text-xl font-bold tracking-tight text-zinc-900 leading-snug"
              style={{
                whiteSpace: service.multiline ? "pre-line" : "nowrap",
              }}
              variants={{ hover: { color: "#ffffff" } }}
              transition={{ duration: 0.2 }}
            >
              {service.title}
            </motion.h3>

            <motion.p className="text-xs md:text-sm leading-relaxed font-normal text-zinc-500 group-hover:text-white/80 transition-colors duration-250 line-clamp-3">
              {service.description}
            </motion.p>
          </div>

          {/* View Service Hyperlink Accent */}
          <motion.div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900 group-hover:text-white pt-1 transition-colors duration-200">
            <span>View Service</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
