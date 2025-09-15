import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { AboutComponent } from '../about/about';
import { CategoriesComponent } from '../categories/categories';
import { ServicesComponent } from '../services/services';
import { TestimonialsComponent } from '../testimonials/testimonials';
import { BrandsComponent } from '../brands/brands';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    CategoriesComponent,
    ServicesComponent,
    TestimonialsComponent,
    BrandsComponent,
    FooterComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-categories></app-categories>
    <app-services></app-services>
    <app-testimonials></app-testimonials>
    <app-brands></app-brands>
    <app-footer></app-footer>
  `
})
export class HomeComponent {}
