/* This is our songs in an Array Object, which can also be called static data
This is for us to be able to fetch these songs without using an API*/
export const Songs = [
  {
    title: "8-Ball Streak",
    artist: "xOHARA",
    image: "/images/song_img/8-ball-streak.jpg",
    duration: "2:33",
    file: "/songs/8-ball-streak.wav",
  },
  {
    title: "Chill Whisper",
    artist: "Kuma",
    image: "/images/song_img/ea-7th-indigo.jpg",
    duration: "2:04",
    file: "/songs/chill-whisper.wav",
  },
  {
    title: "Lil Lilac",
    artist: "7th Indigo",
    image: "/images/song_img/ea-koby-808.jpg",
    duration: "2:31",
    file: "/songs/ea-7th-indigo.wav",
  },
  {
    title: "Jinbe",
    artist: "Koby 808",
    image: "/images/song_img/ea-kuma.jpg",
    duration: "2:27",
    file: "/songs/ea-koby-808.wav",
  },
  {
    title: "Froget Yo' Probs",
    artist: "Lime Nyorobon",
    image: "/images/song_img/ea-lime-nyorobon.png",
    duration: "1:41",
    file: "/songs/ea-lime-nyorobon.wav",
  },
  {
    title: "Beauty Nap",
    artist: "Mossdeep",
    image: "/images/song_img/ea-mossdeep.png",
    duration: "2:16",
    file: "/songs/ea-mossdeep.wav",
  },
  {
    title: "Final Gambit",
    artist: "xOHARA",
    image: "/images/song_img/final-gambit.png",
    duration: "2:25",
    file: "/songs/final-gambit.wav",
  },
  {
    title: "in a... mood",
    artist: "Au-Gustí",
    image: "/images/song_img/in-a-mood.png",
    duration: "2:31",
    file: "/songs/in-a-mood.wav",
  },
  {
    title: "i need myspace",
    artist: "Cherrygroove",
    image: "/images/song_img/i-need-myspace.jpg",
    duration: "2:17",
    file: "/songs/i-need-myspace.wav",
  },
  {
    title: "sofa pretty good",
    artist: "Cherrygroove",
    image: "/images/song_img/sofa-pretty-good.png",
    duration: "1:16",
    file: "/songs/sofa-pretty-good.wav",
  },
];

export const GetSongs = (index = -1) => {
  if (index === -1) {
    return Songs;
  }

  return Songs[index];
};
