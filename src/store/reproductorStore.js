import { create } from "zustand";
import { playlists } from "../libreria/datos";
import { Volume } from "../components/BarraDeReproductor";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  musicaActual: { playlist: null, song: null, songs: [] },
  volume:1,
  setVolume: (volume) => set({ volume }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setMusicaActual: (musicaActual) => set({ musicaActual }),
}));
