import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, CurrencyPipe } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterLink, NgFor, CurrencyPipe],
  templateUrl: './shop.html'
})
export class ShopComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}
