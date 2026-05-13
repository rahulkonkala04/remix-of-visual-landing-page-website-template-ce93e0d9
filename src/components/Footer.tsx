import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/[0.04] bg-[var(--graphite)]">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
        >
          <div>
            <a href="#home" className="font-serif-d text-3xl text-[var(--silver)] tracking-[0.15em]">
              DAILUX
            </a>
            <p className="font-sans-d text-[14px] text-[var(--silver)]/40 mt-3 max-w-sm leading-relaxed">
              Precision-engineered essentials for the modern home. Designed to elevate the everyday.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 md:gap-16">
            <div>
              <h4 className="font-sans-d text-[11px] tracking-[0.25em] uppercase text-[var(--emerald-light)]/70 mb-4">
                Shop
              </h4>
              <ul className="space-y-3">
                {["Steam Iron", "Night Vision", "Mosquito Lamp", "Brush Cleaner"].map((item) => (
                  <li key={item}>
                    <a href="#collection" className="font-sans-d text-[13px] text-[var(--silver)]/50 hover:text-[var(--emerald-light)] transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-sans-d text-[11px] tracking-[0.25em] uppercase text-[var(--emerald-light)]/70 mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {["About", "Careers", "Press", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-sans-d text-[13px] text-[var(--silver)]/50 hover:text-[var(--emerald-light)] transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans-d text-[11px] text-[var(--silver)]/30 tracking-[0.05em]">
            &copy; {new Date().getFullYear()} DAILUX. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Shipping"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-sans-d text-[11px] text-[var(--silver)]/30 hover:text-[var(--emerald-light)]/60 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
