import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprasPageRoutingModule } from './compras-routing.module';
import {MatCardModule} from '@angular/material/card';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



import { ComprasPage } from './compras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComprasPageRoutingModule,
    MatCardModule,
    MatFormFieldModule, MatInputModule, MatSelectModule
  ],
  declarations: [ComprasPage]
})
export class ComprasPageModule {}
