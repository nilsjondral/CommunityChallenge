import { Component, OnInit } from '@angular/core';
import { TranslationsSandboxService } from '../../_sandbox/translations-sandbox.service';

@Component({
  selector: 'app-translations-page',
  templateUrl: './translations-page.component.html',
  styleUrls: ['./translations-page.component.scss']
})
export class TranslationsPageComponent implements OnInit {

  constructor(private sandbox: TranslationsSandboxService) { }

  ngOnInit() {
    this.sandbox.loadTranslation(JSON.parse(this.nl));
    this.sandbox.getTranslationsViewModel().subscribe(t => console.log(t));
  }

  // tslint:disable-next-line: member-ordering
  private nl = `{
    "navigation": {
      "applicationTitle": "Bankbetalingen",
      "payments": "Betalingen",
      "settings": "Instellingen"
    }
  }`;
}
