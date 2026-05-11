import { useEffect, useRef } from "react";

type Item = {
  side: "left" | "right";
  time: string;
  pillBg: string;
  pillColor: string;
  borderColor: string;
  forIcon: string;
  forLabel: string;
  headline: string;
  body: string;
  tags: string[];
  cta: string;
  delay: number;
};

const items: Item[] = [
  {
    side: "left",
    time: "🌅 6:00 AM",
    pillBg: "#1B5E3B",
    pillColor: "#fff",
    borderColor: "#C9A84C",
    forIcon: "👔",
    forLabel: "For Him",
    headline: "Board-ready in 60 seconds.",
    body: "The Dailux Portable Steam Iron removes every crease before you walk out the door. No ironing board, no stress — just a crisp, confident look every morning.",
    tags: ["Portable", "60-Second", "Travel Ready"],
    cta: "Shop Steam Iron →",
    delay: 0,
  },
  {
    side: "right",
    time: "💄 8:00 AM",
    pillBg: "#C9A84C",
    pillColor: "#1A1A1A",
    borderColor: "#2D7A56",
    forIcon: "💅",
    forLabel: "For Her",
    headline: "Flawless makeup. Zero compromise.",
    body: "Dirty brushes are the #1 cause of skin breakouts. The Dailux Silicone Electric Makeup Brush Cleaner deep cleans every brush in 30 seconds — so your skin stays clear and your makeup stays flawless.",
    tags: ["Electric", "Skin Safe", "30-Second Clean"],
    cta: "Shop Brush Cleaner →",
    delay: 200,
  },
  {
    side: "left",
    time: "🌙 9:00 PM",
    pillBg: "#1B5E3B",
    pillColor: "#fff",
    borderColor: "#1B5E3B",
    forIcon: "🏠",
    forLabel: "For Everyone",
    headline: "See your world more clearly.",
    body: "The Dailux Night Vision Panel transforms how you experience your home after dark. Smart, sleek and powerful — because safety and style should never be a compromise.",
    tags: ["Night Vision", "Smart Home", "Always On"],
    cta: "Shop Night Vision →",
    delay: 400,
  },
];

export default function DailyStory() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateX(0)";
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cardsRef.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden py-16 md:py-24" style={{ background: "#FAF7F2" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="mb-3" style={{ color: "#C9A84C", fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: 4, textTransform: "uppercase" }}>
            ✦ Made for Everyone
          </p>
          <h2 className="font-serif-d" style={{ color: "#1A1A1A", fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1 }}>
            One Day. Endless Possibilities.
          </h2>
          <p className="mx-auto mt-4" style={{ color: "#888", fontFamily: "Inter, sans-serif", fontSize: 16, maxWidth: 600 }}>
            Whether you're heading to the boardroom or the bedroom — Dailux fits your life.
          </p>
        </div>

        <div className="relative">
          {/* Center vertical line - desktop only */}
          <div
            className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-full"
            style={{ width: 2, background: "linear-gradient(#C9A84C,#1B5E3B,#C9A84C)", zIndex: 0 }}
          />

          <div className="relative z-10 flex flex-col gap-10 md:gap-0">
            {items.map((it, idx) => {
              const isLeft = it.side === "left";
              return (
                <div key={idx}>
                  <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                    {/* Left column */}
                    <div className={isLeft ? "md:pr-12 md:text-right" : "hidden md:block"} />
                    {/* Right column placeholder swap */}
                    {isLeft ? (
                      <>
                        <div
                          ref={(el) => { if (el) cardsRef.current[idx] = el; }}
                          className="md:pr-12 md:text-right"
                          style={{
                            opacity: 0,
                            transform: "translateX(-50px)",
                            transition: `all 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${it.delay}ms`,
                          }}
                        >
                          <Card it={it} />
                        </div>
                        <div className="hidden md:block" />
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block" />
                        <div
                          ref={(el) => { if (el) cardsRef.current[idx] = el; }}
                          className="md:pl-12"
                          style={{
                            opacity: 0,
                            transform: "translateX(50px)",
                            transition: `all 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${it.delay}ms`,
                          }}
                        >
                          <Card it={it} />
                        </div>
                      </>
                    )}
                  </div>

                  {idx < items.length - 1 && (
                    <div className="flex items-center justify-center my-6 md:my-10">
                      <div className="hidden md:flex w-full items-center" style={{ opacity: 0.4 }}>
                        <div className="flex-1 border-t border-dashed" style={{ borderColor: "#C9A84C" }} />
                        <span className="mx-3" style={{ color: "#C9A84C" }}>✦</span>
                        <div className="flex-1 border-t border-dashed" style={{ borderColor: "#C9A84C" }} />
                      </div>
                      <div className="md:hidden h-10 border-l border-dashed" style={{ borderColor: "#C9A84C", opacity: 0.4 }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ it }: { it: Item }) {
  return (
    <div
      className="bg-white rounded-2xl p-8 text-left inline-block w-full"
      style={{
        borderLeft: `4px solid ${it.borderColor}`,
        boxShadow: "0 4px 24px rgba(27,94,59,0.08)",
      }}
    >
      <span
        className="inline-block mb-4 px-4 py-1 rounded-full"
        style={{ background: it.pillBg, color: it.pillColor, fontFamily: "Inter, sans-serif", fontSize: 12 }}
      >
        {it.time}
      </span>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{it.forIcon}</span>
        <span style={{ color: "#C9A84C", fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>
          {it.forLabel}
        </span>
      </div>
      <h3 className="font-serif-d mb-4" style={{ color: "#1A1A1A", fontSize: "clamp(26px, 3vw, 36px)", lineHeight: 1.15 }}>
        {it.headline}
      </h3>
      <p style={{ color: "#666", fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.8 }}>
        {it.body}
      </p>
      <div className="flex flex-wrap gap-2 mt-5">
        {it.tags.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full"
            style={{ background: "rgba(27,94,59,0.08)", color: "#1B5E3B", fontFamily: "Inter, sans-serif", fontSize: 12 }}
          >
            {t}
          </span>
        ))}
      </div>
      <button
        className="mt-6 font-semibold hover:underline"
        style={{ color: "#C9A84C", fontFamily: "Inter, sans-serif", fontSize: 14 }}
      >
        {it.cta}
      </button>
    </div>
  );
}
