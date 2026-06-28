import { COMPARISONS } from '../data/content';

export default function Comparisons() {
  const maxHeight = Math.max(...COMPARISONS.map((c) => c.height));

  return (
    <section className="bg-marble py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="font-cinzel text-trophy-gold text-xs tracking-[0.3em] uppercase text-center mb-4">
          International Context
        </p>
        <h2 className="font-cinzel text-arch-green text-2xl md:text-3xl uppercase text-center tracking-wide mb-20">
          Height Comparison
        </h2>

        <div className="flex items-end justify-center gap-10 md:gap-20 mb-8" style={{ height: '300px' }}>
          {COMPARISONS.map((item) => {
            const barH = Math.round((item.height / maxHeight) * 260);
            return (
              <div key={item.name} className="flex flex-col items-center gap-3">
                <span className="font-courier text-inscription text-sm font-bold">
                  {item.height} ft
                </span>
                <div
                  style={{ height: `${barH}px`, width: '72px' }}
                  className={
                    item.highlight
                      ? 'bg-arch-green border border-arch-green'
                      : 'bg-transparent border border-trophy-gold opacity-60'
                  }
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-10 md:gap-20">
          {COMPARISONS.map((item) => (
            <div key={item.name} className="text-center w-24 md:w-32">
              <p className={`font-cinzel text-xs uppercase leading-tight mb-1 ${item.highlight ? 'text-arch-green font-bold' : 'text-inscription'}`}>
                {item.name}
              </p>
              <p className="font-courier text-inscription opacity-50 text-xs leading-tight">
                {item.location}
              </p>
              {item.highlight && (
                <p className="font-cinzel text-trophy-gold text-base mt-1">★</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
