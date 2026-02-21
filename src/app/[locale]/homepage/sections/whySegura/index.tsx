import Image from "next/image";
import { useTranslations } from "next-intl";
import Dashboard from "../../../../../assets/homepage/whySegura/dashboard.webp";
import { Accordion } from "../../../../../components/ui/Accordion";
import { Button } from "../../../../../components/ui/Button";

export function WhySegura() {
  const translation = useTranslations("whySegura");
  const items = translation.raw("items") as { question: string; answer: string }[];

  return (
    <section
      className='bg-deep-green text-segura-white py-16'>
      <div className='container mx-auto flex flex-col gap-8 w-full max-md:max-w-full px-12 justify-center'>
        <div className='flex flex-col gap-3 items-center'>
          <h2 className='font-display text-4xl font-semibold'>{translation("title")}</h2>
        </div>

        <div className='flex flex-col lg:flex-row gap-14 items-center w-full'>
          <div className='flex-1 rounded-xl place-items-center'>
            <Image
              src={Dashboard}
              alt={translation("imageAlt")}
              width={500}
              height={500}
              className='rounded-xl'
            />
          </div>

          <div className='flex flex-col flex-1 w-full gap-8 font-sans'>
            {items.map((item, index) => (
              <Accordion key={index} title={item.question}>
                <p className='text-base font-light'>{item.answer}</p>
              </Accordion>
            ))}
          </div>
        </div>

        <div className='flex md:flex-row flex-col gap-8 justify-center items-center'>
          <Button href='/demo'>{translation("cta")}</Button>
          <Button href='/products' variant='transparent-green'>
            {translation("ctaSecondary")}
          </Button>
        </div>
      </div>
    </section>
  );
}