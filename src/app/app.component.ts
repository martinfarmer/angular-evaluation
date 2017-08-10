import { Component } from '@angular/core';
import { RepositoryService }     from './services/repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  savedTodos: string[] = [];

  constructor(private repository: RepositoryService) { }

  handleNewTodo(newTodo: string) {
    this.repository.saveTodo(newTodo);
    this.savedTodos = this.repository.getTodos();
  }
}
