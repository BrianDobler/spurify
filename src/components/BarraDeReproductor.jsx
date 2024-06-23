import { useRef, useEffect, useState } from "react";
import { usePlayerStore } from "../store/reproductorStore";
import { Slider } from "./Slider";

export const Pausa = ({ className }) => (
  <svg
    className={className}
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

export const Play = ({ className }) => (
  <svg
    className={className}
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

export const Expansor = () => (
  <svg
    height="16"
    fill="currentColor"
    width="16"
    data-encore-id="icon"
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path
      d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 
    0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 
    0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z"
    ></path>
  </svg>
);
export const Siguiente = () => (
  <svg
    height="16"
    fill="currentColor"
    width="16"
    data-encore-id="icon"
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path
      d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 
    1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"
    ></path>
  </svg>
);

export const Anterior = () => (
  <svg
    height="16"
    fill="currentColor"
    width="16"
    data-encore-id="icon"
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path
      d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 
    1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"
    ></path>
  </svg>
);

export const VolumeSilence = () => (
  <svg
    fill="currentColor"
    height="16"
    width="16"
    role="presentation"
    aria-label="Volumen apagado"
    aria-hidden="true"
    id="volume-icon"
  >
    <path
      d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 
    8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47
    1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"
    ></path>
    <path
      d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 
      
      3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 
      9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"
    ></path>
  </svg>
);

export const Volume = () => (
  <svg
    fill="currentColor"
    height="16"
    width="16"
    role="presentation"
    aria-label="Volumen alto"
    aria-hidden="true"
    id="volume-icon"
  >
    <path
      d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 
  3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 
  0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 
  1 0 4.88z"
    ></path>
    <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
  </svg>
);

const MusicaActual = ({ image, title, artists }) => {
  return (
    <div
      className={`
      flex items-center gap-5 py-2 relative overflow-hidden
      `}
    >
      <picture className="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
        <img src={image} alt={title} />
      </picture>
      <div className="flex flex-col">
        <h3 className="font-semi text-sm block">{title}</h3>
        <span className="text-xs opacity-50 font-medium">{artists?.join(", ")}</span>
      </div>
    </div>
  );
};

const SongControl = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime);
  };

  const formatoTiempoCancion = (tiempoCancion) => {
    if (tiempoCancion == null) return `0:00`;

    const segundos = Math.floor(tiempoCancion % 60)
      .toString()
      .padStart(2, "0");
    const minutos = Math.floor(tiempoCancion / 60);
    return `${minutos}:${segundos}`;
  };

  const duration = audio?.current?.duration ?? 0;

  return (
    <div className="flex flex-x gap-x-3 text-xs pt-2">
      <span className="opacity-50 w-12 text-right">
        {formatoTiempoCancion(currentTime)}
      </span>
      <Slider
        max={audio?.current?.duration ?? 0}
        min={0}
        value={[currentTime]}
        className="w-[400px]"
        onValueChange={(value) => {
          const [newCurrentTime] = value;
          audio.current.currentTime = newCurrentTime;
        }}
      />
      <span className="opacity-50 w-12">
        {duration ? formatoTiempoCancion(duration) : null}
      </span>
    </div>
  );
};

const VolumeControl = () => {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const previousVolumeRef = useRef(volume);

  const isVolumeSilenced = volume < 0.1;
  const handleClickVolumen = () => {
    if (isVolumeSilenced) {
      setVolume(previousVolumeRef.current);
    } else {
      previousVolumeRef.current = volume;
      setVolume(0);
    }
  };

  return (
    <div className="flex justify-center flex-end gap-x-2  text-white">
      <button
        className="opacticy-20 hover:opacity-100 transition"
        onClick={handleClickVolumen}
      >
        {isVolumeSilenced ? <VolumeSilence /> : <Volume />}
      </button>
      <Slider
        defaultValue={[100]}
        max={100}
        min={0}
        value={[volume * 100]}
        className="w-[95px]"
        onValueChange={(value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          setVolume(volumeValue);
        }}
      />
      <button>
        <Expansor />
      </button>
    </div>
  );
};

export function BarraDeReproductor() {
  const { musicaActual, isPlaying, setIsPlaying, volume } = usePlayerStore(
    (state) => state
  );
  const audioRef = useRef();

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const { song, playlist } = musicaActual || {};
    if (song) {
      const src = `/musica/${playlist?.id}/0${song.id}.mp3`;
      if (audioRef.current) {
        audioRef.current.src = src;
        audioRef.current.volume = volume;
        audioRef.current.play();
      }
    }
  }, [musicaActual]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-row justify-between w-full px-2 z-50">
      <div className="w-[350px] font-semibold">
        <MusicaActual {...musicaActual.song} />
      </div>

      <div className="flex place-content-center gap-4 flex-1">
        <div className="flex justify-center flex-col items-center">
          <div className="text-white/70 px-2 flex justify-between gap-6">
            <button className="hover:text-white">
              <Anterior />
            </button>
            <button className="bg-white rounded-full p-2 hover:scale-105" onClick={handleClick}>
              {isPlaying ? <Pausa /> : <Play />}
            </button>
            <button className="hover:text-white">
              <Siguiente />
            </button>
          </div>
          <SongControl audio={audioRef} />
          <audio ref={audioRef} />
        </div>
      </div>

      <div className="w-[350px] grid place-content-center">
        <VolumeControl />
      </div>
    </div>
  );
}
