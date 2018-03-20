import { TestBed, inject } from '@angular/core/testing';

import { SheetJsService } from './sheet-js.service';

describe('SheetJsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SheetJsService]
    });
  });

  it('should be created', inject([SheetJsService], (service: SheetJsService) => {
    expect(service).toBeTruthy();
  }));
});
