import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products$?:Observable<AppDataState<Product[]>>
  
  readonly DataStateEnum=DataStateEnum
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  
  onGetAllProduct(){
    this.products$=this.productService.getAllProduct().pipe(
      map(
        data=>
        {
          return ({
            dataState:DataStateEnum.LOADED,data:data
          })
        })
        ,
        
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
        
      )
    
  }

  onGetSelectedProduct(){
    this.products$=this.productService.getSelectedProduct().pipe(
      map(
        data=>
        {
        return ({
          dataState:DataStateEnum.LOADED,data:data
        })
      })
      ,
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
      
    )
  }

  onGetAvailableProduct(){
    this.products$=this.productService.getAvailableProduct().pipe(
      map(
        data=>
        {
          return ({
            dataState:DataStateEnum.LOADED,data:data
        })
        })
      ,
      startWith({dataState:DataStateEnum.LOADED}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    )
  }

  onSearch(dataSearch:any){
    this.products$=this.productService.searchProduct(dataSearch.keyword).pipe(
      map(
        data=>
        {
          return ({
            dataState:DataStateEnum.LOADED,data:data
          })
        }
      ),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    )
  }

  onSelect(product:Product){
    this.productService.selectProduct(product).subscribe(
    data=>{
      product.selected=data.selected
    }
  )
 }

 onDelete(product:Product){
   this.productService.deteteProduct(product).subscribe(
     data=>{
       this.onGetAllProduct()
     }
   )
 }

 onNewProduct(){
   this.router.navigateByUrl("/newProduct")
 }
 onEditProduct(product:Product){
   this.router.navigateByUrl("/editProduct/"+product.id)   
 }
 
}
