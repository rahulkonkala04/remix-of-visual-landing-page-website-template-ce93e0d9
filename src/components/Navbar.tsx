import { useState } from "react";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";

const links = ["Home", "Collections", "About", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-md" style={{ background: "rgba(250, 247, 242, 0.8)" }}>
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src="/dailux_logo.png" alt="DAILUX" className="h-[52px] w-auto" />
          </a>
          <ul className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="font-sans-d text-[14px] text-[#1A1A1A] relative group transition-colors hover:text-[#C9A84C]">
                  {l}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="text-[#1A1A1A] hover:text-[#C9A84C] transition-colors"><Search size={20} /></button>
            <button aria-label="Wishlist" className="text-[#1A1A1A] hover:text-[#C9A84C] transition-colors"><Heart size={20} /></button>
            <button aria-label="Cart" className="relative text-[#1A1A1A] hover:text-[#C9A84C] transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-[#1B5E3B] text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-sans-d">3</span>
            </button>
            <button className="hidden sm:inline-flex font-sans-d text-[13px] font-semibold px-5 py-2.5 rounded-md text-[#1A1A1A] transition-colors" style={{ background: "#C9A84C" }}
              onMouseEnter={(e) => { (e.currentTarget.style.background = "#1B5E3B"); (e.currentTarget.style.color = "#fff"); }}
              onMouseLeave={(e) => { (e.currentTarget.style.background = "#C9A84C"); (e.currentTarget.style.color = "#1A1A1A"); }}>
              Shop Now
            </button>
            <button aria-label="Menu" onClick={() => setOpen(true)} className="md:hidden text-[#1A1A1A] hover:text-[#C9A84C] transition-colors">
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center md:hidden animate-fade-up" style={{ background: "#1B5E3B" }}>
          <button aria-label="Close" onClick={() => setOpen(false)} className="absolute top-6 right-6 text-white">
            <X size={32} />
          </button>
          <ul className="flex flex-col items-center gap-8">
            {links.map((l) => (
              <li key={l}>
                <a onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`} className="font-serif-d text-white" style={{ fontSize: 32 }}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
