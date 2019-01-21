import { Component, OnInit } from '@angular/core';
 import { HubService} from '../hub.service';
 import { Users } from '../users'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
