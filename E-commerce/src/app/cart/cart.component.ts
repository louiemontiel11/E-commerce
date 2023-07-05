import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../model/product.model';
import { DataService } from '../shared-service/data.service';
import { CartService } from '../shared-service/cart.service';
import { NotificationService } from '../shared-service/notification.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartArr = [];
  grandTotal: number = 0;
  constructor(
    private cartService: CartService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    // this.cartService.getAddToCartData().subscribe(data => {
    //   this.cartArr = data;
    // })
    this.cartService.getProductCart().subscribe((res) => {
      this.cartArr = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  onRemoveCart(item) {
    // this.cartArr = this.cartArr.filter(data => {
    //   return data.id !== item.id;
    // })
    // this.cartService.removeToCart(item.id);
    // this.notify.showSuccess('Deleted Successfully');

    this.cartService.removeCartItem(item);
    this.cartArr.reduce((acc, cur) => {
      console.log(cur.productName);
      console.log(acc);
    });
  }

  emptyCart() {
    this.cartService.removeAllCart();
  }
}
