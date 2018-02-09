import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PhotosService } from '../shared/photos.service';
import { Photos } from '../shared/photos';

@Component({
  selector: 'photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {

photos: Observable<Photos[]>;
text: string;
faces: string;
landmarks: string;
web: string;
showSpinner = true;

    constructor(private photosService: PhotosService) { }

  ngOnInit() {
     this.photos = this.photosService.getSnapshot();
     this.photos.subscribe(() => this.showSpinner = false);
  }

}
