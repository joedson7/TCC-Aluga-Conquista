import { Component } from '@angular/core';
import { bairros, labels, lugaresProximos, tiposImoveis } from './utils/utils';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];

  public labels = labels;
  public bairros = bairros;
  public tiposImoveis = tiposImoveis;
  public lugaresProximos = lugaresProximos;
  public valorDoAluguel = 0;
  public areaDoImovel = 0;

  constructor() {}

  getPrecoAluguel(event) {
    this.valorDoAluguel = event.detail.value;
    console.log('valorDoAluguel: ', this.valorDoAluguel);
  }

  getAreaImovel(event) {
    this.areaDoImovel = event.detail.value;
    console.log('areaDoImovel: ', this.areaDoImovel);
  }
}
