import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const archRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(archRef.current, {
        scale: 1.12,
        transformOrigin: 'center bottom',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col bg-arch-green overflow-hidden"
    >
      {/* Main content — centered in available space */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-8">
      {/* Architectural line-drawing arch */}
      <svg
        ref={archRef}
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-52 md:w-72 lg:w-80 mb-10 flex-shrink-0"
        stroke="#C9A84C"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        {/* Attic / inscription block */}
        <rect x="20" y="8" width="360" height="82" strokeWidth="1.5" />
        {/* Inscription guide lines */}
        <line x1="38" y1="28" x2="362" y2="28" strokeWidth="0.75" />
        <line x1="38" y1="48" x2="362" y2="48" strokeWidth="0.75" />
        <line x1="38" y1="68" x2="362" y2="68" strokeWidth="0.75" />
        {/* Cornice */}
        <rect x="0" y="90" width="400" height="16" strokeWidth="1" />
        {/* Entablature / frieze */}
        <rect x="8" y="106" width="384" height="46" strokeWidth="1.5" />
        {/* Left pier */}
        <rect x="12" y="152" width="84" height="278" strokeWidth="1.5" />
        {/* Left pilaster (decorative attached column) */}
        <rect x="28" y="157" width="16" height="256" strokeWidth="0.75" />
        {/* Right pier */}
        <rect x="304" y="152" width="84" height="278" strokeWidth="1.5" />
        {/* Right pilaster */}
        <rect x="356" y="157" width="16" height="256" strokeWidth="0.75" />
        {/* Arch opening — center(200,430), r=104 */}
        <path d="M 96,430 A 104,104 0 0,1 304,430" strokeWidth="1.5" />
        {/* Arch outer reveal — center(200,430), r=128 */}
        <path d="M 72,430 A 128,128 0 0,1 328,430" strokeWidth="1" />
        {/* Keystone */}
        <polygon points="196,324 200,306 204,324" strokeWidth="0.75" />
        {/* Base */}
        <rect x="0" y="430" width="400" height="60" strokeWidth="1.5" />
        <line x1="0" y1="447" x2="400" y2="447" strokeWidth="0.75" />
      </svg>

      {/* Text */}
      <div className="text-center max-w-2xl">
        <p className="font-cinzel text-trophy-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-5">
          United States of America · Washington, D.C.
        </p>
        <h1 className="font-cinzel text-marble text-3xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight tracking-wide mb-6">
          United States<br />Triumphal Arch
        </h1>
        <div className="w-24 h-px bg-trophy-gold mx-auto mb-7" />
        <p className="font-lora text-trophy-gold text-lg md:text-xl italic mb-3">
          "Me. It's going to be beautiful."
        </p>
        <p className="font-cinzel text-marble opacity-40 text-xs tracking-widest uppercase">
          Donald J. Trump · 45th &amp; 47th President
        </p>
      </div>
      </div>

      {/* Scroll cue — anchored to bottom, always clear of content */}
      <div className="pb-8 flex flex-col items-center gap-2">
        <span className="font-courier text-trophy-gold text-xs tracking-widest uppercase opacity-40">
          Proceed
        </span>
        <div className="w-px h-12 bg-trophy-gold opacity-30" />
      </div>
    </section>
  );
}
