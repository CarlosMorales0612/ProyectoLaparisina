import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPedidosComponent } from './add-new-pedidos.component';

describe('AddNewPedidosComponent', () => {
  let component: AddNewPedidosComponent;
  let fixture: ComponentFixture<AddNewPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewPedidosComponent]
    });
    fixture = TestBed.createComponent(AddNewPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
