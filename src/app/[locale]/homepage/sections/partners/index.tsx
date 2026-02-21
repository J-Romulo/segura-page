import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Coracoes from '../../../../../assets/homepage/partners/3_coracoes.png';
import Bell from '../../../../../assets/homepage/partners/bell.png';
import Boticario from '../../../../../assets/homepage/partners/boticario.png';
import BTG from '../../../../../assets/homepage/partners/btg.png';
import Deloitte from '../../../../../assets/homepage/partners/deloitte.png';
import HelenOfTroy from '../../../../../assets/homepage/partners/helen_of_troy.png';
import LeroyMerlin from '../../../../../assets/homepage/partners/leroy_merlin.png';
import Liberyseguros from '../../../../../assets/homepage/partners/libery_seguros.png';
import PGIM from '../../../../../assets/homepage/partners/pgim.png';
import Santander from '../../../../../assets/homepage/partners/santander.png';
import Telefonica from '../../../../../assets/homepage/partners/telefonica.png';
import UOL from '../../../../../assets/homepage/partners/uol.png';

const PARTNERS = [
  { src: BTG, alt: 'BTG' },
  { src: LeroyMerlin, alt: 'Leroy Merlin' },
  { src: Deloitte, alt: 'Deloitte' },
  { src: Santander, alt: 'Santander' },
  { src: Coracoes, alt: '3 Corações' },
  { src: Boticario, alt: 'O Boticário' },
  { src: PGIM, alt: 'PGIM' },
  { src: Liberyseguros, alt: 'Libery Seguros' },
  { src: Telefonica, alt: 'Telefónica' },
  { src: UOL, alt: 'UOL' },
  { src: HelenOfTroy, alt: 'Helen of Troy' },
  { src: Bell, alt: 'Bell' },
];

export function Partners() {
  const translation = useTranslations('partners');

  return (
    <section className="bg-segura-white py-16">
      <div className="container mx-auto flex w-full max-w-[1320px] flex-col items-center gap-10 px-17 max-md:max-w-full">
        <div className="text-deep-green text-center">
          <h2 className="font-display text-[20px] font-semibold lg:text-2xl">
            {translation('title')}
          </h2>
        </div>

        <div className="grid w-full grid-cols-2 place-items-center items-center justify-center gap-12 md:grid-cols-6">
          {PARTNERS.map(({ src, alt }) => (
            <Image
              key={alt}
              src={src}
              alt={alt}
              loading="lazy"
              className="w-1/2"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
