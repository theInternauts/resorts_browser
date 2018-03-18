import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResortsComponent }     from './resorts/resorts.component';
import { SheetjsComponent }     from './sheetjs/sheetjs.component';

const routes: Routes = [
  { path: 'resorts', component: ResortsComponent }
  { path: 'data', component: SheetjsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}