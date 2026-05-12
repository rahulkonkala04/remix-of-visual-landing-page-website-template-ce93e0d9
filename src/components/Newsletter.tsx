import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  };

  return (
    <section className="py-28 px-6 bg-[var(--graphite)]">
      <div className="relative max-w-[700px] mx-auto glass rounded-3xl p-10 md:p-[60px] overflow-hidden text-center">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(199,164,71,0.35), transparent 70%)", filter: "blur(40px)" }} />
        <div className="relative">
          <span className="font-sans-d text-[11px] tracking-[0.4em] uppercase text-[var(--gold)]">✦ Exclusive Access ✦</span>
          <h2 className="font-serif-d text-4xl md:text-5xl text-[var(--off-white)] mt-5 leading-tight">
            Your daily upgrade <em className="italic text-shimmer">starts here.</em>
          </h2>
          <p className="font-sans-d text-[var(--off-white)]/60 mt-4 max-w-md mx-auto">
            Subscribe for early access, drops, and member-only offers.
          </p>
          {done ? (
            <p className="mt-10 font-serif-d italic text-2xl text-shimmer">✓ Welcome to the inner circle.</p>
          ) : (
            <form onSubmit={submit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-3.5 rounded-full glass text-[var(--off-white)] placeholder:text-[var(--off-white)]/40 font-sans-d text-sm outline-none focus:border-[var(--gold)]"
              />
              <button type="submit" className="px-7 py-3.5 rounded-full bg-[var(--emerald)] hover:bg-[#0f7048] text-white font-sans-d text-[12px] font-semibold tracking-[0.2em] uppercase transition-colors">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
