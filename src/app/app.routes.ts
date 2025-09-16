import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ShopComponent } from './shop/shop';
import { CartComponent } from './cart/cart';
import { LoginComponent } from './login/login';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';

// New imports for CRUD
import { PetsListComponent } from './pets/pets-list/pets-list';
import { AddPetComponent } from './pets/add-pet/add-pet';
import { EditPetComponent } from './pets/edit-pet/edit-pet';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

  // ✅ CRUD Routes (better naming)
  { path: 'pets', component: PetsListComponent },
  { path: 'pets/add', component: AddPetComponent },
  { path: 'pets/edit/:id', component: EditPetComponent },
];
