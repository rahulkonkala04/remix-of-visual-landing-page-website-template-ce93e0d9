import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const blobsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      blobsRef.current.forEach((b, i) => {
        if (!b) return;
        const factor = 0.15 * (i % 2 === 0 ? 1 : -1) * 60;
        b.style.translate = `${x * factor}px ${y * factor}px`;
      });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const blobs = [
    { color: "#1B5E3B", cls: "blob-1", style: { top: "10%", left: "5%", width: 480, height: 480 } },
    { color: "#C9A84C", cls: "blob-2", style: { top: "30%", right: "5%", width: 520, height: 520 } },
    { color: "#2D7A56", cls: "blob-3", style: { bottom: "5%", left: "20%", width: 460, height: 460 } },
    { color: "#E8D5B0", cls: "blob-4", style: { bottom: "10%", right: "15%", width: 400, height: 400 } },
  ];

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#0D3D22]">
      {blobs.map((b, i) => (
        <div
          key={i}
          ref={(el) => { if (el) blobsRef.current[i] = el; }}
          className={`absolute rounded-full ${b.cls}`}
          style={{ ...b.style, background: b.color, filter: "blur(100px)", opacity: 0.7, transition: "translate 0.6s ease-out" }}
        />
      ))}
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">
        <span className="font-sans-d text-xs md:text-sm uppercase tracking-[0.3em] mb-6" style={{ color: "#C9A84C" }}>
          ✦ Premium Daily Essentials
        </span>
        <h1 className="font-serif-d text-white max-w-4xl" style={{ fontSize: "clamp(48px, 8vw, 80px)" }}>
          Elevate Every Day.
        </h1>
        <p className="font-sans-d text-[18px] text-white/80 max-w-xl mt-6">
          Curated essentials crafted to bring quiet luxury into your daily rituals.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <button className="font-sans-d font-semibold px-8 py-3.5 rounded-md text-[#1A1A1A] transition-all hover:scale-[1.03]" style={{ background: "#C9A84C" }}>
            Explore Collection
          </button>
          <button className="font-sans-d font-semibold px-8 py-3.5 rounded-md border-2 border-white text-white hover:bg-white hover:text-[#1A1A1A] transition-all">
            Our Story
          </button>
        </div>
        <p className="font-sans-d text-[13px] tracking-wide mt-12" style={{ color: "#C9A84C" }}>
          500+ Products · 10K+ Customers · Same-Day Dispatch
        </p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow text-white/80">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
