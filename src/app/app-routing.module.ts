import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewComponent } from './view/view.component';
import { JobViewComponent } from './job-view/job-view.component';

const routes: Routes = [
  { path: '', component: ViewComponent },
  { path: 'search', component: ViewComponent },
  { path: 'job-view', component: JobViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
