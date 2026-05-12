import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const cols = [
  { title: "Shop", links: ["Collections", "Skincare", "Grooming", "Home", "Kitchen", "Wellness"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { title: "Support", links: ["FAQ", "Returns", "Shipping", "Track Order", "Privacy"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[var(--graphite)]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <a href="#home" className="font-serif-d text-3xl text-shimmer" style={{ letterSpacing: "4px" }}>DAILUX</a>
          <p className="font-serif-d italic text-xl text-[var(--off-white)]/70 mt-4">Elevate every day.</p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 flex items-center justify-center rounded-full glass hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors text-[var(--off-white)]/70">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-sans-d text-[12px] tracking-[0.25em] uppercase text-[var(--gold)] mb-5">{c.title}</h4>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="font-sans-d text-sm text-[var(--off-white)]/65 hover:text-[var(--gold)] transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans-d text-xs text-[var(--off-white)]/45">© {new Date().getFullYear()} DAILUX. Quiet luxury, every day.</p>
          <div className="flex gap-2">
            {["Visa", "Mastercard", "UPI", "RuPay"].map((p) => (
              <span key={p} className="text-[10px] tracking-[0.15em] font-sans-d font-semibold px-3 py-1.5 rounded glass text-[var(--off-white)]/65">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
