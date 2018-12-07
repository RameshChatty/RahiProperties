import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';
@Component({
  selector: 'app-rahioneabout',
  templateUrl: './rahioneabout.component.html',
  styleUrls: ['./rahioneabout.component.css']
})
export class RahioneaboutComponent implements OnInit {

  constructor(private  _backendservice : BackendserviceService) { }
  data : any ;
  ngOnInit() {
   
    this.getaboutRahiOne();
  }
  getaboutRahiOne() : void{
   this._backendservice.getRahiAbout(1,1).subscribe( res =>
      this.data=res 
      
     );; 
  } 
}
