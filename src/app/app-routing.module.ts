import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { SignUpResultFormComponent } from './components/sign-up-result-form/sign-up-result-form.component';


const routes: Routes = [
  { path: '', component: SignUpFormComponent },
  { path: 'user/:result', component: SignUpResultFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
