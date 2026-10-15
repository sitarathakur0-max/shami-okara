import { PhoneCall } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function FloatingCallButton() {
  return (
    <aside aria-label="Quick Phone Contact" className="fixed left-4 bottom-5 md:left-6 md:bottom-7 z-50">
      <a
        href={STORE_INFO.phoneTel}
        aria-label="Call Shami Mobile at +92 333 8358009"
        className="group flex items-center gap-2.5 bg-[#2878F0] hover:bg-[#1E63D0] active:scale-95 text-white shadow-xl shadow-[#2878F0]/35 px-4 py-3 md:px-5 md:py-3.5 rounded-full font-medium text-sm transition-all duration-200 border border-blue-400/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2878F0]/50"
      >
        <span className="flex items-center justify-center w-6 h-6 shrink-0">
          <PhoneCall className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
        </span>
        <span className="hidden sm:inline font-semibold tracking-tight whitespace-nowrap">
          Call Shami Mobile
        </span>
        <span className="hidden lg:inline text-xs font-normal text-blue-100 pl-1 border-l border-blue-400/40">
          +92 333 8358009
        </span>
        <span className="sm:hidden font-semibold text-xs tracking-tight">
          Call Store
        </span>
      </a>
    </aside>
  );
}
