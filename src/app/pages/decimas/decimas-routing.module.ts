import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecimasPage } from './decimas.page';

const routes: Routes = [
  {
    path: '',
    component: DecimasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecimasPageRoutingModule {}
