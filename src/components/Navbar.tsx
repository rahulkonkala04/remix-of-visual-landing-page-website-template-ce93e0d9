import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";

const links = ["Home", "Collections", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-[rgba(10,10,10,0.75)] border-b border-[rgba(199,164,71,0.25)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <a href="#home" className="font-serif-d text-2xl md:text-3xl font-semibold text-shimmer" style={{ letterSpacing: "4px" }}>
            DAILUX
          </a>
          <ul className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="font-sans-d text-[13px] uppercase tracking-[0.2em] text-[var(--off-white)]/80 hover:text-[var(--gold)] transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5">
            <button aria-label="Search" className="text-[var(--off-white)]/80 hover:text-[var(--gold)] transition-colors"><Search size={18} /></button>
            <button aria-label="Wishlist" className="text-[var(--off-white)]/80 hover:text-[var(--gold)] transition-colors"><Heart size={18} /></button>
            <button aria-label="Cart" className="text-[var(--off-white)]/80 hover:text-[var(--gold)] transition-colors"><ShoppingBag size={18} /></button>
            <button className="hidden sm:inline-flex font-sans-d text-[12px] font-semibold uppercase tracking-[0.18em] px-5 py-2.5 rounded-full text-[var(--graphite)] gold-gradient transition-transform hover:scale-[1.04]">
              Shop Now
            </button>
            <button aria-label="Menu" onClick={() => setOpen(true)} className="md:hidden text-[var(--off-white)]"><Menu size={22} /></button>
          </div>
        </nav>
      </motion.header>

      {open && (
        <div className="fixed inset-0 z-[1100] bg-[var(--graphite)] flex flex-col items-center justify-center md:hidden">
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-[var(--off-white)]"><X size={28} /></button>
          <ul className="flex flex-col items-center gap-8">
            {links.map((l) => (
              <li key={l}>
                <a onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`} className="font-serif-d text-4xl text-[var(--off-white)] hover:text-[var(--gold)] transition-colors">
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
