import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ReservationComponent } from './reservation/reservation.component';
import { QueryComponent } from './query/query.component';
import { RahioneComponent } from './rahione/rahione.component';
import { ContentrahioneComponent } from './contentrahione/contentrahione.component';

import { RahioneaboutComponent } from './rahioneabout/rahioneabout.component';
import { RahioneroomComponent } from './rahioneroom/rahioneroom.component';
import { RahioneamenitiesComponent } from './rahioneamenities/rahioneamenities.component';
import { RahionegalleryComponent } from './rahionegallery/rahionegallery.component';
import { RahionecontactComponent } from './rahionecontact/rahionecontact.component';

const routes: Routes = [
  { path: 'query', component: QueryComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'rahione', component: RahioneComponent ,children: [
    {path :'rahiHome' ,component : ContentrahioneComponent },
    {path :'rahiabout' ,component : RahioneaboutComponent },
    {path :'rahioneroom' ,component : RahioneroomComponent },
    {path :'rahioneamenities' ,component : RahioneamenitiesComponent },
    {path :'rahionegallery' ,component : RahionegalleryComponent },
    {path :'rahionecontact' ,component : RahionecontactComponent }

    
  ] },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
