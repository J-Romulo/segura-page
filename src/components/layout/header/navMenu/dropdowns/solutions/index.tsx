import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function SolutionsDropdown() {
  const t = useTranslations('header.dropdowns.solutions');

  const columns = [
    {
      title: t('byUseCase.title'),
      items: [
        { href: '/solutions/audit', label: t('byUseCase.audit') },
        {
          href: '/solutions/data-theft-prevention',
          label: t('byUseCase.dataTheft'),
        },
        { href: '/solutions/devops', label: t('byUseCase.devops') },
        {
          href: '/solutions/insider-threat',
          label: t('byUseCase.insiderThreat'),
        },
        {
          href: '/solutions/third-party-access',
          label: t('byUseCase.thirdParty'),
        },
        {
          href: '/solutions/privileged-access-recording',
          label: t('byUseCase.recording'),
        },
        {
          href: '/solutions/privilege-abuse',
          label: t('byUseCase.privilegeAbuse'),
        },
        {
          href: '/solutions/hardcoded-password',
          label: t('byUseCase.hardcoded'),
        },
      ],
    },
    {
      title: '',
      items: [
        {
          href: '/solutions/password-reset',
          label: t('byUseCase2.passwordReset'),
        },
        {
          href: '/solutions/pam-for-cyber-insurance',
          label: t('byUseCase2.cyberInsurance'),
        },
        {
          href: '/solutions/machine-identity',
          label: t('byUseCase2.machineIdentity'),
        },
        {
          href: '/solutions/identity-threat-detection-response-itdr',
          label: t('byUseCase2.itdr'),
        },
      ],
    },
    {
      title: t('byIndustry.title'),
      items: [
        {
          href: '/solutions/energy-and-utilities',
          label: t('byIndustry.energy'),
        },
        { href: '/solutions/financial', label: t('byIndustry.financial') },
        { href: '/solutions/government', label: t('byIndustry.government') },
        { href: '/solutions/health-care', label: t('byIndustry.healthcare') },
        { href: '/solutions/legal', label: t('byIndustry.legal') },
        { href: '/solutions/telecoms', label: t('byIndustry.telecoms') },
        { href: '/solutions/retail', label: t('byIndustry.retail') },
      ],
    },
    {
      title: t('byCertification.title'),
      items: [
        { href: '/solutions/pci', label: 'PCI DSS' },
        { href: '/solutions/sox', label: 'SOX' },
        { href: '/solutions/iso-27001', label: 'ISO 27001' },
        { href: '/solutions/hipaa', label: 'HIPAA' },
        { href: '/solutions/nist', label: 'NIST' },
        { href: '/solutions/gdpr', label: 'GDPR' },
        { href: '/solutions/isa-iec-62443', label: 'ISA 62443 | 4.0' },
        { href: '/solutions/sama', label: 'SAMA' },
        { href: '/solutions/ksa', label: 'KSA | NCA | NTC' },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-[1320px] px-20 py-4 lg:py-8">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
        {columns.map((col, i) => (
          <div
            key={i}
            className="flex flex-1 flex-col items-start justify-start gap-5"
          >
            <ul className="flex w-full flex-1 flex-col items-start justify-start gap-2">
              <p className="font-display text-deep-green border-b-segura-white mb-1 w-full border-b-2 pb-2 font-medium">
                {col.title || <>&nbsp;</>}
              </p>
              {col.items.map((item) => (
                <Link key={item.href} href={item.href} className="w-full">
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
