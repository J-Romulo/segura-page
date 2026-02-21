import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ComparisonMobile from '../../../../../assets/homepage/comparisonTable/comparison_table.png';
import ComparisonDesktop from '../../../../../assets/homepage/comparisonTable/comparison_table.png';
import { Button } from '../../../../../components/ui/Button';

export function ComparisonTable() {
  const translation = useTranslations('comparisonTable');

  return (
    <section className="bg-segura-white py-16">
      <div className="container mx-auto flex w-full flex-col items-center justify-center gap-10 px-12 text-center max-md:max-w-full">
        <div className="flex flex-col gap-4 md:w-2/3">
          <h2 className="text-deep-green text-4xl font-semibold">
            {translation('title')}
          </h2>
          <p className="text-deep-green font-sans text-lg leading-7">
            {translation.rich('description', {
              b: (chunks) => <b>{chunks}</b>,
              br: () => (
                <>
                  <br />
                </>
              ),
            })}
          </p>
        </div>

        <div className="flex w-full max-w-none flex-col items-center justify-center">
          <Image
            src={ComparisonMobile}
            alt={translation('imageAlt')}
            className="block w-full rounded-xl md:hidden"
          />
          <Image
            src={ComparisonDesktop}
            alt={translation('imageAlt')}
            className="hidden w-full rounded-xl md:block"
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <Button href="/demo" variant={'primary'}>
            {translation('cta')}
          </Button>
        </div>
      </div>
    </section>
  );
}
