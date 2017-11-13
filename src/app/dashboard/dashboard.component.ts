import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title:any;
  constructor() { 
    this.title = "ADMINBSB - ANGULAR 4 MATERIAL DESIGN";
  }

  ngOnInit() {
  }
  
}
