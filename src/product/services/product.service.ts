import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dtos/products.dtos';
import { Product } from '../entities/product.entity';
import { Category } from '../entities/category.entity';

@Injectable()
export class ProductService {
  constructor(
    private configmodule: ConfigService,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async getProducts(): Promise<Product[]> {
    //Extraer solo el nombre de la categoria
    return await this.productRepository.find({
      relations: ['category'],
    });
  }

  async getProductById(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id },
    });
    if (!product)
      throw new NotFoundException(
        `Producto con id ${id} no encontrado ${this.configmodule.get(
          'API_KEY',
        )}`,
      );
    return product;
  }

  async createProduct(product: CreateProductDto): Promise<CreateProductDto> {
    try {
      if (product.category) {
        const category = await this.categoryRepository.findOne({
          where: { id: product.category },
        });
        if (!category) {
          throw new NotFoundException(
            `Categoria con id ${product.category} no encontrada`,
          );
        }
      }
      const newProduct = this.productRepository.create(product);
      return await this.productRepository.save(newProduct);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw new NotFoundException(`Error al crear el producto`);
    }
  }
}
