import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactosPage } from './contactos.page';

const routes: Routes = [
  {
    path: '',
    component: ContactosPage,
    // Hijos para que carguen los otros componente y agregarle el nombre del path que se le asigno en el HTML
    children: [
      {
        path: 'listado',
        loadChildren: () => import('./listado-contactos/listado-contactos.module').then( m => m.ListadoContactosPageModule)
      },
      {
        path: 'nuevo',
        loadChildren: () => import('./nuevo-contacto/nuevo-contacto.module').then( m => m.NuevoContactoPageModule)
      }
    ]
  },  {
    path: 'detalle-contacto',
    loadChildren: () => import('./detalle-contacto/detalle-contacto.module').then( m => m.DetalleContactoPageModule)
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactosPageRoutingModule {}
