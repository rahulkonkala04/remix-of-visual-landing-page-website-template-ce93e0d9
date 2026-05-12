import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1800;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.floor(eased * end));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [end]);

  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 500, suffix: "+", label: "Curated Products" },
  { value: 10000, suffix: "+", label: "Happy Customers" },
  { value: 50, suffix: "+", label: "Cities Served" },
];

export default function Stats() {
  return (
    <section className="py-24 px-6 bg-[var(--graphite)]">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            className="glass rounded-2xl px-12 py-10 text-center min-w-[260px] flex-1 max-w-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] neon-gold"
          >
            <div className="font-serif-d font-semibold text-5xl md:text-6xl text-shimmer">
              <CountUp end={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 font-sans-d text-[11px] tracking-[0.3em] uppercase text-[var(--off-white)]/55">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
