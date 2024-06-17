import { Pausa, Play } from "./BarraDeReproductor";
import { usePlayerStore } from "../store/reproductorStore";
import { playlists } from "../libreria/datos";

export function BotonPlayCard({ id }) {
  const { 
    musicaActual, 
    isPlaying, 
    setIsPlaying, 
    setMusicaActual 
    } = usePlayerStore((state) => state);

  const isPlayingPlaylsit = isPlaying && musicaActual?.playlist.id == id

  const handleClick = () => {
    
        if (isPlayingPlaylist){
            setIsPlaying(false)
            return
        }

        fetch(`/api/get-info-playlist.json?id=${id}`)
        .then(res => res.json())
        .then(data => {
            const { songs, playlist } = data 
            setIsPlaying(true)
            setMusicaActual({ songs, playlist,song: songs[0] })
        })
    }
    

  

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-4"
    >
      {isPlayingPlaylsit ? <Pausa /> : <Play />}
    </button>
  );
}
