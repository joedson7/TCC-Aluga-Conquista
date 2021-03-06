import { ImoveisService, Imovel } from './../services/imoveis.service';
import { DetalhesImovelPage } from './../detalhes-imovel/detalhes-imovel.page';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AlertController,
  MenuController,
  ModalController,
} from '@ionic/angular';
import { CadastrarImovelComponent } from '../cadastrar-imovel/cadastrar-imovel.component';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public imoveis: Imovel[];
  public user = null;
  constructor(
    private modalCtrl: ModalController,
    private imoveisService: ImoveisService,
    private alertCtrl: AlertController,
    private changeDetectorRef: ChangeDetectorRef,
    private menuCtrl: MenuController
  ) {
    this.imoveisService.getImoveis().subscribe((res) => {
      this.imoveis = res;
      console.log('this.imoveis: ', this.imoveis);

      this.changeDetectorRef.detectChanges();
      console.log('Lista de imóveis cadastrados: ', res);
    });

    this.imoveisService.getObserverFiltro().subscribe(({ key, valor }) => {
      console.log('key: ', key);
      console.log('valor: ', valor);
      this.imoveis = this.imoveis.filter((imovel) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      });
    });
  }

  async ngOnInit() {
    this.presentAlert();
    const { value } = await Storage.get({ key: 'user' });

    if (value) {
      this.user = JSON.parse(value);
    }
  }

  async irParaDetalhesImovel(imovel: Imovel) {
    const modal = await this.modalCtrl.create({
      component: DetalhesImovelPage,
      componentProps: {
        imovel,
      },
    });

    await modal.present();
  }

  async cadastrarImovel() {
    const modal = await this.modalCtrl.create({
      component: CadastrarImovelComponent,
    });

    modal.present();
  }

  async logout() {
    await Storage.clear();
  }

  async openSideMenu() {
    await this.menuCtrl.open();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Altenção',
      message: 'Você poderá anunciar um imóvel se efetuar o login',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
