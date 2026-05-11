import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  const hovering = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX - 5}px, ${e.clientY - 5}px, 0)`;
      }
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      hovering.current = !!t.closest("a, button, input, textarea, [role=button]");
      if (ring.current) {
        if (hovering.current) {
          ring.current.style.width = "48px";
          ring.current.style.height = "48px";
          ring.current.style.background = "rgba(201,168,76,0.2)";
        } else {
          ring.current.style.width = "32px";
          ring.current.style.height = "32px";
          ring.current.style.background = "transparent";
        }
      }
    };

    let raf: number;
    const tick = () => {
      pos.current.rx += (pos.current.x - pos.current.rx) * 0.12;
      pos.current.ry += (pos.current.y - pos.current.ry) * 0.12;
      if (ring.current) {
        const size = hovering.current ? 24 : 16;
        ring.current.style.transform = `translate3d(${pos.current.rx - size}px, ${pos.current.ry - size}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="fixed top-0 left-0 w-[10px] h-[10px] rounded-full bg-[#C9A84C] pointer-events-none z-[9999]" />
      <div ref={ring} className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#C9A84C]/60 pointer-events-none z-[9999] transition-[width,height,background] duration-200 ease-out" />
    </>
  );
}
