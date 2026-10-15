import { useState } from 'react';
import { MapPin, Phone, Clock, Store, ShoppingBag, Truck, Navigation, Copy, Check, Send } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function ContactPage() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    deviceOrService: '',
    message: '',
  });

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE_INFO.fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(STORE_INFO.googleMapsCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setInquirySubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="bg-[#101827] text-white rounded-3xl p-8 sm:p-12 border border-[#252B36] relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161F30] border border-[#252B36] text-xs text-slate-300">
            <span className="text-[#2878F0] font-semibold">Store Location & Contact</span>
            <span>·</span>
            <span>Venus Chowk, Okara</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Contact Shami Mobile in Okara
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Visit our store at Venus Chowk, call for direct stock availability, or coordinate in-store pickup for your next smartphone.
          </p>
        </div>
      </div>

      {/* Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Store Information Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-[#101827]">
              Store Coordinates & Address
            </h2>

            {/* Address item */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-[#2878F0]/15 flex items-center justify-center text-[#2878F0] shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[#2878F0]">
                  Full Listed Address
                </p>
                <p className="text-sm font-semibold text-[#101827] leading-relaxed">
                  Shop #1, opposite Delhi Sweet, Venus Chowk, Al Aziz Plaza, Block B
                </p>
                <p className="text-xs text-slate-500">
                  Okara 56300, Punjab, Pakistan
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 hover:text-[#101827] transition-colors cursor-pointer"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  <a
                    href={STORE_INFO.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#2878F0] text-white text-xs font-semibold hover:bg-[#1E63D0] transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone item */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-[#2878F0]/15 flex items-center justify-center text-[#2878F0] shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[#2878F0]">
                  Official Telephone Link
                </p>
                <p className="text-lg font-bold text-[#101827]">
                  +92 333 8358009
                </p>
                <p className="text-xs text-slate-500">
                  Direct line for stock verification, quotes, and pickup reservation.
                </p>
                <div className="pt-2">
                  <a
                    href={STORE_INFO.phoneTel}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#101827] hover:bg-[#1E2532] text-white text-xs font-semibold transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#2878F0]" />
                    <span>Call +92 333 8358009 Now</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Plus code & closing time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Google Maps Code
                </p>
                <p className="text-sm font-mono font-semibold text-[#101827]">
                  {STORE_INFO.googleMapsCode}
                </p>
                <button
                  onClick={handleCopyCode}
                  className="text-[11px] text-[#2878F0] hover:underline flex items-center gap-1 cursor-pointer pt-1"
                >
                  {copiedCode ? 'Code copied!' : 'Copy Plus Code'}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-[#2878F0]" />
                  <span>Closing Information</span>
                </div>
                <p className="text-sm font-semibold text-[#101827]">
                  Listed Closing: 10:00 PM
                </p>
                <p className="text-[11px] text-slate-500">
                  Full 7-day schedule not supplied. Call to confirm today's opening time.
                </p>
              </div>
            </div>

            {/* Listed Services Badges */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[#2878F0]">
                Verified Listed Services
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-100 text-slate-800">
                  <Store className="w-4 h-4 text-[#2878F0]" />
                  <span className="font-medium">In-Store Shopping</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-100 text-slate-800">
                  <ShoppingBag className="w-4 h-4 text-[#2878F0]" />
                  <span className="font-medium">In-Store Pickup</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-100 text-slate-800">
                  <Truck className="w-4 h-4 text-[#2878F0]" />
                  <span className="font-medium">Delivery Listed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map view wrapper */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Google Maps Location Frame
              </span>
              <a
                href={STORE_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#2878F0] font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>Open in Google Maps App</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Interactive Google Map Embed targeting Okara Venus Chowk */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <iframe
                title="Shami Mobile Location Map"
                src="https://maps.google.com/maps?q=Venus%20Chowk,%20Okara,%20Punjab,%20Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-[11px] text-slate-500">
              Map centered around Venus Chowk, Okara. Landmark: Shop #1, opposite Delhi Sweet in Al Aziz Plaza.
            </p>
          </div>
        </div>

        {/* Right: Direct Customer Inquiry Form */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2878F0]">
              Quick Phone & Inquiry
            </span>
            <h2 className="text-xl font-bold text-[#101827] mt-1">
              Check Phone Availability
            </h2>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Have a question about an iPhone, Android model, or accessory? Submit details below or call us directly.
            </p>
          </div>

          {inquirySubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-emerald-900">
                Inquiry Details Recorded
              </h3>
              <p className="text-xs text-emerald-700 leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. For the fastest response, connect directly with our store counter via the telephone dialer.
              </p>
              <div className="pt-2">
                <a
                  href={STORE_INFO.phoneTel}
                  className="inline-flex items-center gap-2 bg-[#2878F0] hover:bg-[#1E63D0] text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Store (+92 333 8358009)</span>
                </a>
              </div>
              <button
                onClick={() => setInquirySubmitted(false)}
                className="text-xs text-slate-500 hover:text-slate-800 underline block mx-auto cursor-pointer"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitInquiry} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammad Ali"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2878F0]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone / Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +92 300 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2878F0]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Device or Service of Interest
                </label>
                <input
                  type="text"
                  placeholder="e.g. iPhone 15 Pro, Samsung S24, Fast Charger"
                  value={formData.deviceOrService}
                  onChange={(e) => setFormData({ ...formData, deviceOrService: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2878F0]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message / In-Store Pickup Request
                </label>
                <textarea
                  rows={3}
                  placeholder="Let us know what configuration, PTA status, or accessories you are looking for..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2878F0]"
                />
              </div>

              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#2878F0] hover:bg-[#1E63D0] text-white py-3 px-4 rounded-xl text-xs font-semibold transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  Prefer an immediate answer? Call <strong className="text-slate-800">+92 333 8358009</strong>.
                </p>
              </div>
            </form>
          )}

          {/* Quick Direct Call Box */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
            <span className="font-semibold text-[#101827]">Direct Store Contact</span>
            <p className="text-slate-600 leading-relaxed">
              Customers in Okara can call during regular daytime hours up to 10:00 PM listed closing time.
            </p>
            <a
              href={STORE_INFO.phoneTel}
              className="inline-flex items-center gap-1.5 font-bold text-[#2878F0] hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Dial +92 333 8358009</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
