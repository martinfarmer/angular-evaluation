import { Component, OnInit, ViewChild } from '@angular/core';
import { RepositoryService }     from '../services/repository.service';

@Component({
  selector: 'app-todo-saver',
  templateUrl: './todo-saver.component.html',
  styleUrls: ['./todo-saver.component.css']
})
export class TodoSaverComponent {



  constructor(private repository: RepositoryService) { }

  saveTodo(newTodo: string) {
    console.log("Foo: " + newTodo);
  }
}
