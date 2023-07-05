import { Component,  OnInit } from '@angular/core';
import { CartService } from '../shared-service/cart.service';
import { AdminService } from '../shared-service/admin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totalItem: number = 0;
  isLogin: boolean;
  login: string = 'Login';
  isAdmin: boolean = false;
  constructor(
    private cartService: CartService,
    private admin: AdminService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.cartService.getProductCart().subscribe((data) => {
      this.totalItem = data.length;
    });
    this.admin.getLocalStorage().subscribe((res) => {

      if (res.length === 0) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
        this.login = res.name;
        this.isAdmin = res.isAdmin;
      }
    });

  }


  onLogout() {
    localStorage.clear();
    this.isLogin = true;
    this.isAdmin = false;
    this.login = 'Login';
    this.router.navigate(['product']);
    this.toastr.success('Logout SuccessFully');

  }
}
