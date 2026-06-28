export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-arch-green px-6 py-3 flex items-center justify-between">
      <span className="font-cinzel text-trophy-gold text-xs tracking-[0.3em] uppercase">
        United States Triumphal Arch
      </span>
      <span className="font-courier text-trophy-gold text-xs tracking-widest opacity-50 hidden md:block">
        Est. MMXXV
      </span>
    </nav>
  );
}
