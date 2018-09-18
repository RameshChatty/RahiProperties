import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ReservationComponent } from './reservation/reservation.component';
import { QueryComponent } from './query/query.component';
import { AppRoutingModule } from './/app-routing.module';
import { RahioneComponent } from './rahione/rahione.component';
import { SiderahioneComponent } from './siderahione/siderahione.component';
import { ContentrahioneComponent } from './contentrahione/contentrahione.component';
import { RahioneaboutComponent } from './rahioneabout/rahioneabout.component';
import { RahioneroomComponent } from './rahioneroom/rahioneroom.component';
import { RahioneamenitiesComponent } from './rahioneamenities/rahioneamenities.component';
import { RahionegalleryComponent } from './rahionegallery/rahionegallery.component';
import { RahionecontactComponent } from './rahionecontact/rahionecontact.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    RoomsComponent,
    ReservationComponent,
    QueryComponent,
    RahioneComponent,
    SiderahioneComponent,
    ContentrahioneComponent,
    RahioneaboutComponent,
    RahioneroomComponent,
    RahioneamenitiesComponent,
    RahionegalleryComponent,
    RahionecontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
