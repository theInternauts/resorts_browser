import { Component, OnInit }   from '@angular/core';
import { Resort }                     from '../resort';
import { PlotlyData }                 from '../plotly-data';
import { ResortService }              from '../resort.service';
import { MessageService }             from '../message.service';

@Component({
  selector: 'app-course-chart',
  templateUrl: './course-chart.component.html',
  styleUrls: ['./course-chart.component.css']
})
export class CourseChartComponent implements OnInit {
  resorts: Resort[];
  chart_data: Array<any>;
  charts: any[];

  constructor(
    private resortService: ResortService,
    private messageService: MessageService
  ) {
    this.resorts = [];
    this.chart_data = [];
    this.charts = [];
  }

  ngOnInit() {
    this.messageService.add("<-- Course Chart Init -->");
    this.resorts = this.resortService.getResorts();
    this.setDataFromResorts();
  }

  ngOnChanges(): void {
    this.resorts = this.resortService.getResorts();
    this.setDataFromResorts();
    this.updateCharts();
  }

  ngAfterViewInit(): void {
    this.loadCharts();
  }

  setDataFromResorts(): void {
    let courses = [];
    let data_trails = new PlotlyData({x:[], y:[], name:'TRAILS', type:'bar'});
    let data_lifts = new PlotlyData({x:[], y:[], name:'LIFTS', type:'bar'});
    let data_acres = new PlotlyData({x:[], y:[], name:'ACRES', type:'bar'});

    this.resorts.forEach(function(resort){
      courses.push(resort.name);
      data_trails.y.push(resort.lifts);
      data_lifts.y.push(resort.trails);
      data_acres.y.push(resort.acres);
    });
    data_trails.x = courses;
    data_lifts.x = courses;
    data_acres.x = courses;

    let data_0 = [data_trails, data_lifts];
    let data_1 = [data_acres];

    this.chart_data = [data_0, data_1];
  }

  loadCharts(): void {
    // need to read from data, init charts, and store chart instances to this.charts
    if(this.chart_data && this.chart_data.length > 0) {
      let data_0 = this.chart_data[0];
      let data_1 = this.chart_data[1];
      let layout_0 = {title: 'Number of Trails and Lifts per Resort', barmode: 'group'};
      let layout_1 = {title: 'Number of Acres per Resort', barmode: 'group'};

      let chart_0 = Plotly.newPlot('chart_div_0', data_0, layout_0);
      let chart_1 = Plotly.newPlot('chart_div_1', data_1, layout_1);

      this.charts = [chart_0,chart_1];
    } else {
      let msg = "COURSE-CHART-DETAIL: NO DATA AND NO CHARTS?";
      this.messageService.add(msg);
      console.log(msg, this.chart_data, this.charts);
    }
  }

  updateCharts(): void {
    // eventually, this update should check each chart and only update the with the updated data set
    this.loadCharts();
  }
}
