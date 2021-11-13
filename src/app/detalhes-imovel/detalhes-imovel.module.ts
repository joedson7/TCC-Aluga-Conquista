import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesImovelPageRoutingModule } from './detalhes-imovel-routing.module';

import { DetalhesImovelPage } from './detalhes-imovel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesImovelPageRoutingModule
  ],
  declarations: [DetalhesImovelPage]
})
export class DetalhesImovelPageModule {}
