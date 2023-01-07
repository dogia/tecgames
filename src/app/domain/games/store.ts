export interface Store {
  storeID: number,
  storeName: string,
  isActive: boolean,
  images: {
    banner: string,
    logo: string,
    icon: string
  }
}
