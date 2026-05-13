import { motion } from "framer-motion";
import { Zap, Shield, Sparkles } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Precision Engineering",
    desc: "Every product is designed with obsessive attention to mechanical detail and user interaction.",
  },
  {
    icon: Shield,
    title: "Built to Endure",
    desc: "Premium materials and rigorous testing ensure our products stand the test of daily use.",
  },
  {
    icon: Sparkles,
    title: "Quiet Luxury",
    desc: "No flash. No noise. Just beautiful objects that improve your life without demanding attention.",
  },
];

export default function Story() {
  return (
    <section id="story" className="py-28 md:py-40 px-6 bg-[var(--graphite)] relative overflow-hidden">
      {/* Subtle ambient orb */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(14,91,60,0.08), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="font-sans-d text-[11px] tracking-[0.3em] uppercase text-[var(--emerald-light)]/70">
            Our Story
          </span>
          <h2 className="font-serif-d text-[clamp(32px,4.5vw,56px)] text-[var(--silver)] mt-4 leading-[1.1] max-w-2xl mx-auto">
            Design that <em className="italic text-[var(--emerald-light)]/80">disappears</em> into your routine.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(14,91,60,0.25)]"
                style={{ background: "rgba(14,91,60,0.1)", border: "1px solid rgba(14,91,60,0.2)" }}>
                <value.icon size={22} className="text-[var(--emerald-light)]" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif-d text-xl text-[var(--silver)] mb-3">
                {value.title}
              </h3>
              <p className="font-sans-d text-[14px] text-[var(--silver)]/45 leading-[1.8] max-w-xs mx-auto">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
