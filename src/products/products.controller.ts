import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id): Promise<Product> {
    return this.productsService.getOneProductById(id);
  }

  @Post('new')
  createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.createProduct(createProductDto);
  }

  @Delete('delete/:id')
  async deleteProduct(@Param('id') id: string): Promise<Product> {
    return this.productsService.deleteProduct(id);
  }

  @Put('update/:id')
  updateProduct(@Body() updateProductDto: CreateProductDto, @Param('id') id): Promise<Product> {
    return this.productsService.updateProduct(id, updateProductDto);
  }
}
