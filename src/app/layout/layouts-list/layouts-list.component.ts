import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LayoutService } from '../layout.service';
import { Layout } from '../layout-model';

@Component({
  selector: 'layouts-list',
  templateUrl: './layouts-list.component.html',
  styleUrls: ['./layouts-list.component.scss']
})
export class LayoutsListComponent implements OnInit {

  layouts: Observable<Layout[]>;

  descricao: string;
  showSpinner = true;

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
     this.layouts = this.layoutService.getSnapshot();
     this.showSpinner = false;
  }
  createLayout() {
    this.layoutService.create(this.descricao);
  }
}
