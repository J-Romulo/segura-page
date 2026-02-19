import Image from "next/image";
import Ratings from "../../../../../assets/peerInsights/insights.png";
import { Button } from "../../../../../components/ui/Button";

export function PeerInsights() {
  return (
    <section
      className='bg-mint-green py-16'
      style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <div className='container mx-auto w-full max-md:max-w-full px-12'>
        <div className='w-full grid grid-cols-1 md:grid-cols-12 md:gap-y-8 gap-x-3 md:gap-x-12 items-start gap-10'>
          {/* Left — text */}
          <div className='col-span-12 md:col-span-6 flex flex-col gap-4 h-full justify-center text-deep-green'>
            <h2 className='font-display text-4xl font-semibold text-deep-green'>
              Top-Rated Support and Maintenance
            </h2>
            <p className='text-xl font-normal text-deep-green'>
              Segura® is the{" "}
              <b>highest-rated PAM provider on Gartner Peer Insights</b> for a
              reason.
              <br />
              <br />
              Our customers give us the highest rating of 5.0 on Gartner Peer
              Insights and 98% Willingness to Recommend.
            </p>
            <div className='flex flex-row flex-wrap gap-4 mt-3'>
              <Button href='/demo' variant='primary'>
                Watch Demo ›
              </Button>
            </div>
          </div>

          {/* Right — image */}
          <div className='col-span-12 md:col-span-6'>
            <div className='flex justify-start md:justify-center'>
              <Image
                src={Ratings}
                alt='Comparison Segura® with competitors'
                className='block max-w-full h-auto object-contain w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
