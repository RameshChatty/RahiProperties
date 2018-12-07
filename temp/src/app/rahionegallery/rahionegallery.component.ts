import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';
import { Observable} from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { of } from  'rxjs/observable/of';
import { catchError, map, tap } from  'rxjs/operators'

@Component({
  selector: 'app-rahionegallery',
  templateUrl: './rahionegallery.component.html',
  styleUrls: ['./rahionegallery.component.css']
})
export class RahionegalleryComponent implements OnInit {

  constructor(private _backendservice :BackendserviceService) { }
  displayList : any;
  display =false;
  ngOnInit() {
    this.display=true;
    this.displayimages();
  }
  displayimages() : any{
    this._backendservice.getImages()
    .subscribe(res=> {this.displayList=res;
      this.display=false;
    } );
    
    }
}
