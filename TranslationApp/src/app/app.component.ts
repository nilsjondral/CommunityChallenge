import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, merge } from 'rxjs';
import { shareReplay, switchMap, mapTo, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TranslationApp';

  // private searchTerm: Observable<string>;
  // private page: Observable<string>;
  // private service = {
  //   getItems(parameters: any): Observable<{items: Array<string>}> {
  //     throw new Error('not implemented');
  //   }
  // };
  // private items: Observable<Array<string>>;
  // private loading: Observable<boolean>;

  ngOnInit() {
    // // Intermediate streams
    // const parameters = combineLatest(this.searchTerm, this.page)
    //   .pipe(shareReplay(1));
    // const itemsLoaded = parameters.pipe(
    //     switchMap(p => this.service.getItems(p)),
    //     shareReplay(1));
    // const loadingStart = parameters.pipe(mapTo(true));
    // const loadingDone = itemsLoaded.pipe(mapTo(false));

    // // Output streams
    // this.items = itemsLoaded.pipe(map(r => r.items));
    // this.loading = merge(loadingStart, loadingDone)
    //   .pipe(startWith(false));
  }
}
