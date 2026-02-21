import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import SeguraIdentity from "../../../../assets/segura_identity.png";

export function FooterLinks() {
  const translation = useTranslations("footer.links");
  const locale = useLocale();
  const isBR = locale === "pt";

  const FOOTER_LINKS = [
    {
      title: translation("support.title"),
      items: [
        { label: translation("support.documentation"), href: "https://docs.senhasegura.io/v4/docs/pt/senhasegura", external: true },
        { label: translation("support.solutionCenter"), href: "/services/solution-center" },
        { label: translation("support.suggestions"), href: "/suggestions" },
        { label: translation("support.trainingAndCertification"), href: "/services/training-and-certification" },
        { label: translation("support.deploymentAndConsulting"), href: "/services/deployment-and-consulting" },
        { label: translation("support.supportPolicy"), href: "/policies-and-terms/support-policy" },
      ],
    },
    {
      title: translation("resources.title"),
      items: [
        { label: translation("resources.blog"), href: "/blog" },
        { label: translation("resources.ebooks"), href: "/resources" },
        { label: translation("resources.whitepapers"), href: "/resources" },
        { label: translation("resources.datasheets"), href: "https://lp.senhasegura.co/EN/RICH-MATERIALS", external: true },
        { label: translation("resources.infographics"), href: "/resources" },
        { label: translation("resources.caseStudies"), href: "/customer-cases" },
        { label: translation("resources.webinarsAndEvents"), href: "/webinars-and-events" },
      ],
    },
    {
      title: translation("partners.title"),
      items: [
        { label: translation("partners.aboutTheProgram"), href: "/partners/about-the-program" },
        { label: translation("partners.becomeAPartner"), href: "/partners/become-a-partner" },
        { label: translation("partners.securityAllianceProgram"), href: "/partners/security-alliance-program" },
        { label: translation("partners.university"), href: "https://university.segura.security/plus/", external: true },
      ],
    },
    {
      title: translation("company.title"),
      items: [
        { label: translation("company.aboutUs"), href: "/about" },
        { label: translation("company.achievements"), href: "/company/achievements" },
        { label: translation("company.workWithUs"), href: "/company/career" },
        { label: translation("company.operations"), href: "/company/operations" },
        { label: translation("company.termsOfUse"), href: "/privacy-and-cookie-statement" },
        { label: translation("company.privacyAndCookiePolicy"), href: "/privacy-and-cookie-statement" },
        { label: translation("company.informationSecurityPolicy"), href: "/policies-and-terms/information-security-policy" },
        { label: translation("company.whistleblowingChannel"), href: "https://canal.ouvidordigital.com.br/segura?lang=en", external: true },
      ],
    },
  ];

  return (
    <div className='text-base bg-segura-white px-37 py-8 flex flex-col gap-10 w-full'>
      <div className='flex flex-col lg:flex-row gap-8 justify-between'>

        <div className='flex justify-center border-2 border-deep-green text-deep-green rounded-xl lg:w-1/4 h-3/4 items-center'>
          <div className='flex flex-col justify-center gap-4 p-10 w-full'>
            <h3 className='font-semibold text-deep-green font-display'>
              {translation("stayConnected.title")}
            </h3>
            <p className='font-normal text-deep-green'>
              {translation("stayConnected.description")}
            </p>
            <Link
              href='/blog'
              className='font-display border-2 font-bold border-deep-green text-deep-green rounded-xl px-4 py-3 hover:bg-segura-black hover:text-segura-white transition-colors w-fit'>
              {translation("stayConnected.cta")}
            </Link>
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:w-full justify-around gap-4 md:gap-0 font-sans'>
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
                  >
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

          {isBR ? (
            <div className='flex flex-col gap-4 px-2'>
              <h3 className='font-semibold text-deep-green border-b-2 border-deep-green font-display pb-2'>
                {translation("brCenter.title")}
              </h3>
              <ul className='flex flex-col gap-1'>
                <li
                  className='font-normal text-deep-green py-2 px-4 hover:bg-go-green/10 hover:rounded-lg hover:text-mid-green transition-colors cursor-pointer'
                >
                  <Link href='/pt-br/sobre'>
                    {translation("brCenter.address")}
                    <br /><br />
                    <b>{translation("brCenter.phone")}</b>
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className='flex flex-col gap-4 px-2'>
              <h3 className='font-semibold text-deep-green border-b-2 border-deep-green font-display pb-2'>
                {translation("usCenter.title")}
              </h3>
              <ul className='flex flex-col gap-1'>
                <li
                  className='font-normal text-deep-green py-2 px-4 hover:bg-go-green/10 hover:rounded-lg hover:text-mid-green transition-colors cursor-pointer'
                >
                  <Link href='/about'>
                    <b>{translation("usCenter.name")}</b>
                    <br /><br />
                    {translation("usCenter.address")}
                    <br /><br />
                    <b>
                      {translation("usCenter.zip")}
                      <br /><br />
                      {translation("usCenter.phone1")}
                      <br /><br />
                      {translation("usCenter.phone2")}
                    </b>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Logo */}
      <Image src={SeguraIdentity} alt='Segura logo' className='w-3/4 md:w-1/5' />
    </div>
  );
}