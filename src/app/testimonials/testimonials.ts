import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html'
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Sonia Mehta',
      review: 'Amazing service and fast delivery! My puppy loved the food.',
      rating: 5
    },
    {
      name: 'Ravi Kumar',
      review: 'Great grooming experience. My dog looks adorable!',
      rating: 4
    },
    {
      name: 'Anjali Singh',
      review: 'Wide variety of accessories at affordable prices.',
      rating: 5
    }
  ];
}
