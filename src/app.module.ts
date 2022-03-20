import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategorieService } from './product/services/categorie.service';
import { ProductModule } from './product/product.module';
import { CategorieModule } from './categorie/categorie.module';
import { CategorieController } from './categorie/controllers/categorie.controller';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        '.env.development.local',
        '.env.development',
        '.env.local',
        '.env',
      ],
      isGlobal: true,
    }),
    ProductModule,
    CategorieModule,
    DatabaseModule,
  ],
  controllers: [AppController, CategorieController],
  providers: [AppService, CategorieService],
})
export class AppModule {}
