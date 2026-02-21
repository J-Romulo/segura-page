import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function BottomBanner() {
  const translation = useTranslations('bottomBanner');

  return (
    <section className="bg-mid-green py-4 lg:py-4 lg:px-0">
      <div className="container mx-auto w-full justify-center px-17 max-md:max-w-full lg:px-24 max-w-[1320px]">
        <div className="flex flex-wrap items-center justify-center gap-5 text-center font-normal">
          <p className="font-display text-segura-white text-[16px] lg:text-lg">
            {translation('message')}
          </p>
          <Link
            href={translation('link')}
            className="font-display text-mint-green font-bold whitespace-nowrap underline"
          >
            {translation('cta')} ›
          </Link>
        </div>
      </div>
    </section>
  );
}
