import { useState, useRef, useEffect } from "react";
import { usePlayerStore } from "../store/reproductorStore";

export const Pausa = () => (
  <svg
    data-encore-id="icon"
    height="16"
    width="16"
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export const Play = () => (
  <svg
    data-encore-id="icon"
    height="16"
    width="16"
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
);

const MusicaActual = ({ image, title }) => {
  return (
    <div
      className={`
      flex items-center gap-5 relative overflow-hidden
      `}
    >
      <picture className="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflows-hidden">
        <img src={image} alt={title} />
      </picture>
      <h3 className="font-bold block"> </h3>
    </div>
  );
};

export function BarraDeReproductor() {
  const { musicaActual, isPlaying, setIsPlaying } = usePlayerStore(
    (state) => state
  );
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const { song, playlist } = musicaActual || {};
    if (song) {
      const src = `/musica/${playlist?.id}/0${song.id}.mp3`;
      if (audioRef.current) {
        audioRef.current.src = src;
        audioRef.current.play();
      }
    }
  }, [musicaActual]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-row justify-between w-full px-4 z-50">
      <div>
        <MusicaActual { ...musicaActual.song} />
      </div>

      <div className="grid place-content-center gap-4 flex-1">
        <div className="flex justify-center">
          <button className="bg-white rounded-full p-2" onClick={handleClick}>
            {isPlaying ? <Pausa /> : <Play />}
          </button>
        </div>
      </div>

      <div className="grid place-content-center"></div>
      <audio ref={audioRef} />
    </div>
  );
}
