import { Component, OnInit } from '@angular/core';

import { NgForm } from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private auth : AuthService,
    private router : Router,
    private toastr : ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(signupform : NgForm){
    const { email,password } = signupform.form.value;

    this.auth.signUp(email,password)
      .then((res)=>{
        console.log(res);
        this.router.navigateByUrl("");
        this.toastr.success("Signup Success");

      })
      .catch((err)=>{
        console.log(err);
        this.toastr.error("Signup failed");
      })

  }

}
