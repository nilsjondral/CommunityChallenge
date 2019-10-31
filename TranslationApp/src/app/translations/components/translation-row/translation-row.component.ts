import { Component, OnInit, Input } from '@angular/core';
import { TranslationsViewModel } from '../../models/translationsViewModel';

@Component({
  selector: 'app-translation-row',
  templateUrl: './translation-row.component.html',
  styleUrls: ['./translation-row.component.scss']
})
export class TranslationRowComponent implements OnInit {

  @Input() translation: TranslationsViewModel;

  constructor() { }

  ngOnInit() {
  }

}
