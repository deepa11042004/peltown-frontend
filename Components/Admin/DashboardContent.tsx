"use client";

import React, { useState, useRef } from "react";
import {
  Bell,
  MoreHorizontal,
  ChevronDown,
  MessageSquare,
  Heart,
  ShoppingBag,
  Globe,
} from "lucide-react";
import Link from "next/link";

// Types for activities
interface Activity {
  id: string;
  name: string;
  action: string;
  time: string;
  initials: string;
  avatarBg: string;
  iconType: "heart" | "purchase";
  iconBg: string;
}

export default function DashboardContent() {
  const [activeTimeframe, setActiveTimeframe] = useState<
    "Day" | "Week" | "Month" | "Year"
  >("Week");

  // Interactive Chart state
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(8); // default to Sep (24 Sep 2024)
  const chartRef = useRef<SVGSVGElement>(null);

  const stats = [
    {
      label: "Verification Requests",
      value: "482",
      desc: "+32.4% from last month",
    },
    { label: "Active Carriers", value: "185", desc: "+12.1% from last month" },
    { label: "Completed Checks", value: "1,120", desc: "98.4% success rate" },
    { label: "Pending Reviews", value: "24", desc: "Average review time: 2h" },
  ];

  // Chart data points
  // x is relative horizontal % or px, y is the metric value translated to SVG y-coord (lower is higher value)
  const chartPoints = [
    {
      label: "Jan",
      x: 60,
      y: 220,
      date: "24 Jan 2024",
      val: "84 checks",
      change: "+1.2%",
    },
    {
      label: "Feb",
      x: 125,
      y: 210,
      date: "24 Feb 2024",
      val: "92 checks",
      change: "+1.8%",
    },
    {
      label: "Mar",
      x: 190,
      y: 190,
      date: "24 Mar 2024",
      val: "110 checks",
      change: "+3.1%",
    },
    {
      label: "Apr",
      x: 255,
      y: 215,
      date: "24 Apr 2024",
      val: "95 checks",
      change: "-0.9%",
    },
    {
      label: "May",
      x: 320,
      y: 245,
      date: "24 May 2024",
      val: "78 checks",
      change: "+0.5%",
    },
    {
      label: "Jun",
      x: 385,
      y: 200,
      date: "24 Jun 2024",
      val: "105 checks",
      change: "+2.0%",
    },
    {
      label: "Jul",
      x: 450,
      y: 215,
      date: "24 Jul 2024",
      val: "98 checks",
      change: "-1.1%",
    },
    {
      label: "Aug",
      x: 515,
      y: 205,
      date: "24 Aug 2024",
      val: "102 checks",
      change: "+1.5%",
    },
    {
      label: "Sep",
      x: 580,
      y: 180,
      date: "24 Sep 2024",
      val: "124 checks",
      change: "2.4%",
    }, // Current active hover in design
    {
      label: "Oct",
      x: 645,
      y: 205,
      date: "24 Oct 2024",
      val: "100 checks",
      change: "+1.1%",
    },
    {
      label: "Nov",
      x: 710,
      y: 190,
      date: "24 Nov 2024",
      val: "115 checks",
      change: "+2.8%",
    },
    {
      label: "Dec",
      x: 775,
      y: 210,
      date: "24 Dec 2024",
      val: "94 checks",
      change: "-0.5%",
    },
  ];

  // Construct SVG path string for the line
  const pathD = chartPoints.reduce((acc, point, index) => {
    return acc + `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`;
  }, "");

  // Path string closed to the bottom for the vertical line fill pattern
  const closedPathD = `${pathD} L ${chartPoints[chartPoints.length - 1].x} 270 L ${chartPoints[0].x} 270 Z`;

  // Handle chart mouse move tracking
  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (!chartRef.current) return;
    const rect = chartRef.current.getBoundingClientRect();
    // Calculate the cursor X relative to the SVG width
    const svgWidth = 840; // ViewBox width
    const scaleX = svgWidth / rect.width;
    const clientX = (e.clientX - rect.left) * scaleX;

    // Find nearest point
    let nearestIndex = 0;
    let minDistance = Infinity;

    chartPoints.forEach((point, index) => {
      const distance = Math.abs(point.x - clientX);
      if (distance < minDistance) {
        minDistance = distance;
        nearestIndex = index;
      }
    });

    // Only update if it's within a reasonable threshold (e.g. 50px)
    if (minDistance < 40) {
      setHoveredPoint(nearestIndex);
    } else {
      setHoveredPoint(null);
    }
  };

  const handleMouseLeave = () => {
    // Keep September selected as default to match mock design, or clear it.
    // Let's reset to September (index 8) to maintain the exact visual state after a short delay
    setTimeout(() => {
      setHoveredPoint(8);
    }, 1500);
  };

  const activities: Activity[] = [
    {
      id: "1",
      name: "David Elson",
      action: "submitted a verification request",
      time: "6 mins ago",
      initials: "DE",
      avatarBg: "bg-teal-50 bg-opacity-70 text-teal-700",
      iconType: "heart",
      iconBg: "bg-red-500",
    },
    {
      id: "2",
      name: "Kurt Bates",
      action: "updated their carrier profile",
      time: "16 mins ago",
      initials: "KB",
      avatarBg: "bg-indigo-50 bg-opacity-70 text-indigo-700",
      iconType: "purchase",
      iconBg: "bg-rose-500",
    },
    {
      id: "3",
      name: "Eddie Lake",
      action: "completed background check",
      time: "20 mins ago",
      initials: "EL",
      avatarBg: "bg-blue-50 bg-opacity-70 text-blue-700",
      iconType: "heart",
      iconBg: "bg-red-500",
    },
    {
      id: "4",
      name: "Patricia Sanders",
      action: "registered as a new carrier",
      time: "32 mins ago",
      initials: "PS",
      avatarBg: "bg-purple-50 bg-opacity-70 text-purple-700",
      iconType: "purchase",
      iconBg: "bg-purple-500",
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-white p-6 lg:p-8 text-zinc-900 font-sans">
      {/* Top Welcome Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950">
          Hello, Admin!
        </h1>
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-full text-xs font-bold hover:bg-zinc-800 transition-colors shadow-sm cursor-pointer"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>Open Site</span>
        </Link>
      </div>

      {/* Main Grid: Left (Metrics + Chart), Right (Shop Advisor, Products, Activity) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2/3 width) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview Performance Card */}
          <div className="bg-white border border-[#e4e4e7] rounded-xl p-5 shadow-xs">
            <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
              <h2 className="text-lg font-bold text-zinc-950">
                Overview performance
              </h2>

              {/* Tab Selector */}
              <div className="flex bg-[#efeff1] p-0.5 rounded-lg text-xs font-semibold text-zinc-500">
                {(["Day", "Week", "Month", "Year"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTimeframe(t)}
                    className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                      activeTimeframe === t
                        ? "bg-white text-zinc-950 shadow-xs font-bold"
                        : "hover:text-zinc-800"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-px bg-[#e4e4e7] -mx-5 -mb-5 border-t border-[#e4e4e7] overflow-hidden rounded-b-xl">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 hover:bg-zinc-50 transition-colors"
                >
                  <span className="text-xs font-bold text-zinc-400 block mb-1">
                    {stat.label}
                  </span>
                  <span className="text-4xl font-extrabold text-zinc-900 block mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-semibold text-zinc-400">
                    {stat.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Chart Section */}
          <div className="bg-white border border-[#e4e4e7] rounded-xl p-5 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-zinc-950">
                Verification Activity
              </h2>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 px-3 py-1 bg-white border border-zinc-200 rounded-lg text-xs font-bold text-zinc-800 shadow-xs hover:bg-zinc-50 cursor-pointer">
                  <span>Last Year</span>
                  <ChevronDown className="w-3 h-3 text-zinc-400" />
                </button>
                <button className="p-1 hover:bg-zinc-100 rounded-md border border-transparent hover:border-zinc-200 cursor-pointer">
                  <MoreHorizontal className="w-4 h-4 text-zinc-500" />
                </button>
              </div>
            </div>

            {/* Total Revenue Header */}
            <div className="mb-4">
              <span className="text-xs font-bold text-zinc-400 block mb-0.5">
                Total Verifications
              </span>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-3xl font-extrabold text-zinc-950">
                  1,120
                </span>
                <span className="text-xs font-semibold text-zinc-500">
                  You processed{" "}
                  <span className="text-zinc-900 font-bold">+84 checks</span>{" "}
                  this month
                </span>
              </div>
            </div>

            {/* Chart Area */}
            <div className="relative pt-6 h-70 w-full">
              <svg
                ref={chartRef}
                viewBox="0 0 840 280"
                className="w-full h-full select-none overflow-visible"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Patterns */}
                <defs>
                  {/* Vertical stripes pattern */}
                  <pattern
                    id="vertical-lines"
                    width="4"
                    height="280"
                    patternUnits="userSpaceOnUse"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="280"
                      stroke="#e4e4e7"
                      strokeWidth="0.8"
                    />
                  </pattern>
                </defs>

                {/* Horizontal Grid lines */}
                <g className="stroke-zinc-100 stroke-1">
                  <line x1="50" y1="30" x2="800" y2="30" />
                  <line x1="50" y1="90" x2="800" y2="90" />
                  <line x1="50" y1="150" x2="800" y2="150" />
                  <line x1="50" y1="210" x2="800" y2="210" />
                  <line
                    x1="50"
                    y1="270"
                    x2="800"
                    y2="270"
                    className="stroke-zinc-300"
                  />
                </g>

                {/* Y-Axis labels */}
                <g
                  className="fill-zinc-400 text-[10px] font-bold text-right font-sans"
                  textAnchor="end"
                >
                  <text x="35" y="34">
                    400
                  </text>
                  <text x="35" y="94">
                    300
                  </text>
                  <text x="35" y="154">
                    200
                  </text>
                  <text x="35" y="214">
                    100
                  </text>
                  <text x="35" y="274">
                    0
                  </text>
                </g>

                {/* Shaded Area under path filled with Vertical lines */}
                <path
                  d={closedPathD}
                  fill="url(#vertical-lines)"
                  className="transition-all duration-300"
                />

                {/* The main bold black line */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="#18181b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-300"
                />

                {/* X-Axis labels */}
                <g
                  className="fill-zinc-400 text-[10px] font-bold font-sans"
                  textAnchor="middle"
                >
                  {chartPoints.map((point, idx) => (
                    <text key={idx} x={point.x} y="295">
                      {point.label}
                    </text>
                  ))}
                </g>

                {/* Hover States & Tooltip Indicator */}
                {hoveredPoint !== null && (
                  <g>
                    {/* Vertical Tracker guide line */}
                    <line
                      x1={chartPoints[hoveredPoint].x}
                      y1="30"
                      x2={chartPoints[hoveredPoint].x}
                      y2="270"
                      stroke="#18181b"
                      strokeWidth="1.2"
                      strokeDasharray="2,2"
                    />

                    {/* Bold dot on chart line */}
                    <circle
                      cx={chartPoints[hoveredPoint].x}
                      cy={chartPoints[hoveredPoint].y}
                      r="4.5"
                      fill="#18181b"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                    />
                  </g>
                )}
              </svg>

              {/* Tooltip Card Overlay (Positioned HTML over SVG) */}
              {hoveredPoint !== null && (
                <div
                  className="absolute bg-white border border-[#e4e4e7] shadow-lg rounded-xl p-3 z-10 pointer-events-none transition-all duration-200"
                  style={{
                    left: `${(chartPoints[hoveredPoint].x / 840) * 100}%`,
                    top: `${(chartPoints[hoveredPoint].y / 280) * 100 - 32}%`,
                    transform: "translate(-50%, -100%)",
                  }}
                >
                  {/* Small tooltip arrow */}
                  <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-[#e4e4e7]" />

                  {/* Tooltip Content */}
                  <div className="relative space-y-1">
                    <span className="text-[10px] font-bold text-zinc-400 block">
                      {chartPoints[hoveredPoint].date}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-extrabold text-zinc-950">
                        {chartPoints[hoveredPoint].val}
                      </span>
                      <span className="px-1.5 py-0.5 rounded-full bg-[#f4fbf4] text-[#2e7d32] text-[9px] font-bold">
                        {chartPoints[hoveredPoint].change}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column (1/3 width) */}
        <div className="space-y-8">
          {/* Shop Advisor Section */}
          <div className="bg-white border border-[#e4e4e7] rounded-xl p-5 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-zinc-950 tracking-tight">
                Verification Advisor
              </h2>
              <button className="text-xs font-bold text-zinc-900 hover:text-zinc-600 flex items-center gap-0.5 cursor-pointer">
                <span>See All</span>
                <span className="text-[10px]">→</span>
              </button>
            </div>

            <div className="bg-white border border-zinc-200 rounded-xl p-4.5 space-y-4 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
                  <Bell className="w-4 h-4 text-zinc-700" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-extrabold text-zinc-900">
                    Carrier Screenings Increasing
                  </h3>
                  <p className="text-[11px] font-medium leading-relaxed text-zinc-400">
                    Summer carrier recruitment starts soon. Update your
                    verification guidelines.
                  </p>
                </div>
              </div>
              <div className="flex justify-end pt-1">
                <button className="px-4 py-1.5 border border-zinc-200 hover:bg-zinc-50 text-zinc-800 rounded-lg text-xs font-bold shadow-2xs cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="bg-white border border-[#e4e4e7] rounded-xl p-5 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-zinc-950 tracking-tight">
                Carriers Directory
              </h2>
              <button className="text-xs font-bold text-zinc-900 hover:text-zinc-600 flex items-center gap-0.5 cursor-pointer">
                <span>See All</span>
                <span className="text-[10px]">→</span>
              </button>
            </div>

            <div className="bg-white border border-zinc-200 rounded-xl divide-y divide-zinc-100 overflow-hidden shadow-2xs">
              {[
                { label: "Active Carriers", count: 185 },
                { label: "Pending Onboarding", count: 12 },
                { label: "Inactive Profiles", count: 4 },
              ].map((row, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center px-4 py-3.5 hover:bg-zinc-50 transition-colors"
                >
                  <span className="text-xs font-bold text-zinc-600">
                    {row.label}
                  </span>
                  <span className="text-sm font-extrabold text-zinc-950">
                    {row.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities Section */}
          <div className="bg-white border border-[#e4e4e7] rounded-xl p-5 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-zinc-950 tracking-tight">
                Recent Activities
              </h2>
              <button className="text-xs font-bold text-zinc-900 hover:text-zinc-600 flex items-center gap-0.5 cursor-pointer">
                <span>See All</span>
                <span className="text-[10px]">→</span>
              </button>
            </div>

            <div className="space-y-4.5">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between hover:bg-zinc-50 -mx-2 p-2 rounded-lg transition-colors cursor-default"
                >
                  <div className="flex items-center gap-3">
                    {/* User Avatar Circle */}
                    <div className="relative">
                      <div
                        className={`w-9 h-9 rounded-full ${activity.avatarBg} flex items-center justify-center font-extrabold text-xs border border-zinc-100`}
                      >
                        {activity.initials}
                      </div>

                      {/* Heart or Purchase Overlay Badge */}
                      <div
                        className={`absolute -bottom-0.5 -right-0.5 w-4.5 h-4.5 rounded-full ${activity.iconBg} border border-white flex items-center justify-center`}
                      >
                        {activity.iconType === "heart" ? (
                          <Heart className="w-2.5 h-2.5 text-white fill-white" />
                        ) : (
                          <ShoppingBag className="w-2.5 h-2.5 text-white" />
                        )}
                      </div>
                    </div>

                    <div className="space-y-0.5">
                      <p className="text-xs font-medium text-zinc-900">
                        <span className="font-extrabold">{activity.name}</span>{" "}
                        <span className="text-zinc-600">{activity.action}</span>
                      </p>
                      <p className="text-[10px] font-semibold text-zinc-400">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Bubble Button */}
      <button
        onClick={() => alert("Open chat support")}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer z-50"
      >
        <MessageSquare className="w-5.5 h-5.5" />
      </button>
    </div>
  );
}
