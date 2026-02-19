import Image from "next/image";
import ComplianceBanner from "../../../../../assets/compliance/complianceBanner.png";
import { Button } from "../../../../../components/ui/Button";
import {
  Lock,
  DollarSign,
  Activity,
  Shield,
  ChartNoAxesColumn,
} from "lucide-react";

const COMPLIANCE_ITEMS = [
  {
    label: "ISO 27001 ›",
    href: "/solutions/iso-27001",
    icon: <Lock size={20} />,
  },
  {
    label: "PCI DSS ›",
    href: "/solutions/pci",
    icon: <DollarSign size={20} />,
  },
  { label: "HIPAA ›", href: "/solutions/hipaa", icon: <Activity size={20} /> },
  { label: "GDPR ›", href: "/solutions/gdpr", icon: <Shield size={20} /> },
  {
    label: "SOX ›",
    href: "/solutions/sox",
    icon: <ChartNoAxesColumn size={20} />,
  },
];

export function Compliance() {
  return (
    <section
      className='bg-deep-green py-16'
      style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <div className='container mx-auto w-full max-md:max-w-full px-12'>
        {/* Top grid */}
        <div className='w-full grid grid-cols-1 md:grid-cols-12 md:gap-y-8 gap-x-3 md:gap-x-12 items-start gap-10'>
          {/* Left — text */}
          <div className='col-span-12 md:col-span-6 flex flex-col gap-4 h-full justify-center text-segura-white'>
            <h2 className='font-display text-4xl font-semibold text-segura-white'>
              Prove compliance on day one
            </h2>
            <p className='text-xl font-normal text-segura-white'>
              With{" "}
              <b>
                automated audit trails, password rotation, and session
                recording,
              </b>{" "}
              Segura® PAM eliminates the gaps that regulators target.
              <br />
              <br />
            </p>
            <p className='font-display text-xl text-segura-white'>
              <em>Instead of scrambling, show up ready.</em>
            </p>
            <div className='flex flex-row flex-wrap gap-4 mt-3'>
              <Button href='/demo'>See Compliance Made Simple ›</Button>
            </div>
          </div>

          {/* Right — image */}
          <div className='col-span-12 md:col-span-6'>
            <div className='flex justify-start md:justify-center'>
              <Image
                src={ComplianceBanner}
                alt='Compliance'
                className='block max-w-full h-auto object-contain w-full'
              />
            </div>
          </div>
        </div>

        {/* Bottom — audit CTA */}
        <div className='py-10 flex flex-col gap-4'>
          <p className='text-segura-white'>Be audit-ready for:</p>
          <div className='flex flex-col md:flex-row w-full gap-8'>
            {COMPLIANCE_ITEMS.map(({ label, href, icon }) => (
              <Button
                key={label}
                href={href}
                variant='transparent-white'
                className='flex items-center justify-center gap-2 w-full flex-1'>
                {icon}
                {label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
