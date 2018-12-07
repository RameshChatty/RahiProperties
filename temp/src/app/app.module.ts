import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
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
import { LoginComponent } from './login/login.component';
import { RahitwoComponent } from './rahitwo/rahitwo.component';
import { RahitwoaboutComponent } from './rahitwoabout/rahitwoabout.component';
import { RahitwoamenitiesComponent } from './rahitwoamenities/rahitwoamenities.component';
import { RahitwocontactComponent } from './rahitwocontact/rahitwocontact.component';
import { RahitwogalleryComponent } from './rahitwogallery/rahitwogallery.component';
import { SiderahitwoComponent } from './siderahitwo/siderahitwo.component';
import { BackendserviceService } from './backendservice.service';
import { AdminComponent } from './admin/admin.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { AdminsidemenuComponent } from './adminsidemenu/adminsidemenu.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import {AtomSpinnerModule} from 'angular-epic-spinners';
import { QueryreplayComponent } from './queryreplay/queryreplay.component';
import { RoomratesComponent } from './roomrates/roomrates.component';
import { AmenetiesComponent } from './ameneties/ameneties.component';
import { AdmincontactComponent } from './admincontact/admincontact.component';
import { SpinnerComponent } from './spinner/spinner.component'
import { ModeloneService } from './modelone.service';
import { ModeloneComponent } from './modelone/modelone.component'
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
    RahionecontactComponent,
    LoginComponent,
    RahitwoComponent,
    RahitwoaboutComponent,
    RahitwoamenitiesComponent,
    RahitwocontactComponent,
    RahitwogalleryComponent,
    SiderahitwoComponent,
    AdminComponent,
    AdminsidemenuComponent,
    ImageuploadComponent,
    QueryreplayComponent,
    RoomratesComponent,
    AmenetiesComponent,
    AdmincontactComponent,
    SpinnerComponent  ,
    ModeloneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    CKEditorModule,
    AtomSpinnerModule
    
  ],
  providers: [BackendserviceService,ModeloneService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  display = false;
}
