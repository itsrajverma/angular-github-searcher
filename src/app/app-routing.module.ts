import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import  { SignInComponent } from "./pages/sign-in/sign-in.component";
import  { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";


import { AngularFireAuthGuard,redirectUnauthorizedTo,redirectLoggedInTo } from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);



const routes: Routes = [
  {
    path:"",
    component : HomeComponent,
    canActivate : [AngularFireAuthGuard],
    data : { authGuardPipe : redirectUnauthorizedToLogin }
  },
  {
    path : "signin",
    component : SignInComponent,
    canActivate : [AngularFireAuthGuard],
    data : { authGuardPipe : redirectLoggedInToHome }
  },
  {
    path : "signup",
    component : SignUpComponent,
    canActivate : [AngularFireAuthGuard],
    data : { authGuardPipe : redirectLoggedInToHome }
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
