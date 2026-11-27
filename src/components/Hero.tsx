import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NAME, DATE_LABEL, HERO_MESSAGE } from "../config";

const pad = (n: number) => String(n).padStart(2, "0");

function Tile({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass rounded-2xl px-4 py-3 sm:px-6 sm:py-4 min-w-[76px] sm:min-w-[96px]">
      <div className="text-3xl sm:text-4xl font-semibold text-gold tabular-nums">{value}</div>
      <div className="text-xs sm:text-sm text-pink-100/70 mt-1">{label}</div>
    </div>
  );
}

export default function Hero() {
  const [now, setNow] = useState(new Date());
  useEffect(() => { const t = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(t); }, []);
  const balloons = [{ x: "6%", c: "#ff6fae", d: 0 }, { x: "86%", c: "#a78bfa", d: 1.2 }, { x: "18%", c: "#7dd3fc", d: 2.2 }, { x: "74%", c: "#ffd98a", d: 0.6 }];
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 py-20 overflow-hidden">
      {balloons.map((b, i) => (
        <motion.div key={i} className="absolute top-[18%] hidden sm:block" style={{ left: b.x }} animate={{ y: [0, -30, 0], rotate: [-5, 5, -5] }} transition={{ duration: 5 + i, delay: b.d, repeat: Infinity, ease: "easeInOut" }}>
          <div className="w-14 h-[68px] rounded-[50%_50%_50%_50%/45%_45%_55%_55%] opacity-90" style={{ background: `radial-gradient(circle at 30% 30%, #fff8, ${b.c} 60%)`, boxShadow: `0 0 30px ${b.c}88` }} />
          <div className="mx-auto w-px h-24 bg-white/40" />
        </motion.div>
      ))}
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-pink-200 tracking-widest text-sm sm:text-base mb-2">{DATE_LABEL} 🎉</motion.p>
      <h1 className="font-script glow-text leading-[1.05] text-6xl sm:text-8xl md:text-9xl" aria-label={`Happy Birthday ${NAME}!`}>
        {"Happy Birthday".split("").map((ch, i) => (
          <motion.span key={i} className="inline-block" initial={{ opacity: 0, y: 40, rotate: -8 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ delay: 0.4 + i * 0.05, type: "spring", stiffness: 120 }}>
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
        <br />
        <motion.span className="inline-block bg-gradient-to-r from-pink-300 via-yellow-200 to-violet-300 bg-clip-text text-transparent"
          initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.4, type: "spring", stiffness: 90 }}>
          {NAME}!
        </motion.span>
      </h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }} className="mt-8 max-w-xl text-base sm:text-xl leading-relaxed text-pink-50/90 font-light">
        {HERO_MESSAGE}
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.1 }} className="mt-10">
        <p className="font-hand text-2xl text-gold mb-3">0 days to go — it's finally HERE! 🎉</p>
        <div className="flex gap-3 sm:gap-4 justify-center">
          <Tile value={pad(now.getHours())} label="hours" />
          <Tile value={pad(now.getMinutes())} label="minutes" />
          <Tile value={pad(now.getSeconds())} label="seconds" />
        </div>
        <p className="text-sm text-pink-100/60 mt-3">of your special day, ticking by 💫</p>
      </motion.div>
      <motion.a href="#memories" className="absolute bottom-6 text-pink-200/80 text-sm" animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>scroll for memories ↓</motion.a>
    </section>
  );
}
