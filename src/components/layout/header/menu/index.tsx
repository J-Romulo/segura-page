import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function Menu() {
  const translation = useTranslations('header.topMenu');

  return (
    <section className="bg-segura-white w-full py-3">
      <div className="w-full flex justify-center">
        <ul className="text-deep-green flex w-full items-center justify-between gap-4 px-20 font-sans text-sm lg:justify-end max-w-[1320px]">
          <li>
            <Link href="/partners/become-a-partner">
              <b>{translation('becomePartner')}</b>
            </Link>
          </li>
          <li>
            <Link href="/contact">{translation('contact')}</Link>
          </li>
          <li>
            <Link href="/services/solution-center">
              {translation('support')}
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              href="https://docs.senhasegura.io/docs/en/senhasegura"
              target="_blank"
              rel="noopener noreferrer"
            >
              {translation('docs')}
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
