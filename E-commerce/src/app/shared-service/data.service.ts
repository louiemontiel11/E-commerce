import { EventEmitter, Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';
import { ProductModel } from '../model/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getSingleProduct: ProductModel;

  constructor() {}

  getViewData(productData) {
    this.getSingleProduct = productData;
    console.log(this.getSingleProduct);
  }

}
