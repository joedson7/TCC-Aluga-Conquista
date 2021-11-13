import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesImovelPage } from './detalhes-imovel.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesImovelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesImovelPageRoutingModule {}
