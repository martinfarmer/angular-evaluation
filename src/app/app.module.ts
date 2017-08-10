import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoSaverComponent } from './todo-saver/todo-saver.component';
import { RepositoryService }     from './services/repository.service';
import { TodoDisplayComponent } from './todo-display/todo-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoSaverComponent,
    TodoDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ RepositoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
