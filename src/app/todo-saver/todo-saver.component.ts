import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-saver',
  templateUrl: './todo-saver.component.html',
  styleUrls: ['./todo-saver.component.css']
})
export class TodoSaverComponent implements OnInit {

  enteredTodoText: string = "";

  constructor() { }

  ngOnInit() {
  }


  saveTodo() {
    console.log("Foo: ")
    this.enteredTodoText = null;
  }
}
