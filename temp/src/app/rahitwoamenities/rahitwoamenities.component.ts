import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';

@Component({
  selector: 'app-rahitwoamenities',
  templateUrl: './rahitwoamenities.component.html',
  styleUrls: ['./rahitwoamenities.component.css']
})
export class RahitwoamenitiesComponent implements OnInit {

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
