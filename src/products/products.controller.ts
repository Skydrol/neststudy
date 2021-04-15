import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  getAllProducts(): Product[] {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id): Product {
    return this.productsService.getOneProductById(id);
  }

  @Post('new')
  createProduct(@Body() createProductDto: CreateProductDto): string {
    return `Name: ${createProductDto.name} Description: ${createProductDto.description}`;
  }

  @Delete('delete/:id')
  deleteProduct(@Param('id') id: string): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  updateProduct(@Body() updateProductDto: CreateProductDto, @Param('id') id): string {
    return `Update ${id} - Name: ${updateProductDto.name}`;
  }
}
