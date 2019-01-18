import { Component, OnInit } from '@angular/core';
import { HubService } from '../common/hub.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  repositories: any[];
 
  constructor(private _HubService : HubService) { }

  ngOnInit() {
  }

}
