import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '../../../../../ui/Button';

export function PlatformDropdown() {
  const translation = useTranslations('header.dropdowns.platform');

  const columns = [
    [
      { href: '/products/privileged-access-management', title: translation('col1.item1.title'), desc: translation('col1.item1.desc') },
      { href: '/products/endpoint-privilege-manager', title: translation('col1.item2.title'), desc: translation('col1.item2.desc') },
      { href: '/products/cloud-infrastructure-entitlements-management', title: translation('col1.item3.title'), desc: translation('col1.item3.desc') },
      { href: '/products/devops-secret-manager', title: translation('col1.item4.title'), desc: translation('col1.item4.desc') },
    ],
    [
      { href: '/products/certificate-manager', title: translation('col2.item1.title'), desc: translation('col2.item1.desc') },
      { href: '/products/domum-remote-access', title: translation('col2.item2.title'), desc: translation('col2.item2.desc') },
      { href: '/products/mysafe', title: translation('col2.item3.title'), desc: translation('col2.item3.desc') },
      { href: '/products/privileged-infrastructure', title: translation('col2.item4.title'), desc: translation('col2.item4.desc') },
    ],
  ];

  return (
    <div className="mx-auto max-w-[1320px] px-20 py-4 lg:py-8">
      <div className="flex flex-col gap-1">

        <ul className="mb-4 flex flex-col justify-between gap-8 lg:flex-row">
          {columns.map((col, i) => (
            <div key={i} className="flex flex-1 flex-col items-start gap-3">
              {col.map((item) => (
                <Link key={item.href} href={item.href}>
                  <li className="border-deep-green hover:bg-mint-green/10 hover:text-mid-green flex flex-col border-l px-3 py-2 font-normal hover:cursor-pointer hover:rounded-lg">
                    <p className="text-deep-green font-display font-medium">{item.title}</p>
                    <p className="text-deep-green mt-4 font-normal">{item.desc}</p>
                  </li>
                </Link>
              ))}
            </div>
          ))}
        </ul>

        <div className="bg-mint-green flex flex-col items-center gap-4 rounded-lg p-8 lg:flex-row">
          <Link href="/products" className="flex flex-1 flex-col gap-2">
            <p className="text-deep-green font-semibold">{translation('cta.title')}</p>
            <p className="text-deep-green">{translation('cta.desc')}</p>
          </Link>
          <Button href="/products" variant="dark" className="whitespace-nowrap">
            {translation('cta.button')}
          </Button>
        </div>

      </div>
    </div>
  );
}