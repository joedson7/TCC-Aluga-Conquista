import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { bairros, labels, lugaresProximos, tiposImoveis } from '../utils/utils';
import { CameraSource, CameraResultType, Camera } from '@capacitor/camera';


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

  public cameraOptions = {
    quality: 80,
    resultType: CameraResultType.Base64,
    encodingType: 0,
    allowEditing: false,
    correctOrientation: true,
    source: CameraSource.Camera,
  };

  public generos = ['homens', 'mulheres', 'ambos'];

  public payloadCadastrarImovel = {
    bairro: [],
    areaDoImovel: 0,
    valorDoAluguel: 0,
    tipo: '',
    endereco: '',
    quartos: 0,
    banheiros: 0,
    estabelecimentos: '',
    possuiGaragem: false,
    aceitaPets: false,
    aceitaGeneros: '',
    telefone: 0,
    infoAdicionais: '',
    eMail: '',
    imagens: [],
  };

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  selecionarValorFormulario(event, key) {
    this.payloadCadastrarImovel[key] = event.target.value;
  }

  async selecionarImagem() {
    try {
      this.cameraOptions.source = CameraSource.Photos;
      const foto = await Camera.getPhoto(this.cameraOptions);
      const base64Imagem = await this.comprimir(
        'data:image/jpeg;base64,' + foto.base64String
      );
      if (base64Imagem) {
        this.payloadCadastrarImovel.imagens.push(base64Imagem);
      }
    } catch (error) {
      console.error('erro na camera: ', error);
    }
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

  comprimir(imagemAComprimir) {
    return new Promise((done) => {
      let imagemOtimizada = null;
      const image = new Image();

      image.src = imagemAComprimir;
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;

        if (canvas.width > 1080 && canvas.width > canvas.height) {
          const proporcao = (1080 * 100) / canvas.width / 100;
          canvas.width = Math.round(image.naturalWidth * proporcao);
          canvas.height = Math.round(image.naturalHeight * proporcao);
        } else if (canvas.height > 1080 && canvas.height > canvas.width) {
          const proporcao = (1080 * 100) / canvas.height / 100;
          canvas.height = Math.round(image.naturalHeight * proporcao);
          canvas.width = Math.round(image.naturalWidth * proporcao);
        }

        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        imagemOtimizada = canvas.toDataURL('image/jpeg', 0.7);
        done(imagemOtimizada);
      };
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
