import Image from "next/image";
import Dashboard from "../../../../../assets/whySegura/dashboard.webp";
import { Accordion } from "../../../../../components/ui/Accordion";
import { Button } from "../../../../../components/ui/Button";

const WHY_ITEMS = [
  {
    question: "All-In-One solution",
    answer:
      "Everything you need for privileged access management in a single, powerful platform. No extra tools, no complexity—just complete protection.",
  },
  {
    question: "No Hidden Costs",
    answer:
      "Transparent pricing with everything included. Predictable pricing, full features included, and no surprise fees.",
  },
  {
    question: "7 Minutes To Deploy",
    answer:
      "Transparent pricing with everything included. Predictable pricing, full features included, and no surprise fees.",
  },
  {
    question: "Top-Rated Support",
    answer:
      "98% of users recommend us, and our expert team is always ready to help. Instead of frustrating delays, get real answers.",
  },
];

export function WhySegura() {
  return (
    <section
      className='bg-deep-green text-segura-white py-16'
      style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <div className='container mx-auto flex flex-col gap-8 w-full max-md:max-w-full px-12 justify-center'>
        {/* Header */}
        <div className='flex flex-col gap-3 items-center'>
          <h2 className='font-display text-4xl font-semibold'>Why Segura®?</h2>
        </div>

        {/* Content */}
        <div className='flex flex-col lg:flex-row gap-14 items-center w-full'>
          {/* Left — image */}
          <div className='flex-1 rounded-xl place-items-center'>
            <Image
              src={Dashboard}
              alt='Comparison Segura® with competitors'
              width={500}
              height={500}
              className='rounded-xl'
            />
          </div>

          {/* Right — accordion */}
          <div className='flex flex-col flex-1 w-full gap-8'>
            {WHY_ITEMS.map((item, index) => (
              <Accordion key={index} title={item.question}>
                <p className='text-base font-light'>{item.answer}</p>
              </Accordion>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className='flex md:flex-row flex-col gap-8 justify-center items-center'>
          <Button href='/demo'>Watch Demo ›</Button>
          <Button href='/products' variant='transparent-green'>
            See Products ›
          </Button>
        </div>
      </div>
    </section>
  );
}
