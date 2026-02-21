import Image from 'next/image';
import { useTranslations } from 'next-intl';
import TestimonialBg from '../../../../../assets/homepage/testimonials/background.webp';
import Stars from '../../../../../assets/homepage/testimonials/stars.svg';
import { Button } from '../../../../../components/ui/Button';

export function Testimonials() {
  const translation = useTranslations('testimonials');
  const stats = translation.raw('stats') as {
    number: string;
    description: string;
  }[];

  return (
    <section className="relative overflow-hidden bg-cover">
      <div className="absolute inset-0 z-0">
        <Image
          src={TestimonialBg}
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="from-segura-black relative flex flex-col bg-gradient-to-r to-transparent">
        <div className="relative container mx-auto flex w-full max-w-[1320px] flex-col items-start justify-center px-17 py-16 max-md:max-w-full">
          <div className="flex w-full max-w-full flex-col gap-10 md:max-w-xl">
            <Image
              src={Stars}
              alt="Stars"
              width={50}
              height={60}
              className="w-1/3 object-contain"
            />

            <article className="text-segura-white w-full text-lg leading-7 font-light break-words">
              <blockquote className="flex flex-col gap-2">
                <p className="font-display text-segura-white text-lg font-semibold md:text-xl">
                  {translation('quoteTitle')}
                </p>
                <p className="text-segura-white font-sans text-base font-normal">
                  {translation('quoteContent')}
                </p>
                <div className="text-segura-white font-sans text-sm font-medium">
                  {translation('quoteAuthor')}
                </div>
              </blockquote>
            </article>

            <div className="flex flex-col justify-between gap-5 md:flex-row">
              {stats.map(({ number, description }) => (
                <div
                  key={number}
                  className="border-mint-green border-l-2 border-solid font-sans"
                >
                  <div className="flex flex-col pl-4">
                    <p className="md:text-1xl text-segura-white self-start text-lg leading-none font-bold lg:text-2xl">
                      {number}
                    </p>
                    <p
                      className="text-segura-white text-base leading-7 font-normal"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Button href="/about" variant="transparent-white">
              {translation('cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
