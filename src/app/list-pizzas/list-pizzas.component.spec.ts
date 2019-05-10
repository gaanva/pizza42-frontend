import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPizzasComponent } from './list-pizzas.component';

describe('ListPizzasComponent', () => {
  let component: ListPizzasComponent;
  let fixture: ComponentFixture<ListPizzasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPizzasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
