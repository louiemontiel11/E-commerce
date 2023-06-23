import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../model/product.model';
import { DataService } from '../shared-service/data.service';
import { CartService } from '../shared-service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartArr  = [];

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartService.getAddToCartData().subscribe(data => {
      this.cartArr = data;
    })
  }

  onRemoveCart(id: string){
    this.cartArr = this.cartArr.filter(data => {
      return data.id !== id;
    })
    this.cartService.removeToCart(id);

  }
}
