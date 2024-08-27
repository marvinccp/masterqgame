import { useEffect, useRef } from "react";

export const GameMusic = ({
  isPlaying,
  onEnded,
  volume = 1,
  playOnCorrect,
  playOnStart,
  playOnSelect
}) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;

      if (playOnSelect) {
        audio.src = "/sounds/bip_2.mp3";
        audio.currentTime = 0;
        audio
          .play()
          .catch((error) =>
            console.error("Error al reproducir el audio:", error)
          );
      } else if (playOnStart) {
        audio.src = "/sounds/ok_3.mp3";
        audio.currentTime = 0;
        audio
          .play()
          .catch((error) =>
            console.error("Error al reproducir el audio:", error)
          );
      } else if (isPlaying && playOnCorrect) {
        audio.src = "/sounds/ok_2.mp3";
        audio.currentTime = 0;
        audio
        .play()
        .catch((error) => {
          console.error("Error al reproducir el audio:", error);
        });
      } else if (!isPlaying) {
        audio.pause();
        audio.currentTime = 0;
      }
    }
  }, [isPlaying, volume, playOnCorrect, playOnStart, playOnSelect]);

  useEffect(() => {
    const audio = audioRef.current;
    if (onEnded) {
      audio.addEventListener("ended", onEnded);
    }
    return () => {
      if (onEnded) {
        audio.removeEventListener("ended", onEnded);
      }
    };
  }, [onEnded]);

  return <audio ref={audioRef} src="/sounds/ok_2.mp3" type="audio/mp3" />;
};
