import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WISH_MESSAGE } from "../config";

export default function Wish() {
  const [round, setRound] = useState(0);
  const stars = useMemo(() => Array.from({ length: 36 }, () => ({ x: Math.random() * 100, s: 16 + Math.random() * 26, d: 3 + Math.random() * 3, delay: Math.random() * 1.2, e: ["⭐", "✨", "🌟", "💫", "💖"][Math.floor(Math.random() * 5)] })), [round]);
  return (
    <section className="px-5 py-24 text-center relative">
      <h2 className="font-script glow-text text-5xl sm:text-7xl">Make a Wish 🌠</h2>
      <p className="text-pink-100/70 mt-3 mb-10">Close your eyes, think of something wonderful…</p>
      <motion.button onClick={() => setRound((r) => r + 1)} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }}
        className="px-9 py-4 rounded-full text-lg font-medium bg-gradient-to-r from-violet-500 to-pink-500 shadow-[0_0_30px_rgba(167,139,250,.8)]">
        Make a Wish ✨
      </motion.button>
      <AnimatePresence mode="wait">
        {round > 0 && (
          <motion.div key={round}>
            <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden" aria-hidden>
              {stars.map((s, i) => (
                <motion.span key={i} className="absolute bottom-0" style={{ left: `${s.x}%`, fontSize: s.s, filter: "drop-shadow(0 0 10px #ffd98a)" }}
                  initial={{ y: 0, opacity: 0, scale: 0.3 }} animate={{ y: "-100vh", opacity: [0, 1, 1, 0], scale: [0.3, 1.2, 1], rotate: 180 }} transition={{ duration: s.d, delay: s.delay, ease: "easeOut" }}>{s.e}</motion.span>
              ))}
            </div>
            <motion.p initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.8, duration: 1 }}
              className="glass mx-auto mt-10 max-w-xl rounded-3xl px-6 py-6 font-hand text-2xl sm:text-3xl text-gold leading-snug shadow-[0_0_40px_rgba(255,217,138,.25)]">
              {WISH_MESSAGE}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
