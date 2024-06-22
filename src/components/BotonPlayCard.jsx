import { Pausa, Play } from "./BarraDeReproductor";
import { usePlayerStore } from "../store/reproductorStore";
import { playlists } from "../libreria/datos";

export function BotonPlayCard({ id, size='small' }) {
  const { 
    musicaActual, 
    isPlaying, 
    setIsPlaying, 
    setMusicaActual 
    } = usePlayerStore((state) => state);

  const isPlayingPlaylist = isPlaying && musicaActual?.playlist.id == id

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
            console.log({ songs, playlist })
        })
    }
    
const claseIcono = size == 'small' ? 'w-4 h-4' : 'w-5 h-5'
  

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition
       shadow-zinc-900/80 shadow-lg"
    >
      {isPlayingPlaylist ? <Pausa className={claseIcono} /> : <Play className={claseIcono}  />}
    </button>
  );
}
export default BotonPlayCard