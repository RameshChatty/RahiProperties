import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';
import { About } from '../about';

@Component({
  selector: 'app-roomrates',
  templateUrl: './roomrates.component.html',
  styleUrls: ['./roomrates.component.css']
})
export class RoomratesComponent implements OnInit {

  aboutModel=new About("1","2","");
  constructor(private _backendservice: BackendserviceService) { }
  about :Number = 2;
  ngOnInit() {
    this.display(2,1);
  }
  
  submitAbout() {
   
    this._backendservice.saveAboutInformation(this.aboutModel)
    .subscribe( data => console.log("recieved",data));
  }

  save(event){
    this._backendservice.saveAboutInformation(this.aboutModel)
    .subscribe( data => console.log("recieved",data));
  }

  display(oid,pid){
    this._backendservice.getRahiAbout(oid,pid).subscribe( res =>
      this.aboutModel.aboutText=res.htmlContent 
      
     );;
  }

}
