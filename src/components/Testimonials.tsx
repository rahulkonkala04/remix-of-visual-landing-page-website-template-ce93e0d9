import { useEffect, useState } from "react";

const reviews = [
  { text: "DAILUX has completely transformed my morning routine. Quality is unmatched.", name: "Ananya S.", role: "Mumbai" },
  { text: "Premium feel, fair prices, and fast delivery. My new favorite store.", name: "Rohan K.", role: "Bengaluru" },
  { text: "Every product feels like it was made just for me. Truly luxurious.", name: "Priya M.", role: "Delhi" },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 4000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="reveal py-20 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif-d text-center mb-12">Loved by Thousands</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {reviews.map((r, idx) => (
            <article key={idx} className={`relative p-8 rounded-xl border transition-all duration-500 ${idx === i ? "scale-[1.02] shadow-[0_12px_32px_rgba(201,168,76,0.2)]" : "opacity-80"}`} style={{ background: "#F5F0E8", borderColor: "#C9A84C" }}>
              <span className="absolute top-2 left-4 font-serif-d text-7xl" style={{ color: "#C9A84C", opacity: 0.3 }}>"</span>
              <div className="relative">
                <div className="text-[#C9A84C] mb-3 tracking-widest">★★★★★</div>
                <p className="font-sans-d text-[#1A1A1A]/85 leading-relaxed">{r.text}</p>
                <div className="mt-6 font-serif-d text-lg text-[#1B5E3B]">{r.name}</div>
                <div className="font-sans-d text-xs text-[#1A1A1A]/60">{r.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
