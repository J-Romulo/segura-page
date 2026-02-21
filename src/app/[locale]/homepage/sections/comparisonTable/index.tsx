import Image from "next/image";
import { useTranslations } from "next-intl";
import ComparisonMobile from "../../../../../assets/homepage/comparisonTable/comparison_table.png";
import ComparisonDesktop from "../../../../../assets/homepage/comparisonTable/comparison_table.png";
import { Button } from "../../../../../components/ui/Button";

export function ComparisonTable() {
  const translation = useTranslations("comparisonTable");

  return (
    <section
      className='bg-segura-white py-16'>
      <div className='container mx-auto flex flex-col w-full max-md:max-w-full text-center justify-center items-center gap-10 px-12'>
        <div className='flex flex-col gap-4 md:w-2/3'>
          <h2 className='text-4xl font-semibold text-deep-green'>
            {translation("title")}
          </h2>
          <p className='text-lg font-sans leading-7 text-deep-green'>
            {translation.rich("description", {
              b: (chunks) => <b>{chunks}</b>,
              br: () => <><br /></>,
            })}
          </p>
        </div>

        <div className='flex flex-col max-w-none w-full items-center justify-center'>
          <Image
            src={ComparisonMobile}
            alt={translation("imageAlt")}
            className='block md:hidden rounded-xl w-full'
          />
          <Image
            src={ComparisonDesktop}
            alt={translation("imageAlt")}
            className='hidden md:block rounded-xl w-full'
          />
        </div>

        <div className='flex flex-col md:flex-row gap-3'>
          <Button href='/demo' variant={"primary"}>
            {translation("cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}