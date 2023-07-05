import { Injectable } from '@angular/core';
import { ProductModel } from '../model/product.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addCartData: ProductModel[] = [];
  cartItemList: ProductModel[] = [];
  productList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  getProductCart(){
    return this.productList.asObservable();
  }

  setProductCart(product){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice(){
    let grandTotal = 0;
    this.cartItemList.map(p => {
      grandTotal += p.total;
    })
    return grandTotal;
  }

  removeCartItem(product){
    this.cartItemList.map((p,index) => {
      if(product.id === p.id){
        this.cartItemList.splice(index,1);
      }
    })
    // this.cartItemList.find((p,index) => {

    // })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

  //////////////////////////////////////////
  // HTTP REQUEST  /////////////////////////
  //////////////////////////////////////////
  addProduct(cartData) {
    this.http
      .post(
        'https://fir-84844-default-rtdb.firebaseio.com/carts.json',
        cartData
      )
      .subscribe((res) => {
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
