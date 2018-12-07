import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';

@Component({
  selector: 'app-rahitwocontact',
  templateUrl: './rahitwocontact.component.html',
  styleUrls: ['./rahitwocontact.component.css']
})
export class RahitwocontactComponent implements OnInit {

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
