import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { ResortsComponent }       from './resorts/resorts.component';
import { ResortDetailComponent }  from './resort-detail/resort-detail.component';
import { SheetjsComponent }       from './sheetjs/sheetjs.component';

const routes: Routes = [
  // { path: '', redirectTo: '/data', pathMatch: 'full'},
  { path: 'data', component: SheetjsComponent },
  { path: 'resorts', component: ResortsComponent },
  { path: 'resorts/:id', component: ResortDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}