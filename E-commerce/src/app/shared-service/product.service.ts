import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import {Subject, map} from 'rxjs';
import { ProductModel } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  //Add a product
  addProduct(productAddForm){
    this.http.post('https://fir-84844-default-rtdb.firebaseio.com/products.json', productAddForm).subscribe(res => {
      console.log(res);
    })
  }

  //fetch all product
  getAllProduct(){
    return this.http.get('https://fir-84844-default-rtdb.firebaseio.com/products.json').pipe(map(res => {
      const productData = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          productData.push({...res[key], id: key})
        }
      }
      return productData;
    }))
  }

  //delete a product
  deleteProdut(id){
    return this.http.delete('https://fir-84844-default-rtdb.firebaseio.com/products/'+id+'.json')
  }

  //update a product
  updateProduct(id:string, data: ProductModel){
    return this.http.put('https://fir-84844-default-rtdb.firebaseio.com/products/'+id+'.json', data).subscribe();
  }

}
