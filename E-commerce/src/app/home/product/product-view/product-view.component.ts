import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductModel } from 'src/app/model/product.model';
import { CartService } from 'src/app/shared-service/cart.service';
import { DataService } from 'src/app/shared-service/data.service';
import { NotificationService } from 'src/app/shared-service/notification.service';
import { ProductService } from 'src/app/shared-service/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
})
export class ProductViewComponent implements OnInit, OnDestroy {

  viewProduct: ProductModel;
  private viewSubscription: Subscription;
  name: string;

  constructor(private dataService: DataService, private productService: ProductService, private cartService: CartService, private notify: NotificationService) {}

  ngOnInit(): void {

    this.viewProduct = this.dataService.getSingleProduct;
    console.log(this.viewProduct);

  }

  onView() {
    console.log(this.viewProduct);
  }

  ngOnDestroy(): void {
    // this.viewSubscription.unsubscribe();
  }

  onAddToCartDetails(item){
    this.notify.showSuccess('Added Successfully');
    // this.cartService.addProduct(item);  //http
    this.cartService.addToCart(item);   //api
  }
}
