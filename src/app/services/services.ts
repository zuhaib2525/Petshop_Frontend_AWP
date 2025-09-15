import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html'
})
export class ServicesComponent {
  services = [
    {
      title: 'Pet Grooming',
      description: 'Professional grooming services to keep your pets looking their best.',
      image: 'assets/images/service-grooming.png'
    },
    {
      title: 'Veterinary Care',
      description: 'Expert health check-ups and medical care for your pets.',
      image: 'assets/images/service-vet.png'
    },
    {
      title: 'Accessories',
      description: 'Wide range of collars, leashes, toys, and more.',
      image: 'assets/images/service-accessories.png'
    }
  ];
}
