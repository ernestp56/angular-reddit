import { TestBed } from '@angular/core/testing';

import { MoreCommentsService } from './more-comments.service';

describe('MoreCommentsService', () => {
  let service: MoreCommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoreCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
