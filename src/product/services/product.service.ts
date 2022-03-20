import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IProduct } from '../../../dist/interface/product.interface';
import { CreateProductDto } from '../dtos/products.dtos';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    private configmodule: ConfigService,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async getProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  // getProductById(id: number): IProduct {
  //   const product = this.products.find((product) => product.id === id);
  //   if (!product)
  //     throw new NotFoundException(
  //       `Producto con id ${id} no encontrado ${this.configmodule.get(
  //         'API_KEY',
  //       )}`,
  //     );
  //   return product;
  // }

  async createProduct(product: CreateProductDto): Promise<CreateProductDto> {
    const newProduct = new Product();
    newProduct.name = product.name;
    newProduct.description = product.description;
    newProduct.price = product.price;
    newProduct.image = product.image;
    newProduct.category = product.category;
    await this.productRepository.save(newProduct);
    return newProduct;
  }
}
