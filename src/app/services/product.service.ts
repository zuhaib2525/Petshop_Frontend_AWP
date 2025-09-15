import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Dog Food', price: 19.99, image: 'https://place-puppy.com/300x200' },
    { id: 2, name: 'Cat Toy', price: 9.99, image: 'https://placekitten.com/300/200' },
    { id: 3, name: 'Bird Cage', price: 49.99, image: 'https://placebear.com/300/200' }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
