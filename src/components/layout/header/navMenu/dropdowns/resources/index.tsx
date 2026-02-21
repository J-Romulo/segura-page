import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export function ResourcesDropdown() {
  const translation = useTranslations('header.dropdowns.resources');

  const columns = [
    {
      title: translation('productInfo.title'),
      items: [
        { href: 'https://lp.senhasegura.co/EN/RICH-MATERIALS#datasheets', label: translation('productInfo.datasheets'), external: true },
        { href: '/services/product-architecture', label: translation('productInfo.architecture') },
        { href: '/services/integration', label: translation('productInfo.integrations') },
        { href: '/services/security', label: translation('productInfo.security') },
        { href: 'https://docs.senhasegura.io/v4/docs/pt/senhasegura', label: translation('productInfo.documentation'), external: true },
        { href: '/customer-cases', label: translation('productInfo.customerCases') },
      ],
    },
    {
      title: translation('cybersecurity.title'),
      items: [
        { href: '/blog', label: translation('cybersecurity.blog') },
        { href: '/pamaturity', label: translation('cybersecurity.pamaturity') },
        { href: '/resources/ebook-pam-101', label: translation('cybersecurity.pam101') },
        { href: '/resources/ebook-reducing-your-cybersecurity-risk', label: translation('cybersecurity.attackSurface') },
        { href: '/resources/infographic-cloud-security', label: translation('cybersecurity.cloudSecurity') },
        { href: '/resources/infographic-metrics-measure-organization-level-cyber-protection', label: translation('cybersecurity.gartnerMetrics') },
        { href: '/resources/whitepaper-total-cost-of-ownership', label: translation('cybersecurity.pamCosts') },
        { href: '/resources/ebook-identity-security-intelligence', label: translation('cybersecurity.identitySecurity') },
      ],
    },
    {
      title: translation('reports.title'),
      items: [
        { href: 'https://segura.security/company/gartner-pam-magic-quadrant-2025-report', label: translation('reports.gartner2025') },
        { href: 'https://segura.security/resources/report-buyer-experience-report-2024', label: translation('reports.softwareReviews'), external: true },
        { href: 'https://lp.senhasegura.co/en/kuppingercole-leadership-compass-for-pam', label: translation('reports.kuppingerCole'), external: true },
        { href: '/company/gartner-pam-magic-quadrant-2021-report', label: translation('reports.gartner2021') },
        { href: '/company/frost-sullivan-2022-customer-value-award', label: translation('reports.frostSullivan') },
      ],
    },
    {
      title: translation('legal.title'),
      items: [
        { href: '/policies-and-terms/terms-of-service', label: translation('legal.terms') },
        { href: '/policies-and-terms/eula', label: translation('legal.eula') },
        { href: '/privacy-and-cookie-statement', label: translation('legal.privacy') },
        { href: '/policies-and-terms/terms-and-general-conditions', label: translation('legal.conditions') },
        { href: '/company/operations', label: translation('legal.operations') },
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
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-full"
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <li className="text-deep-green hover:bg-mint-green/10 hover:text-mid-green flex w-full justify-between items-center px-3 py-1 font-normal hover:cursor-pointer hover:rounded-lg">
                    {item.label}
                    {item.external && <ArrowUpRight size={13} className="shrink-0"/>}
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