import { CategoryDtos } from '../dtos/category.dtos';
import { Category } from '../entities/category.entity';

export interface IDeleteResp {
  msj: string;
  ok: boolean;
  id: number;
}

export interface ICategoriesResp {
  categories: Category[];
  count: number;
  limit?: number;
  offset?: number;
}
