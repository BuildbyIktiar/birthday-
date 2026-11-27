# 🎂 Minha's Birthday Website

React + TypeScript + Tailwind CSS + Framer Motion (Vite).

## Run locally
Requires Node.js 18+.
```
npm install
npm run dev      # open the URL shown (usually http://localhost:5173)
```
Build for hosting: `npm run build` (output in `dist/`; deploy free on Netlify / Vercel / GitHub Pages).

## Personalize (everything is in `src/config.ts`)
- **Photos:** copy images into `public/photos/`, then set `src: "/photos/1.jpg"` for each item in `PHOTOS`. Change captions too.
- **Music:** put your MP3 at `public/music/birthday.mp3` (or edit `MUSIC_SRC`). It never autoplays — visitors press play.
- **Letter, hero message, wish, final message:** edit `LETTER`, `HERO_MESSAGE`, `WISH_MESSAGE`, `FINAL_MESSAGE`. Sign the letter with your name!
