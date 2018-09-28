import { TestBed } from '@angular/core/testing';

import { HttpCatelogService } from './http-catelog.service';

describe('HttpCatelogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpCatelogService = TestBed.get(HttpCatelogService);
    expect(service).toBeTruthy();
  });
});
