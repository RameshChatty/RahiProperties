import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';
import { Query } from './query';
import { About } from './about';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};



@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {
  url ="http://localhost:2020/rahiproperties/";
  constructor(private _http: HttpClient) { } 

  saveQuery(_query:Query){

    return this._http.post<any>(this.url+"saveQuery",_query);
  }

  saveAboutInformation( _about :About){
    return this._http.post<any>(this.url+"saveAboutInformation",_about);
  }

  loadRahiOneAboutData(oid : number ,pid :number ){

    return this._http.get<any>(this.url +"getAboutOne?oid="+oid+"&pid="+pid);
  }

  uploadImages(fd :FormData){
    return this._http.post<any>(this.url+"uploadimages",fd);
  }

  getImages(){
    return this._http.get<any>(this.url +"display");
  }

  loadquerydata() {
    return this._http.get<any>(this.url +"loadquerydata");
  }

  getRahiAbout(oid,pid){
    return this._http.get<any>(this.url +"getrahiabout?oid="+oid+"&pid="+pid);
  }

  sendMail(maildata){
    return this._http.post<any>(this.url +"sendmail",maildata);
  }
}
