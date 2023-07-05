import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent implements OnInit{
  registerForm: FormGroup;

  constructor(private toastr: ToastrService, private auth: AuthService, private router: Router){}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      isAdmin: new FormControl(false)
    })
  }

  proceedRegistrations(){
    this.auth.proceedRegister(this.registerForm.value);
    this.auth.registerAuth(this.registerForm.value.email, this.registerForm.value.password)
    .then((res) => {
      this.toastr.success('Registered SuccessFully')
      this.router.navigate(['login']);
    })
    .catch(error => {
      alert(error);
    });
    

    // if(this.registerForm.valid){
    //   this.auth.proceedRegister(this.registerForm.value).subscribe(res => {
    //     this.toastr.success('Registered SuccessFully')
    // this.router.navigate(['login']);
    //   })
    // } else {
    // this.toastr.warning('Please enter valid data');
    // }

  }
}
