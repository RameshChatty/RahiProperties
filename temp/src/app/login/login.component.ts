import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string; 
  password : string;
  title = '';
  constructor(private http : HttpClient, private router : Router) {
    
   }

   
   getauthentication(){
    
     console.log("---------------------");
     console.log(this.title+"-------")
     this.title='temp';
     return this.http.get<any>("http://localhost:2020/rahiproperties/login?username="+this.username+"&password="+this.password).
     subscribe(d=>{
      console.log(this.title+"----2---")
      this.router.navigate(['admin']);
      this.title='';
     })
   }
  ngOnInit() {
  }

}
