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
  selectedResort: Resort;

  constructor(private resortService: ResortService) { }

  ngOnInit() {
    // this.getResorts();
  }

  ngOnChanges(): void {
    this.resorts = this.resortService.getResorts();
  }

  onSelect(resort: Resort): void {
    this.selectedResort = resort;
  }

  isSelected(resort: Resort): boolean {
    return (resort === this.selectedResort);
  }

  getResorts(): void {
    console.log(this.resorts)
    if(this.resorts === undefined){
      this.resorts = this.resortService.getResorts();
    }
  }

  isActiveSection(sectionName: string): boolean {
    return (this.activeSection == sectionName);
  }

}
