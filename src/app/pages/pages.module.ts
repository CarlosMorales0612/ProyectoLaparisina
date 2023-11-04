import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ListPedidosComponent } from './pedidos/list-pedidos/list-pedidos.component';
import { AddNewPedidosComponent } from './pedidos/add-new-pedidos/add-new-pedidos.component';
import { EditNewPedidosComponent } from './pedidos/edit-new-pedidos/edit-new-pedidos.component';


@NgModule({
  declarations: [
    PagesComponent,
    PedidosComponent,
    DashboardComponent,
    ClientesComponent,
    ListPedidosComponent,
    AddNewPedidosComponent,
    EditNewPedidosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    PedidosComponent,
    DashboardComponent
  ]
})
export class PagesModule { }
