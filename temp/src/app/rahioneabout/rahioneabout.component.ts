import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';
@Component({
  selector: 'app-rahioneabout',
  templateUrl: './rahioneabout.component.html',
  styleUrls: ['./rahioneabout.component.css']
})
export class RahioneaboutComponent implements OnInit {

  constructor(private  _backendservice : BackendserviceService) { }
  data : {} ;
  ngOnInit() {
   
    this.getCatsToDisplay();
  }
  getCatsToDisplay() : void{
    console.log("dfkjfkdfdshfjh");
  } 
}
