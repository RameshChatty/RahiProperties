import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';
import { Observable} from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { of } from  'rxjs/observable/of';
import { catchError, map, tap } from  'rxjs/operators'
@Component({
  selector: 'app-rahitwogallery',
  templateUrl: './rahitwogallery.component.html',
  styleUrls: ['./rahitwogallery.component.css']
})
export class RahitwogalleryComponent implements OnInit {

  constructor(private _backendservice :BackendserviceService) { }
  displayList : any;
  ngOnInit() {
    this.displayimages();
  }
  displayimages() : any{
    this._backendservice.getImages()
    .subscribe(res=>this.displayList=res );
    
    }
}
