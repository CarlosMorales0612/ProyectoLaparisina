import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'nav-icon fas fa-tachometer-alt',
      url: 'dashboard'
    },
    {
      titulo: 'Pedidos',
      icono: 'nav-icon fas fa-cubes',
      url: 'pedidos'
    },
    {
      titulo: 'Clientes',
      icono: 'nav-icon fas fa-user-circle',
      url: 'clientes'
    }
  ];
}