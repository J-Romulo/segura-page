import Image from "next/image";
import { useTranslations } from "next-intl";
import PamReviewTable from "../../../../../assets/homepage/PamReview/pamReviewTable.png";
import { Button } from "../../../../../components/ui/Button";

export function PamReview() {
  const translation = useTranslations("pamReview");

  return (
    <section
      className='bg-segura-white py-16'
      style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <div className='container mx-auto flex items-center gap-8 flex-col lg:flex-row w-full max-md:max-w-full px-12'>
        <div className='flex-1 w-full'>
          <Image
            src={PamReviewTable}
            alt={translation("imageAlt")}
            className='w-full h-auto'
          />
        </div>

        <div className='flex-1 w-full flex flex-col gap-6'>
          <h2 className='font-display text-4xl font-semibold text-deep-green'>
            {translation("title")}
          </h2>
          <p className='font-normal text-lg text-deep-green'>
            {translation.rich("description", {
              b: (chunks) => <b>{chunks}</b>,
              br: () => <><br /><br /></>,
            })}
          </p>
          <div className='mt-3 md:mt-0'>
            <Button href='/company/achievements' variant='dark'>
              {translation("cta")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}