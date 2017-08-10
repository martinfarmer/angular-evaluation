import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoSaverComponent } from './todo-saver.component';
import { RepositoryService }     from '../services/repository.service';


describe('TodoSaverComponent', () => {
  let component: TodoSaverComponent;
  let fixture: ComponentFixture<TodoSaverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoSaverComponent ],
      providers: [
        RepositoryService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoSaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
