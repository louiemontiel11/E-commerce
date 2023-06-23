import { Injectable } from '@angular/core';
import { ProductModel } from '../model/product.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addCartData: ProductModel[] = [];

  constructor(private http: HttpClient) { }


  addProduct(cartData) {
    this.http
      .post(
        'https://fir-84844-default-rtdb.firebaseio.com/carts.json',
        cartData
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  getAddToCartData() {
    return this.http
      .get<ProductModel[]>(
        'https://fir-84844-default-rtdb.firebaseio.com/carts.json'
      )
      .pipe(map((cartData) => {
        const cartArr = [];
        for(let key in cartData){
          if(cartData.hasOwnProperty(key)){
            cartArr.push({...cartData[key], id: key })
          }
        }
        return cartArr;
      }));
  }

  removeToCart(id){
    this.http.delete('https://fir-84844-default-rtdb.firebaseio.com/carts/'+id+'.json').subscribe();
  }
}
