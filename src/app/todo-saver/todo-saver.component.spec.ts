import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSaverComponent } from './todo-saver.component';

describe('TodoSaverComponent', () => {
  let component: TodoSaverComponent;
  let fixture: ComponentFixture<TodoSaverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoSaverComponent ]
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
