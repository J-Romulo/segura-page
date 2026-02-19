import Image from "next/image";
import HeroBg from "../../../../../assets/heroBanner/background.jpg";
import RiverwoodLogo from "../../../../../assets/heroBanner/riverwood_capital.png";
import { Button } from "../../../../../components/ui/Button";

export function HeroBanner() {
  return (
    <section className='mt-40 pt-14 md:mt-0 md:pt-64 py-20 md:py-29 relative'>
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-segura-black opacity-75 z-10' />

      {/* Background image */}
      <div className='absolute inset-0 z-0 bg-center overflow-hidden'>
        <Image
          src={HeroBg}
          alt=''
          fill
          className='object-cover object-center'
          priority
        />
      </div>

      {/* Content */}
      <div className='relative container mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 z-10 px-17'>
        {/* Left */}
        <div className='flex flex-col gap-4 lg:gap-8 w-full lg:w-1/2'>
          <h1 className='font-display text-5xl font-semibold text-segura-white'>
            <span className='font-normal'>Segura® raises</span>
            <em> strategic growth round</em>
            <span className='font-normal'> from Riverwood Capital</span>
          </h1>
          <p className='text-lg font-normal text-segura-white'>
            Leading tech investor from the Silicon Valley backs the PAM platform{" "}
            <span className='text-go-green font-semibold'>
              trusted by 1,000+
            </span>{" "}
            growing organizations worldwide.
          </p>
          <div>
            <Image
              src={RiverwoodLogo}
              alt='Riverwood Capital'
              className='w-1/3'
            />
          </div>
          <div className='flex flex-col md:flex-row gap-4 mt-2'>
            <Button
              href='/post/riverwood-capital-investment'
              variant='secondary'>
              Read the Announcement ›
            </Button>
          </div>
        </div>

        {/* Right */}
        <div className='flex flex-col self-start h-full lg:pl-24 text-go-green'>
          <p className='text-lg font-normal border-l-2 border-go-green pl-5'>
            Trusted by 1,000+ Enterprises
          </p>
          <p className='text-lg font-normal border-l-2 border-go-green pl-5'>
            Across 70 Countries
          </p>
        </div>
      </div>
    </section>
  );
}
