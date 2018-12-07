import { Component, OnInit } from '@angular/core';

import { BackendserviceService } from '../backendservice.service';
@Component({
  selector: 'app-rahitwoabout',
  templateUrl: './rahitwoabout.component.html',
  styleUrls: ['./rahitwoabout.component.css']
})
export class RahitwoaboutComponent implements OnInit {

  constructor(private  _backendservice : BackendserviceService) { }
  data : any ;
  ngOnInit() {
   
    this.getaboutRahiOne();
  }
  getaboutRahiOne() : void{
    this._backendservice.getRahiAbout(1,2).subscribe( res =>
      this.data=res 
      
     );;
  } 

  
}
