import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition-swap',
  templateUrl: './condition-swap.component.html',
  styleUrls: ['./condition-swap.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConditionSwapComponent implements OnInit {

  constructor() { }

  addButtonClicked() {
    console.log('addButtonClicked');
  }

  cancelButtonClicked() {
    console.log('cancelButtonClicked');
  }

  ngOnInit() {
  }

}
