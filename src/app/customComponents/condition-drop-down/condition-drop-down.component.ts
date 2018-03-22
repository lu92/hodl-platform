import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition-drop-down',
  templateUrl: './condition-drop-down.component.html',
  styleUrls: ['./condition-drop-down.component.css']
})
export class ConditionDropDownComponent implements OnInit {

  selectedCondition = 'Condition';
  mathematicalConditions: string[] = ['Greater', 'Greater Or Equal', 'Less', 'Less Or Equal'];

  conditionChanged(event: any) {
    let chosenCondition: string = event.target.textContent;
    console.log('click:', chosenCondition);
    this.selectedCondition = chosenCondition;
  }

  ngOnInit() {
  }

}
