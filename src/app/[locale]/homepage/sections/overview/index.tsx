import { useTranslations } from "next-intl";
import { Button } from "../../../../../components/ui/Button";

export function Overview() {
  const translation = useTranslations("overview");

  return (
    <section
      className='bg-segura-white py-16'>
      <div className='container mx-auto w-full max-md:max-w-full px-12'>
        <div className='w-full grid grid-cols-1 md:grid-cols-12 md:gap-y-8 gap-x-3 md:gap-x-12 items-start gap-10'>
          <div className='col-span-12 md:col-span-6 flex flex-col gap-4 h-full justify-center text-deep-green'>
            <h1 className='font-display text-4xl font-medium text-deep-green'>
              {translation("title")}
            </h1>
            <h3 className='font-display text-2xl font-medium text-deep-green'>
              {translation("subtitle")}
            </h3>
            <p className='text-xl font-sans text-deep-green'>
              {translation.rich("description", {
                b: (chunks) => <b>{chunks}</b>,
              })}
            </p>
            <div className='flex flex-row flex-wrap gap-4 mt-3'>
              <Button href='/demo'>{translation("cta")}</Button>
              <Button href='/products' variant='transparent-dark'>
                {translation("ctaSecondary")}
              </Button>
            </div>
          </div>

          <div className='col-span-12 md:col-span-6'>
            <video
              autoPlay
              muted
              loop
              playsInline
              className='w-full h-auto rounded-xl'>
              <source src='/videos/segura-mandala-video.mp4' type='video/mp4' />
              {translation("videoFallback")}
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}