"use client";

import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  ShoppingBag,
  Plane,
  Smartphone,
  Mail,
  AtSign,
  Database,
  ChevronDown,
  Clock,
  ArrowRight,
  Check,
} from "lucide-react";

// STATIC CALCULATION METADATA
const TABS = [
  { id: "web", name: "Website", icon: Monitor },
  { id: "ecommerce", name: "E-Commerce", icon: ShoppingBag },
  { id: "travel", name: "Travel", icon: Plane },
  { id: "mobile", name: "Mobile App", icon: Smartphone },
  { id: "bulkemail", name: "Bulk Email", icon: Mail },
  { id: "bizemail", name: "Biz Email", icon: AtSign },
  { id: "crm", name: "CRM / ERP", icon: Database },
];

const WEB_TYPES = [
  { label: "Corporate / Business Site", base: 15000, time: "1 Week" },
  { label: "Portfolio / Personal Site", base: 10000, time: "1 Week" },
  { label: "Blog / News Platform", base: 12000, time: "1 Week" },
  { label: "Landing Page Package", base: 6000, time: "3 Days" },
];

const ECOM_TYPES = [
  {
    label: "Single Vendor (Own Products) - Base ₹25,000",
    base: 25000,
    time: "2 Weeks",
  },
  {
    label: "Multi-Vendor Marketplace - Base ₹65,000",
    base: 65000,
    time: "4 Weeks",
  },
];

const TRAVEL_TYPES = [
  { label: "B2C Booking Engine (Base ₹30,000)", base: 30000, time: "3 Weeks" },
  {
    label: "B2B Agent Console Portal (Base ₹50,000)",
    base: 50000,
    time: "4 Weeks",
  },
];

const APP_CATEGORIES = [
  { label: "Service / Utility", base: 18000, time: "3 Weeks" },
  { label: "Social Network / Community", base: 28000, time: "5 Weeks" },
  { label: "On-Demand Delivery Client", base: 24000, time: "4 Weeks" },
];

const EMAIL_VOLUMES = [
  { label: "Up to 10,000 Emails (₹1,500)", base: 1500, time: "24 Hours" },
  { label: "Up to 50,000 Emails (₹4,500)", base: 4500, time: "24 Hours" },
  { label: "Up to 100,000 Emails (₹8,000)", base: 8000, time: "48 Hours" },
];

const BIZ_TIERS = [
  { label: "Basic (5GB) - ₹400/yr per user", price: 400 },
  { label: "Premium (50GB) - ₹1,200/yr per user", price: 1200 },
];

const SMM_PACKAGES = [
  { label: "Startup Brand Package (₹10,000/mo)", price: 10000 },
  { label: "Growth Acceleration Package (₹25,000/mo)", price: 25000 },
];

const ADS_MANAGEMENT = [
  { label: "No Ads Management", price: 0 },
  { label: "Basic Setup & Monitor (+₹5,000/mo)", price: 5000 },
];

export default function CostSec() {
  const [activeTab, setActiveTab] = useState("web");

  // STATE LAYER FOR 1. WEBSITE
  const [webType, setWebType] = useState("");
  const [webPages, setWebPages] = useState(0);
  const [webForms, setWebForms] = useState(0);
  const [webAdmin, setWebAdmin] = useState(false);
  const [webSeo, setWebSeo] = useState(false);

  //  STATE LAYER FOR 2. E-COMMERCE
  const [ecomType, setEcomType] = useState(ECOM_TYPES[0].label);
  const [ecomPlatforms, setEcomPlatforms] = useState({
    web: true,
    android: false,
    ios: false,
  });
  const [ecomAuth, setEcomAuth] = useState("free");
  const [ecomInvoice, setEcomInvoice] = useState(false);

  //  STATE LAYER FOR 3. TRAVEL
  const [travelType, setTravelType] = useState(TRAVEL_TYPES[0].label);
  const [travelPlatforms, setTravelPlatforms] = useState({
    web: true,
    android: false,
  });
  const [travelFlightApi, setTravelFlightApi] = useState(false);
  const [travelHotelApi, setTravelHotelApi] = useState(false);

  //  STATE LAYER FOR 4. MOBILE APP
  const [appCat, setAppCat] = useState(APP_CATEGORIES[0].label);
  const [appPlatforms, setAppPlatforms] = useState({
    android: true,
    ios: false,
  });
  const [appApi, setAppApi] = useState(false);
  const [appStore, setAppStore] = useState(false);

  //  STATE LAYER FOR 5. BULK EMAIL
  const [emailVol, setEmailVol] = useState(EMAIL_VOLUMES[0].label);
  const [emailIp, setEmailIp] = useState(false);
  const [emailTemplate, setEmailTemplate] = useState(false);

  //  STATE LAYER FOR 6. BIZ EMAIL
  const [bizUsers, setBizUsers] = useState(1);
  const [bizTier, setBizTier] = useState(BIZ_TIERS[0].label);
  const [bizMigration, setBizMigration] = useState(false);

  //  STATE LAYER FOR 7. SOCIAL MEDIA
  const [smmPkg, setSmmPkg] = useState("");
  const [smmAds, setSmmAds] = useState(ADS_MANAGEMENT[0].label);

  //  STATE LAYER FOR 8. CRM / ERP
  const [crmModules, setCrmModules] = useState({
    hr: false,
    sales: false,
    stock: false,
    billing: false,
  });
  const [crmUsers, setCrmUsers] = useState(5);

  // CALCULATOR LOGIC ENGINE (REAL-TIME ESTIMATION COMPILER)

  const calculationSummary = useMemo(() => {
    let total = 0;
    let time = "1 Week";
    const breakdown: { label: string; cost: number; suffix?: string }[] = [];
    let badge = "Website Development";

    switch (activeTab) {
      case "web":
        badge = "Website Development";
        const selectedWeb = WEB_TYPES.find((t) => t.label === webType);
        if (selectedWeb) {
          total += selectedWeb.base;
          time = selectedWeb.time;
          breakdown.push({
            label: selectedWeb.label.split(" (")[0],
            cost: selectedWeb.base,
          });
        }
        if (webPages > 0) {
          const cost = webPages * 500;
          total += cost;
          breakdown.push({ label: `Extra Pages (${webPages})`, cost });
        }
        if (webForms > 0) {
          const cost = webForms * 300;
          total += cost;
          breakdown.push({ label: `Contact Forms (${webForms})`, cost });
        }
        if (webAdmin) {
          total += 5000;
          breakdown.push({ label: "Admin Panel Add-on", cost: 5000 });
        }
        if (webSeo) {
          total += 3000;
          breakdown.push({ label: "SEO Starter Pack", cost: 3000 });
        }
        break;

      case "ecommerce":
        badge = "E-Commerce Project";
        const selectedEcom = ECOM_TYPES.find((t) => t.label === ecomType);
        if (selectedEcom) {
          total += selectedEcom.base;
          time = selectedEcom.time;
          breakdown.push({
            label: selectedEcom.label.split(" - ")[0],
            cost: selectedEcom.base,
          });
        }

        let appCost = 0;
        if (ecomPlatforms.android) appCost += 20000;
        if (ecomPlatforms.ios) appCost += 25000;
        if (ecomPlatforms.android && ecomPlatforms.ios) {
          appCost = appCost * 0.85; // 15% Bundle Discount applied directly
        }
        if (appCost > 0) {
          total += appCost;
          breakdown.push({
            label: "Mobile App Platforms (Bundled)",
            cost: appCost,
          });
        }

        if (ecomAuth === "otp") {
          total += 2500;
          breakdown.push({ label: "Mobile OTP Login Setup", cost: 2500 });
        }
        if (ecomInvoice) {
          total += 1500;
          breakdown.push({ label: "Auto-Invoice Email Module", cost: 1500 });
        }
        break;

      case "travel":
        badge = "Travel Portal";
        const selectedTravel = TRAVEL_TYPES.find((t) => t.label === travelType);
        if (selectedTravel) {
          total += selectedTravel.base;
          time = selectedTravel.time;
          breakdown.push({
            label: "Core System Architecture",
            cost: selectedTravel.base,
          });
        }
        if (travelPlatforms.android) {
          total += 20000;
          breakdown.push({ label: "Android Application App", cost: 20000 });
        }
        if (travelFlightApi) {
          total += 8000;
          breakdown.push({ label: "Flight API Integration", cost: 8000 });
        }
        if (travelHotelApi) {
          total += 8000;
          breakdown.push({ label: "Hotel API Integration", cost: 8000 });
        }
        break;

      case "mobile":
        badge = "Custom Mobile App";
        const selectedApp = APP_CATEGORIES.find((t) => t.label === appCat);
        let baseAppCost = 0;
        if (selectedApp) {
          time = selectedApp.time;
          if (appPlatforms.android) {
            baseAppCost += 18000;
            breakdown.push({ label: "Android App Build Base", cost: 18000 });
          }
          if (appPlatforms.ios) {
            baseAppCost += 20000;
            breakdown.push({ label: "iOS App Build Base", cost: 20000 });
          }
        }
        total += baseAppCost;
        if (appApi) {
          total += 5000;
          breakdown.push({ label: "Custom Backend API", cost: 5000 });
        }
        if (appStore) {
          total += 2000;
          breakdown.push({ label: "Store Submission Support", cost: 2000 });
        }
        break;

      case "bulkemail":
        badge = "Bulk Email Service";
        const selectedEmail = EMAIL_VOLUMES.find((v) => v.label === emailVol);
        if (selectedEmail) {
          total += selectedEmail.base;
          time = selectedEmail.time;
          breakdown.push({
            label: "Email Volume Allocation",
            cost: selectedEmail.base,
          });
        }
        if (emailIp) {
          total += 3500;
          breakdown.push({ label: "Dedicated IP Address", cost: 3500 });
        }
        if (emailTemplate) {
          total += 1000;
          breakdown.push({ label: "Custom HTML Template", cost: 1000 });
        }
        break;

      case "bizemail":
        badge = "Business Email";
        const selectedTier = BIZ_TIERS.find((t) => t.label === bizTier);
        if (selectedTier) {
          const cost = selectedTier.price * bizUsers;
          total += cost;
          time = "2 Hours";
          breakdown.push({
            label: `${bizUsers} Users x ₹${selectedTier.price}`,
            cost,
            suffix: "/yr",
          });
        }
        if (bizMigration) {
          total += 500;
          breakdown.push({ label: "Provider Migration (Flat)", cost: 500 });
        }
        break;

      case "social":
        badge = "Social Media";
        const selectedSmm = SMM_PACKAGES.find((p) => p.label === smmPkg);
        if (selectedSmm) {
          total += selectedSmm.price;
          time = "Monthly";
          breakdown.push({
            label: "Management Retainer Pkg",
            cost: selectedSmm.price,
            suffix: "/mo",
          });
        }
        const selectedAds = ADS_MANAGEMENT.find((a) => a.label === smmAds);
        if (selectedAds && selectedAds.price > 0) {
          total += selectedAds.price;
          breakdown.push({
            label: "Ad Campaign Overhead",
            cost: selectedAds.price,
            suffix: "/mo",
          });
        }
        break;

      case "crm":
        badge = "CRM / ERP Solution";
        total += 15000; // Automatic Base System Cost
        time = "3 Weeks";
        breakdown.push({ label: "Base Engine Architecture", cost: 15000 });

        let moduleCost = 0;
        if (crmModules.hr) moduleCost += 5000;
        if (crmModules.sales) moduleCost += 5000;
        if (crmModules.stock) moduleCost += 8000;
        if (crmModules.billing) moduleCost += 6000;
        if (moduleCost > 0) {
          total += moduleCost;
          breakdown.push({
            label: "Selected Enterprise Modules",
            cost: moduleCost,
          });
        }

        if (crmUsers > 0) {
          const cost = crmUsers * 500;
          total += cost;
          breakdown.push({
            label: `Staff User Licenses (${crmUsers})`,
            cost,
            suffix: " Annual",
          });
        }
        break;
    }

    return { total, time, breakdown, badge };
  }, [
    activeTab,
    webType,
    webPages,
    webForms,
    webAdmin,
    webSeo,
    ecomType,
    ecomPlatforms,
    ecomAuth,
    ecomInvoice,
    travelType,
    travelPlatforms,
    travelFlightApi,
    travelHotelApi,
    appCat,
    appPlatforms,
    appApi,
    appStore,
    emailVol,
    emailIp,
    emailTemplate,
    bizUsers,
    bizTier,
    bizMigration,
    smmPkg,
    smmAds,
    crmModules,
    crmUsers,
  ]);

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-20 w-full min-h-screen font-sans antialiased flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* ================= BUTTON TABS LAYOUT SWITCHER ================= */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full border-b border-zinc-800 pb-8">
          {TABS.map((tab) => {
            const CurrentIcon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-bold border tracking-tight transition-all duration-300 ${
                  isSelected
                    ? "bg-white border-white text-zinc-950 shadow-md shadow-zinc-950/10"
                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
                }`}
              >
                <CurrentIcon
                  className={`w-4 h-4 ${isSelected ? "text-[#BFCA16]" : "text-zinc-400"}`}
                />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* ================= MAIN DUAL PANELS CONTAINER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          {/* LEFT COLUMN: INTERACTIVE REQUIREMENTS SPECIFICATION FORM */}
          <div className="lg:col-span-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 md:p-10 text-left flex flex-col justify-between min-h-125">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 w-full"
              >
                {/* 1. LAYOUT LAYER FOR WEBSITE */}
                {activeTab === "web" && (
                  <>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Website Requirements
                    </h3>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                        Type of Website
                      </label>
                      <DropdownSelect
                        options={WEB_TYPES.map((w) => w.label)}
                        value={webType}
                        onChange={setWebType}
                        placeholder="Select Type"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                          Extra Pages
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={webPages}
                          onChange={(e) =>
                            setWebPages(
                              Math.max(0, parseInt(e.target.value) || 0),
                            )
                          }
                          className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 text-sm focus:border-[#BFCA16] outline-none font-bold"
                        />
                        <span className="text-[11px] font-semibold text-zinc-500 block pl-1">
                          ₹500 per page
                        </span>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                          Contact Forms
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={webForms}
                          onChange={(e) =>
                            setWebForms(
                              Math.max(0, parseInt(e.target.value) || 0),
                            )
                          }
                          className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 text-sm focus:border-[#BFCA16] outline-none font-bold"
                        />
                        <span className="text-[11px] font-semibold text-zinc-500 block pl-1">
                          ₹300 per form
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                        Add-ons
                      </label>
                      <div className="flex flex-col gap-2.5">
                        <CheckboxRow
                          checked={webAdmin}
                          onChange={setWebAdmin}
                          label="Admin Panel (₹5,000)"
                        />
                        <CheckboxRow
                          checked={webSeo}
                          onChange={setWebSeo}
                          label="SEO Starter Pack (₹3,000)"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* 2. LAYOUT LAYER FOR E-COMMERCE */}
                {activeTab === "ecommerce" && (
                  <>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      E-Commerce Solution
                    </h3>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                        Marketplace Type
                      </label>
                      <DropdownSelect
                        options={ECOM_TYPES.map((e) => e.label)}
                        value={ecomType}
                        onChange={setEcomType}
                      />
                    </div>

                    <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl space-y-4">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                        Platforms Required
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <CheckboxRow
                          checked={ecomPlatforms.web}
                          onChange={(v) =>
                            setEcomPlatforms((p) => ({ ...p, web: v }))
                          }
                          label="Website"
                          disabled
                        />
                        <CheckboxRow
                          checked={ecomPlatforms.android}
                          onChange={(v) =>
                            setEcomPlatforms((p) => ({ ...p, android: v }))
                          }
                          label="Android App (+₹20,000)"
                        />
                        <CheckboxRow
                          checked={ecomPlatforms.ios}
                          onChange={(v) =>
                            setEcomPlatforms((p) => ({ ...p, ios: v }))
                          }
                          label="iOS App (+₹25,000)"
                        />
                      </div>
                      <p className="text-[11px] font-semibold text-[#BFCA16] bg-[#BFCA16]/5 px-3 py-1 rounded-md inline-block">
                        Ordering both apps gives a 15% discount on app costs.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                        Authentication & Security
                      </label>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <RadioRow
                          checked={ecomAuth === "free"}
                          onClick={() => setEcomAuth("free")}
                          label="Email Verification (Free)"
                        />
                        <RadioRow
                          checked={ecomAuth === "otp"}
                          onClick={() => setEcomAuth("otp")}
                          label="Mobile OTP Login (+₹2,500 Setup)"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                        Advanced Features
                      </label>
                      <div className="flex flex-col gap-2.5">
                        <CheckboxRow
                          checked={ecomInvoice}
                          onChange={setEcomInvoice}
                          label="Auto-Invoice Email to Customer (+₹1,500)"
                        />
                        <CheckboxRow
                          checked={true}
                          onChange={() => {}}
                          label="Payment Gateway (Included)"
                          disabled
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* 3. LAYOUT LAYER FOR TRAVEL */}
                {activeTab === "travel" && (
                  <>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Travel Agency Portal
                    </h3>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                        System Type
                      </label>
                      <DropdownSelect
                        options={TRAVEL_TYPES.map((t) => t.label)}
                        value={travelType}
                        onChange={setTravelType}
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                        Platforms
                      </label>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <CheckboxRow
                          checked={travelPlatforms.web}
                          onChange={() => {}}
                          label="Website"
                          disabled
                        />
                        <CheckboxRow
                          checked={travelPlatforms.android}
                          onChange={(v) =>
                            setTravelPlatforms((p) => ({ ...p, android: v }))
                          }
                          label="Android App (+₹20,000)"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                        API Integrations
                      </label>
                      <div className="flex flex-col gap-2.5">
                        <CheckboxRow
                          checked={travelFlightApi}
                          onChange={setTravelFlightApi}
                          label="Flight API Integration (+₹8,000)"
                        />
                        <CheckboxRow
                          checked={travelHotelApi}
                          onChange={setTravelHotelApi}
                          label="Hotel API Integration (+₹8,000)"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* 4. LAYOUT LAYER FOR MOBILE APP */}
                {activeTab === "mobile" && (
                  <>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Custom App (Utility/Social)
                    </h3>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                        App Category
                      </label>
                      <DropdownSelect
                        options={APP_CATEGORIES.map((a) => a.label)}
                        value={appCat}
                        onChange={setAppCat}
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                        Platforms
                      </label>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <CheckboxRow
                          checked={appPlatforms.android}
                          onChange={(v) =>
                            setAppPlatforms((p) => ({ ...p, android: v }))
                          }
                          label="Android (₹18,000)"
                        />
                        <CheckboxRow
                          checked={appPlatforms.ios}
                          onChange={(v) =>
                            setAppPlatforms((p) => ({ ...p, ios: v }))
                          }
                          label="iOS (₹20,000)"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                        Complexity
                      </label>
                      <div className="flex flex-col gap-2.5">
                        <CheckboxRow
                          checked={appApi}
                          onChange={setAppApi}
                          label="Custom Backend API (₹5,000)"
                        />
                        <CheckboxRow
                          checked={appStore}
                          onChange={setAppStore}
                          label="Store Submission Assistance (₹2,000)"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* 5. LAYOUT LAYER FOR BULK EMAIL */}
                {activeTab === "bulkemail" && (
                  <>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Bulk Email Requirements
                    </h3>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                        Monthly Volume Estimates
                      </label>
                      <DropdownSelect
                        options={EMAIL_VOLUMES.map((v) => v.label)}
                        value={emailVol}
                        onChange={setEmailVol}
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                        Deliverability Power-ups
                      </label>
                      <div className="flex flex-col gap-2.5">
                        <CheckboxRow
                          checked={emailIp}
                          onChange={setEmailIp}
                          label="Dedicated IP Address (₹3,500/mo) - Highly Recommended"
                        />
                        <CheckboxRow
                          checked={emailTemplate}
                          onChange={setEmailTemplate}
                          label="Custom HTML Template Design (₹1,000 one-time)"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* 6. LAYOUT LAYER FOR BIZ EMAIL */}
                {activeTab === "bizemail" && (
                  <>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Business Email Setup
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                          Number of Users
                        </label>
                        <input
                          type="number"
                          min="1"
                          value={bizUsers}
                          onChange={(e) =>
                            setBizUsers(
                              Math.max(1, parseInt(e.target.value) || 1),
                            )
                          }
                          className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 text-sm focus:border-[#BFCA16] outline-none font-bold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                          Plan Tier
                        </label>
                        <DropdownSelect
                          options={BIZ_TIERS.map((t) => t.label)}
                          value={bizTier}
                          onChange={setBizTier}
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <CheckboxRow
                        checked={bizMigration}
                        onChange={setBizMigration}
                        label="Migration from Old Provider (₹500 flat)"
                      />
                    </div>
                  </>
                )}

                {/* 7. LAYOUT LAYER FOR SOCIAL MEDIA */}
                {activeTab === "social" && (
                  <>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Social Media Retainer
                    </h3>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                        Management Package
                      </label>
                      <DropdownSelect
                        options={SMM_PACKAGES.map((p) => p.label)}
                        value={smmPkg}
                        onChange={setSmmPkg}
                        placeholder="Select Package"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                        Ad Management (Optional)
                      </label>
                      <DropdownSelect
                        options={ADS_MANAGEMENT.map((a) => a.label)}
                        value={smmAds}
                        onChange={setSmmAds}
                      />
                    </div>
                  </>
                )}

                {/* 8. LAYOUT LAYER FOR CRM / ERP */}
                {activeTab === "crm" && (
                  <>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Custom ERP/CRM Builder
                    </h3>

                    <div className="space-y-3">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                        Core Modules Required
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <CheckboxRow
                          checked={crmModules.hr}
                          onChange={(v) =>
                            setCrmModules((m) => ({ ...m, hr: v }))
                          }
                          label="HR & Payroll (₹5,000)"
                        />
                        <CheckboxRow
                          checked={crmModules.stock}
                          onChange={(v) =>
                            setCrmModules((m) => ({ ...m, stock: v }))
                          }
                          label="Inventory & Stock (₹8,000)"
                        />
                        <CheckboxRow
                          checked={crmModules.sales}
                          onChange={(v) =>
                            setCrmModules((m) => ({ ...m, sales: v }))
                          }
                          label="Sales CRM (₹5,000)"
                        />
                        <CheckboxRow
                          checked={crmModules.billing}
                          onChange={(v) =>
                            setCrmModules((m) => ({ ...m, billing: v }))
                          }
                          label="Billing & Accounts (₹6,000)"
                        />
                      </div>
                      <p className="text-[11px] font-semibold text-zinc-500 block pl-1">
                        Base System Cost: ₹15,000 is automatically added.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                        Number of Staff Users
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={crmUsers}
                        onChange={(e) =>
                          setCrmUsers(
                            Math.max(0, parseInt(e.target.value) || 0),
                          )
                        }
                        className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 text-sm focus:border-[#BFCA16] outline-none font-bold"
                      />
                      <span className="text-[11px] font-semibold text-zinc-500 block pl-1">
                        ₹500 per user license (Annual)
                      </span>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: REAL-TIME CALCULATION SUMMARY ESTIMATION PANEL */}
          <div className="lg:col-span-4 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-125">
            <div className="space-y-6 w-full text-left">
              <div className="space-y-1.5 border-b border-zinc-800 pb-4">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  Estimation Summary
                </h3>
                <span className="inline-block px-2.5 py-0.5 bg-zinc-800 rounded-md text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                  {calculationSummary.badge}
                </span>
              </div>

              {/* Dynamic Line Items Breakdowns */}
              <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                {calculationSummary.breakdown.length > 0 ? (
                  calculationSummary.breakdown.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-zinc-400 font-medium">
                        {item.label}
                      </span>
                      <span className="font-bold text-white whitespace-nowrap">
                        ₹{item.cost.toLocaleString("en-IN")}
                        {item.suffix}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-zinc-400 font-light italic py-4">
                    Select system options to build live estimation summary
                    breakdowns.
                  </p>
                )}
              </div>
            </div>

            {/* Total Aggregate Sum & Process Actions Row */}
            <div className="space-y-6 pt-6 border-t border-zinc-800 w-full text-left">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col items-center justify-center text-center gap-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  Total Estimate
                </span>
                <span className="text-3xl md:text-4xl font-bold text-white tracking-tight transition-all duration-300">
                  ₹{calculationSummary.total.toLocaleString("en-IN")}
                </span>

                {calculationSummary.total > 0 && (
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#BFCA16] mt-2 bg-[#BFCA16]/5 px-2.5 py-0.5 rounded-full">
                    <Clock
                      className="w-3 h-3 animate-spin"
                      style={{ animationDuration: "3s" }}
                    />
                    <span>Est. Time: {calculationSummary.time}</span>
                  </div>
                )}
              </div>

              <button
                disabled={calculationSummary.total === 0}
                className="w-full group inline-flex items-center justify-center gap-2 bg-white disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-zinc-950 font-bold text-sm tracking-wide py-4 rounded-full transition-all duration-300 hover:bg-[#BFCA16] hover:text-zinc-950 shadow-sm active:scale-98"
              >
                <span>Next Step</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// INTERACTIVE HELPER SUB-COMPONENTS

// A. Clean Custom Custom Dropdown Selection
function DropdownSelect({
  options,
  value,
  onChange,
  placeholder = "Select Option",
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function clickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      )
        setOpen(false);
    }
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full bg-zinc-900 border rounded-xl px-4 py-3.5 text-sm text-white font-semibold flex items-center justify-between shadow-xs transition-colors ${
          open ? "border-[#BFCA16]" : "border-zinc-800"
        }`}
      >
        <span className={value ? "text-white" : "text-zinc-500"}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute top-full left-0 right-0 mt-1.5 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl overflow-hidden z-30 max-h-60 overflow-y-auto"
          >
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${value === opt ? "bg-[#BFCA16]/5 text-[#BFCA16] font-bold" : "text-zinc-300 hover:bg-zinc-850"}`}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// B. Premium Custom Form Checkbox Row
function CheckboxRow({
  checked,
  onChange,
  label,
  disabled = false,
}: {
  checked: boolean;
  onChange: (c: boolean) => void;
  label: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`flex items-center gap-3 py-1 group/check text-left transition-opacity ${disabled ? "opacity-75 cursor-not-allowed" : ""}`}
    >
      <div
        className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200 ${
          checked
            ? "bg-[#BFCA16] border-[#BFCA16] text-white"
            : "border-zinc-800 bg-zinc-900 group-hover/check:border-[#BFCA16]"
        }`}
      >
        {checked && <Check className="w-3.5 h-3.5 stroke-3" />}
      </div>
      <span
        className={`text-sm tracking-tight transition-colors ${checked ? "font-bold text-white" : "text-zinc-400 group-hover/check:text-white"}`}
      >
        {label}
      </span>
    </button>
  );
}

// C. Premium Custom Form Radio Row
function RadioRow({
  checked,
  onClick,
  label,
}: {
  checked: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-3 py-1 group/radio text-left"
    >
      <div
        className={`w-5 h-5 rounded-full border flex items-center justify-center bg-zinc-900 transition-all duration-200 ${
          checked
            ? "border-[#BFCA16]"
            : "border-zinc-800 bg-zinc-900 group-hover/radio:border-[#BFCA16]"
        }`}
      >
        {checked && <div className="w-2.5 h-2.5 rounded-full bg-[#BFCA16]" />}
      </div>
      <span
        className={`text-sm tracking-tight transition-colors ${checked ? "font-bold text-white" : "text-zinc-400 group-hover/radio:text-white"}`}
      >
        {label}
      </span>
    </button>
  );
}
