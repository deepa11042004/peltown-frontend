"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-zinc-50 font-sans">
      {/* Desktop Sidebar */}
      <div className="hidden md:block h-full">
        <Sidebar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* Mobile Menu Trigger Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-white border-b border-zinc-200 flex items-center justify-between px-4 z-30">
        <span className="text-xl font-bold tracking-wider text-black select-none">
          WI<span className="text-zinc-400">N</span>K
        </span>
        <button
          onClick={() => setIsMobileOpen(true)}
          className="p-1.5 rounded-lg border border-zinc-200 hover:bg-zinc-50 cursor-pointer"
        >
          <Menu className="w-5 h-5 text-zinc-700" />
        </button>
      </div>

      {/* Mobile Drawer (Sidebar) */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />
            {/* Slide-in sidebar container */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.35 }}
              className="fixed top-0 bottom-0 left-0 w-64 bg-white z-50 md:hidden shadow-xl"
            >
              {/* Close Button Inside Mobile Sidebar */}
              <button
                onClick={() => setIsMobileOpen(false)}
                className="absolute top-4.5 right-4 p-1 rounded-md border border-zinc-200 bg-white shadow-xs cursor-pointer z-50"
              >
                <X className="w-4 h-4 text-zinc-600" />
              </button>

              <Sidebar
                isCollapsed={false}
                setIsCollapsed={() => {}}
                activeTab={activeTab}
                setActiveTab={(tab) => {
                  setActiveTab(tab);
                  setIsMobileOpen(false); // Close drawer on selection
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Page Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden pt-14 md:pt-0">
        {/* Render children or dynamically show tab views if needed.
            Here we will pass children which is our DashboardContent component */}
        {children}
      </div>
    </div>
  );
}
