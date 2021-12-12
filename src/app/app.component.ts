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

  public generos = ['homens', 'mulheres', 'ambos'];

  public payloadCadastrarImovel = {
    bairro: [],
    areaDoImovel: 0,
    valorDoAluguel: 0,
    tipo: '',
    quartos: 0,
    banheiros: 0,
    estabelecimentos: '',
    possuiGaragem: false,
    aceitaPets: false,
    aceitaGeneros: '',
    telefone: 0,
  };

  constructor() {}

  selecionarValorFormulario(event, key) {
    this.payloadCadastrarImovel[key] = event.target.value;
    console.log('this.payloadCadastrarImovel: ', this.payloadCadastrarImovel);
  }

  getPrecoAluguel(event) {
    this.payloadCadastrarImovel.valorDoAluguel = event.detail.value;
    console.log('valorDoAluguel: ', this.valorDoAluguel);
  }

  getAreaImovel(event) {
    this.payloadCadastrarImovel.areaDoImovel = event.detail.value;
    console.log('areaDoImovel: ', this.areaDoImovel);
  }
}
