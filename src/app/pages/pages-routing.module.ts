import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ListPedidosComponent } from './pedidos/list-pedidos/list-pedidos.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent, 
    children: [{
      path:'',
      component: PagesComponent,
    }]
  },
  {
    path: 'pedidos',
    component: PedidosComponent,
    children: [
      { path: 'list', component: ListPedidosComponent }
    ]
  },
  {
    path: 'clientes',
    component: ClientesComponent
  }
];
@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
