import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";

const links = ["Collection", "Story", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "backdrop-blur-2xl bg-[rgba(10,10,10,0.85)] border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <a href="#home" className="font-serif-d text-2xl md:text-[28px] font-semibold text-[var(--silver)] tracking-[0.15em]">
            DAILUX
          </a>

          <ul className="hidden md:flex items-center gap-12">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="font-sans-d text-[13px] uppercase tracking-[0.2em] text-[var(--silver)]/70 hover:text-[var(--emerald-light)] transition-colors duration-300 relative group"
                >
                  {l}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--emerald-light)] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <button
              aria-label="Cart"
              className="relative text-[var(--silver)]/70 hover:text-[var(--emerald-light)] transition-colors duration-300"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Menu"
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-[var(--silver)]/70 hover:text-[var(--emerald-light)] transition-colors"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[var(--graphite)] md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-10">
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-[var(--silver)]/70"
              >
                <X size={26} />
              </button>
              {links.map((l, i) => (
                <motion.a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  className="font-serif-d text-4xl text-[var(--silver)] hover:text-[var(--emerald-light)] transition-colors"
                >
                  {l}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
