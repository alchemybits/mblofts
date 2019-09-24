import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { LoftComponent } from './loft/loft.component';

@NgModule({
  declarations: [
    AppComponent,
    UnderConstructionComponent,
    LoftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
