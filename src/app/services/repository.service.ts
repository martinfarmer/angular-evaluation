import { Injectable } from '@angular/core';

@Injectable()
export class RepositoryService {

  private todoItems : string[] = [];

  constructor() { }

  saveTodo(todoToSave: string) {
    if (todoToSave) {
      this.todoItems.push(todoToSave);
    }
  }

  getTodos():string[] {
    return this.todoItems;
  }

}
