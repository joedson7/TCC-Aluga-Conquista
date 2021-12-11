import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { bairros, labels, lugaresProximos, tiposImoveis } from '../utils/utils';

type ChavesCadastroImovel = {
  bairro: string;
  area: number;
  valor: number;
  tipo: string;
  endereço: string;
  quartos: number;
  banheiros: number;
  estabelecimentos: string;
  possuiGaragem: boolean;
  aceitaPets: boolean;
  telefone: number;
  eMail: string;
  imagens: string[];
  aceita: 'homens' | 'mulheres' | 'ambos';
};

@Component({
  selector: 'app-cadastrar-imovel',
  templateUrl: './cadastrar-imovel.component.html',
  styleUrls: ['./cadastrar-imovel.component.scss'],
})
export class CadastrarImovelComponent implements OnInit {
  public labels = labels;
  public bairros = bairros;
  public tiposImoveis = tiposImoveis;
  public lugaresProximos = lugaresProximos;
  public valorDoAluguel = 0;
  public areaDoImovel = 0;
 // public generoLocatario = aceita;  ACRESCENTAR ESSA PARTE PARA SELECIONAR O GENERO

  public payloadCadastrarImovel = {
    bairro: [],
    areaDoImovel: 0,
    valorDoAluguel: 0,
    tipo: '',
    endereço: '',
    quartos: 0,
    banheiros: 0,
    estabelecimentos: '',
    possuiGaragem: false,
    aceitaPets: false,
    telefone: 0,
    eMail: '',
    imagens: [],
    aceita: {
      homens: false,
      mulheres: false,
      ambos: false,
      pets: true,
    },
  };

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  selecionarValorFormulario(event, key) {
    this.payloadCadastrarImovel[key] = event.target.value;

    console.log('this.payloadCadastrarImovel: ', this.payloadCadastrarImovel);
  }

  getPrecoAluguel(event) {
    this.payloadCadastrarImovel.valorDoAluguel = event.detail.value;
  }

  getAreaImovel(event) {
    this.payloadCadastrarImovel.areaDoImovel = event.detail.value;
  }

  cadastrarImovel() {
    console.log('this.payloadCadastrarImovel: ', this.payloadCadastrarImovel);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
