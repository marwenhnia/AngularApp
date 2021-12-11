import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAllProduct():Observable<Product[]>{
    let host= environment.host
    return this.http.get<Product[]>(host+"/products")
  }
  
  getSelectedProduct():Observable<Product[]>{
    let host= environment.host
    return this.http.get<Product[]>(host+"/products?selected=true")
  }
  getAvailableProduct():Observable<Product[]>{
    let host=environment.host
    return this.http.get<Product[]>(host+"/products?available=true")
  }

  searchProduct(keyword:any):Observable<Product[]>{
    let host=environment.host
    return this.http.get<Product[]>(host+"/products?name_like="+keyword)
  }

  selectProduct(product:Product):Observable<Product>{
    let host=environment.host
    product.selected=!product.selected
    return this.http.put<Product>(host+"/products/"+product.id,product)
  }

  deteteProduct(product:Product):Observable<void>{
    let host=environment.host
    return this.http.delete<void>(host+"/products/"+product.id)
  }

  saveProduct(product:Product):Observable<Product>{
    let host=environment.host
    return this.http.post<Product>(host+"/products",product)
  }

  getProduct(id:number):Observable<Product>{
    let host=environment.host
    return this.http.get<Product>(host+"/products/"+id)
  }

  editProduct(product:Product):Observable<Product>{
    let host=environment.host
    return this.http.put<Product>(host+"/products/"+product.id,product)
  }
}
