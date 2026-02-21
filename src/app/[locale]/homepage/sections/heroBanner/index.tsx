import Image from 'next/image';
import { useTranslations } from 'next-intl';
import HeroBg from '../../../../../assets/homepage/heroBanner/background.jpg';
import RiverwoodLogo from '../../../../../assets/homepage/heroBanner/riverwood_capital.png';
import { Button } from '../../../../../components/ui/Button';

export function HeroBanner() {
  const translation = useTranslations('heroBanner');
  const stats = translation.raw('stats') as string[];

  return (
    <section className="relative mt-40 py-20 pt-14 md:mt-0 md:py-26 md:pt-64">
      <div className="bg-segura-black absolute inset-0 z-10 opacity-75" />

      <div className="absolute inset-0 z-0 overflow-hidden bg-center">
        <Image
          src={HeroBg}
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto flex max-w-[1320px] flex-col justify-between gap-10 px-21 lg:flex-row lg:gap-0">
        <div className="flex w-full flex-col gap-4 lg:w-[48%] lg:gap-6">
          <h1 className="text-segura-white text-4xl/13 font-semibold lg:text-5xl/13">
            {translation.rich('title', {
              normal: (chunks) => <span className="font-normal">{chunks}</span>,
              em: (chunks) => <em>{chunks}</em>,
            })}
          </h1>
          <p className="text-segura-white font-sans text-base lg:w-[92%] lg:text-lg">
            {translation.rich('description', {
              highlight: (chunks) => (
                <span className="text-go-green font-semibold">{chunks}</span>
              ),
            })}
          </p>
          <div>
            <Image
              src={RiverwoodLogo}
              alt={translation('riverwoodAlt')}
              className="w-25 lg:w-48"
            />
          </div>
          <div className="mt-2 flex flex-col gap-4 md:flex-row">
            <Button
              href="/post/riverwood-capital-investment"
              variant="secondary"
            >
              {translation('cta')}
            </Button>
          </div>
        </div>

        <div className="text-go-green flex h-full flex-col self-start font-sans lg:pl-24">
          {stats.map((stat) => (
            <p
              key={stat}
              className="border-go-green border-l-2 pl-5 text-base font-normal lg:text-lg"
            >
              {stat}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
