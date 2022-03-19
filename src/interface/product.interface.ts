export interface IProduct {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export interface IGetPoducts {
  limit: number;
  offset: number;
  products: IProduct[];
}
