import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.html'
})
export class CategoriesComponent {
  categories = [
    { name: 'Dog Food', image: 'assets/images/cat-dogfood.png' },
    { name: 'Cat Toys', image: 'assets/images/cat-toy.png' },
    { name: 'Bird Care', image: 'assets/images/cat-bird.png' },
    { name: 'Pet Grooming', image: 'assets/images/cat-groom.png' }
  ];
}
