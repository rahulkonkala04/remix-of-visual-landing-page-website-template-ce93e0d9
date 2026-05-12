import { motion } from "framer-motion";

const text = "DAILUX ✦ QUIET LUXURY ◈ ELEVATE DAILY ❋ PREMIUM ESSENTIALS ⬡ ";

export default function Marquee() {
  const items = Array.from({ length: 10 });
  return (
    <div className="relative py-5 border-y border-[rgba(199,164,71,0.3)]" style={{ background: "rgba(199,164,71,0.03)" }}>
      <div className="overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {items.map((_, i) => (
            <span key={i} className={`font-serif-d italic text-2xl md:text-3xl px-6 ${i % 2 === 0 ? "text-[var(--off-white)]/85" : "text-[var(--gold)]"}`}>
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
