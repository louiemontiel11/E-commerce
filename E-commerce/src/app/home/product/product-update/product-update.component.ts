import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/model/product.model';
import { ProductService } from 'src/app/shared-service/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productUpdateArr = [];
  updateSingleProduct: ProductModel;
  showUpdateForm: boolean = false;
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(res => {
      this.productUpdateArr = res;
    })
  }
  onUpdate(id: string){
    this.updateSingleProduct = this.productUpdateArr.find(p => {
      return p.id === id;
    })
    this.showUpdateForm = true;
  }

  onShowForm($event:boolean){
    this.showUpdateForm = $event;
  }
  onUpdateProductArr($event: ProductModel){
    let index = this.productUpdateArr.indexOf(this.updateSingleProduct);
    this.productUpdateArr[index] = $event;
    console.log(this.productUpdateArr);

  }
}
