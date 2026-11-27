import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Background from "./components/Background";
import Confetti from "./components/Confetti";
import Landing from "./components/Landing";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Letter from "./components/Letter";
import Wish from "./components/Wish";
import Final from "./components/Final";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [burst, setBurst] = useState(0); // changing this re-fires confetti

  const open = () => { setOpened(true); setBurst((b) => b + 1); window.scrollTo({ top: 0 }); };
  const replay = () => { window.scrollTo({ top: 0, behavior: "smooth" }); setTimeout(() => setOpened(false), 500); };

  return (
    <>
      <Background />
      {burst > 0 && <Confetti key={burst} />}
      <AnimatePresence mode="wait">
        {!opened ? (
          <Landing key="landing" onOpen={open} />
        ) : (
          <motion.main key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
            <Hero />
            <Gallery />
            <Letter />
            <Wish />
            <Final onReplay={replay} />
          </motion.main>
        )}
      </AnimatePresence>
      <MusicPlayer />
    </>
  );
}
