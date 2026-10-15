import { ArrowRight, Phone, MapPin, CheckCircle2, ShoppingBag, Truck, Store, ExternalLink, ShieldCheck } from 'lucide-react';
import { STORE_INFO, ProductItem } from '../data/storeData';
import { PageId } from '../components/Navbar';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (product: ProductItem) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <section className="relative bg-[#101827] text-white overflow-hidden border-b border-[#252B36]">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#2878F0_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161F30] border border-[#252B36] text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#2878F0]" />
                <span className="font-medium">Venus Chowk, Okara</span>
                <span className="text-[#8B97AA]">·</span>
                <span className="text-[#8B97AA]">Shop #1, Al Aziz Plaza</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
                Your Next Smartphone Starts Here.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Explore Shami Mobile in Okara for smartphone shopping, in-store pickup, and customer assistance.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => onNavigate('shop')}
                  className="inline-flex items-center gap-2 bg-[#2878F0] hover:bg-[#1E63D0] text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-[#2878F0]/30 active:scale-98 cursor-pointer"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={STORE_INFO.phoneTel}
                  className="inline-flex items-center gap-2 bg-[#252B36] hover:bg-[#1E2532] border border-[#333C4D] text-white px-5 py-3.5 rounded-xl font-semibold text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-[#2878F0]" />
                  <span>Call Shami Mobile</span>
                </a>
              </div>

              {/* Micro Trust Bar */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2878F0]" />
                  <span>In-Store Shopping & Pickup</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2878F0]" />
                  <span>Delivery Listed Available</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual: Realistic Flagship Smartphone Photography */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border border-[#252B36] bg-[#161F30]">
                <img
                  src="/src/assets/images/hero_smartphone_showcase_1791732940395.jpg"
                  alt="Premium smartphone product showcase with refined studio lighting"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-[16/10] sm:aspect-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101827]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 bg-[#101827]/80 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10">
                  <div>
                    <p className="font-semibold text-white">Shami Mobile Showcase</p>
                    <p className="text-[11px] text-[#8B97AA]">Venus Chowk, Okara</p>
                  </div>
                  <a
                    href={STORE_INFO.phoneTel}
                    className="text-[#2878F0] font-semibold hover:underline"
                  >
                    +92 333 8358009
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust and Service Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* In-Store Shopping */}
            <div className="space-y-1.5 md:pr-6">
              <div className="flex items-center gap-2 text-[#101827]">
                <Store className="w-5 h-5 text-[#2878F0]" />
                <h2 className="text-base font-bold">In-Store Shopping</h2>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Visit Shop #1 at Al Aziz Plaza, Venus Chowk to inspect phones and accessories in person.
              </p>
              <span className="inline-block text-[11px] text-[#2878F0] font-medium">
                Open · Listed closing: 10:00 PM
              </span>
            </div>

            {/* In-Store Pickup */}
            <div className="space-y-1.5 pt-4 md:pt-0 md:px-6">
              <div className="flex items-center gap-2 text-[#101827]">
                <ShoppingBag className="w-5 h-5 text-[#2878F0]" />
                <h2 className="text-base font-bold">In-Store Pickup</h2>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Call ahead to confirm device availability and pick it up directly from the store.
              </p>
              <span className="inline-block text-[11px] text-slate-500">
                Quick phone confirmation
              </span>
            </div>

            {/* Delivery Listed as Available */}
            <div className="space-y-1.5 pt-4 md:pt-0 md:pl-6">
              <div className="flex items-center gap-2 text-[#101827]">
                <Truck className="w-5 h-5 text-[#2878F0]" />
                <h2 className="text-base font-bold">Delivery Listed Available</h2>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Listed as an available service. Inquire by phone for delivery coverage and terms.
              </p>
              <a
                href={STORE_INFO.phoneTel}
                className="inline-block text-[11px] text-[#2878F0] font-semibold hover:underline"
              >
                Call +92 333 8358009
              </a>
            </div>
          </div>

          {/* Verification link to Google Maps */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>
              Verified store details from business profile (Code: {STORE_INFO.googleMapsCode}).
            </p>
            <a
              href={STORE_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#2878F0] font-semibold hover:text-[#1E63D0]"
            >
              <span>View Location on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. Featured Shopping Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2878F0]">
              Browse Catalogue
            </span>
            <h2 className="text-2xl font-bold text-[#101827] mt-1">
              Featured Shopping Categories
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            Categories represent store inquiry domains. Contact store to confirm currently stocked models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Category 1: iPhones */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
            <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
              <img
                src="/src/assets/images/category_iphone_showcase_1791732952203.jpg"
                alt="iPhones category showcase"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 bg-[#101827]/80 backdrop-blur text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                Apple Devices
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[#101827]">iPhones</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Flagship Apple smartphone inquiries. Inspect models, storage options, and accessories in person at Venus Chowk.
                </p>
              </div>
              <button
                onClick={() => onNavigate('iphones')}
                className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#2878F0] group-hover:text-[#1E63D0] pt-2 border-t border-slate-100 cursor-pointer"
              >
                <span>Browse iPhones Category</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Category 2: Android Phones */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
            <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
              <img
                src="/src/assets/images/category_android_showcase_1791732965682.jpg"
                alt="Android smartphones category showcase"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 bg-[#101827]/80 backdrop-blur text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                Android Ecosystem
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[#101827]">Android Smartphones</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Samsung Galaxy, Xiaomi, and popular Android smartphone inquiries with fast charging and versatile camera options.
                </p>
              </div>
              <button
                onClick={() => onNavigate('android')}
                className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#2878F0] group-hover:text-[#1E63D0] pt-2 border-t border-slate-100 cursor-pointer"
              >
                <span>Browse Android Phones</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Category 3: Mobile Accessories */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
            <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
              <img
                src="/src/assets/images/category_accessories_showcase_1791732977396.jpg"
                alt="Mobile accessories category showcase"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 bg-[#101827]/80 backdrop-blur text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                Essential Gear
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[#101827]">Mobile Accessories</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Fast-charging USB-C & Lightning cables, power adapters, tempered screen protectors, and audio accessories in Okara.
                </p>
              </div>
              <button
                onClick={() => onNavigate('accessories')}
                className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#2878F0] group-hover:text-[#1E63D0] pt-2 border-t border-slate-100 cursor-pointer"
              >
                <span>Browse Accessories</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Visit Shami Mobile? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#101827] text-white rounded-2xl p-8 sm:p-10 border border-[#252B36]">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2878F0]">
              Local Cell Phone Retailer
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1 tracking-tight">
              Why Visit Shami Mobile in Okara?
            </h2>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              We focus on convenient phone contact, in-store shopping, in-store pickup, and direct assistance with smartphone inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-[#161F30] p-6 rounded-xl border border-[#252B36] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#2878F0]/15 flex items-center justify-center text-[#2878F0]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Central Okara Location</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Situated at Shop #1, opposite Delhi Sweet, Venus Chowk, Al Aziz Plaza, Block B. Accessible from all major parts of Okara.
              </p>
            </div>

            <div className="bg-[#161F30] p-6 rounded-xl border border-[#252B36] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#2878F0]/15 flex items-center justify-center text-[#2878F0]">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Direct Stock Consultation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Call +92 333 8358009 directly to get transparent, daily market prices and verify available storage variants before making the trip.
              </p>
            </div>

            <div className="bg-[#161F30] p-6 rounded-xl border border-[#252B36] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#2878F0]/15 flex items-center justify-center text-[#2878F0]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">In-Store Shopping & Inspection</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Inspect devices, confirm specifications, and explore authentic accessories with our dedicated in-store assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Location and Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#161F30] to-[#101827] text-white rounded-2xl p-8 sm:p-10 border border-[#252B36]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2878F0]">
                Store Hours & Location
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Visit Us at Venus Chowk, Okara
              </h2>
              <div className="space-y-1.5 text-sm text-slate-300">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#2878F0] shrink-0" />
                  <span>Shop #1, opposite Delhi Sweet, Venus Chowk, Al Aziz Plaza, Block B, Okara</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#2878F0] shrink-0" />
                  <span>Telephone: +92 333 8358009</span>
                </p>
                <p className="text-xs text-[#8B97AA] pl-6">
                  Listed closing time: 10:00 PM. (Opening schedule not fully supplied; please call before visiting).
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={STORE_INFO.phoneTel}
                className="flex items-center justify-center gap-2 bg-[#2878F0] hover:bg-[#1E63D0] text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all shadow-md shadow-[#2878F0]/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store</span>
              </a>

              <a
                href={STORE_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#252B36] hover:bg-[#2F3746] text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all border border-[#3A4354]"
              >
                <MapPin className="w-4 h-4 text-[#2878F0]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
