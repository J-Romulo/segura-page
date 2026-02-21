import Link from 'next/link';
import { Earth, ChevronDown } from 'lucide-react';

export function LangSwitcher() {
  return (
    <div className="group relative flex cursor-pointer items-center gap-1">
      <div className="text-deep-green flex items-center gap-1">
        <Earth size={20} strokeWidth={1.75} />
        <ChevronDown size={14} strokeWidth={2.5} />
      </div>

      <div className="absolute top-5 -right-16 z-50 w-fit bg-white px-2 pt-8 pb-6 opacity-0 shadow-xl delay-700 duration-300 ease-in-out group-hover:opacity-100">
        <ul className="flex flex-col items-center gap-2">
          <li>
            <Link
              href="/"
              className="text-deep-green hover:bg-mint-green/10 hover:text-mid-green flex px-3 py-2 font-normal transition-colors hover:rounded-lg"
            >
              English
            </Link>
          </li>
          <li>
            <Link
              href="/pt-br"
              className="text-deep-green hover:bg-mint-green/10 hover:text-mid-green flex px-3 py-2 font-normal transition-colors hover:rounded-lg"
            >
              Português
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
