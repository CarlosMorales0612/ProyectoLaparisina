import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  dashboardMenuItems?: any[];
  pedidosMenuItems?: any[];
  clientesMenuItems?: any[];

  constructor(private sideBarService: SidebarService, private router: Router) {
    this.dashboardMenuItems = this.sideBarService.menu.filter(item => item.url === 'dashboard');
    this.pedidosMenuItems = this.sideBarService.menu.filter(item => item.url === 'pedidos');
    this.clientesMenuItems = this.sideBarService.menu.filter(item => item.url === 'clientes');
  }

  ngOnInit(): void {}

  logout() {
    this.router.navigateByUrl('/login');
  }
}