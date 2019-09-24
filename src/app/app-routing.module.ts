import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { LoftComponent } from './loft/loft.component';

const routes: Routes = [
  {
    path: 'loft/:id',
    component: LoftComponent
  },
  {
    path: '**',
    component: UnderConstructionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
