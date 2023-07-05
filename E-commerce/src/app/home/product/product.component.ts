import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/model/product.model';
import { CartService } from 'src/app/shared-service/cart.service';
import { DataService } from 'src/app/shared-service/data.service';
import { ProductService } from 'src/app/shared-service/product.service';
import { NotificationService } from 'src/app/shared-service/notification.service';
import { AdminService } from 'src/app/shared-service/admin.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  productArr: ProductModel[] = [];
  singleProduct: ProductModel;
  user: any;
  constructor(private notif: NotificationService ,private productService: ProductService, private dataService: DataService, private cartService: CartService, private admin: AdminService){}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(res => {
      this.productArr = res;
      this.productArr.forEach((product: ProductModel) => {
        Object.assign(product,{quantity: 1, total:product.productPrice})
      })
    })
    this.admin.getLocalStorage().subscribe(res => {
      if(res){
        this.user = res.isAdmin;

      }else{
        this.user = null
        console.log(this.user);

      }
    })
  }

  onClick(id: string){
    this.singleProduct = this.productArr.find(data => {
      return data.id === id
    })
    this.dataService.getViewData(this.singleProduct);
  }

  onAddToCartDetails(item){

    if(this.user === undefined){
      this.notif.showError('You need to login to add an item');
    }else if(this.user === true){
      this.notif.showError('Add to cart is unavailable to Admin account');
    }else{
      this.notif.showSuccess('Added Successfully');
    // this.cartService.addProduct(item);  //http
    this.cartService.addToCart(item);   //api
    }
  }

}
