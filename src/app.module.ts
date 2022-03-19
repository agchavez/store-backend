import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategorieService } from './product/services/categorie.service';
import { ProductModule } from './product/product.module';
import { CategorieModule } from './categorie/categorie.module';
import { CategorieController } from './categorie/controllers/categorie.controller';

@Module({
  imports: [ProductModule, CategorieModule],
  controllers: [AppController, CategorieController],
  providers: [AppService, CategorieService],
})
export class AppModule {}
