import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here (for two-way binding)
import { HttpClientModule } from '@angular/common/http'; // import the HTTP library to make our API calls
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailSystemComponent } from './email-system/email-system.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

/**
 * This file is the main module for the email system website. It is where we import all the components
 */
@NgModule({
  declarations: [
    AppComponent,
    EmailSystemComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
