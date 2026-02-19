import Image from "next/image";
import ComparisonMobile from "../../../../../assets/comparisonTable/comparison_table.png";
import ComparisonDesktop from "../../../../../assets/comparisonTable/comparison_table.png";
import { Button } from "../../../../../components/ui/Button";

export function ComparisonTable() {
  return (
    <section
      className='bg-segura-white py-16'
      style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <div className='container mx-auto flex flex-col w-full max-md:max-w-full text-center justify-center items-center gap-10 px-12'>
        {/* Header */}
        <div className='flex flex-col gap-4 md:w-2/3'>
          <h2 className='font-display text-4xl font-semibold text-deep-green'>
            Why More Teams Are Choosing Segura®
          </h2>
          <p className='text-lg font-normal leading-7 text-deep-green'>
            We've heard the same story again and again: long deployments,
            missing features, and tools that never quite fit.
            <br />
            Unlike legacy solutions,{" "}
            <b>
              Segura® fits into modern infrastructure without slowing you down.
            </b>
          </p>
        </div>

        {/* Images */}
        <div className='flex flex-col max-w-none w-full items-center justify-center'>
          {/* Mobile */}
          <Image
            src={ComparisonMobile}
            alt='Comparison Segura® with competitors'
            className='block md:hidden rounded-xl w-full'
          />
          {/* Desktop */}
          <Image
            src={ComparisonDesktop}
            alt='Comparison Segura® with competitors'
            className='hidden md:block rounded-xl w-full'
          />
        </div>

        {/* CTA */}
        <div className='flex flex-col md:flex-row gap-3'>
          <Button href='/demo' variant={"primary"}>
            See It In Action ›
          </Button>
        </div>
      </div>
    </section>
  );
}
