import { useState } from 'react';
import { FAQS } from '../data/content';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-marble py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-cinzel text-trophy-gold text-xs tracking-[0.3em] uppercase text-center mb-4">
          Visitor Information
        </p>
        <h2 className="font-cinzel text-arch-green text-2xl md:text-3xl uppercase text-center tracking-wide mb-16">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-trophy-gold divide-opacity-30">
          {FAQS.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between py-6 text-left gap-6 cursor-pointer group"
              >
                <span className="font-cinzel text-arch-green text-sm md:text-base uppercase tracking-wide leading-snug group-hover:text-trophy-gold transition-colors">
                  {item.q}
                </span>
                <span className="font-cinzel text-trophy-gold text-xl flex-shrink-0 mt-0.5 leading-none">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div className="pb-6">
                  <p className="font-lora text-inscription text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
