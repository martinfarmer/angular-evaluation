import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RepositoryService }     from '../services/repository.service';

@Component({
  selector: 'app-todo-saver',
  templateUrl: './todo-saver.component.html',
  styleUrls: ['./todo-saver.component.css']
})
export class TodoSaverComponent {

  @Output()
  onTodoChange: EventEmitter<any> = new EventEmitter();

  constructor(private repository: RepositoryService) { }

  saveTodo(newTodo: string) {
    this.repository.saveTodo(newTodo);
    this.onTodoChange.emit();
  }
}
