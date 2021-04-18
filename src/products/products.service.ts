import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { ProductDocument } from './schemes/product.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productModel.find();
  }
  async getOneProductById(id: string): Promise<Product> {
    return this.productModel.findOne({ _id: id });
  }
  async createProduct(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);
    return await newProduct.save();
  }

  async deleteProduct(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id);
  }

  async updateProduct(id: string, product: Product): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, product, { new: true });
  }
}
