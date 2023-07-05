import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ProductAddComponent } from './home/product/product-add/product-add.component';
import { ProductDeleteComponent } from './home/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './home/product/product-update/product-update.component';
import { ProductViewComponent } from './home/product/product-view/product-view.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './home/product/product.component';
import { RegistersComponent } from './registers/registers.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'home', children: [
  //   {path: 'view/:id', component: ProductViewComponent}
  // ]},
  {path: 'product', component: ProductComponent},
  {path: 'register', component: RegistersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent},
  {path: 'view/:id', component: ProductViewComponent},
  {path: 'product-add', component: ProductAddComponent},
  {path: 'product-delete', component: ProductDeleteComponent},
  {path: 'product-update', component: ProductUpdateComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
