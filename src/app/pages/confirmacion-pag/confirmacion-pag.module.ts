import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionPagPageRoutingModule } from './confirmacion-pag-routing.module';

import { ConfirmacionPagPage } from './confirmacion-pag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionPagPageRoutingModule
  ],
  declarations: [ConfirmacionPagPage]
})
export class ConfirmacionPagPageModule {}
