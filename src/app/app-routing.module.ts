import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import  { SignInComponent } from "./pages/sign-in/sign-in.component";
import  { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path:"",
    component : HomeComponent
  },
  {
    path : "signin",
    component : SignInComponent
  },
  {
    path : "signup",
    component : SignUpComponent
  },
  {
    path : "**",
    component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
