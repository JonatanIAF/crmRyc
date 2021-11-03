import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-zoom-split',       class: '' },
    { path: '/notifications', title: 'PDF',     icon:'nc-bell-55',    class: '' },
    { path: '/user',          title: 'Datos generales',      icon:'nc-badge',  class: '' },
    { path: '/solicitud-inscripcion', title: 'Formato de Inscripcion',icon:'nc-tile-56',class: '' },
    {path: '/solicitud-aceptacion', title: 'Formato de Aceptacion', icon:'nc-bullet-list-67', class: ''},
    {path: '/acuse', title: 'Acuse de entrega', icon:'nc-single-copy-04', class: ''}
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
