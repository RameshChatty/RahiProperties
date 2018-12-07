import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';

@Component({
  selector: 'app-rahionecontact',
  templateUrl: './rahionecontact.component.html',
  styleUrls: ['./rahionecontact.component.css']
})
export class RahionecontactComponent implements OnInit {

  constructor(private  _backendservice : BackendserviceService) { }
  data : any ;
  ngOnInit() {
   
    this.getaboutRahiOne();
  }
  getaboutRahiOne() : void{
   this._backendservice.getRahiAbout(4,1).subscribe( res =>
      this.data=res 
      
     );; 
  } 

}
