import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ParticleCanvas from "./ParticleCanvas";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const container = {
    hidden: {},
    show: { transition: { delayChildren: 0.4, staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section id="home" ref={ref} className="relative min-h-screen w-full overflow-hidden bg-[var(--graphite)]">
      <ParticleCanvas />
      {/* Ambient orbs */}
      <div className="absolute pointer-events-none rounded-full orb" style={{ top: "10%", left: "8%", width: 380, height: 380, background: "radial-gradient(circle, rgba(14,91,60,0.55), transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute pointer-events-none rounded-full orb-2" style={{ bottom: "8%", right: "6%", width: 420, height: 420, background: "radial-gradient(circle, rgba(199,164,71,0.40), transparent 70%)", filter: "blur(50px)" }} />
      <div className="absolute pointer-events-none rounded-full orb-3" style={{ top: "40%", right: "30%", width: 300, height: 300, background: "radial-gradient(circle, rgba(6,45,31,0.85), transparent 70%)", filter: "blur(50px)" }} />

      <motion.div style={{ y, opacity }} className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center max-w-5xl">
          <motion.span variants={item} className="inline-block px-5 py-2 rounded-full glass border border-[rgba(199,164,71,0.35)] text-[var(--gold)] font-sans-d text-[11px] tracking-[0.3em] uppercase">
            ✦ Premium Daily Essentials ✦
          </motion.span>
          <motion.h1 variants={item} className="font-serif-d font-semibold text-[var(--off-white)] mt-8 leading-[1.02]" style={{ fontSize: "clamp(52px, 9vw, 110px)" }}>
            Elevate <em className="italic text-shimmer">Every</em> Day.
          </motion.h1>
          <motion.p variants={item} className="font-sans-d text-[var(--off-white)]/65 max-w-xl mt-8 text-[17px] leading-relaxed">
            Curated essentials crafted to bring quiet luxury into your daily rituals.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4 justify-center mt-10">
            <button className="font-sans-d font-semibold text-[13px] uppercase tracking-[0.18em] px-8 py-4 rounded-full text-[var(--graphite)] gold-gradient transition-all hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(199,164,71,0.5)]">
              Explore Collection →
            </button>
            <button className="font-sans-d font-semibold text-[13px] uppercase tracking-[0.18em] px-8 py-4 rounded-full glass text-[var(--off-white)] border border-white/15 hover:border-[var(--gold)] transition-all">
              Our Story
            </button>
          </motion.div>
          <motion.div variants={item} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span className="font-sans-d text-[10px] tracking-[0.4em] text-[var(--off-white)]/50 uppercase">Scroll</span>
            <div className="w-px h-12 overflow-hidden">
              <div className="w-px h-full scroll-line" style={{ background: "linear-gradient(to bottom, transparent, var(--gold), transparent)" }} />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
