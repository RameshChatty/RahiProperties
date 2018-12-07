import { Component, OnInit } from '@angular/core';
import {Query} from '../query';
import { BackendserviceService } from '../backendservice.service';
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

   queryModel=new Query("","","","");
    
  constructor(private _backendservice :BackendserviceService, private router : Router) { }

  ngOnInit() {
  }

  onsubmit(){
    this._backendservice.saveQuery(this.queryModel)
    .subscribe( data =>{
      console.log("recieved",data)
      this.router.navigate(['home']);
    });
    
  }
 
}
