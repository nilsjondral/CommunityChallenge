import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValueChange } from '../../models/valueCange';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-translation-edit-view',
  templateUrl: './translation-edit-view.component.html',
  styleUrls: ['./translation-edit-view.component.scss']
})
export class TranslationEditViewComponent implements OnInit, OnDestroy {

  @Input() value: string;
  @Input() language: string;
  @Input() name: string;
  @Output() valueChanged: EventEmitter<ValueChange> = new EventEmitter();

  valueControl: FormControl;

  private destory = new Subject();

  constructor() { }

  ngOnInit() {
    this.valueControl = new FormControl(this.value);
    this.valueControl.valueChanges.pipe(
      takeUntil(this.destory),
      debounceTime(100)
    ).subscribe(v => this.valueChanged.emit(new ValueChange({name: this.name, language: this.language, value: v})));
  }

  ngOnDestroy(): void {
    this.destory.next(true);
    this.destory = null;
  }
}
