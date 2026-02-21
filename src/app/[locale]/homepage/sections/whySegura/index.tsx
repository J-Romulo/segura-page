import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Dashboard from '../../../../../assets/homepage/whySegura/dashboard.webp';
import { Accordion } from '../../../../../components/ui/Accordion';
import { Button } from '../../../../../components/ui/Button';

export function WhySegura() {
  const translation = useTranslations('whySegura');
  const items = translation.raw('items') as {
    question: string;
    answer: string;
  }[];

  return (
    <section className="bg-deep-green text-segura-white py-16">
      <div className="container mx-auto flex w-full flex-col justify-center gap-8 px-17 max-md:max-w-full max-w-[1320px]">
        <div className="flex flex-col items-center gap-3">
          <h2 className="font-display text-[32px] lg:text-4xl font-semibold">
            {translation('title')}
          </h2>
        </div>

        <div className="flex w-full flex-col items-center gap-14 lg:flex-row">
          <div className="flex-1 place-items-center rounded-xl">
            <Image
              src={Dashboard}
              alt={translation('imageAlt')}
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>

          <div className="flex w-full flex-1 flex-col gap-8 font-sans">
            {items.map((item, index) => (
              <Accordion key={index} title={item.question}>
                <p className="text-base font-light">{item.answer}</p>
              </Accordion>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <Button href="/demo">{translation('cta')}</Button>
          <Button href="/products" variant="transparent-green">
            {translation('ctaSecondary')}
          </Button>
        </div>
      </div>
    </section>
  );
}
