import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
    private readonly products: Product[] = [
        {
        id: "23542",
        name: "Nome do produto",
        description: "Description!"
        }

    ]
    getAllProducts(): Product[] {
        return this.products;
    } 

    getOneProductById(id: string): Product {
        return this.products.find(product => product.id === id);
    }
}
