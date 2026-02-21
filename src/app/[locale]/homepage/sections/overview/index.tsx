import { useTranslations } from 'next-intl';
import { Button } from '../../../../../components/ui/Button';

export function Overview() {
  const translation = useTranslations('overview');

  return (
    <section className="bg-segura-white py-16">
      <div className="container mx-auto w-full max-w-[1320px] px-17 max-md:max-w-full">
        <div className="grid w-full grid-cols-1 items-start gap-10 gap-x-3 md:grid-cols-12 md:gap-x-12 md:gap-y-8">
          <div className="text-deep-green order-last col-span-12 flex h-full flex-col justify-center gap-4 md:order-none md:col-span-6">
            <h1 className="font-display text-deep-green text-[32px]/9 font-medium lg:text-4xl">
              {translation('title')}
            </h1>
            <h3 className="font-display text-deep-green text-[20px] font-medium lg:text-2xl">
              {translation('subtitle')}
            </h3>
            <p className="text-deep-green font-sans text-xl">
              {translation.rich('description', {
                b: (chunks) => <b>{chunks}</b>,
              })}
            </p>
            <div className="mt-3 flex flex-row flex-wrap gap-4">
              <Button href="/demo">{translation('cta')}</Button>
              <Button href="/products" variant="transparent-dark">
                {translation('ctaSecondary')}
              </Button>
            </div>
          </div>

          <div className="order-first col-span-12 md:order-none md:col-span-6">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-auto w-full rounded-xl"
            >
              <source src="/videos/segura-mandala-video.mp4" type="video/mp4" />
              {translation('videoFallback')}
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
