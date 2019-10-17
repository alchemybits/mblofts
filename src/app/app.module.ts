import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FeaturesDetailsComponent } from './features-details/features-details.component';
import { AvailabilityComponent } from './availability/availability.component';
import { VideoTourComponent } from './video-tour/video-tour.component';
import { LoftComponent } from './loft/loft.component';
import { MainPictureComponent } from './main-picture/main-picture.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { ContactComponent } from './contact/contact.component';
import { DarkBlockComponent } from './dark-block/dark-block.component';
import { LightBlockComponent } from './light-block/light-block.component';


@NgModule({
  declarations: [
    AppComponent,
    UnderConstructionComponent,
    LoftComponent,
    FooterComponent,
    HomeComponent,
    TopBarComponent,
    FeaturesDetailsComponent,
    AvailabilityComponent,
    VideoTourComponent,
    MainPictureComponent,
    UnitDetailsComponent,
    CarouselComponent,
    LifestyleComponent,
    ContactComponent,
    DarkBlockComponent,
    LightBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
