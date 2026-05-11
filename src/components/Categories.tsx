const cats = [
  { icon: "🌿", name: "Skincare" },
  { icon: "✂️", name: "Grooming" },
  { icon: "🏠", name: "Home" },
  { icon: "🍳", name: "Kitchen" },
  { icon: "💪", name: "Wellness" },
];

export default function Categories() {
  return (
    <section id="collections" className="py-20" style={{ background: "#F5F0E8" }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif-d text-center mb-12">Shop by Category</h2>
        <div className="flex md:justify-center gap-6 overflow-x-auto pb-4 px-2 -mx-2 snap-x">
          {cats.map((c) => (
            <button key={c.name} className="snap-start shrink-0 flex flex-col items-center justify-center bg-white border border-[#C9A84C]/30 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A84C] hover:shadow-[0_12px_32px_rgba(201,168,76,0.2)]" style={{ width: 160, height: 200 }}>
              <span className="text-5xl mb-4">{c.icon}</span>
              <span className="font-serif-d text-xl text-[#1A1A1A]">{c.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
