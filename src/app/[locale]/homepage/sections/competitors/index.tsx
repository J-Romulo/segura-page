import Link from 'next/link';

const COMPETITORS = [
  { label: 'CyberArk', href: '/company/segura-vs-cyberark' },
  { label: 'BeyondTrust', href: '/company/segura-vs-beyondtrust' },
  { label: 'Delinea', href: '/company/segura-vs-delinea' },
  { label: 'Arcon', href: '/company/segura-vs-arcon' },
];

export function Competitors() {
  return (
    <section className="bg-mint-green pb-16">
      <div className="container mx-auto flex w-full flex-wrap justify-between gap-4 px-17 max-md:max-w-full md:flex-row max-w-[1320px]">
        {COMPETITORS.map(({ label, href }) => (
          <div
            key={label}
            className="border-deep-green text-deep-green border-l-2 font-normal"
          >
            <Link href={href} className="font-display text-deep-green pl-4">
              <span className="font-semibold">Segura®</span> vs. {label} »
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
