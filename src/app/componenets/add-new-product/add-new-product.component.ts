import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {
  productFormGroup!:FormGroup
  submitted:boolean=false
  constructor(private fb:FormBuilder,private productService:ProductService) { }

  ngOnInit(): void {
    this.productFormGroup=this.fb.group({
      name:["",Validators.required],
      price:[0,Validators.required],
      quantite:[0,Validators.required],
      selected:[true,Validators.required],
      available:[true,Validators.required],
    })
  }
  get formProduct(){
    return this.productFormGroup.controls
  }
  onSaveProduct(){
    this.submitted=true
    if(this.productFormGroup!.invalid) return
    this.productService.saveProduct(this.productFormGroup.value).subscribe(
      data=>{
        console.log("Product Saving")
      }
    )
   }
}
