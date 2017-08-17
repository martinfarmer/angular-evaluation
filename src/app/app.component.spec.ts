import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoSaverComponent } from './todo-saver/todo-saver.component';
import { TodoDisplayComponent } from './todo-display/todo-display.component';
import { RepositoryService }     from './services/repository.service';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

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

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('handling a new todo should save and then fetch the updated list of todo elements', async(() => {
    let saveSpy = spyOn(TestBed.get(RepositoryService), 'saveTodo');
    let fetchSpy = spyOn(TestBed.get(RepositoryService), 'getTodos').and.returnValue(["eat food"]);
    
    // Run the method we are testing
    component.handleNewTodo("go to cleaners");

    // Verify we saved the correct value via the repository service
    expect(saveSpy).toHaveBeenCalledWith("go to cleaners");
    
    // Verify we fetched the data from the repository service
    expect(fetchSpy).toHaveBeenCalled();

    // Verify the list of 'savedTodos' was set the output of the 'getTodos()' method
    expect(component.savedTodos).toEqual(["eat food"]);
  }));

});
