import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { MasinfoPage } from '../masinfo/masinfo';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
//import { error } from 'util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //variable para almacenar datos optenidos
  usuarios;

  constructor(public navCtrl: NavController, public alerta: AlertController, public proveedor: Proveedor1Provider) {

  }

  //funcion para visualizar datos externos
  ionViewDidLoad(){
    this.proveedor.obtenerDatos()
    .subscribe(
      (data)=> {this.usuarios = data;},
      (error)=> {console.log(error);}
    )
  }

  //mostrar otra pagina
  otraPagina(){
    this.navCtrl.push(MasinfoPage);
  }

  //mostrar una alerta basica
  alertaBasica(){
    let miAlerta = this.alerta.create({
      title: 'titulo alerta',
      message: 'Mensaje para la alerta OJO',
      buttons: ['Entendido']
    });
    miAlerta.present();
  }

  //mostrar una alerta con acciones de ingreso y botones
  alertaBasica2(){
    let miAlerta2 = this.alerta.create({
      title: 'titulo alerta',
      message: 'Mensaje para la alerta OJO',
      inputs: [
        {
          name: 'Mensaje',
          placeholder: 'Mensaje'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    miAlerta2.present();
  }
}
