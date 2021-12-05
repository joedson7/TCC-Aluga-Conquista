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
    {value: 'alegria', name: 'Alegria'},
    {value: 'altoDaBoaVista', name: 'Alto da Boa Vista'},
    {value: 'altoDasAraras', name: 'Alto das Araras'},
    {value: 'altoMaron', name: 'Alto Maron'},
    {value: 'alvorada', name: 'Alvorada'},
    {value: 'ayrtonSenna', name: 'Ayrton Senna'},
    {value: 'bateias', name: 'Bateias'},
    {value: 'bateiasII', name: 'Bateias II'},
    {value: 'belaVista', name: 'Bela Vista'},
    {value: 'bemQuerer', name: 'Bem Querer'},
    {value: 'boaVista', name: 'Boa Vista'},
    {value: 'brasil', name: 'Brasil'},
    {value: 'brunoBacelar', name: 'Bruno Bacelar'},
    {value: 'cafezalPalaceHotel', name: 'Cafezal Palace Hotel'},
    {value: 'caminhoDoParque', name: 'Caminho do Parque'},
    {value: 'campinhos', name: 'Campinhos'},
    {value: 'candeias', name: 'Candeias'},
    {value: 'centro', name: 'Centro'},
    {value: 'cidadeJardim', name: 'Cidade Jardim'},
    {value: 'cidadeMaravilhosa', name: 'Cidade Maravilhosa'},
    {value: 'cidadeModelo', name: 'Cidade Modelo'},
    {value: 'cidadeSerrana', name: 'Cidade Serrana'},
    {value: 'condHortoPremier', name: 'Cond. Horto Premier'},
    {value: 'condTerrasAlphaville1', name: 'Cond. Terras Alphaville 1'},
    {value: 'condTerrasAlphaville2', name: 'Cond. Terras Alphaville 2'},
    {value: 'conceimaI', name: 'Conceima I'},
    {value: 'conceimaII', name: 'Conceima II'},
    {value: 'cruzeiro', name: 'Cruzeiro'},
    {value: 'distritoIndustrial', name: 'Distrito Industrial'},
    {value: 'espíritoSanto', name: 'Espírito Santo'},
    {value: 'esplanadaDoParque', name: 'Esplanada do Parque'},
    {value: 'felicia', name: 'Felícia'},
    {value: 'flamengo', name: 'Flamengo'},
    {value: 'guarani', name: 'Guarani'},
    {value: 'henriquetaPrates', name: 'Henriqueta Prates'},
    {value: 'ibirapuera', name: 'Ibirapuera'},
    {value: 'inocoopI', name: 'Inocoop I'},
    {value: 'inocoopII', name: 'Inocoop II'},
    {value: 'ipanema', name: 'Ipanema'},
    {value: 'iracema', name: 'Iracema'},
    {value: 'jardimCandeias', name: 'Jardim Candeias'},
    {value: 'jardimGuanabara', name: 'Jardim Guanambara'},
    {value: 'jardimValeria', name: 'Jardim Valéria'},
    {value: 'jatoba', name: 'Jatobá'},
    {value: 'jurema', name: 'Jurema'},
    {value: 'kadija', name: 'Kadija'},
    {value: 'lagoaDasFlores', name: 'Lagoa das Flores'},
    {value: 'miranteCondominios', name: 'Mirante Condomínios'},
    {value: 'miroCairo', name: 'Miro Cairo'},
    {value: 'moradaBemTeVi', name: 'Morada Bem-te-vi'},
    {value: 'moradaCandeias', name: 'Morada Candeias'},
    {value: 'moradaDoBemQuerer', name: 'Morada do Bem Querer'},
    {value: 'moradaDosPassarosI', name: 'Morada dos Pássaros I'},
    {value: 'moradaDosPassarosII', name: 'Morada dos Pássaros II'},
    {value: 'moradaDosPassarosIII', name: 'Morada dos Pássaros III'},
    {value: 'moradaReal', name: 'Morada Real'},
    {value: 'nossaSenhoraAparecida', name: 'Nossa Senhora Aparecida'},
    {value: 'nossaSenhoraDeLurdes', name: 'Nossa Senhora de Lurdes'},
    {value: 'novaCidade', name: 'Nova Cidade'},
    {value: 'panorama', name: 'Panorama'},
    {value: 'parqueCandeias', name: 'Parque Candeias'},
    {value: 'patagonia', name: 'Patagônia'},
    {value: 'primavera', name: 'Primavera'},
    {value: 'recantoDosPassaros', name: 'Recanto dos Pássaros'},
    {value: 'recreio', name: 'Recreio'},
    {value: 'santaCecilia', name: 'Santa Cecília'},
    {value: 'santaCruz', name: 'Santa Cruz'},
    {value: 'santaHelena', name: 'Santa Helena'},
    {value: 'saoPedro', name: 'São Pedro'},
    {value: 'saoVicente', name: 'São Vicente'},
     {value: 'sumare', name: 'Sumaré'},
     {value: 'universidade', name: 'Universidade'},
     {value: 'urbisI', name: 'Urbis I'},
     {value: 'urbisII', name: 'Urbis II'},
     {value: 'urbisIII', name: 'Urbis III'},
     {value: 'urbisIV', name: 'Urbis IV'},
     {value: 'urbisV', name: 'Urbis V'},
     {value: 'urbisVI', name: 'Urbis VI'},
     {value: 'vilaAmerica', name: 'Vila América'},
     {value: 'vilaConstança', name: 'Vila Constança'},
     {value: 'vilaEmurc', name: 'Vila Emurc'},
     {value: 'vilaSerranaI', name: 'Vila Serrana I'},
     {value: 'vilaSerranaII', name: 'Vila Serrana II'},
     {value: 'vilaSerranaIII', name: 'Vila Serrana III'},
     {value: 'vilaSerranaIV', name: 'Vila Serrana IV'},
     {value: 'vogAllego', name: 'Vog Allego'},
     {value: 'vogCajaiba', name: 'Vog Cajaiba'},
     {value: 'vogCandeias', name: 'Vog Candeias'},
     {value: 'vogFiori', name: 'Vog Fiori'},
     {value: 'vogItamaraty', name: 'Vog Itamaraty'},
     {value: 'vogJardins', name: 'Vog Jardins'},
     {value: 'vogPrimavera', name: 'Vog Primavera'},
     {value: 'zabele', name: 'Zabelê'}
   
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
