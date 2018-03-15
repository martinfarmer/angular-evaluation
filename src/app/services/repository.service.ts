import { Injectable } from '@angular/core';

@Injectable()
export class RepositoryService {

  private todoItems: string[] = [];

  constructor() { }

  saveTodo(todoToSave: string) {
    if (todoToSave) {
      this.todoItems.push(todoToSave);
    }
  }

  getTodos(): string[] {
    return this.todoItems;
  }

  removeTodo(todoToRemove: string) {
    if (todoToRemove) {
      const index: number = this.todoItems.indexOf(todoToRemove);
      if (index !== -1) {
        this.todoItems.splice(index, 1); 
      }
    }
  }

}
