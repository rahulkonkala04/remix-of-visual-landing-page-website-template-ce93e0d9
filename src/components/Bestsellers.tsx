import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface Product {
  name: string;
  category: string;
  price: string;
  original: string | null;
  badge: string | null;
  icon: string;
  desc: string;
}

const products: Product[] = [
  { name: "Lumière Serum", category: "Skincare", price: "₹2,499", original: "₹3,999", badge: "BESTSELLER", icon: "✦", desc: "Radiance in every drop." },
  { name: "Noir Grooming Kit", category: "Grooming", price: "₹3,299", original: "₹4,999", badge: "NEW", icon: "◈", desc: "Refined daily ritual." },
  { name: "Zen Diffuser", category: "Wellness", price: "₹1,899", original: "₹2,799", badge: "SALE", icon: "❋", desc: "Quiet your space." },
  { name: "Obsidian Candle", category: "Home", price: "₹1,299", original: null, badge: null, icon: "⬡", desc: "Slow-burn ambience." },
  { name: "Gold Pour-Over", category: "Kitchen", price: "₹4,199", original: "₹5,499", badge: "LIMITED", icon: "◉", desc: "Brewed with intention." },
  { name: "Velvet Eye Cream", category: "Skincare", price: "₹1,699", original: "₹2,499", badge: "TRENDING", icon: "✦", desc: "Renew & restore." },
];

const badgeColors: Record<string, string> = {
  BESTSELLER: "bg-[var(--gold)] text-[var(--graphite)]",
  NEW: "bg-[var(--emerald)] text-white",
  SALE: "bg-[#7a1f1f] text-white",
  LIMITED: "bg-[#0f1d3a] text-white",
  TRENDING: "bg-[#5a3a1f] text-white",
};

function ProductCard({ p }: { p: Product }) {
  const ref = useRef<HTMLDivElement>(null);
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ""; };

  const addToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group glass rounded-2xl overflow-hidden transition-all duration-300 hover:border-[var(--gold)] hover:shadow-[0_0_30px_rgba(199,164,71,0.25)]"
    >
      <div className="relative h-[200px] flex items-center justify-center overflow-hidden" style={{ background: "radial-gradient(circle at 50% 60%, rgba(14,91,60,0.55), #060606 75%)" }}>
        <span className="text-7xl text-[var(--gold)]/90 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">{p.icon}</span>
        {p.badge && (
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-sans-d font-bold tracking-[0.15em] ${badgeColors[p.badge]}`}>
            {p.badge}
          </span>
        )}
        <button
          aria-label="Wishlist"
          onClick={() => setWished((v) => !v)}
          className={`absolute top-3 right-3 h-9 w-9 rounded-full glass flex items-center justify-center transition-colors ${wished ? "text-pink-400" : "text-[var(--off-white)]/70 hover:text-[var(--gold)]"}`}
        >
          <Heart size={16} fill={wished ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="p-5">
        <div className="font-sans-d text-[10px] tracking-[0.25em] uppercase text-[var(--gold)]">{p.category}</div>
        <h3 className="font-serif-d text-2xl text-[var(--off-white)] mt-1">{p.name}</h3>
        <p className="font-sans-d text-sm text-[var(--off-white)]/55 mt-1">{p.desc}</p>
        <div className="flex items-baseline gap-3 mt-3">
          <span className="font-sans-d font-semibold text-lg text-[var(--off-white)]">{p.price}</span>
          {p.original && <span className="font-sans-d text-sm line-through text-[var(--off-white)]/35">{p.original}</span>}
        </div>
        <button
          onClick={addToCart}
          className={`w-full mt-4 py-3 rounded-full font-sans-d text-[12px] font-semibold tracking-[0.18em] uppercase transition-all duration-300 ${
            added ? "bg-[var(--emerald)] text-white" : "gold-gradient text-[var(--graphite)] hover:scale-[1.02]"
          }`}
        >
          {added ? "✓ Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-28 px-6 bg-[var(--graphite)]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif-d text-center text-4xl md:text-6xl text-[var(--off-white)] mb-4"
        >
          <em className="italic text-shimmer">Bestsellers</em>
        </motion.h2>
        <p className="text-center font-sans-d text-[var(--off-white)]/55 text-sm tracking-[0.2em] uppercase mb-16">The pieces our community returns to.</p>

        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            >
              <ProductCard p={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
