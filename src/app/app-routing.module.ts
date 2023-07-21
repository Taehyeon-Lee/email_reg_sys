import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmailSystemComponent} from './email-system/email-system.component';

const routes: Routes = [
  // now it redirects to the email system component because not full home page
  {path: '', redirectTo: '/email', pathMatch: 'full'},
  {path: 'email', component: EmailSystemComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
