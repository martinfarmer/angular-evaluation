import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoSaverComponent } from './todo-saver/todo-saver.component';
import { RepositoryService }     from './services/repository.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoSaverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ RepositoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
