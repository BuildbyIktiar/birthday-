import { motion } from "framer-motion";
import { PHOTOS } from "../config";

const tints = ["from-pink-400 to-fuchsia-600", "from-violet-400 to-indigo-600", "from-sky-300 to-violet-500", "from-rose-300 to-pink-600"];

export default function Gallery() {
  return (
    <section id="memories" className="px-5 py-24 max-w-6xl mx-auto">
      <h2 className="font-script glow-text text-5xl sm:text-7xl text-center">Our Memories Wall 📸</h2>
      <p className="text-center text-pink-100/70 mt-3 mb-14">Little moments that mean the world</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-8 sm:gap-y-14">
        {PHOTOS.map((p, i) => (
          <motion.figure key={i} initial={{ opacity: 0, y: 50, rotate: p.rotate * 2 }} whileInView={{ opacity: 1, y: 0, rotate: p.rotate }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.12 }} whileHover={{ scale: 1.08, rotate: 0, zIndex: 10 }} className="relative">
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              className="bg-white p-2 pb-8 sm:p-3 sm:pb-12 rounded-sm shadow-[0_10px_40px_rgba(0,0,0,.5)]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-yellow-200/80 rotate-[-3deg] rounded-sm" />
              <div className="aspect-square w-full overflow-hidden bg-gray-200">
                {p.src ? (
                  <img src={p.src} alt={p.caption} loading="lazy" className="w-full h-full object-cover" />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${tints[i % 4]} flex flex-col items-center justify-center text-white text-center p-2`}>
                    <span className="text-4xl sm:text-5xl">📷</span>
                    <span className="text-[10px] sm:text-xs mt-2 opacity-90">Replace me in<br />src/config.ts</span>
                  </div>
                )}
              </div>
              <figcaption className="absolute bottom-1.5 sm:bottom-3 inset-x-0 text-center font-hand text-lg sm:text-2xl text-gray-700">{p.caption}</figcaption>
            </motion.div>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
