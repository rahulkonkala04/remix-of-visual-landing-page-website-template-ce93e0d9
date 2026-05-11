import ProductCard from "./ProductCard";

const items = [
  { name: "Vitamin C Serum", originalPrice: 1000, salePrice: 699, discount: "30% OFF", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80" },
  { name: "Grooming Kit", originalPrice: 1500, salePrice: 999, discount: "33% OFF", image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&q=80" },
  { name: "Aroma Diffuser", originalPrice: 2000, salePrice: 1299, discount: "35% OFF", image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=600&q=80" },
  { name: "Protein Shaker", originalPrice: 800, salePrice: 549, discount: "31% OFF", image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&q=80" },
];

export default function Bestsellers() {
  return (
    <section className="reveal py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif-d text-center mb-12">Bestsellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((p, i) => (
            <div key={p.name} className="reveal-child" style={{ animationDelay: `${i * 100}ms` }}>
              <ProductCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
