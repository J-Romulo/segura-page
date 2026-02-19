import Link from "next/link";
import Image from "next/image";
import CyberDefenseSlide from "../../../../../assets/ResourceManagementSlides/cyber_defense.webp";
import CyberSecurity from "../../../../../assets/ResourceManagementSlides/cyber_security.png";
import PAM from "../../../../../assets/ResourceManagementSlides/pam.webp";
import MachineIdentity from "../../../../../assets/ResourceManagementSlides/machine_identity.webp";

const CARDS = [
  {
    href: "/post/privileged-access-management-pam-a-complete-guide",
    src: PAM,
    alt: "Privileged Access Management: A Complete Guide",
  },
  {
    href: "/post/cybersecurity-as-a-business-enabler",
    src: CyberSecurity,
    alt: "Cybersecurity as a Business Enabler",
  },
  {
    href: "/post/machine-and-non-human-identity",
    src: MachineIdentity,
    alt: "Understanding Machine Identity",
  },
  {
    href: "/post/locked-shields-2025-with-joseph-carson",
    src: CyberDefenseSlide,
    alt: "Inside the World's Largest Cyber Defense Exercise",
  },
];

export function ManagementResources() {
  return (
    <section
      className='py-15 bg-segura-white text-deep-green'
      style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <div className='flex flex-col items-center gap-8 w-full max-md:max-w-full mx-auto container px-12'>
        {/* Header */}
        <div className='flex flex-col text-center gap-2'>
          <h2 className='font-display text-4xl font-semibold text-deep-green'>
            Cybersecurity &amp; Risk Management Resources
          </h2>
          <p className='text-lg font-normal text-deep-green'>
            Dive into our extensive library of actionable resources for security
            teams, managers, and executives.
          </p>
        </div>

        {/* Cards */}
        <div className='max-w-full w-full overflow-x-auto'>
          <div className='flex gap-4 flex-col md:flex-row justify-center'>
            {CARDS.map(({ href, src, alt }) => (
              <div
                key={href}
                className='md:flex-1 rounded-xl flex flex-col gap-4 items-center text-center'>
                <Link href={href}>
                  <Image
                    src={src}
                    alt={alt}
                    width={300}
                    height={200}
                    className='rounded-xl'
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
