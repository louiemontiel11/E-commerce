import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared-service/notification.service';
import { ProductService } from 'src/app/shared-service/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent implements OnInit {
  productArrDelete = []

  constructor(private productService: ProductService, private notif: NotificationService) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(res => {
      this.productArrDelete = res;
    })
  }

  onDelete(id){
    const index = this.productArrDelete.filter(res => {
      return res.id !== id;
    });
    this.productArrDelete = index;
    console.log(this.productArrDelete);

    this.productService.deleteProdut(id).subscribe();
    this.notif.showSuccess('Deleted Successfully');

  }
}
