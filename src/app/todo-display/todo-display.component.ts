import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent {

  @Input()
  itemsToDisplay:string[] = [];

  // Needs to output an event from this component when a LI element is clicked

}
