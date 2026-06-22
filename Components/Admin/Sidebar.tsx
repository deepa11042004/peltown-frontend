"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Users,
  Briefcase,
  ShieldCheck,
  Calculator,
  Handshake,
  MessageSquare,
  HelpCircle,
  Settings,
  LogOut,
  ChevronDown,
  User,
} from "lucide-react";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({
  isCollapsed,
  setIsCollapsed,
  activeTab,
  setActiveTab,
}: SidebarProps) {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    Carriers: false,
    "Background Verification": false,
  });

  const toggleMenu = (menu: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const menuItems = [
    { id: "home", label: "Home", icon: Home, hasSubmenu: false },
    { id: "users", label: "Users", icon: Users, hasSubmenu: false },
    {
      id: "carriers",
      label: "Carriers",
      icon: Briefcase,
      hasSubmenu: true,
      submenuItems: ["Active Profiles", "Pending Approvals", "Rejected"],
    },
    {
      id: "verification",
      label: "Background Verification",
      icon: ShieldCheck,
      hasSubmenu: true,
      submenuItems: ["Pending Checks", "Completed Checks", "Disputes"],
    },
    {
      id: "calculator",
      label: "Cost Calculator",
      icon: Calculator,
      hasSubmenu: false,
    },
    {
      id: "partners",
      label: "Partner Applications",
      icon: Handshake,
      hasSubmenu: false,
    },
    {
      id: "testimonials",
      label: "Testimonials",
      icon: MessageSquare,
      hasSubmenu: false,
    },
    { id: "faqs", label: "FAQs", icon: HelpCircle, hasSubmenu: false },
  ];

  return (
    <div
      className={`bg-[#f9f9fb] border-r border-[#e4e4e7] h-screen flex flex-col justify-between transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      } text-zinc-950 font-sans z-40 relative`}
    >
      {/* Top Header / Logo Section */}
      <div>
        <div className="flex items-center justify-between px-4 py-5 border-b border-[#e4e4e7] mb-4">
          {!isCollapsed && (
            <div className="flex items-center gap-1.5 pl-1.5">
              <span className="text-2xl font-bold tracking-wider text-zinc-900 select-none flex items-center">
                PELTOWN
              </span>
            </div>
          )}
          {isCollapsed && (
            <div className="mx-auto text-xl font-bold text-zinc-900 select-none">
              P
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-md border border-zinc-200 bg-white hover:bg-zinc-50 shadow-xs cursor-pointer focus:outline-hidden"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4 text-zinc-600" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-zinc-600" />
            )}
          </button>
        </div>

        {/* Menu Navigation */}
        <div className="px-3 overflow-y-auto max-h-[calc(100vh-150px)] no-scrollbar space-y-5">
          {/* Main Menu Section */}
          <div className="space-y-1">
            {!isCollapsed && (
              <h3 className="px-3 text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                Menu
              </h3>
            )}
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              const isMenuExpanded = expandedMenus[item.label];

              return (
                <div key={item.id} className="space-y-1">
                  <button
                    onClick={() => {
                      if (item.hasSubmenu && !isCollapsed) {
                        toggleMenu(item.label);
                      } else {
                        setActiveTab(item.id);
                      }
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      isCollapsed ? "justify-center" : ""
                    } ${
                      isActive
                        ? "bg-[#efeff1] text-black shadow-xs font-bold"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-black cursor-pointer"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4.5 h-4.5" />
                      {!isCollapsed && <span>{item.label}</span>}
                    </div>
                    {!isCollapsed && item.hasSubmenu && (
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-400 transition-transform ${
                          isMenuExpanded ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Submenu */}
                  {!isCollapsed && item.hasSubmenu && isMenuExpanded && (
                    <div className="pl-9 space-y-1">
                      {item.submenuItems?.map((subItem) => (
                        <button
                          key={subItem}
                          onClick={() =>
                            setActiveTab(`${item.id}_${subItem.toLowerCase()}`)
                          }
                          className="w-full text-left py-1.5 text-xs font-semibold text-zinc-500 hover:text-black cursor-pointer block"
                        >
                          {subItem}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Profile / Footer Section */}
      <div className="p-3 border-t border-[#e4e4e7] relative">
        {/* Profile Card / Dropdown Trigger */}
        <button
          onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
          className={`w-full flex items-center justify-between p-2 rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer`}
        >
          {isCollapsed ? (
            <div className="w-9 h-9 rounded-full bg-zinc-200 text-zinc-700 flex items-center justify-center font-bold font-sans overflow-hidden border border-zinc-200">
              <User className="w-5.5 h-5.5 text-zinc-500" />
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2.5 text-left">
                <div className="w-9 h-9 rounded-full bg-zinc-200 text-zinc-700 flex items-center justify-center font-bold overflow-hidden border border-zinc-200">
                  <User className="w-5.5 h-5.5 text-zinc-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-zinc-900 leading-tight">
                    Jenny Wilson
                  </span>
                  <span className="text-[10px] font-medium text-zinc-400">
                    admin@peltown.com
                  </span>
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-zinc-400" />
            </>
          )}
        </button>

        {/* Profile Dropdown Context Menu (Nesting settings and logout) */}
        {profileDropdownOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setProfileDropdownOpen(false)}
            />
            <div
              className={`absolute bg-white border border-[#e4e4e7] rounded-lg shadow-lg py-1.5 z-20 ${
                isCollapsed
                  ? "bottom-3 left-16 w-48"
                  : "bottom-14 left-3 right-3"
              }`}
            >
              <button
                onClick={() => {
                  setActiveTab("profile");
                  setProfileDropdownOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-xs font-bold hover:bg-zinc-50 text-zinc-800 transition-colors cursor-pointer flex items-center gap-2"
              >
                <User className="w-3.5 h-3.5 text-zinc-500" />
                <span>My Profile</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab("settings");
                  setProfileDropdownOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-xs font-bold hover:bg-zinc-50 text-zinc-800 transition-colors cursor-pointer flex items-center gap-2"
              >
                <Settings className="w-3.5 h-3.5 text-zinc-500" />
                <span>Settings</span>
              </button>
              <div className="h-px bg-zinc-100 my-1" />
              <button
                onClick={() => {
                  setProfileDropdownOpen(false);
                  alert("Log out functionality would go here.");
                }}
                className="w-full text-left px-3 py-2 text-xs font-bold hover:bg-zinc-50 text-red-600 hover:text-red-700 transition-colors cursor-pointer flex items-center gap-2"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log out</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
