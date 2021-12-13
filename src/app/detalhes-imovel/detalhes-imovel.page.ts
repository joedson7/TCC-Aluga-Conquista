import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-detalhes-imovel',
  templateUrl: './detalhes-imovel.page.html',
  styleUrls: ['./detalhes-imovel.page.scss'],
})

export class DetalhesImovelPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}
 

  ngOnInit() {
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }

}
