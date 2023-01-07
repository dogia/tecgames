import { Deal } from "@domain/games/deal";

export interface Game {
  gameID: number;
  steamAppID: number;

  title: {
    internal: string,
    external: string
  };

  thumb: string;

  cheapestDealID: string;
  cheapest: number;
  cheapestDate?: Date;

  dealers?: Array<Deal>;
}
