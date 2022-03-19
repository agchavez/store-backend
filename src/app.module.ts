import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './controllers/product/product.controller';
import { CategorieController } from './controllers/categorie/categorie.controller';
import { UserController } from './controllers/user/user.controller';
import { OrderController } from './controllers/order/order.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { BrandController } from './controllers/brand/brand.controller';
import { ProductService } from './services/product/product.service';
import { CategorieService } from './services/categorie/categorie.service';

@Module({
  imports: [],
  controllers: [AppController, ProductController, CategorieController, UserController, OrderController, CustomerController, BrandController],
  providers: [AppService, ProductService, CategorieService],
})
export class AppModule {}
