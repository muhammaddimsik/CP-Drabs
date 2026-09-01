import { TWeddingData } from "../types/weddingType";

export const weddingData: TWeddingData = {
  groom: {
    name: "Arjun",
    fullName: "Arjun Arfani",
    photo: "/wedding/images/groom.png",
    parentText: "Putra kedua dari Bapak Fatoni Ragum & Ibu Nita Lusiana ",
    instagram: "https://www.instagram.com/arjunarfani?igsh=a2NvZGFhY3c1dGd5",
  },

  bride: {
    name: "Roi",
    fullName: "Roikhatun Khasanah",
    photo: "/wedding/images/bride.png",
    parentText: "Putri kedua dari Bapak Slamet Kuwat & Ibu Casmiah",
    instagram:
      "https://www.instagram.com/roikhasanah?igsh=MThuOHl3M3NzYjFmNA==",
  },

  weddingDate: "2026-08-24T19:00:00+07:00",

  cover: "/wedding/images/cover.jpg",

  closingImage: "/wedding/images/closing.jpg",

  quote: {
    arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم",
    text: "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya.",
    source: "QS. Ar-Rum : 21",
  },

  events: [
    {
      title: "Ramah Tamah",
      date: "Senin, 24 Agustus 2026",
      time: "Selera Anda",
      place: "Mempelai Pria",
      address:
        "Sidodadi gang A, Kel. Kedungwuni Timur, Kec. Kedungwuni, Kab. Pekalongan",
      mapsUrl: "https://maps.app.goo.gl/KNGEypE3WpU8LFo87?g_st=aw",
    },
    {
      title: "Resepsi",
      date: "Selasa, 25 Agustus 2026",
      time: "13.00 - 16.00 WIB",
      place: "Mempelai Wanita",
      address: "Dk. Keprok, Ds. Donowangun, Kec. Talun, Kab. Pekalongan",
      mapsUrl: "https://maps.app.goo.gl/hrnUL1pLPxLWMeRv7?g_st=aw",
    },
  ],

  stories: [
    {
      year: "2020",
      title: "Pertemuan",
      description:
        "Kami pertama kali bertemu di sebuah acara kampus yang tidak pernah kami lupakan.",
      image: "/wedding/images/story-1.jpg",
    },
    {
      year: "2021",
      title: "Pendekatan",
      description:
        "Seiring waktu, kami semakin dekat dan saling memahami satu sama lain.",
    },
    {
      year: "2025",
      title: "Lamaran",
      description:
        "Dengan penuh keyakinan, kami memutuskan melangkah menuju hubungan yang lebih serius.",
      image: "/wedding/images/story-2.jpg",
    },
    {
      year: "2026",
      title: "Pernikahan",
      description:
        "Insya Allah, kami akan memulai babak baru sebagai suami dan istri.",
    },
  ],

  gallery: [
    "/wedding/images/gallery-1.jpg",
    "/wedding/images/gallery-2.jpg",
    "/wedding/images/closing.jpg",
    "/wedding/images/gallery-5.jpg",
    "/wedding/images/story-2.jpg",
    "/wedding/images/gallery-6.jpg",
    "/wedding/images/gallery-4.jpg",
  ],

  gifts: [
    {
      id: 1,
      type: "bank",
      provider: "BCA",
      accountNumber: "2501178588",
      accountName: "Muhammad Arjun Arfani",
    },
    {
      id: 2,
      type: "ewallet",
      provider: "DANA",
      accountNumber: "08992669070",
      accountName: "Muhammad Arjun Arfani",
    },
  ],

  music: {
    title: "Wedding Song",
    artist: "Artist",
    file: "/wedding/music/wedding-song.mp3",
  },

  whatsapp: "628992669070",
};
