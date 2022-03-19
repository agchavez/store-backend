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
  Res,
} from '@nestjs/common';
import { IGetPoducts, IProduct } from 'src/interface/product.interface';
import { ProductService } from '../../services/product/product.service';

@Controller('product')
export class ProductController {
  constructor(private ProductService: ProductService) {}
  @Get('/detail')
  getProductDetail(): string {
    return 'Detalle del producto';
  }

  @Get('/:id')
  getProductById(@Param('id', ParseIntPipe) id: number): IProduct {
    const product: IProduct = this.ProductService.getProductById(id);
    return product;
  }
  @Get('/')
  getProducts(
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
  ): IGetPoducts {
    return {
      limit,
      offset,
      products: this.ProductService.getProducts(),
    };
  }

  @Post('/')
  createProduct(@Body() body: any): IProduct {
    return this.ProductService.createProduct(body);
  }

  // Delete product by id
  @Delete('/:id')
  deleteProduct(@Param('id') id: string): string {
    return 'Producto --> ' + id;
  }

  // Update product by id
  @Put('/:id')
  updateProduct(@Param('id') id: string, @Body() body: any): string {
    return {
      ...body,
      msj: 'Producto --> ' + id,
    };
  }
}
