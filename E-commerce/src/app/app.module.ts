import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/product/product.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './home/banner/banner.component';
import { ErrorComponent } from './error/error.component';
import { ProductAddComponent } from './home/product/product-add/product-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductDeleteComponent } from './home/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './home/product/product-update/product-update.component';
import { ProductUpdateFormComponent } from './home/product/product-update/product-update-form/product-update-form.component';
import { ProductViewComponent } from './home/product/product-view/product-view.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BannerComponent,
    HomeComponent,
    ProductComponent,
    HeaderComponent,
    ErrorComponent,
    ProductAddComponent,
    ProductDeleteComponent,
    ProductUpdateComponent,
    ProductUpdateFormComponent,
    ProductViewComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
