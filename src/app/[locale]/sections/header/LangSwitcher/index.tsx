import Link from "next/link";

export function LangSwitcher() {
  return (
    <div className="relative group flex items-center gap-1 cursor-pointer ml-2">
      {/* Trigger */}
      <div className="flex items-center gap-1 text-deep-green">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 1 0 20M12 2a14.5 14.5 0 0 0 0 20M2 12h20" />
        </svg>
        <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
          <path d="M1 1L4.5 5L8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Dropdown — top-4 so it overlaps the trigger, killing the gap */}
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