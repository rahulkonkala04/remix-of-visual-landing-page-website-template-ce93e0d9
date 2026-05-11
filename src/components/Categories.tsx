const cats = [
  { icon: "🌿", name: "Skincare" },
  { icon: "✂️", name: "Grooming" },
  { icon: "🏠", name: "Home" },
  { icon: "🍳", name: "Kitchen" },
  { icon: "💪", name: "Wellness" },
];

export default function Categories() {
  return (
    <section id="collections" className="py-20 reveal" style={{ background: "#F5F0E8" }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif-d text-center mb-12">Shop by Category</h2>

        {/* Mobile: 2-col grid */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {cats.map((c, i) => (
            <button key={c.name} className="reveal-child flex flex-col items-center justify-center bg-white border border-[#C9A84C]/30 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A84C] hover:shadow-[0_12px_32px_rgba(201,168,76,0.2)] py-8" style={{ animationDelay: `${i * 100}ms` }}>
              <span className="text-5xl mb-3">{c.icon}</span>
              <span className="font-serif-d text-xl text-[#1A1A1A]">{c.name}</span>
            </button>
          ))}
        </div>
        <p className="md:hidden text-center mt-3 font-sans-d" style={{ color: "#C9A84C", fontSize: 12 }}>swipe →</p>

        {/* Desktop: row */}
        <div className="hidden md:flex justify-center gap-6 overflow-x-auto pb-4 px-2 -mx-2 snap-x">
          {cats.map((c, i) => (
            <button key={c.name} className="reveal-child snap-start shrink-0 flex flex-col items-center justify-center bg-white border border-[#C9A84C]/30 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A84C] hover:shadow-[0_12px_32px_rgba(201,168,76,0.2)]" style={{ width: 160, height: 200, animationDelay: `${i * 100}ms` }}>
              <span className="text-5xl mb-4">{c.icon}</span>
              <span className="font-serif-d text-xl text-[#1A1A1A]">{c.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
