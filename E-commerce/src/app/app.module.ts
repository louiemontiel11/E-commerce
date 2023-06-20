import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
=======
import { ProductComponent } from './home/product/product.component';
=======
>>>>>>> member
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './home/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent,
    HomeComponent,
    BannerComponent
=======
<<<<<<< HEAD
    HomeComponent,
ProductComponent
=======
    HeaderComponent
>>>>>>> main
>>>>>>> member
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
