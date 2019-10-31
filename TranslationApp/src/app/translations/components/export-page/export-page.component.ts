import { Component, OnInit } from '@angular/core';
import { TranslationsSandboxService } from '../../_sandbox/translations-sandbox.service';
import { Observable } from 'rxjs';
import { Translations } from '../../models/translations';

@Component({
  selector: 'app-export-page',
  templateUrl: './export-page.component.html',
  styleUrls: ['./export-page.component.scss']
})
export class ExportPageComponent implements OnInit {

  translations: Observable<Array<Translations>>;

  constructor(private sandbox: TranslationsSandboxService) {}

  ngOnInit() {
    this.translations = this.sandbox.selectAllTranslations();
  }
}
