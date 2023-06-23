import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/model/product.model';
import { CartService } from 'src/app/shared-service/cart.service';
import { DataService } from 'src/app/shared-service/data.service';
import { ProductService } from 'src/app/shared-service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  productArr: ProductModel[] = [];
  singleProduct: ProductModel;
  constructor(private productService: ProductService, private dataService: DataService, private cartService: CartService){}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(res => {
      this.productArr = res;
    })
  }

  onClick(id: string){
    this.singleProduct = this.productArr.find(data => {
      return data.id === id
    })
    this.dataService.getViewData(this.singleProduct);
  }

  onAddToCartDetails(data){
    this.cartService.addProduct(data);
  }

}
