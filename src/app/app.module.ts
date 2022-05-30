
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { PrimengExampleComponent } from './components/primeng-example/primeng-example.component';
import { HomeComponent } from './components/home/home.component'

//mateial模組
import { MaterialModule } from './material/material.module';

//primeng模組
import { PrimengModule } from './primeng/primeng.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    PrimengExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
