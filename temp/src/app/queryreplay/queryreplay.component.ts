import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';
import { ModeloneService } from '../modelone.service';



@Component({
  selector: 'app-queryreplay',
  templateUrl: './queryreplay.component.html',
  styleUrls: ['./queryreplay.component.css']
})
export class QueryreplayComponent implements OnInit {
  private bodyText: string;
  private mailEditor :boolean =false;
  private tabledata:boolean =true;
  constructor(private _backendservice :BackendserviceService,private modalService :ModeloneService) { }
  querydata : any;
  maildata : any;
  ngOnInit() {
    this.loadData();
    this.bodyText = 'This text can be updated in modal 1';
  }

  loadData(){
    this._backendservice.loadquerydata()
    .subscribe( data =>{
      this.querydata=data 
      this.mailEditor=false;
      this.tabledata=true;
    }
              
      );
  }

  replayQuery(x){
   console.log("----------------"+x);
   this.maildata=x;
   this.maildata.toaddress=x.emailid;
   this.maildata.username=x.username;
   this.mailEditor=true;
   this.tabledata=false;
  } 

  openModal(id: string) {
    this.modalService.open(id);
}

  postmail(){
    
    this._backendservice.sendMail(this.maildata)
    .subscribe(d=>{
      this.maildata=null;
      this.mailEditor=false;
    this.tabledata=true;
    });
  }

closeModal(id: string) {
    this.modalService.close(id);
}
}
