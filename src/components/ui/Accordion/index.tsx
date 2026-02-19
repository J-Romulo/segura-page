"use client";

import { useState } from "react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b-2 pb-8 border-segura-white">
      <div
        className="flex gap-2 cursor-pointer items-start "
        onClick={() => setOpen((o) => !o)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-segura-white shrink-0"
        >
          <path d="M0 0L16 12.5L0 25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h4 className="font-display text-xl font-normal">{title}</h4>
      </div>

      {open && (
        <div
          className="pl-6 pt-4 text-justify"
          onClick={() => setOpen(false)}
        >
          {children}
        </div>
      )}
    </div>
  );
}