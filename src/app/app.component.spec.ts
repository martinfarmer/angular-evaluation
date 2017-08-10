import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoSaverComponent } from './todo-saver/todo-saver.component';
import { RepositoryService }     from './services/repository.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodoSaverComponent
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
