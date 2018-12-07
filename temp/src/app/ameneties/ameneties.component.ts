import { Component, OnInit } from '@angular/core';
import { About } from '../about';
import { BackendserviceService } from '../backendservice.service';

@Component({
  selector: 'app-ameneties',
  templateUrl: './ameneties.component.html',
  styleUrls: ['./ameneties.component.css']
})
export class AmenetiesComponent implements OnInit {

  aboutModel=new About("1","3","");
  constructor(private _backendservice: BackendserviceService) { }
  about :Number = 3;
  ngOnInit() {
    this.display(3,1);
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
