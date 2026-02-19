import Image from "next/image";
import PamReviewTable from "../../../../../assets/PamReview/pamReviewTable.png";
import { Button } from "../../../../../components/ui/Button";

export function PamReview() {
  return (
    <section
      className='bg-segura-white py-16'
      style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <div className='container mx-auto flex items-center gap-8 flex-col lg:flex-row w-full max-md:max-w-full px-12'>
        {/* Left — image */}
        <div className='flex-1 w-full'>
          <Image
            src={PamReviewTable}
            alt='Quadrant image'
            className='w-full h-auto'
          />
        </div>

        {/* Right — text */}
        <div className='flex-1 w-full flex flex-col gap-6'>
          <h2 className='font-display text-4xl font-semibold text-deep-green'>
            The World's #1 All-in-One PAM Solution
          </h2>
          <p className='font-normal text-lg text-deep-green'>
            Segura® leads the top PAM providers for a reason—security that
            works. Analysts recognize our innovation and speed, while IT teams
            rate us 4,9/5 for support and reliability.
          </p>
          <div className='mt-3 md:mt-0'>
            <Button href='/company/achievements' variant='dark'>
              See What Sets Us Apart ›
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
