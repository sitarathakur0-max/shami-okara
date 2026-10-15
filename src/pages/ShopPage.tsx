import { useState, useMemo } from 'react';
import { Search, Phone, Info, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { CATALOGUE_ITEMS, ProductItem, STORE_INFO } from '../data/storeData';

interface ShopPageProps {
  onOpenInquiry: (product: ProductItem) => void;
  initialCategory?: 'all' | 'iphones' | 'android' | 'accessories';
}

export default function ShopPage({ onOpenInquiry, initialCategory = 'all' }: ShopPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'iphones' | 'android' | 'accessories'>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return CATALOGUE_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="bg-[#101827] text-white rounded-2xl p-8 sm:p-10 border border-[#252B36] space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161F30] border border-[#252B36] text-xs text-[#8B97AA]">
          <span>Shami Mobile Product Catalogue</span>
          <span>·</span>
          <span>Venus Chowk, Okara</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Shop & Browse Smartphone Catalogue
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          Explore our smartphone and mobile accessory lines. To ensure 100% accurate market pricing and verify current in-stock storage variants or PTA status, inquire directly with our store team.
        </p>

        {/* Responsible pricing notice */}
        <div className="pt-2 flex items-start gap-3 bg-[#161F30] p-4 rounded-xl border border-[#252B36] text-xs text-slate-300">
          <Info className="w-4 h-4 text-[#2878F0] shrink-0 mt-0.5" />
          <p>
            <span className="font-semibold text-white">Daily Market Pricing Policy: </span>
            Mobile market rates, PTA approval categories, and storage variant inventory in Pakistan update on a daily basis. Shami Mobile provides real-time quotes via phone (+92 333 8358009) or during your store visit at Venus Chowk, Okara.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Category Tabs (Interactive Filter Controls) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl w-full md:w-auto overflow-x-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-white text-[#101827] shadow-sm'
                  : 'text-slate-600 hover:text-[#101827]'
              }`}
            >
              All Items ({CATALOGUE_ITEMS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('iphones')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'iphones'
                  ? 'bg-white text-[#101827] shadow-sm'
                  : 'text-slate-600 hover:text-[#101827]'
              }`}
            >
              iPhones
            </button>
            <button
              onClick={() => setSelectedCategory('android')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'android'
                  ? 'bg-white text-[#101827] shadow-sm'
                  : 'text-slate-600 hover:text-[#101827]'
              }`}
            >
              Android Phones
            </button>
            <button
              onClick={() => setSelectedCategory('accessories')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'accessories'
                  ? 'bg-white text-[#101827] shadow-sm'
                  : 'text-slate-600 hover:text-[#101827]'
              }`}
            >
              Accessories
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search phone or model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2878F0] focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute top-3 left-3 bg-[#101827]/80 backdrop-blur text-white text-[10px] font-semibold px-2.5 py-1 rounded">
                  {item.brand}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-slate-800 text-[10px] font-semibold px-2.5 py-1 rounded shadow-sm">
                  In-Store Inquiry
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-[11px] font-semibold text-[#2878F0] uppercase tracking-wider">
                    {item.model}
                  </div>
                  <h3 className="text-base font-bold text-[#101827] leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 text-xs text-slate-500 space-y-1">
                    <p className="truncate">
                      <span className="font-medium text-slate-700">Variants:</span> {item.storageOrVariant}
                    </p>
                    <p className="truncate">
                      <span className="font-medium text-slate-700">Colors:</span> {item.colorOptions}
                    </p>
                  </div>
                </div>

                {/* Stock Status & CTAs */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Market Rate:</span>
                    <span className="font-semibold text-slate-800">
                      Inquire by Phone
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenInquiry(item)}
                      className="flex items-center justify-center gap-1.5 bg-[#EEF1F5] hover:bg-slate-200 text-[#101827] py-2 px-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#2878F0]" />
                      <span>Details</span>
                    </button>

                    <a
                      href={STORE_INFO.phoneTel}
                      className="flex items-center justify-center gap-1.5 bg-[#2878F0] hover:bg-[#1E63D0] text-white py-2 px-3 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm space-y-4 max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#101827]">
            Looking for a specific device?
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            No models matched "{searchQuery}". Call Shami Mobile directly at +92 333 8358009 to inquire about any phone, storage variant, or accessory.
          </p>
          <div className="pt-2">
            <a
              href={STORE_INFO.phoneTel}
              className="inline-flex items-center gap-2 bg-[#2878F0] text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#1E63D0] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Store: +92 333 8358009</span>
            </a>
          </div>
        </div>
      )}

      {/* In-Store Pickup Banner */}
      <div className="bg-[#101827] text-white rounded-2xl p-6 sm:p-8 border border-[#252B36] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-base font-bold text-white">
            Prefer to pick up in person at Venus Chowk, Okara?
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Call us ahead to confirm availability, and we will hold the unit for you to inspect in Shop #1, Al Aziz Plaza.
          </p>
        </div>
        <a
          href={STORE_INFO.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#252B36] hover:bg-[#1E2532] text-white border border-[#333C4D] px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors"
        >
          <span>Get Directions to Store</span>
          <ArrowUpRight className="w-4 h-4 text-[#2878F0]" />
        </a>
      </div>
    </div>
  );
}
