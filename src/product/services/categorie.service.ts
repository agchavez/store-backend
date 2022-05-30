import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';
import { CategoryDtos } from '../dtos/category.dtos';
import { ICategoriesResp, IDeleteResp } from '../interface/category.iterface';
import { Product } from '../entities/product.entity';

@Injectable()
export class CategorieService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRespository: Repository<Category>,
  ) {}

  async getCategories(limit: number, offset: number): Promise<ICategoriesResp> {
    console.log(limit, offset);

    const categories = await this.categoryRespository.find({
      skip: +offset,
      take: +limit,
    });
    const count = await this.categoryRespository.count();
    return {
      categories,
      count,
    };
  }

  async getCategoryById(id: number): Promise<Category> {
    const category = await this.categoryRespository.findOne({
      where: { id },
    });
    if (!category)
      throw new NotFoundException(`Category with id ${id} not found`);
    return category;
  }

  async getProductsByCategoryId(id: number): Promise<Product[]> {
    const category = await this.categoryRespository.findOne({
      where: { id },
      relations: ['products'],
    });

    if (!category)
      throw new NotFoundException(`Category with id ${id} not found`);

    return category.products;
  }

  async createCategory(category: CategoryDtos): Promise<Category> {
    const newCategory = this.categoryRespository.create(category);
    return await this.categoryRespository.save(newCategory);
  }

  async updateCategory(data: CategoryDtos, id: number): Promise<Category> {
    const category = await this.categoryRespository.findOne({
      where: { id: id },
    });
    if (!category)
      throw new NotFoundException(`Category with id ${id} not found`);
    this.categoryRespository.merge(category, data);
    return await this.categoryRespository.save(category);
  }

  async deleteCategory(id: number): Promise<IDeleteResp> {
    const category = await this.categoryRespository.findOne({
      where: { id },
    });
    if (!category)
      throw new NotFoundException(`Category with id ${id} not found`);
    await this.categoryRespository.remove(category);
    return {
      msj: 'Category deleted',
      ok: true,
      id,
    };
  }
}
