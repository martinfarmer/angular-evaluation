import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoSaverComponent } from './todo-saver.component';

describe('TodoSaverComponent', () => {
  let component: TodoSaverComponent;
  let fixture: ComponentFixture<TodoSaverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoSaverComponent ],
      providers: [
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

  it('should emit the value given to it when the save operation is invoked', () => {
    spyOn(component.onTodoAdded, "emit");
    component.saveTodo("foo");
    expect(component.onTodoAdded.emit).toHaveBeenCalledWith("foo");
  });
});
