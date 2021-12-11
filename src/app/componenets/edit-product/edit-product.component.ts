import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productFormGroup!:FormGroup
  productId:number
  submitted:boolean=false
  constructor(private fb:FormBuilder,private productService:ProductService,private activatedRoute:ActivatedRoute,private router:Router) { 
    this.productId=activatedRoute.snapshot.params["id"]
  }

  ngOnInit(): void {
    this.productService.getProduct(this.productId).subscribe(
      product=>{
        this.productFormGroup=this.fb.group({
          id:[product.id,Validators.required],
          name:[product.name,Validators.required],
          price:[product.price,Validators.required],
          quantite:[product.quantite,Validators.required],
          selected:[product.selected,Validators.required],
          available:[product.available,Validators.required],
        })
      }
    )
    
  }
  get formProduct(){
    return this.productFormGroup.controls
  }
  onEditProduct(){
    this.productService.editProduct(this.productFormGroup.value).subscribe(
      data=>{
        this.router.navigateByUrl("/product")
      }
    )
  }

}
