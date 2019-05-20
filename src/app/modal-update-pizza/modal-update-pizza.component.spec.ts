import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdatePizzaComponent } from './modal-update-pizza.component';

describe('ModalUpdatePizzaComponent', () => {
  let component: ModalUpdatePizzaComponent;
  let fixture: ComponentFixture<ModalUpdatePizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdatePizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdatePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
