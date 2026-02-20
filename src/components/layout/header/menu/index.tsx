import Link from "next/link";
import { useTranslations } from "next-intl";

export function Menu() {
  const translation = useTranslations("header.topMenu");

  return (
    <section className="w-full py-3 bg-segura-white">
      <div className="w-full">
        <ul className="px-40 w-full flex justify-around lg:justify-end items-center gap-1 lg:gap-4 text-sm text-deep-green"
            style={{ fontFamily: "Inter, Arial, sans-serif", fontSize: "14px" }}>
          <li>
            <Link href="/partners/become-a-partner">
              <b>{translation("becomePartner")}</b>
            </Link>
          </li>
          <li>
            <Link href="/contact">{translation("contact")}</Link>
          </li>
          <li>
            <Link href="/services/solution-center">{translation("support")}</Link>
          </li>
          <li className="hidden sm:block">
            <Link href="https://docs.senhasegura.io/docs/en/senhasegura" target="_blank" rel="noopener noreferrer">
              {translation("docs")}
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}