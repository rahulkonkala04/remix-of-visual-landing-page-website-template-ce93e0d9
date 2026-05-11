import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const cols = [
  { title: "Shop", links: ["Collections", "Skincare", "Grooming", "Home", "Kitchen", "Wellness"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { title: "Support", links: ["FAQ", "Returns", "Shipping", "Track Order", "Privacy"] },
];

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: "#0D3D22" }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src="/dailux_logo.png" alt="DAILUX" className="h-[52px] w-auto" />
          <p className="font-serif-d text-2xl mt-4">Elevate Every Day.</p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-white/20 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-serif-d text-xl mb-4 text-[#C9A84C]">{c.title}</h4>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="inline-block font-sans-d text-sm text-white/80 hover:text-[#C9A84C] hover:translate-x-1 transition-all duration-200">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans-d text-xs text-white/60">© {new Date().getFullYear()} DAILUX. All rights reserved.</p>
          <div className="flex gap-2">
            {["Visa", "Mastercard", "UPI", "RuPay"].map((p) => (
              <span key={p} className="text-xs font-sans-d font-semibold px-3 py-1.5 rounded border border-white/20 text-white/80">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
