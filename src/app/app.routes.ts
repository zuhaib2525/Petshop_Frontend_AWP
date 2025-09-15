import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ShopComponent } from './shop/shop';
import { CartComponent } from './cart/cart';
import { LoginComponent } from './login/login';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
