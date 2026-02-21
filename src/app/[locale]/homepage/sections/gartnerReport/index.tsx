import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import GartnerReportImg from "../../../../../assets/homepage/gartnerReport/gartnerReport.png";
import { Button } from "../../../../../components/ui/Button";

export function GartnerReport() {
  const translation = useTranslations("gartnerReport");
  const locale = useLocale();
  const isBR = locale === "pt";

  const checkItems = translation.raw("checkItems") as string[];

  return (
    <section
      className='bg-deep-green py-16'
      style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <div className='container mx-auto w-full max-md:max-w-full px-12'>
        <div className='w-full grid grid-cols-1 md:grid-cols-12 md:gap-y-8 gap-x-3 md:gap-x-12 items-start gap-10'>

          <div className='col-span-12 md:col-span-9 flex flex-col gap-4 h-full justify-center text-segura-white'>
            <h2 className='font-display text-4xl font-semibold text-segura-white'>
              {translation("title")}
            </h2>
            <p className='text-xl font-normal text-segura-white'>
              <span className={`font-display text-2xl ${isBR ? 'text-segura-white' : 'text-go-green'}`}>
                <em>{translation("subtitle")}</em>
              </span>
              <br /><br />
              {translation("description")}
            </p>

            <div className='flex flex-col gap-2'>
              {checkItems.map((item) => (
                <div key={item} className='flex gap-2 items-center'>
                  <div className='flex items-center mr-2 shrink-0'>
                    <svg
                      width='30'
                      height='30'
                      viewBox='0 0 30 30'
                      fill='none'
                      className='shrink-0'>
                      <path
                        d='M5 15L12 22L25 8'
                        stroke='#00d1b5'
                        strokeWidth='2.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <p className='text-segura-white'>{item}</p>
                </div>
              ))}
            </div>

            <div className='flex flex-row flex-wrap gap-4 mt-3'>
              <Button
                href={isBR ? '/pt-br/empresa/relatorio-gartner-magic-quadrant-pam-2025' : '/company/gartner-pam-magic-quadrant-2025-report'}
                variant={"secondary"}>
                {translation("cta")}
              </Button>
            </div>
          </div>

          <div className='col-span-12 md:col-span-3'>
            <div className='flex justify-start md:justify-center'>
              <Image
                src={GartnerReportImg}
                alt={translation("imageAlt")}
                className='block max-w-full h-auto object-contain w-full rounded-lg'
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}