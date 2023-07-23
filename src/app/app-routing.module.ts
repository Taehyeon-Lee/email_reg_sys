import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmailSystemComponent} from './email-system/email-system.component';

/**
 * This file is the routing module for the email system website. It is where we define the routes
 */
const routes: Routes = [
  // {path: '', component:  HomeComponent, pathMatch: 'full'}, // default route

  // Assume only making email system page so make it the default route
  {path: '', redirectTo: '/email', pathMatch: 'full'},
  {path: 'email', component: EmailSystemComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
