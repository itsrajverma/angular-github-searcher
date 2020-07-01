import { Component, OnInit,ChangeDetectorRef } from '@angular/core';

import { GithubService } from "../../services/github.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = null;
  userName : string;
  error = null;


  constructor(
    private ref : ChangeDetectorRef,
    private githubService : GithubService
  ) { }

  ngOnInit(): void {
  }


  handleFind(){
    this.githubService.getUserDetails(this.userName).subscribe((user)=>{
      console.log(user);
      this.error = null;
      this.user = user;
      this.ref.detectChanges()
    },(err)=>{
      this.error="User Not Found";
      this.userName='';
      this.user = null;
      this.ref.detectChanges()
    })
  }

}
