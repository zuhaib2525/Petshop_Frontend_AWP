import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.html'
})
export class BrandsComponent {
  brands = [
    { name: 'Pedigree', logo: 'assets/images/brands/pedigree.png' },
    { name: 'Royal Canin', logo: 'assets/images/brands/royal-canin.png' },
    { name: 'Whiskas', logo: 'assets/images/brands/whiskas.png' },
    { name: 'Drools', logo: 'assets/images/brands/drools.png' },
    { name: 'Purina', logo: 'assets/images/brands/purina.png' }
  ];
}
