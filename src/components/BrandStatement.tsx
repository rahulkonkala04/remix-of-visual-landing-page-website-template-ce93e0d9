import { useEffect, useRef, useState } from "react";

const stats = [
  { num: "500+", label: "Curated Products" },
  { num: "10K+", label: "Happy Customers" },
  { num: "50+", label: "Cities Served" },
];

export default function BrandStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full py-24" style={{ background: "linear-gradient(180deg, #1B5E3B, #0D3D22)" }}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className={`font-serif-d text-white ${visible ? "animate-fade-up" : "opacity-0"}`} style={{ fontSize: "clamp(40px, 7vw, 72px)", lineHeight: 1.1 }}>
          Not just products. A lifestyle.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {stats.map((s, i) => (
            <div key={s.label} className={visible ? "animate-fade-up" : "opacity-0"} style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
              <div className="font-serif-d" style={{ fontSize: 56, color: "#C9A84C" }}>{s.num}</div>
              <div className="font-sans-d text-white/70 mt-2 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
