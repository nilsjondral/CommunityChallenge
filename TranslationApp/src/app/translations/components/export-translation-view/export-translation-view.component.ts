import { Component, OnInit, Input } from '@angular/core';
import { Translations } from '../../models/translations';

@Component({
  selector: 'app-export-translation-view',
  templateUrl: './export-translation-view.component.html',
  styleUrls: ['./export-translation-view.component.scss']
})
export class ExportTranslationViewComponent implements OnInit {

  @Input() translations: Translations;

  constructor() { }

  ngOnInit() {
  }

  parseValues(object: any): string {
    return JSON.stringify(object);
  }
}
