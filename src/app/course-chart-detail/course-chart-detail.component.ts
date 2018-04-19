import { Component, Input }           from '@angular/core';
import { PlotlyData }                 from '../plotly-data';

@Component({
  selector: 'app-course-chart-detail',
  templateUrl: './course-chart-detail.component.html',
  styleUrls: ['./course-chart-detail.component.css']
})
export class CourseChartDetailComponent {
  @Input() data: PlotlyData[];

  charts: any[];
  isChartInitialized: boolean;

  constructor() {
    this.isChartInitialized = false;
    this.charts = [];
    this.data = [];
  }

  ngAfterViewChecked(): void {
    // I really hate this mechanism
    if(!this.isChartInitialized) {
      this.loadCharts();
    }
  }

  ngOnChanges(): void {
    // semi-exhaustive check to avoid premature calls
    if(this.isChartInitialized && this.charts && this.charts.length > 0 && this.data && this.data.length > 0) {
      this.updateCharts();
    }
  }

  loadCharts(): void {
    // need to read from data, init charts, and store chart instances to this.charts
    if(this.data && this.data.length > 0) {
      let data_0 = this.data[0];
      let data_1 = this.data[1];
      let layout = {barmode: 'group'};

      let chart_0 = Plotly.newPlot('chart_div_0', data_0, layout);
      let chart_1 = Plotly.newPlot('chart_div_1', data_1, layout);

      this.isChartInitialized = true;
      this.charts = [chart_0,chart_1];
    } else {
      console.log("COURSE-CHART-DETAIL: NO DATA AND NO CHARTS?", this.data, this.charts);
    }
  }

  updateCharts(): void {
    // eventually, this update should check each chart and only update the with the updated data set
    if(this.isChartInitialized){
      this.loadCharts();
    }
  }

}
