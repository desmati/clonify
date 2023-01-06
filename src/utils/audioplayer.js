export const Play = (file, id, startOver, onSongFinish) => {
  if (!id) {
    // If there is an id in the inputs then we should continue playing the paused song
    let random = (Math.random() * 10000000).toFixed(0);
    id = `audio_${random}`;
  }

  let audioElement = document.getElementById(id);
  if (audioElement) {
    if (startOver) {
      audioElement.remove();
    } else {
      audioElement.play();
      return id;
    }
  }

  audioElement = document.createElement("audio");
  document.body.append(audioElement);

  audioElement.id = id;
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

  // audioElement.addEventListener("timeupdate", () => {
  //   if (onProgress) {
  //     onProgress(audioElement.currentTime, audioElement.duration);
  //   }
  // });

  setTimeout(() => {
    audioElement.muted = false;
    audioElement.play();
  }, 10);

  return id;
};

export const Pause = (elementId) => {
  const audioElement = document.getElementById(elementId);
  audioElement.pause();
};

// export default { Play, Pause };

// function for playing the music
