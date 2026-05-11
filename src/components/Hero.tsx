import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#0D3D22]">
      {/* Animated blobs */}
      <div className="absolute rounded-full bg-[#1B5E3B] opacity-60" style={{ top: "-100px", left: "-100px", width: 500, height: 500, filter: "blur(80px)", animation: "heroBlob1 9s ease-in-out infinite alternate" }} />
      <div className="absolute rounded-full bg-[#C9A84C] opacity-40" style={{ top: "200px", right: "-150px", width: 400, height: 400, filter: "blur(80px)", animation: "heroBlob2 11s ease-in-out infinite alternate" }} />
      <div className="absolute rounded-full bg-[#2D7A56] opacity-50" style={{ bottom: "-100px", left: "30%", width: 450, height: 450, filter: "blur(80px)", animation: "heroBlob3 10s ease-in-out infinite alternate" }} />
      <div className="absolute rounded-full bg-[#C9A84C] opacity-30" style={{ top: "100px", left: "40%", width: 300, height: 300, filter: "blur(60px)", animation: "heroBlob4 12s ease-in-out infinite alternate" }} />

      {/* Floating icons */}
      <div className="absolute select-none pointer-events-none text-4xl md:text-5xl" style={{ top: "15%", left: "8%", zIndex: 1, animation: "floatA 7s ease-in-out infinite alternate" }}>☀️</div>
      <div className="absolute select-none pointer-events-none text-4xl md:text-5xl" style={{ top: "70%", right: "10%", zIndex: 1, animation: "floatB 8s ease-in-out infinite alternate" }}>🌿</div>
      <div className="absolute select-none pointer-events-none text-3xl md:text-4xl" style={{ top: "25%", right: "20%", zIndex: 1, animation: "floatC 6s ease-in-out infinite alternate" }}>✨</div>

      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">
        <span className="font-sans-d text-xs md:text-sm uppercase tracking-[0.3em] mb-6" style={{ color: "#C9A84C", opacity: 0, animation: "fadeSlideUp 0.6s ease forwards 0.2s" }}>
          ✦ Premium Daily Essentials
        </span>
        <h1 className="font-serif-d text-white max-w-4xl" style={{ fontSize: "clamp(48px, 8vw, 80px)", opacity: 0, animation: "fadeSlideUp 0.8s ease forwards 0.4s" }}>
          Elevate Every Day.
        </h1>
        <p className="font-sans-d text-[18px] text-white/80 max-w-xl mt-6" style={{ opacity: 0, animation: "fadeSlideUp 0.6s ease forwards 0.7s" }}>
          Curated essentials crafted to bring quiet luxury into your daily rituals.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-10" style={{ opacity: 0, animation: "fadeSlideUp 0.6s ease forwards 1s" }}>
          <button className="font-sans-d font-semibold px-8 py-3.5 rounded-md text-[#1A1A1A] transition-all hover:scale-[1.03]" style={{ background: "#C9A84C" }}>
            Explore Collection
          </button>
          <button className="font-sans-d font-semibold px-8 py-3.5 rounded-md border-2 border-white text-white hover:bg-white hover:text-[#1A1A1A] transition-all">
            Our Story
          </button>
        </div>
        <p className="font-sans-d text-[13px] tracking-wide mt-12" style={{ color: "#C9A84C", opacity: 0, animation: "fadeSlideUp 0.6s ease forwards 1.2s" }}>
          500+ Products · 10K+ Customers · Same-Day Dispatch
        </p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow text-white/80">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
