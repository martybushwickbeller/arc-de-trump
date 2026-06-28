import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PublicConsultation() {
  const sectionRef = useRef<HTMLElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const obj = { val: 0 };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 65%',
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: 99.5,
            duration: 2.2,
            ease: 'power1.inOut',
            onUpdate: () => {
              if (pctRef.current) {
                pctRef.current.textContent = obj.val.toFixed(1);
              }
            },
            onComplete: () => {
              if (stampRef.current) {
                gsap.fromTo(
                  stampRef.current,
                  { scale: 3, opacity: 0, rotation: -20 },
                  { scale: 1, opacity: 1, rotation: -12, duration: 0.45, ease: 'back.out(2)' }
                );
              }
            },
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-arch-green py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-cinzel text-trophy-gold text-xs tracking-[0.3em] uppercase mb-4">
          Public Consultation
        </p>
        <p className="font-courier text-marble opacity-40 text-xs tracking-widest uppercase mb-16">
          600+ official comments submitted · Review period May 2026
        </p>

        {/* The number */}
        <div className="mb-4">
          <div className="font-cinzel text-crimson font-bold leading-none"
               style={{ fontSize: 'clamp(5rem, 20vw, 10rem)' }}>
            <span ref={pctRef}>0.0</span>
            <span className="text-[0.4em]">%</span>
          </div>
        </div>
        <p className="font-cinzel text-marble text-sm md:text-base uppercase tracking-[0.3em] mb-4">
          In Opposition
        </p>
        <p className="font-courier text-marble opacity-40 text-xs mb-16">
          (of 600+ public comments)
        </p>

        <div className="w-full h-px bg-trophy-gold opacity-20 mb-12" />

        {/* Outcome */}
        <p className="font-lora text-marble opacity-60 text-base md:text-lg italic mb-8">
          Having carefully reviewed all public comments, the Commission of Fine Arts
        </p>

        <div
          ref={stampRef}
          className="inline-block px-10 py-4 border-2 border-trophy-gold font-cinzel text-trophy-gold text-2xl md:text-3xl font-bold tracking-widest uppercase"
          style={{ opacity: 0 }}
        >
          Approved
        </div>
      </div>
    </section>
  );
}
