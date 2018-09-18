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
import { LoginComponent } from './login/login.component';
import { RahitwoComponent } from './rahitwo/rahitwo.component';
import { RahitwoaboutComponent } from './rahitwoabout/rahitwoabout.component';
import { RahitwoamenitiesComponent } from './rahitwoamenities/rahitwoamenities.component';
import { RahitwogalleryComponent } from './rahitwogallery/rahitwogallery.component';
import { RahitwocontactComponent } from './rahitwocontact/rahitwocontact.component';
import { AdminComponent } from './admin/admin.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';

const routes: Routes = [
  { path: 'query', component: QueryComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'images', component: ImageuploadComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path : 'admin',component :AdminComponent},
  { path: 'rahione', component: RahioneComponent ,children: [
    {path :'rahiHome' ,component : ContentrahioneComponent },
    {path :'rahiabout' ,component : RahioneaboutComponent },
    {path :'rahioneroom' ,component : RahioneroomComponent },
    {path :'rahioneamenities' ,component : RahioneamenitiesComponent },
    {path :'rahionegallery' ,component : RahionegalleryComponent },
    {path :'rahionecontact' ,component : RahionecontactComponent }

  ] },
  {path : 'rahitwo' ,component : RahitwoComponent,children :[
    {path :'rahitwoHome' ,component : ContentrahioneComponent },
    {path :'rahitwoabout' ,component : RahitwoaboutComponent },
    {path :'rahitworoom' ,component : RahioneroomComponent },
    {path :'rahitwoamenities' ,component : RahitwoamenitiesComponent },
    {path :'rahitwogallery' ,component : RahitwogalleryComponent },
    {path :'rahitwocontact' ,component : RahitwocontactComponent }
  ]},  
  { path : 'admin' , component :  AdminComponent , children :[
    {path : 'about' , component :  AboutComponent },
    { path: 'images', component: ImageuploadComponent }
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
