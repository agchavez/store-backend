import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CategorieService } from '../services/categorie.service';
import { CategoryDtos } from '../dtos/category.dtos';
import { ICategoriesResp } from '../interface/category.iterface';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategorieService) {}

  @Get('/')
  async getCategories(
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
  ): Promise<ICategoriesResp> {
    const categories = await this.categoryService.getCategories(limit, offset);
    return categories;
  }

  @Get('/:id')
  async getCategoryById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CategoryDtos> {
    return await this.categoryService.getCategoryById(id);
  }

  @Post('/')
  async createCategory(@Body() category: CategoryDtos): Promise<CategoryDtos> {
    return await this.categoryService.createCategory(category);
  }

  @Put('/update/:id')
  async updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() category: CategoryDtos,
  ) {
    return await this.categoryService.updateCategory(category, id);
  }

  @Delete('/:id')
  async deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return await this.categoryService.deleteCategory(id);
  }
}
