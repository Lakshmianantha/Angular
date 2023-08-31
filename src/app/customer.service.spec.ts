import { TestBed } from '@angular/core/testing';
import { customerService } from './customer.service';

describe('customerService', () => {
  let service: customerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(customerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});