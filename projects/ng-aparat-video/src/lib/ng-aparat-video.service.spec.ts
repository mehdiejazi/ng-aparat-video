import { TestBed } from '@angular/core/testing';

import { NgAparatVideoService } from './ng-aparat-video.service';

describe('NgAparatVideoService', () => {
  let service: NgAparatVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgAparatVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
