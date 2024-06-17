import { allPlaylists, songs as allSongs } from "../../libreria/datos";

export async function GET({ params, request }) {
  const { url } = request;
  const urlObjet = new URL(url);
  const id = urlObjet.searchParams.get("id");

  const playlist = allPlaylists.find((playlist) => playlist.id == id);
  const songs = allSongs.filter((song) => song.albumId == playlist?.albumId);

  return new Response(JSON.stringify({ playlist, songs }), {
    headers: { "content-type": "application/json" },
  });
}
