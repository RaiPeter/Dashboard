import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

sideBArOpen = true;

  constructor() { }

  ngOnInit() {
  }

  sideBarToggler(){
    this.sideBArOpen= !this.sideBArOpen
  }
}