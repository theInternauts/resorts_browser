import { Component, OnInit, Input }   from '@angular/core';
import { Resort }                     from '../resort';
import { ResortService }              from '../resort.service';

@Component({
  selector: 'app-course-chart',
  templateUrl: './course-chart.component.html',
  styleUrls: ['./course-chart.component.css']
})
export class CourseChartComponent implements OnInit {
  @Input() resorts: Resort[];
  @Input() activeSection: string;
  // charts: Array<any>; //delete me when i delete Plotly functions later on
  data: any[];
  isChartInitialized: boolean;

  constructor(private resortService: ResortService) {
    this.isChartInitialized = false;
    this.data = [];
    // this.charts = [];
    /*
    this issue is that I need an event or set of logic that fires after the section has been triggered.  the google charts need to initialized and loaded AFTER we switch to this panel/section.  There's no known event for that.  ngOnInit() may not be good becasue I'm not using an router....  (maybe)
    */
  }

  ngOnInit() {
    console.log("COURSE_CHART:ngOnInit");
    this.getResorts();
    this.setDataFromResorts();
    // call function to format data?

  }

  buildAndReturnDataSet(): any[] {
    let courses = ["Kirkwood", "Sierra at Tahoe", "Heavenly Mountain Resort", "Squaw Valley", "Northstar California", "Homewood Mountain Resort", "Donner Ski Ranch", "Soda Springs", "Sugar Bowl"];
    let data_trails = {
      x: courses,
      y: [86, 46, 94, 170, 100, 67, 52, 5, 98],
      name: 'TRAILS',
      type: 'bar'
    };

    let data_lifts = {
      x: courses,
      y: [15, 14, 27, 29, 20, 8, 6, 2, 12],
      name: 'LIFTS',
      type: 'bar'
    };

    let data_acres = {
      x: courses,
      y: [2300, 2000, 4630, 3600, 3170, 1260, 500, 300, 1650],
      name: 'ACRES',
      type: 'bar'
    };

    let data_0 = [data_trails, data_lifts];
    let data_1 = [data_acres];

    return [data_0, data_1];
  }

  setDataFromResorts(): void {
    console.log("COURSE_CHART:setDataFromResorts");
    let courses = [];
    let data_trails = {x: courses, y: [], name: 'TRAILS', type: 'bar'};
    let data_lifts = {x: courses, y: [], name: 'LIFTS', type: 'bar'};
    let data_acres = {x: courses, y: [], name: 'ACRES', type: 'bar'};
    this.resorts.forEach(function(resort){
      courses.push(resort.name);
      data_trails.y.push(resort.lifts);
      data_lifts.y.push(resort.trails);
      data_acres.y.push(resort.acres);
    })
    data_trails.x = courses;
    data_lifts.x = courses;
    data_acres.x = courses;
    // let courses = ["Kirkwood", "Sierra at Tahoe", "Heavenly Mountain Resort", "Squaw Valley", "Northstar California", "Homewood Mountain Resort", "Donner Ski Ranch", "Soda Springs", "Sugar Bowl"];
    // let data_trails = {
    //   x: courses,
    //   y: [86, 46, 94, 170, 100, 67, 52, 5, 98],
    //   name: 'TRAILS',
    //   type: 'bar'
    // };

    // let data_lifts = {
    //   x: courses,
    //   y: [15, 14, 27, 29, 20, 8, 6, 2, 12],
    //   name: 'LIFTS',
    //   type: 'bar'
    // };

    // let data_acres = {
    //   x: courses,
    //   y: [2300, 2000, 4630, 3600, 3170, 1260, 500, 300, 1650],
    //   name: 'ACRES',
    //   type: 'bar'
    // };

    let data_0 = [data_trails, data_lifts];
    let data_1 = [data_acres];

    this.data = [data_0, data_1];
  }

  convertResortsToChartData(item): void {

  }

  ngOnChanges(): void {
    console.log("COURSE_CHART:ngOnChanges");
    // this may be redundant (except for first load) :()
    this.resorts = this.resortService.getResorts();
    this.setDataFromResorts();
    // call function to format data?
    // this.updateCharts(); (using recently updated & formatted data)
    // may need debouncing
    if (this.isChartInitialized) {
      // this.updatePlotlyCharts();
    }
  }

  update(): void {
    this.data = this.buildAndReturnDataSet();
  }

  getData(): any[] {
    return this.data;
  }

  ngAfterViewInit(): void {
    // console.log("COURSE_CHART:ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    // this.data = this.buildAndReturnDataSet();
    // console.log("COURSE_CHART:ngAfterViewChecked");
    // this.updateCharts();
    // unless flag true init/update chart and set flag to true
    if (!this.isChartInitialized) {
      // this.loadGoogleCharts();
      // this.charts = this.loadPlotlyCharts();
      // this.isChartInitialized = true;
    }
  }

  getResorts(): void {
    console.log("COURSE_CHART:RESORTS: ", this.resorts);
    if(this.resorts === undefined){
      this.resorts = this.resortService.getResorts();
    }
  }

  isActiveSection(sectionName: string): boolean {
    return (this.activeSection == sectionName);
  }

  loadPlotlyCharts(): any[] {
    console.log("charting.....");
    let courses = ["Kirkwood", "Sierra at Tahoe", "Heavenly Mountain Resort", "Squaw Valley", "Northstar California", "Homewood Mountain Resort", "Donner Ski Ranch", "Soda Springs", "Sugar Bowl"];
    let data_trails = {
      x: courses,
      y: [86, 46, 94, 170, 100, 67, 52, 5, 98],
      name: 'TRAILS',
      type: 'bar'
    };

    let data_lifts = {
      x: courses,
      y: [15, 14, 27, 29, 20, 8, 6, 2, 12],
      name: 'LIFTS',
      type: 'bar'
    };

    let data_acres = {
      x: courses,
      y: [2300, 2000, 4630, 3600, 3170, 1260, 500, 300, 1650],
      name: 'ACRES',
      type: 'bar'
    };

    let data_0 = [data_trails, data_lifts];
    let data_1 = [data_acres];
    let layout = {barmode: 'group'};

    let chart_0 = Plotly.newPlot('chart_div_0', data_0, layout);
    let chart_1 = Plotly.newPlot('chart_div_1', data_1, layout);

    return [chart_0,chart_1];
  }

  updatePlotlyCharts(): void {
    console.log("updating Plotly Charts");
    // this.charts = this.loadPlotlyCharts();
  }
}
