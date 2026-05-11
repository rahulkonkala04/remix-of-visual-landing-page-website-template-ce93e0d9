import { useState } from "react";
import { X } from "lucide-react";

const text = "✦ EXCLUSIVE OFFER Ending Soon: 20% OFF Sitewide ✦ Code: DAILUX20 ✦ Free Shipping ₹999+ ✦";

export default function AnnouncementRibbon() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="relative h-10 overflow-hidden text-[#FAF7F2] font-sans-d text-[13px] flex items-center" style={{ background: "linear-gradient(90deg, #1B5E3B, #C9A84C)" }}>
      <div className="flex whitespace-nowrap animate-marquee">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="px-8 tracking-wide">{text}</span>
        ))}
      </div>
      <button onClick={() => setOpen(false)} aria-label="Dismiss" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FAF7F2]/90 hover:text-white">
        <X size={16} />
      </button>
    </div>
  );
}
