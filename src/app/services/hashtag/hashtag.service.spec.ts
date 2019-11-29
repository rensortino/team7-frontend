import { TestBed } from '@angular/core/testing';

import { HashtagService } from './hashtag.service';

describe('HashtagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HashtagService = TestBed.get(HashtagService);
    expect(service).toBeTruthy();
  });
});
