import Image from "next/image";
import { useTranslations } from "next-intl";
import ComplianceBanner from "../../../../../assets/homepage/compliance/complianceBanner.png";
import { Button } from "../../../../../components/ui/Button";
import {
  Lock,
  DollarSign,
  Activity,
  Shield,
  ChartNoAxesColumn,
} from "lucide-react";

const ICONS = [
  <Lock size={20} />,
  <DollarSign size={20} />,
  <Activity size={20} />,
  <Shield size={20} />,
  <ChartNoAxesColumn size={20} />,
];

export function Compliance() {
  const translation = useTranslations("compliance");
  const items = translation.raw("items") as { label: string; href: string }[];

  return (
    <section
      className='bg-deep-green py-16'
      style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <div className='container mx-auto w-full max-md:max-w-full px-12'>
        <div className='w-full grid grid-cols-1 md:grid-cols-12 md:gap-y-8 gap-x-3 md:gap-x-12 items-start gap-10'>
          <div className='col-span-12 md:col-span-6 flex flex-col gap-4 h-full justify-center text-segura-white'>
            <h2 className='font-display text-4xl font-semibold text-segura-white'>
              {translation("title")}
            </h2>
            <p className='text-xl text-segura-white'>
              {translation.rich("description", {
                b: (chunks) => <b>{chunks}</b>,
              })}
              <br />
              <br />
            </p>
            <p className='font-display text-xl text-segura-white'>
              <em>{translation("subtitle")}</em>
            </p>
            <div className='flex flex-row flex-wrap gap-4 mt-3'>
              <Button href='/demo'>{translation("cta")}</Button>
            </div>
          </div>

          <div className='col-span-12 md:col-span-6'>
            <div className='flex justify-start md:justify-center'>
              <Image
                src={ComplianceBanner}
                alt={translation("imageAlt")}
                className='block max-w-full h-auto object-contain w-full'
              />
            </div>
          </div>
        </div>

        <div className='py-10 flex flex-col gap-4'>
          <p className='text-segura-white'>{translation("auditReady")}</p>
          <div className='flex flex-col md:flex-row w-full gap-8'>
            {items.map(({ label, href }, index) => (
              <Button
                key={label}
                href={href}
                variant='transparent-white'
                className='flex items-center justify-center gap-2 w-full flex-1'>
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