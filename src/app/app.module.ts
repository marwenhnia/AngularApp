import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './componenets/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './componenets/nav-bar/nav-bar.component'
import { HomeComponent } from './componenets/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewProductComponent } from './componenets/add-new-product/add-new-product.component';
import { EditProductComponent } from './componenets/edit-product/edit-product.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductComponent,
    HomeComponent,
    AddNewProductComponent,
    EditProductComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
