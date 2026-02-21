import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Ratings from '../../../../../assets/homepage/peerInsights/insights.png';
import { Button } from '../../../../../components/ui/Button';

export function PeerInsights() {
  const translation = useTranslations('peerInsights');

  return (
    <section className="bg-mint-green py-16">
      <div className="container mx-auto w-full max-w-[1320px] px-17 max-md:max-w-full">
        <div className="grid w-full grid-cols-1 items-start gap-10 gap-x-3 md:grid-cols-12 md:gap-x-12 md:gap-y-8">
          <div className="text-deep-green col-span-12 flex h-full flex-col justify-center gap-4 md:col-span-6">
            <h2 className="font-display text-deep-green text-[32px]/9 font-semibold lg:text-4xl">
              {translation('title')}
            </h2>
            <p className="text-deep-green text-xl font-normal">
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
            <div className="mt-3 flex flex-row flex-wrap gap-4">
              <Button href="/demo" variant="primary">
                {translation('cta')}
              </Button>
            </div>
          </div>

          <div className="order-first col-span-12 md:order-none md:col-span-6">
            <div className="flex justify-start md:justify-center">
              <Image
                src={Ratings}
                alt={translation('imageAlt')}
                className="block h-auto w-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
