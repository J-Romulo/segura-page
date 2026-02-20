import Link from "next/link";
import { Earth, ChevronDown } from "lucide-react";

export function LangSwitcher() {
  return (
    <div className="relative group flex items-center gap-1 cursor-pointer">
      <div className="flex items-center gap-1 text-deep-green">
        <Earth size={20} strokeWidth={1.75} />
        <ChevronDown size={14} strokeWidth={2.5} />
      </div>

      <div className="absolute top-5 -right-16 w-fit opacity-0 group-hover:opacity-100 ease-in-out duration-300 delay-700 shadow-xl bg-white pb-6 pt-8 px-2 z-50">
        <ul className="flex flex-col gap-2 items-center">
          <li>
            <Link href="/" className="flex py-2 px-3 text-deep-green font-normal hover:bg-mint-green/10 hover:rounded-lg hover:text-mid-green transition-colors">
              English
            </Link>
          </li>
          <li>
            <Link href="/pt-br" className="flex py-2 px-3 text-deep-green font-normal hover:bg-mint-green/10 hover:rounded-lg hover:text-mid-green transition-colors">
              Português
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}