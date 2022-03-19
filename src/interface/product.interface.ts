export interface IProduct {
  id: string;
  name: string;
  price: number;
}

export interface IGetPoducts {
  limit: number;
  offset: number;
}
