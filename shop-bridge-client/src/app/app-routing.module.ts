import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './shop/add-product/add-product.component';
import { EditProductComponent } from './shop/edit-product/edit-product.component';
import { ShopComponent } from './shop/shop.component';
import { ViewProductComponent } from './shop/view-product/view-product.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
   {path: 'add-product/:id', component: AddProductComponent},
   {path: 'view-product/:id', component: ViewProductComponent},
   {path: 'edit-product/:id', component: EditProductComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
