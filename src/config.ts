// ✏️ EDIT EVERYTHING PERSONAL HERE ✏️
export const NAME = "Minha";
export const DATE_LABEL = "November 27";

// 🎵 Put your MP3 at public/music/birthday.mp3 (or change this path)
export const MUSIC_SRC = "/birthday-/music/birthday.mp3";
export const MUSIC_TITLE = "Our Birthday Song";

export const HERO_MESSAGE =
  "Another year of you, and the world got a little brighter again. Today, you don't have to do a single thing except be happy — you deserve every bit of it.";

// 📸 PHOTOS: copy your pictures into public/photos/ and set src below,
// e.g. src: "/photos/1.jpg". Leave src empty to show a pretty placeholder.
export interface Photo { src: string; caption: string; rotate: number }
export const PHOTOS: Photo[] = [
  { src: "/birthday-/photos/2.png", caption: "That one crazy day 😂", rotate: -6 },
  { src: "/birthday-/photos/6.png", caption: "Us, being us 💕", rotate: 4 },
  { src: "/birthday-/photos/1.png", caption: "Best memories ✨", rotate: -3 },
  { src: "/birthday-/photos/5.png", caption: "Smiles for miles 🌸", rotate: 7 },
  { src: "/birthday-/photos/4.png", caption: "Never forget this one 🎀", rotate: -5 },
  { src: "/birthday-/photos/3.png", caption: "My favorite human 💖", rotate: 3 },
];

export const LETTER = [
  "Dear Minha,",
  "Happy birthday to the person who somehow became my safe place without either of us noticing. I still can't pinpoint the exact moment you went from \"someone I know\" to \"my person\" — but I'm so glad you did.",
  "Thank you for every late-night talk, every ridiculous laugh that left my stomach hurting, and every time you listened when I didn't even know what I needed to say. You make ordinary days feel like little adventures.",
  "You have the kindest heart and the brightest smile, and I hope you never forget how much light you bring into other people's lives — especially mine.",
  "This year, I wish you peace on your hard days, success in everything you dream about, and so many beautiful moments that you lose count. And whatever comes, I'll be right here, cheering the loudest.",
  "Love you always,",
  "Your best friend 💖",
];

export const WISH_MESSAGE =
  "May every wish you made tonight find its way to you — softly, beautifully, and right on time. You are loved more than you know. ✨";

export const FINAL_MESSAGE =
  "Wishing you happiness that fills your whole heart, success that makes you proud, peace that stays with you, and countless beautiful moments that turn into memories you'll smile about forever.";
