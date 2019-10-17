import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { HomeComponent } from './home/home.component';
import { LoftComponent } from './loft/loft.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'lifestyle',
    component: LifestyleComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
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
