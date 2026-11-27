
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MUSIC_SRC, MUSIC_TITLE } from "../config";

export default function MusicPlayer() {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  // Try autoplay when website opens
  useEffect(() => {
    const audio = ref.current;
    if (!audio) return;

    audio.play()
      .then(() => {
        setPlaying(true);
        setError(false);
      })
      .catch(() => {
        setPlaying(false);
      });
  }, []);

  const toggle = async () => {
    const audio = ref.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setPlaying(true);
        setError(false);
      } else {
        audio.pause();
        setPlaying(false);
      }
    } catch {
      setError(true);
      setPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex items-center gap-3">

      <audio
        ref={ref}
        src={MUSIC_SRC}
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setError(true)}
      />

      <AnimatePresence>
        {!playing && (
          <motion.button
            initial={{ opacity: 0, x: 25, scale: 0.8 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: [1, 1.04, 1],
            }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{
              scale: { duration: 1.5, repeat: Infinity },
              default: { duration: 0.4 },
            }}
            onClick={toggle}
            className="glass rounded-full px-4 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(236,72,153,.5)] border border-pink-300/40"
          >
            {error ? "Music unavailable 💔" : "Tap to Play Music 🎵"}
          </motion.button>
        )}
      </AnimatePresence>

      <div className="glass rounded-full pl-2 pr-4 py-2 flex items-center gap-3 shadow-[0_0_25px_rgba(167,139,250,.5)]">

        <motion.button
          onClick={toggle}
          whileTap={{ scale: 0.85 }}
          aria-label={playing ? "Pause music" : "Play music"}
          className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center text-lg text-white"
        >
          {playing ? "⏸" : "▶"}
        </motion.button>

        <div className="leading-tight hidden xs:block sm:block">
          <div className="text-sm font-medium max-w-[130px] truncate">
            {error ? "Check your MP3 🎵" : MUSIC_TITLE}
          </div>

          <div className="flex items-end gap-0.5 h-3 mt-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.span
                key={i}
                className="w-1 rounded bg-pink-300"
                animate={{
                  height: playing ? [3, 12, 5, 10, 3] : 3,
                }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  delay: i * 0.12,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
