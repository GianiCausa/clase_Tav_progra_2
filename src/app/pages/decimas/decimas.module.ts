import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecimasPageRoutingModule } from './decimas-routing.module';

import { DecimasPage } from './decimas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecimasPageRoutingModule
  ],
  declarations: [DecimasPage]
})
export class DecimasPageModule {}
