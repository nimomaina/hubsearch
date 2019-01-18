import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HubService {
  private query : string;
  private API_KEY: string = environment.Github_API_KEY;
  private API_URL: string = environment.Gitusers_API_URL;

  constructor() { }
}
