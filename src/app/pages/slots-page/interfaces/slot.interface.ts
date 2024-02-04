
export interface Game {
    favoriteCount: number;
    game_id: string;
    name: string;
    provider: string;
    providerName: string;
    image: string;
    imageSet: {
      blurhash: string;
      original: string;
      webp: string;
    };
    url: string;
    order: number;
    tags: string[];
    stats: any[];
    gameId: string;
    image2: string;
  }
export interface Slot {
  type: string;
  provider: string;
  vendor: string;
  iframeW: number;
  iframeH: number;
  name: string;
  order: number;
  tags: string[];
  games: Game[];
  totalGames: number;
}
export interface SlotList {
    data: Slot[]
}
export interface SlotState{
  games: Game[];
  name: string;
}
export interface Provider {
  enabled: boolean;
  gamesCount: number;
  iframeH: number;
  iframeW: number;
  logo: string;
  name: string;
  order: number;
  provider: string;
  tags: string[];
  type: string;
  vendor: string;
  _id: string;
}
export interface ProviderList {
    data: Provider[]
}

export interface Category {
  category: string;
  games: Game[];
  name: string;
  order: number;
  platform: string;
  totalGames: number;
  type: string;
}

export interface CategoryList {
    data: Category[]
}