import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private toastr: ToastrService,
    private http: HttpClient,
    private fireAuth: AngularFireAuth,
    private router: Router
  ) {}

  loginAuth(email: string, password: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password).then(
      () => {
        this.toastr.success('Login SuccessFully');
        this.router.navigate(['/product']);
      },
      (err) => {
        this.toastr.success(err.message);
        this.router.navigate(['/login']);
      }
    );
  }

  registerAuth(email: string, password: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
    // .then(()=>{
    //   alert('Register Successful')
    //   this.router.navigate(['/login']);
    // },err => {
    //   alert(err.message);
    //   this.router.navigate(['/register']);

    // })
  }

  logout() {
    this.fireAuth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  getAlluser() {
    return this.http
      .get('https://fir-84844-default-rtdb.firebaseio.com/registers.json')
      .pipe(
        map((res) => {
          const user = [];
          for (let key in res) {
            user.push({ ...res[key], id: key });
          }
          return user;
        })
      )

  }
  getUserById(id) {
    return this.http.get(
      'https://fir-84844-default-rtdb.firebaseio.com/registers/' + id + '.json'
    );
  }

  proceedRegister(userData) {
    return this.http
      .post(
        'https://fir-84844-default-rtdb.firebaseio.com/registers.json',
        userData
      )
      .subscribe();
  }

  updateUser(id, userData) {
    return this.http.post(
      'https://fir-84844-default-rtdb.firebaseio.com/registers/' + id + '.json',
      userData
    );
  }
}
