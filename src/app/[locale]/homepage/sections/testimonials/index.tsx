import Image from "next/image";
import { useTranslations } from "next-intl";
import TestimonialBg from "../../../../../assets/homepage/testimonials/background.webp";
import Stars from "../../../../../assets/homepage/testimonials/stars.svg";
import { Button } from "../../../../../components/ui/Button";

export function Testimonials() {
  const translation = useTranslations("testimonials");
  const stats = translation.raw("stats") as { number: string; description: string }[];

  return (
    <section
      className='overflow-hidden bg-cover relative'>
      <div className='absolute inset-0 z-0'>
        <Image
          src={TestimonialBg}
          alt=''
          fill
          className='object-cover object-top'
          priority
        />
      </div>

      <div className='relative flex flex-col bg-gradient-to-r from-segura-black to-transparent'>
        <div className='container mx-auto relative py-16 flex flex-col justify-center items-start w-full max-md:max-w-full px-12'>
          <div className='flex flex-col max-w-full gap-10 w-full md:max-w-xl'>
            <Image
              src={Stars}
              alt='Stars'
              width={50}
              height={60}
              className='object-contain w-1/3'
            />

            <article className='text-lg font-light leading-7 text-segura-white break-words w-full'>
              <blockquote className='flex flex-col gap-2'>
                <p className='font-display text-lg md:text-xl font-semibold text-segura-white'>
                  {translation("quoteTitle")}
                </p>
                <p className='font-sans text-base font-normal text-segura-white'>
                  {translation("quoteContent")}
                </p>
                <div className='font-sans font-medium text-sm text-segura-white'>
                  {translation("quoteAuthor")}
                </div>
              </blockquote>
            </article>

            <div className='flex gap-5 justify-between flex-col md:flex-row'>
              {stats.map(({ number, description }) => (
                <div
                  key={number}
                  className='border-l-2 border-solid border-mint-green font-sans'>
                  <div className='flex flex-col pl-4'>
                    <p className='self-start text-lg md:text-1xl lg:text-2xl font-bold leading-none text-segura-white'>
                      {number}
                    </p>
                    <p
                      className='text-base leading-7 text-segura-white font-normal'
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Button href='/about' variant='transparent-white'>
              {translation("cta")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}