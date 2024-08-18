import { useEffect, useRef } from 'react';

export const GameMusic = ({ isPlaying, onEnded , volume = 1}) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      if (isPlaying) {
        audio.play().catch(error => {
          console.error("Error al reproducir el audio:", error);
        });
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (onEnded) {
      audio.addEventListener('ended', onEnded);
    }
    return () => {
      if (onEnded) {
        audio.removeEventListener('ended', onEnded);
      }
    };
  }, [onEnded]);

  return (
    <audio ref={audioRef} src="/sounds/game_5.mp3" type="audio/mp3"  loop />
  );
};

