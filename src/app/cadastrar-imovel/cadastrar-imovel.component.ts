import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { bairros, labels, lugaresProximos, tiposImoveis } from '../utils/utils';
import { CameraSource, CameraResultType, Camera } from '@capacitor/camera';
import { ImoveisService, Imovel } from '../services/imoveis.service';

@Component({
  selector: 'app-cadastrar-imovel',
  templateUrl: './cadastrar-imovel.component.html',
  styleUrls: ['./cadastrar-imovel.component.scss'],
})
export class CadastrarImovelComponent implements OnInit {
  public isCarregandoCadastro = false;

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

  public payloadCadastrarImovel: Imovel = {
    bairro: '',
    areaDoImovel: '',
    valorDoAluguel: 0,
    tipo: '',
    endereco: '',
    quartos: 0,
    banheiros: 0,
    estabelecimentos: [],
    possuiGaragem: false,
    aceitaPets: false,
    aceitaGeneros: '',
    telefone: '',
    infoAdicionais: '',
    eMail: '',
    imagens: [],
  };

  constructor(
    private modalCtrl: ModalController,
    private imoveisCtrl: ImoveisService,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  selecionarValorFormulario(event, key) {
    this.payloadCadastrarImovel[key] = event.target.value;
  }

  async selecionarImagem() {
    try {
      this.cameraOptions.source = CameraSource.Photos;
      const foto = await Camera.getPhoto(this.cameraOptions);
      const base64Imagem = (await this.comprimir(
        'data:image/jpeg;base64,' + foto.base64String
      )) as string;
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

  async cadastrarImovel() {
    this.payloadCadastrarImovel.telefone = String(
      this.payloadCadastrarImovel.telefone
    );
    try {
      const isCamposValidados = await this.validarCampos(
        this.payloadCadastrarImovel
      );
      if (isCamposValidados) {
        this.isCarregandoCadastro = true;
        console.log(
          'this.payloadCadastrarImovel: ',
          this.payloadCadastrarImovel
        );
        await this.imoveisCtrl.cadastrarImovel(this.payloadCadastrarImovel);
        this.modalCtrl.dismiss();
      }
    } catch (error) {
      console.error(error);
      await this.exibirToast();
    } finally {
      this.isCarregandoCadastro = false;
    }
  }

  async validarCampos(payloadImovel: Imovel) {
    if (!payloadImovel?.endereco.length) {
      return await this.exibirToast('O endereço é obrigatório');
    }
    if (!payloadImovel?.bairro.length) {
      return await this.exibirToast('O bairro é obrigatório');
    }
    if (!payloadImovel?.tipo.length) {
      return await this.exibirToast('O tipo do imóvel é obrigatório');
    }
    if (!payloadImovel?.valorDoAluguel) {
      return await this.exibirToast('O valor do aluguel é obrigatório');
    }
    if (!payloadImovel?.banheiros) {
      return await this.exibirToast('A quantidade de banheiros é obrigatório');
    }
    if (!payloadImovel?.imagens.length) {
      return await this.exibirToast('É obrigatório pelo menos uma imagem');
    }
    if (!payloadImovel?.telefone.length) {
      return await this.exibirToast('O telefone é obrigatório');
    }
    return true;
  }

  async exibirToast(message = 'Erro ao cadastrar imóvel') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'top',
    });

    await toast.present();
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
