import Link from "next/link";
import { FooterLinks } from "./FooterLinks";
import { TopBanner } from "./TopBanner";

const AI_LINKS = [
  { href: "https://chat.openai.com/?q=Summarize%20Segura%C2%AE", label: "ChatGPT" },
  { href: "https://www.perplexity.ai/search/?q=Summarize%20Segura%C2%AE", label: "Perplexity" },
  { href: "https://copilot.microsoft.com/shares/BjcyHPhPMtx2R91uCaN2G", label: "Copilot" },
  { href: "https://www.google.com/search?udm=50&q=Summarize%20Segura%C2%AE", label: "Gemini" },
  { href: "https://grok.com/c/fe688ad2-d18b-43f9-9bb3-45948a13bb04", label: "Grok" },
];

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/company/segurasecurity/", label: "LinkedIn" },
  { href: "https://x.com/segura_security", label: "X" },
  { href: "https://www.facebook.com/seguraidentity", label: "Facebook" },
  { href: "https://instagram.com/segura.security", label: "Instagram" },
  { href: "https://www.youtube.com/channel/UCpDms35l3tcrfb8kZSpeNYw", label: "YouTube" },
  { href: "https://wa.me/5511974829520", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <>
    <TopBanner />
    <FooterLinks />
    <footer className="bg-password-green" style={{ fontFamily: "Inter, Arial, sans-serif", fontSize: "14px" }}>
      <div className="py-8 px-37 flex flex-col md:flex-row gap-10 w-full justify-between">

        {/* Left — AI + copyright */}
        <div className="flex flex-col gap-3">
          <p className="font-light text-deep-green">Ask AI for a summary of Segura®</p>
          <div className="flex gap-3">
            {AI_LINKS.map(({ href, label }) => (
              <Link key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-go-green/10 transition-colors font-semibold text-deep-green border border-deep-green/20"
                title={label}
              >
                {label.slice(0, 2)}
              </Link>
            ))}
          </div>
          <p className="font-light text-deep-green">
            Copyright © 2026 Segura MT4 Tecnologia | All rights reserved.
          </p>
        </div>

        {/* Right — social + legal */}
        <div className="flex flex-col gap-4 md:items-end justify-end">
          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ href, label }) => (
              <Link key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-go-green/10 transition-colors font-semibold text-deep-green border border-deep-green/20"
                title={label}
              >
                {label.slice(0, 2)}
              </Link>
            ))}
          </div>
          <div className="flex gap-8">
            <Link href="/privacy-and-cookie-statement" className="font-light text-deep-green hover:text-go-green transition-colors">Terms</Link>
            <Link href="/privacy-and-cookie-statement" className="font-light text-deep-green hover:text-go-green transition-colors">Privacy</Link>
            <Link href="/privacy-and-cookie-statement" className="font-light text-deep-green hover:text-go-green transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
        </>
  );
}