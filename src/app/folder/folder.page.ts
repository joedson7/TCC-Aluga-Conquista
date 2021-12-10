import { ImoveisService, Imovel } from './../services/imoveis.service';
import { DetalhesImovelPage } from './../detalhes-imovel/detalhes-imovel.page';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { CadastrarImovelComponent } from '../cadastrar-imovel/cadastrar-imovel.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public imoveis: Imovel[];
  constructor(
    private modalCtrl: ModalController,
    private imoveisService: ImoveisService,
    private alertCtrl: AlertController,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.imoveisService.getImoveis().subscribe((res) => {
      this.imoveis = res;
      this.changeDetectorRef.detectChanges();
      console.log('Lista de imóveis cadastrados: ', res);
    });
  }

  ngOnInit() {}

  async irParaDetalhesImovel() {
    const modal = await this.modalCtrl.create({
      component: DetalhesImovelPage,
      componentProps: { aluguelId: 1 },
    });

    await modal.present();
  }

  async cadastrarImovel() {
    const modal = await this.modalCtrl.create({
      component: CadastrarImovelComponent,
    });

    modal.present();

    // const alert = await this.alertCtrl.create({
    //   header: 'Cadastrar Imóvel',
    //   inputs: [
    //     {
    //       name: 'area',
    //       placeholder: 'Área em m²',
    //       type: 'text',
    //     },
    //     {
    //       name: 'bairro',
    //       placeholder: 'Bairro',
    //       type: 'text',
    //     },
    //     {
    //       name: 'endereco',
    //       placeholder: 'Endereço',
    //       type: 'text',
    //     },
    //     {
    //       name: 'estabelecimentos',
    //       placeholder: 'Estabelecimentos',
    //       type: 'text',
    //     },
    //     {
    //       name: 'quartos',
    //       placeholder: 'Quartos',
    //       type: 'text',
    //     },
    //     {
    //       name: 'telefone',
    //       placeholder: 'Telefone',
    //       type: 'text',
    //     },
    //     {
    //       name: 'tipo',
    //       placeholder: 'Tipo',
    //       type: 'text',
    //     },
    //     {
    //       name: 'valor',
    //       placeholder: 'Valor',
    //       type: 'text',
    //     },
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancelar',
    //       role: 'cancel',
    //     },
    //     {
    //       text: 'Confirmar',
    //       handler: (res) => {
    //         this.imoveisService.cadastrarImovel(res);
    //       },
    //     },
    //   ],
    // });

    // await alert.present();
  }
}
