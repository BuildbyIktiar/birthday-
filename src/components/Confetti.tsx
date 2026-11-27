import { useMemo } from "react";
import { motion } from "framer-motion";

const COLORS = ["#ff9ecb", "#ffd98a", "#a78bfa", "#7dd3fc", "#fb7185", "#ffffff"];

/** Renders a burst of confetti each time it mounts. Change its `key` to fire again. */
export default function Confetti({ count = 90 }: { count?: number }) {
  const pieces = useMemo(
    () => Array.from({ length: count }, (_, i) => ({
      x: Math.random() * 100, delay: Math.random() * 0.6, d: 2.6 + Math.random() * 2.4, w: 6 + Math.random() * 8,
      c: COLORS[i % COLORS.length], r: Math.random() * 720 - 360, drift: Math.random() * 160 - 80, round: i % 3 === 0,
    })), [count]);
  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden" aria-hidden>
      {pieces.map((p, i) => (
        <motion.span key={i} className="absolute top-0" style={{ left: `${p.x}%`, width: p.w, height: p.w * 0.6, background: p.c, borderRadius: p.round ? 999 : 2 }}
          initial={{ y: -30, opacity: 1, rotate: 0 }} animate={{ y: "105vh", x: p.drift, rotate: p.r, opacity: [1, 1, 0] }}
          transition={{ duration: p.d, delay: p.delay, ease: "easeIn" }} />
      ))}
    </div>
  );
}
