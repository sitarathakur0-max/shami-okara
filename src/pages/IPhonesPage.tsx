import { Phone, ShieldCheck, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { CATALOGUE_ITEMS, ProductItem, STORE_INFO } from '../data/storeData';

interface IPhonesPageProps {
  onOpenInquiry: (product: ProductItem) => void;
}

export default function IPhonesPage({ onOpenInquiry }: IPhonesPageProps) {
  const iphoneItems = CATALOGUE_ITEMS.filter((item) => item.category === 'iphones');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Editorial Hero */}
      <div className="bg-[#101827] text-white rounded-3xl p-8 sm:p-12 border border-[#252B36] relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161F30] border border-[#252B36] text-xs text-slate-300">
              <span className="text-[#2878F0] font-semibold">Apple Inquiries</span>
              <span>·</span>
              <span>Shami Mobile, Okara</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              iPhone Selection & In-Store Inquiries
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              Explore iPhone options at Shami Mobile, Venus Chowk, Okara. Inquire for in-stock models, storage variants, and in-store pickup options.
            </p>

            {/* Service & Verification Notice */}
            <div className="bg-[#161F30] p-4 rounded-2xl border border-[#252B36] text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#2878F0]" />
                <span>Verified Local Retailer Guidance</span>
              </div>
              <p className="leading-relaxed text-slate-400">
                Shami Mobile is a premier local cell phone store in Okara. We do not claim official Apple Authorized Reseller status. All PTA approval statuses, battery conditions, and warranty details are verified transparently in person or via telephone.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={STORE_INFO.phoneTel}
                className="inline-flex items-center gap-2 bg-[#2878F0] hover:bg-[#1E63D0] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-md shadow-[#2878F0]/30"
              >
                <Phone className="w-4 h-4" />
                <span>Call for Current iPhone Stock</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#252B36] bg-[#161F30] shadow-2xl">
              <img
                src="/src/assets/images/category_iphone_showcase_1791732952203.jpg"
                alt="iPhone premium flagship showcase"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* iPhone Device Inquiry Grid */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#2878F0]">
            Curated Models
          </span>
          <h2 className="text-2xl font-bold text-[#101827] mt-1">
            Inquire for Popular iPhone Models
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Storage options and market rates vary. Contact us for today's live stock and in-store pickup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {iphoneItems.map((item) => (
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

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-[#101827] leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 space-y-1 text-xs text-slate-500">
                    <p className="truncate">
                      <span className="font-semibold text-slate-700">Storage:</span> {item.storageOrVariant}
                    </p>
                    <p className="truncate">
                      <span className="font-semibold text-slate-700">Finishes:</span> {item.colorOptions}
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
                    <span className="text-slate-500">Pricing:</span>
                    <span className="font-semibold text-slate-800">Market Rate on Call</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenInquiry(item)}
                      className="w-full bg-[#EEF1F5] hover:bg-slate-200 text-[#101827] py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Check Specs
                    </button>
                    <a
                      href={STORE_INFO.phoneTel}
                      className="flex items-center justify-center gap-1 bg-[#2878F0] hover:bg-[#1E63D0] text-white py-2 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* In-Store Guidance */}
      <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
        <h3 className="text-base font-bold text-[#101827]">
          What to Verify When Purchasing an iPhone in Pakistan:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5">
            <p className="font-semibold text-[#101827]">1. PTA Official Registration</p>
            <p>Always verify whether the device is PTA approved or non-PTA, as tax amounts differ significantly.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5">
            <p className="font-semibold text-[#101827]">2. Physical SIM vs eSIM</p>
            <p>Confirm whether the variant supports physical nano-SIM or eSIM configurations before purchasing.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5">
            <p className="font-semibold text-[#101827]">3. In-Person Inspection</p>
            <p>Visit Shami Mobile at Shop #1, Venus Chowk, Okara to inspect the phone prior to in-store pickup.</p>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-slate-500 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#2878F0]" />
            Shop #1, opposite Delhi Sweet, Venus Chowk, Al Aziz Plaza, Block B, Okara
          </span>
          <a
            href={STORE_INFO.phoneTel}
            className="text-[#2878F0] font-semibold hover:underline inline-flex items-center gap-1"
          >
            <span>Call +92 333 8358009 for today's iPhone stock</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
