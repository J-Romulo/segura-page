import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function Banner() {
  const translation = useTranslations('header.topBanner');

  return (
    <section className="bg-deep-green text-segura-white min-h-12 py-3 text-center">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 px-4 md:flex-row">
        <p className="font-display text-base! font-semibold sm:text-sm">
          {translation('message')}{' '}
          <Link href={translation('link')}>{translation('cta')} ›</Link>
        </p>
      </div>
    </section>
  );
}
