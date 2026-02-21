import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FooterLinks } from "./footerLinks";

import GptIcon from "../../../assets/ai/gpt.svg";
import PerplexityIcon from "../../../assets/ai/perplexity.svg";
import CopilotIcon from "../../../assets/ai/copilot.svg";
import GeminiIcon from "../../../assets/ai/gemini.svg";
import GrokIcon from "../../../assets/ai/grok.svg";

import LinkedInIcon from "../../../assets/social/linkedin.svg";
import XIcon from "../../../assets/social/x.svg";
import FacebookIcon from "../../../assets/social/facebook.svg";
import InstagramIcon from "../../../assets/social/instagram.svg";
import YouTubeIcon from "../../../assets/social/youtube.svg";
import WhatsAppIcon from "../../../assets/social/whatsapp.svg";

const AI_LINKS = [
  { href: "https://chat.openai.com/?q=Summarize%20Segura%C2%AE", label: "ChatGPT", icon: GptIcon},
  { href: "https://www.perplexity.ai/search/?q=Summarize%20Segura%C2%AE", label: "Perplexity", icon: PerplexityIcon },
  { href: "https://copilot.microsoft.com/shares/BjcyHPhPMtx2R91uCaN2G", label: "Copilot", icon: CopilotIcon },
  { href: "https://www.google.com/search?udm=50&q=Summarize%20Segura%C2%AE", label: "Gemini", icon: GeminiIcon },
  { href: "https://grok.com/c/fe688ad2-d18b-43f9-9bb3-45948a13bb04", label: "Grok", icon: GrokIcon },
];

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/company/segurasecurity/", label: "LinkedIn", icon: LinkedInIcon },
  { href: "https://x.com/segura_security", label: "X", icon: XIcon },
  { href: "https://www.facebook.com/seguraidentity", label: "Facebook", icon: FacebookIcon },
  { href: "https://instagram.com/segura.security", label: "Instagram", icon: InstagramIcon },
  { href: "https://www.youtube.com/channel/UCpDms35l3tcrfb8kZSpeNYw", label: "YouTube", icon: YouTubeIcon },
  { href: "https://wa.me/5511974829520", label: "WhatsApp", icon: WhatsAppIcon },
];

export default function Footer() {
  const translation = useTranslations("footer");

  return (
    <>
      <FooterLinks />
      <footer className="bg-password-green font-sans text-[14px]">
        <div className="py-8 px-37 flex flex-col md:flex-row gap-10 w-full justify-between">

          <div className="flex flex-col gap-3">
            <p className="font-light text-deep-green">{translation("askAI")}</p>
            <div className="flex gap-5">
              {AI_LINKS.map(({ href, label, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Image src={icon} alt={label} width={29} height={29} />
                </Link>
              ))}
            </div>
            <p className="font-light text-deep-green">{translation("copyright")}</p>
          </div>

          <div className="flex flex-col gap-4 md:items-end justify-end">
            <div className="flex gap-2 mb-2">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="flex items-center justify-center"
                >
                  <Image src={icon} alt={label} width={28} height={28} />
                </Link>
              ))}
            </div>
            <div className="flex gap-8">
              <Link href="/privacy-and-cookie-statement" className="font-light text-deep-green">{translation("terms")}</Link>
              <Link href="/privacy-and-cookie-statement" className="font-light text-deep-green">{translation("privacy")}</Link>
              <Link href="/privacy-and-cookie-statement" className="font-light text-deep-green">{translation("cookies")}</Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}