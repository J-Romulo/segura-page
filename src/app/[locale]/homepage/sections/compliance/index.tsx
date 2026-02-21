import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';
import ComplianceBanner from '../../../../../assets/homepage/compliance/complianceBanner.png';
import { Button } from '../../../../../components/ui/Button';
import {
  Lock,
  DollarSign,
  Activity,
  Shield,
  ChartNoAxesColumn,
} from 'lucide-react';

const ICONS = [
  <Lock key="lock" size={20} />,
  <DollarSign key="dollar" size={20} />,
  <Activity key="activity" size={20} />,
  <Shield key="shield" size={20} />,
  <ChartNoAxesColumn key="chart" size={20} />,
];

export function Compliance() {
  const translation = useTranslations('compliance');
  const items = translation.raw('items') as { label: string; href: string }[];

  return (
    <section
      className="bg-deep-green py-16"
      style={{ fontFamily: 'Inter, Arial, sans-serif' }}
    >
      <div className="container mx-auto w-full px-12 max-md:max-w-full">
        <div className="grid w-full grid-cols-1 items-start gap-10 gap-x-3 md:grid-cols-12 md:gap-x-12 md:gap-y-8">
          <div className="text-segura-white col-span-12 flex h-full flex-col justify-center gap-4 md:col-span-6">
            <h2 className="font-display text-segura-white text-4xl font-semibold">
              {translation('title')}
            </h2>
            <p className="text-segura-white text-xl">
              {translation.rich('description', {
                b: (chunks) => <b>{chunks}</b>,
              })}
              <br />
              <br />
            </p>
            <p className="font-display text-segura-white text-xl">
              <em>{translation('subtitle')}</em>
            </p>
            <div className="mt-3 flex flex-row flex-wrap gap-4">
              <Button href="/demo">{translation('cta')}</Button>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="flex justify-start md:justify-center">
              <Image
                src={ComplianceBanner}
                alt={translation('imageAlt')}
                className="block h-auto w-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-10">
          <p className="text-segura-white">{translation('auditReady')}</p>
          <div className="flex w-full flex-col gap-8 md:flex-row">
            {items.map(({ label, href }, index) => (
              <Button
                key={label}
                href={href}
                variant="transparent-white"
                className="flex w-full flex-1 items-center justify-center gap-2"
              >
                {ICONS[index]}
                {label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
