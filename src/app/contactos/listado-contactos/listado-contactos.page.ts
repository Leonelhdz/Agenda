import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listado-contactos',
  templateUrl: './listado-contactos.page.html',
  styleUrls: ['./listado-contactos.page.scss'],
})
export class ListadoContactosPage implements OnInit {

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  onClickDetalle(){
    this.navController.navigateForward('/contactos/detalle-contacto');
  }

}
