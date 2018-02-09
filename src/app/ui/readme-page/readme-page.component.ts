import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../uploads/shared/upload.service';
import { Upload } from '../../uploads/shared/upload';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'readme-page',
  templateUrl: './readme-page.component.html',
  styleUrls: ['./readme-page.component.scss'],
})
export class ReadmePageComponent implements OnInit {

  constructor() { }

 ngOnInit() {
    //this.uploads = this.upSvc.getUploads();
    //this.showSpinner = true;
  }

}
