import Image from "next/image";
import CustomersChoice from "../../../../../assets/badges/customers_choice.webp";
import GartnerMQ from "../../../../../assets/badges/gartner.webp";
import SoftwareReview from "../../../../../assets/badges/software_review.avif";
import ExcellenceAwards from "../../../../../assets/badges/excellence_awards.avif";
import LeadershipCompass from "../../../../../assets/badges/leadership_compass.avif";
import G2Leader from "../../../../../assets/badges/g2.avif";

const BADGES = [
  { src: CustomersChoice, alt: "Gartner Peer Insights" },
  { src: GartnerMQ, alt: "Gartner Magic Quadrant" },
  { src: SoftwareReview, alt: "Software Gold Medal 2023" },
  { src: ExcellenceAwards, alt: "Cybersecurity Winner 2023" },
  { src: LeadershipCompass, alt: "KuppingerCole Leadership" },
  { src: G2Leader, alt: "Leader Fall 2023" },
];

export function Badges() {
  return (
    <section
      className='bg-segura-white py-16'
      style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <div className='container mx-auto w-full max-md:max-w-full px-12'>
        <div className='w-full grid grid-cols-1 md:grid-cols-12 md:gap-y-8 gap-x-3 md:gap-x-12 items-start gap-10'>
          {/* Left — title + badges */}
          <div className='col-span-12 md:col-span-6 flex flex-col gap-4'>
            <h2 className='font-display text-4xl font-semibold text-deep-green pb-6'>
              A Quality PAM Solution and Support
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
              {BADGES.map(({ src, alt }) => (
                <div key={alt} className='flex justify-start md:justify-center'>
                  <Image
                    src={src}
                    alt={alt}
                    className='block max-w-full h-auto object-contain w-full md:w-2/3'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right — testimonial */}
          <div className='col-span-12 md:col-span-6 flex flex-col gap-4 h-full justify-center border-l-2 border-mint-green text-deep-green'>
            <p className='text-xl font-normal pl-5'>
              <em>
                "Segura® has been a great solution for us.&nbsp;
                <b>We use it on daily basis</b>&nbsp;and we are&nbsp;
                <b>sure our organization is safer</b>&nbsp;with it.
                <br />
                <br />
                The standout feature of Segura® for me is that it is&nbsp;
                <b>intuitive</b>&nbsp;and has a <b>user-friendly interface.</b>
                <br />
                <br />
                The&nbsp;<b>exceptional customer support</b>&nbsp;provided by
                Segura® has also been a key factor in our <b>satisfaction</b>
                &nbsp;with the product."
              </em>
            </p>
            <h4 className='font-display text-base pt-4 font-normal text-deep-green pl-5'>
              <em>- Customer Review, IT Services</em>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
