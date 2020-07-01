import { Component, OnInit,OnChanges,Input } from '@angular/core';

import { GithubService } from "../../services/github.service";

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  @Input() repoUrl : string;

  repos = [];

  constructor(
    private githubService : GithubService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(this.repoUrl){
      this.githubService.getRepos(this.repoUrl).subscribe(
        (repos: [] )=>{
          this.repos = repos;
        },(error => {
          console.log(error);
        })
      )
    }
  }



}
