import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

import CyberDefenseSlide from '../../../../../assets/homepage/articles/cyber_defense.webp';
import CyberSecurity from '../../../../../assets/homepage/articles/cyber_security.png';
import PAM from '../../../../../assets/homepage/articles/pam.webp';
import MachineIdentity from '../../../../../assets/homepage/articles/machine_identity.webp';

import CyberDefenseSlidePt from '../../../../../assets/homepage/articles/defesa_cibernetica.png';
import CyberSecurityPt from '../../../../../assets/homepage/articles/ciberseguranca.png';
import PAMPt from '../../../../../assets/homepage/articles/acesso_privilegiado.png';
import MachineIdentityPt from '../../../../../assets/homepage/articles/identidade_de_maquina.png';

const EN_CARDS = [
  {
    href: '/post/privileged-access-management-pam-a-complete-guide',
    src: PAM,
    alt: 'Privileged Access Management: A Complete Guide',
  },
  {
    href: '/post/cybersecurity-as-a-business-enabler',
    src: CyberSecurity,
    alt: 'Cybersecurity as a Business Enabler',
  },
  {
    href: '/post/machine-and-non-human-identity',
    src: MachineIdentity,
    alt: 'Understanding Machine Identity',
  },
  {
    href: '/post/locked-shields-2025-with-joseph-carson',
    src: CyberDefenseSlide,
    alt: "Inside the World's Largest Cyber Defense Exercise",
  },
];

const PT_CARDS = [
  {
    href: '/pt-br/post/gestao-de-acesso-privilegiado-pam-guia-completo',
    src: PAMPt,
    alt: 'Gerenciamento de Acesso Privilegiado: Um Guia Completo',
  },
  {
    href: '/pt-br/post/ciberseguranca-como-impulsionadora-de-negocios',
    src: CyberSecurityPt,
    alt: 'Cibersegurança como Habilitadora de Negócios',
  },
  {
    href: '/pt-br/post/identidade-de-maquina-nao-humana',
    src: MachineIdentityPt,
    alt: 'Entendendo a Identidade de Máquina',
  },
  {
    href: '/pt-br/post/locked-shields-2025-com-joseph-carson',
    src: CyberDefenseSlidePt,
    alt: 'Por Dentro do Maior Exercício de Defesa Cibernética do Mundo',
  },
];

export function Articles() {
  const translation = useTranslations('articles');
  const isBR = useLocale() === 'pt';
  const CARDS = isBR ? PT_CARDS : EN_CARDS;

  return (
    <section className="bg-segura-white text-deep-green py-15">
      <div className="container mx-auto flex w-full flex-col items-center gap-8 px-17 max-md:max-w-full max-w-[1320px]">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="font-display text-deep-green text-[32px]/9 lg:text-4xl font-semibold">
            {translation('title')}
          </h2>
          <p className="text-deep-green text-[16px] lg:text-lg">
            {translation('description')}
          </p>
        </div>

        <div className="w-full max-w-full overflow-x-auto">
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            {CARDS.map(({ href, src, alt }) => (
              <div
                key={href}
                className="flex flex-col items-center gap-4 rounded-xl text-center md:flex-1"
              >
                <Link href={href}>
                  <Image
                    src={src}
                    alt={alt}
                    width={300}
                    height={200}
                    className="rounded-xl"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
