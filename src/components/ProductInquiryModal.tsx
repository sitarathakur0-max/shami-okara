import { useEffect, useState } from 'react';
import { X, Phone, Check, MapPin, AlertCircle, Sparkles } from 'lucide-react';
import { ProductItem, STORE_INFO } from '../data/storeData';

interface ProductInquiryModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export default function ProductInquiryModal({ product, onClose }: ProductInquiryModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleCopy = () => {
    const text = `Hello Shami Mobile, I am inquiring about the availability and price for: ${product.name} (${product.model}) at your Venus Chowk, Okara store.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header banner */}
        <div className="bg-[#101827] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#2878F0]" />
            <h3 id="inquiry-title" className="text-base font-bold tracking-tight">
              Product Availability Inquiry
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-[#252B36] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div className="flex gap-4 items-start">
            <div className="w-20 h-20 rounded-xl bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="space-y-1 min-w-0">
              <div className="text-xs uppercase tracking-wider text-[#2878F0] font-semibold">
                {product.brand} · {product.model}
              </div>
              <h4 className="text-base font-bold text-[#101827] leading-snug">
                {product.name}
              </h4>
              <p className="text-xs text-slate-500">
                {product.storageOrVariant}
              </p>
            </div>
          </div>

          {/* Pricing & Stock Advisory Note */}
          <div className="bg-[#EEF1F5] rounded-xl p-4 border border-slate-200 text-xs text-slate-700 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-[#101827]">
              <AlertCircle className="w-4 h-4 text-[#2878F0] shrink-0" />
              <span>Live Market Rate & Stock Information</span>
            </div>
            <p className="leading-relaxed text-slate-600">
              Smartphone prices and PTA tax tiers in Pakistan change regularly based on daily currency and distributor stock. Shami Mobile offers honest in-store quotes and verified availability.
            </p>
            <div className="flex items-center gap-1.5 text-[#101827] font-medium pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#2878F0]" />
              <span>Shop #1, Venus Chowk, Al Aziz Plaza, Okara</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-2.5 pt-2">
            <a
              href={STORE_INFO.phoneTel}
              className="flex items-center justify-center gap-2.5 w-full bg-[#2878F0] hover:bg-[#1E63D0] active:scale-98 text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all shadow-md shadow-[#2878F0]/25"
            >
              <Phone className="w-4 h-4" />
              <span>Call +92 333 8358009 Now</span>
            </a>

            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 px-4 rounded-xl font-medium text-xs transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Inquiry details copied!</span>
                </>
              ) : (
                <span>Copy Inquiry Details for SMS / Message</span>
              )}
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 text-center">
          In-store shopping & in-store pickup available at Venus Chowk, Okara. Listed closing time: 10:00 PM.
        </div>
      </div>
    </div>
  );
}
