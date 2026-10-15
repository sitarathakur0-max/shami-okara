import { useState } from 'react';
import { Phone, CheckCircle, Shield, ShoppingBag } from 'lucide-react';
import { CATALOGUE_ITEMS, ProductItem, STORE_INFO } from '../data/storeData';

interface AndroidPageProps {
  onOpenInquiry: (product: ProductItem) => void;
}

export default function AndroidPage({ onOpenInquiry }: AndroidPageProps) {
  const [brandFilter, setBrandFilter] = useState<'all' | 'Samsung' | 'Xiaomi'>('all');
  const androidItems = CATALOGUE_ITEMS.filter((item) => item.category === 'android');

  const filteredItems = androidItems.filter((item) => {
    if (brandFilter === 'all') return true;
    return item.brand === brandFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Editorial Header */}
      <div className="bg-[#101827] text-white rounded-3xl p-8 sm:p-12 border border-[#252B36] relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161F30] border border-[#252B36] text-xs text-slate-300">
              <span className="text-[#2878F0] font-semibold">Android Smartphones</span>
              <span>·</span>
              <span>Venus Chowk, Okara</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Android Flagship & Mid-Range Phones
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              Explore Samsung Galaxy, Xiaomi, and popular Android smartphones at Shami Mobile in Okara. Contact us directly to check today's stock and arrange in-store pickup.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={STORE_INFO.phoneTel}
                className="inline-flex items-center gap-2 bg-[#2878F0] hover:bg-[#1E63D0] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-md shadow-[#2878F0]/30"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store to Inquire Android Models</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#252B36] bg-[#161F30] shadow-2xl">
              <img
                src="/src/assets/images/category_android_showcase_1791732965682.jpg"
                alt="Android smartphone showcase"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Brand Filters */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl font-bold text-[#101827]">
            Available Android Selections
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Filter by brand or contact Shami Mobile for unlisted Android inquiries.
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl">
          <button
            onClick={() => setBrandFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              brandFilter === 'all'
                ? 'bg-[#101827] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Brands
          </button>
          <button
            onClick={() => setBrandFilter('Samsung')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              brandFilter === 'Samsung'
                ? 'bg-[#101827] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Samsung
          </button>
          <button
            onClick={() => setBrandFilter('Xiaomi')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              brandFilter === 'Xiaomi'
                ? 'bg-[#101827] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Xiaomi
          </button>
        </div>
      </div>

      {/* Devices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#101827]/80 backdrop-blur text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                {item.brand}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="text-[11px] font-semibold text-[#2878F0] uppercase tracking-wider">
                  {item.model}
                </div>
                <h3 className="text-base font-bold text-[#101827]">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 space-y-1 text-xs text-slate-500">
                  <p className="truncate">
                    <span className="font-semibold text-slate-700">Configurations:</span> {item.storageOrVariant}
                  </p>
                  <p className="truncate">
                    <span className="font-semibold text-slate-700">Colors:</span> {item.colorOptions}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.highlights.map((hl, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                    >
                      <CheckCircle className="w-3 h-3 text-[#2878F0]" />
                      {hl}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Stock & Price:</span>
                  <span className="font-semibold text-slate-800">Inquire via Phone</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenInquiry(item)}
                    className="flex items-center justify-center gap-1.5 bg-[#EEF1F5] hover:bg-slate-200 text-[#101827] py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#2878F0]" />
                    <span>Inquire</span>
                  </button>
                  <a
                    href={STORE_INFO.phoneTel}
                    className="flex items-center justify-center gap-1 bg-[#2878F0] hover:bg-[#1E63D0] text-white py-2 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Store</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Android Shopping Note */}
      <div className="bg-[#101827] text-white rounded-2xl p-6 sm:p-8 border border-[#252B36] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 max-w-xl">
          <div className="flex items-center gap-2 text-[#2878F0] font-semibold text-xs uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            <span>In-Store Inspection & Verification</span>
          </div>
          <h3 className="text-base font-bold text-white">
            Need assistance choosing between Android processors, camera setups, or battery sizes?
          </h3>
          <p className="text-xs text-slate-300">
            Visit Shami Mobile at Shop #1, Al Aziz Plaza, Venus Chowk, Okara to discuss your requirements with our store team.
          </p>
        </div>
        <a
          href={STORE_INFO.phoneTel}
          className="inline-flex items-center gap-2 bg-[#2878F0] hover:bg-[#1E63D0] text-white px-5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span>Call +92 333 8358009</span>
        </a>
      </div>
    </div>
  );
}
