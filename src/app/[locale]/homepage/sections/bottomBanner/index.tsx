import Link from "next/link";
import { useTranslations } from "next-intl";

export function BottomBanner() {
  const translation = useTranslations("bottomBanner");

  return (
    <section className="bg-mid-green py-4">
      <div className="container mx-auto w-full max-md:max-w-full justify-center px-5 lg:px-24">
        <div className="flex flex-wrap gap-5 font-normal text-center justify-center items-center">
          <p className="font-display text-lg text-segura-white">
            {translation("message")}
          </p>
          <Link
            href={translation("link")}
            className="font-display text-mint-green font-bold underline whitespace-nowrap"
          >
            {translation("cta")} ›
          </Link>
        </div>
      </div>
    </section>
  );
}