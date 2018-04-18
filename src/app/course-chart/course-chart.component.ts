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

  data: any[];

  constructor(private resortService: ResortService) {
    this.data = [];
    /*
    this issue is that I need an event or set of logic that fires after the section has been triggered.  the google charts need to initialized and loaded AFTER we switch to this panel/section.  There's no known event for that.  ngOnInit() may not be good becasue I'm not using an router....  (maybe)
    */
  }

  ngOnInit() {
    console.log("COURSE_CHART:ngOnInit");
    this.resorts = this.resortService.getResorts();
    this.setDataFromResorts();
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

    let data_0 = [data_trails, data_lifts];
    let data_1 = [data_acres];

    this.data = [data_0, data_1];
  }

  // may need throttling
  ngOnChanges(): void {
    console.log("COURSE_CHART:ngOnChanges");
    this.resorts = this.resortService.getResorts();
    this.setDataFromResorts();
  }

  isActiveSection(sectionName: string): boolean {
    return (this.activeSection == sectionName);
  }
}
