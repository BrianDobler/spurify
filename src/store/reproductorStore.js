import { create } from "zustand";
import { playlists } from "../libreria/datos";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  musicaActual: { playlist: null, song: null, songs: [] },
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setMusicaActual: (musicaActual) => set({ musicaActual }),
}));
