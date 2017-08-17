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

  it('saveTodos() properly adds elements to the repository', inject([RepositoryService], (service: RepositoryService) => {
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
