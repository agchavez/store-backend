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
import { IGetPoducts, IProduct } from 'src/product/interface/product.interface';
import { ParseCodePipe } from '../common/parse-code.pipe';
import { CreateProductDto } from '../../product/dtos/products.dtos';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
  constructor(private ProductService: ProductService) {}
  @Get('/detail/')
  getProductDetail(): string {
    return 'Detalle del producto';
  }

  @Get('/:id')
  getProductById(@Param('id', ParseCodePipe) id: number): IProduct {
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
  createProduct(@Body() body: CreateProductDto): IProduct {
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
