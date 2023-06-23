import { Component } from '@angular/core';
import {  FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared-service/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  productAddForm: FormGroup;

  constructor(private productService: ProductService, private router: Router){
    this.productAddForm = new FormGroup({
      productName: new FormControl(null, [Validators.required]),
      productDescription: new FormControl(null, Validators.required),
      productImage: new FormControl(null, Validators.required),
      productPrice: new FormControl(null, Validators.required)
    })
  }

  onSubmitProduct(){
    this.productService.addProduct(this.productAddForm.value);
    this.productAddForm.reset();
  }

}
