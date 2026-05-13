import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  tagline: string;
  price: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Portable Micro Steam Iron",
    tagline: "Precision pressing, anywhere.",
    price: "$89",
    image: "/products/steam-iron.jpg",
    category: "Home Care",
  },
  {
    id: 2,
    name: "Night Vision Panel",
    tagline: "See clearly after dark.",
    price: "$149",
    image: "/products/night-vision.jpg",
    category: "Smart Home",
  },
  {
    id: 3,
    name: "LED Mosquito Killer Lamp",
    tagline: "Silent protection, pure design.",
    price: "$59",
    image: "/products/mosquito-lamp.jpg",
    category: "Wellness",
  },
  {
    id: 4,
    name: "Electric Brush Cleaner",
    tagline: "Pristine brushes, effortlessly.",
    price: "$45",
    image: "/products/brush-cleaner.jpg",
    category: "Personal Care",
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="group relative rounded-2xl overflow-hidden transition-all duration-500 ease-out"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: isHovered
            ? "0 0 40px rgba(14,91,60,0.2), 0 20px 60px rgba(0,0,0,0.4)"
            : "0 10px 40px rgba(0,0,0,0.3)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
            width={1024}
            height={768}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--graphite)] via-transparent to-transparent opacity-60" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 rounded-full text-[10px] font-sans-d font-medium tracking-[0.15em] uppercase text-[var(--emerald-light)]"
              style={{ background: "rgba(14,91,60,0.2)", backdropFilter: "blur(8px)" }}>
              {product.category}
            </span>
          </div>

          {/* Quick add button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 right-4"
          >
            <button
              className="h-11 w-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ background: "rgba(14,91,60,0.8)", backdropFilter: "blur(8px)" }}
              aria-label="Add to cart"
            >
              <ShoppingBag size={18} className="text-white" />
            </button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="font-serif-d text-xl md:text-[22px] text-[var(--silver)] leading-tight">
                {product.name}
              </h3>
              <p className="font-sans-d text-[13px] text-[var(--silver)]/45 mt-2">
                {product.tagline}
              </p>
            </div>
            <span className="font-sans-d font-semibold text-lg text-[var(--emerald-light)] whitespace-nowrap">
              {product.price}
            </span>
          </div>

          <div className="mt-5 pt-5 border-t border-white/[0.06]">
            <button className="group/btn flex items-center gap-2 font-sans-d text-[12px] uppercase tracking-[0.15em] text-[var(--silver)]/60 hover:text-[var(--emerald-light)] transition-colors duration-300">
              View Details
              <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="collection" className="py-28 md:py-40 px-6 bg-[var(--graphite)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-sans-d text-[11px] tracking-[0.3em] uppercase text-[var(--emerald-light)]/70">
            The Collection
          </span>
          <h2 className="font-serif-d text-[clamp(36px,5vw,64px)] text-[var(--silver)] mt-4 leading-[1.1]">
            Essential <em className="italic text-[var(--emerald-light)]/80">Intelligence</em>
          </h2>
          <p className="font-sans-d text-[var(--silver)]/40 text-[15px] max-w-md mx-auto mt-5 leading-relaxed">
            Four products, one philosophy — tools that work beautifully so you don't have to.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
