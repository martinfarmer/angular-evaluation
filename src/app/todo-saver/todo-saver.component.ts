import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-saver',
  templateUrl: './todo-saver.component.html',
  styleUrls: ['./todo-saver.component.css']
})
export class TodoSaverComponent {

  @Output()
  onTodoAdded: EventEmitter<string> = new EventEmitter();

  constructor() { }

  saveTodo(newTodo: string) {
    this.onTodoAdded.emit(newTodo);
  }
}
