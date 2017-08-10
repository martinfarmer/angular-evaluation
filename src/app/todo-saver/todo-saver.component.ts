import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-saver',
  templateUrl: './todo-saver.component.html',
  styleUrls: ['./todo-saver.component.css']
})
export class TodoSaverComponent {

  constructor() { }

  saveTodo(newTodo: string) {
    console.log("Foo: " + newTodo);
  }
}
