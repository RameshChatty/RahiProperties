import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';
import { Observable} from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { of } from  'rxjs/observable/of';
import { catchError, map, tap } from  'rxjs/operators'


@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent implements OnInit {

  uploadimage : File=null ;
  selectedFile : File=null ;
  displayList : any;
  constructor(private _backendservice: BackendserviceService) { }

  ngOnInit() {
  }
  onSelectedFile(event){
console.log(event);
    this.selectedFile=event.target.files[0];
    console.log(this.selectedFile);
  }
  onuploadfile(){
    const fd=new FormData();
    fd.append('file',this.selectedFile,this.selectedFile.name);
    console.log(fd);

    this._backendservice.uploadImages(fd)
    .subscribe( data => console.log("recieved",data),
    this.displayimages()
    
  );
  }
  displayimages() : any{
this._backendservice.getImages()
.subscribe(res=>this.displayList=res );

}
}
