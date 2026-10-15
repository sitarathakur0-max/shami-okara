import { useState } from 'react';
import { Menu, X, Phone, MapPin, ChevronRight } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export type PageId =
  | 'home'
  | 'shop'
  | 'iphones'
  | 'android'
  | 'accessories'
  | 'about'
  | 'contact'
  | 'faqs';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'iphones', label: 'iPhones' },
    { id: 'android', label: 'Android' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#101827] text-white border-b border-[#252B36]/80 backdrop-blur-md">
      {/* Top micro banner for verified location reference */}
      <div className="bg-[#161F30] border-b border-[#252B36] px-4 py-1.5 text-xs text-[#8B97AA]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 truncate">
            <MapPin className="w-3.5 h-3.5 text-[#2878F0] shrink-0" />
            <span className="truncate">Venus Chowk, Al Aziz Plaza, Block B, Okara</span>
          </div>
          <div className="flex items-center gap-3 shrink-0 text-[11px]">
            <span className="text-slate-300">Listed Closing: 10:00 PM</span>
            <span className="text-[#8B97AA] hidden sm:inline">·</span>
            <span className="hidden sm:inline text-slate-300">In-Store Shopping & Pickup</span>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 zones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2878F0] rounded"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2878F0] to-[#1E63D0] flex items-center justify-center font-bold text-white shadow-md shadow-[#2878F0]/30 text-base">
              S
            </div>
            <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0">
              Shami Mobile
            </span>
          </button>

          {/* Zone 2: Single-line text navigation links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`cursor-pointer transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                    isActive
                      ? 'text-white border-[#2878F0] font-semibold'
                      : 'border-transparent text-slate-300 hover:text-white hover:border-slate-500'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={STORE_INFO.phoneTel}
              className="inline-flex items-center gap-2 bg-[#2878F0] hover:bg-[#1E63D0] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 shadow-sm shadow-[#2878F0]/20 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call Store</span>
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={STORE_INFO.phoneTel}
              aria-label="Call Store"
              className="sm:hidden p-2 rounded-lg bg-[#2878F0] text-white"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#252B36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2878F0]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#252B36] bg-[#101827] px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-left text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#2878F0] text-white font-semibold'
                      : 'text-slate-300 hover:bg-[#252B36] hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-[#252B36] flex flex-col gap-2">
            <a
              href={STORE_INFO.phoneTel}
              className="flex items-center justify-center gap-2 w-full bg-[#2878F0] hover:bg-[#1E63D0] text-white py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Store: +92 333 8358009</span>
            </a>
            <p className="text-center text-xs text-[#8B97AA] mt-1">
              Shop #1, Venus Chowk, Al Aziz Plaza, Okara
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
