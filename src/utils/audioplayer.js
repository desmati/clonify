export const Play = (file, onSongFinish) => {
  // let random = (Math.random() * 10000000).toFixed(0);
  // let id = `audio_${random}`;
  // let audioElement = document.getElementById(id);

  let audioElement = document.createElement("audio");
  document.body.append(audioElement);

  // audioElement.id = id;
  audioElement.muted = true;
  audioElement.src = file;
  audioElement.autoplay = true;
  audioElement.preload = "auto";
  audioElement.addEventListener("ended", () => {
    if (onSongFinish) {
      onSongFinish();
    } else {
      audioElement.remove();
    }
  });
  setTimeout(() => {
    audioElement.muted = false;
    audioElement.play();
  }, 10);
};

export default Play;
// function for playing the music
