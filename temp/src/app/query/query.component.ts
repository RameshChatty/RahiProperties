import { Component, OnInit } from '@angular/core';
import {Query} from '../query';
import { BackendserviceService } from '../backendservice.service';
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

   queryModel=new Query("hello","45454@gm.com ","12415 ","54545454");
    
  constructor(private _backendservice :BackendserviceService) { }

  ngOnInit() {
  }

  onsubmit(){
    this._backendservice.saveQuery(this.queryModel)
    .subscribe( data => console.log("recieved",data));
  }
 
}
