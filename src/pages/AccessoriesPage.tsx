import { Phone, CheckCircle, Zap } from 'lucide-react';
import { CATALOGUE_ITEMS, ProductItem, STORE_INFO } from '../data/storeData';

interface AccessoriesPageProps {
  onOpenInquiry: (product: ProductItem) => void;
}

export default function AccessoriesPage({ onOpenInquiry }: AccessoriesPageProps) {
  const accessoryItems = CATALOGUE_ITEMS.filter((item) => item.category === 'accessories');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="bg-[#101827] text-white rounded-3xl p-8 sm:p-12 border border-[#252B36] relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161F30] border border-[#252B36] text-xs text-slate-300">
              <span className="text-[#2878F0] font-semibold">Mobile Accessories</span>
              <span>·</span>
              <span>Venus Chowk, Okara</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Chargers, Cables & Protection Gear
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              Find reliable mobile charging solutions, braided data cables, audio gear, tempered glass protectors, and smartphone cases at Shami Mobile in Okara.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={STORE_INFO.phoneTel}
                className="inline-flex items-center gap-2 bg-[#2878F0] hover:bg-[#1E63D0] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-md shadow-[#2878F0]/30"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store for Accessories Stock</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#252B36] bg-[#161F30] shadow-2xl">
              <img
                src="/src/assets/images/category_accessories_showcase_1791732977396.jpg"
                alt="Mobile accessories showcase"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Accessories Grid */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#2878F0]">
            Essentials
          </span>
          <h2 className="text-2xl font-bold text-[#101827] mt-1">
            Mobile Accessories Catalogue
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Available for direct inspection and in-store pickup at Shop #1, Al Aziz Plaza, Okara.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessoryItems.map((item) => (
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
                  {item.model}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-[#101827] leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-1 text-[11px] text-slate-500 space-y-0.5">
                    <p className="truncate">
                      <span className="font-semibold text-slate-700">Spec:</span> {item.storageOrVariant}
                    </p>
                    <p className="truncate">
                      <span className="font-semibold text-slate-700">Colors:</span> {item.colorOptions}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col gap-1">
                    {item.highlights.map((hl, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[10px] text-slate-600"
                      >
                        <CheckCircle className="w-3 h-3 text-[#2878F0] shrink-0" />
                        <span>{hl}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Retail Rate:</span>
                    <span className="font-semibold text-slate-800">Inquire in Store</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenInquiry(item)}
                      className="w-full bg-[#EEF1F5] hover:bg-slate-200 text-[#101827] py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                    <a
                      href={STORE_INFO.phoneTel}
                      className="flex items-center justify-center gap-1 bg-[#2878F0] hover:bg-[#1E63D0] text-white py-1.5 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Screen Protection & In-Store Installation */}
      <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 max-w-xl">
          <div className="flex items-center gap-2 text-[#2878F0] font-semibold text-xs uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            <span>In-Store Application Service</span>
          </div>
          <h3 className="text-base font-bold text-[#101827]">
            Professional Screen Protector Fitting in Okara
          </h3>
          <p className="text-xs text-slate-600">
            Visit Shami Mobile at Venus Chowk, Okara to have 9H tempered glass screen protectors aligned cleanly with precision on your device.
          </p>
        </div>
        <a
          href={STORE_INFO.phoneTel}
          className="inline-flex items-center gap-2 bg-[#101827] hover:bg-[#1A2333] text-white px-5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors"
        >
          <Phone className="w-4 h-4 text-[#2878F0]" />
          <span>Call +92 333 8358009</span>
        </a>
      </div>
    </div>
  );
}
