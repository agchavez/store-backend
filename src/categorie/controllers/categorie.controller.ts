import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('categorie')
export class CategorieController {
  @Get('/:id/:product')
  getCategories(
    @Param('id') id: string,
    @Param('product') product: string,
  ): string {
    return `Categoria --> ${id} y Producto --> ${product}`;
  }

  @Post('/')
  createCategorie(@Body() params: any): string {
    return {
      ...params,
    };
  }
}
