import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoSaverComponent } from './todo-saver/todo-saver.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoSaverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
