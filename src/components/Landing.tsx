import { motion } from "framer-motion";
import { NAME } from "../config";

export default function Landing({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.section className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(14px)" }} transition={{ duration: 0.8 }}>
      <motion.div className="text-7xl sm:text-8xl mb-4" animate={{ y: [0, -14, 0], rotate: [-4, 4, -4] }} transition={{ duration: 4, repeat: Infinity }}>🎂</motion.div>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
        className="font-script glow-text text-6xl sm:text-8xl md:text-9xl leading-tight">
        Happy Birthday, {NAME}! 🎂
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 1 }} className="mt-5 text-lg sm:text-2xl text-pink-100/90 font-light tracking-wide">
        Today is all about you ✨
      </motion.p>
      <motion.button onClick={onOpen} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.6 }}
        whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}
        className="relative mt-12 px-8 py-4 rounded-full font-medium text-base sm:text-lg bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 shadow-[0_0_30px_rgba(236,72,153,.7)]">
        <motion.span className="absolute inset-0 rounded-full bg-pink-400/40 -z-10" animate={{ scale: [1, 1.35], opacity: [0.7, 0] }} transition={{ duration: 1.8, repeat: Infinity }} />
        Open Your Birthday Surprise 🎁
      </motion.button>
    </motion.section>
  );
}
