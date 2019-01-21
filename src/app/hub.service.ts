import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from './environments/environment';
@Injectable({
  providedIn: 'root'
})

export class HubService {
  user: Users;
  repo: Repository;
  newRepo: any;
  newUser: any;
  private userName: string;

  private accessToken = '28cece694b07fcab872674026867b5c24c798c8d';

  constructor(private http: HttpClient) {

    this.user = new Users ('', '', '', '', '','','','',new Date);
    this.repos = new Repository('', '', '');
    this.userName = 'nimomaina';

  }
  getUserInfo() {

    interface IResponse{

      username: string;
      avatar: string;
      followers: string;
      following: string;
      repo: string;
      names: string;
      email: string;
      time: Date;
      repo_url: string;

    }

    const promise = new Promise(((resolve, reject) => {
      this.http.get<IResponse>('https://api.github.com/users/' + this.userName +
      '?access_token=' + environment.apiUrl)

      .toPromise().then(response => {
        this.user.username = response.username;
        this.user.avatar = response.avatar;
        this.user.followers = response.followers;
        this.user.following = response.following;
        this.user.repo= response.repo;
        this.user.names = response.names;
        this.user.email = response.email;
        this.user.time = response.time;
        this.user.repo_url = response.repo_url;
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
      this.http.get<IResponse>('https://api.github.com/users/' + this.userName + '/repos?access_token=' + environment.apiUrl)
      .toPromise()
      .then(response_repo => {
    const promise = new Promise(((resolve, reject) => {
      this.http.get<IResponse>('https://api.github.com/users/' + this.userName +
      '?access_token=' + environment.apiUrl)
        this.newRepo = response_repo;
        // console.log(this.newRepo);

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
   this.userName = userName;
 }

}
