import { Component, OnInit } from '@angular/core';

import { NgForm } from "@angular/forms";

import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private auth : AuthService,
    private router : Router,
    private toastr : ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(signinform : NgForm){
      const { email,password } = signinform.form.value;

      this.auth.signIn(email,password).then((res)=>{
        this.router.navigateByUrl("");
        this.toastr.success("Signin success");
      }).catch((error)=>{
        console.log(error.message);
        this.toastr.error("Signin failded");
      })


   }



}
