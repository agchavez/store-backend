import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { IGetPoducts } from 'src/interface/product.interface';

@Controller('product')
export class ProductController {
  @Get('/detail')
  getProductDetail(): string {
    return 'Detalle del producto';
  }

  @Get('/:id')
  getProductById(@Param('id') id: string): string {
    return 'Producto --> ' + id;
  }
  @Get('/')
  getProducts(
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
  ): IGetPoducts {
    return {
      limit,
      offset,
    };
  }

  @Post('/')
  createProduct(@Body() body: any): string {
    return {
      ...body,
    };
  }
}
