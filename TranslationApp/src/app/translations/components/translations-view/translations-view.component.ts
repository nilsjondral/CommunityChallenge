import { Component, OnInit, Input } from '@angular/core';
import { TranslationsViewModel } from '../../models/translationsViewModel';

@Component({
  selector: 'app-translations-view',
  templateUrl: './translations-view.component.html',
  styleUrls: ['./translations-view.component.scss']
})
export class TranslationsViewComponent implements OnInit {

  @Input() translations: Array<TranslationsViewModel>;

  constructor() { }

  ngOnInit() {
  }

}
