import { Component, OnInit } from '@angular/core';
import { TranslationsSandboxService } from '../../_sandbox/translations-sandbox.service';
import { Translations } from '../../models/translations';

@Component({
  selector: 'app-translations-page',
  templateUrl: './translations-page.component.html',
  styleUrls: ['./translations-page.component.scss']
})
export class TranslationsPageComponent implements OnInit {

  constructor(private sandbox: TranslationsSandboxService) { }

  ngOnInit() {
  }
}
