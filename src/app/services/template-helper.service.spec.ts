import { TestBed } from '@angular/core/testing';

import { TemplateHelperService } from './template-helper.service';

describe('TemplateHelperService', () => {
  let service: TemplateHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
