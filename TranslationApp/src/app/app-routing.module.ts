import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslationsPageComponent } from './translations/components/translations-page/translations-page.component';

const routes: Routes = [
  {
    path: '',
    component: TranslationsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
