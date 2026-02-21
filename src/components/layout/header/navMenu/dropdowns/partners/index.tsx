import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '../../../../../ui/Button';

export function PartnersDropdown() {
  const translation = useTranslations('header.dropdowns.partners');

  return (
    <div className="mx-auto max-w-[1320px] px-20 py-4 lg:py-12">
      <div className="flex flex-col items-start justify-start gap-6 lg:flex-row">
        <div className="flex w-full flex-col items-start justify-start gap-5 lg:w-1/3">
          <p className="font-display text-deep-green border-b-segura-white mb-1 w-full border-b-2 pb-2 font-medium">
            {translation('affinity.title')}
          </p>
          <ul className="w-full">
            {[
              {
                href: '/partners/about-the-program',
                label: translation('affinity.about'),
              },
              {
                href: '/partners/become-a-partner',
                label: translation('affinity.become'),
              },
              {
                href: '/segura-pam-azure-marketplace',
                label: translation('affinity.azure'),
              },
              {
                href: 'https://www.linkedin.com/groups/9885349/',
                label: translation('affinity.linkedin'),
              },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <li className="text-deep-green hover:bg-mint-green/10 hover:text-mid-green flex px-3 py-2 font-medium hover:cursor-pointer hover:rounded-lg">
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex w-full flex-col items-start justify-start gap-5 lg:w-1/3">
          <p className="font-display text-deep-green border-b-segura-white mb-2 w-full border-b-2 pb-2 font-medium">
            {translation('seePartners.title')}
          </p>
          <p className="text-deep-green">{translation('seePartners.desc')}</p>
          <Button variant="transparent-dark" href="/partners">
            {translation('seePartners.cta')}
          </Button>
        </div>
      </div>
    </div>
  );
}
