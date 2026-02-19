"use client";

import { useState } from "react";

interface NavItemProps {
  label: string;
  children?: React.ReactNode;
}

export function NavItem({ label, children }: NavItemProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="group relative my-2 lg:my-0">
      {/* Trigger */}
      <button
        className="flex py-2 w-full justify-between lg:justify-center items-center px-[14%] lg:p-3 text-deep-green font-normal hover:bg-mint-green/10 hover:rounded-lg z-40 gap-1"
        onClick={() => setMobileOpen((o) => !o)}
      >
        <span>{label}</span>
        <svg
          width="10" height="10" viewBox="0 0 12 8" fill="none"
          className={`transition-transform duration-300 lg:group-hover:rotate-180 ${mobileOpen ? "rotate-180" : ""}`}
        >
          <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Desktop dropdown */}
      {children && (
        <div className="hidden lg:group-hover:block fixed left-0 top-[9.1rem] w-screen bg-segura-white shadow-xl z-50">
          {children}
        </div>
      )}

      {/* Mobile dropdown */}
      {children && (
        <div className={`${mobileOpen ? "block" : "hidden"} lg:hidden w-full`}>
          {children}
        </div>
      )}
    </div>
  );
}