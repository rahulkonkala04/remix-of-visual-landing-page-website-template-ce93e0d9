const items = [
  { icon: "🔒", text: "Secure Payments" },
  { icon: "📦", text: "Free Shipping ₹999+" },
  { icon: "↩️", text: "7-Day Returns" },
  { icon: "⭐", text: "Premium Quality" },
];

export default function TrustBadges() {
  return (
    <section className="py-12 px-6 border-y border-white/5">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        {items.map((i) => (
          <div key={i.text} className="flex items-center gap-2 font-sans-d text-[12px] tracking-[0.2em] uppercase text-[var(--off-white)]/60">
            <span className="text-base">{i.icon}</span>{i.text}
          </div>
        ))}
      </div>
    </section>
  );
}
