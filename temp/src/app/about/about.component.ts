import { Component, OnInit } from '@angular/core';
import { About} from '../about';
import { BackendserviceService } from '../backendservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   aboutModel=new About("1","");
  constructor(private _backendservice: BackendserviceService) { }
  about :Number = 1;
  ngOnInit() {
  }
  
  submitAbout() {
    console.log("fdkjsfkdfkdf");
    window.alert("*****");
    this._backendservice.saveAboutInformation(this.aboutModel)
    .subscribe( data => console.log("recieved",data));
  }

  save(event){
    this._backendservice.saveAboutInformation(this.aboutModel)
    .subscribe( data => console.log("recieved",data));
  }
}
