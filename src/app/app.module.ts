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

@NgModule({
  declarations: [
    AppComponent,
    EmailSystemComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent
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
