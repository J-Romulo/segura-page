import Image from "next/image";
import { useTranslations } from "next-intl";
import CustomersChoice from "../../../../../assets/homepage/badges/customers_choice.webp";
import GartnerMQ from "../../../../../assets/homepage/badges/gartner.webp";
import SoftwareReview from "../../../../../assets/homepage/badges/software_review.avif";
import ExcellenceAwards from "../../../../../assets/homepage/badges/excellence_awards.avif";
import LeadershipCompass from "../../../../../assets/homepage/badges/leadership_compass.avif";
import G2Leader from "../../../../../assets/homepage/badges/g2.avif";

export function Badges() {
  const translation = useTranslations("badges");

  const BADGES = [
    { src: CustomersChoice, alt: translation("badges.gartnerPeerInsights") },
    { src: GartnerMQ, alt: translation("badges.gartnerMQ") },
    { src: SoftwareReview, alt: translation("badges.softwareReview") },
    { src: ExcellenceAwards, alt: translation("badges.excellenceAwards") },
    { src: LeadershipCompass, alt: translation("badges.leadershipCompass") },
    { src: G2Leader, alt: translation("badges.g2Leader") },
  ];

  return (
    <section
      className='bg-segura-white py-16'>
      <div className='container mx-auto w-full max-md:max-w-full px-12'>
        <div className='w-full grid grid-cols-1 md:grid-cols-12 md:gap-y-8 gap-x-3 md:gap-x-12 items-start gap-10'>
          <div className='col-span-12 md:col-span-6 flex flex-col gap-4'>
            <h2 className='font-display text-4xl font-semibold text-deep-green pb-6'>
              {translation("title")}
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

          <div className='col-span-12 md:col-span-6 flex flex-col gap-4 h-full justify-center border-l-2 border-mint-green text-deep-green'>
            <p className='text-xl pl-5'>
              <em>
                {translation.rich("quote", {
                  b: (chunks) => <b>{chunks}</b>,
                  br: () => <><br /><br /></>,
                })}
              </em>
            </p>
            <h4 className='font-display text-base pt-4 text-deep-green pl-5'>
              <em>{translation("quoteAuthor")}</em>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}