export interface Deal {
  // General on game endpoint
  dealID: string,
  storeID: number,
  salePrice: number,
  normalPrice: number,
  savings: number,

  isOnSale: boolean | null,
  internalName: string | null,
  title: string | null,
  metacriticLink: string | null,
  gameID: number | null,
  metacriticScore: number | null,
  steamRatingText: string | null,
  steamRatingPercent: number | null,
  steamRatingCount: number | null,
  steamAppID: number | null,
  releaseDate: Date | null,
  lastChange: Date | null,
  dealRating: number | null,
  thumb: string | null,
}
