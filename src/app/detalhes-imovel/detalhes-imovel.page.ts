import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Imovel } from '../services/imoveis.service';

@Component({
  selector: 'app-detalhes-imovel',
  templateUrl: './detalhes-imovel.page.html',
  styleUrls: ['./detalhes-imovel.page.scss'],
})
export class DetalhesImovelPage implements OnInit {
  public imovel: Imovel;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    console.log('imovel: ', this.imovel);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
