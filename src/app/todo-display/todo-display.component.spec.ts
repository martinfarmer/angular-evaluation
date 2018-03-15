import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDisplayComponent } from './todo-display.component';

describe('TodoDisplayComponent', () => {
  let component: TodoDisplayComponent;
  let fixture: ComponentFixture<TodoDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should emit (onTodoRemoved) the value given to it when the remove operation is invoked', () => {
    spyOn(component.onTodoRemoved, "emit");
    component.removeTodo("foo");
    expect(component.onTodoRemoved.emit).toHaveBeenCalledWith("foo");
  });

});
