interface QuotePlaqueProps {
  text: string;
  attribution: string;
  title?: string;
  variant?: 'gold' | 'green';
}

export default function QuotePlaque({ text, attribution, title, variant = 'gold' }: QuotePlaqueProps) {
  const isGold = variant === 'gold';

  return (
    <section className={`py-20 px-6 ${isGold ? 'bg-trophy-gold' : 'bg-arch-green'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`font-cinzel select-none mb-4 leading-none ${isGold ? 'text-arch-green' : 'text-trophy-gold'} opacity-30`}
          style={{ fontSize: '7rem' }}
        >
          "
        </div>
        <blockquote className={`font-lora text-xl md:text-2xl lg:text-3xl italic leading-relaxed mb-8 ${isGold ? 'text-arch-green' : 'text-marble'}`}>
          {text}
        </blockquote>
        <div className={`w-16 h-px mx-auto mb-6 opacity-30 ${isGold ? 'bg-arch-green' : 'bg-trophy-gold'}`} />
        <p className={`font-cinzel text-sm uppercase tracking-[0.2em] font-semibold ${isGold ? 'text-arch-green' : 'text-marble'}`}>
          {attribution}
        </p>
        {title && (
          <p className={`font-courier text-xs mt-1 opacity-60 ${isGold ? 'text-arch-green' : 'text-marble'}`}>
            {title}
          </p>
        )}
      </div>
    </section>
  );
}
