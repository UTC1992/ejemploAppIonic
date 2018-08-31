import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  lista: Array<any> = [
    {
      titulo: "Gato",
      color: "#444"
    },
    {
      titulo: "Pato",
      color: "#999"
    }
  ]

  constructor(public navCtrl: NavController) {

  }

}
