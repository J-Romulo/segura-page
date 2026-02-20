import Image from "next/image";
import { useTranslations } from "next-intl";
import Ratings from "../../../../../assets/homepage/peerInsights/insights.png";
import { Button } from "../../../../../components/ui/Button";

export function PeerInsights() {
  const translation = useTranslations("peerInsights");

  return (
    <section
      className='bg-mint-green py-16'
      style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <div className='container mx-auto w-full max-md:max-w-full px-12'>
        <div className='w-full grid grid-cols-1 md:grid-cols-12 md:gap-y-8 gap-x-3 md:gap-x-12 items-start gap-10'>

          <div className='col-span-12 md:col-span-6 flex flex-col gap-4 h-full justify-center text-deep-green'>
            <h2 className='font-display text-4xl font-semibold text-deep-green'>
              {translation("title")}
            </h2>
            <p className='text-xl font-normal text-deep-green'>
              {translation.rich("description", {
                b: (chunks) => <b>{chunks}</b>,
                br: () => <><br /><br /></>,
              })}
            </p>
            <div className='flex flex-row flex-wrap gap-4 mt-3'>
              <Button href='/demo' variant='primary'>
                {translation("cta")}
              </Button>
            </div>
          </div>

          <div className='col-span-12 md:col-span-6'>
            <div className='flex justify-start md:justify-center'>
              <Image
                src={Ratings}
                alt={translation("imageAlt")}
                className='block max-w-full h-auto object-contain w-full'
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}