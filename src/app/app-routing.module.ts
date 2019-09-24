import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '**', component: UnderConstructionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
