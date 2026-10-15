import { MapPin, Phone, Navigation } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101827] text-slate-300 border-t border-[#252B36] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#252B36]">
          {/* Brand & Factual Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#2878F0] flex items-center justify-center font-bold text-white shadow-md">
                S
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Shami Mobile
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Official cell phone store located at Venus Chowk, Okara. Providing in-store shopping, in-store pickup, and customer assistance for smartphones and mobile accessories.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#161F30] border border-[#252B36] text-xs">
                <span className="w-2 h-2 rounded-full bg-[#2878F0]" />
                <span className="font-semibold text-white">In-Store Shopping & Pickup</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Explore Store
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('shop')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Shop / Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('iphones')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  iPhones
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('android')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Android Phones
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('accessories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Mobile Accessories
                </button>
              </li>
            </ul>
          </div>

          {/* Business & Support */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Store Information
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Shami Mobile
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Store Location
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faqs')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Store Location & Contact */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Store Location
            </h4>
            <div className="flex items-start gap-2.5 text-sm">
              <MapPin className="w-4 h-4 text-[#2878F0] shrink-0 mt-0.5" />
              <div className="leading-snug text-slate-300">
                <p>Shop #1, opposite Delhi Sweet</p>
                <p>Venus Chowk, Al Aziz Plaza, Block B</p>
                <p>Okara, 56300, Pakistan</p>
                <p className="text-xs text-[#8B97AA] mt-1 font-mono">
                  Plus Code: {STORE_INFO.googleMapsCode}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-sm pt-1">
              <Phone className="w-4 h-4 text-[#2878F0] shrink-0" />
              <a
                href={STORE_INFO.phoneTel}
                className="text-white hover:text-[#2878F0] font-semibold transition-colors"
              >
                +92 333 8358009
              </a>
            </div>

            <div className="pt-2">
              <a
                href={STORE_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#161F30] hover:bg-[#252B36] border border-[#252B36] text-xs font-medium text-white transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#2878F0]" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Listing Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Shami Mobile. All rights reserved.</p>
          <p className="text-center md:text-right">
            Store listing information derived from business profile.
            Listed closing time: 10:00 PM. Call to confirm today's opening schedule.
          </p>
        </div>
      </div>
    </footer>
  );
}
