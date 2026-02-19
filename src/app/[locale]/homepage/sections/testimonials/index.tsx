import Image from "next/image";
import TestimonialBg from "../../../../../assets/testimonials/background.webp";
import Stars from "../../../../../assets/testimonials/stars.svg";
import { Button } from "../../../../../components/ui/Button";

const STATS = [
  {
    number: "99%",
    description: (
      <>
        <b>recommendation</b> on Gartner Peer Insights with 5/5{" "}
        <b>top-rated customer support.</b>
      </>
    ),
  },
  {
    number: "70%",
    description: (
      <>
        <b>lower Total Cost of Ownership (TCO),</b> than other leading
        solutions.
      </>
    ),
  },
];

export function Testimonials() {
  return (
    <section
      className='overflow-hidden bg-cover relative'
      style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      {/* Background image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={TestimonialBg}
          alt=''
          fill
          className='object-cover object-top'
          priority
        />
      </div>

      {/* Gradient overlay + content */}
      <div className='relative flex flex-col bg-gradient-to-r from-segura-black to-transparent'>
        <div className='container mx-auto relative py-16 flex flex-col justify-center items-start w-full max-md:max-w-full px-12'>
          <div className='flex flex-col max-w-full gap-10 w-full md:max-w-xl'>
            {/* Stars */}
            <Image
              src={Stars}
              alt='Stars'
              width={50}
              height={60}
              className='object-contain w-1/3'
            />

            {/* Quote */}
            <article className='text-lg font-light leading-7 text-segura-white break-words w-full'>
              <blockquote className='flex flex-col gap-2'>
                <p className='font-display text-lg md:text-xl font-semibold text-segura-white'>
                  "Segura® Is A Solid And Trustworthy Tool For Remote Access In
                  Critical Environments."
                </p>
                <p className='font-normal text-base text-segura-white'>
                  "Segura® offers a comprehensive suite of PAM capabilities. The
                  PAM platform seamlessly integrates with various systems (...)"
                </p>
                <div className='font-medium text-sm text-segura-white'>
                  - Security Office Analyst, IT Services - USA
                </div>
              </blockquote>
            </article>

            {/* Stats */}
            <div className='flex gap-5 justify-between flex-col md:flex-row'>
              {STATS.map(({ number, description }) => (
                <div
                  key={number}
                  className='border-l-2 border-solid border-password-green'>
                  <div className='flex flex-col pl-4'>
                    <p className='self-start text-lg md:text-1xl lg:text-2xl font-bold leading-none text-segura-white'>
                      {number}
                    </p>
                    <p className='text-base leading-7 text-segura-white font-normal'>
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button href='/about' variant='transparent-white'>
              See Why CISOs Trust Segura® ›
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
