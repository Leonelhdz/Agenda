import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  arr: string[];
  


  constructor(
    private router: Router
  ) {
    this.arr = ['Mario', 'Laura', 'Rocio', 'Manuel']
   }

  ngOnInit() {
    console.log('[ngOnInit] contactos');
  }

  ionViewWillEnter() {
    console.log('[ionViewWillEnter] contactos');
  }

  ionViewDidEnter() {
    console.log('[ionViewDidEnter] contactos');
  }

  ionViewWillLeave() {
    console.log('[ionViewWillLeave] contactos');
  }

  ionViewDidLeave() {
    console.log('[ionViewDidLeave] contactos');
  }

// DESTRUIR UNA VISTA 
  ngOnDestroy() {
    console.log('[ngOnDestroy] contactos');
  }



  pulsarNombre(contacto: any){
    console.log(contacto);

  }

  navegarMapa(){
    // Acciones previas a la navegacion si es necesario
    this.router.navigate(['/mapa'])

  }

}
