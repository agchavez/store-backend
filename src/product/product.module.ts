import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './controllers/product.controller';
import { Product } from './entities/product.entity';
import { ProductService } from './services/product.service';
import { CategorieService } from './services/categorie.service';
import { Category } from './entities/category.entity';
import { CategoryController } from './controllers/category.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category])],
  controllers: [ProductController, CategoryController],
  providers: [ProductService, CategorieService],
})
export class ProductModule {}
