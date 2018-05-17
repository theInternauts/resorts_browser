import { NgModule }                   from '@angular/core';
import { RouterModule, Routes }       from '@angular/router';
import { ResortsComponent }           from './resorts/resorts.component';
import { SheetViewComponent }         from './sheet-view/sheet-view.component';
import { SheetjsComponent }           from './sheetjs/sheetjs.component';
import { CourseChartComponent }       from './course-chart/course-chart.component';

const routes: Routes = [
  { path: '',         component: SheetjsComponent },
  { path: 'data',     component: SheetViewComponent },
  { path: 'resorts',  component: ResortsComponent },
  { path: 'courses',  component: CourseChartComponent },
  { path: '*',        component: SheetjsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
