import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordCounterPageComponent } from './pages/word-counter-page/word-counter-page.component';

const routes: Routes = [
  {
    path: '',
    component: WordCounterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordCounterRoutingModule { }
