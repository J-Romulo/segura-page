import Image from "next/image";
import GartnerReportImg from "../../../../../assets/gartnerReport/gartnerReport.png";
import { Button } from "../../../../../components/ui/Button";

const CHECK_ITEMS = [
  "share with your board,",
  "reduce uncertainty, and",
  "choose your next PAM partner with confidence.",
];

export function GartnerReport() {
  return (
    <section
      className='bg-deep-green py-16'
      style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <div className='container mx-auto w-full max-md:max-w-full px-12'>
        <div className='w-full grid grid-cols-1 md:grid-cols-12 md:gap-y-8 gap-x-3 md:gap-x-12 items-start gap-10'>
          {/* Left — text */}
          <div className='col-span-12 md:col-span-9 flex flex-col gap-4 h-full justify-center text-segura-white'>
            <h2 className='font-display text-4xl font-semibold text-segura-white'>
              See why Segura® PAM has been recognized.
            </h2>
            <p className='text-xl font-normal text-segura-white'>
              <span className='font-display text-2xl text-go-green'>
                <em>The 2025 Gartner® Magic Quadrant™ for PAM is here.</em>
              </span>
              <br />
              <br />
              Get independent insights to
            </p>

            <div className='flex flex-col gap-2'>
              {CHECK_ITEMS.map((item) => (
                <div key={item} className='flex gap-2 items-center'>
                  <div className='flex items-center mr-2 shrink-0'>
                    {/* Checkmark */}
                    <svg
                      width='30'
                      height='30'
                      viewBox='0 0 30 30'
                      fill='none'
                      className='shrink-0'>
                      <path
                        d='M5 15L12 22L25 8'
                        stroke='#00d1b5'
                        strokeWidth='2.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <p className='text-segura-white'>{item}</p>
                </div>
              ))}
            </div>

            <div className='flex flex-row flex-wrap gap-4 mt-3'>
              <Button
                href='/company/gartner-pam-magic-quadrant-2025-report'
                variant={"secondary"}>
                Get the Gartner® Report ›
              </Button>
            </div>
          </div>

          {/* Right — image */}
          <div className='col-span-12 md:col-span-3'>
            <div className='flex justify-start md:justify-center'>
              <Image
                src={GartnerReportImg}
                alt='Gartner Magic Quadrant Report'
                className='block max-w-full h-auto object-contain w-full rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
