export default function Footer() {
  return (
    <footer className="bg-arch-green py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Small arch mark */}
        <svg viewBox="0 0 120 80" fill="none" className="w-16 mx-auto mb-8 opacity-40" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="square">
          <rect x="5" y="2" width="110" height="22" strokeWidth="1" />
          <rect x="2" y="24" width="26" height="54" />
          <rect x="92" y="24" width="26" height="54" />
          <path d="M 28,78 A 32,32 0 0,1 92,78" />
        </svg>

        <div className="w-16 h-px bg-trophy-gold opacity-30 mx-auto mb-8" />

        <p className="font-cinzel text-marble text-xs tracking-[0.4em] uppercase mb-2">
          United States Triumphal Arch
        </p>
        <p className="font-cinzel text-trophy-gold text-xs tracking-[0.3em] uppercase mb-8">
          Columbia Island · Washington, D.C.
        </p>

        <p className="font-lora text-marble opacity-40 text-xs italic mb-6">
          "Dedicated to the American People. By request."
        </p>

        <div className="w-16 h-px bg-trophy-gold opacity-20 mx-auto mb-6" />

        <p className="font-courier text-marble opacity-25 text-xs tracking-widest uppercase">
          A Parody · All Facts Are Real · Est. MMXXV
        </p>
      </div>
    </footer>
  );
}
