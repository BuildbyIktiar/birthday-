import { motion } from "framer-motion";
import { FINAL_MESSAGE } from "../config";

export default function Final({ onReplay }: { onReplay: () => void }) {
  return (
    <section className="px-5 pt-24 pb-36 text-center">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
        <motion.div className="text-6xl mb-4" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.4, repeat: Infinity }}>💖</motion.div>
        <h2 className="font-script glow-text text-6xl sm:text-8xl">Happy Birthday, Minha! 💖</h2>
        <p className="mt-8 mx-auto max-w-2xl text-lg sm:text-xl text-pink-50/90 font-light leading-relaxed">{FINAL_MESSAGE}</p>
        <motion.button onClick={onReplay} whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-4 rounded-full font-medium bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 shadow-[0_0_30px_rgba(236,72,153,.6)]">
          Replay the Surprise 🔁
        </motion.button>
      </motion.div>
    </section>
  );
}
