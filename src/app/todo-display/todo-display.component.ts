import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent {

  @Input()
  itemsToDisplay:string[] = [];

  @Output()
  onTodoRemoved: EventEmitter<string> = new EventEmitter();

  constructor() { }

  removeTodo(todoToRemove: string) {
    this.onTodoRemoved.emit(todoToRemove);
  }
}
