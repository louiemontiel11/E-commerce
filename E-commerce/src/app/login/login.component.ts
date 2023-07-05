import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared-service/auth.service';
import { Router } from '@angular/router';
import { AdminService } from '../shared-service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userData = [];
  constructor(
    private toastr: ToastrService,
    private auth: AuthService,
    private router: Router,
    private admin: AdminService
  ) {}

  ngOnInit(): void {
    this.auth.getAlluser();
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
    this.auth.getAlluser().subscribe(data => {
      this.userData = data;
    })
  }
  proceedLogin() {
    this.auth
      .loginAuth(this.loginForm.value.email, this.loginForm.value.password)
      // .then((res) => {
      //   this.toastr.success('Registered SuccessFully');
      //   this.router.navigate(['product']);
      // })
      // .catch((error) => {
      //   alert(error);
      // });
      const user = this.userData.find( data => {
        return this.loginForm.value.email === data.email && this.loginForm.value.password === data.password})
      if(user){
        this.admin.setAdmin(user);
      }
      else{
        this.admin.setAdmin(null);
      }

      // localStorage.setItem('email', user.email);
      // localStorage.setItem('isAdmin', user.isAdmin);


  }
}
