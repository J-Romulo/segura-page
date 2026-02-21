import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import GartnerReportImg from '../../../../../assets/homepage/gartnerReport/gartnerReport.png';
import { Button } from '../../../../../components/ui/Button';
import { CircleCheck } from 'lucide-react';

export function GartnerReport() {
  const translation = useTranslations('gartnerReport');
  const locale = useLocale();
  const isBR = locale === 'pt';

  const checkItems = translation.raw('checkItems') as string[];

  return (
    <section
      className="bg-deep-green py-16"
      style={{ fontFamily: 'Inter, Arial, sans-serif' }}
    >
      <div className="container mx-auto w-full max-w-[1320px] px-17 max-md:max-w-full">
        <div className="grid w-full grid-cols-1 items-start gap-10 gap-x-3 md:grid-cols-12 md:gap-x-12 md:gap-y-8">
          <div className="text-segura-white col-span-12 flex h-full flex-col justify-center gap-4 md:col-span-9">
            <h2 className="font-display text-segura-white text-[32px]/9 font-semibold lg:text-4xl">
              {translation('title')}
            </h2>
            <p className="text-segura-white text-[20px] font-normal lg:text-xl">
              <span
                className={`font-display lg:text-2xl ${isBR ? 'text-segura-white' : 'text-go-green'}`}
              >
                <em>{translation('subtitle')}</em>
              </span>
              <br />
              <br />
              {translation('description')}
            </p>

            <div className="flex flex-col gap-1">
              {checkItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="mr-2 flex shrink-0 items-center">
                    <CircleCheck
                      size={33}
                      strokeWidth={1.6}
                      className="text-mint-green"
                    />
                  </div>
                  <p className="text-segura-white">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 flex flex-row flex-wrap gap-4">
              <Button
                href={
                  isBR
                    ? '/pt-br/empresa/relatorio-gartner-magic-quadrant-pam-2025'
                    : '/company/gartner-pam-magic-quadrant-2025-report'
                }
                variant={'secondary'}
              >
                {translation('cta')}
              </Button>
            </div>
          </div>

          <div className="order-first col-span-12 md:order-none md:col-span-3">
            <div className="flex justify-start md:justify-center">
              <Image
                src={GartnerReportImg}
                alt={translation('imageAlt')}
                className="block h-auto w-full max-w-full rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
