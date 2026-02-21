import Image from "next/image";
import { useTranslations } from "next-intl";
import Coracoes from "../../../../../assets/homepage/partners/3_coracoes.png";
import Bell from "../../../../../assets/homepage/partners/bell.png";
import Boticario from "../../../../../assets/homepage/partners/boticario.png";
import BTG from "../../../../../assets/homepage/partners/btg.png";
import Deloitte from "../../../../../assets/homepage/partners/deloitte.png";
import HelenOfTroy from "../../../../../assets/homepage/partners/helen_of_troy.png";
import LeroyMerlin from "../../../../../assets/homepage/partners/leroy_merlin.png";
import Liberyseguros from "../../../../../assets/homepage/partners/libery_seguros.png";
import PGIM from "../../../../../assets/homepage/partners/pgim.png";
import Santander from "../../../../../assets/homepage/partners/santander.png";
import Telefonica from "../../../../../assets/homepage/partners/telefonica.png";
import UOL from "../../../../../assets/homepage/partners/uol.png";

const PARTNERS = [
  { src: BTG, alt: "BTG" },
  { src: LeroyMerlin, alt: "Leroy Merlin" },
  { src: Deloitte, alt: "Deloitte" },
  { src: Santander, alt: "Santander" },
  { src: Coracoes, alt: "3 Corações" },
  { src: Boticario, alt: "O Boticário" },
  { src: PGIM, alt: "PGIM" },
  { src: Liberyseguros, alt: "Libery Seguros" },
  { src: Telefonica, alt: "Telefónica" },
  { src: UOL, alt: "UOL" },
  { src: HelenOfTroy, alt: "Helen of Troy" },
  { src: Bell, alt: "Bell" },
];

export function Partners() {
  const translation = useTranslations("partners");

  return (
    <section
      className='bg-segura-white py-16'>
      <div className='container mx-auto flex flex-col gap-10 items-center w-full max-md:max-w-full px-12'>
        <div className='text-center text-deep-green'>
          <h2 className='font-display font-semibold text-2xl'>
            {translation("title")}
          </h2>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-6 gap-12 items-center justify-center place-items-center w-full'>
          {PARTNERS.map(({ src, alt }) => (
            <Image
              key={alt}
              src={src}
              alt={alt}
              loading='lazy'
              className='w-1/2'
            />
          ))}
        </div>
      </div>
    </section>
  );
}