import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewPedidosComponent } from './edit-new-pedidos.component';

describe('EditNewPedidosComponent', () => {
  let component: EditNewPedidosComponent;
  let fixture: ComponentFixture<EditNewPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditNewPedidosComponent]
    });
    fixture = TestBed.createComponent(EditNewPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
