export interface TJawaWeddingPerson {
  name: string;
  fullName: string;
  photo: string;
  parentText: string;
  instagram?: string;
}

export interface TJawaWeddingEvent {
  title: string;
  date: string;
  time: string;
  place: string;
  address: string;
  mapsUrl: string;
}

export interface TJawaWeddingStory {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface TJawaWeddingGift {
  id: number;
  type: "bank" | "ewallet";
  provider: string;
  accountNumber: string;
  accountName: string;
}

export interface TJawaWeddingData {
  groom: TJawaWeddingPerson;
  bride: TJawaWeddingPerson;

  weddingDate: string;

  cover: string;
  closingImage: string;

  opening: {
    label: string;
    title: string;
    description: string;
  };

  quote: {
    text: string;
    source: string;
  };

  events: TJawaWeddingEvent[];

  stories: TJawaWeddingStory[];

  gallery: string[];

  gifts: TJawaWeddingGift[];

  music: {
    title: string;
    artist: string;
    file: string;
  };

  whatsapp: string;
}