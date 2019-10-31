import { Component, OnInit } from '@angular/core';
import { TranslationsSandboxService } from '../../_sandbox/translations-sandbox.service';
import { Translations } from '../../models/translations';
import { Observable } from 'rxjs';
import { TranslationsViewModel } from '../../models/translationsViewModel';

@Component({
  selector: 'app-translations-page',
  templateUrl: './translations-page.component.html',
  styleUrls: ['./translations-page.component.scss']
})
export class TranslationsPageComponent implements OnInit {

  translations: Observable<Array<TranslationsViewModel>>;

  constructor(private sandbox: TranslationsSandboxService) { }

  ngOnInit() {
    this.translations = this.sandbox.getTranslationsViewModel();
  }
}
