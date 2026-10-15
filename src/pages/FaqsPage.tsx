import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { STORE_FAQS, STORE_INFO } from '../data/storeData';

export default function FaqsPage() {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-location');

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="bg-[#101827] text-white rounded-3xl p-8 sm:p-12 border border-[#252B36] relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161F30] border border-[#252B36] text-xs text-slate-300">
            <span className="text-[#2878F0] font-semibold">Store Information</span>
            <span>·</span>
            <span>Shami Mobile FAQs</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Get factual answers regarding Shami Mobile's location, listed closing hours, services, and smartphone stock inquiry process.
          </p>
        </div>
      </div>

      {/* Accordion Container */}
      <div className="max-w-3xl mx-auto space-y-4">
        {STORE_FAQS.map((faq) => {
          const isOpen = openFaq === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`answer-${faq.id}`}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2878F0]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF1F5] flex items-center justify-center text-[#2878F0] shrink-0">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-[#101827]">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#2878F0]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  id={`answer-${faq.id}`}
                  className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50"
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still have questions banner */}
      <div className="max-w-3xl mx-auto bg-[#101827] text-white rounded-2xl p-6 sm:p-8 border border-[#252B36] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-white">
            Have another question about availability?
          </h3>
          <p className="text-xs text-slate-300">
            Our store team at Venus Chowk, Okara is available by telephone to assist you.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={STORE_INFO.phoneTel}
            className="inline-flex items-center gap-2 bg-[#2878F0] hover:bg-[#1E63D0] text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call +92 333 8358009</span>
          </a>
        </div>
      </div>
    </div>
  );
}
