import Link from "next/link";

const COMPETITORS = [
  { label: "CyberArk", href: "/company/segura-vs-cyberark" },
  { label: "BeyondTrust", href: "/company/segura-vs-beyondtrust" },
  { label: "Delinea", href: "/company/segura-vs-delinea" },
  { label: "Arcon", href: "/company/segura-vs-arcon" },
];

export function Competitors() {
  return (
    <section
      className="bg-mint-green pb-16"
      style={{ fontFamily: "Inter, Arial, sans-serif" }}
    >
      <div className="container mx-auto flex flex-wrap gap-4 md:flex-row justify-between w-full max-md:max-w-full px-12">
        {COMPETITORS.map(({ label, href }) => (
          <div key={label} className="border-l-2 border-deep-green font-normal text-deep-green">
            <Link href={href} className="font-display text-deep-green pl-4">
              <span className="font-semibold">Segura®</span> vs. {label} »
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}