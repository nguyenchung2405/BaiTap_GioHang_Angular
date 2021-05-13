import { TestBed } from '@angular/core/testing';

import { DienThoaiServiceService } from './dien-thoai-service.service';

describe('DienThoaiServiceService', () => {
  let service: DienThoaiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DienThoaiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
