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

photoss: Observable<Photos[]>;
text: string;
faces: string;
landmarks: string;
web: string;
showSpinner = true;

    constructor(private photosService: PhotosService) { }

  ngOnInit() {
     this.photoss = this.photosService.getSnapshot();
     this.photoss.subscribe(() => this.showSpinner = false);
  }

}
