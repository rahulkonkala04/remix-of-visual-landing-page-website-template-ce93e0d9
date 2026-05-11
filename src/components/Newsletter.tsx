import { useState } from "react";
import { toast } from "sonner";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Welcome to DAILUX. Check your inbox.");
    setEmail("");
  };
  return (
    <section className="w-full py-20" style={{ background: "linear-gradient(135deg, #C9A84C, #A8893E)" }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif-d text-white" style={{ fontSize: "clamp(36px, 5.5vw, 56px)" }}>
          Your daily upgrade starts here.
        </h2>
        <p className="font-sans-d text-white/85 mt-4">Subscribe for early access, drops, and member-only offers.</p>
        <form onSubmit={submit} className="mt-8 flex max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-l-md bg-white/95 text-[#1A1A1A] font-sans-d text-sm outline-none focus:bg-white"
          />
          <button type="submit" className="px-6 py-3 rounded-r-md bg-[#1B5E3B] text-white font-sans-d font-semibold text-sm hover:bg-[#0D3D22] transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
