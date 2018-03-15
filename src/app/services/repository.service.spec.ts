import { TestBed, inject } from '@angular/core/testing';

import { RepositoryService } from './repository.service';

describe('RepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositoryService]
    });
  });

  it('should be created', inject([RepositoryService], (service: RepositoryService) => {
    expect(service).toBeTruthy();
  }));

  it('saveTodo() properly adds elements to the repository', inject([RepositoryService], (service: RepositoryService) => {
    // Doesn't add the null value
    service.saveTodo(null);
    let results: string[] = service.getTodos();
    expect(results).toEqual([]);

    // Doesn't add the empty string
    service.saveTodo("");
    results = service.getTodos();
    expect(results).toEqual([]);
    
    // Correctly add one element
    service.saveTodo("foo");
    results = service.getTodos();
    expect(results).toEqual(["foo"]);

    // Correctly add a second elements
    service.saveTodo("bar");
    results = service.getTodos();
    expect(results).toEqual(["foo", "bar"]);
  }));

  it('removeTodo() properly removes an element from the repository', inject([RepositoryService], (service: RepositoryService) => {
    // Doesn't remove the null value
    service.removeTodo(null);
    let results: string[] = service.getTodos();
    expect(results).toEqual([]);

    // Doesn't remove the empty string
    service.removeTodo("");
    results = service.getTodos();
    expect(results).toEqual([]);

    // doesn't remove a value with the current repository empty
    service.removeTodo("abc");
    results = service.getTodos();
    expect(results).toEqual([]);

    // now, add some values into the repository
    service.saveTodo("foo");
    service.saveTodo("bar");
    service.saveTodo("abc");
    service.saveTodo("def");
    expect(results).toEqual(["foo", "bar", "abc", "def"]);

    // doesn't remove a value not in to the current repository
    service.removeTodo("ghi");
    results = service.getTodos();
    expect(results).toEqual(["foo", "bar", "abc", "def"]);

    // now - remove the first entry
    service.removeTodo("foo");
    results = service.getTodos();
    expect(results).toEqual(["bar", "abc", "def"]);

    // now - remove the middle entry
    service.removeTodo("abc");
    results = service.getTodos();
    expect(results).toEqual(["bar", "def"]);

    // now - remove the last entry in list
    service.removeTodo("def");
    results = service.getTodos();
    expect(results).toEqual(["bar"]);
    
    // finally - remove the last entry that exists
    service.removeTodo("bar");
    results = service.getTodos();
    expect(results).toEqual([]);

    
  }));

  it('getTodos() returns all the right elements', inject([RepositoryService], (service: RepositoryService) => {
    // Verify we return nothing when nothing exists
    let results: string[] = service.getTodos();
    expect(results).toEqual([]);
    
    // Correctly return one element
    service.saveTodo("foo");
    results = service.getTodos();
    expect(results).toEqual(["foo"]);

    // Correctly return multiple elements
    service.saveTodo("bar");
    results = service.getTodos();
    expect(results).toEqual(["foo", "bar"]);
  }));

});
