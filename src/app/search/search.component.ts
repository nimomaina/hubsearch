import { Component, OnInit } from '@angular/core';
// import { HubService } from '../common/hub.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [HubService],
})
export class SearchComponent implements OnInit {
  user: Users;
  repos: Repository;
  userRepos: any;
  currentUser: string;

  constructor(private hubService: HubService) {
  }
 searchUser() {

   this.hubService.searchUser(this.currentUser);

   this.hubService.getUserInfo();
   this.user = this.hubService.user;
  // console.log(this.user);

   this.hubService.getRepoInfo(this.currentUser);
   this.userRepos = this.hubService.newRepo;
 }

  ngOnInit() {

    this.hubService.getRepoInfo(this.userName);
    this.repos = this.hubService.repo;
    this.hubService.getUserInfo();
    this.user = this.hubService.user;
    // console.log(this.profileService.repo.name);
  }

}
