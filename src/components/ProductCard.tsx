import { Heart } from "lucide-react";

interface Props {
  image: string;
  name: string;
  originalPrice: number;
  salePrice: number;
  discount: string;
}

export default function ProductCard({ image, name, originalPrice, salePrice, discount }: Props) {
  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
      <div className="relative aspect-square overflow-hidden bg-[#F5F0E8]">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute top-2 left-2 bg-[#1B5E3B] text-white text-xs px-2 py-1 rounded-full font-sans-d font-medium">SALE</span>
        <button aria-label="Wishlist" className="absolute top-2 right-2 h-9 w-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-[#C9A84C] hover:text-white transition-colors">
          <Heart size={16} />
        </button>
      </div>
      <div className="p-4 space-y-3">
        <h3 className="font-serif-d text-[20px] text-[#1A1A1A]">{name}</h3>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-gray-400 line-through text-sm font-sans-d">₹{originalPrice}</span>
          <span className="text-[#1B5E3B] font-bold text-lg font-sans-d">₹{salePrice}</span>
          <span className="ml-auto text-xs px-2 py-0.5 rounded-full text-[#1A1A1A] font-sans-d font-semibold" style={{ background: "#C9A84C" }}>{discount}</span>
        </div>
        <button className="w-full bg-[#1B5E3B] text-white hover:bg-[#C9A84C] hover:text-[#1A1A1A] py-3 rounded-md font-sans-d font-semibold text-sm transition-colors">
          Add to Cart
        </button>
      </div>
    </article>
  );
}
