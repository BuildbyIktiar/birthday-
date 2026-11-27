import { useMemo } from "react";
import { motion } from "framer-motion";

const rand = (a: number, b: number) => a + Math.random() * (b - a);

export default function Background() {
  const stars = useMemo(() => Array.from({ length: 70 }, () => ({ x: rand(0, 100), y: rand(0, 100), s: rand(1, 3), d: rand(2, 5), delay: rand(0, 4) })), []);
  const floaters = useMemo(() => Array.from({ length: 16 }, (_, i) => ({ x: rand(2, 96), s: rand(14, 28), d: rand(14, 26), delay: rand(0, 14), e: ["💖", "✨", "💜", "⭐", "🌸"][i % 5] })), []);
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg,#1a0b3d 0%,#0b0820 45%,#0f1a4a 75%,#4a1d5e 100%)" }} />
      <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-30 bg-fuchsia-600" />
      <div className="absolute -bottom-40 -right-40 w-[38rem] h-[38rem] rounded-full blur-3xl opacity-25 bg-rose" />
      {stars.map((s, i) => (
        <motion.span key={i} className="absolute rounded-full bg-white" style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s, boxShadow: "0 0 8px 2px rgba(255,255,255,.7)" }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }} transition={{ duration: s.d, delay: s.delay, repeat: Infinity }} />
      ))}
      {floaters.map((f, i) => (
        <motion.span key={i} className="absolute bottom-[-40px]" style={{ left: `${f.x}%`, fontSize: f.s }}
          animate={{ y: [0, -1100], x: [0, 30, -30, 0], opacity: [0, 0.8, 0.8, 0] }} transition={{ duration: f.d, delay: f.delay, repeat: Infinity, ease: "linear" }}>
          {f.e}
        </motion.span>
      ))}
    </div>
  );
}
