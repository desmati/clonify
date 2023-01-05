export const Play = (file,) => {
  let random = (Math.random() * 10000000).toFixed(0);
  let id = `audio_${random}`;
  let audioElement = document.getElementById(id);

  audioElement = document.createElement("audio");
  document.body.append(audioElement);

  audioElement.id = id;
  audioElement.muted = true;
  audioElement.src = file;
  audioElement.autoplay = true;
  audioElement.preload = "auto";
  audioElement.addEventListener("ended", () => {
    audioElement.remove();
  });
  setTimeout(() => {
    audioElement.muted = false;
    audioElement.play();
  }, 10);
};
export default Play;
// function for playing the music 