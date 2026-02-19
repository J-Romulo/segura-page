"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { NavItem } from "./NavItem";
import { LangSwitcher } from "./LangSwitcher";
import { TopBanner } from "./TopBanner";
import { TopMenu } from "./TopMenu";
import SeguraLogo from "../../../../assets/segura_logo.svg";

const NAV_ITEMS = [
  "platform",
  "solutions",
  "services",
  "partners",
  "company",
  "resources",
] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("nav");

  return (
    <nav className='fixed w-full z-50 top-0 shadow-2xl'>
      <TopBanner />
      <TopMenu />

      {/* Main bar */}
      <section className='py-2 w-full bg-white shadow-xl'>
        <div className='flex justify-between items-center px-42'>
          {/* Logo */}
          <div className='z-50'>
            <Link href='/'>
              <Image
                src={SeguraLogo}
                alt='Segura logo'
                width={190}
                height={38}
                priority
              />
            </Link>
          </div>

          {/* Mobile controls */}
          <div className='flex flex-row gap-4 lg:hidden'>
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label='Toggle menu'
              className='block z-50'>
              {mobileMenuOpen ? (
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'>
                  <path d='M1 1L21 21M21 1L1 21' />
                </svg>
              ) : (
                <svg
                  width='22'
                  height='19'
                  viewBox='0 0 22 19'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'>
                  <path d='M1 2h20M1 9.5h20M1 17h20' />
                </svg>
              )}
            </button>
            <div className='z-40'>
              <LangSwitcher />
            </div>
          </div>

          {/* Nav items */}
          <nav
            style={{ fontFamily: "Inter, Arial, sans-serif", fontSize: "14px" }}
            className={`
              ${mobileMenuOpen ? "flex" : "hidden"} lg:flex
              flex-col lg:flex-row items-start lg:items-center
              gap-6 lg:gap-0.5
              absolute lg:static top-full left-0
              w-full lg:w-auto
              bg-white lg:bg-transparent
              z-40 shadow-lg lg:shadow-none
              overflow-auto lg:overflow-visible
              max-h-[80vh] lg:max-h-none
            `}>
            {NAV_ITEMS.map((key) => (
              <NavItem key={key} label={t(key)}>
                <div className='px-24 py-8'>
                  <p className='text-deep-green/40 text-sm italic'>
                    — {t(key)} dropdown coming soon —
                  </p>
                </div>
              </NavItem>
            ))}

            {/* Book a Demo CTA */}
            <Link
              href='/demo'
              className='font-display z-40 mb-4 lg:mb-0 px-4 py-2 bg-cta text-segura-black font-semibold rounded-lg hover:bg-deep-green hover:text-segura-white transition-colors whitespace-nowrap'>
              Book a Demo ›
            </Link>

            {/* Lang desktop */}
            <div className='hidden lg:block z-40 ml-2'>
              <LangSwitcher />
            </div>
          </nav>
        </div>
      </section>
    </nav>
  );
}
