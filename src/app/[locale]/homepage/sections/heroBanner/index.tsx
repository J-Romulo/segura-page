import Image from "next/image";
import { useTranslations } from "next-intl";
import HeroBg from "../../../../../assets/homepage/heroBanner/background.jpg";
import RiverwoodLogo from "../../../../../assets/homepage/heroBanner/riverwood_capital.png";
import { Button } from "../../../../../components/ui/Button";

export function HeroBanner() {
  const translation = useTranslations("heroBanner");
  const stats = translation.raw("stats") as string[];

  return (
    <section className='mt-40 pt-14 md:mt-0 md:pt-64 py-20 md:py-26 relative'>
      <div className='absolute inset-0 bg-segura-black opacity-75 z-10' />

      <div className='absolute inset-0 z-0 bg-center overflow-hidden'>
        <Image
          src={HeroBg}
          alt=''
          fill
          className='object-cover object-center'
          priority
        />
      </div>

      <div className='relative container mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 z-10 px-17'>
        <div className='flex flex-col gap-4 lg:gap-8 w-full lg:w-[48%]'>
          <h1 className='text-5xl/13 font-semibold text-segura-white'>
            {translation.rich("title", {
              normal: (chunks) => <span className='font-normal'>{chunks}</span>,
              em: (chunks) => <em>{chunks}</em>,
            })}
          </h1>
          <p className='text-lg text-segura-white lg:w-[92%] font-sans'>
            {translation.rich("description", {
              highlight: (chunks) => (
                <span className='text-go-green font-semibold'>{chunks}</span>
              ),
            })}
          </p>
          <div>
            <Image
              src={RiverwoodLogo}
              alt={translation("riverwoodAlt")}
              className='w-48'
            />
          </div>
          <div className='flex flex-col md:flex-row gap-4 mt-2'>
            <Button
              href='/post/riverwood-capital-investment'
              variant='secondary'>
              {translation("cta")}
            </Button>
          </div>
        </div>

        <div className='flex flex-col self-start h-full lg:pl-24 text-go-green font-sans'>
          {stats.map((stat) => (
            <p
              key={stat}
              className='text-lg font-normal border-l-2 border-go-green pl-5'>
              {stat}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}