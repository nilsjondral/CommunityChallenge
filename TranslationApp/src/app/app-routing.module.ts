import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslationsPageComponent } from './translations/components/translations-page/translations-page.component';
import { LoadingPageComponent } from './translations/components/loading-page/loading-page.component';
import { ExportPageComponent } from './translations/components/export-page/export-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'load',
    pathMatch: 'full'
  },
  {
    path: 'load',
    component: LoadingPageComponent
  },
  {
    path: 'edit',
    component: TranslationsPageComponent
  },
  {
    path: 'export',
    component: ExportPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
