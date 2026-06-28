import { STATS } from '../data/content';

export default function MonumentStats() {
  return (
    <section className="bg-marble py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-cinzel text-trophy-gold text-xs tracking-[0.3em] uppercase text-center mb-16">
          Monument Specifications
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 border border-trophy-gold">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-14 px-10 text-center ${i < STATS.length - 1 ? 'border-b md:border-b-0 md:border-r border-trophy-gold' : ''}`}
            >
              <div className="font-cinzel text-arch-green text-5xl md:text-6xl font-bold mb-2">
                {stat.value}
                {stat.unit && <span className="text-2xl ml-1">{stat.unit}</span>}
              </div>
              <div className="font-cinzel text-inscription text-sm uppercase tracking-[0.2em] mb-3">
                {stat.label}
              </div>
              <div className="font-courier text-inscription opacity-50 text-xs">
                {stat.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
