import { OrderDetails } from './order-details';

describe('OrderDetails', () => {
  it('should create an instance', () => {
    expect(new OrderDetails('',2,2)).toBeTruthy();
  });
});
