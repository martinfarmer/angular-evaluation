import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDisplayComponent } from './todo-display.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

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

  it('should render items in the list appropriately', () => {
    component.itemsToDisplay = ["abcd", "efgh"];
    fixture.detectChanges();
    let debug: DebugElement = fixture.debugElement.query(By.css('ul'));
    let children:DebugElement[] = debug.children;
    expect(children[0].nativeElement.textContent).toContain("abcd");
    expect(children[1].nativeElement.textContent).toContain("efgh");
  });
});
