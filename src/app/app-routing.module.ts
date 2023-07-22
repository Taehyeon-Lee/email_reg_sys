import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmailSystemComponent} from './email-system/email-system.component';

const routes: Routes = [
  // now it redirects to the email system component because there is no full home page
  // and assume that there could be a home page and I am just creating email registration page
  {path: '', redirectTo: '/email', pathMatch: 'full'},
  {path: 'email', component: EmailSystemComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
