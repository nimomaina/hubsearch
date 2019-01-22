import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Users } from './users';
import { Repo } from './repo';
@Injectable({
  providedIn: 'root'
})

export class HubService {
  user: Users;
  repo: Repo;
  newRepo: any;
  newUser: any;
  private currentUser: string;

  // private accessToken = '28cece694b07fcab872674026867b5c24c798c8d';

  constructor(private http: HttpClient) {

    this.user = new Users ('', '', '', '', '','','','',new Date);
    this.repo = new Repo('', '', '');
    this.currentUser= 'nimomaina';

  }
  getUserInfo() {

    interface ApiResponse {

      login: string;
      avatar_url: string;
      followers: string;
      following: string;
      public_repos: string;
      name: string;
      location: string;
      email: string;
      created_at: Date;
      html_url: string;

    }

    const promise = new Promise(((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + this.currentUser +
      '?access_token=' +'28cece694b07fcab872674026867b5c24c798c8d' )

      .toPromise().then(response => {
        this.user.username = response.login;
        this.user.image = response.avatar_url;
        this.user.numFollowers = response.followers;
        this.user.numFollowing = response.following;
        this.user.repo = response.public_repos;
        this.user.names = response.name;
        this.user.email = response.email;
        this.user.time = response.created_at;
        this.user.reposite = response.html_url;
        console.log(this.user);

      },
      error => {

        reject(error);
      });
    } ));
    return promise;

  }

  getRepoInfo(username) {

    interface ApiResponse {

      name: string;
      repo_url: string;
      description: string;

    }

    const promise = new Promise(( (resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + this.currentUser + '/repos?access_token=' + '28cece694b07fcab872674026867b5c24c798c8d')
      .toPromise()
      .then(response_repo => {
        this.newRepo = response_repo;


        resolve();
  },
  error => {
    reject(error);
  }
);
}));
return promise;
  }


 updateSearch(userName: string) {
   this.currentUser = userName;
 }

}
