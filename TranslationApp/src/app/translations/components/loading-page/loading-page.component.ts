import { Component, OnInit } from '@angular/core';
import { TranslationsSandboxService } from '../../_sandbox/translations-sandbox.service';
import { Translations } from '../../models/translations';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss']
})
export class LoadingPageComponent implements OnInit {

  public nlDisabled: Observable<boolean>;
  public enDisabled: Observable<boolean>;
  public frDisabled: Observable<boolean>;

  constructor(private sandbox: TranslationsSandboxService) { }

  ngOnInit() {
    const languages = this.sandbox.selectLanguages();

    this.nlDisabled = languages.pipe(map(a => a.includes('nl')));
    this.enDisabled = languages.pipe(map(a => a.includes('en')));
    this.frDisabled = languages.pipe(map(a => a.includes('fr')));
  }

  translationsLoaded(translations: Translations) {
    this.sandbox.loadTranslation(translations);
  }
}
