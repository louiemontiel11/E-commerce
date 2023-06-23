import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductModel } from 'src/app/model/product.model';
import { ProductService } from 'src/app/shared-service/product.service';

@Component({
  selector: 'app-product-update-form',
  templateUrl: './product-update-form.component.html',
  styleUrls: ['./product-update-form.component.css']
})
export class ProductUpdateFormComponent implements OnInit, OnChanges{
  productUpdateForm: FormGroup;
  @Input() updateInfo: ProductModel;
  @Output() hideForm = new EventEmitter<boolean>();
  @Output() submitForm = new EventEmitter<ProductModel>();

  constructor(private productService: ProductService){
    this.productUpdateForm = new FormGroup({
      productName: new FormControl(null, [Validators.required]),
      productDescription: new FormControl(null, Validators.required),
      productImage: new FormControl(null, Validators.required),
      productPrice: new FormControl(null, Validators.required),

    })
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.updateInfo){
      this.productUpdateForm.patchValue({
        productName: this.updateInfo.productName,
        productDescription: this.updateInfo.productDescription,
        productImage: this.updateInfo.productImage,
        productPrice: this.updateInfo.productPrice
      })
    }
  }

  onSubmitProduct(){
    this.hideForm.emit(false);
    this.submitForm.emit(this.productUpdateForm.value);
    console.log(this.productUpdateForm.value);
    this.productService.updateProduct(this.updateInfo.id, this.productUpdateForm.value);
  }
  onCancelForm(){
    this.hideForm.emit(false);
  }
}
