'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface NavItemProps {
  label: string;
  children?: React.ReactNode;
}

export function NavItem({ label, children }: NavItemProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="group relative my-2 lg:my-0">
      <button
        className="text-deep-green hover:bg-mint-green/10 z-40 flex w-full items-center justify-between gap-1 px-[14%] py-2 font-normal hover:rounded-lg lg:justify-center lg:p-3"
        onClick={() => setMobileOpen((o) => !o)}
      >
        <span>{label}</span>
        <ChevronDown
          size={14}
          strokeWidth={2.5}
          className={`transition-transform duration-300 lg:group-hover:rotate-180 ${mobileOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {children && (
        <div className="bg-segura-white fixed top-[9.1rem] left-0 z-50 hidden w-screen shadow-xl lg:group-hover:block">
          {children}
        </div>
      )}

      {children && (
        <div className={`${mobileOpen ? 'block' : 'hidden'} w-full lg:hidden`}>
          {children}
        </div>
      )}
    </div>
  );
}
