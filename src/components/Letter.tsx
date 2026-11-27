import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LETTER } from "../config";

export default function Letter() {
  const [open, setOpen] = useState(false);
  return (
    <section className="px-5 py-24 flex flex-col items-center">
      <h2 className="font-script glow-text text-5xl sm:text-7xl text-center">A Letter For You 💌</h2>
      <p className="text-pink-100/70 mt-3 mb-12 text-center">{open ? "Read it slowly 🥹" : "Tap the envelope to open it"}</p>

      <div className="relative w-full max-w-md" style={{ perspective: 1200 }}>
        <motion.button onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label={open ? "Close letter" : "Open letter"}
          className="relative block w-full h-56 sm:h-64 mx-auto" whileHover={{ scale: open ? 1 : 1.04 }} animate={{ y: open ? 20 : [0, -8, 0] }}
          transition={open ? { duration: 0.4 } : { duration: 3, repeat: Infinity }}>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-300 to-rose-400 shadow-[0_0_40px_rgba(255,158,203,.5)]" />
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top right,transparent 49.5%,rgba(255,255,255,.35) 50%)", clipPath: "polygon(0 0,0 100%,50% 55%)" }} />
            <div className="absolute inset-0 bg-rose-300/70" style={{ clipPath: "polygon(100% 0,100% 100%,50% 55%)" }} />
            <div className="absolute inset-0 bg-pink-200" style={{ clipPath: "polygon(0 100%,100% 100%,50% 50%)" }} />
          </div>
          <motion.div className="absolute top-0 inset-x-0 h-1/2 origin-top bg-gradient-to-b from-pink-200 to-rose-300 rounded-t-xl"
            style={{ clipPath: "polygon(0 0,100% 0,50% 100%)", transformStyle: "preserve-3d" }} animate={{ rotateX: open ? 180 : 0, zIndex: open ? 0 : 20 }} transition={{ duration: 0.7 }} />
          {!open && <div className="absolute z-30 left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 text-4xl drop-shadow-lg">💖</div>}
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.article initial={{ opacity: 0, y: 80, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 60 }} transition={{ delay: 0.5, duration: 0.8, type: "spring", damping: 20 }}
              className="mt-8 rounded-2xl p-6 sm:p-10 text-gray-800 shadow-[0_20px_60px_rgba(0,0,0,.5)]"
              style={{ background: "repeating-linear-gradient(#fffaf0,#fffaf0 31px,#f5d7e6 32px)" }}>
              {LETTER.map((line, i) => (
                <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 + i * 0.35 }}
                  className={`font-hand text-xl sm:text-2xl leading-8 mb-4 ${i === 0 || i >= LETTER.length - 2 ? "text-pink-600 font-semibold" : ""}`}>{line}</motion.p>
              ))}
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
