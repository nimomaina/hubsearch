import { Component, OnInit, Input } from '@angular/core';
import { HubService } from '../hub.service';
import { Users } from '../users';
import { Repo } from '../repo';

import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [HubService ],
})
export class SearchComponent implements OnInit {
  user: Users;
  repos: Repo;
  userRepos: any;
  currentUser: string;

  constructor(private hubService: HubService) {
  }
 searchUser() {

   this.hubService.updateSearch(this.currentUser);

   this.hubService.getUserInfo();
   this.user = this.hubService.user;
   this.hubService.getRepoInfo(this.currentUser);
   this.userRepos = this.hubService.newRepo;
 }

  ngOnInit() {

    this.hubService.getRepoInfo(this.currentUser);
    this.repos = this.hubService.repo;
    this.hubService.getUserInfo();
    this.user = this.hubService.user;
  }

}
