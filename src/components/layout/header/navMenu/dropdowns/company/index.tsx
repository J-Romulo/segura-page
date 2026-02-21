import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function CompanyDropdown() {
  const translation = useTranslations('header.dropdowns.company');

  const columns = [
    {
      title: translation('aboutUs.title'),
      items: [
        { href: '/about', label: translation('aboutUs.meet') },
        { href: '/company/career', label: translation('aboutUs.careers') },
        { href: '/contact', label: translation('aboutUs.contact') },
        { href: '/build-with-us', label: translation('aboutUs.build') },
      ],
    },
    {
      title: translation('whySegura.title'),
      items: [
        { href: '/company/why-senhasegura', label: translation('whySegura.advantage') },
        { href: '/company/pam-pricing', label: translation('whySegura.pricing') },
        { href: '/company/trust-center', label: translation('whySegura.trust') },
        { href: '/company/achievements', label: translation('whySegura.awards') },
        { href: '/company/global-presence-me', label: translation('whySegura.mea') },
        { href: '/company/jiu-jitciso', label: translation('whySegura.jiujitciso') },
      ],
    },
    {
      title: translation('news.title'),
      items: [
        { href: '/company/press', label: translation('news.inTheNews') },
        { href: '/company/press-room', label: translation('news.pressRoom') },
      ],
    },
    {
      title: translation('coe.title'),
      items: [
        { href: '/coe/sao-paulo', label: translation('coe.saoPaulo') },
        { href: '/coe/riyadh', label: translation('coe.riyadh') },
        { href: '/coe/austin', label: translation('coe.austin') },
        { href: '/coe/katowice', label: translation('coe.katowice') },
        { href: '/about', label: translation('coe.kualaLumpur') },
        { href: '/about', label: translation('coe.singapore') },
        { href: '/about', label: translation('coe.manila') },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-[1320px] px-20 py-4 lg:py-12">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
        {columns.map((col) => (
          <div key={col.title} className="flex flex-1 flex-col items-start justify-start gap-5">
            <p className="font-display text-deep-green border-b-segura-white w-full border-b-2 pb-2 mb-1 font-medium">
              {col.title}
            </p>
            <ul className="flex w-full flex-1 flex-col items-start justify-start gap-2">
              {col.items.map((item) => (
                <Link key={item.href + item.label} href={item.href} className="w-full">
                  <li className="text-deep-green hover:bg-mint-green/10 hover:text-mid-green flex w-full justify-between px-3 py-1 font-normal hover:cursor-pointer hover:rounded-lg">
                    {item.label}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}