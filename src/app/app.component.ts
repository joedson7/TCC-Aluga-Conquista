import { Component } from '@angular/core';
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
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  public bairros = [
    {value: 'altoMaron', name: 'Alto Maron'},
    {value: 'ayrtonSenna', name: 'Ayrton Senna'},
    {value: 'bateias', name: 'Bateias'},
    {value: 'boaVista', name: 'Boa Vista'},
    {value: 'brasil', name: 'Brasil'},
    {value: 'campinhos', name: 'Campinhos'},
    {value: 'candeias', name: 'Candeias'},
    {value: 'cruzeiro', name: 'Cruzeiro'},
    {value: 'distritoIndustrial', name: 'Distrito Industrial'},
    {value: 'espíritoSanto', name: 'Espírito Santo'},
    {value: 'felicia', name: 'Felícia'},
    {value: 'guarani', name: 'Guarani'},
    {value: 'ibirapuera', name: 'Ibirapuera'},
    {value: 'jatoba', name: 'Jatobá'},
    {value: 'jurema', name: 'Jurema'},
    {value: 'lagoaDasFlores', name: 'Lagoa das Flores'},
    {value: 'nossaSenhoraAparecida', name: 'Nossa Senhora Aparecida'},
    {value: 'patagonia', name: 'Patagônia'},
    {value: 'primavera', name: 'Primavera'},
    {value: 'recreio', name: 'Recreio'},
    {value: 'saoPedro', name: 'São Pedro'},
    {value: 'universidade', name: 'Universidade'},
    {value: 'zabele', name: 'Zabelê'},
  ]

  public tiposImoveis = [
    {value: 'casaTerreo', name: 'Casa Térreo'},
    {value: 'casaSobrado', name: 'Casa Sobrado'},
    {value: 'apartamento', name: 'Apartamento'},
    {value: 'kitnet', name: 'Kitnet'},
    {value: 'quarto', name: 'Quarto'},
    {value: 'salasComerciais', name: 'Salas Comerciais'},
    {value: 'galpao', name: 'Galpão'},
    {value: 'garagem', name: 'Garagem'},
    {value: 'sitio', name: 'Sítio'}
  ]

  public lugaresProximos = [
    {value: 'shopping', name: 'Shopping', checked: false},
    {value: 'postoDeCombustivel', name: 'Posto de combustível', checked: false},
    {value: 'salaoDeBeleza', name: 'Salão de beleza', checked: false},
    {value: 'restaurante', name: 'restaurante', checked: false}, 
    {value: 'farmacia', name: 'Farmácia', checked: false}, 
    {value: 'padaria', name: 'Padaria', checked: false}, 
    {value: 'academia', name: 'Academia', checked: false},
    {value: 'lanchonete', name: 'Lanchonete', checked: false},
    {value: 'bar', name: 'Bar', checked: false},
    {value: 'shoppings', name: 'Shoppings', checked: false},
    {value: 'mercado', name: 'Mercado', checked: false},
    {value: 'igreja', name: 'Igreja', checked: false},
    {value: 'dentista', name: 'Dentista', checked: false},
    {value: 'hospital', name: 'Hospital', checked: false},


  ]

  public valorDoAluguel = 0
  public areaDoImovel = 0

  constructor() {}

  getPrecoAluguel(event) {
    this.valorDoAluguel = event.detail.value
    console.log('valorDoAluguel: ',this.valorDoAluguel)
  }

  getAreaImovel(event) {
    this.areaDoImovel = event.detail.value
    console.log('areaDoImovel: ',this.areaDoImovel)
  }
}
