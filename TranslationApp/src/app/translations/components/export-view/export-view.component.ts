import { Component, OnInit, Input } from '@angular/core';
import { Translations } from '../../models/translations';

@Component({
  selector: 'app-export-view',
  templateUrl: './export-view.component.html',
  styleUrls: ['./export-view.component.scss']
})
export class ExportViewComponent implements OnInit {

  @Input() translations: Array<Translations>;

  constructor() { }

  ngOnInit() {
  }

}
