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

  removeTodo(todoToRemove: string) {
    // Implement and write test to verify that the todoItems array is correctly updated when this method is invoked
  }

  getTodos():string[] {
    return this.todoItems;
  }

}
