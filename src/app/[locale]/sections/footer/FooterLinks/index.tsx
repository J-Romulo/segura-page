import Link from "next/link";
import Image from "next/image";
import SeguraIdentity from "../../../../../assets/segura_identity.png";

const FOOTER_LINKS = [
  {
    title: "Support",
    items: [
      {
        label: "Documentation",
        href: "https://docs.senhasegura.io/v4/docs/pt/senhasegura",
        external: true,
      },
      { label: "Solution Center", href: "/services/solution-center" },
      { label: "Suggestions", href: "/suggestions" },
      {
        label: "Training and Certification",
        href: "/services/training-and-certification",
      },
      {
        label: "Deployment and Consulting",
        href: "/services/deployment-and-consulting",
      },
      { label: "Support Policy", href: "/policies-and-terms/support-policy" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Blog Segura®", href: "/blog" },
      { label: "eBooks", href: "/resources" },
      { label: "Whitepapers", href: "/resources" },
      {
        label: "Datasheets",
        href: "https://lp.senhasegura.co/EN/RICH-MATERIALS",
        external: true,
      },
      { label: "Infographics", href: "/resources" },
      { label: "Case Studies", href: "/customer-cases" },
      { label: "Webinars and Events", href: "/webinars-and-events" },
    ],
  },
  {
    title: "Partners",
    items: [
      { label: "About the Program", href: "/partners/about-the-program" },
      { label: "Become a Partner", href: "/partners/become-a-partner" },
      {
        label: "Security Alliance Program",
        href: "/partners/security-alliance-program",
      },
      {
        label: "Segura® University | Certification",
        href: "https://university.segura.security/plus/",
        external: true,
      },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Achievements", href: "/company/achievements" },
      { label: "Work With Us", href: "/company/career" },
      { label: "Operations", href: "/company/operations" },
      { label: "Terms of Use", href: "/privacy-and-cookie-statement" },
      {
        label: "Privacy and Cookie Policy",
        href: "/privacy-and-cookie-statement",
      },
      {
        label: "Information Security Policy",
        href: "/policies-and-terms/information-security-policy",
      },
      {
        label: "Whistleblowing Channel",
        href: "https://canal.ouvidordigital.com.br/segura?lang=en",
        external: true,
      },
    ],
  },
];

export function FooterLinks() {
  return (
    <div className='text-base bg-segura-white px-37 py-8 flex flex-col gap-10 w-full'>
      <div className='flex flex-col lg:flex-row gap-8 justify-between'>
        {/* Stay Connected card */}
        <div className='flex justify-center border-2 border-deep-green text-deep-green rounded-xl lg:w-1/4 h-3/4 items-center'>
          <div className='flex flex-col justify-center gap-4 p-10 w-full'>
            <h3 className='font-semibold text-deep-green font-display'>
              STAY CONNECTED
            </h3>
            <p
              className='font-normal text-deep-green'
              style={{ fontFamily: "Inter, Arial, sans-serif" }}>
              Stay updated on security best practices, upcoming events, and
              webinars.
            </p>
            <Link
              href='/blog'
              className='font-display border-2 font-bold border-deep-green text-deep-green rounded-xl px-4 py-3 hover:bg-segura-black hover:text-segura-white transition-colors w-fit'>
              See how ›
            </Link>
          </div>
        </div>

        {/* Link columns */}
        <div className='flex flex-col md:flex-row md:w-full justify-around gap-4 md:gap-0'>
          {FOOTER_LINKS.map(({ title, items }) => (
            <div key={title} className='flex flex-col gap-4 px-2'>
              <h3 className='font-semibold text-deep-green border-b-2 border-deep-green font-display pb-2'>
                {title}
              </h3>
              <ul className='flex flex-col gap-2'>
                {items.map(({ label, href, external }) => (
                  <li
                    key={label}
                    className='font-normal text-deep-green py-3 px-4 hover:bg-mint-green/10 hover:rounded-lg hover:text-mid-green transition-colors cursor-pointer'
                    style={{ fontFamily: "Inter, Arial, sans-serif" }}>
                    <Link
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* US Center */}
          <div className='flex flex-col gap-4 px-2'>
            <h3 className='font-semibold text-deep-green border-b-2 border-deep-green font-display pb-2'>
              US Center
            </h3>
            <ul className='flex flex-col gap-1'>
              <li
                className='font-normal text-deep-green py-2 px-4 hover:bg-go-green/10 hover:rounded-lg hover:text-mid-green transition-colors cursor-pointer'
                style={{ fontFamily: "Inter, Arial, sans-serif" }}>
                <Link href='/about'>
                  <b>US Center of Excellence</b>
                  <br />
                  <br />
                  801 Barton Springs Rd, Austin, TX
                  <br />
                  <br />
                  <b>
                    78704, United States
                    <br />
                    <br />
                    USA +1 302412 1512
                    <br />
                    <br />
                    +1 888 567 9521
                  </b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Logo */}
      <Image
        src={SeguraIdentity}
        alt='Segura logo'
        className='w-3/4 md:w-1/5'
      />
    </div>
  );
}
