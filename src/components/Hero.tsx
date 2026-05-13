import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-[var(--graphite)] flex items-center justify-center"
    >
      {/* Ambient orbs */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "12%",
          left: "10%",
          width: 350,
          height: 350,
          background: "radial-gradient(circle, rgba(14,91,60,0.35), transparent 70%)",
          filter: "blur(60px)",
          animation: "pulseOrb 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: "10%",
          right: "8%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(160,170,160,0.18), transparent 70%)",
          filter: "blur(70px)",
          animation: "pulseOrb 13s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "50%",
          right: "25%",
          width: 280,
          height: 280,
          background: "radial-gradient(circle, rgba(14,91,60,0.25), transparent 70%)",
          filter: "blur(50px)",
          animation: "pulseOrb 9s ease-in-out infinite 2s",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16 max-w-6xl mx-auto"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-5 py-2.5 rounded-full border border-[var(--emerald)]/30 text-[var(--emerald-light)] font-sans-d text-[11px] tracking-[0.3em] uppercase mb-10"
            style={{ background: "rgba(14,91,60,0.08)", backdropFilter: "blur(10px)" }}
          >
            Precision &middot; Elegance &middot; Everyday
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-serif-d font-semibold text-[var(--silver)] leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(56px, 10vw, 130px)" }}
          >
            DAILUX
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-serif-d italic text-[var(--silver)]/50 mt-6 text-[22px] md:text-[26px] tracking-wide"
          >
            Engineered for the everyday.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="font-sans-d text-[var(--silver)]/45 max-w-lg mt-8 text-[15px] leading-[1.8] tracking-[0.02em]"
          >
            A curated collection of intelligent home essentials — where 
            industrial precision meets quiet luxury. Designed to elevate 
            the rituals you repeat every day.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-5 justify-center mt-12"
          >
            <a
              href="#collection"
              className="font-sans-d font-medium text-[13px] uppercase tracking-[0.18em] px-10 py-4 rounded-full text-[var(--graphite)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(14,91,60,0.4)] hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 50%, #C0C0C0 100%)",
              }}
            >
              Explore Collection
            </a>
            <a
              href="#story"
              className="font-sans-d font-medium text-[13px] uppercase tracking-[0.18em] px-10 py-4 rounded-full text-[var(--silver)] border border-[var(--silver)]/15 hover:border-[var(--emerald-light)]/40 hover:text-[var(--emerald-light)] transition-all duration-500 backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              Our Story
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="font-sans-d text-[10px] tracking-[0.4em] text-[var(--silver)]/40 uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <ChevronDown size={18} className="text-[var(--silver)]/40" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
