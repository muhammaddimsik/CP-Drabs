export type TWeddingGiftType = "bank" | "ewallet";

export interface TWeddingGift {
  id: number;
  type: TWeddingGiftType;
  provider: string;
  accountNumber: string;
  accountName: string;
}

export interface TWeddingPerson {
  name: string;
  fullName: string;
  photo: string;
  parentText: string;
  instagram?: string;
}

export interface TWeddingEvent {
  title: string;
  date: string;
  time: string;
  place: string;
  address: string;
  mapsUrl: string;
}

export interface TWeddingStory {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface TWeddingData {
  groom: TWeddingPerson;
  bride: TWeddingPerson;

  weddingDate: string;

  cover: string;
  closingImage: string;

  quote: {
    arabic?: string;
    text: string;
    source: string;
  };

  events: TWeddingEvent[];

  gifts: TWeddingGift[];
  stories: TWeddingStory[];

  gallery: string[];

  music: {
    title: string;
    artist: string;
    file: string;
  };

  whatsapp: string;
}
