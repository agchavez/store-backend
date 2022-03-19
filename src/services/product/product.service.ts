import { Injectable, NotFoundException } from '@nestjs/common';
import { IProduct } from '../../interface/product.interface';

@Injectable()
export class ProductService {
  private products: IProduct[] = [
    {
      id: 1,
      name: 'Producto 1',
      price: 100,
      stock: 10,
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 200,
      stock: 20,
    },
  ];

  getProducts(): IProduct[] {
    return this.products;
  }

  getProductById(id: number): IProduct {
    const product = this.products.find((product) => product.id === id);
    if (!product)
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    return product;
  }

  createProduct(product: IProduct): IProduct {
    product.id = this.products.length + 1;
    this.products.push(product);
    return product;
  }
}
