import Link from "next/link";
import { useTranslations } from "next-intl";

export function TopBanner() {
  const t = useTranslations("topBanner");

  return (
    <section className="bg-deep-green text-segura-white py-3 text-center min-h-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-2 px-4">
        <p className="font-display text-base! sm:text-sm font-semibold">
          {t("message")}{" "}
          <Link
            href={t("link")}
          >
            {t("cta")} ›
          </Link>
        </p>
      </div>
    </section>
  );
}