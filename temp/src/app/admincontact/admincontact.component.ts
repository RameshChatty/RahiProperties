import { Component, OnInit } from '@angular/core';
import { About } from '../about';
import { BackendserviceService } from '../backendservice.service';

@Component({
  selector: 'app-admincontact',
  templateUrl: './admincontact.component.html',
  styleUrls: ['./admincontact.component.css']
})
export class AdmincontactComponent implements OnInit {

  aboutModel=new About("1","4","Empty data");
  constructor(private _backendservice: BackendserviceService) { }
  about :Number = 4;
  ngOnInit() {
    this.display(4,1);
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
