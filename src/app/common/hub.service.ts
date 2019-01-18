import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HubService {
  private query : string;
  private API_KEY: string;
  private API_URL: string;

  constructor() { }
}
