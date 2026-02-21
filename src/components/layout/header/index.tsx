"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Menu as MenuIcon, X } from "lucide-react";
import SeguraLogo from "../../../assets/segura_logo.svg";
import { LangSwitcher } from "../../ui/LangSwitcher";
import { Menu } from "./menu";
import { Banner } from "./banner";
import { NavItem } from "./navItem";
import { Button } from "../../ui/Button";

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
  const translation = useTranslations("header");

  return (
    <nav className='fixed w-full z-50 top-0 shadow-2xl'>
      <Banner />
      <Menu />

      <section className='py-2 w-full bg-white shadow-xl'>
        <div className='flex justify-between items-center px-42'>
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

          <div className='flex flex-row gap-4 lg:hidden'>
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label='Toggle menu'
              className='block z-50'>
              {mobileMenuOpen ? (
                <X size={22} strokeWidth={1.5} />
              ) : (
                <MenuIcon size={22} strokeWidth={1.5} />
              )}
            </button>
            <div className='z-40'>
              <LangSwitcher />
            </div>
          </div>

          <nav
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
              font-sans
              text-[14px]
            `}>
            {NAV_ITEMS.map((key) => (
              <NavItem key={key} label={translation(`nav.${key}`)}>
                <div className='px-24 py-8'>
                  <p className='text-deep-green/40 text-sm italic'>
                    — {translation(key)} dropdown coming soon —
                  </p>
                </div>
              </NavItem>
            ))}

            <Button href="/demo" variant='primary'>{translation("demo")} ›</Button>

            <div className='hidden lg:block z-40 ml-2'>
              <LangSwitcher />
            </div>
          </nav>
        </div>
      </section>
    </nav>
  );
}