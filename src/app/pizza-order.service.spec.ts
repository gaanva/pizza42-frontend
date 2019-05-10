import { TestBed } from '@angular/core/testing';

import { PizzaOrderService } from './pizza-order.service';

describe('PizzaOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaOrderService = TestBed.get(PizzaOrderService);
    expect(service).toBeTruthy();
  });
});
