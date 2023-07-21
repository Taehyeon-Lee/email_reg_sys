import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmailSystemComponent} from './email-system/email-system.component';

const routes: Routes = [
  {path: 'email', component: EmailSystemComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
