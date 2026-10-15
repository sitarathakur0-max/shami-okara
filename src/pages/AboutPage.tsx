import { MapPin, Phone, ShoppingBag, Store, Truck, Navigation } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Editorial Header */}
      <div className="bg-[#101827] text-white rounded-3xl p-8 sm:p-12 border border-[#252B36] relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161F30] border border-[#252B36] text-xs text-slate-300">
            <span className="text-[#2878F0] font-semibold">About Shami Mobile</span>
            <span>·</span>
            <span>Venus Chowk, Okara</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Cell Phone Retail at Venus Chowk, Okara
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Shami Mobile is a dedicated cell phone store serving smartphone buyers and mobile users in Okara, Pakistan. Located at Shop #1 in Al Aziz Plaza, we provide direct customer service, in-store shopping, in-store pickup, and smartphone inquiries.
          </p>
        </div>
      </div>

      {/* Editorial Tech Composition Image */}
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
        <img
          src="/src/assets/images/store_tech_composition_1791732988888.jpg"
          alt="Shami Mobile retail technology and smartphone showcase atmosphere"
          referrerPolicy="no-referrer"
          className="w-full h-auto max-h-[500px] object-cover"
        />
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <span>Shami Mobile retail technology showcase · Venus Chowk, Okara</span>
          <span className="font-mono text-[#2878F0]">Plus Code: {STORE_INFO.googleMapsCode}</span>
        </div>
      </div>

      {/* Factual Business Profile Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-[#101827]">
            Store Profile & Verified Operations
          </h2>

          <div className="prose prose-slate text-sm text-slate-600 space-y-4 leading-relaxed">
            <p>
              According to the verified business listing, <strong className="text-slate-900">Shami Mobile</strong> is categorized as a cell phone store positioned at <strong className="text-slate-900">Shop #1, opposite Delhi Sweet, Venus Chowk, Al Aziz Plaza, Block B, Okara, Punjab 56300, Pakistan</strong>.
            </p>
            <p>
              The business provides a central and easily accessible shopping point for customers across Okara seeking to buy smartphones, inquire about device specifications, inspect accessories, or arrange convenient in-store pickup.
            </p>
            <p>
              Store visitors benefit from direct in-person device inspections, transparent model inquiries, and dedicated customer assistance for both Android and iPhone devices.
            </p>
          </div>

          {/* Listed Services Grid */}
          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#2878F0] mb-4">
              Verified Listed Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-[#101827] font-semibold text-sm">
                  <Store className="w-4 h-4 text-[#2878F0]" />
                  <span>In-Store Shopping</span>
                </div>
                <p className="text-xs text-slate-500">
                  Customers are welcome to visit the store to inspect devices and accessories in person.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-[#101827] font-semibold text-sm">
                  <ShoppingBag className="w-4 h-4 text-[#2878F0]" />
                  <span>In-Store Pickup</span>
                </div>
                <p className="text-xs text-slate-500">
                  Coordinate availability by phone and collect your device directly at Shop #1.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-[#101827] font-semibold text-sm">
                  <Truck className="w-4 h-4 text-[#2878F0]" />
                  <span>Delivery Listed</span>
                </div>
                <p className="text-xs text-slate-500">
                  Delivery is listed as a service. Call the store to inquire about coverage and policies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Store Facts Box */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#101827] text-white rounded-2xl p-6 border border-[#252B36] space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#2878F0]">
              Quick Store Facts
            </h3>

            <div className="space-y-3 text-xs text-slate-300 divide-y divide-[#252B36]">
              <div className="pt-2">
                <span className="text-slate-400 block mb-0.5">Business Name</span>
                <span className="text-sm font-semibold text-white">Shami Mobile</span>
              </div>
              <div className="pt-2">
                <span className="text-slate-400 block mb-0.5">Category</span>
                <span className="text-white">Cell phone store</span>
              </div>
              <div className="pt-2">
                <span className="text-slate-400 block mb-0.5">Listed Closing Time</span>
                <span className="text-white">10:00 PM (Call to confirm today's hours)</span>
              </div>
              <div className="pt-2">
                <span className="text-slate-400 block mb-0.5">Postal Code</span>
                <span className="text-white">56300, Okara, Pakistan</span>
              </div>
              <div className="pt-2">
                <span className="text-slate-400 block mb-0.5">Direct Phone</span>
                <a
                  href={STORE_INFO.phoneTel}
                  className="text-[#2878F0] font-semibold text-sm hover:underline"
                >
                  +92 333 8358009
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={STORE_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#2878F0] hover:bg-[#1E63D0] text-white py-2.5 rounded-xl text-xs font-semibold transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Navigate to Store</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-2 text-[#101827] font-semibold">
              <MapPin className="w-4 h-4 text-[#2878F0]" />
              <span>Full Address</span>
            </div>
            <p className="leading-relaxed">
              Shop #1, opposite Delhi Sweet, Venus Chowk, Al Aziz Plaza, Block B, Okara, Punjab 56300, Pakistan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
