import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './shop/add-product/add-product.component';
import { ViewProductComponent } from './shop/view-product/view-product.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './shop/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HomeComponent,
    NavBarComponent,
    ContactComponent,
    AddProductComponent,
    ViewProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
