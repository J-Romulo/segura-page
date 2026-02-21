'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Menu as MenuIcon, X } from 'lucide-react';
import SeguraLogo from '../../../assets/segura_logo.svg';
import { LangSwitcher } from '../../ui/LangSwitcher';
import { Menu } from './menu';
import { Banner } from './banner';
import { NavItem } from './navItem';
import { Button } from '../../ui/Button';

const NAV_ITEMS = [
  'platform',
  'solutions',
  'services',
  'partners',
  'company',
  'resources',
] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const translation = useTranslations('header');

  return (
    <nav className="fixed top-0 z-50 w-full shadow-2xl">
      <Banner />
      <Menu />

      <section className="w-full bg-white py-2 shadow-xl">
        <div className="flex items-center justify-between px-42">
          <div className="z-50">
            <Link href="/">
              <Image
                src={SeguraLogo}
                alt="Segura logo"
                width={190}
                height={38}
                priority
              />
            </Link>
          </div>

          <div className="flex flex-row gap-4 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="z-50 block"
            >
              {mobileMenuOpen ? (
                <X size={22} strokeWidth={1.5} />
              ) : (
                <MenuIcon size={22} strokeWidth={1.5} />
              )}
            </button>
            <div className="z-40">
              <LangSwitcher />
            </div>
          </div>

          <nav
            className={` ${mobileMenuOpen ? 'flex' : 'hidden'} absolute top-full left-0 z-40 max-h-[80vh] w-full flex-col items-start gap-6 overflow-auto bg-white font-sans text-[14px] shadow-lg lg:static lg:flex lg:max-h-none lg:w-auto lg:flex-row lg:items-center lg:gap-0.5 lg:overflow-visible lg:bg-transparent lg:shadow-none`}
          >
            {NAV_ITEMS.map((key) => (
              <NavItem key={key} label={translation(`nav.${key}`)}>
                <div className="px-24 py-8">
                  <p className="text-deep-green/40 text-sm italic">
                    — {translation(key)} dropdown coming soon —
                  </p>
                </div>
              </NavItem>
            ))}

            <Button href="/demo" variant="primary">
              {translation('demo')} ›
            </Button>

            <div className="z-40 ml-2 hidden lg:block">
              <LangSwitcher />
            </div>
          </nav>
        </div>
      </section>
    </nav>
  );
}
