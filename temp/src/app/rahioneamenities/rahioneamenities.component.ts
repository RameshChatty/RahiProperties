import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';

@Component({
  selector: 'app-rahioneamenities',
  templateUrl: './rahioneamenities.component.html',
  styleUrls: ['./rahioneamenities.component.css']
})
export class RahioneamenitiesComponent implements OnInit {

  constructor(private  _backendservice : BackendserviceService) { }
  data : any ;
  ngOnInit() {
   
    this.getaboutRahiOne();
  }
  getaboutRahiOne() : void{
   this._backendservice.getRahiAbout(3,1).subscribe( res =>
      this.data=res 
      
     );; 
  } 
}
