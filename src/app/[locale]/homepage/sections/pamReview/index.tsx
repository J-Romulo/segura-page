import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PamReviewTable from '../../../../../assets/homepage/PamReview/pamReviewTable.png';
import { Button } from '../../../../../components/ui/Button';

export function PamReview() {
  const translation = useTranslations('pamReview');

  return (
    <section className="bg-segura-white py-16">
      <div className="container mx-auto flex w-full flex-col items-center gap-8 px-12 max-md:max-w-full lg:flex-row">
        <div className="w-full flex-1">
          <Image
            src={PamReviewTable}
            alt={translation('imageAlt')}
            className="h-auto w-full"
          />
        </div>

        <div className="flex w-full flex-1 flex-col gap-6">
          <h2 className="font-display text-deep-green text-4xl font-semibold">
            {translation('title')}
          </h2>
          <p className="text-deep-green font-sans text-lg">
            {translation.rich('description', {
              b: (chunks) => <b>{chunks}</b>,
              br: () => (
                <>
                  <br />
                  <br />
                </>
              ),
            })}
          </p>
          <div className="mt-3 md:mt-0">
            <Button href="/company/achievements" variant="dark">
              {translation('cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
