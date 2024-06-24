import { colores } from './colores'

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colores)[keyof typeof colores];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "This is Leo Mattioli",
    color: colores.yellow,
    cover:
      "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1BjbKA-default.jpg",
    artists: ["Leo Mattioli 🌹"," Los grandes éxitos del León Santafesino."],
  },
  {
    id: '2',
    albumId: 2,
    title: "This is Bizzarrap",
    color: colores.green,
    cover:
      "https://i.scdn.co/image/ab67706f00000002af893885818cbe0788c45ccd",
    artists: ["BZRP 🧢"],
  },
  {
    id: '3',
    albumId: 3,
    title: "This is Cuarteto",
    color: colores.rose,
    cover:
      "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84002d425090de3b772473d28a",
    artists: ["Q'Lokura"," Luck-Ra"," La Konga"],
  },
  {
    id: '4',
    albumId: 4,
    title: "This is Emilia",
    color: colores.blue,
    cover:
      "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO0hrh28-default.jpg",
    artists: ["Emilia Mernes"],
  },
  {
    id: '5',
    albumId: 5,
    title: "This is Nicki Nicole",
    color: colores.purple,
    cover:
      "https://i.scdn.co/image/ab67706f00000002c0bd97a28a50a67aaac1db27",
    artists: ["Nicki Nicole"],
  },
  {
    id: '6',
    albumId: 6,
    title: "This is Rock Nacional",
    color: colores.orange,
    cover:
      "https://i.scdn.co/image/ab67706f0000000263cf2197900a244ec92524fe",
    artists: ["Andrés Calamaro", " Gustavo Ceratti"," Andrés Ciro Martinez"],
  },
  {
    id: '7',
    albumId: 7,
    title: "La Vela Puerca",
    color: colores.orange,
    cover:
      "https://i.scdn.co/image/ab67616d00001e0224a7874db45f85653ab70c4e",
    artists: ["La Vela Puerca"],
  },
  {
    id: '8',
    albumId: 8,
    title: "Coldplay",
    color: colores.orange,
    cover:
      "https://i.scdn.co/image/ab67616d000048518ff7c3580d429c8212b9a3b6",
    artists: ["Coldplay"],
  },
  {
    id: '9',
    albumId: 9,
    title: "Internacional 80 y 90",
    color: colores.orange,
    cover:
      "https://i.scdn.co/image/ab67616d00001e02e8dd4db47e7177c63b0b7d53",
    artists: ["Creedence", " Freddie Mercury"],
  },
  {
    id: '10',
    albumId: 10,
    title: "Mates y Música",
    color: colores.orange,
    cover:
      "https://i.scdn.co/image/ab67706f000000022e698f366f81954780ed7ac4",
    artists: ["Turf", " Abel Pintos"],
  },
  {
    id: '11',
    albumId: 11,
    title: "Asadito",
    color: colores.orange,
    cover:
      "https://i.scdn.co/image/ab67706f00000002fab5cd354db03b623bff5b30",
    artists: ["Porque el asado se prende con música."],
  },
  {
    id: '12',
    albumId: 12,
    title: "Los Palmeras",
    color: colores.orange,
    cover:
      "https://i.scdn.co/image/ab67616d00001e02328e973ede81069ff83d552e",
    artists: ["Los Palmeras 🌴"],
  }
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "Conmigo te gusto",
    "image": `https://i.scdn.co/image/ab67616d00001e02abbf55406c7731844081009d`,
    "artists": ["Leo Mattiolli"],
    "album": "Pechos Calientes",
    "duration": "3:05"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Si te agarran las ganas",
    "image": `https://i.scdn.co/image/ab67616d00001e02abbf55406c7731844081009d`,
    "artists": ["Leo Mattiolli"],
    "album": "Pechos Calientes",
    "duration": "4:14"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "Tramposa",
    "image": `https://i.scdn.co/image/ab67616d00001e02abbf55406c7731844081009d`,
    "artists": ["Leo Mattiolli"],
    "album": "Pechos Calientes",
    "duration": "2:25"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "Como podré",
    "image": `https://i.scdn.co/image/ab67616d00001e02abbf55406c7731844081009d`,
    "artists": ["Leo Mattiolli"],
    "album": "Pechos Calientes",
    "duration": "4:04"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "Después de ti",
    "image": `https://i.scdn.co/image/ab67616d00001e02abbf55406c7731844081009d`,
    "artists": ["Leo Mattiolli"],
    "album": "Pechos Calientes",
    "duration": "3:19"
  },
  {
    "id": 1,
    "albumId": 2,
    "title": "Music Sessions #52",
    "image": `https://i.scdn.co/image/ab67616d000048511630dd349221a35ce03a0ccf`,
    "artists": ["Bizzarrap", "Quevedo"],
    "album": "Bzrp Music Sessions",
    "duration": "3:23"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Music Sessions #48",
    "image": `https://i.scdn.co/image/ab67616d000048515bddce84bc8f03ac82c988d4`,
    "artists": ["Bizzarrap", "Thiago PZK"],
    "album": "Bzrp Music Sessions",
    "duration": "2:46"
  },
  
  {
    "id": 1,
    "albumId": 3,
    "title": "Tu Foto ft Valentino Merlo",
    "image": `https://i.scdn.co/image/ab67616d00004851785da791bbcf68e43accedb3`,
    "artists": ["Q'Lokura"," Valentino Merlo"],
    "album": "Cuarteo 2024",
    "duration": "3:00"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Ojalá",
    "image": `https://i.scdn.co/image/ab67616d00001e021acf0e285331b810c448878e`,
    "artists": ["Luck Ra","Eugenia Quevedo"],
    "album": "Ojalá",
    "duration": "3:11"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Como lo Hizo?",
    "image": `https://i.scdn.co/image/ab67616d0000485168cd71dd41a38849f1d8c80f`,
    "artists": ["Eugenia Quevedo","La banda de Carlitos"],
    "album": "Como lo hizo",
    "duration": "3:51"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "Cuarteto Sessions #3",
    "image": `https://i.scdn.co/image/ab67616d00001e02ac99fa258212d9d0472d832c`,
    "artists": ["Q´Lokura"],
    "album": "Cuarteto Sessions #3",
    "duration": "8:36"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "Que onda perdida",
    "image": `https://i.scdn.co/image/ab67616d0000485185a8c16ac53311f68e5dcddf`,
    "artists": ["Q´Lokura"],
    "album": "Que onda perdida",
    "duration": "3:15"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "GTA.mp3",
    "image": "https://i.scdn.co/image/ab67616d00004851bfb94590c914538b193f6931",
    "artists": ["Emilia Mernes"],
    "album": "mp3",
    "duration": "2:40"
  }
]