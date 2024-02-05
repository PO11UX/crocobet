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
  type?: string | undefined;
  provider?: string | undefined;
  vendor?: string | undefined;
  iframeW?: number | undefined;
  iframeH?: number | undefined;
  name: string;
  order?: number | undefined;
  tags?: string[] | undefined;
  games: Game[];
  totalGames?: number;
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
export interface Category {
  category: string;
  games: Game[];
  name: string;
  order: number;
  platform: string;
  totalGames: number;
  type: string;
}
