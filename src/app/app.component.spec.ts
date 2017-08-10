import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoSaverComponent } from './todo-saver/todo-saver.component';
import { TodoDisplayComponent } from './todo-display/todo-display.component';
import { RepositoryService }     from './services/repository.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodoSaverComponent,
        TodoDisplayComponent
      ],
      providers: [
        RepositoryService
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
