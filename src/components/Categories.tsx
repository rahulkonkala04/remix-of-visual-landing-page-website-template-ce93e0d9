import { motion } from "framer-motion";
import { useRef } from "react";

const cats = [
  { icon: "✦", name: "Skincare", desc: "Glow rituals" },
  { icon: "◈", name: "Grooming", desc: "Refined edge" },
  { icon: "⬡", name: "Home", desc: "Quiet luxury" },
  { icon: "◉", name: "Kitchen", desc: "Daily craft" },
  { icon: "❋", name: "Wellness", desc: "Inner balance" },
];

function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg) translateY(-4px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`transition-transform duration-300 ease-out ${className}`}>
      {children}
    </div>
  );
}

export default function Categories() {
  return (
    <section id="collections" className="py-28 px-6 bg-[var(--graphite)]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif-d text-center text-4xl md:text-6xl text-[var(--off-white)] mb-4"
        >
          Shop by <em className="italic text-shimmer">Category</em>
        </motion.h2>
        <p className="text-center font-sans-d text-[var(--off-white)]/55 text-sm tracking-[0.2em] uppercase mb-16">Curated. Considered. Crafted.</p>
        <div className="flex flex-wrap justify-center gap-6">
          {cats.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Tilt>
                <button className="group glass rounded-2xl w-[200px] h-[220px] flex flex-col items-center justify-center neon-gold transition-colors duration-300 hover:bg-[rgba(199,164,71,0.06)]">
                  <span className="text-5xl text-[var(--gold)] mb-4 transition-transform duration-300 group-hover:-translate-y-1.5">{c.icon}</span>
                  <span className="font-serif-d text-2xl text-[var(--off-white)]">{c.name}</span>
                  <span className="font-sans-d text-[11px] tracking-[0.25em] uppercase text-[var(--off-white)]/50 mt-2">{c.desc}</span>
                </button>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
