import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';
@Component({
  selector: 'app-rahioneroom',
  templateUrl: './rahioneroom.component.html',
  styleUrls: ['./rahioneroom.component.css']
})
export class RahioneroomComponent implements OnInit {

  constructor(private  _backendservice : BackendserviceService) { }
  data : any ;
  ngOnInit() {
   
    this.getaboutRahiOne();
  }
  getaboutRahiOne() : void{
   this._backendservice.getRahiAbout(2,1).subscribe( res =>
      this.data=res 
      
     );; 
  } 
}


