import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './componenets/add-new-product/add-new-product.component';
import { EditProductComponent } from './componenets/edit-product/edit-product.component';
import { HomeComponent } from './componenets/home/home.component';
import { ProductComponent } from './componenets/product/product.component';

const routes: Routes = [
  {
    path:"product",component:ProductComponent
  },
  {
    path:"editProduct/:id",component:EditProductComponent
  },
  {
    path:"newProduct",component:AddNewProductComponent
  },
  {
    path:"home",component:HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
