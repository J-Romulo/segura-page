import { useTranslations, useLocale } from "next-intl";
import { Accordion } from "../../../../../components/ui/Accordion";
import { PT_FAQS } from "./faq.pt";
import { EN_FAQS } from "./faq.en";

export function FAQ() {
  const translation = useTranslations("faq");
  const locale = useLocale();
  const FAQS = locale === "pt-br" ? PT_FAQS : EN_FAQS;

  return (
    <section
      className='bg-deep-green text-segura-white py-16'
      style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <div className='container mx-auto flex flex-col gap-8 w-full max-md:max-w-full justify-center px-12'>
        <div className='flex flex-col gap-10 w-full justify-center items-center'>
          <div className='flex flex-col gap-3 w-full items-center mb-8'>
            <h2 className='font-display text-4xl font-semibold text-center'>
              {translation("title")}
            </h2>
          </div>

          <div className='flex flex-col flex-1 w-full gap-8'>
            {FAQS.map((faq, index) => (
              <Accordion
                key={index}
                title={faq.question}
                defaultOpen={index === 0}>
                {faq.answer}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}