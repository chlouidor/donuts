import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacionPagPage } from './confirmacion-pag.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacionPagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacionPagPageRoutingModule {}
