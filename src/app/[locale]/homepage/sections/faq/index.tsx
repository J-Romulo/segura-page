import { useTranslations, useLocale } from 'next-intl';
import { Accordion } from '../../../../../components/ui/Accordion';
import { PT_FAQS } from './faq.pt';
import { EN_FAQS } from './faq.en';

export function FAQ() {
  const translation = useTranslations('faq');
  const locale = useLocale();
  const FAQS = locale === 'pt-br' ? PT_FAQS : EN_FAQS;

  return (
    <section className="bg-deep-green text-segura-white py-16">
      <div className="container mx-auto flex w-full flex-col justify-center gap-8 px-17 max-md:max-w-full max-w-[1320px]">
        <div className="flex w-full flex-col items-center justify-center gap-10">
          <div className="mb-8 flex w-full flex-col items-center gap-3">
            <h2 className="font-display text-center text-[32px]/9 lg:text-4xl font-semibold">
              {translation('title')}
            </h2>
          </div>

          <div className="flex w-full flex-1 flex-col gap-8 font-sans">
            {FAQS.map((faq, index) => (
              <Accordion
                key={index}
                title={faq.question}
                defaultOpen={index === 0}
              >
                {faq.answer}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
